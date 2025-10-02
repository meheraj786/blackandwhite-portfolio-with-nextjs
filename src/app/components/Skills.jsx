import { FaNodeJs, FaReact, FaDatabase, FaGitAlt, FaFigma, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiRedux, SiNextdotjs, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiStorybook, SiSocketdotio, SiMysql, SiPrisma, SiJest, SiPostman, SiBeekeeperstudio, SiAstro } from "react-icons/si";
import Container from "../ui/Container";

const skills = [
  { icon: <SiHtml5 size={40} />, label: "HTML5" },
  { icon: <SiCss3 size={40} />, label: "CSS3" },
  { icon: <SiJavascript size={40} />, label: "JavaScript" },
  { icon: <SiTypescript size={40} />, label: "TypeScript" },
  { icon: <SiMongodb size={40} />, label: "MongoDB" },
  { icon: <SiExpress size={40} />, label: "Express.js" },
  { icon: <FaReact size={40} />, label: "React.js" },
  { icon: <FaNodeJs size={40} />, label: "Node.js" },
  { icon: <SiNextdotjs size={40} />, label: "Next.js" },
  { icon: <SiMysql size={40} />, label: "MySQL" },
  { icon: <SiBeekeeperstudio size={40} />, label: "Beekeeper Studio" },
  { icon: <SiPrisma size={40} />, label: "Prisma" },
  { icon: <SiAstro size={40} />, label: "Astro" },
  { icon: <SiJest size={40} />, label: "Jest" },
  { icon: <SiPostman size={40} />, label: "Postman" },
  { icon: <SiTailwindcss size={40} />, label: "TailwindCSS" },
  { icon: <SiRedux size={40} />, label: "Redux" },
  { icon: <FaGitAlt size={40} />, label: "Git" },
  { icon: <FaDocker size={40} />, label: "Docker" },
  { icon: <FaFigma size={40} />, label: "Figma" },
  // { icon: <SiSocketdotio size={40} />, label: "Socket.io" },
];

export default function Skills() {
  return (
    <section id="skill" className="py-16 text-center">
      <h2 className="xl:text-[38px] text-[28px] text-center mb-10">
        My <span className="font-black">Skills</span>
      </h2>
      <Container>

      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto mb-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={
              `flex flex-col items-center justify-center h-36 border-2 rounded-md bg-white text-black border-black transition 
              hover:bg-black hover:text-white cursor-pointer`
            }
          >
            {skill.icon}
            <span className="mt-3 font-medium">{skill.label}</span>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}