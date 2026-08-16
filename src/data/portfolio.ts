// ============================================================================
// PORTFOLIO CONTENT CONFIG
// Edit this file to update every piece of content on the site.
// Fields marked YOUR_* are placeholders — replace with real values.
// ============================================================================

export const profile = {
  name: "Sridar M",
  initials: "SM",
  role: "Full Stack Developer & Applied Machine Learning",
  location: "Chennai, Tamil Nadu",
  email: "sridarsridar2006@gmail.com",
  phone: "8056752027",
  linkedin: "https://www.linkedin.com/in/sridar-sri-2a7a69327",
  github: "https://github.com/sridarsridar2006-hash",
  resumeFile: "/Sridar_M_Resume.pdf",
  avatarUrl: "/profile-photo.jpg",
  headline: "Full Stack Developer & Machine Learning Enthusiast",
  subheadline:
    "I build backend systems that hold up under real use, and machine learning models that turn raw data into working predictions.",
  summary:
    "Pre-final-year Information Technology student with a strong interest in backend development. Proficient in Java, with working knowledge of Python and SQL, and hands-on experience shipping full-stack and machine learning projects — from FastAPI services to computer-vision pipelines. Eager to bring that same rigor to a full-time engineering or data role.",
};

export type SkillCategory = {
  title: string;
  note?: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "Java", "SQL"],
  },
  {
    title: "Web",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Google Colab", "GitHub", "Canva", "Excel"],
  },
  {
    title: "Core Focus Area",
    note: "Primary area of interest and current specialization",
    skills: ["Backend Development,Frontend Development"],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  workflow: string[];
  features: string[];
  demonstrates: string[];
  metricNote: string;
  github: string;
  demo?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "lifeguide-ai",
    title: "LifeGuide AI — Intelligent Predictive Daily Assistant",
    category: "Machine Learning / Full Stack",
    tagline: "An AI-powered assistant that turns daily habits into personalized guidance.",
    problem:
      "People juggling daily routines rarely get recommendations tailored to their own patterns — most planning tools are static checklists, not adaptive systems.",
    solution:
      "LifeGuide AI pairs a FastAPI backend with a React front end to deliver personalized daily guidance, using machine learning to generate smart, data-driven recommendations rather than fixed rules.",
    technologies: ["Python", "FastAPI", "React.js", "MySQL"],
    workflow: [
      "User Input",
      "Data Processing (FastAPI)",
      "ML Recommendation Engine",
      "MySQL Storage",
      "Personalized Guidance (React UI)",
    ],
    features: [
      "Personalized daily recommendations",
      "ML-driven suggestion engine",
      "FastAPI backend service layer",
      "Relational data storage in MySQL",
      "React-based interactive interface",
    ],
    demonstrates: [
      "End-to-end full-stack architecture",
      "REST API design with FastAPI",
      "Applying ML to real-world recommendation problems",
      "Frontend–backend integration",
      "Relational database design",
    ],
    metricNote: "Model evaluation metric — available in project documentation",
    github: "https://github.com/sridarsridar2006-hash",
    featured: true,
  },
  {
    id: "toxicity-detector",
    title: "Social Media Toxicity and Hate Speech Early Detector",
    category: "Machine Learning / NLP",
    tagline: "An NLP system that flags toxic and hate speech before it spreads.",
    problem:
      "Manual content moderation cannot keep pace with the volume of toxic and hateful content posted on social platforms, letting harmful content stay visible for longer than it should.",
    solution:
      "An NLP-based classification system trained to detect toxic and hate speech patterns in text, built to support faster, more consistent content moderation.",
    technologies: ["Python", "Scikit-learn", "NLTK", "TensorFlow"],
    workflow: [
      "Raw Text Data",
      "Text Preprocessing (NLTK)",
      "Feature Extraction",
      "Model Training (Scikit-learn / TensorFlow)",
      "Toxicity Classification",
    ],
    features: [
      "Text preprocessing and cleaning pipeline",
      "NLP-based feature extraction",
      "Trained classification model",
      "Toxic / hate-speech detection output",
    ],
    demonstrates: [
      "Natural language processing fundamentals",
      "Text classification with Scikit-learn and TensorFlow",
      "Handling imbalanced, real-world text data",
      "Applying ML to content moderation problems",
    ],
    metricNote: "Model evaluation metric — available in project documentation",
    github: "https://github.com/sridarsridar2006-hash",
    featured: true,
  },
  {
    id: "flood-survival-yolo",
    title: "Flood Survival Detection Using YOLO",
    category: "Machine Learning / Computer Vision",
    tagline: "Real-time computer vision to help locate flood survivors faster.",
    problem:
      "During flood disasters, manually scanning footage or images to locate survivors is slow, and delays in response can cost lives.",
    solution:
      "A YOLOv8-based object detection model that identifies flood survivors in real time from image and video input, built to support faster disaster-response decisions.",
    technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
    workflow: [
      "Image / Video Input",
      "Preprocessing (OpenCV)",
      "YOLOv8 Object Detection",
      "Survivor Localization",
      "Real-Time Output",
    ],
    features: [
      "Real-time object detection with YOLOv8",
      "Image and video frame preprocessing with OpenCV",
      "PyTorch-based model pipeline",
      "Survivor localization output for response teams",
    ],
    demonstrates: [
      "Computer vision and object detection",
      "Working with YOLOv8 and PyTorch",
      "Real-time inference pipelines",
      "Applying ML to disaster-response scenarios",
    ],
    metricNote: "Model evaluation metric — available in project documentation",
    github: "https://github.com/sridarsridar2006-hash",
    featured: true,
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction using Machine Learning",
    category: "Machine Learning / Data Analytics",
    tagline: "Predicting property prices from historical housing data.",
    problem:
      "Property pricing can be difficult to estimate accurately because multiple factors — location, size, amenities, and market conditions — influence the final price.",
    solution:
      "A machine learning model analyzes historical housing data and learns the relationships between property features and sale price to generate price predictions for new listings.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    workflow: [
      "Dataset",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Model Training",
      "Model Evaluation",
      "Price Prediction",
    ],
    features: [
      "Data cleaning and preprocessing pipeline",
      "Exploratory data analysis with visualizations",
      "Feature engineering on property attributes",
      "Regression-based price prediction model",
    ],
    demonstrates: [
      "Data preprocessing and cleaning",
      "Exploratory data analysis",
      "Feature engineering",
      "Regression modeling with Scikit-learn",
      "Model evaluation methodology",
    ],
    metricNote: "Model evaluation metric — available in project documentation",
    github: "https://github.com/sridarsridar2006-hash",
    featured: true,
  },
  {
    id: "blood-bank-system",
    title: "Online Blood Bank Management System",
    category: "Full Stack / Web Application",
    tagline: "A demo platform connecting donors, recipients, and blood availability data.",
    problem:
      "Coordinating blood donation and availability across donors, recipients, and blood banks is often manual and disorganized, making it hard to find matching blood quickly.",
    solution:
      "A full-stack web application (demo / academic project) where donors register, recipients search for available blood by group, and administrators manage requests and inventory through a dedicated dashboard. It is presented here as a project build, not a system connected to real hospitals or blood banks.",
    technologies: ["HTML", "CSS", "JavaScript", "SQL", "MySQL"],
    workflow: [
      "Donor Registration",
      "Blood Group Management",
      "Availability Tracking",
      "Recipient Search",
      "Blood Request",
      "Admin Management",
    ],
    features: [
      "Donor registration and profile management",
      "Blood group and availability tracking",
      "Recipient search and filter by blood group",
      "Blood request submission and tracking",
      "Admin dashboard for managing donors and requests",
    ],
    demonstrates: [
      "Application design and user workflows",
      "Relational database design",
      "CRUD operations",
      "Frontend–backend integration",
      "Solving a real-world coordination problem",
    ],
    metricNote: "Model evaluation metric — available in project documentation",
    github: "https://github.com/sridarsridar2006-hash",
    featured: true,
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  score: string;
};

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) — Information Technology",
    institution: "Jeppiaar Institute of Technology",
    duration: "2024 – 2028",
    score: "CGPA: 8.40",
  },
  {
    degree: "Higher Secondary (XII)",
    institution: "Sri Saraswathi Matric Hr. Sec. School, Panapakkam",
    duration: "2022",
    score: "85%",
  },
  {
    degree: "Secondary (X)",
    institution: "Sri Saraswathi Matric Hr. Sec. School, Panapakkam",
    duration: "2024",
    score: "80%",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Web Development Intern",
    company: "Elysium Technologies",
    duration: "May 2025",
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Retech Solutions Pvt. Ltd.",
    duration: "December 2025",
  },
];

