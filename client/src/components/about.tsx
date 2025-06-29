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
      <div className="text-sm text-gray-300 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden">
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
      
      {/* Main gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/50 to-indigo-900"
        style={{ backgroundAttachment: 'fixed' }}
      ></div>
      
      <div className="relative z-10 max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow-2xl">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
              ReactorIX Command Center
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto leading-relaxed">
              We obliterate limitations. Nuclear precision. Total supremacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <AnimatedStat
              value="99.9%"
              label="Security Coverage"
              icon={Shield}
            />
            <AnimatedStat
              value="10x"
              label="Atomic Speed"
              icon={Zap}
            />
            <AnimatedStat
              value="24/7"
              label="Total Monitoring"
              icon={Target}
            />
            <AnimatedStat
              value="100%"
              label="Efficiency"
              icon={TrendingUp}
            />
          </div>
          
          {/* Performance Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-8 sm:mt-10 md:mt-12">
            <div className="bg-white/15 backdrop-blur-md border border-purple-300/30 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-3.5 text-xs sm:text-sm md:text-sm lg:text-base text-gray-200 hover:bg-white/20 transition-colors">
              <span className="font-bold text-purple-200">Zero</span> Downtime
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
    </section>
  );
}