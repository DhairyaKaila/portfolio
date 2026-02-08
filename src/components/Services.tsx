import { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, ArrowUpRight, Sparkles } from "lucide-react";
import ContactModal from "./ContactModal";

const tabs = [
  { id: "landing", label: "Web Landing Page", icon: Sparkles },
  { id: "mobile", label: "Mobile App" },
  { id: "pitch", label: "Pitch Deck" },
  { id: "dashboard", label: "Dashboard/SAAS" },
  { id: "branding", label: "Branding/Logo" },
];

interface PricingPlan {
  icon: typeof Monitor;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  payment: string;
  features: string[];
}

const pricingPlans: Record<string, PricingPlan[]> = {
  landing: [
    {
      icon: Monitor,
      title: "Landing Page",
      subtitle: "Design Or Revamp",
      description: "A comprehensive design or redesign tailored to elevate user experience, increase conversions, and align seamlessly with your brand objectives.",
      price: "0$",
      payment: "Free",
      features: [
        "Full Landing Page",
        "Design Guideline",
        "1-2 Week Turnaround",
        "Desktop, Tablet And Mobile Version",
        "Communicate Via Slack",
        "Satisfaction Guaranteed",
      ],
    },
    {
      icon: Monitor,
      title: "Full Website",
      subtitle: "Design Or Revamp",
      description: "A full-scale design or revamp crafted to improve user experience, drive more conversions, and reflect your brand's vision and goals.",
      price: "0$",
      payment: "Free",
      features: [
        "Full Website",
        "Scalable Design Guideline",
        "4-7 Week Turnaround",
        "Responsive For Every Device",
        "Communicate Via Slack",
        "Satisfaction Guaranteed",
      ],
    },
  ],
  mobile: [
    {
      icon: Monitor,
      title: "Mobile App",
      subtitle: "UI/UX Design",
      description: "Complete mobile application design with user-centered approach and seamless experience across platforms.",
      price: "0$",
      payment: "Free",
      features: [
        "Full App Design",
        "Design System",
        "3-5 Week Turnaround",
        "iOS & Android Compatible",
        "Communicate Via Slack",
        "Satisfaction Guaranteed",
      ],
    },
    {
      icon: Monitor,
      title: "App Redesign",
      subtitle: "Complete Overhaul",
      description: "Transform your existing app with modern design patterns and improved user experience.",
      price: "0$",
      payment: "Free",
      features: [
        "Complete Redesign",
        "User Research",
        "4-8 Week Turnaround",
        "Cross-Platform Design",
        "Communicate Via Slack",
        "Satisfaction Guaranteed",
      ],
    },
  ],
  pitch: [
    {
      icon: Monitor,
      title: "Pitch Deck",
      subtitle: "Design",
      description: "Professional pitch deck design that tells your story and captivates investors.",
      price: "0$",
      payment: "Free",
      features: [
        "Up to 15 Slides",
        "Custom Graphics",
        "1 Week Turnaround",
        "Editable Template",
        "Communicate Via Slack",
        "Satisfaction Guaranteed",
      ],
    },
  ],
  dashboard: [
    {
      icon: Monitor,
      title: "Dashboard",
      subtitle: "UI/UX Design",
      description: "Data-rich dashboard design with intuitive navigation and actionable insights.",
      price: "0$",
      payment: "Free",
      features: [
        "Full Dashboard Design",
        "Data Visualization",
        "3-5 Week Turnaround",
        "Responsive Design",
        "Communicate Via Slack",
        "Satisfaction Guaranteed",
      ],
    },
  ],
  branding: [
    {
      icon: Monitor,
      title: "Logo Design",
      subtitle: "Brand Identity",
      description: "Distinctive logo and brand identity that represents your vision.",
      price: "0$",
      payment: "Free",
      features: [
        "3 Logo Concepts",
        "Brand Guidelines",
        "1-2 Week Turnaround",
        "All File Formats",
        "Communicate Via Slack",
        "Satisfaction Guaranteed",
      ],
    },
  ],
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("landing");
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <section id="services" className="py-24 relative">

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12"
        >
          <span className="font-semibold">What</span>{" "}
          <span className="font-light italic">Can I Serve</span>{" "}
          <span className="font-semibold">You!</span>
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-start md:justify-center overflow-x-auto gap-3 mb-12 pb-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {tab.label}
              {tab.icon && <tab.icon className="w-4 h-4" />}
            </button>
          ))}
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {pricingPlans[activeTab]?.map((plan, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-xl p-6 md:p-8"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-foreground/10" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 border-b border-foreground/10" />

              {/* Icon */}
              <div className="mb-6">
                <plan.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-poppins font-semibold mb-1">
                {plan.title}{" "}
                <span className="font-light italic">{plan.subtitle}</span>
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-poppins font-bold">{plan.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">{plan.payment}</p>

              {/* CTA */}
              <button
                onClick={() => setShowContactModal(true)}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity mb-6"
              >
                Let's Get Started
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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

export default Services;
