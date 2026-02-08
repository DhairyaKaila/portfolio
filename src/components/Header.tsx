import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Menu, X, Sun, Briefcase, User, Settings, Phone, Grid3X3 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [showDynamicIsland, setShowDynamicIsland] = useState(false);
  const [isIslandExpanded, setIsIslandExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showIslandBlur, setShowIslandBlur] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Check if at top of page
      if (scrollPosition <= 100) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Hide header when reaching projectfilter section
      const projectFilterElement = document.getElementById("projectfilter");
      const myStoryElement = document.getElementById("about"); // My Story section uses "about" id
      const isMobile = window.innerWidth < 768;
      const screenHeight = window.innerHeight;
      
      if (projectFilterElement && myStoryElement) {
        const projectFilterTop = projectFilterElement.offsetTop;
        const myStoryTop = myStoryElement.offsetTop;
        
        // Trigger when projectfilter reaches half screen height
        const triggerPoint = projectFilterTop + 500;
        
        // Hide header and show island between trigger point and when myStory reaches screen bottom
        const myStoryBottomPoint = myStoryTop - (screenHeight/2);
        
        if (window.scrollY >= triggerPoint && window.scrollY < myStoryBottomPoint) {
          setIsVisible(false);
          setShowDynamicIsland(true);
        } else {
          setIsVisible(true);
          setShowDynamicIsland(false);
        }
      }
    };

    // Listen for filter changes from FeaturedProjects component
    const handleFilterChange = (event: CustomEvent) => {
      setSelectedFilter(event.detail.filter);
    };

    // Listen for contact form success events
    const handleContactFormSuccess = (event: CustomEvent) => {
      setShowSuccessMessage(event.detail.success);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener('projectFilterChange', handleFilterChange as EventListener);
    window.addEventListener('contactFormSuccess', handleContactFormSuccess as EventListener);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('projectFilterChange', handleFilterChange as EventListener);
      window.removeEventListener('contactFormSuccess', handleContactFormSuccess as EventListener);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.header
          initial={{ y: 0 }}
          animate={{ y: isVisible ? 0 : -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 py-4"
        >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Centered floating navbar */}
        <nav className="hidden md:flex items-center justify-center">
          <div className={`flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border rounded-full px-2 py-1.5 transition-all duration-500 ease-in-out transform ${
            showSuccessMessage ? 'bg-black border-black scale-105' : ''
          }`}>
            <AnimatePresence mode="wait">
              {showSuccessMessage ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.4, 0.0, 0.2, 1],
                    scale: { type: "spring", damping: 20, stiffness: 300 }
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-white font-medium"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ 
                      duration: 0.6,
                      times: [0, 0.5, 1],
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    Message sent successfully!
                  </motion.span>
                </motion.div>
              ) : (
                <motion.div
                  key="nav"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex items-center gap-1"
                >
                <a
                  href="#"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "home" ? "bg-secondary" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {activeSection === "home" ? "Home" : ""}
                  <Home className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "projects" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "projects" ? "Projects" : ""}
                  <Briefcase className="w-4 h-4" />
                </a>
                <a
                  href="#about"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "about" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "about" ? "About" : ""}
                  <User className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "services" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "services" ? "Services" : ""}
                  <Settings className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "contact" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "contact" ? "Contact" : ""}
                  <Phone className="w-4 h-4" />
                </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile navbar */}
        <nav className="md:hidden flex items-center justify-center">
          <div className={`flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border rounded-full px-2 py-1.5 transition-all duration-500 ease-in-out transform ${
            showSuccessMessage ? 'bg-black border-black scale-105' : ''
          }`}>
            <AnimatePresence mode="wait">
              {showSuccessMessage ? (
                <motion.div
                  key="success-mobile"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.4, 0.0, 0.2, 1],
                    scale: { type: "spring", damping: 20, stiffness: 300 }
                  }}
                  className="flex items-center gap-2 px-3 py-2 text-white font-medium text-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ 
                      duration: 0.6,
                      times: [0, 0.5, 1],
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    Sent successfully!
                  </motion.span>
                </motion.div>
              ) : (
                <motion.div
                  key="nav-mobile"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex items-center gap-1"
                >
                <a
                  href="#"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "home" ? "bg-secondary" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {activeSection === "home" ? "Home" : ""}
                  <Home className="w-4 h-4" />
                </a>
                <a
                  href="#projects"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "projects" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "projects" ? "Projects" : ""}
                  <Briefcase className="w-4 h-4" />
                </a>
                <a
                  href="#about"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "about" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "about" ? "About" : ""}
                  <User className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "services" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "services" ? "Services" : ""}
                  <Settings className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium hover:bg-secondary rounded-full transition-colors ${
                    activeSection === "contact" ? "bg-secondary" : ""
                  }`}
                >
                  {activeSection === "contact" ? "Contact" : ""}
                  <Phone className="w-4 h-4" />
                </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
      </motion.header>
    </AnimatePresence>

    {/* Dynamic Island for Mobile */}
    <AnimatePresence>
      {showDynamicIsland && (
        <>
          {/* Backdrop Blur */}
          <AnimatePresence>
            {showIslandBlur && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20"
                onClick={() => {
                  setIsIslandExpanded(false);
                  setShowIslandBlur(false);
                }}
              />
            )}
          </AnimatePresence>
          
          <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center p-4"
        >
          <motion.div
            className="bg-black/90 backdrop-blur-xl rounded-full shadow-lg border border-white/10 overflow-hidden cursor-pointer"
            layout
            style={{ 
              borderRadius: isIslandExpanded ? "24px" : "9999px",
              padding: isIslandExpanded ? "16px" : "12px 24px"
            }}
            onClick={() => {
              if (!isIslandExpanded) {
                setIsIslandExpanded(true);
                setShowIslandBlur(true);
              }
            }}
          >
            <motion.div
              className="flex items-center gap-4"
              layout
            >
              {/* Collapsed State */}
              {!isIslandExpanded && (
                <>
                  <Grid3X3 className="w-4 h-4 text-white" />
                  <div className="text-white text-xs font-medium">{selectedFilter}</div>
                </>
              )}
              
              {/* Expanded State */}
              {isIslandExpanded && (
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-white text-sm font-medium">Filter Projects</div>
                    <button 
                      onClick={() => {
                        setIsIslandExpanded(false);
                        setShowIslandBlur(false);
                      }}
                      className="text-white/80 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["All", "Website", "Application", "Software", "Certificate"].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => {
                          setSelectedFilter(filter);
                          // Close island immediately and apply filter after 3 seconds
                          setIsIslandExpanded(false);
                          setShowIslandBlur(false);
                          setTimeout(() => {
                            // Dispatch custom event to notify FeaturedProjects component
                            window.dispatchEvent(new CustomEvent('projectFilterChange', { detail: { filter } }));
                          }, 400);
                        }}
                        className={`px-3 py-1 text-xs rounded-full transition-colors ${
                          selectedFilter === filter 
                            ? "bg-white text-black" 
                            : "bg-white/20 hover:bg-white/30 text-white"
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};

export default Header;
