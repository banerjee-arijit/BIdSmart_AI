import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  Search,
  Menu,
  X,
  Home,
  Compass,
  Video,
  Info,
  LogOut,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
interface HeaderProps {
  onSignupClick: () => void;
}

export function Header({ onSignupClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {/* Desktop & Tablet Header */}
      <header
        className={`sticky top-0 z-50 ${
          isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8" />
            <h1 className="text-xl font-bold">
              bid<span className="text-red-500">Smart</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 lg:ml-20">
            <button className="hover:text-red-500 transition-colors font-medium">
              Home
            </button>
            <button className="hover:text-red-500 transition-colors font-medium">
              Explore
            </button>
            <button className="hover:text-red-500 transition-colors font-medium">
              Live Auctions
            </button>
            <button className="hover:text-red-500 transition-colors font-medium">
              How it Works
            </button>
          </nav>

          {/* Actions - Desktop & Tablet */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all ${
                  isDarkTheme
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            {/* Join Bid Button */}
            <button
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full transition-all duration-300 shadow-lg"
              onClick={onSignupClick}
            >
              <Zap size={18} />
              <span className="font-semibold">Join the Bid</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isDarkTheme ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${isDarkTheme ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="border-b p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">
                bid<span className="text-red-500">Smart</span>
              </h1>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-2 px-4">
              {["Home", "Explore", "Live Auctions", "How it Works"].map(
                (label) => (
                  <button
                    key={label}
                    className="flex items-center gap-4 w-full p-3 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <span>{label}</span>
                  </button>
                )
              )}
            </div>
          </nav>

          {/* Bottom Actions */}
          <div className="border-t p-4 space-y-4">
            <button className="flex items-center gap-4 w-full p-3 hover:bg-gray-800 rounded-lg transition-colors">
              <LogOut size={20} className="text-gray-400" />
              <span>Sign Out</span>
            </button>
            <button
              className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 p-3 rounded-lg transition-all duration-300 shadow-lg"
              onClick={onSignupClick}
            >
              <Zap size={18} />
              <span className="font-semibold">Join the Bid</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
