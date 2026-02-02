import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, Users, ArrowLeft, Phone, Mail, Sparkles, UtensilsCrossed, Wine } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import gallery3 from "@/assets/gallery-3.jpg";

const PrivateEvents = () => {
  const [date, setDate] = useState<Date>();
  const [eventType, setEventType] = useState<string>("");
  const [guestCount, setGuestCount] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    eventDetails: "",
  });

  const eventTypes = [
    "Corporate Dinner",
    "Private Celebration",
    "Wedding Rehearsal",
    "Anniversary",
    "Birthday",
    "Holiday Party",
    "Business Meeting",
    "Wine Dinner",
    "Other",
  ];

  const guestCounts = ["10-20", "21-30", "31-40", "41-50", "50+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest! Our events team will contact you within 48 hours.",
    });
  };

  const features = [
    {
      icon: UtensilsCrossed,
      title: "Custom Menus",
      description: "Work with our chefs to create a bespoke menu tailored to your event",
    },
    {
      icon: Wine,
      title: "Wine Pairings",
      description: "Our sommelier will curate the perfect wines for your celebration",
    },
    {
      icon: Sparkles,
      title: "Full Buyouts",
      description: "Reserve the entire restaurant for an exclusive evening",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={gallery3}
            alt="Private dining room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase">Back to Home</span>
            </motion.div>
          </Link>

          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold text-sm uppercase block mb-4"
          >
            Exclusive Experiences
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl text-primary-foreground mb-4"
          >
            Private Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary-foreground/70 max-w-xl mx-auto text-lg"
          >
            Create unforgettable moments in Atlanta's most celebrated restaurant
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-background p-8 border border-border hover:border-gold/50 transition-all duration-300 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="font-serif text-3xl text-foreground mb-2">
                  Event Inquiry
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your event and we'll craft the perfect experience
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Event Details Row */}
                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Event Type *</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger className="border-border hover:border-gold hover:bg-gold/5 transition-colors">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Guest Count *</Label>
                    <Select value={guestCount} onValueChange={setGuestCount}>
                      <SelectTrigger className="border-border hover:border-gold hover:bg-gold/5 transition-colors">
                        <Users className="mr-2 h-4 w-4 text-gold" />
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestCounts.map((count) => (
                          <SelectItem key={count} value={count}>
                            {count} Guests
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                {/* Date */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal border-border hover:border-gold hover:bg-gold/5",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                        {date ? format(date, "MMMM d, yyyy") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </motion.div>

                {/* Contact Info */}
                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Your Name *</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-border focus:border-gold hover:border-gold/50 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Company</Label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="border-border focus:border-gold hover:border-gold/50 transition-colors"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Email *</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-border focus:border-gold hover:border-gold/50 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Phone *</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-border focus:border-gold hover:border-gold/50 transition-colors"
                      required
                    />
                  </div>
                </motion.div>

                {/* Event Details */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Tell Us About Your Event</Label>
                  <Textarea
                    value={formData.eventDetails}
                    onChange={(e) => setFormData({ ...formData, eventDetails: e.target.value })}
                    placeholder="Share any special requests, dietary requirements, themes, or details about your celebration..."
                    className="border-border focus:border-gold hover:border-gold/50 transition-colors min-h-[120px]"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-burgundy-light text-primary-foreground transition-all duration-300 hover:shadow-elegant"
                  >
                    Submit Inquiry
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Our events team will respond within 48 hours
                  </p>
                </motion.div>
              </form>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-charcoal p-8">
                <h3 className="font-serif text-2xl text-primary-foreground mb-6">
                  Private Dining Spaces
                </h3>
                <div className="space-y-6">
                  <div className="border-b border-primary-foreground/20 pb-4">
                    <h4 className="text-gold font-medium mb-2">Semi-Private Dining</h4>
                    <p className="text-primary-foreground/70 text-sm">
                      Up to 20 guests in an intimate setting within the main dining room
                    </p>
                  </div>
                  <div className="border-b border-primary-foreground/20 pb-4">
                    <h4 className="text-gold font-medium mb-2">Full Restaurant Buyout</h4>
                    <p className="text-primary-foreground/70 text-sm">
                      Exclusive use of Bacchanalia for up to 90 guests
                    </p>
                  </div>
                  <div>
                    <h4 className="text-gold font-medium mb-2">Star Provisions</h4>
                    <p className="text-primary-foreground/70 text-sm">
                      Catering services available for off-site events
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-8 border border-border">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Contact Our Events Team
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="tel:4043650410"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>404.365.0410 ext. 2</span>
                  </motion.a>
                  <motion.a
                    href="mailto:office@eatoutoften.net"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4 text-gold" />
                    <span>office@eatoutoften.net</span>
                  </motion.a>
                </div>
              </div>

              <div className="border border-gold/30 p-8 text-center">
                <p className="text-muted-foreground text-sm mb-4">
                  Looking to make a regular reservation?
                </p>
                <Link to="/reservations">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    Book a Table
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateEvents;
