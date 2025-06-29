import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Zap, Target } from "lucide-react";

interface AnimatedStatProps {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

function AnimatedStat({ value, label, icon: Icon }: AnimatedStatProps) {
  return (
    <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-black text-white mb-2">
        {value}
      </div>
      <p className="text-gray-300 font-medium text-sm tracking-wide">{label}</p>
    </div>
  );
}

export default function About() {

  return (
    <section className="py-1 sm:py-1 md:py-2 lg:py-2 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div 
          id="about" 
          className="scroll-offset relative py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 rounded-2xl sm:rounded-3xl overflow-hidden max-w-5xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(88, 28, 135) 50%, rgb(67, 56, 202) 100%)',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Background Effects */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 40%, rgba(120,119,198,0.3) 0%, transparent 50%)',
              backgroundAttachment: 'fixed'
            }}
          ></div>
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 70% 60%, rgba(167,139,250,0.2) 0%, transparent 50%)',
              backgroundAttachment: 'fixed'
            }}
          ></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 text-white leading-tight">
              ReactorIX <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">Command Center</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-200 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 leading-relaxed max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
              Advanced cybersecurity and IT automation engineered for enterprise organizations that demand operational supremacy.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
              <div className="bg-white/15 backdrop-blur-md border border-purple-300/30 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base text-gray-200 hover:bg-white/20 transition-colors">
                <span className="font-bold text-purple-200">99.99%</span> Security Coverage
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-purple-300/30 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base text-gray-200 hover:bg-white/20 transition-colors">
                <span className="font-bold text-purple-200">Atomic</span> Speed
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-purple-300/30 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base text-gray-200 hover:bg-white/20 transition-colors">
                <span className="font-bold text-purple-200">10x</span> Efficiency
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-purple-300/30 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base text-gray-200 hover:bg-white/20 transition-colors">
                <span className="font-bold text-purple-200">99.9%</span> Uptime
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}