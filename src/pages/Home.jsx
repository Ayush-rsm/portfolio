import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import InternshipSection from '../components/InternshipSection';
import { Navbar } from '../components/Navbar';
import { ProjectsSection } from '../components/ProjectSection';
import { SkillsSection } from '../components/SkillsSection';
import { StarBackground } from '../components/StarBackground';
import { ThemeToggle } from '../components/ThemeToggle'

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f3ef] dark:bg-background text-foreground overflow-x-hidden"
>
        
 
        <StarBackground />

        <Navbar />
        
        <main>
          <HeroSection />
          <ProjectsSection />
          <InternshipSection />
          <AboutSection />
          <SkillsSection />
          <ContactSection />
        </main>
        
        <Footer />
        
        </div>
    // Theme Toggle
                   
    // Background Effects

    // Navbar

    // Main Content

    // Footer
  )
};
