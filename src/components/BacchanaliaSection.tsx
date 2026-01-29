import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dishImage from "@/assets/dish-1.jpg";

const BacchanaliaSection = () => {
  const menuCourses = {
    first: [
      { name: "Crab Fritter", description: "thai essence, citrus, avocado" },
      { name: "Mushroom", description: "morel mushroom, fennel, madeira" },
      { name: "SF Egg", description: "maple gastrique, truffle" },
      { name: "Steak Tartare", description: "za'atar, egg yolk, potato" },
      { name: "Seared Foie Gras", description: "walnut, ellijay apple, pepitas", supplement: "+$15" },
      { name: "Maine Lobster", description: "polenta, lemon verbena" },
    ],
    second: [
      { name: "Scarpinoci", description: "valbreso, butternut squash, leek" },
      { name: "Nantucket Bay Scallops", description: "sunchoke, black sesame" },
      { name: "Dover Sole", description: "sf sweet onion, spaghetti squash" },
      { name: "Lamb", description: "broccoli, chevre" },
      { name: "Rohan Duck", description: "young cabbage toum, ssam" },
      { name: "Dry Aged NY Strip", description: "pommes macaire, grain mustard" },
    ],
    third: [
      { name: "Goat Yogurt", description: "beets, beet chips" },
      { name: "Valserena Parmigiano", description: "date, black garlic" },
      { name: "Colston-Basset Stilton", description: "walnut tart, sultana" },
      { name: "Brillat-Savarin", description: "apple, soppressata, honey gastrique" },
      { name: "Stracciatella", description: "radicchio, roasted grapes, hazelnut" },
      { name: "Comte Souffle", description: "apple compote" },
    ],
    fourth: [
      { name: "Bingo Mandarin", description: "warm pudding, citrus, puffed sorghum" },
      { name: "Baked Alaska", description: "coffee, dulce de leche, meringue" },
      { name: "Chocolate", description: "mexican chocolate gelato" },
      { name: "Ellijay Apple", description: "malva pudding, creme fraiche" },
      { name: "Souffle", description: "georgia grapefruit, brown butter crumb, tarragon ice milk" },
      { name: "Pecan", description: "praline, white chocolate" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="bacchanalia" className="py-24 bg-background">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-charcoal py-20 mb-20"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.span
              initial={{ letterSpacing: "0.2em" }}
              whileInView={{ letterSpacing: "0.4em" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-gold text-sm uppercase block mb-4"
            >
              Fine Dining
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-5xl md:text-6xl text-primary-foreground mb-6"
            >
              Bacchanalia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Atlanta's most-celebrated restaurant since 1993. Contemporary American cuisine 
              featuring seasonal menus based entirely on organic ingredients, many sourced 
              from our Summerland Farm.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6">
        {/* About & Image Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-gold text-sm uppercase mb-4"
            >
              The Experience
            </motion.span>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Four-Course Prix Fixe
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our menu evolves slightly each evening and throughout the seasons, 
              reflecting our commitment to the freshest seasonal ingredients. 
              Each course offers multiple selections, allowing you to craft your 
              own culinary journey.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-serif text-4xl text-primary">$140</span>
              <span className="text-muted-foreground">per person</span>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3 text-sm text-muted-foreground"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold" />
                <span>Monday – Saturday from 5:30pm</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span>1460 Ellsworth Industrial Blvd. Suite A, Atlanta, GA 30318</span>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>404.365.0410 ext. 2</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <img
                src={dishImage}
                alt="Signature dish"
                className="w-full aspect-square object-cover shadow-dramatic"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-elegant"
            >
              <p className="text-primary-foreground font-serif text-lg">
                "A fresh and unique experience 
                <br />with an ever-evolving menu"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Menu Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-gold text-sm uppercase block mb-4"
            >
              Current Menu
            </motion.span>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              Four Courses
            </h3>
          </div>

          <Tabs defaultValue="first" className="max-w-4xl mx-auto">
            <TabsList className="w-full grid grid-cols-4 bg-muted mb-8">
              <TabsTrigger value="first" className="font-serif">First</TabsTrigger>
              <TabsTrigger value="second" className="font-serif">Second</TabsTrigger>
              <TabsTrigger value="third" className="font-serif">Cheese</TabsTrigger>
              <TabsTrigger value="fourth" className="font-serif">Dessert</TabsTrigger>
            </TabsList>

            {Object.entries(menuCourses).map(([course, items]) => (
              <TabsContent key={course} value={course} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ x: 5, backgroundColor: "hsl(var(--muted) / 0.5)" }}
                      className="group p-4 transition-all duration-300 cursor-default"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        {item.supplement && (
                          <span className="text-gold text-sm">{item.supplement}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm italic">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Reservation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-charcoal p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Calendar className="w-8 h-8 text-gold mx-auto mb-4" />
          </motion.div>
          <h3 className="font-serif text-2xl text-primary-foreground mb-4">
            Make a Reservation
          </h3>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Reservations are highly recommended and can be made up to three months in advance.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gold hover:bg-gold/90 text-charcoal font-medium"
              onClick={() => window.open("https://resy.com", "_blank")}
            >
              Book on Resy
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.location.href = "tel:4043650410"}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 404.365.0410
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BacchanaliaSection;
