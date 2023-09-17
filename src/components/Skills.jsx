import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="bg-gray-600">
      <div className="py-20 align-element " id="skills">
        <SectionTitle text="My Tech Stack" />
        <div className="py-15 grid gap-[5rem] md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
