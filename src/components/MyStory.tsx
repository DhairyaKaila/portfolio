import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import projectImage from "@/assets/original-fc6b92e9f83ccd78e5eab377f75c8003.webp";

const MyStory = () => {
  return (
    <section id="about" className="py-24 relative">

      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-poppins font-semibold text-center mb-12"
        >
          <span className="font-semibold">My</span>{" "}
          <span className="font-light italic">Story</span>
        </motion.h2>

        {/* First paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-2"
        >
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">I'm Dhairya, a Full-Stack Developer focused on building modern websites, web applications, and software solutions.</span>{" "}
            <span className="text-muted-foreground">
              I am a detail-oriented and results-driven developer who writes clean, maintainable code and delivers scalable, user-friendly applications.
            </span>
          </p>
        </motion.div>

        {/* Polaroid photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center items-center gap-4 md:gap-8 my-3"
        >
          {/* Polaroid 1 */}
          {/* <div className="relative">
            <div className="polaroid">
              <div className="tape" />
              <img
                src={projectImage}
                alt="Project photo 1"
                className="w-40 md:w-56 h-48 md:h-64 object-cover grayscale"
              />
            </div>
            <div className="absolute -top-2 left-4 w-8 h-4 bg-foreground/10 rotate-[-8deg]" />
          </div> */}

          {/* Polaroid 2 */}
          {/* <div className="relative -mt-8">
            <div className="polaroid-alt">
              <div className="tape" />
              <img
                src={projectImage}
                alt="Project photo 2"
                className="w-40 md:w-56 h-48 md:h-64 object-cover grayscale"
              />
            </div>
            <div className="absolute -top-2 right-4 w-8 h-4 bg-foreground/10 rotate-[12deg]" />
          </div> */}
        </motion.div>

        {/* Second paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">I am continuously learning and improving my skills</span>{" "}
            <span className="text-muted-foreground">
              to stay up to date with modern technologies.
I enjoy working in
            </span>{" "}
            <span className="font-semibold">collaborative teams</span>{" "}
          <span className="text-muted-foreground">and contributing to projects that focus on</span>{" "}
            <span className="font-semibold">
              quality, performance, and real-world impact.
            </span>
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            In My Free Time, I Love Solo Adventures—Especially Long Highway Rides And Biking Through Hills. Being On The Road For Hours Fills Me With Energy And Pure Joy!
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View My Resume
            <FileText className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MyStory;
