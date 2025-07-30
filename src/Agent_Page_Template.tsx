import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Template Configuration Interface
interface AgentPageConfig {
  agentName: string;
  agentTitle: string;
  agentDescription: string;
  agentSubtitle: string;
  heroImage: string;
  logoImage: string;
  capabilities: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  challenges: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  howItWorks: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  processImage: string;
  exampleImage: string;
  exampleTitle: string;
  exampleDescription: string;
  exampleFeatures: Array<{
    title: string;
    description: string;
  }>;
  pricingPlans: Array<{
    title: string;
    popular?: boolean;
    features: Array<{
      included: boolean;
      text: string;
    }>;
  }>;
  aboutSections: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  aboutImage: string;
  ctaButtonText: string;
  ctaButtonLink: string;
}

// Default SVG Icons for reuse
const Icons = {
  chat: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
    </svg>
  ),
  info: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  ),
  grid: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </svg>
  ),
  link: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  book: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  ),
  zap: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2v4"></path>
      <path d="M12 18v4"></path>
      <path d="m4.93 4.93 2.83 2.83"></path>
      <path d="m16.24 16.24 2.83 2.83"></path>
      <path d="M2 12h4"></path>
      <path d="M18 12h4"></path>
      <path d="m4.93 19.07 2.83-2.83"></path>
      <path d="m16.24 7.76 2.83-2.83"></path>
    </svg>
  ),
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
      <path d="M12 13v9"></path>
      <path d="M5 13v2a2 2 0 0 0 2 2h7"></path>
    </svg>
  ),
  mapPin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"></path>
      <circle cx="12" cy="8" r="2"></circle>
    </svg>
  ),
  flame: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  refresh: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="m2 12 3-3 3 3"></path>
      <path d="m16 6 3 3-3 3"></path>
      <path d="M8 16h8"></path>
    </svg>
  )
};

// Reusable Agent Page Component
const AgentPage: React.FC<{ config: AgentPageConfig }> = ({ config }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add effect to make sections visible on load and scroll
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    // Observe all sections
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
      // Initially make all sections visible
      section.classList.add("visible");
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-dynamous-900/30 sticky top-0 z-10 bg-black backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={config.logoImage}
                alt="Company logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
              HOME
            </Link>
            <a href="#capabilities" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
              CAPABILITIES
            </a>
            <a href="#challenges" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
              CHALLENGES
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
              HOW IT WORKS
            </a>
            <a href="#examples" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
              EXAMPLES
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
              PRICING
            </a>
            <a href="#about" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
              ABOUT
            </a>
          </nav>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="bg-hero-pattern py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="mb-4">
                <span className="text-dynamous-400 text-5xl md:text-6xl font-bold">Meet Agent</span>{" "}
                <span className="text-white text-5xl md:text-6xl font-bold">{config.agentName}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                {config.agentTitle}
              </p>
              <p className="text-lg text-white mb-8">
                {config.agentDescription}
              </p>
              <div className="mt-8">
                <a href="#capabilities" className="bg-dynamous-500 hover:bg-dynamous-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all">
                  Explore Capabilities
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={config.heroImage}
                alt={`${config.agentName} Agent`}
                className="w-full h-auto rounded-2xl object-contain"
                style={{ 
                  objectFit: "contain",
                  boxShadow: '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container" style={{ marginTop: "2rem" }}>
        {/* 2. Capabilities Overview Section */}
        <section id="capabilities" className="section visible py-16 bg-background/80" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">What {config.agentName} Can Do</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Our powerful AI agent offers key capabilities to streamline your process.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {config.capabilities.map((capability, index) => (
                <div key={index} className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl hover:shadow-dynamous-600/10 hover:border-dynamous-500/50 transition-all">
                  <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Challenges Section */}
        <section id="challenges" className="section visible py-16 bg-background" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">Designed for Real-World Challenges</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {config.agentName} addresses the common pain points in your domain.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {config.challenges.map((challenge, index) => (
                <div key={index} className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl">
                  <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                    {challenge.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{challenge.title}</h3>
                  <p className="text-muted-foreground">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works Section */}
        <section id="how-it-works" className="section visible py-16 bg-background/80" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">How {config.agentName} Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A simple, powerful workflow designed to fit seamlessly into your process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  {config.howItWorks.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex items-center justify-center bg-dynamous-600 text-white rounded-full w-8 h-8 mr-4 flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-dynamous-400">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
                             <div className="flex justify-center">
                 <div className="relative">
                   <img
                     src={config.processImage}
                     alt={`${config.agentName} process`}
                     className="w-full h-auto rounded-2xl object-contain"
                     style={{ 
                       objectFit: "contain",
                       boxShadow: '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)'
                     }}
                   />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 5. Example Deliverables Section */}
        <section id="examples" className="section visible py-16 bg-background" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">Example Deliverables</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {config.exampleDescription}
              </p>
            </div>
            
            <div className="bg-bg-dark p-8 rounded-lg border border-dynamous-900/30 shadow-xl">
                             <div className="flex justify-center mb-8">
                 <img
                   src={config.exampleImage}
                   alt={config.exampleTitle}
                   className="w-full h-auto rounded-2xl object-contain max-w-4xl"
                   style={{ 
                     objectFit: "contain",
                     boxShadow: '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)'
                   }}
                 />
               </div>
              <p className="text-center text-muted-foreground text-lg">{config.exampleTitle}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {config.exampleFeatures.map((feature, index) => (
                  <div key={index} className="bg-bg-dark/50 p-6 rounded-lg border border-dynamous-900/30">
                    <h3 className="text-lg font-semibold mb-2 text-dynamous-400">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Pricing Section */}
        <section id="pricing" className="section visible py-16 bg-dynamous-600 text-white" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Get Started with {config.agentName}
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-lg">
                  Choose the plan that fits your needs and start transforming your process today.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {config.pricingPlans.map((plan, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-xl relative">
                  {plan.popular && (
                    <div className="absolute -top-4 -right-4 bg-dynamous-400 text-white px-4 py-1 rounded-full font-medium text-sm">Popular</div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-6 w-6 text-white/50 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={feature.included ? "" : "opacity-60"}>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <a href={config.ctaButtonLink} className="bg-white text-dynamous-600 hover:bg-gray-100 text-lg h-12 px-10 shadow-lg inline-flex items-center justify-center rounded-md font-medium transition-colors w-full max-w-md">
                {config.ctaButtonText}
              </a>
            </div>
          </div>
        </section>

        {/* 7. About Section */}
        <section id="about" className="section visible py-16 bg-background/80" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">About {config.agentName}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Bringing professional expertise to every team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-bg-dark p-8 rounded-lg border border-dynamous-900/30 shadow-xl">
              <div className="space-y-6">
                {config.aboutSections.map((section, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex items-center justify-center bg-dynamous-900/20 w-12 h-12 mr-4 rounded-lg text-dynamous-400">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-dynamous-400">{section.title}</h3>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
                             <div className="flex justify-center">
                 <div className="relative">
                   <img
                     src={config.aboutImage}
                     alt={`${config.agentName} About`}
                     className="w-full h-auto rounded-2xl object-contain max-w-xs"
                     style={{ 
                       objectFit: "contain",
                       boxShadow: '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)'
                     }}
                   />
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgentPage;
export { Icons };
export type { AgentPageConfig }; 