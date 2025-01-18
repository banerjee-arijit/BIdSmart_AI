import React from "react";
import { AuctionCard } from "./components/AuctionCard";
import { LiveAuction } from "./components/LiveAuction";
import { UserProfile } from "./components/UserProfile";
import { HeroSection } from "./components/HeroSection";
import { Header } from "./components/Header";
import { TimelineSection } from "./components/Timeline";
import Feature from "./components/Feature";

function App() {
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
      {/* <TimelineSection /> */}
      <Feature />
    </div>
  );
}

export default App;
