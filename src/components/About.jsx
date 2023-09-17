import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-gray-900 py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="" className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className="text-zinc-300 text-start italic">
            A results-driven Junior Fullstack Software Developer with a strong
            commitment to continuous improvement and a thirst for learning.
            Experienced in full-stack development, harnessing a diverse tech
            stack that includes Python, Django, JavaScript, React, and
            Bootstrap, all complemented by the sleek styling of Tailwind CSS.
            Proficient in Agile methodologies and a collaborative team player,
            often contributing to hackathons. Demonstrates rapid skill
            development, having successfully completed a comprehensive
            full-stack web development course while earning acceptance into a
            prestigious higher diploma program in "Science in Computing, all
            while managing full-time employment.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
