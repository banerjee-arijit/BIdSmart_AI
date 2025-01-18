import React, { useEffect } from "react";
import {
  MessageSquare,
  Video,
  Users,
  ChevronRight,
  Clock,
  Heart,
  Share2,
  Eye,
  Brain,
  Sparkles,
} from "lucide-react";

export function LiveAuction() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-8">
      <div
        data-animate
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-purple-900 p-8 mb-12 "
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-1" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Brain className="text-blue-400 animate-pulse" size={24} />
              <h3 className="text-2xl font-bold animate-neon">
                AI-Powered Insights
              </h3>
            </div>
            <p className="text-gray-300 max-w-md">
              Our advanced AI analyzes market trends, historical data, and
              real-time bidding patterns to provide you with smart predictions
              and optimal bidding strategies.
            </p>
          </div>

          <div className="flex gap-4 animate-float">
            <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl">
              <Sparkles className="text-yellow-400" size={32} />
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl">
              <Brain className="text-purple-400" size={32} />
            </div>
          </div>
        </div>
      </div>

      <div
        data-animate
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden"
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute inset-0" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Live Auction Room
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="group relative p-3 border-2 border-blue-400 rounded-lg hover:bg-blue-100/20 transition-all duration-300">
              <MessageSquare
                size={24}
                className="text-blue-400 group-hover:scale-110 group-hover:text-blue-500 transition-transform duration-300"
              />
              <span className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 text-white text-xs font-semibold rounded-full flex items-center justify-center shadow-md">
                24
              </span>
            </button>
            <button className="group relative p-3 border-2 border-green-400 rounded-lg hover:bg-green-100/20 transition-all duration-300">
              <Video
                size={24}
                className="text-green-400 group-hover:scale-110 group-hover:text-green-500 transition-transform duration-300"
              />
              <span className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center justify-center shadow-md">
                Live
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80"
            alt="Auction Item"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Stats */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors group">
              <Heart
                size={20}
                className="text-red-400 group-hover:scale-110 transition-transform"
              />
            </button>
            <button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors group">
              <Share2
                size={20}
                className="text-blue-400 group-hover:scale-110 transition-transform"
              />
            </button>
          </div>

          {/* Live Viewers */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Eye size={16} className="text-blue-400" />
            <span className="text-sm font-medium">238 watching</span>
          </div>

          {/* Timer */}
          <div className="absolute top-16 left-4 flex items-center gap-2 bg-red-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Clock size={16} />
            <span className="text-sm font-medium">05:23:14</span>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">
                  Vintage Chronograph Watch
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/32?img=${i}`}
                        alt={`Bidder ${i}`}
                        className="w-8 h-8 rounded-full border-2 border-gray-900"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 flex items-center gap-2">
                    <Users size={16} />
                    <span>+234 others</span>
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm mb-1">Current Bid</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  $12,750
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bidding Section */}
        <div className="p-6 bg-gray-900/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="number"
                placeholder="Enter bid amount"
                className="w-full bg-gray-800/50 rounded-lg pl-4 pr-24 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                USD
              </span>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group whitespace-nowrap">
              Place Bid
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Quick Bid Buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            {[13000, 13500, 14000].map((amount) => (
              <button
                key={amount}
                className="px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors text-sm font-medium"
              >
                ${amount.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
