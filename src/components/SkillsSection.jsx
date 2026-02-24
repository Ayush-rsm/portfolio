import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiGit,
  SiFigma,
  SiRemix,
} from "react-icons/si";
import { StarBackground } from "./StarBackground";

export const SkillsSection = () => {
  const skills = [
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiRemix />, name: "Remix" },
    
  ];

  return (
    <section
  id="skills"
  className="relative py-24 px-4 bg-linear-to-b from-[#061826] via-[#0A1828] to-[#102B3F] select-none"
>
  
      <StarBackground />
      <div className="container mx-auto max-w-6xl text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          My <span className="text-[#178582]">Tech Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#0F2436] text-4xl text-[#C6A86B] transition-all duration-300 group-hover:bg-[#178582] group-hover:text-[#061826] group-hover:scale-110 shadow-md hover:shadow-xl">
                {skill.icon}
              </div>

              <p className="mt-3 text-sm text-[#C6A86B]/70 group-hover:text-[#178582] transition-colors">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};