import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BacchanaliaSection from "@/components/BacchanaliaSection";
import ProvisionsSection from "@/components/ProvisionsSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState<"home" | "bacchanalia" | "provisions">("home");
  
  const bacchanaliaRef = useRef<HTMLDivElement>(null);
  const provisionsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollToSection = (section: "home" | "bacchanalia" | "provisions") => {
    setActiveSection(section);
    
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "bacchanalia" && bacchanaliaRef.current) {
      bacchanaliaRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "provisions" && provisionsRef.current) {
      provisionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      const bacchanaliaTop = bacchanaliaRef.current?.offsetTop || 0;
      const provisionsTop = provisionsRef.current?.offsetTop || 0;
      
      if (scrollPosition < bacchanaliaTop) {
        setActiveSection("home");
      } else if (scrollPosition < provisionsTop) {
        setActiveSection("bacchanalia");
      } else {
        setActiveSection("provisions");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gold z-[60]"
        style={{ width: progressBarWidth }}
      />
      
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <Hero onNavigate={scrollToSection} />
        
        <div ref={bacchanaliaRef}>
          <BacchanaliaSection />
        </div>

        <div ref={teamRef}>
          <TeamSection />
        </div>

        <div ref={galleryRef}>
          <GallerySection />
        </div>
        
        <div ref={provisionsRef}>
          <ProvisionsSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
