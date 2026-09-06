import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, payment integration, and admin dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "AI ChatBot Assistant",
    description: "Intelligent chatbot using natural language processing to assist users with queries.",
    tech: ["Python", "AI/ML", "Flask"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Portfolio Dashboard",
    description: "Personal portfolio management system with analytics and content management features.",
    tech: ["JavaScript", "CSS", "MySQL"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Task Manager Pro",
    description: "Productivity app for managing tasks, projects, and team collaboration efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather information with beautiful UI and location-based forecasts.",
    tech: ["JavaScript", "API Integration"],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    title: "Student Portal System",
    description: "Complete student management system with grades, attendance, and course management.",
    tech: ["Python", "MySQL", "HTML/CSS"],
    gradient: "from-indigo-500 to-blue-600",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                {/* Glowing effect on hover */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-cyan-400/30 transition-all duration-300 flex flex-col">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-cyan-400/30 rounded-tr-2xl"></div>

                  {/* Project Icon/Number */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <span className="text-white font-bold text-xl">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Animated particles on hover */}
                  {hoveredIndex === index && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            y: [0, -40],
                            x: [(Math.random() - 0.5) * 20],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
