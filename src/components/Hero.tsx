import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

// const clientLogos = [
//   "sbox",
//   "Logipad",
//   "STUDIO TRAVEL",
//   "SYREON",
//   "Chick-fil-A",
//   "kapa99",
// ];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-center lg:justify-center">
          {/* Centered content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-left lg:text-center max-w-4xl"
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black border border-badge-available/20"
            >
              <span className="w-2 h-2 rounded-full bg-badge-available animate-pulse" />
              <span className="text-sm font-medium text-white">
                Available for Freelance
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-poppins font-semibold leading-[1.1] tracking-tight"
            >
              <span className="font-semibold">Full-Stack Developer Building Websites, Apps & Software Solutions</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed text-center"
            >
              Hi, I'm Dhairya — a Full-Stack Developer specializing in building modern websites, web applications, and software solutions. I focus on creating fast, scalable, and user-friendly products using modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-start lg:justify-center"
            >
              <a
                href="#contact"
                className="flex justify-center items-center inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Contact Me
                {/* <Headphones className="w-4 h-4" /> */}
              </a>
              {/* <a
                href="#services"
                className="flex justify-center items-center inline-flex items-center gap-2 px-6 py-3 text-foreground font-medium bg-gray-100 rounded-full"
              >
                View Pricing
              </a> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Client logos */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="relative py-8">
            <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-foreground/20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-foreground/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-foreground/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-foreground/20" />
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="text-muted-foreground font-semibold text-sm md:text-base tracking-wide hover:text-foreground transition-colors cursor-pointer"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
