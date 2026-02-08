import { motion } from "framer-motion";
import { Mail, Phone, X, MessageCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowSuccess?: (show: boolean) => void;
}

const ContactModal = ({ isOpen, onClose, onShowSuccess }: ContactModalProps) => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    description: ''
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ca30fd0f-9812-4352-a1ab-db38f63f7b97',
          name: formData.email, // Using email as name since we don't have a name field
          email: formData.email,
          subject: formData.title,
          message: formData.description,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setFormData({ email: '', title: '', description: '' });
        setShowForm(false);
        setShowSuccess(true);
        onClose();
        
        // Call parent callback to show success message
        if (onShowSuccess) {
          onShowSuccess(true);
        }
        
        // Dispatch custom event for global success message
        window.dispatchEvent(new CustomEvent('contactFormSuccess', { detail: { success: true } }));
        
        // Hide success message after 2 seconds
        setTimeout(() => {
          setShowSuccess(false);
          if (onShowSuccess) {
            onShowSuccess(false);
          }
          // Dispatch event to hide success message
          window.dispatchEvent(new CustomEvent('contactFormSuccess', { detail: { success: false } }));
        }, 2000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  // Show Form Modal if form is open
  if (showForm) {
    return (
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setShowForm(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-background rounded-2xl p-8 max-w-md w-full border border-border shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Send Message</h3>
            <button
              onClick={() => setShowForm(false)}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="What's this about?"
              />
            </div>

            {/* Description Field */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Tell me more about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Show Main Contact Modal
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="bg-background rounded-2xl p-8 max-w-md w-full border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Call Option */}
          <a
            href="tel:+918160067515"
            className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors group"
          >
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Call</h4>
              <p className="text-sm text-muted-foreground">+91 81600 67515</p>
            </div>
          </a>

          {/* WhatsApp Option */}
          <a
            href="https://wa.me/918160067515"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors group"
          >
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">WhatsApp</h4>
              <p className="text-sm text-muted-foreground">+91 81600 67515</p>
            </div>
          </a>

          {/* Email Option */}
          <a
            href="mailto:dhairykaila@gmail.com"
            className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors group"
          >
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">Email</h4>
              <p className="text-sm text-muted-foreground">dhairykaila@gmail.com</p>
            </div>
          </a>

          {/* Send Message Option */}
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors group w-full"
          >
            <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Send className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold">Send Message Here</h4>
              {/* <p className="text-sm text-muted-foreground">Quick contact form</p> */}
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;
