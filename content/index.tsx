import {
  GITHUB_URL,
  PROJECTS_IMAGE_URL,
  SKILLS_IMAGE_URL,
} from "@/libs/config";

export const aboutMe = [
  {
    image: "/assets/me-nobg.png",
    description:
      "Hello, I'm Wildan Luqmanul Hakim, a web developer currently based in Hiroshima, Japan. I specialize in creating dynamic and user-focused web applications, working proficiently as both a frontend and backend developer. My tech stack includes tools like React, Spring Boot, and Google Cloud, though I’m adaptable to various technologies to deliver effective solutions. I graduated with a Bachelor of Computer Science in Informatics Engineering from Bandung University of Technology in 2024. My passion for web development grew through practical experience, including the Google Bangkit Academy and hands-on projects in Indonesia and Singapore. These experiences honed my skills in full-stack development and cloud-based application deployment. Outside of coding, I enjoy exploring new skills, playing games, and reading novels. I’m open to work opportunities where I can apply my technical expertise and creative problem-solving abilities. Feel free to connect with me through the links below if you'd like to discuss potential collaborations!",
  },
];

export const education = [
  {
    start: 2017,
    end: 2020,
    school: "SMAN 1 Cimalaka",
    major: "Social Sciences Major",
    city: "Sumedang",
    country: "Indonesia",
    organization: [],
  },
  {
    start: 2020,
    end: 2024,
    school: "Sekolah Tinggi Teknologi Bandung",
    major: "Bachelor of Computer Science",
    city: "Bandung",
    country: "Indonesia",
    organization: [],
  },
  {
    start: 2022,
    end: 2026,
    school: "Lithan EduClaas",
    major: "Applied Degree of Software Engineer",
    city: "Lifelong Learning Institute",
    country: "Singapore",
    organization: [],
  },
];

export const links = [
  {
    name: "Resume",
    link: "/assets/resume.pdf",
  },
];

export const skills = [
  {
    image: `${SKILLS_IMAGE_URL}/html.svg`,
    name: "HTML",
    link: "https://www.w3schools.com/html/",
    color: "#f16529",
  },
  {
    image: `${SKILLS_IMAGE_URL}/css.svg`,
    name: "CSS",
    link: "https://www.w3schools.com/css/",
    color: "#2965f1",
  },
  {
    image: `${SKILLS_IMAGE_URL}/javascript.svg`,
    name: "JavaScript",
    link: "https://www.javascript.com/",
    color: "#000000",
  },
  {
    image: `${SKILLS_IMAGE_URL}/typescript.svg`,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    color: "#3178c6",
  },
  {
    image: `${SKILLS_IMAGE_URL}/react.svg`,
    name: "React",
    link: "https://react.dev/",
    color: "#61dafb",
  },
  {
    image: `${SKILLS_IMAGE_URL}/nextjs.svg`,
    name: "NextJS",
    link: "https://nextjs.org/",
    color: "#000000",
  },
  {
    image: `${SKILLS_IMAGE_URL}/bootstrap.svg`,
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
    color: "#9013fe",
  },
  {
    image: `${SKILLS_IMAGE_URL}/tailwindcss.svg`,
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    color: "#38bdf8",
  },
  {
    image: `${SKILLS_IMAGE_URL}/nodejs.svg`,
    name: "NodeJS",
    link: "https://nodejs.org/",
    color: "#8CC84B",
  },
  {
    image: `${SKILLS_IMAGE_URL}/java.svg`,
    name: "Java",
    link: "https://www.java.com/",
    color: "#EA2D2E",
  },
  {
    image: `${SKILLS_IMAGE_URL}/expressjs.svg`,
    name: "ExpressJS",
    link: "https://expressjs.com/",
    color: "#000000",
  },
  {
    image: `${SKILLS_IMAGE_URL}/spring.svg`,
    name: "Spring",
    link: "https://spring.io/",
    color: "#68BD45",
  },
  {
    image: `${SKILLS_IMAGE_URL}/mysql.svg`,
    name: "MySQL",
    link: "https://www.mysql.com/",
    color: "#00678C",
  },
  {
    image: `${SKILLS_IMAGE_URL}/mongodb.svg`,
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    color: "#599636",
  },
  {
    image: `${SKILLS_IMAGE_URL}/git.svg`,
    name: "Git",
    link: "https://git-scm.com/",
    color: "#F03C2E",
  },
  {
    image: `${SKILLS_IMAGE_URL}/php.svg`,
    name: "PHP",
    link: "https://www.php.net/",
    color: "#7377AD",
  },
];

export const projects = [
  {
    title: "Dani GYM",
    description:
      "Dani GYM Fitness Center Sumedang offers a complete and top-quality fitness experience at affordable prices. Equipped with modern facilities and professional trainers to support your health and fitness goals.",
    image: `${PROJECTS_IMAGE_URL}/dani-gym/macbook.png`,
    github: `${GITHUB_URL}/dani-gym`,
    demo: "https://wildanlh.github.io/dani-gym/",
    tags: ["React", "Tailwindcss", "Framer Motion"],
  },
  {
    title: "Meals On Wheels",
    description:
      "Website charitable organization that prepares and delivers a hot noon meal to qualified adults living at home who are unable to cook for themselves or maintain.",
    image: `${PROJECTS_IMAGE_URL}/meals-on-wheels/macbook.png`,
    github: `${GITHUB_URL}/`,
    demo: "https://wildanlh.github.io/dani-gym/",
    tags: [
      "Axios",
      "Bootstrap",
      "JSON Web Token (JWT)",
      "MySQL",
      "React",
      "Spring Boot",
      "Stripe",
    ],
  },
  {
    title: "ABC Learning Center",
    description:
      "Website for an IT training institute offering front-end and back-end web development courses.",
    image: `${PROJECTS_IMAGE_URL}/abc-learning-center/macbook.png`,
    github: `${GITHUB_URL}/abc-learning-center-v2`,
    demo: "https://abc-learning-center-v2.vercel.app/",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
  },
  // {
  //   title: "JumpStart",
  //   description: "JumpStart",
  //   image: `${PROJECTS_IMAGE_URL}/jumpstart/macbook.png`,
  //   github: `${GITHUB_URL}/abc-learning-center-v2`,
  //   demo: "https://abc-learning-center-v2.vercel.app/",
  //   tags: ["NextJS", "TypeScript", "Tailwindcss"],
  // },
];
