const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "+", label: "Major Projects" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 200, suffix: "+", label: "Code Commits" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png", // specific icon can be updated
    title: "IBM Certified in Predictive Modeling Fundamentals",
    desc: "Demonstrating expertise in predictive analytics techniques.",
  },
  {
    imgPath: "/images/chat.png",
    title: "IBM Certified in Data Science Foundations",
    desc: "Showcasing a strong foundation in data science principles and methodologies.",
  },
  {
    imgPath: "/images/time.png", // specific icon can be updated
    title: "TCS iON Certified in Data Analytics",
    desc: "Highlighting proficiency in data analysis and visualization with Excel.",
  },
  {
    imgPath: "/images/code.svg", // specific icon can be updated
    title: "Certified in DSA Training",
    desc: "From Internshala Trainings.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    imgPath: "/images/logos/react.png",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    imgPath: "/images/logos/node.png",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    imgPath: "/images/logos/git.svg",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Java",
    imgPath: "/images/logos/java.svg",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind.svg",
  },
];

const expCards = [
  {
    review: "Completed intensive training in software development fundamentals, focusing on full-stack technologies and industry best practices. Contributed to real-world projects under senior mentorship.",
    imgPath: "",
    logoPath: "/images/graduate.svg",
    title: "Software Engineer Trainee",
    company: "Pie Infocomm Pvt Ltd",
    date: "June 2024 - Dec 2024",
    responsibilities: [
      "Built dynamic, interactive UIs with React.js, implementing reusable components and state management using Redux.",
      "Assisted in developing scalable RESTful APIs using Node.js and Express.js.",
      "Worked with MongoDB to understand schema design, data modeling, and database operations.",
      "Collaborated on full-stack web applications using the MERN stack.",
    ],
  },
];

const expLogos = [
  {
    name: "pie",
    imgPath: "/images/graduate.svg",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Kushagra. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Kushagra was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Kushagra was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kushagra's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kushagra is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Kushagra was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Kushagra's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Kushagra was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/logos/github.svg",
    href: "https://github.com/codekushagra"
  },
  {
    name: "instagram",
    imgPath: "/images/insta.png",
    href: "https://www.instagram.com/hey.kushagra24/"
  },
  {
    name: "leetcode",
    imgPath: "/images/leetcode.png",
    href: "https://leetcode.com/u/aZFEvl7337/"
  },
];

const projects = [
  {
    title: "The Crochet Studio - E-Commerce Platform",
    desc: "Designed and developed a full-stack e-commerce platform for handcrafted crochet products, serving as a real client-facing business website.",
    subdesc:
      "Built with Node.js, Express.js, React.js, MongoDB, Stripe/Razorpay, and Cloudinary. Features Admin Dashboard and Role-Based Access.",
    href: "https://www.thecrochetstudio.online/",
    texture: "/textures/project/project2.mp4",
    img: "/images/project2.png",
    logo: "/images/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/images/logos/react.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/images/logos/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/images/logos/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/images/logos/framer.png",
      },
    ],
  },
  {
    title: "Smart Learning Platform",
    desc: "Designed and developed a full-stack e-learning platform featuring real-time progress tracking, interactive course modules, and structured learning flows for users.",
    subdesc:
      "Built with Node.js, Express.js, React.js, MongoDB, Razorpay Payment Gateway, and Multer. Features MFA and Role-Based Access Control.",
    href: "https://e-learning-frontend-phi-peach.vercel.app/",
    texture: "/textures/project/project1.mp4",
    img: "/images/project1.png",
    logo: "/images/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/images/logos/react.png",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/images/logos/node.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/images/logos/mongodb.svg",
      },
    ],
  },
  {
    title: "AI-Enabled Smart Waste Management System",
    desc: "Built a full-stack AI-enabled platform allowing users to upload waste details, schedule collections, and track disposal activities digitally.",
    subdesc:
      "Tech Stack: React.js, Node.js, Express.js, MongoDB, Gemini API, Web3 Authentication. Features AI-driven insights and credit-based incentives.",
    href: "#",
    texture: "/textures/project/project3.mp4",
    img: "/images/project3.png",
    logo: "/images/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/images/logos/react.png",
      },
      {
        id: 2,
        name: "Gemini API",
        path: "/images/logos/google.png", // Ensure this path exists
      },
      {
        id: 3,
        name: "Web3",
        path: "/images/logos/web3.png", // Ensure this path exists
      },
    ],
  },
  {
    title: "Viveka 4.0",
    desc: "Engineered the official website for the Annual Tech Fest of Shri Ramswaroop Memorial University under Tech Fusion Club.",
    subdesc:
      "Managed multiple events and handling 1500+ user registrations efficiently using React.js and Tailwind CSS.",
    href: "#",
    texture: "/textures/project/project4.mp4",
    img: "/images/project4.png",
    logo: "/images/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E1F38",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/images/logos/react.png",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/images/logos/tailwind.png",
      },
    ],
  },
];

