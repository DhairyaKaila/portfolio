import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Contact = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <section id="contact" className="py-24 relative">

      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-center gap-8">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              <span className="font-semibold">Your</span>{" "}
              <span className="font-light italic">Vision, My</span>{" "}
              <span className="font-semibold">Creation</span>
              <br />
              <span className="font-light italic">Let's</span>{" "}
              <span className="font-semibold">Bring It To Life</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-8">
              I Seriously Think It's Time You Get That Design Revamped Because Let's Be Honest, Your Brand
              Deserves Better Than A Clunky, Outdated Look. A Fresh, Modern Redesign Can Completely
              Transform How People Experience Your Site, Turning Casual Visitors Into Loyal Customers. Let's
              Level It Up.
            </p>

            {/* Subheading */}
            <div className="mb-6">
              <p className="font-semibold text-lg">
                Looking For Something{" "}
                <span className="font-light italic">Unique?</span>
              </p>
              <p className="font-semibold text-lg">
                Feel Free To Share{" "}
                <span className="font-light italic">Your Ideas!</span>
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Tell us if we're the perfect fit to turn your amazing ideas into exceptional work!
            </p>

            {/* Email CTA */}
            <button
              onClick={() => setShowContactModal(true)}
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contact Me              
            </button>
          </motion.div>

          {/* Right - Avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-muted" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
        onShowSuccess={setShowSuccessMessage}
      />
    </section>
  );
};

export default Contact;
