import { useState } from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ReadMore = ({ children }) => {
  const text = children;

  const [isHidden, setIsHidden] = useState(true);
  const toggleReadMore = () => {
    setIsHidden(!isHidden);
  };
  return (
    <p className="text-start mt-4 leading-6 normal-case">
      {isHidden ? text.slice(0, 150) : text}. . . .
      <br />
      <button
        onClick={toggleReadMore}
        className=" mt-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        {isHidden ? "read more" : " show less"}
      </button>
    </p>
  );
};

const ProjectsCard = ({ img, url, github, title, text, tech }) => {
  return (
    <article className=" bg-zinc-300 rounded-lg shadow-sm shadow-zinc-300 duration-300 flex flex-col">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-54"
      />
      <div className="capitalize p-8 flex flex-col flex-1">
        <div className="flex justify-center gap-3 mb-3">
          {tech.map((item, index) => {
            return (
              <p key={index} className="text-2xl text-gray-900">
                {item}
              </p>
            );
          })}
        </div>
        <hr className="w-2/3 mx-auto border-t-2" />
        <h2 className="text-xl tracking-wide font-bold uppercase flex flex-col">
          {title}
        </h2>
        <ReadMore>
          {/* <p className="mt-4 leading-6 text-start normal-case">{text}</p> */}
          {text}
        </ReadMore>
        <div className="mt-4 flex gap-x-4 flex-1 items-end">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-gray-900 hover:text-blue-700 duration-300" />
          </a>
          <a href={url}>
            <FaGithubSquare className="h-8 w-8 text-gray-900 hover:text-blue-700 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
