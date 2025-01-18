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
  // Use a status map to simplify the logic for badges and buttons
  const statusMap = {
    live: {
      badge: "Live",
      badgeClass: "bg-green-600 text-white",
      buttonText: "Place Bid",
      buttonClass: "bg-blue-600 hover:bg-blue-500",
      icon: <Zap size={16} />,
    },
    upcoming: {
      badge: "Upcoming",
      badgeClass: "bg-yellow-600 text-black",
      buttonText: "Notify Me",
      buttonClass: "bg-yellow-600 hover:bg-yellow-500",
      icon: <Bell size={16} />,
    },
    ended: {
      badge: "Ended",
      badgeClass: "bg-gray-600 text-white",
      buttonText: "Ended",
      buttonClass: "bg-gray-600 cursor-not-allowed",
      icon: null,
    },
  };

  const { badge, badgeClass, buttonText, buttonClass, icon } =
    statusMap[status];

  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer min-w-[280px] mx-2 transition-transform duration-300 transform hover:scale-105">
      {/* Status Badge */}
      <div
        className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase rounded-md z-20 ${badgeClass}`}
      >
        {badge}
      </div>

      {/* Auction Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
      />

      {/* Content */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-blue-400">Current Bid</span>
            <span className="text-xl font-bold">
              ${currentBid.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center text-gray-300">
            <Timer size={16} />
            <span className="ml-1">{timeLeft}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Users size={16} />
            <span className="ml-1">{bidders} bidders</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="font-semibold">Owner:</span>
            <span>{owner}</span>
          </div>
        </div>

        {/* Dynamic Button */}
        <button
          className={`mt-4 w-full py-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors duration-300 ${buttonClass}`}
          disabled={status === "ended"}
        >
          {icon && icon}
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  );
}
