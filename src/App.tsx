import { AuctionCard } from "./components/AuctionCard";
import { LiveAuction } from "./components/LiveAuction";
import { UserProfile } from "./components/UserProfile";
import { HeroSection } from "./components/HeroSection";
import { Header } from "./components/Header";
import { TimelineSection } from "./components/Timeline";
import { FeaturesSection } from "./components/Feature";
import { useState } from "react";
import { SignupPage } from "./components/SignUpPage";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  if (showSignup) {
    return <SignupPage onClose={() => setShowSignup(false)} />;
  }
  return (
    <div className="min-h-screen bg-cover bg-center text-white">
      <Header onSignupClick={() => setShowSignup(true)} />
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
      <FeaturesSection />
    </div>
  );
}

export default App;
