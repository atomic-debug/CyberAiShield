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
    <section className="py-8 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div 
          id="about" 
          className="scroll-offset relative py-12 px-8 rounded-3xl overflow-hidden"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              Built for <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">Enterprise Scale</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
              Professional IT automation and cybersecurity solutions designed for organizations that demand excellence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm text-gray-200">
                <span className="font-bold text-purple-300">99.99%</span> Threat Prevention
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm text-gray-200">
                <span className="font-bold text-purple-300">1000x</span> Scale Multiplier
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm text-gray-200">
                <span className="font-bold text-purple-300">400%</span> Efficiency Gain
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm text-gray-200">
                <span className="font-bold text-purple-300">99.9%</span> Uptime
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}