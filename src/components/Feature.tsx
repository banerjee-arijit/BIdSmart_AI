import { motion } from "framer-motion";
import React from "react";
import { Rocket } from "lucide-react"; // Importing from lucide-react
import { MessageCircle, Phone, Send } from "lucide-react"; // Replacing react-icons with Lucide icons

const Feature = () => {
  return (
    <section className="relative py-12 overflow-hidden  sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full text-center lg:text-left"
          >
            <div data-animate className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
                <Rocket size={16} className="text-purple-400 animate-pulse" />
                <span className="text-sm font-medium text-gray-300">
                  Future of Bidding
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Real-time Communication at Your Fingertips
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                Stay connected with instant messaging, calls, and live updates
                in a futuristic platform designed for the next generation.
              </p>

              <div className="mt-8 space-x-8 flex justify-center lg:justify-start">
                {/* Neon-style Icons */}
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 animate-pulse"></div>
                  <Send className="text-white text-4xl lg:text-5xl" />
                </div>

                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 animate-pulse"></div>
                  <Phone className="text-white text-4xl lg:text-5xl" />
                </div>

                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 opacity-30 animate-pulse"></div>
                  <MessageCircle className="text-white text-4xl lg:text-5xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full"
          >
            <img
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
              alt="Real-time Communication"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
