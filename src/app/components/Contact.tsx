import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "from-gray-400 to-gray-600" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "from-blue-400 to-blue-600" },
    { icon: Twitter, label: "Twitter", href: "#", color: "from-cyan-400 to-blue-500" },
    { icon: Instagram, label: "Instagram", href: "#", color: "from-pink-400 to-purple-600" },
  ];

  return (
    <section ref={ref} id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black"></div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ningaraj.ukkali@example.com", color: "cyan" },
                { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", color: "violet" },
                { icon: MapPin, label: "Location", value: "India", color: "pink" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`flex items-center gap-6 p-6 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-${item.color}-400/20 hover:border-${item.color}-400/50 transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-3 p-6 bg-gradient-to-br ${social.color} rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300`}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                    <span className="text-white text-sm font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Terminal-style Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl rounded-2xl border border-cyan-400/30 overflow-hidden shadow-[0_8px_32px_rgba(6,182,212,0.2)]">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-cyan-900/40 to-violet-900/40 px-6 py-4 border-b border-cyan-400/30 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-cyan-400 font-mono text-sm">contact@ningaraj:~$</span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="space-y-2">
                  <label className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                    <span className="text-violet-400">{">"}</span> name:
                  </label>
                  <motion.div
                    animate={{
                      boxShadow: focused === "name" ? "0 0 20px rgba(6, 182, 212, 0.3)" : "none",
                    }}
                    className="relative"
                  >
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 font-mono"
                      placeholder="Enter your name"
                      required
                    />
                    {focused === "name" && (
                      <motion.div
                        layoutId="cursor"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-4 bg-cyan-400 animate-pulse"
                      />
                    )}
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <label className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                    <span className="text-violet-400">{">"}</span> email:
                  </label>
                  <motion.div
                    animate={{
                      boxShadow: focused === "email" ? "0 0 20px rgba(6, 182, 212, 0.3)" : "none",
                    }}
                    className="relative"
                  >
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 font-mono"
                      placeholder="your@email.com"
                      required
                    />
                    {focused === "email" && (
                      <motion.div
                        layoutId="cursor"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-4 bg-cyan-400 animate-pulse"
                      />
                    )}
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <label className="text-cyan-400 font-mono text-sm flex items-center gap-2">
                    <span className="text-violet-400">{">"}</span> message:
                  </label>
                  <motion.div
                    animate={{
                      boxShadow: focused === "message" ? "0 0 20px rgba(6, 182, 212, 0.3)" : "none",
                    }}
                    className="relative"
                  >
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      rows={5}
                      className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all duration-300 font-mono resize-none"
                      placeholder="Type your message here..."
                      required
                    />
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg font-semibold text-white shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.8)] transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
