import { nanoid } from "nanoid";
import { FaJs, FaReact, FaPython, FaGithub } from "react-icons/fa";
import { SiDjango, SiTailwindcss } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Django",
    icon: <SiDjango className="h-16 w-16 text-gray-900 " />,
    text: "Skilled in Django, creating powerful web apps with secure backends. Specializing in user-friendly web experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-gray-900" />,
    text: "Proficient in JavaScript, creating interactive and responsive web apps with a strong emphasis on mobile design.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16  text-gray-900" />,
    text: "Competent in React, creating engaging web interfaces to elevate user interactions.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16  text-gray-900" />,
    text: "Proficient in Python, applying it to develop a wide range of applications, from web development to data analysis, and consistently striving for code quality and best practices.",
  },
  {
    id: nanoid(),
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="h-16 w-16  text-gray-900" />,
    text: "Skilled in Tailwind CSS, utilizing its utility-first approach to design and develop visually stunning and responsive web interfaces that elevate user interactions and user experiences",
  },
  {
    id: nanoid(),
    title: "GitHub",
    icon: <FaGithub className="h-16 w-16  text-gray-900" />,
    text: "Proficient in GitHub, leveraging its version control and collaboration features to manage code efficiently and streamline team projects.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
