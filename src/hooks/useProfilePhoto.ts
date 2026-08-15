import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";

const STORAGE_KEY = "user_uploaded_profile_photo";

export function useProfilePhoto() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;
    }
    return profile.avatarUrl || "/profile-photo.svg";
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    }
    return false;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPhotoUrl(stored);
        setIsCustom(true);
      } else {
        setPhotoUrl(profile.avatarUrl || "/profile-photo.svg");
        setIsCustom(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const uploadPhoto = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith("image/")) {
        reject(new Error("Selected file is not an image."));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            localStorage.setItem(STORAGE_KEY, result);
            setPhotoUrl(result);
            setIsCustom(true);
            resolve(result);
          } catch (err) {
            console.error("Failed to save image to localStorage:", err);
            // Even if localStorage fails due to quota, keep state in memory
            setPhotoUrl(result);
            setIsCustom(true);
            resolve(result);
          }
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotoUrl(profile.avatarUrl || "/profile-photo.svg");
    setIsCustom(false);
  };

  return {
    photoUrl,
    isCustom,
    uploadPhoto,
    resetPhoto,
  };
}
