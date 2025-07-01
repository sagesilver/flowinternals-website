import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/shared.css";

const Rekon_Analyst = () => {
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
                src="/lovable-uploads/a4fc7853-2ebb-4b66-bb30-8a3a378f59d3.png"
                alt="flowinternals logo"
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
                <span className="text-white text-5xl md:text-6xl font-bold">Rekon</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Your Professional Requirements Analyst — Always Ready, Always Precise.
              </p>
              <p className="text-lg text-white mb-8">
                Rekon transforms vague ideas into crystal-clear software requirements, accelerating delivery and reducing project risk.
              </p>
              <div className="mt-8">
                <a href="#capabilities" className="bg-dynamous-500 hover:bg-dynamous-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all">
                  Explore Capabilities
                </a>
              </div>
            </div>
            <div className="lg:h-[540px] relative rounded-lg overflow-hidden shadow-2xl border border-dynamous-400/20">
              <img
                src="/media/Rekon_Laptop_Table_2.png"
                alt="Rekon Requirements Analyst"
                className="w-full h-full object-cover"
                style={{ objectFit: "contain" }}
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
              <h2 className="gradient-text mb-4">What Rekon Can Do</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Our powerful AI analyst offers key capabilities to streamline your requirements process.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl hover:shadow-dynamous-600/10 hover:border-dynamous-500/50 transition-all">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Structured Requirements</h3>
                <p className="text-muted-foreground">Capture business needs into structured EPICs and user stories with consistent formatting and clear acceptance criteria.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl hover:shadow-dynamous-600/10 hover:border-dynamous-500/50 transition-all">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Clarification Expert</h3>
                <p className="text-muted-foreground">Identify missing information and propose clarifications to ensure requirements are complete before development begins.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl hover:shadow-dynamous-600/10 hover:border-dynamous-500/50 transition-all">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">SRS Document Generation</h3>
                <p className="text-muted-foreground">Generate Software Requirements Specification documents aligned with industry best practices and formatting standards.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl hover:shadow-dynamous-600/10 hover:border-dynamous-500/50 transition-all">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Visual Documentation</h3>
                <p className="text-muted-foreground">Build system context and flow diagrams to visualize processes, interfaces, and data flows for better stakeholder understanding.</p>
              </div>

              {/* Card 5 */}
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl hover:shadow-dynamous-600/10 hover:border-dynamous-500/50 transition-all">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Requirement Traceability</h3>
                <p className="text-muted-foreground">Maintain requirement traceability across project lifecycles, linking business goals to technical specifications and test cases.</p>
              </div>

              {/* Card 6 */}
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl hover:shadow-dynamous-600/10 hover:border-dynamous-500/50 transition-all">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Interactive Collaboration</h3>
                <p className="text-muted-foreground">Collaborate interactively like a senior analyst, adapting to your team's workflow and facilitating requirement gathering sessions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Challenges Rekon Solves Section */}
        <section id="challenges" className="section visible py-16 bg-background" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">Designed for Real-World Requirements Challenges</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Rekon addresses the common pain points in software requirements gathering and management.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Cuts Through Vagueness</h3>
                <p className="text-muted-foreground">Uses structured questioning techniques to transform ambiguous stakeholder statements into clear, actionable requirements.</p>
              </div>
              
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
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
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Instant Delivery-Ready Artifacts</h3>
                <p className="text-muted-foreground">Converts ideas into ready-to-use requirements documents, user stories, and acceptance criteria without delay.</p>
              </div>
              
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v9"></path>
                    <path d="M5 13v2a2 2 0 0 0 2 2h7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Standardized Output</h3>
                <p className="text-muted-foreground">Maintains consistent requirements formatting and structure across different projects and teams.</p>
              </div>
              
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"></path>
                    <circle cx="12" cy="8" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Professional Formality</h3>
                <p className="text-muted-foreground">Ensures every deliverable meets professional standards with proper language, formatting, and completeness.</p>
              </div>
              
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Reduces Rework and Scope Creep</h3>
                <p className="text-muted-foreground">Proactively identifies gaps and inconsistencies before development starts, reducing costly changes later.</p>
              </div>
              
              <div className="bg-bg-dark p-6 rounded-lg border border-dynamous-900/30 shadow-xl">
                <div className="flex items-center justify-center mb-4 bg-dynamous-900/20 w-12 h-12 rounded-lg text-dynamous-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Accelerates Project Startup</h3>
                <p className="text-muted-foreground">Gets projects moving faster with ready-to-use documentation that can be immediately shared with development teams.</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <img
                src="/media/Rekon_oil.png"
                alt="Rekon oil"
                className="w-full h-auto max-w-4xl"
              />
            </div>
          </div>
        </section>

        {/* 4. How Rekon Works Section */}
        <section id="how-it-works" className="section visible py-16 bg-background/80" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">How Rekon Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A simple, powerful workflow designed to fit seamlessly into your software development process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-dynamous-600 text-white rounded-full w-8 h-8 mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-dynamous-400">Conversational Intake</h3>
                      <p className="text-muted-foreground">Engage Rekon through a natural, conversational interface to describe your project needs and requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-dynamous-600 text-white rounded-full w-8 h-8 mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-dynamous-400">Guided Questioning</h3>
                      <p className="text-muted-foreground">Rekon asks clarifying questions to refine the requirements, ensuring nothing critical is missed.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-dynamous-600 text-white rounded-full w-8 h-8 mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-dynamous-400">Structured Deliverables</h3>
                      <p className="text-muted-foreground">Generate EPICs, User Stories, Acceptance Criteria, and SRS documents based on the refined requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center bg-dynamous-600 text-white rounded-full w-8 h-8 mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-dynamous-400">Integration & Implementation</h3>
                      <p className="text-muted-foreground">Save, export, or integrate Rekon's outputs into your existing project management workflow.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-dynamous-600/10 to-dynamous-500/10 rounded-lg" />
                  <img
                    src="/media/Rekon_teach.png"
                    alt="Rekon process"
                    className="rounded-lg shadow-xl relative z-10"
                    style={{ objectFit: "contain", height: "540px" }}
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
                See the high-quality artifacts Rekon creates to help your development team succeed.
              </p>
            </div>
            
            <div className="bg-bg-dark p-8 rounded-lg border border-dynamous-900/30 shadow-xl">
              <div className="flex justify-center mb-8">
                <img
                  src="/media/Rekon_Epics_Board.png"
                  alt="Example EPICs and User Stories"
                  className="rounded-lg shadow-xl w-full max-w-4xl"
                />
              </div>
              <p className="text-center text-muted-foreground text-lg">Sample EPICs and User Story Flow</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-bg-dark/50 p-6 rounded-lg border border-dynamous-900/30">
                  <h3 className="text-lg font-semibold mb-2 text-dynamous-400">EPICs & User Stories</h3>
                  <p className="text-muted-foreground">Well-structured user stories with detailed acceptance criteria for clear development guidance.</p>
                </div>
                <div className="bg-bg-dark/50 p-6 rounded-lg border border-dynamous-900/30">
                  <h3 className="text-lg font-semibold mb-2 text-dynamous-400">SRS Documents</h3>
                  <p className="text-muted-foreground">Complete software requirement specifications following industry standard formats and best practices.</p>
                </div>
                <div className="bg-bg-dark/50 p-6 rounded-lg border border-dynamous-900/30">
                  <h3 className="text-lg font-semibold mb-2 text-dynamous-400">Process Diagrams</h3>
                  <p className="text-muted-foreground">Visual representations of system flows, data models, and integration points for better understanding.</p>
                </div>
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
                  Get Started with Rekon
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-lg">
                  Choose the plan that fits your requirements needs and start transforming your software development process today.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-xl relative">
                <div className="absolute -top-4 -right-4 bg-dynamous-400 text-white px-4 py-1 rounded-full font-medium text-sm">Popular</div>
                <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to Rekon chat for requirements intake</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>EPIC and User Story generation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Acceptance Criteria suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Downloadable text outputs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Requirements formatting aligned with FlowInternals best practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white/50 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="opacity-60">No external integrations (Jira/Drive)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Premium Plan (Coming Soon)</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Everything in Basic</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Structured SRS document generation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customisable terminology and requirement types</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Early access to AI-driven workshop facilitation features (future)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority updates and roadmap features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Planned external tool integrations (Jira, Google Drive, and more)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <a href="#" className="bg-white text-dynamous-600 hover:bg-gray-100 text-lg h-12 px-10 shadow-lg inline-flex items-center justify-center rounded-md font-medium transition-colors w-full max-w-md">
                Start Using Rekon
              </a>
            </div>
          </div>
        </section>

        {/* 7. About Rekon Section */}
        <section id="about" className="section visible py-16 bg-background/80" style={{ opacity: 1, transform: "translateY(0)" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="gradient-text mb-4">About Rekon</h2>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Bringing professional requirements engineering to every team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-bg-dark p-8 rounded-lg border border-dynamous-900/30 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center bg-dynamous-900/20 w-12 h-12 mr-4 rounded-lg text-dynamous-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-dynamous-400">Best Practices</h3>
                    <p className="text-muted-foreground">Built by FlowInternals, Rekon is designed to embody the best practices of business analysis and system requirements engineering.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center bg-dynamous-900/20 w-12 h-12 mr-4 rounded-lg text-dynamous-400">
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
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-dynamous-400">Actionable Output</h3>
                    <p className="text-muted-foreground">Every output is structured, complete, and immediately actionable, helping you drive projects forward with confidence.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center justify-center bg-dynamous-900/20 w-12 h-12 mr-4 rounded-lg text-dynamous-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m2 12 3-3 3 3"></path>
                      <path d="m16 6 3 3-3 3"></path>
                      <path d="M8 16h8"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-dynamous-400">Continuous Learning</h3>
                    <p className="text-muted-foreground">Rekon continuously learns from industry standards and best practices to ensure your requirements documentation is always professional-grade and development-ready.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="/media/rekon_Keycard.png"
                    alt="Rekon Keycard"
                    className="relative z-10 max-w-xs rounded-md shadow-2xl border border-dynamous-400/20"
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

export default Rekon_Analyst; 