import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code, Database, Palette, Globe, Brain, FileCode } from "lucide-react";

const skills = [
  { name: "Python", icon: Code, level: 85, color: "from-yellow-400 to-blue-500" },
  { name: "HTML", icon: FileCode, level: 90, color: "from-orange-500 to-red-600" },
  { name: "CSS", icon: Palette, level: 85, color: "from-blue-400 to-cyan-500" },
  { name: "JavaScript", icon: Globe, level: 80, color: "from-yellow-300 to-yellow-500" },
  { name: "MySQL", icon: Database, level: 75, color: "from-cyan-400 to-blue-600" },
  { name: "AI Basics", icon: Brain, level: 70, color: "from-purple-400 to-pink-500" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>
      
      {/* Floating grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* 3D Floating Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50,
              }}
              className="relative group"
              style={{ perspective: 1000 }}
            >
              {/* Glowing background effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-cyan-400/30 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  animate={hoveredIndex === index ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 1 }}
                  className="mb-6"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-3 shadow-lg`}>
                    <skill.icon className="w-full h-full text-white" />
                  </div>
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                    <motion.div
                      animate={{
                        x: ["0%", "100%", "0%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>

                {/* Floating particles */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -30],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h4 className="text-xl font-bold text-white mb-4">Also familiar with</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Git", "VS Code", "Linux", "REST APIs", "Responsive Design", "Problem Solving"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/30 rounded-lg text-cyan-400 text-sm font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
