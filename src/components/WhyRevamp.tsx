import { motion } from "framer-motion";
import { ArrowUpRight, HelpCircle } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const reasons = [
  {
    title: "Outdated Design",
    description: "First Impressions Matter. A Modern, Fresh Look Builds Trust And Keeps Visitors Engaged.",
  },
  {
    title: "Poor User Experience",
    description: "If Users Can't Navigate Easily, They'll Leave Quickly. A Revamp Can Simplify And Streamline Their Journey.",
  },
  {
    title: "Low Conversion Rates",
    description: "Not Hitting Your Goals? A Redesign Can Optimize Layout, CTAs, And Overall Flow To Turn Visitors Into Customers.",
  },
  {
    title: "Not Mobile-Friendly",
    description: "If Your Site Doesn't Look Great On Phones And Tablets, You're Losing A Huge Chunk Of Traffic.",
  },
  {
    title: "Slow Load Times",
    description: "A Sluggish Site Drives People Away. A Revamp Can Improve Speed And Performance.",
  },
  {
    title: "Brand Evolution",
    description: "Your Business Has Grown—Your Website Should Reflect That. A Redesign Ensures Your Site Matches Your Current Brand Identity.",
  },
];

const WhyRevamp = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <section className="py-24 relative">

      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-4"
        >
          <span className="font-semibold">Get</span>{" "}
          <span className="font-light italic">The Website You</span>{" "}
          <span className="font-semibold">Want</span>
          <br />
          <span className="font-light italic">Without The</span>{" "}
          <span className="font-semibold">Headache</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-muted-foreground font-medium mb-12"
        >
          Why Does Your Website Need A Revamp?
        </motion.p>

        {/* Reasons list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 mb-12"
        >
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-3">
              <span className="text-foreground mt-1">•</span>
              <p className="text-base">
                <span className="font-semibold">{reason.title}</span>
                <span className="text-muted-foreground"> — {reason.description}</span>
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => setShowContactModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Let's Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-foreground font-medium hover:text-muted-foreground transition-colors"
          >
            How I Work
            <HelpCircle className="w-4 h-4" />
          </a>
        </motion.div>
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

export default WhyRevamp;
