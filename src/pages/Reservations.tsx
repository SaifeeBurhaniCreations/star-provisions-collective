import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, Clock, Users, ArrowLeft, Phone, Mail } from "lucide-react";
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
import heroBacchanalia from "@/assets/hero-bacchanalia.jpg";

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [partySize, setPartySize] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const timeSlots = [
    "5:30 PM", "5:45 PM", "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
    "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM", "8:00 PM", "8:15 PM",
    "8:30 PM", "8:45 PM", "9:00 PM"
  ];

  const partySizes = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !partySize) {
      toast({
        title: "Please complete all required fields",
        description: "Date, time, and party size are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Reservation Request Submitted",
      description: `We've received your request for ${partySize} guests on ${format(date, "MMMM do, yyyy")} at ${time}. We'll confirm via email shortly.`,
    });
  };

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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBacchanalia}
            alt="Bacchanalia dining room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
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
            Bacchanalia
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl text-primary-foreground mb-4"
          >
            Make a Reservation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-primary-foreground/70 max-w-xl mx-auto"
          >
            Join us for an unforgettable four-course dining experience
          </motion.p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="font-serif text-3xl text-foreground mb-2">
                  Reserve Your Table
                </h2>
                <p className="text-muted-foreground">
                  Reservations can be made up to three months in advance
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Date, Time, Party Size Row */}
                <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-4">
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Date *</Label>
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
                          {date ? format(date, "MMM d, yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date < new Date() || date.getDay() === 0
                          }
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Select */}
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Time *</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="border-border hover:border-gold hover:bg-gold/5 transition-colors">
                        <Clock className="mr-2 h-4 w-4 text-gold" />
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Party Size */}
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Party Size *</Label>
                    <Select value={partySize} onValueChange={setPartySize}>
                      <SelectTrigger className="border-border hover:border-gold hover:bg-gold/5 transition-colors">
                        <Users className="mr-2 h-4 w-4 text-gold" />
                        <SelectValue placeholder="Guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {partySizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size} {parseInt(size) === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>

                {/* Name Row */}
                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">First Name *</Label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="border-border focus:border-gold hover:border-gold/50 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Last Name *</Label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="border-border focus:border-gold hover:border-gold/50 transition-colors"
                      required
                    />
                  </div>
                </motion.div>

                {/* Contact Row */}
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

                {/* Special Requests */}
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Special Requests</Label>
                  <Textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Dietary restrictions, celebrations, seating preferences..."
                    className="border-border focus:border-gold hover:border-gold/50 transition-colors min-h-[100px]"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-burgundy-light text-primary-foreground transition-all duration-300 hover:shadow-elegant"
                  >
                    Request Reservation
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    You'll receive a confirmation email within 24 hours
                  </p>
                </motion.div>
              </form>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-muted/50 p-8 border border-border">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Dining Information
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Prix Fixe Menu:</strong> $140 per person
                  </p>
                  <p>
                    <strong className="text-foreground">Hours:</strong> Monday – Saturday, Dinner from 5:30pm
                  </p>
                  <p>
                    <strong className="text-foreground">Dress Code:</strong> Smart Casual
                  </p>
                  <p>
                    <strong className="text-foreground">Capacity:</strong> 90 seats in dining room, bar area available
                  </p>
                </div>
              </div>

              <div className="bg-charcoal p-8">
                <h3 className="font-serif text-xl text-primary-foreground mb-4">
                  Prefer to Call?
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  Our team is happy to assist with reservations, private dining, or special requests.
                </p>
                <div className="space-y-3">
                  <motion.a
                    href="tel:4043650410"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gold hover:text-gold-muted transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>404.365.0410 ext. 2</span>
                  </motion.a>
                  <motion.a
                    href="mailto:office@eatoutoften.net"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>office@eatoutoften.net</span>
                  </motion.a>
                </div>
              </div>

              <div className="border border-gold/30 p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Large Parties & Events
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For parties of 8 or more, or for private dining inquiries, please contact us directly or visit our Private Events page.
                </p>
                <Link to="/private-events">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    Private Events
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

export default Reservations;
