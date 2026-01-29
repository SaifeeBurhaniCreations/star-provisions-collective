import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBacchanalia from "@/assets/hero-bacchanalia.jpg";

interface HeroProps {
  onNavigate: (section: "bacchanalia" | "provisions") => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBacchanalia}
          alt="Elegant fine dining atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-gold text-sm tracking-[0.4em] uppercase">
            Est. 1993
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-semibold tracking-tight mb-6"
        >
          Star Provisions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light"
        >
          Two destinations united by a passion for
          <br className="hidden md:block" /> exceptional food and hospitality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-primary-foreground/60 text-sm tracking-widest uppercase mb-12"
        >
          Atlanta, Georgia
        </motion.div>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button
            onClick={() => onNavigate("bacchanalia")}
            className="group relative px-10 py-4 bg-primary/90 hover:bg-primary text-primary-foreground transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-serif text-lg tracking-wide">
              Bacchanalia
            </span>
            <span className="relative z-10 block text-xs text-primary-foreground/70 mt-1">
              Fine Dining
            </span>
          </button>

          <button
            onClick={() => onNavigate("provisions")}
            className="group relative px-10 py-4 border border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground transition-all duration-300"
          >
            <span className="relative z-10 font-serif text-lg tracking-wide">
              Star Provisions
            </span>
            <span className="relative z-10 block text-xs text-primary-foreground/70 mt-1">
              Market & Cafe
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-primary-foreground/50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
