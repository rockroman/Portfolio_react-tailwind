import { nanoid } from "nanoid";
import { FaJs, FaReact, FaPython, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import surfImg from "./assets/surf-00.png";
import bladeImg from "./assets/blade.png";
import flowImg from "./assets/flow.png";

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
    img: bladeImg,
    url: "https://pp5-blade.herokuapp.com/",
    github: "https://github.com/rockroman/CI_PP5_Blade",
    title: "Blade(E-commerce)",
    tech: [<SiDjango />, <FaJs />],
    text: "Blade Web-store is a Django-based e-commerce app designed to transform a custom folding knife business into a thriving online shop. With a smooth user experience, real-time content updates, and Stripe API integration, it provides a reliable platform for customers to explore and purchase top-notch knives. This transition allows the business to expand its reach and tap into new customer segments.The focus is on user-friendliness with AJAX calls updating content on the fly, eliminating the need for page reloads. Users can seamlessly browse, view detailed product descriptions, and add items to their cart. The tech stack includes Django for a robust backend and Bootstrap for an attractive, responsive design.Visit the deployed Blade Web-store to experience it firsthand.",
  },
  {
    id: nanoid(),
    img: surfImg,
    url: "https://surf-on-react.netlify.app/",
    github: "https://github.com/rockroman/Basic-react-pp1",
    title: "Surf-On(React)",
    tech: [<FaReact style={{ strokeWidth: "12px" }} />, <TbApi />],
    text: "Discover SURF-ON, a React web application born from a passion project. It began as a static HTML and CSS website and transformed into a dynamic platform designed to inspire surfing enthusiasts and dreamers alike. SURF-ON offers a persistent dark theme for comfortable browsing, simplifies communication with a form submission feature powered by EmailJS, showcases a dynamic image gallery using the Unsplash API, and provides real-time weather information for three surf camps. Dive into SURF-ON, explore its virtual waves, and let it ignite your own creative ideas. 🌊",
  },
  {
    id: nanoid(),
    img: flowImg,
    url: "https://knowledge-flow.herokuapp.com/",
    github: "https://github.com/rockroman/CI_PP4-Knowledge-Flow",
    title: "Knowledge-Flow(Django)",
    tech: [<SiDjango />, <FaBootstrap style={{ strokeWidth: "5px" }} />],
    text: "Knowledge Flow is an interesting learning and blogging platform built with Django. It empowers users to create and share blogs within their chosen categories, engage through comments, and learn from the content of both blogs and comments. Additionally, Knowledge Flow facilitates mentorship connections by allowing users to find mentors in their areas of interest. Explore Knowledge Flow to harness the power of knowledge sharing and mentorship in one dynamic platform",
  },
];
