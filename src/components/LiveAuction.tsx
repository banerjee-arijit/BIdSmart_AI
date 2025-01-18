import React, { useEffect } from "react";
import { Brain, Sparkles } from "lucide-react";
import { AuctionCard } from "./AuctionCard";

const auctions = [
  {
    title: "Rare Art Collection",
    currentBid: 15000,
    timeLeft: "2h 45m",
    bidders: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1577720580479-7d839d829c73?auto=format&fit=crop&q=80",
    status: "live",
    owner: "Alice",
  },
  {
    title: "Luxury Sports Car",
    currentBid: 125000,
    timeLeft: "5h 20m",
    bidders: 89,
    imageUrl:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80",
    status: "live",
    owner: "Bob",
  },
];

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
                Smart AI Insights Coming Soon{" "}
              </h3>
            </div>
            <p className="text-gray-300 max-w-md">
              Utilize AI-driven insights for smart predictions and optimized
              bidding strategies based on market trends and real-time data.
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {auctions.map((auction, index) => (
          <AuctionCard key={index} {...auction} />
        ))}
      </div>
    </div>
  );
}
