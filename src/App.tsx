import React from "react";
import { AuctionCard } from "./components/AuctionCard";
import { LiveAuction } from "./components/LiveAuction";
import { UserProfile } from "./components/UserProfile";
import { HeroSection } from "./components/HeroSection";
import { Header } from "./components/Header";
import { TimelineSection } from "./components/Timeline";

function App() {
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
    {
      title: "Designer Watch",
      currentBid: 8500,
      timeLeft: "Starts in 12h",
      bidders: 0,
      imageUrl:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80",
      status: "upcoming",
      owner: "Charlie",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center text-white">
      <Header />
      <HeroSection />

      {/* Main Content */}
      <main className="mx-auto px-4 py-8 container bg-gray-950 bg-opacity-80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Auctions */}
          <div className="lg:col-span-8 space-y-8">
            <LiveAuction />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <UserProfile />
          </div>
        </div>
      </main>
      <TimelineSection />
    </div>
  );
}

export default App;
