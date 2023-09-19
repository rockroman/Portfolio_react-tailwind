import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

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
              <p key={index} className="text-2xl text-blue-700">
                {item}
              </p>
            );
          })}
        </div>
        <hr className="w-2/3 mx-auto border-t-2" />
        <h2 className="text-xl tracking-wide font-bold uppercase flex flex-col">
          {title}
        </h2>
        <p className="mt-4 leading-6 text-start normal-case">{text}</p>
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
