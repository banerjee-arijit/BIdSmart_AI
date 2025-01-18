import React, { useEffect } from "react";
import {
  Award,
  Clock,
  Wallet,
  Star,
  Trophy,
  TrendingUp,
  Target,
  History,
} from "lucide-react";

export function UserProfile() {
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
    <div
      data-animate
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 text-white"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-800"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-gray-900" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <div className="flex items-center gap-2">
            <Trophy size={14} className="text-yellow-500" />
            <p className="text-gray-400">Premium Bidder</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Wallet size={20} />
            <span>Balance</span>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            $45,230
          </p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">
          <div className="flex items-center gap-2 text-green-400 mb-2">
            <Award size={20} />
            <span>Won Auctions</span>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            23
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {[
          {
            icon: Clock,
            label: "Active Bids",
            value: "12",
            color: "text-blue-400",
          },
          {
            icon: TrendingUp,
            label: "Success Rate",
            value: "87%",
            color: "text-purple-400",
          },
          {
            icon: Target,
            label: "Bid Accuracy",
            value: "95%",
            color: "text-red-400",
          },
          {
            icon: History,
            label: "Total Bids",
            value: "156",
            color: "text-emerald-400",
          },
          {
            icon: Star,
            label: "Rating",
            value: "4.9/5.0",
            color: "text-yellow-400",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-800 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <item.icon
                size={20}
                className={`${item.color} group-hover:scale-110 transition-transform`}
              />
              <span>{item.label}</span>
            </div>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
