export const personalInfo = {
  name: "Manish Kumar Yadav",
  title: "Software Development Engineer",
  tagline: "Building scalable systems and exceptional user experiences",
  email: "my675890@gmail.com",
  phone: "+91 8948772708",
  location: "Jamshedpur, India",
  linkedin: "https://www.linkedin.com/in/manish-yadav-7b8b5a1b0",
  github: "https://github.com/maniishh",
  resumeUrl: "#",
 summary: "Full-stack developer skilled in building scalable MERN applications with a strong foundation in data structures and system design. Experienced in developing real-world projects with authentication, media handling, and production deployment. Focused on performance, clean architecture, and solving complex problems efficiently.",
  profileImage: "",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 75 },
      { name: "Python", level: 70 },
      { name: "MongoDB", level: 75},
      { name: "C++", level: 90 },
      { name: "PostgreSQL", level: 70},
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React / Express.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
      { name: "React Native", level: 70 },
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "Node.js / Express", level: 93 },
      { name: "Docker / Kubernetes", level: 65 },
      { name: "AWS (EC2, Lambda, S3)", level: 65 },
      { name: "PostgreSQL / MongoDB", level: 87 },
      { name: "Redis", level: 70 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD (GitHub Actions)", level: 90 },
      { name: "System Design", level: 70 },
    ],
  },
];

export const projects = [
  {
    title: "StreamHive",
    description: "A full-stack video streaming platform enabling users to upload, stream, and interact with content in real-time. Built with modern MERN architecture and optimized for scalable media delivery.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/maniishh/Streamhive",
    demo: "https://streamhive-gray.vercel.app",
    highlights: [
      "Implemented secure authentication using JWT with protected routes",
      "Integrated Cloudinary for efficient video upload and streaming",
      "Designed RESTful APIs for content management and user interactions",
      "Optimized frontend performance with lazy loading and efficient state handling",
      "Handled CORS, deployment, and environment configs for production readiness"
    ],
  },

  {
    title: "TradeEdge",
    description: "A stock trading simulation platform that allows users to practice trading strategies with real-time-like data and portfolio tracking features.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    github: "https://github.com/maniishh/tradeedge",
    demo: "",
    highlights: [
      "Built portfolio management system with buy/sell simulation",
      "Implemented dynamic price updates and profit/loss tracking",
      "Visualized data using charts for better trading insights",
      "Designed scalable backend structure for handling user transactions",
      "Focused on clean UI/UX for intuitive trading experience"
    ],
  },

  {
    title: "Algofy",
    description: "A data structures and algorithms practice platform featuring categorized problems and optimized solutions to improve problem-solving skills.",
    tags: ["C++", "DSA", "Algorithms"],
    github: "https://github.com/maniishh/algofy",
    demo: "",
    highlights: [
      "Implemented optimized solutions for common DSA problems",
      "Covered topics like arrays, strings, recursion, and dynamic programming",
      "Focused on time and space complexity optimization",
      "Structured repository for easy navigation and learning",
      "Used consistent coding patterns for clarity and reuse"
    ],
  }
];

export const experiences = [
  {
    company: "Personal Project",
    role: "Full Stack Developer (StreamHive)",
    period: "2025 – Present",
    location: "Remote",
    type: "Project",
    description: "Built and deployed a full-stack video streaming platform using MERN stack.",
    bullets: [
      "Developed RESTful APIs for video upload, user authentication, and content management",
      "Integrated Cloudinary for scalable media storage and streaming",
      "Implemented JWT-based authentication with protected routes",
      "Deployed frontend on Vercel and backend with production configuration",
      "Handled CORS, environment variables, and API integration in real-world setup"
    ],
  },
  {
    company: "Personal Project",
    role: "Full Stack Developer (TradeEdge)",
    period: "2025",
    location: "Remote",
    type: "Project",
    description: "Built a stock trading simulation platform with portfolio tracking.",
    bullets: [
      "Implemented buy/sell simulation with dynamic portfolio updates",
      "Visualized trading data using charts for performance tracking",
      "Designed backend structure for handling transactions and user data",
      "Focused on responsive UI for better user experience"
    ],
  }
];
export const education = [
  {
    institution: "NIT Jamshedpur",
    degree: "B.Tech in Electrical Engineering",
    period: "2023 – 2027",
    gpa: "7.71",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Object-Oriented Programming"
    ],
  },
];

export const certifications = [
  {
    name: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2024",
  },
  {
    name: "MERN Stack Development",
    issuer: "Udemy",
    year: "2024",
  },
];

export const achievements = [
  {
    title: "DSA Problem Solving",
    description: "Solved 500+ problems across LeetCode(rating 1800), Codeforces, and GeeksforGeeks with focus on algorithms and optimization techniques",
    year: "2025",
  },
  {
    title: "Smart India Hackathon 2024",
    description: "Participated in national-level hackathon, collaborating in a team to design and develop innovative solutions",
    year: "2024",
  },
  {
    title: "Pixel Sync Hackathon Finalist",
    description: "Finalist at Pixel Sync Hackathon (OJASS, NIT Jamshedpur) among multiple competing teams",
    year: "2024",
  },
  {
    title: "Sparkathon 2025",
    description: "Competed in a national-level innovation competition focusing on real-world problem solving",
    year: "2025",
  },
];
