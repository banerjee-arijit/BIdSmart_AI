import React from "react";
import { Timer, Users, Zap, Bell } from "lucide-react";

interface AuctionCardProps {
  title: string;
  currentBid: number;
  timeLeft: string;
  bidders: number;
  imageUrl: string;
  status: "live" | "upcoming" | "ended";
  owner: string;
}

export function AuctionCard({
  title,
  currentBid,
  timeLeft,
  bidders,
  imageUrl,
  status,
  owner,
}: AuctionCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[300px]">
      {/* Status Badge */}
      <div
        className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase rounded-md z-30 ${
          status === "live"
            ? "bg-green-600 text-white"
            : status === "upcoming"
            ? "bg-yellow-600 text-black"
            : "bg-gray-600 text-white"
        }`}
      >
        {status === "live"
          ? "Live"
          : status === "upcoming"
          ? "Upcoming"
          : "Ended"}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

      {/* Auction Image */}
      <img
        src={imageUrl}
        alt={`${title} - ${status}`}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Content */}
      <div className="relative z-20 p-4 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-blue-400 font-semibold">Current Bid</span>
            <span className="text-2xl font-bold">
              ${currentBid.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Timer size={16} />
            <span>{timeLeft}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Users size={16} />
            <span>{bidders} bidders</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="font-semibold">Owner:</span>
            <span>{owner}</span>
          </div>
        </div>

        {/* Dynamic Button */}
        {status === "live" ? (
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300">
            <Zap size={16} />
            Place Bid
          </button>
        ) : status === "upcoming" ? (
          <button className="mt-4 w-full bg-yellow-600 hover:bg-yellow-500 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300">
            <Bell size={16} />
            Notify Me
          </button>
        ) : (
          <button className="mt-4 w-full bg-gray-600 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300 cursor-not-allowed">
            <span>Ended</span>
          </button>
        )}
      </div>
    </div>
  );
}
