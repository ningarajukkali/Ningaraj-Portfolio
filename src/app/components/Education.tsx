import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2022 - 2025",
    title: "Bachelor of Computer Applications",
    institution: "BCA 3rd Year - 6th Semester",
    description: "Currently pursuing BCA with focus on programming, databases, web development, and AI fundamentals.",
    icon: GraduationCap,
    color: "cyan",
    achievements: ["Web Development", "Database Management", "Python Programming", "AI Basics"],
  },
  {
    year: "2023",
    title: "Advanced Web Development",
    institution: "Self-Learning & Projects",
    description: "Mastered modern web technologies including HTML5, CSS3, JavaScript, and responsive design principles.",
    icon: BookOpen,
    color: "violet",
    achievements: ["Responsive Design", "Modern CSS", "JavaScript ES6+", "Git & GitHub"],
  },
  {
    year: "2024",
    title: "Python & Database Specialization",
    institution: "Academic & Personal Projects",
    description: "Deep dive into Python programming and database management with MySQL, building real-world applications.",
    icon: Award,
    color: "pink",
    achievements: ["Python Projects", "MySQL Mastery", "API Integration", "Problem Solving"],
  },
  {
    year: "2025 - Present",
    title: "AI & Machine Learning Journey",
    institution: "Continuous Learning",
    description: "Exploring artificial intelligence, machine learning concepts, and their practical applications in software development.",
    icon: Sparkles,
    color: "emerald",
    achievements: ["AI Fundamentals", "ML Basics", "Data Analysis", "Future Technologies"],
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="education" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Education & <span className="text-cyan-400">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic path and continuous learning adventures
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-violet-500 to-pink-500 hidden lg:block"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-cyan-400/30 transition-all duration-300"
                  >
                    {/* Year badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r from-${item.color}-500/20 to-${item.color}-600/20 border border-${item.color}-400/30 text-${item.color}-400 font-bold text-sm mb-4`}
                    >
                      {item.year}
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className={`text-${item.color}-400 font-semibold mb-4`}>{item.institution}</p>
                    <p className="text-gray-400 mb-6">{item.description}</p>

                    {/* Achievements */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"} justify-center`}>
                      {item.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className={`px-3 py-1 bg-${item.color}-500/10 border border-${item.color}-400/30 rounded-lg text-${item.color}-400 text-xs font-medium`}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="relative flex items-center justify-center w-24 h-24 my-8 lg:my-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10">
                  {/* Glowing ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 blur-xl`}
                  />

                  {/* Icon container */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center border-4 border-black shadow-[0_0_30px_rgba(6,182,212,0.5)]`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Empty space for other side */}
                <div className="w-full lg:w-[calc(50%-3rem)] hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Years of Study", value: "3+", color: "cyan" },
            { label: "Projects Built", value: "15+", color: "violet" },
            { label: "Skills Acquired", value: "20+", color: "pink" },
            { label: "Certifications", value: "5+", color: "emerald" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-${stat.color}-400/20 hover:border-${stat.color}-400/50 transition-all duration-300`}
            >
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
