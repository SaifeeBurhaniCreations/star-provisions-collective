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
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroBacchanalia}
          alt="Elegant fine dining atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        
        {/* Animated grain texture overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 0.2, width: "40%" }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute top-1/4 left-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 0.2, width: "40%" }}
        transition={{ duration: 1.5, delay: 1.7 }}
        className="absolute bottom-1/4 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <motion.span
            initial={{ letterSpacing: "0.2em" }}
            animate={{ letterSpacing: "0.4em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-gold text-sm uppercase inline-block"
          >
            Est. 1993
          </motion.span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-semibold tracking-tight mb-6"
          >
            Star Provisions
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light"
        >
          Two destinations united by a passion for
          <br className="hidden md:block" /> exceptional food and hospitality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-primary-foreground/60 text-sm tracking-widest uppercase mb-12"
        >
          Atlanta, Georgia
        </motion.div>

        {/* Dual CTAs with enhanced hover animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            onClick={() => onNavigate("bacchanalia")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 bg-primary/90 hover:bg-primary text-primary-foreground transition-all duration-300 overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
            />
            <span className="relative z-10 font-serif text-lg tracking-wide">
              Bacchanalia
            </span>
            <span className="relative z-10 block text-xs text-primary-foreground/70 mt-1">
              Fine Dining
            </span>
          </motion.button>

          <motion.button
            onClick={() => onNavigate("provisions")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 border border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground transition-all duration-300 overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent"
            />
            <span className="relative z-10 font-serif text-lg tracking-wide">
              Star Provisions
            </span>
            <span className="relative z-10 block text-xs text-primary-foreground/70 mt-1">
              Market & Cafe
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-primary-foreground/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
