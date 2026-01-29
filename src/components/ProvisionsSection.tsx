import { motion } from "framer-motion";
import { Clock, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroProvisions from "@/assets/hero-provisions.jpg";
import bakeryImage from "@/assets/bakery.jpg";
import cheeseImage from "@/assets/cheese.jpg";

const ProvisionsSection = () => {
  const breakfastMenu = [
    { name: "Granola", description: "seasonal fruit with strained yogurt or chia seed pudding", price: "$7" },
    { name: "Honey Butter Toast", description: "", price: "$5.50" },
    { name: "Sausage Biscuit", description: "strawberry preserves", price: "$8.50" },
    { name: "Crispy Chicken Biscuit", description: "sweet pickle, hot pepper honey", price: "$8.50" },
    { name: "Folded Egg and Sausage Biscuit", description: "cheddar", price: "$12" },
    { name: "French Omelet Baguette", description: "fine herbs, brie, aioli", price: "$13" },
    { name: "Fried Egg, Bacon, Cheese", description: "soft roll, cheddar", price: "$11" },
    { name: "Pickled Egg Salad", description: "avocado, multigrain toast, dill", price: "$11" },
  ];

  const sandwichMenu = [
    { name: "SP Fluffernutter", description: "peanut butter, marshmallow, griddled white bread", price: "$10" },
    { name: "French Onion Grilled Cheese", description: "gouda, cheddar & gruyere, sourdough, caramelized onions, au jus", price: "$12" },
    { name: "Maine Lobster Roll", description: "buttered brioche roll, lobster, lemon aioli", price: "$36" },
    { name: "Spanish White Tuna", description: "lettuce, tomato, crispy jalapeno, mayo, ancient grain bread", price: "$16" },
    { name: '"Give Thanks"', description: "turkey, sage apple dressing, bacon, cranberry, mayo, sourdough", price: "$13" },
    { name: "Italian Hero", description: "mortadella, capicola, soppressata, provolone, olive tapenade, vinaigrette", price: "$15" },
    { name: "Prosciutto", description: "banner butter, parmesan, baguette", price: "$12" },
    { name: "Shrimp Po'Boy", description: "shrimp, cajun mayo, tomato, pickles, hoagie", price: "$14" },
  ];

  const boardsMenu = [
    { name: "Antipasto", description: "greens, salami, ham, provolone, celery, pickled peppers, olives, vinaigrette", price: "$14" },
    { name: "Falafel Plate", description: "hummus, cucumber, tomato, yoghurt, tahini, olives, grissini", price: "$14" },
    { name: "Roast Chicken Salad", description: "greens, avocado, quinoa, almonds, crispy strips, sesame ginger vinaigrette", price: "$15" },
    { name: "Thai Shrimp", description: "cabbage, daikon, cucumber, onion, peanut, lemongrass, mint", price: "$15" },
    { name: "Smoked Salmon", description: "heirloom tomato, pickled onions, herb cream cheese, everything bagel", price: "$18" },
    { name: "A Selection of Cheese", description: "marcona almonds, honey, fennel-sultana bread", price: "$14" },
    { name: "Charcuterie Plate", description: "marinated olives, mustard, pickles, sourdough", price: "$14" },
    { name: "Crushed Tomato Pizza", description: "garlic, fresh oregano, mozzarella, parmesan", price: "$15" },
  ];

  const marketCategories = [
    {
      title: "Bakery",
      image: bakeryImage,
      description: "Freshly baked breads, cakes, cookies, pies, and pastries daily. The city's best authentic rye bread.",
    },
    {
      title: "Cheese",
      image: cheeseImage,
      description: "Artisan American and European cheeses, hand-selected and stored in our humidity-regulated cooler.",
    },
  ];

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
    <section id="provisions" className="py-24 bg-cream">
      {/* Hero Banner */}
      <div className="relative h-[50vh] mb-20 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src={heroProvisions}
          alt="Star Provisions Market"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ letterSpacing: "0.2em" }}
                whileInView={{ letterSpacing: "0.4em" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-gold text-sm uppercase block mb-4"
              >
                Market & Cafe
              </motion.span>
              <h2 className="font-serif text-5xl md:text-6xl text-primary-foreground mb-4">
                Star Provisions
              </h2>
              <p className="text-primary-foreground/80 max-w-xl text-lg">
                A culinary dream shop for gourmet experts and novices alike.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Access to our restaurant pantry and walk-in cooler brings home cooking to 
            new levels. Individual markets for baked goods, cheese, meats, seafood, 
            locally roasted coffee, and gourmet food items—plus an array of gifts and 
            cookware—await your discovery.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 justify-center mt-8 text-sm text-muted-foreground"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-forest" />
              <span>Tue–Sat 8am–6pm • Sun 9am–3pm</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-forest" />
              <span>1460 Ellsworth Industrial Blvd. Atlanta, GA</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Market Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          {marketCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden bg-background shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-6"
              >
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cafe Menu */}
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
              className="text-forest text-sm uppercase block mb-4"
            >
              Cafe Menu
            </motion.span>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              Breakfast, Lunch & Beyond
            </h3>
            <p className="text-muted-foreground mt-4">
              Served with apple or chips + pickles
            </p>
          </div>

          <Tabs defaultValue="breakfast" className="max-w-4xl mx-auto">
            <TabsList className="w-full grid grid-cols-3 bg-muted mb-8">
              <TabsTrigger value="breakfast" className="font-serif">Breakfast</TabsTrigger>
              <TabsTrigger value="sandwiches" className="font-serif">Sandwiches</TabsTrigger>
              <TabsTrigger value="boards" className="font-serif">Boards & Bowls</TabsTrigger>
            </TabsList>

            <TabsContent value="breakfast" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {breakfastMenu.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-start py-3 border-b border-border group cursor-default"
                  >
                    <div>
                      <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-muted-foreground text-sm italic mt-1">{item.description}</p>
                      )}
                    </div>
                    <span className="text-forest font-medium">{item.price}</span>
                  </motion.div>
                ))}
                <p className="text-sm text-muted-foreground pt-4">
                  Breakfast served 8:00am – 4:00pm
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="sandwiches" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {sandwichMenu.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-start py-3 border-b border-border group cursor-default"
                  >
                    <div>
                      <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-muted-foreground text-sm italic mt-1">{item.description}</p>
                      )}
                    </div>
                    <span className="text-forest font-medium">{item.price}</span>
                  </motion.div>
                ))}
                <p className="text-sm text-muted-foreground pt-4">
                  Served 11:00am – 4:00pm with apple or chips + pickles
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="boards" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {boardsMenu.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-start py-3 border-b border-border group cursor-default"
                  >
                    <div>
                      <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-muted-foreground text-sm italic mt-1">{item.description}</p>
                      )}
                    </div>
                    <span className="text-forest font-medium">{item.price}</span>
                  </motion.div>
                ))}
                <p className="text-sm text-muted-foreground pt-4">
                  Boards & Bowls served 11:00am – 4:00pm
                </p>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Order Ahead CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-forest p-12 text-center"
        >
          <h3 className="font-serif text-2xl text-accent-foreground mb-4">
            Order Ahead
          </h3>
          <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">
            Skip the wait and have your favorites ready when you arrive.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-cream text-forest hover:bg-cream/90 font-medium"
              onClick={() => window.open("https://starpro.squarespace.com/sp-order-ahead", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Order Online
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
              onClick={() => window.location.href = "tel:4043650410"}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 404.365.0410 ext. 4
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvisionsSection;
