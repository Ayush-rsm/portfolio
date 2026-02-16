import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of production-level applications showcasing full-stack development, AI integration, and scalable system design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mt-4 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};