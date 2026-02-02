import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeaderProps {
  activeSection: "home" | "bacchanalia" | "provisions";
  onNavigate: (section: "home" | "bacchanalia" | "provisions") => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home" as const, label: "Home" },
    { id: "bacchanalia" as const, label: "Bacchanalia" },
    { id: "provisions" as const, label: "Star Provisions" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate("home")}
            className="flex flex-col items-start"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled || activeSection !== "home"
                  ? "text-foreground"
                  : "text-primary-foreground"
              }`}
            >
              Star Provisions
            </span>
            <span
              className={`text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
                isScrolled || activeSection !== "home"
                  ? "text-muted-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              Atlanta, Georgia
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`elegant-underline text-sm tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === item.id
                    ? isScrolled || activeSection !== "home"
                      ? "text-primary font-medium"
                      : "text-gold font-medium"
                    : isScrolled || activeSection !== "home"
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Link to="/reservations">
              <Button
                variant="outline"
                size="sm"
                className={`ml-4 transition-all duration-300 group ${
                  isScrolled || activeSection !== "home"
                    ? "border-primary text-primary hover:bg-gold hover:border-gold hover:text-charcoal"
                    : "border-primary-foreground/50 text-primary-foreground hover:bg-gold hover:border-gold hover:text-charcoal"
                }`}
              >
                <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Reserve
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled || activeSection !== "home"
                    ? "text-foreground"
                    : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled || activeSection !== "home"
                    ? "text-foreground"
                    : "text-primary-foreground"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-lg font-serif ${
                      activeSection === item.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Link to="/reservations" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="mt-4 w-full border-primary text-primary hover:bg-gold hover:border-gold hover:text-charcoal"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Make a Reservation
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;