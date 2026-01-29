import { motion } from "framer-motion";
import chefAnne from "@/assets/chef-anne.jpg";
import chefClifford from "@/assets/chef-clifford.jpg";
import chefKai from "@/assets/chef-kai.jpg";
import chefErick from "@/assets/chef-erick.jpg";

const TeamSection = () => {
  const founders = [
    {
      name: "Anne Quatrano",
      role: "Chef-Owner",
      image: chefAnne,
      bio: "A visionary culinary artist who has shaped Atlanta's fine dining scene since 1993. Anne's commitment to farm-to-table cuisine, sourced from Summerland Farm, defines the soul of Bacchanalia.",
    },
    {
      name: "Clifford Harrison",
      role: "Chef-Owner",
      image: chefClifford,
      bio: "Partner and co-founder, Clifford brings decades of culinary expertise and a passion for sustainable, locally-sourced ingredients that have made Star Provisions a beloved Atlanta institution.",
    },
  ];

  const team = [
    {
      name: "Kai Nalampoon",
      role: "Executive Chef",
      image: chefKai,
    },
    {
      name: "Erick Callas",
      role: "Chef de Cuisine",
      image: chefErick,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold text-sm uppercase block mb-4"
          >
            The Team
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Meet Our Culinary Artists
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </motion.div>

        {/* Founders */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent pointer-events-none"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <span className="text-gold text-sm tracking-widest uppercase">
                  {founder.role}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-2 mb-4">
                  {founder.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {founder.bio}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-2xl text-foreground">
            Culinary Leadership
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group text-center"
            >
              <div className="relative aspect-square overflow-hidden mb-4 rounded-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/20"
                />
              </div>
              <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 180 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-12 h-12 mx-auto mb-6 flex items-center justify-center"
          >
            <span className="text-gold text-6xl font-serif leading-none">"</span>
          </motion.div>
          <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
            We believe in honoring the land, the seasons, and the artisans who 
            bring food from farm to table. Every dish tells a story of dedication 
            and passion.
          </p>
          <p className="text-muted-foreground mt-6">— Anne Quatrano & Clifford Harrison</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
