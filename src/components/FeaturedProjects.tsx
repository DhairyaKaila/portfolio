import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface Project {
  id: number;
  year: string;
  category: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  skills: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    year: "2025",
    category: "Mobile App, Website & Admin",
    title: "Strategic Modern Web Landing Design For EdTech Organization, That Simplify Student's Learning",
    description: "Comprehensive design solution for an educational technology platform",
    metrics: [
      { value: "60%", label: "Increase in satisfaction resulting to customer onboarding efficiency." },
      { value: "50%", label: "Rise in Help Juice documentation visits suggests increased customization interest." },
    ],
    skills: ["Team Leadership", "Roadmapping", "Design System", "UX Design & QA"],
    gradient: "project-gradient-green",
  },
  {
    id: 2,
    year: "2025",
    category: "Finance Mobile App, Website & Admin",
    title: "Take Control, Reach Your Financial Goals",
    description: "Fintech application helping users manage their finances effectively",
    metrics: [
      { value: "60%", label: "Increase in satisfaction resulting to customer onboarding efficiency." },
      { value: "50%", label: "Rise in Help Juice documentation visits suggests increased customization interest." },
    ],
    skills: ["Team Leadership", "Roadmapping", "Design System", "UX Design & QA"],
    gradient: "project-gradient-purple",
  },
  {
    id: 3,
    year: "2025",
    category: "SAAS, Task Management",
    title: "Increase your productivity with the best task Management Dashboard",
    description: "Productivity SaaS platform for team collaboration",
    metrics: [
      { value: "60%", label: "Increase in satisfaction resulting to customer onboarding efficiency." },
      { value: "50%", label: "Rise in Help Juice documentation visits suggests increased customization interest." },
    ],
    skills: ["Team Leadership", "Roadmapping", "Design System", "UX Design & QA"],
    gradient: "project-gradient-pink",
  },
];

