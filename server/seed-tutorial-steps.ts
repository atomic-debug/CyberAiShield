import { storage } from "./storage";

const defaultTutorialSteps = [
  // Getting Started (All user types)
  {
    stepKey: "welcome",
    title: "Welcome to ReactorIX",
    description: "Get familiar with the ReactorIX platform and its core capabilities. Learn about the dashboard layout, main navigation, and key features that will help you secure and automate your IT infrastructure.",
    userTypes: ["msp", "it_admin", "security_manager", "executive"],
    order: 1,
    isActive: true
  },
  {
    stepKey: "dashboard-overview",
    title: "Dashboard Overview",
    description: "Explore your main dashboard where you can monitor security status, view alerts, and access key metrics. This is your command center for all ReactorIX operations.",
    userTypes: ["msp", "it_admin", "security_manager", "executive"],
    order: 2,
    isActive: true
  },

  // Security-focused steps
  {
    stepKey: "security-monitoring",
    title: "Security Monitoring Setup",
    description: "Configure real-time security monitoring for your infrastructure. Set up threat detection, vulnerability scanning, and automated response protocols to protect your systems 24/7.",
    userTypes: ["msp", "it_admin", "security_manager"],
    order: 3,
    isActive: true
  },
  {
    stepKey: "threat-detection",
    title: "Advanced Threat Detection",
    description: "Learn how to use ReactorIX's AI-powered threat detection capabilities. Configure machine learning models to identify and respond to sophisticated cyber threats automatically.",
    userTypes: ["security_manager", "msp"],
    order: 4,
    isActive: true
  },
  {
    stepKey: "compliance-management",
    title: "Compliance Management",
    description: "Set up automated compliance monitoring and reporting for industry standards like SOC 2, HIPAA, PCI DSS, and more. Ensure your organization meets all regulatory requirements.",
    userTypes: ["security_manager", "executive", "msp"],
    order: 5,
    isActive: true
  },

  // Automation-focused steps
  {
    stepKey: "automation-basics",
    title: "IT Automation Fundamentals",
    description: "Get started with ReactorIX's automation engine. Learn how to create workflows, set up triggers, and automate routine IT tasks to improve efficiency and reduce manual work.",
    userTypes: ["msp", "it_admin"],
    order: 6,
    isActive: true
  },
  {
    stepKey: "workflow-creation",
    title: "Creating Custom Workflows",
    description: "Build your first automation workflow. Learn how to chain together actions, set conditions, and create sophisticated automation that handles complex IT scenarios.",
    userTypes: ["msp", "it_admin"],
    order: 7,
    isActive: true
  },
  {
    stepKey: "incident-response",
    title: "Automated Incident Response",
    description: "Configure automated incident response procedures. Set up escalation paths, notification systems, and automatic remediation actions for common security and IT issues.",
    userTypes: ["msp", "it_admin", "security_manager"],
    order: 8,
    isActive: true
  },

  // MSP-specific steps
  {
    stepKey: "client-management",
    title: "Multi-Client Management",
    description: "Learn how to manage multiple client environments from a single dashboard. Set up client hierarchies, configure role-based access, and streamline service delivery.",
    userTypes: ["msp"],
    order: 9,
    isActive: true
  },
  {
    stepKey: "reporting-analytics",
    title: "Client Reporting & Analytics",
    description: "Generate comprehensive reports for your clients. Set up automated reporting schedules, customize dashboards, and provide value-added insights to your customers.",
    userTypes: ["msp", "executive"],
    order: 10,
    isActive: true
  },

  // Executive-focused steps
  {
    stepKey: "executive-dashboard",
    title: "Executive Dashboard",
    description: "Access high-level security and operational metrics designed for leadership. View risk assessments, compliance status, and ROI analytics in executive-friendly formats.",
    userTypes: ["executive"],
    order: 11,
    isActive: true
  },
  {
    stepKey: "risk-management",
    title: "Risk Management Overview",
    description: "Understand your organization's security posture and risk profile. Learn how to interpret risk scores, view threat landscapes, and make informed security investment decisions.",
    userTypes: ["executive", "security_manager"],
    order: 12,
    isActive: true
  },

  // Advanced features (All types)
  {
    stepKey: "api-integration",
    title: "API Integration",
    description: "Connect ReactorIX with your existing tools and systems. Learn how to use our REST API, set up webhooks, and integrate with popular platforms like Slack, Teams, and ticketing systems.",
    userTypes: ["msp", "it_admin", "security_manager"],
    order: 13,
    isActive: true
  },
  {
    stepKey: "ai-insights",
    title: "AI-Powered Insights",
    description: "Leverage ReactorIX's artificial intelligence capabilities for predictive analytics, anomaly detection, and intelligent recommendations. Turn your data into actionable insights.",
    userTypes: ["msp", "it_admin", "security_manager", "executive"],
    order: 14,
    isActive: true
  },
  {
    stepKey: "advanced-customization",
    title: "Advanced Customization",
    description: "Customize ReactorIX to fit your unique needs. Create custom fields, build specialized reports, and configure advanced settings for optimal performance.",
    userTypes: ["msp", "it_admin", "security_manager"],
    order: 15,
    isActive: true
  }
];

export async function seedTutorialSteps() {
  console.log("Seeding tutorial steps...");
  
  try {
    for (const step of defaultTutorialSteps) {
      // Check if step already exists
      const existingStep = await storage.getTutorialStep(step.stepKey);
      
      if (!existingStep) {
        await storage.createTutorialStep(step);
        console.log(`Created tutorial step: ${step.stepKey}`);
      } else {
        console.log(`Tutorial step already exists: ${step.stepKey}`);
      }
    }
    
    console.log("Tutorial steps seeding completed!");
  } catch (error) {
    console.error("Error seeding tutorial steps:", error);
  }
}

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedTutorialSteps().then(() => {
    process.exit(0);
  });
}