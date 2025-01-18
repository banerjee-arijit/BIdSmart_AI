import React from "react";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  DollarSign,
  Brain,
} from "lucide-react";

const backgroundImageUrl =
  "https://www.transparenttextures.com/patterns/diamond-tile.png"; // A cool futuristic grid pattern.

export function HeroSection() {
  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl}), linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))`,
      }}
    >
      <div className="absolute inset-0 bg-grid-black/[0.05] -z-1" />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800 border border-gray-600">
              <Sparkles size={16} className="text-blue-500" />
              <span className="text-sm font-medium text-gray-200">
                AI-Powered Auctions
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Discover Exclusive Items with
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Smart Bidding
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
              Experience the future of auctions with our AI-driven platform. Get
              real-time insights, smart price predictions, and secure
              transactions for premium items.
            </p>

            <div className="flex flex-wrap gap-6">
              <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                Start Bidding
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-gray-500 rounded-lg font-semibold text-gray-200 transition-all duration-300">
                How It Works
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 4 Feature Grid with Glowing Icons */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                  <Shield
                    className="text-emerald-500 transition-transform group-hover:scale-110"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">
                    Secure Bidding
                  </h3>
                  <p className="text-sm text-gray-400">
                    Protected by advanced encryption
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Zap
                    className="text-blue-500 transition-transform group-hover:scale-110"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">
                    Real-time Updates
                  </h3>
                  <p className="text-sm text-gray-400">Instant notifications</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Brain
                    className="text-purple-500 transition-transform group-hover:scale-110"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">AI Powered</h3>
                  <p className="text-sm text-gray-400">
                    Smart price predictions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 rounded-lg bg-gray-800/80 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                  <DollarSign
                    className="text-yellow-500 transition-transform group-hover:scale-110"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-100">Smart Pricing</h3>
                  <p className="text-sm text-gray-400">
                    Automated value assessment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Images for larger devices */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80"
                  alt="Luxury Watch"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80"
                  alt="Art Piece"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80"
                  alt="Sports Car"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80"
                  alt="Luxury Item"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
