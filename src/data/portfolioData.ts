export interface Skill {
  name: string;
  category: 'Languages' | 'Computer Fundamentals' | 'Frameworks' | 'Tools';
  level: number; // 0-100 percentage
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  category: 'Java/Backend' | 'AI & DS' | 'Hardware/Embedded';
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  videoUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  details?: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpaOrPercentage?: string;
  details?: string[];
}

export const personalInfo = {
  name: 'Tushar Sanjay Shinde',
  title: 'B.E. - Artificial Intelligence & Data Science',
  tagline: 'Passionate Backend Developer & AI/DS Undergraduate specializing in Java, Spring Boot, and Automation.',
  phone: '+91-7559133872',
  email: 'shindet816@gmail.com',
  github: 'https://github.com/TushShinde05',
  linkedin: 'https://www.linkedin.com/in/tushar-shinde-110558318/',
  location: 'Pune, Maharashtra, India - 411018',
  aboutMe: 'Artificial Intelligence and Data Science undergraduate with strong foundations in Java, Data Structures & Algorithms, Object-Oriented Programming, DBMS, SQL, and Operating Systems. Actively exploring software development through academic projects and Java Developer internships. Skilled in Git, GitHub, Postman, Docker, and Kubernetes, with a keen interest in backend development, modern software engineering practices, and contributing to open-source systems.',
  resumeUrl: '/resume.pdf'
};

export const skillsData: Skill[] = [
  // Languages
  { name: 'C/C++', category: 'Languages', level: 85 },
  { name: 'Java', category: 'Languages', level: 90 },
  { name: 'Python', category: 'Languages', level: 80 },
  { name: 'SQL', category: 'Languages', level: 85 },
  
  // Computer Fundamentals
  { name: 'OOP (Object Oriented Programming)', category: 'Computer Fundamentals', level: 90 },
  { name: 'OS (Operating Systems)', category: 'Computer Fundamentals', level: 80 },
  { name: 'DBMS (Database Management Systems)', category: 'Computer Fundamentals', level: 85 },
  { name: 'DSA (Data Structures & Algorithms)', category: 'Computer Fundamentals', level: 85 },

  // Frameworks
  { name: 'Spring Boot', category: 'Frameworks', level: 85 },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 88 },
  { name: 'Postman', category: 'Tools', level: 82 },
  { name: 'Docker', category: 'Tools', level: 78 },
  { name: 'Kubernetes', category: 'Tools', level: 72 },
  { name: 'VS Code', category: 'Tools', level: 88 },
  { name: 'IntelliJ IDEA', category: 'Tools', level: 85 },
  { name: 'Antigravity', category: 'Tools', level: 90 }
];

export const experienceData: Experience[] = [
  {
    role: 'Java Developer Intern',
    company: 'EliteTech Intern',
    location: 'Remote',
    period: 'Jan 09, 2026 - Feb 08, 2026',
    description: [
      'Completed a 4-week Java Developer Internship developing real-world applications using Java, REST APIs, multithreading, and networking concepts.',
      'Designed and built projects including a REST API Client, Multithreaded Chat Application, and an AI-Based Recommendation System.',
      'Strengthened OOP concepts, socket programming, file handling, and JSON processing capabilities.'
    ],
    skills: ['Java Programming', 'Socket Programming', 'REST API Integration', 'Multithreading', 'JSON Processing', 'File Handling']
  }
];

