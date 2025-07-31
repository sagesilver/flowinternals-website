import React from 'react';
import AgentPage, { AgentPageConfig, Icons } from '../Agent_Page_Template';

const ChekaConfig: AgentPageConfig = {
  agentName: "Cheka",
  agentTitle: "Your Professional Test Analyst — Always Ready, Always Precise.",
  agentDescription: "Cheka transforms testing requirements into comprehensive test plans, accelerating delivery and reducing project risk.",
  agentSubtitle: "Test Analyst",
  heroImage: "/media/Cheka 1.png", // Updated hero image
  logoImage: "/lovable-uploads/a4fc7853-2ebb-4b66-bb30-8a3a378f59d3.png", // Using existing logo
  
  capabilities: [
    {
      icon: Icons.chat,
      title: "Test Plan Generation",
      description: "Create comprehensive test plans with detailed test cases, scenarios, and acceptance criteria."
    },
    {
      icon: Icons.info,
      title: "Test Strategy Expert",
      description: "Develop testing strategies that align with project requirements and business objectives."
    },
    {
      icon: Icons.document,
      title: "Test Case Creation",
      description: "Generate detailed test cases with step-by-step instructions and expected results."
    },
    {
      icon: Icons.grid,
      title: "Test Matrix Building",
      description: "Create test matrices to ensure comprehensive coverage across all requirements."
    },
    {
      icon: Icons.link,
      title: "Requirement Traceability",
      description: "Maintain traceability between requirements and test cases for complete coverage."
    },
    {
      icon: Icons.users,
      title: "Collaborative Testing",
      description: "Work with your team to facilitate test planning sessions and review processes."
    }
  ],
  
  challenges: [
    {
      icon: Icons.zap,
      title: "Eliminates Test Gaps",
      description: "Uses systematic approaches to identify and fill testing gaps before they become issues."
    },
    {
      icon: Icons.target,
      title: "Instant Test Plans",
      description: "Converts requirements into ready-to-use test plans and test cases without delay."
    },
    {
      icon: Icons.document,
      title: "Standardized Testing",
      description: "Maintains consistent test case formatting and structure across different projects."
    },
    {
      icon: Icons.mapPin,
      title: "Professional Quality",
      description: "Ensures every test deliverable meets professional standards with proper documentation."
    },
    {
      icon: Icons.flame,
      title: "Reduces Test Rework",
      description: "Proactively identifies testing gaps before execution starts, reducing costly changes."
    },
    {
      icon: Icons.clock,
      title: "Accelerates Testing",
      description: "Gets testing moving faster with ready-to-use plans that can be immediately executed."
    }
  ],
  
  howItWorks: [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "Analyze project requirements to understand what needs to be tested and identify test scenarios."
    },
    {
      step: 2,
      title: "Test Strategy Development",
      description: "Develop a comprehensive testing strategy that covers all aspects of the application."
    },
    {
      step: 3,
      title: "Test Case Creation",
      description: "Generate detailed test cases with clear steps, test data, and expected results."
    },
    {
      step: 4,
      title: "Execution Planning",
      description: "Create test execution plans and schedules for efficient testing delivery."
    }
  ],
  
  processImage: "/media/Cheka 3.png", // Updated process image
  exampleImage: "/media/Cheka 2.png", // Updated example image
  exampleTitle: "Sample Test Plan and Test Cases",
  exampleDescription: "See the high-quality test artifacts Cheka creates to help your testing team succeed.",
  
  exampleFeatures: [
    {
      title: "Test Plans & Cases",
      description: "Well-structured test cases with detailed steps and expected results for clear execution guidance."
    },
    {
      title: "Test Matrices",
      description: "Complete test coverage matrices following industry standard formats and best practices."
    },
    {
      title: "Execution Reports",
      description: "Visual representations of test progress, coverage metrics, and defect tracking for better understanding."
    }
  ],
  
  pricingPlans: [
    {
      title: "Basic Plan (Cheka Mk1)",
      popular: true,
      features: [
        { included: true, text: "Access to Cheka chat for test planning" },
        { included: true, text: "Test case generation" },
        { included: true, text: "Test plan templates" },
        { included: true, text: "Downloadable test artifacts" },
        { included: true, text: "Testing best practices alignment" },
        { included: false, text: "No external integrations (Jira/TestRail)" }
      ]
    },
    {
      title: "Premium Plan (Cheka Mk2)",
      features: [
        { included: true, text: "Everything in Basic" },
        { included: true, text: "Advanced test strategy development" },
        { included: true, text: "Customizable test frameworks" },
        { included: true, text: "Early access to AI-driven test automation features" },
        { included: true, text: "Priority updates and roadmap features" },
        { included: true, text: "Planned external tool integrations (Jira, TestRail, and more)" }
      ]
    }
  ],
  
  aboutSections: [
    {
      icon: Icons.book,
      title: "Testing Best Practices",
      description: "Built by FlowInternals, Cheka is designed to embody the best practices of software testing and quality assurance."
    },
    {
      icon: Icons.zap,
      title: "Actionable Output",
      description: "Every output is structured, complete, and immediately actionable, helping you drive testing forward with confidence."
    },
    {
      icon: Icons.refresh,
      title: "Continuous Learning",
      description: "Cheka continuously learns from industry standards and best practices to ensure your testing documentation is always professional-grade."
    }
  ],
  
  aboutImage: "/media/Cheka 4.png", // Updated about image
  ctaButtonText: "Start Using Cheka",
  ctaButtonLink: "#"
};

const Cheka_Test_Analyst: React.FC = () => {
  return <AgentPage config={ChekaConfig} />;
};

export default Cheka_Test_Analyst; 