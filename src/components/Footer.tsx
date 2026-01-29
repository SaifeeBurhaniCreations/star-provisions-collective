import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              initial={{ opacity: 0, letterSpacing: "0" }}
              whileInView={{ opacity: 1, letterSpacing: "0.02em" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif text-2xl mb-4"
            >
              Star Provisions
            </motion.h3>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Two destinations united by a passion for exceptional food and hospitality. 
              Chefs Anne Quatrano and Clifford Harrison invite you to experience the best 
              of Atlanta's culinary scene.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <MapPin className="w-4 h-4" />
              <span>1460 Ellsworth Industrial Blvd. Atlanta, GA 30318</span>
            </div>
          </motion.div>

          {/* Bacchanalia */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-xl mb-4 text-gold">Bacchanalia</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <p>Monday – Saturday</p>
                  <p>Dinner from 5:30pm</p>
                  <p className="text-primary-foreground/50">Closed Sundays</p>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <a href="tel:4043650410" className="hover:text-primary-foreground transition-colors">
                  404.365.0410 ext. 2
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <a href="mailto:office@eatoutoften.net" className="hover:text-primary-foreground transition-colors">
                  office@eatoutoften.net
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Star Provisions */}
          <motion.div variants={itemVariants}>
            <h4 className="font-serif text-xl mb-4 text-forest-light">Star Provisions</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5" />
                <div>
                  <p>Tuesday – Saturday: 8am–6pm</p>
                  <p>Sunday: 9am–3pm</p>
                  <p className="text-primary-foreground/50">Closed Mondays</p>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <a href="tel:4043650410" className="hover:text-primary-foreground transition-colors">
                  404.365.0410 ext. 4
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="menu-divider mb-8"
        />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50"
        >
          <p>© {currentYear} Star Provisions. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ y: -2, color: "hsl(var(--primary-foreground))" }}
              className="transition-colors"
            >
              Private Events
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, color: "hsl(var(--primary-foreground))" }}
              className="transition-colors"
            >
              Gift Cards
            </motion.a>
            <motion.a
              href="mailto:aquatrano@eatoutoften.net"
              whileHover={{ y: -2, color: "hsl(var(--primary-foreground))" }}
              className="transition-colors"
            >
              Careers
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
