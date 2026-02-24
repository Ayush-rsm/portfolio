import { ArrowDown } from "lucide-react";
import { StarBackground } from "./StarBackground";

export const HeroSection = () => {
  return (
   <section
  id="hero"
  className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-linear-to-b from-[#061826] via-[#0A1828] to-[#102B3F] text-[#C6A86B] select-none"
>
  <StarBackground />

  <div className="relative z-10 container max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, I'm
            </span>

            {/* Accent name in turquoise */}
            <span className="ml-2 text-[#178582] opacity-0 animate-fade-in-delay-1">
              Ayush
            </span>

            {/* Gold surname */}
            <span className="ml-2 text-[#C6A86B] opacity-0 animate-fade-in-delay-2">
              Chaudhary
            </span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-[#C6A86B]/70">
            Full-stack developer specializing in scalable web systems, AI-powered workflows, and Shopify embedded applications. I engineer performant interfaces backed by robust APIs and real-world production logic.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-[#178582] text-[#061826] font-medium shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#C6A86B] hover:text-[#061826] transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-[#C6A86B]/60 mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-[#178582]" />
      </div>
    </section>
  );
};