export type Certification = {
  name: string;
  issuer?: string;
  year?: string;
};

export const certifications: Certification[] = [
  {
    name: "Workshop on Data Visualization using Power BI",
  },
  {
    name: "\u201cAlumni Portal\u201d — International Conference on Mechanical, Information and Communication (ICMIC-2024)",
    issuer: "24–25 November 2024",
  },
  {
    name: "International Conference on Cognitive Informatics, Engineering and Technology",
    issuer: "2026",
  },
];

export const languages = ["English", "Tamil"];

export const howIThink = [
  {
    step: "01",
    title: "Understand",
    description:
      "Before touching code, I map the real problem — whether that's how a recommendation should feel personalized, or how blood availability actually needs to be tracked.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "I turn that understanding into a working system — a FastAPI service, a trained model, a full-stack app — choosing the simplest stack that solves the problem well.",
  },
  {
    step: "03",
    title: "Improve",
    description:
      "I test against real data and real use, then refine — cleaner features, better structure, a model that generalizes instead of just fitting the training set.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// Configure one of these to make the contact form functional.
// Formspree: set formspreeEndpoint to "https://formspree.io/f/your-id"
// EmailJS: fill serviceId / templateId / publicKey
export const contactConfig = {
  formspreeEndpoint: "", // e.g. "https://formspree.io/f/xxxxxxx"
  emailJs: {
    serviceId: "",
    templateId: "",
    publicKey: "",
  },
};
