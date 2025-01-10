export const navLinks = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "education",
    name: "Education",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const cvLink =
  "https://drive.google.com/file/d/1eoCjxEOabC2c2T_dRgJ4Bi6otSWADPl2/view?usp=sharing";

export const gitHubLink = "https://github.com/Amr-3009";
export const linkedInLink = "https://www.linkedin.com/in/amrosamaeg/";

export const myBirthDate = "1999-09-09";

import {
  angular,
  bootstrap,
  css,
  figma,
  git,
  html,
  javascript,
  laravel,
  mysql,
  nodejs,
  php,
  reactjs,
  restapi,
  styledComponents,
  tailwind,
  vue,
  python,
  bistro,
  shopwise,
  activitiesArchive,
} from "../assets";

export const skills = [
  {
    category: "programming",
    name: "Programming Languages",
    skills: [
      { name: "Javascript", image: javascript },
      { name: "PHP", image: php },
      { name: "MySQL", image: mysql },
      { name: "Python", image: python },
    ],
  },
  {
    category: "frontEnd",
    name: "Frontend Development",
    skills: [
      { name: "HTML", image: html },
      { name: "CSS", image: css },
      { name: "ReactJS", image: reactjs },

      { name: "Bootstrap", image: bootstrap },
      { name: "Tailwind", image: tailwind },
      { name: "Styled Components", image: styledComponents },
    ],
  },
  {
    category: "backEnd",
    name: "Backend Development",
    skills: [
      { name: "Laravel", image: laravel },
      { name: "REST API", image: restapi },
    ],
  },
  {
    category: "tools",
    name: "Tools",
    skills: [
      { name: "Git", image: git },
      { name: "Figma", image: figma },
    ],
  },
  {
    category: "familiarWith",
    name: "Familiar With",
    skills: [
      { name: "Angular", image: angular },
      { name: "Vue", image: vue },
      { name: "NodeJS", image: nodejs },
    ],
  },
];

export const projects = [
  {
    name: "Bistro Bliss",
    description:
      "A restaurant website that showcases the menu, services, and contact information.",
    tags: [
      {
        name: "HTML",
        color: "text-red-500",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "ReactJS",
        color: "text-blue-500",
      },
      {
        name: "Responsive Design",
        color: "text-blue-500",
      },
      {
        name: "Laravel",
        color: "text-red-500",
      },
      {
        name: "REST API",
        color: "text-yellow-500",
      },
      {
        name: "MySQL",
        color: "text-blue-500",
      },
    ],
    image: bistro,
    source_code_link: "https://github.com/Amr-3009/front-end-final-project",
    live_link: "https://front-end-final-project-omega.vercel.app/home",
  },
  {
    name: "Shopwise",
    description:
      "An e-commerce website that allows users to browse products, add them to the cart, and checkout.",
    tags: [
      {
        name: "HTML",
        color: "text-red-500",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "ReactJS",
        color: "text-blue-500",
      },
      {
        name: "Responsive Design",
        color: "text-blue-500",
      },
      {
        name: "REST API",
        color: "text-yellow-500",
      },
      {
        name: "Tailwind",
        color: "text-blue-500",
      },
    ],
    image: shopwise,
    source_code_link: "https://github.com/Amr-3009/front-end_project",
    live_link: "https://amr-3009.github.io/front-end_project/",
  },
  {
    name: "Activities Archive",
    description:
      "The Activities Archive project is a web-based platform created for Tarbyh Namouthajiyah Schools. It serves as an archive to document and display various school activities. ",
    tags: [
      {
        name: "HTML",
        color: "text-red-500",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-yellow-500",
      },
      {
        name: "ReactJS",
        color: "text-blue-500",
      },
      {
        name: "Responsive Design",
        color: "text-blue-500",
      },
    ],
    image: activitiesArchive,
    source_code_link: "https://github.com/Amr-3009/qurtuba-complex",
    live_link: "https://qurtuba-complex.vercel.app/",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    major: "Mechatronics Engineering",
    university: "Ain Shams University",
    graduationYear: "2022",
  },
];

export const courses = [
  {
    course: "Full Stack PHP Diploma",
    institution: "AMIT Learning",
    year: "2023-2024",
    certificate_link:
      "https://drive.google.com/file/d/1d9JSaOmnmSbxB6j0kP2qU1V9uX4Xvlf-/view",
  },
  {
    course: "Complete Python Bootcamp",
    institution: "Udemy",
    year: "2022",
    certificate_link:
      "https://www.udemy.com/certificate/UC-d63da164-f223-4867-a2b1-693ee297a36f/",
  },
  {
    course: "Web Development Track",
    institution: "Udacity",
    year: "2023",
    certificate_link:
      "https://drive.google.com/file/d/13Of-J2jVI1fIQoj3GJze6RVbvvElxOdx/view",
  },
];
