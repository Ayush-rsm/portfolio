import { ArrowUp } from "lucide-react";
import { StarBackground } from "./StarBackground";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-linear-to-b from-[#061826] via-[#0A1828] to-[#102B3F] relative border-t border-[#178582]/20 mt-1 pt-8 flex flex-wrap justify-between items-center text-[#C6A86B]">
    
      <p className="text-sm text-[#C6A86B]/70">
        &copy; {new Date().getFullYear()} Ayush_rsm, All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-[#178582]/20 hover:bg-[#178582] text-[#178582] hover:text-[#061826] transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </a>

    </footer>
  );
};