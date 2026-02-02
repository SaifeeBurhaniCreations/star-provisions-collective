import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import dishImage from "@/assets/dish-1.jpg";
import heroBacchanalia from "@/assets/hero-bacchanalia.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: gallery1, alt: "Beef tenderloin with red wine reduction", category: "Cuisine" },
    { src: gallery2, alt: "Chocolate soufflé dessert", category: "Cuisine" },
    { src: gallery3, alt: "Private dining room", category: "Interior" },
    { src: gallery4, alt: "Fresh oysters on ice", category: "Cuisine" },
    { src: gallery5, alt: "Wine cellar", category: "Interior" },
    { src: gallery6, alt: "Herb-crusted lamb", category: "Cuisine" },
    { src: dishImage, alt: "Seared scallops", category: "Cuisine" },
    { src: heroBacchanalia, alt: "Dining atmosphere", category: "Interior" },
  ];

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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-24 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gold text-sm uppercase block mb-4"
          >
            Gallery
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">
            A Visual Journey
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gold mx-auto"
          />
        </motion.div>

        {/* Fixed Grid Gallery - 4 columns, 2 rows */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(idx)}
              className="relative cursor-pointer overflow-hidden group aspect-square"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent flex items-end p-4"
              >
                <div>
                  <span className="text-gold text-xs tracking-wider uppercase font-medium">
                    {image.category}
                  </span>
                  <p className="text-primary-foreground text-sm mt-1">
                    {image.alt}
                  </p>
                </div>
              </motion.div>

              {/* Decorative corner */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-3 right-3 w-10 h-10 border-2 border-gold/60 flex items-center justify-center bg-charcoal/50 backdrop-blur-sm"
              >
                <span className="text-gold text-lg font-light">+</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/98 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors z-50 p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </motion.button>

              {/* Navigation */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.1, x: -5 }}
                className="absolute left-4 md:left-8 text-primary-foreground hover:text-gold transition-colors z-50 p-3 bg-charcoal/50 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery("prev");
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{ scale: 1.1, x: 5 }}
                className="absolute right-4 md:right-8 text-primary-foreground hover:text-gold transition-colors z-50 p-3 bg-charcoal/50 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery("next");
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </motion.button>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl max-h-[85vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-contain"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center mt-6"
                >
                  <span className="text-gold text-sm tracking-widest uppercase">
                    {galleryImages[selectedImage].category}
                  </span>
                  <p className="text-primary-foreground text-lg mt-2 font-serif">
                    {galleryImages[selectedImage].alt}
                  </p>
                  <p className="text-primary-foreground/50 text-sm mt-2">
                    {selectedImage + 1} / {galleryImages.length}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;