import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import heroImg from "../assets/self.jpg";
const Hero = () => {
  return (
    <div className="myHero bg-gray-900">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article className="py-4">
          <h1 className="text-7xl text-start font-bold tracking-wider text-zinc-200">
            <span className="text-blue-700">I'm </span>Roman
          </h1>
          <p className="text-zinc-300 mt-3 text-2xl capitalize tracking-wide text-start">
            Full Stack Web Developer
          </p>
          <p className="text-zinc-300 mt-3  capitalize tracking-wide text-start">
            Make your Ideas come true
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="">
              <FaGithubSquare className="h-8 w-8 text-gray-300 custom-hover" />
            </a>
            <a href="">
              <FaLinkedin className="h-8 w-8 text-gray-300 custom-hover" />
            </a>
            <a href="">
              <FaTwitterSquare className="h-8 w-8 text-gray-300 custom-hover" />
            </a>
          </div>
        </article>
        <article className="p-4 hidden md:block">
          <img src={heroImg} alt="" className="h-80 lg:95" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
