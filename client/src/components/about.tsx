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
    <div className="clickup-card clickup-card-hover text-center">
      <div className="w-16 h-16 clickup-gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="clickup-section bg-gray-50">
      <div className="clickup-container">
        <div className="text-center mb-16">
          <h2 className="clickup-heading-2 text-gray-900 mb-6">
            ReactorIX <span className="clickup-gradient-text">Command Center</span>
          </h2>
          <p className="clickup-subtitle max-w-3xl mx-auto">
            We obliterate limitations. Nuclear precision. Total supremacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        {/* Performance Badges - ClickUp style with icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <div className="clickup-pill clickup-pill-large">
            <Shield className="clickup-pill-icon text-primary" />
            <span><span className="font-bold text-primary">Zero</span> Downtime</span>
          </div>
          <div className="clickup-pill clickup-pill-large">
            <Zap className="clickup-pill-icon text-primary" />
            <span><span className="font-bold text-primary">10x</span> Efficiency</span>
          </div>
          <div className="clickup-pill clickup-pill-large">
            <Target className="clickup-pill-icon text-primary" />
            <span><span className="font-bold text-primary">99.9%</span> Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}