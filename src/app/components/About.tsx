import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Brain, Rocket } from "lucide-react";
import profileImage from "figma:asset/5d68379009d6267f0cfcc202f1d25df474786339.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto"></div>
        </motion.div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* 3D Glass Card */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-[0_8px_32px_rgba(6,182,212,0.15)]">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-violet-400/50 rounded-br-3xl"></div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative flex-shrink-0"
              >
                <div className="relative w-48 h-48 lg:w-64 lg:h-64">
                  {/* Glowing border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <img
                      src={profileImage}
                      alt="Ningaraj Ukkali"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ningaraj Ukkali
                </h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm a <span className="text-cyan-400 font-semibold">21-year-old developer</span> and{" "}
                    <span className="text-violet-400 font-semibold">BCA student</span> currently in my 3rd year, 6th semester.
                  </p>
                  <p>
                    Passionate about building modern web applications and exploring the fascinating world of{" "}
                    <span className="text-cyan-400 font-semibold">Artificial Intelligence</span>. I love turning ideas into reality through clean, efficient code.
                  </p>
                  <p>
                    My journey in tech is driven by curiosity and a desire to create solutions that make a difference. Always learning, always building, always growing.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Code2,
                  title: "Web Developer",
                  description: "Building responsive and modern web applications",
                  color: "cyan",
                },
                {
                  icon: Brain,
                  title: "AI Enthusiast",
                  description: "Exploring machine learning and AI technologies",
                  color: "violet",
                },
                {
                  icon: Rocket,
                  title: "Quick Learner",
                  description: "Always adapting to new technologies and trends",
                  color: "cyan",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-xl bg-gradient-to-br from-${feature.color}-500/10 to-transparent border border-${feature.color}-400/20 hover:border-${feature.color}-400/50 transition-all duration-300`}
                >
                  <feature.icon className={`w-10 h-10 text-${feature.color}-400 mb-4`} />
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
