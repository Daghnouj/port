import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  timeless,
  azur,
  shopify,
  ipact,
  laravel,
  angular,
  python,
  pi,
  DevOps,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [

  {
    title: "Frontend ",
    icon: mobile,
  },
  {
    title: "Backend ",
    icon: backend,
  },
  {
    title: "Devops ",
    icon: "src/assets/devops.png",
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];
const experiences = [
  {
    date: "Juin 2024 - Aout 2024",
    title: "Engineering Intern",
    company_name: "IPACT Consult Inc.",
    icon: "src/assets/ipact.png", 
    iconBg: "#4e73df",
    points: [
      "Developed dynamic web applications using React, MongoDB, and Node.js",
      "Created REST APIs, optimized components, and implemented authentication systems",
      "Integrated Stripe payment gateway for secure and seamless online transactions"
    ]
  },
  {
    date: "Juillet 2023 - Septembre 2023",
    title: "Immersive Internship",
    company_name: "Esprit",
    icon: "src/assets/esprit .png", 
    iconBg: "#4e73df", 
    points: [
      "Developed a chatbot using Python and natural language processing techniques"
    ]
  },

];



const testimonials = [

];

const projects = [
  {
    name: "Gestion De Projet - Projet Integré",
    description:
      "A project involving a full stack application combining NestJs , ReactJs and MongoDB",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: pi,
    source_code_link: "https://github.com/MouhamedAbbassi/NexusBackendNestjs/tree/user",
    // source_code_link: "https://github.com/MouhamedAbbassi/NexusFrontendReactjs/tree/user",
  },
  {
    name: "Khaled Junior",
    description:
      "Khaled Junior, built with the MERN stack, simplifies access to coaching for personal and professional growth",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: ipact,
    source_code_link: "",
  },
  {
    name: "RescueFood",
    description:
      "Rescue Food is a project built with Laravel that combats food waste by redistributing surplus food to those in need",
    tags: [
    
      {
        name: "PHP Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MySqL",
        color: "pink-text-gradient",
      },
    ],
    image: laravel,
    source_code_link: "https://github.com/ademrejeb/Laravel-FoodRescue/tree/collectes-livraisons",
  },
  {
    name: "QuizAI",
    description:
      "Quiz AI, built with Django, uses AI to generate, deliver, and analyze quizzes, enhancing learning and assessment",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "GeminiAI",
        color: "pink-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/Daghnouj/Django",
  },
  {
    name: "Gestion De Foyer",
    description:
      "A restaurant management desktop application and student housing",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: angular,
    source_code_link: "https://github.com/Daghnouj/Angular",
  },
  {
    name: "DevOps",
    description:
      "A restaurant management desktop application and student housing",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Jenkins",
        color: "green-text-gradient",
      },
      {
        name: "Sonar",
        color: "pink-text-gradient",
      },
      {
        name: "Grafana",
        color: "blue-text-gradient",
      },
      {
        name: "Nexus",
        color: "pink-text-gradient",
      },
    ],
    image: DevOps,
    source_code_link: "https://github.com/NarimenAzzouz/DevOps/tree/RaouiaDaghnouj-4Twin1-G5",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
