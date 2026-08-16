import { profile } from "../data/portfolio";

export function useProfilePhoto() {
  return {
    photoUrl: profile.avatarUrl || "/profile-photo.jpg",
  };
}

