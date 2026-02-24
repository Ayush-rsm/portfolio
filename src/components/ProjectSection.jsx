import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { StarBackground } from "./StarBackground";

const projects = [
  {
    id: 1,
    title: "QuickShow ",
    description:
      "Full-stack movie ticket booking platform with seat-based reservations, secure multi-provider authentication via Clerk, admin dashboard management, and background workflows powered by Inngest.",
    image: "/Quickshow.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Clerk", "Inngest"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ayush-rsm/Quickshowwwww",
  },
  {
    id: 2,
    title: "Hospital Management System | IIT Roorkee",
    description:
      "Full-stack hospital management platform with multi-level authentication (Patient/Doctor/Admin), appointment scheduling, secure online payments, and responsive dashboards powered by scalable REST APIs.",
    image: "/Hospital-Management-System.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ayush-rsm/Hospital-Management-System",
  },
  {
    id: 3,
    title: "Input-Box Extension ",
    description: `AI-powered Firefox extension that enhances typing UX with overlay input boxes, real-time keystroke mirroring, and intelligent CSS-based webpage transformations.`,
    image: "/Custom-Input-Box.png",
    tags: ["JavaScript", "Firefox Extension APIs", "Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ayush-rsm/InputBox",
  },
  {
    id: 4,
    title: "Mini Browser Engine",
    description:
      "Built a simplified browser engine implementing HTML parsing, DOM tree construction, CSS selector-based styling, and a custom render-layout-paint pipeline using Canvas API.",
    image: "/Mini-Browser-Engine.png",
    tags: ["JavaScript", "HTML", "Canvas API", "Rendering Engine"],
    demoUrl: "#",
    githubUrl: "#",
  },

];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-linear-to-b from-[#102B3F]  via-[#0A1828] to-[#061826] text-[#C6A86B] select-none "
    >
      <StarBackground />
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-[#178582]"> Projects </span>
        </h2>

        <p className="text-center text-[#C6A86B]/70 mb-12 max-w-2xl mx-auto">
          A selection of production-level applications showcasing full-stack
          development, AI integration, and scalable system design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-[#0F2436] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border border-[#178582] rounded-full text-[#178582]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-[#C6A86B]/70 text-sm mt-4 mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-[#C6A86B]/80 hover:text-[#178582] transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-[#C6A86B]/80 hover:text-[#178582] transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ayush-rsm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#178582] text-[#178582] hover:bg-[#178582] hover:text-[#061826] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};