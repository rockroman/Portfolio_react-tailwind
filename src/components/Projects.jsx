import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectsCard from "./ProjectsCard";
const Projects = () => {
  return (
    <section className="bg-gray-600">
      <div className="py-20 align-element " id="projects">
        <SectionTitle text="Web Projects" />
        <div className="py-15 grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
