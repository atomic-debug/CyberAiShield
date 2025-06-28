import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";

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
    <section className="py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div 
          id="about" 
          className="scroll-offset relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16 px-8 rounded-3xl overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.2),transparent_50%)]"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            
            
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white leading-[0.9] tracking-tight">
              Built for Dominance.{' '}
              <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
                Engineered for Victory.
              </span>
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              RactorIX doesn't just solve problems—we <span className="text-purple-300 font-bold">obliterate limitations</span>. 
              Every atomic solution is precision-engineered for organizations that refuse to accept anything less than total operational supremacy.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Threat Prevention', value: '99.99%', icon: Shield },
                { label: 'Scale Multiplier', value: '1000x', icon: TrendingUp },
                { label: 'Efficiency Gain', value: '400%', icon: Zap },
                { label: 'Uptime Guarantee', value: '99.9%', icon: Target }
              ].map((stat, index) => (
                <AnimatedStat key={index} value={stat.value} label={stat.label} icon={stat.icon} />
              ))}
            </div>
            
            <Button 
              size="lg"
              className="reactive-button bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white px-12 py-6 text-xl font-black rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 group border-0 relative"
              onMouseEnter={(e) => {
                const button = e.currentTarget;
                button.style.transform = 'translateY(-2px) scale(1.02)';
                button.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                const button = e.currentTarget;
                button.style.transform = 'translateY(0) scale(1)';
                button.style.filter = 'brightness(1)';
              }}
              onClick={(e) => {
                // Lightning effect
                const button = e.currentTarget;
                const lightning = document.createElement('div');
                lightning.className = 'absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent';
                lightning.style.animation = 'slide-right 0.3s ease-out';
                button.appendChild(lightning);
                setTimeout(() => lightning.remove(), 300);
                
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Command Your Infrastructure
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}