const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold text-start text-zinc-300">{title}</h4>
      <p className="mt-2 text-start text-zinc-300 italic">{text}</p>
    </article>
  );
};
export default SkillsCard;