// Project cards for filtering
const projectCards = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    category: "Website",
    image: "/src/assets/website1.webp",
    fullDescription: "A comprehensive e-commerce platform built with modern technologies, featuring user authentication, payment integration, inventory management, and real-time order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    gallery: [
      "/src/assets/website1.webp",
      "/src/assets/website1.webp",
      "/src/assets/website1.webp"
    ]
  },
  {
    id: 2,
    title: "Finance Tracker App",
    description: "Mobile app for personal finance management",
    category: "Application",
    image: "/src/assets/e6a616504e37b8d6e1a4bb13678c35dc.webp",
    fullDescription: "A comprehensive finance tracking application that helps users manage budgets, track expenses, and visualize spending patterns with interactive charts and reports.",
    technologies: ["React Native", "Firebase", "Redux", "Charts.js"],
    gallery: [
      "/src/assets/e6a616504e37b8d6e1a4bb13678c35dc.webp",
      "/src/assets/e6a616504e37b8d6e1a4bb13678c35dc.webp",
      "/src/assets/e6a616504e37b8d6e1a4bb13678c35dc.webp"
    ]
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "SaaS platform for team collaboration",
    category: "Software",
    image: "/src/assets/software1.webp",
    fullDescription: "A powerful task management SaaS platform designed for teams, featuring real-time collaboration, project tracking, and comprehensive analytics.",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    gallery: [
      "/src/assets/software1.webp",
      "/src/assets/software1.webp",
      "/src/assets/software1.webp"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Creative portfolio with modern design",
    category: "Website",
    image: "/src/assets/website2.webp",
    fullDescription: "A stunning portfolio website showcasing creative work with smooth animations, responsive design, and optimized performance.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    gallery: [
      "/src/assets/website2.webp",
      "/src/assets/website2.webp",
      "/src/assets/website2.webp"
    ]
  },
  {
    id: 5,
    title: "Design Certificate",
    description: "Professional UX Design certification",
    category: "Certificate",
    image: "/src/assets/cert1.jpg",
    fullDescription: "Professional certification in UX Design covering user research, interface design, prototyping, and usability testing methodologies.",
    technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    gallery: [
      "/src/assets/cert1.jpg",
      "/src/assets/cert2.jpg",
      "/src/assets/cert3.jpg",
      "/src/assets/cert4.jpg"
    ]
  },
  {
    id: 6,
    title: "Healthcare App",
    description: "Patient management and appointment system",
    category: "Application",
    image: "/src/assets/original-fc6b92e9f83ccd78e5eab377f75c8003.webp",
    fullDescription: "A comprehensive healthcare application for patient management, appointment scheduling, and medical record tracking with HIPAA compliance.",
    technologies: ["React Native", "Node.js", "MySQL", "AWS"],
    gallery: [
      "/src/assets/original-fc6b92e9f83ccd78e5eab377f75c8003.webp",
      "/src/assets/original-fc6b92e9f83ccd78e5eab377f75c8003.webp",
      "/src/assets/original-fc6b92e9f83ccd78e5eab377f75c8003.webp"
    ]
  },
  {
    id: 7,
    title: "CRM Software",
    description: "Customer relationship management system",
    category: "Software",
    image: "/src/assets/software2.webp",
    fullDescription: "A comprehensive CRM software solution for managing customer relationships, sales pipelines, and business analytics with advanced reporting features.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    gallery: [
      "/src/assets/software2.webp",
      "/src/assets/software2.webp",
      "/src/assets/software2.webp"
    ]
  },
  {
    id: 8,
    title: "UI/UX Certificate",
    description: "User interface and experience design certification",
    category: "Certificate",
    image: "/src/assets/cert2.jpg",
    fullDescription: "Advanced certification in UI/UX design covering modern design principles, user research methodologies, and prototyping techniques.",
    technologies: ["Figma", "Sketch", "Adobe XD", "Principle"],
    gallery: [
      "/src/assets/cert2.jpg",
      "/src/assets/cert2.jpg",
      "/src/assets/cert2.jpg"
    ]
  },
  {
    id: 9,
    title: "Web Development Certificate",
    description: "Full-stack web development certification",
    category: "Certificate",
    image: "/src/assets/cert3.jpg",
    fullDescription: "Comprehensive certification in modern web development covering frontend and backend technologies, database design, and deployment strategies.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    gallery: [
      "/src/assets/cert3.jpg",
      "/src/assets/cert3.jpg",
      "/src/assets/cert3.jpg"
    ]
  },
  {
    id: 10,
    title: "Mobile Development Certificate",
    description: "iOS and Android development certification",
    category: "Certificate",
    image: "/src/assets/cert4.jpg",
    fullDescription: "Professional certification in mobile app development covering native and cross-platform technologies for iOS and Android applications.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    gallery: [
      "/src/assets/cert4.jpg",
      "/src/assets/cert4.jpg",
      "/src/assets/cert4.jpg"
    ]
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className={`${project.gradient} rounded-2xl p-6 md:p-8`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-sm text-muted-foreground">{project.year}</span>
        <span className="text-sm text-muted-foreground">{project.category}</span>
      </div>

      {/* Title & Arrow */}
      <div className="flex justify-between items-start gap-4 mb-6">
        <h3 className="text-xl md:text-2xl font-poppins font-semibold leading-tight max-w-2xl">
          {project.title}
        </h3>
        <button className="shrink-0 p-3 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Metrics */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {project.metrics.map((metric, idx) => (
          <div key={idx}>
            <div className="text-3xl font-poppins font-bold mb-1">{metric.value}</div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="pt-4 border-t border-foreground/10">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Skills:</span>{" "}
          {project.skills.join(", ")}
        </p>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Listen for filter changes from Header component
  useEffect(() => {
    const handleFilterChange = (event: CustomEvent) => {
      // Store current scroll position
      const scrollPosition = window.scrollY;
      
      setServiceFilter(event.detail.filter);
      
      // Restore scroll position after filter change
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 50);
    };

    window.addEventListener('projectFilterChange', handleFilterChange as EventListener);
    
    return () => {
      window.removeEventListener('projectFilterChange', handleFilterChange as EventListener);
    };
  }, []);

  const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
    useEffect(() => {
      // Hide scrollbar when modal opens
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scrollbar when modal closes
        document.body.style.overflow = 'unset';
      };
    }, []);

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="h-full w-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Description - Scrollable */}
            <div className="bg-background border-b border-border p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-poppins font-bold">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="p-3 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Main Image - Scrollable */}
            {/* <div className="w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div> */}

            {/* Technologies Section - Scrollable */}
            <div className="container mx-auto px-6 py-12">
              <div className="mb-12">
                <h3 className="text-2xl font-poppins font-bold mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery Section - Scrollable */}
              <div>
                <h3 className="text-2xl font-poppins font-bold mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery.map((image: string, index: number) => (
                    <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-24"
    >

      <div className="container mx-auto px-6 lg:px-8">
        {/* Section title - NOT sticky, scrolls away */}
        {/* <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-16"
        >
          <span className="font-semibold">Some</span>{" "}
          <span className="font-light italic">Of My Featured</span>{" "}
          <span className="font-semibold">Project</span>
        </motion.h2> */}

        {/* Sticky stacked project cards */}
        {/* <div className="max-w-4xl mx-auto">
          <div className="sticky top-24 z-0">
            <div className="relative h-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[92%] h-10 project-gradient-blue rounded-t-xl" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[96%] h-10 project-gradient-purple rounded-t-xl" />
            </div>
          </div>
          
          <div className="relative -mt-1">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="sticky mb-6"
                style={{ top: `${120 + index * 16}px`, zIndex: index + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <div id="projectfilter" className="container mx-auto px-6 lg:px-8">
        {/* Service Filters */}
        {/* <div className="flex justify-start md:justify-center overflow-x-auto gap-3 mb-12 pb-2 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {["All", "Website", "Application", "Software", "Certificate"].map((filter) => (
            <button
              key={filter}
              onClick={() => {
                // Store current scroll position
                const scrollPosition = window.scrollY;
                
                setServiceFilter(filter);
                // Dispatch custom event to keep Header in sync
                window.dispatchEvent(new CustomEvent('projectFilterChange', { detail: { filter } }));
                
                // Restore scroll position after filter change
                setTimeout(() => {
                  window.scrollTo(0, scrollPosition);
                }, 50);
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                serviceFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div> */}

          <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">{serviceFilter}</h1>
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectCards
            .filter(card => serviceFilter === "All" || card.category === serviceFilter)
            .map((card) => (
              <div 
                key={card.id} 
                className="relative group overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedProject(card)}
              >
                <div className="aspect-[4/3]">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm mb-4">{card.description}</p>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs">{card.category}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default FeaturedProjects;
