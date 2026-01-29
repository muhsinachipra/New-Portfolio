export const resume = {
  name: "Muhsin Achipra",
  role: "Full Stack Developer",
  email: "muhsinachipra@gmail.com",
  phone: "+917593950878",
  links: {
    linkedin: "https://www.linkedin.com/in/muhsin-achipra/",
    github: "https://github.com/muhsinachipra",
    leetcode: "https://leetcode.com/u/muhsinachipra/",
  },
  summary:
    "Self-taught and results-driven Full Stack Developer with expertise in MERN stack, TypeScript, and scalable cloud deployments on AWS. Proven ability to deliver high-performance, production-ready applications, including optimizing legacy systems for 200% faster API responses and architecting scalable solutions from scratch. Adept at collaborating with cross-functional teams, resolving complex technical challenges, and consistently meeting tight deadlines. Passionate about clean code, modern development practices, and continuous learning.",

  aboutHighlight:
    // "I specialize in optimizing legacy systems and architecting scalable AWS solutions—from reducing database overhead and speeding up APIs to deploying production apps on EC2 with NGINX and Docker.",
    "I build scalable, high-performance web applications using the MERN Stack and AWS. With experience ranging from architecting complex booking systems to maximizing system efficiency, I turn technical challenges into seamless user experiences. Let's build something scalable together.",

  experience: [
    {
      id: "zoptal",
      company: "Zoptal Solutions Pvt. Ltd",
      location: "Punjab",
      title: "Full Stack Developer",
      period: "02/2025 – 10/2025",
      isLeadership: false,
      projects: [
        {
          name: "Foam (Car Washing Service)",
          isLeadership: true,
          leadershipTag: "Backend Lead",
          leadershipNote:
            "Orchestrated end-to-end development of a MERN-stack application and directed integration of complex features.",
          achievements: [
            "Complex Booking System: Multi-faceted booking engine with real-time slot availability, service selection, and dynamic scheduling.",
            "Subscription Payments: Integrated Stripe API for recurring billing, secure payments, and user plan management.",
            "Admin Panel Dashboard: Data-driven dashboard with revenue, user growth, and booking trend visualizations.",
            "Automated Notifications: Cron jobs for booking reminders, payment confirmations, and subscription updates.",
            "Full-Stack UX: User-side and admin-side development, including site-wide dark mode.",
            "Performance: Third-party driver APIs and Redis caching to reduce latency and external API calls.",
          ],
        },
        {
          name: "ClimateMeet (Event Booking Platform)",
          isLeadership: false,
          performanceBoost: true,
          performanceLabel: "200% Performance Boost",
          achievements: [
            "Optimized legacy MERN stack with heavy tech debt; achieved 200% API performance improvement.",
            "Reduced database overhead: restructured schema, delayed slot creation until booking, simplified relations, added indexes.",
            "Optimized MongoDB queries for datasets exceeding 50K events.",
          ],
        },
        {
          name: "PassionFlow (Social Media Platform)",
          isLeadership: false,
          achievements: [
            "Core features: posting fashions, following users, interaction feeds.",
            "Admin panel with React, Vite, and Bootstrap.",
          ],
        },
        {
          name: "GutterMonkeys (Service Booking)",
          isLeadership: false,
          achievements: [
            "Stripe payment gateway with saved cards, refunds, and subscriptions.",
            "Google Play and Apple Pay in-app purchase integrations.",
            "Multiple admin panels and dashboards for mobile-first teams.",
          ],
        },
      ],
      shared: [
        "Deployed multiple applications to AWS EC2 with PM2 multi-process clustering and NGINX reverse proxy for load balancing and SSL.",
        "Worked closely with mobile front-end teams, delivering APIs, admin panels, and scalable backend solutions.",
      ],
    },
    {
      id: "brototype",
      company: "Brototype",
      location: "Kerala",
      title: "MERN Stack Developer",
      period: "07/2023 – 02/2025",
      isLeadership: false,
      projects: [],
      shared: [],
    },
  ],

  projects: [
    {
      id: "askexpert",
      name: "AskExpert",
      description:
        "Online platform connecting users with verified professionals for remote consultations via chat and video. Appointment booking and distinct modules for Users, Experts, and Admins.",
      liveUrl: null,
      githubFrontend: "https://github.com/muhsinachipra/askexpert-frontend",
      githubBackend: "https://github.com/muhsinachipra/askexpert-backend",
      highlights: [
        "Real-time communication via Socket.IO (chat) and ZegoCloud (video).",
        "AWS S3 for secure, scalable file storage.",
        "Google Auth and Firebase OTP verification.",
        "Scheduling and appointment booking for expert consultations.",
        "Responsive UI with Tailwind CSS.",
        "Stripe and Webhooks for international payments.",
        "Clean Architecture and SOLID principles.",
        "RTK Query for API response caching.",
      ],
      techStack: [
        "React",
        "Tailwind CSS",
        "Redux",
        "Express.js",
        "Node.js",
        "MongoDB",
        "AWS Route53",
        "Socket.IO",
        "Stripe",
      ],
    },
    {
      id: "vatchshop",
      name: "VatchShop",
      description:
        "Scalable, fully responsive E-Commerce watch platform. Product management, cart, wishlist, order tracking, coupons, and multiple payment options.",
      liveUrl: null,
      githubFrontend: "https://github.com/muhsinachipra/vatchshop",
      githubBackend: null,
      highlights: [
        "SMTP email verification and Google Auth.",
        "Responsive UI with EJS, Bootstrap, and CSS.",
        "Razorpay API for payment processing.",
        "Admin dashboard: user management, sales reporting, product lifecycle.",
        "Deployed on AWS EC2 with Nginx, Certbot, PM2 — 99.9% uptime.",
      ],
      techStack: [
        "HTML/CSS",
        "Bootstrap",
        "EJS",
        "JavaScript",
        "Node.js",
        "AWS EC2",
        "Express.js",
        "MongoDB",
        "MVC",
        "Razorpay",
      ],
    },
  ],

  skills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "SQL",
      "CSS",
      "HTML",
      "C++",
      "Java",
    ],
    frameworks: [
      "React.js",
      "Redux",
      "Express.js",
      "Socket.IO",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "React Router DOM",
      "React Hook Form",
      "Formik",
      "JWT",
      "Stripe",
      "Nodemailer",
      "Nest.js",
      "bcrypt.js",
      "Mongoose",
      "Razorpay",
      "ZegoCloud",
    ],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: [
      "Node.js",
      "AWS",
      "Git",
      "GitHub",
      "Bitbucket",
      "Trello",
      "Slack",
      "Jira",
      "Figma",
      "Firebase",
      "Docker",
      "Postman",
      "Cloudinary",
      "Google Cloud",
      "AWS S3",
      "AWS EC2",
      "AWS Route53",
      "NGINX",
    ],
    concepts: [
      "Clean Architecture",
      "MVC",
      "Clean Code",
      "Data Structures",
      "SDLC",
      "OOP",
    ],
  },

  cloudAndInfra: [
    { name: "AWS", label: "AWS" },
    { name: "EC2", label: "EC2" },
    { name: "S3", label: "S3" },
    { name: "Route53", label: "Route53" },
    { name: "NGINX", label: "NGINX" },
    { name: "Docker", label: "Docker" },
    { name: "PM2", label: "PM2" },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02) Cert Prep: 1 Cloud Concepts",
      issuer: "LinkedIn Learning",
      url: "https://www.linkedin.com/learning/",
      description:
        "Cloud concepts, Cloud Computing, and Amazon Web Services (AWS).",
    },
    {
      name: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      url: "https://www.linkedin.com/learning/",
      description:
        "Generative AI, Computer Ethics, and Artificial Intelligence.",
    },
  ],

  education: [
    { degree: "Bachelor of Computer Applications", school: "University of Calicut", period: "2020 – 2023" },
    { degree: "Higher Secondary (Computer Science)", school: "GHSS Niramaruthur, Kerala", period: "2018 – 2020" },
  ],

  resumePdfUrl: "/muhsinResume.pdf",
} as const;

export type Resume = typeof resume;
