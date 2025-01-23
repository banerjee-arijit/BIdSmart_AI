import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel,
  Rocket,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Shield,
  Chrome,
  Zap,
  X,
} from "lucide-react";

interface SignupPageProps {
  onClose: () => void;
}

export function SignupPage({ onClose }: SignupPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"phone" | "google">("phone");

  return (
    <div className="min-h-screen bg-gray-950 text-white py-12 px-4 relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-full transition-colors"
      >
        <X size={24} />
      </button>

      <div className="max-w-md mx-auto">
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 backdrop-blur-sm mb-4 relative group">
            <Gavel className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Join BidSmart
          </h1>
          <p className="text-gray-400 mt-2">Start your bidding journey today</p>
        </motion.div>

        {/* Login Method Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/30 backdrop-blur-sm p-1 rounded-lg flex mb-8"
        >
          <button
            onClick={() => setLoginMethod("phone")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition-all ${
              loginMethod === "phone"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Phone size={18} />
            <span>Phone</span>
          </button>
          <button
            onClick={() => setLoginMethod("google")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md transition-all ${
              loginMethod === "google"
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Chrome size={18} />
            <span>Google</span>
          </button>
        </motion.div>

        {/* Phone Number Form */}
        {loginMethod === "phone" && (
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg">
                  <div className="flex">
                    <span className="pl-4 pr-2 py-3 text-gray-400">+1</span>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="flex-1 bg-transparent border-0 outline-none text-white px-2 py-3 placeholder-gray-500"
                    />
                    <Phone className="w-5 h-5 text-gray-400 mr-4 my-auto" />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="flex-1 bg-transparent border-0 outline-none text-white px-4 py-3 placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-4 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <button
                type="submit"
                className="relative w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group"
              >
                <Zap className="w-5 h-5 group-hover:animate-bounce" />
                <span>Bid Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.form>
        )}

        {/* Google Sign In */}
        {loginMethod === "google" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <Chrome className="w-5 h-5 text-blue-500" />
              <span>Continue with Google</span>
            </motion.button>
          </motion.div>
        )}

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-4"
        >
          <div className="flex items-start gap-3 group">
            <div className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Shield className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200">
                Secure Bidding
              </h3>
              <p className="text-xs text-gray-400">End-to-end encryption</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Rocket className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200">
                Quick Setup
              </h3>
              <p className="text-xs text-gray-400">Start bidding instantly</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              <Sparkles className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200">
                Smart Alerts
              </h3>
              <p className="text-xs text-gray-400">Never miss a bid</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <Zap className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200">
                Live Updates
              </h3>
              <p className="text-xs text-gray-400">Real-time bidding</p>
            </div>
          </div>
        </motion.div>

        {/* Login Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-gray-400"
        >
          Already have an account?{" "}
          <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
            Log in
          </button>
        </motion.p>
      </div>
    </div>
  );
}