const education = [
  {
    id: 1,
    name: "Shri Ramswaroop Memorial University",
    pos: "Bachelor of Technology in Computer Science Engineering (CGPA 8.3)",
    duration: "Sep 2022 - Dec 2026",
    title: "Education",
    icon: "/images/srmu (2).jpg",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    id: 2,
    name: "St. Xaviers Public School",
    pos: "Intermediate (10+2) - Aggregate 80%",
    duration: "July 2020 - March 2022",
    title: "Education",
    icon: "/images/full-time.svg",
    location: "Completed Class 10 & 11 from Faridabad, Haryana; relocated due to COVID-19",
  },
  {
    id: 3,
    name: "Tagore Public School",
    pos: "High School - Aggregate 87%",
    duration: "April 2019 - March 2020",
    title: "Education",
    icon: "/images/full-time.svg",
    location: "Faridabad, Haryana",
  },
];

const achievements = [
  "Participated in Smart India Hackathon (SIH) 2025",
  "Zonal-Level Event Coordinator for COZMO CLENCH at Technorion'23",
  "Assistant Coordinator at Tech Fusion Club (Mar 2023 - Apr 2024)",
  "Event Coordinator for Viveka 3.0 and Viveka 4.0",
  "Technical Head for Freshers'22 and Freshers'23",
  "Served as the Co-Curricular Prefect in the Student Council",
];

const mySkills = [
  {
    id: 1,
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "/images/logos/c.svg" },
      { name: "JavaScript", icon: "/images/logos/javascript.svg" },
      { name: "Java", icon: "/images/logos/java.svg" },
    ],
  },
  {
    id: 2,
    title: "Web Technologies",
    skills: [
      { name: "HTML", icon: "/images/logos/html.svg" },
      { name: "CSS", icon: "/images/logos/css.svg" },
      { name: "Tailwind CSS", icon: "/images/logos/tailwind.svg" },
      { name: "React.js", icon: "/images/logos/react.png" },
      { name: "Redux", icon: "/images/logos/redux.svg" },
      { name: "Next.js", icon: "/images/logos/nextjs.svg" },
    ],
  },
  {
    id: 3,
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: "/images/logos/node.png" },
      { name: "Express.js", icon: "/images/logos/express.svg" },
      { name: "REST API", icon: "/images/code.svg" }, // Placeholder
      { name: "MongoDB", icon: "/images/logos/mongodb.svg" },
      { name: "MySQL", icon: "/images/logos/mysql.svg" },
      { name: "Spring Boot", icon: "/images/logos/spring.svg" },
    ],
  },
  {
    id: 4,
    title: "Authentication & Security",
    skills: [
      { name: "JWT", icon: "/images/logos/jwt.svg" },
      { name: "Clerk", icon: "/images/code.svg" }, // Placeholder
    ],
  },
  {
    id: 5,
    title: "Tools & Version Control",
    skills: [
      { name: "Git", icon: "/images/logos/git.svg" },
      { name: "GitHub", icon: "/images/logos/github.svg" },
      { name: "Postman", icon: "/images/logos/postman.svg" },
      { name: "VS Code", icon: "/images/logos/vscode.svg" },
    ],
  },
  {
    id: 6,
    title: "Data Analysis & Visualization",
    skills: [
      { name: "IBM Watson Studio", icon: "/images/logos/ibm.svg" },
      { name: "IBM SPSS Modeler", icon: "/images/logos/ibm.svg" },
      { name: "IBM Cognos", icon: "/images/logos/ibm.svg" },
      { name: "MS Excel", icon: "/images/logos/excel.svg" },
      { name: "Pandas", icon: "/images/logos/pandas.svg" },
      { name: "Matplotlib", icon: "/images/logos/matplotlib.svg" },
    ],
  },
  {
    id: 7,
    title: "Deployment & Hosting",
    skills: [
      { name: "Vercel", icon: "/images/logos/vercel.svg" },
      { name: "Render", icon: "/images/logos/render.png" },
      { name: "Netlify", icon: "/images/logos/netlify.svg" },
    ],
  },
  {
    id: 8,
    title: "Others",
    skills: [
      { name: "API Integration", icon: "/images/logos/api.png" },
      { name: "Cloudinary", icon: "/images/logos/cloudinary.svg" },
      { name: "Nodemailer", icon: "/images/logos/nodem.svg" },
      { name: "Brevo API", icon: "/images/logos/brevo.svg" },
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  education,
  achievements,
  mySkills,
};
