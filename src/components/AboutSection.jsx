import { GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6 max-w-xl">
            <h3 className="text-2xl font-semibold">
              Full Stack SDE & Systems Enthusiast
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m a Full Stack Developer focused on building scalable,
              production-grade web applications. From Shopify embedded apps
              powered by AI to full-stack MERN platforms, I design systems that
              are performant, secure, and user-centric.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy working across the entire stack — engineering responsive
              React interfaces, designing robust REST & GraphQL APIs, and
              implementing intelligent automation workflows. I’m especially
              interested in system design, browser internals, and real-world
              product engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-md hover:shadow-xl hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>

              <a
                href="/Ayush.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-primary/70 text-primary hover:bg-primary hover:text-background hover:border-primary transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - EDUCATION */}
          <div className="space-y-8">

            <h4 className="text-lg font-semibold text-primary tracking-wide">
              Education
            </h4>

            {/* IIT Roorkee */}
            <div className="relative bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border/40 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/15 ring-1 ring-primary/20">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Indian Institute of Technology, Roorkee
                  </h4>
                  <p className="text-primary/90 text-sm font-medium mb-2 tracking-wide">
                    2022 – 2026
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Bachelor’s Degree (Undergraduate) — Focused on full-stack
                    development, system design, and software engineering fundamentals.
                  </p>
                </div>
              </div>
            </div>

            {/* Shri Ram Public School */}
            <div className="relative bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border/40 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/15 ring-1 ring-primary/20">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Shri Ram Public School
                  </h4>
                  <p className="text-primary/90 text-sm font-medium mb-2 tracking-wide">
                    2019 – 2021
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Completed Senior Secondary Education with strong foundation in
                    mathematics, problem-solving, and analytical thinking.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
