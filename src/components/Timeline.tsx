import React, { useEffect } from "react";
import {
  Cpu,
  Brain,
  Sparkles,
  Zap,
  BarChart3,
  ShieldCheck,
  Rocket,
  Bot,
} from "lucide-react";

export function TimelineSection() {
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

  const steps = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Our advanced neural networks analyze market trends and predict optimal bidding strategies",
      color: "from-blue-500 to-cyan-500",
      pattern:
        "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
    },
    {
      icon: Sparkles,
      title: "Smart Discovery",
      description:
        "Machine learning algorithms curate personalized item recommendations",
      color: "from-purple-500 to-pink-500",
      pattern:
        "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 25%, transparent 25%, transparent 50%, rgba(168, 85, 247, 0.1) 50%, rgba(168, 85, 247, 0.1) 75%, transparent 75%, transparent)",
    },
    {
      icon: Bot,
      title: "Automated Bidding",
      description:
        "AI agents execute strategic bids based on real-time market dynamics",
      color: "from-emerald-500 to-teal-500",
      pattern:
        "repeating-conic-gradient(rgba(16, 185, 129, 0.1) 0% 25%, transparent 0% 50%)",
    },
    {
      icon: ShieldCheck,
      title: "Secure Transactions",
      description:
        "Blockchain-powered security ensures safe and transparent bidding",
      color: "from-yellow-500 to-orange-500",
      pattern:
        "linear-gradient(0deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div data-animate className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
            <Rocket size={16} className="text-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              Future of Bidding
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Powered by Advanced AI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our next-generation bidding process enhanced by
            cutting-edge artificial intelligence
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block">
            <div className="h-full w-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                data-animate
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div className="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/60 transition-all duration-500">
                    {/* Pattern Background */}
                    <div
                      className="absolute inset-0 opacity-20 rounded-2xl"
                      style={{
                        background: step.pattern,
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 relative z-10">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative group">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 rotate-3 group-hover:rotate-0`}
                  >
                    <step.icon
                      size={32}
                      className="text-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                  />
                  {/* Connection Lines */}
                  <div className="absolute top-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent hidden md:block" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          data-animate
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          {[
            { icon: Cpu, value: "99.9%", label: "AI Accuracy" },
            { icon: Zap, value: "0.1s", label: "Response Time" },
            { icon: BarChart3, value: "100M+", label: "Predictions Made" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <stat.icon size={24} className="mx-auto mb-4 text-blue-400" />
              <h4 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
