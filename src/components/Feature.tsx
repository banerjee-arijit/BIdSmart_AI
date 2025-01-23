import { motion } from "framer-motion";
import React from "react";
import {
  Video,
  Brain,
  Shield,
  Zap,
  Users,
  Lock,
  DollarSign,
  Sparkles,
  Bot,
  BarChart3,
  Share2,
  Eye,
  Wallet,
  Key,
} from "lucide-react";

const features = [
  {
    title: "Real-time Auction Experience",
    description:
      "Immerse yourself in live auctions with crystal-clear video and audio streaming, enabling real-time bidding and instant communication with sellers",
    badge: "Live Streaming",
    badgeIcon: Video,
    icons: [
      { icon: Video, color: "text-blue-400", label: "HD Streaming" },
      { icon: Users, color: "text-purple-400", label: "Multi-User" },
      { icon: Share2, color: "text-pink-400", label: "Instant Share" },
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-businessman-working-with-statistics-on-multiple-screens-42923-large.mp4",
  },
  {
    title: "AI-Powered Bidding Platform",
    description:
      "Advanced AI algorithms analyze market trends, predict optimal bid timing, and provide smart price recommendations for maximum success",
    badge: "Smart AI",
    badgeIcon: Brain,
    icons: [
      { icon: Bot, color: "text-emerald-400", label: "Smart Predictions" },
      { icon: BarChart3, color: "text-yellow-400", label: "Market Analysis" },
      { icon: Sparkles, color: "text-violet-400", label: "Auto Bidding" },
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-financial-charts-and-diagrams-48582-large.mp4",
  },
  {
    title: "Secure Payment Infrastructure",
    description:
      "Enterprise-grade security with blockchain technology and multi-factor authentication ensures your transactions are always protected",
    badge: "Secure Payments",
    badgeIcon: Shield,
    icons: [
      { icon: Lock, color: "text-red-400", label: "Encrypted" },
      { icon: Wallet, color: "text-blue-400", label: "Instant Transfer" },
      { icon: Key, color: "text-green-400", label: "Multi-Factor Auth" },
    ],
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-person-typing-on-a-keyboard-42924-large.mp4",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
            <Zap size={16} className="text-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              Smart Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Next-Gen Auction Platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of online auctions with cutting-edge
            technology and unparalleled security
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Feature Content */}
              <div className="relative z-10 bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-500">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Text Content */}
                  <div className="lg:w-1/2 space-y-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                    >
                      <feature.badgeIcon
                        size={16}
                        className="text-purple-400 animate-pulse"
                      />
                      <span className="text-sm font-medium text-gray-300">
                        {feature.badge}
                      </span>
                    </motion.div>

                    <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {feature.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {feature.icons.map((icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg"
                        >
                          <icon.icon className={`${icon.color}`} size={18} />
                          <span className="text-sm text-gray-300">
                            {icon.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="lg:w-1/2 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative rounded-xl overflow-hidden aspect-video">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      >
                        <source src={feature.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                      {/* Interactive Elements */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <Eye size={18} className="text-blue-400" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <DollarSign size={18} className="text-green-400" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