export const educationData: Education[] = [
  {
    degree: 'B.E. - Artificial Intelligence & Data Science',
    school: 'Dr. D. Y. Patil Institute of Technology, Pimpri, Pune',
    period: '2023 - 2027',
    gpaOrPercentage: 'CGPA: 8.59 / 10',
    details: [
      'Specializing in Artificial Intelligence, Neural Networks, Deep Learning, and Advanced Data Analysis.',
      'Maintained academic excellence while actively participating in hackathons and coding events.'
    ]
  },
  {
    degree: '12th (HSC)',
    school: 'D.K. More Janta Junior College, Vadgaon Pan, Sangamner, Ahmednagar',
    period: '2023',
    gpaOrPercentage: 'Percentage: 73.17 / 100',
    details: ['Board: MSBSHSE. Focused on Physics, Chemistry, and Mathematics.']
  },
  {
    degree: '10th (SSC)',
    school: 'D.K. More Janta Vidyalaya, Vadgaon Pan, Ahmednagar',
    period: '2021',
    gpaOrPercentage: 'Percentage: 82.00 / 100',
    details: ['Board: MSBSHSE. Graduated with distinction.']
  }
];

export const projectsData: Project[] = [
  {
    id: 'robotic-arm-segregation',
    title: 'AI-Driven Robotic Arm for Automated Waste Segregation',
    subtitle: 'Computer Vision & Deep Learning Embedded System',
    description: 'An AI-driven robotic arm system for automated waste segregation using real-time Computer Vision and Deep Learning.',
    detailedDescription: 'Developed an automated sorting system in a team of 5 under the mentorship of Mrs. Jyotsna Barpute. The system classifies waste in real-time into biodegradable and non-biodegradable categories using Convolutional Neural Networks (CNN) in Python, and drives an Arduino-controlled robotic arm via serial communication to execute pickup and segregation routines.',
    tags: ['Python', 'Convolutional Neural Networks (CNN)', 'Arduino', 'Embedded Systems', 'Serial Communication', 'Computer Vision'],
    category: 'Hardware/Embedded',
    features: [
      'Real-time waste classification using Deep Learning image processing.',
      'Automated Pick-and-Place sorting driven by classification results.',
      'Arduino and stepper/servo motor integration via Python serial library.',
      'Collaborative team effort involving 5 members and academic mentorship.'
    ],
    image: 'waste_segregation_dashboard',
    videoUrl: '/waste-segregation-demo.mp4',
    githubUrl: 'https://github.com/TushShinde05/AI-Driven-Robotic-Arm-for-Automated-Waste-Segregation'
  }
];

export const certificationsData: Certification[] = [
  {
    name: 'Complete Generative AI Course With LangChain and Hugging Face',
    issuer: 'Udemy',
    date: '2025',
    details: 'Completed comprehensive course covering LangChain, Hugging Face, Large Language Models (LLMs), and AI application development using Python.'
  },
  {
    name: 'AI for Students: Build Your Own Generative AI Model',
    issuer: 'NxtWave',
    date: '2025',
    details: 'Completed workshop focused on Generative AI applications, prompt engineering, and machine learning basics.'
  },
  {
    name: 'Employability Skill Development Program',
    issuer: 'RPG Foundation & Zensar Technologies',
    date: '2025',
    details: 'Completed professional training covering communication, teamwork, professional ethics, problem solving, and interview readiness.'
  },
  {
    name: 'Hack A Bit Participation',
    issuer: 'Google Developer Groups (GDG) On Campus – DIT Pimpri',
    date: '2025',
    details: 'Participated in the GDG Hack A Bit technical event demonstrating team collaboration and software innovation.'
  }
];

export const achievementsData: Achievement[] = [
  {
    title: 'Java Developer Internship Completion',
    description: 'Successfully completed a 4-week Java Developer Internship at EliteTech Intern, building API clients and multithreaded networking utilities.',
    date: 'Feb 2026'
  },
  {
    title: 'Academic Performance',
    description: 'Maintained a CGPA of 8.59/10 in B.E. (AI & DS) at Dr. D. Y. Patil Institute of Technology.',
    date: '2023 - Present'
  },
  {
    title: 'AI & IoT Project Implementations',
    description: 'Designed and deployed functional prototypes including the AI-driven waste sorting robotic arm.',
    date: '2026'
  },
  {
    title: 'Professional Skill Programs',
    description: 'Completed skill development and Generative AI certifications with RPG Foundation, NxtWave, and Udemy.',
    date: '2025'
  }
];
