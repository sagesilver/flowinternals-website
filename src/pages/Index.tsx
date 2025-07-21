import React from "react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-hero-pattern py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="mb-4">
                <span className="text-dynamous-400">Accelerate</span>{" "}
                <span className="text-white">your AI-powered Workflow Journey</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Master transforming your business processes by learning and implementing AI-powered workflows
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="hero-button">
                  Explore Courses
                </Link>
                <Link 
                  to="/products"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-dynamous-300 bg-transparent px-6 text-lg font-medium text-dynamous-700 transition-colors hover:bg-dynamous-50"
                >
                  Explore Products
                </Link>
              </div>
              <div className="mt-8 flex items-center text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={cn(
                      "w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium",
                      i === 1 && "bg-dynamous-100 text-dynamous-600",
                      i === 2 && "bg-dynamous-200 text-dynamous-700",
                      i === 3 && "bg-dynamous-300 text-dynamous-800",
                      i === 4 && "bg-dynamous-400 text-white",
                    )}>
                      {i}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <span className="font-semibold">2,500+</span> students already enrolled
                </div>
              </div>
            </div>
            <div className="lg:h-[540px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-dynamous-600/10 to-dynamous-500/10 rounded-2xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl" style={{
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)'
              }}>
                <div className="absolute inset-0 bg-gradient-to-r from-dynamous-400/20 to-dynamous-500/20 rounded-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students collaborating"
                  className="w-full h-full rounded-2xl object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-background/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="gradient-text mb-4">Featured Products and Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover our most popular products and courses designed to help you master new skills and advance your career.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CourseCard
              title="Introduction to n8n Workflow Basics"
              description="A simple workflow demonstrating how to build a recruitment form that saves resumes to OneDrive and updates records in Microsoft Excel."
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              level="Beginner"
              duration="2 hours"
              isTutorial={true}
              isFree={true}
            />
            <CourseCard
              title="Software Engineering GPT Squad"
              description="Assist your software delivery with AI-agent bots that never tire, sleep or eat!"
              image="/media/BOT squad b.png"
              level="Intermediate"
              duration="5-Agents"
              isTutorial={false}
              isFree={false}
              isProduct={true}
              isPaid={true}
            />
            <CourseCard
              title="AI & Machine Learning"
              description="Dive deep into artificial intelligence algorithms, neural networks, and practical ML model deployment."
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              level="Advanced"
              duration="10 weeks"
            />
            <CourseCard
              title="Meet Agent Rekon - Requirements Analyst"
              description="Rekon is your helpful analyst who will help you manage your software requirements."
              image="/media/rekon_analyst.png"
              level="Advanced"
              duration="Single Agent"
              isTutorial={false}
              isFree={false}
              isProduct={true}
              isPaid={true}
            />
            <CourseCard
              title="AI Roadmap Tutorial"
              description="A walkthrough of key topics that will help you better understand your own journey through the AI landscape."
              image="/media/ai_roadmap.png"
              level="Intermediate"
              duration="2 weeks"
              isTutorial={true}
              isFree={false}
              isPaid={true}
            />
            <CourseCard
              title="Meet Agent Cheka - Test Analyst"
              description="Cheka is an expert in testing and will help you compile tests for your project."
              image="/media/cheka_tests.png"
              level="Advanced"
              duration="Single Agent"
              isTutorial={false}
              isFree={false}
              isProduct={true}
              isPaid={true}
            />
          </div>
          <div className="mt-12 text-center">
            <Link to="/courses" className="hero-button">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="gradient-text mb-4">Why Choose flowinternals?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our platform offers a unique learning experience with features designed to help you succeed.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={
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
                  className="h-8 w-8"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              }
              title="Expert-Led Curriculum"
              description="Courses designed and taught by industry experts with years of practical experience."
            />
            <FeatureCard
              icon={
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
                  className="h-8 w-8"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              }
              title="Hands-On Projects"
              description="Apply your knowledge through real-world projects that build your portfolio."
            />
            <FeatureCard
              icon={
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
                  className="h-8 w-8"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              }
              title="Personalized Learning"
              description="Adaptive learning paths that adjust to your pace and learning style."
            />
            <FeatureCard
              icon={
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
                  className="h-8 w-8"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              }
              title="Global Community"
              description="Connect with learners worldwide through forums, study groups, and live events."
            />
            <FeatureCard
              icon={
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
                  className="h-8 w-8"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              }
              title="Career Support"
              description="Resume reviews, interview prep, and job placement assistance for graduates."
            />
            <FeatureCard
              icon={
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
                  className="h-8 w-8"
                >
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M2 18h2"></path>
                  <path d="M20 18h2"></path>
                  <path d="m19.07 10.93-1.41 1.41"></path>
                  <path d="M22 22H2"></path>
                  <path d="m16 16-4 4-4-4"></path>
                  <path d="M12 12v8"></path>
                </svg>
              }
              title="Flexible Learning"
              description="Study at your own pace with lifetime access to course materials."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="gradient-text mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Hear from our graduates who have transformed their careers through our courses.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="The data science course gave me the practical skills I needed to transition from marketing to analytics. I landed a job as a Data Analyst within 3 months of completing the program."
              author="Sarah Johnson"
              role="Data Analyst at TechCorp"
            />
            <TestimonialCard
              quote="As a self-taught developer, I needed to fill gaps in my knowledge. The Full-Stack course was challenging but incredibly rewarding. Now I'm building applications I never thought I could."
              author="Michael Chen"
              role="Senior Web Developer"
            />
            <TestimonialCard
              quote="The AI course was exactly what I needed to upskill in my current role. The hands-on projects and personalized feedback from instructors made all the difference."
              author="Priya Sharma"
              role="ML Engineer at InnovateTech"
            />
            <TestimonialCard
              quote="flowinternals' workflow automation tools transformed our HR processes. We reduced onboarding time by 70% and eliminated manual data entry. The ROI was immediate and substantial."
              author="David Rodriguez"
              role="Head of HR Operations, GlobalTech Solutions"
            />
            <TestimonialCard
              quote="As a small business owner, the n8n workflow templates from flowinternals were a game-changer. I automated my entire customer support pipeline in just two days. Incredible value for money!"
              author="Lisa Chen"
              role="Founder, Digital First Marketing"
            />
            <TestimonialCard
              quote="The custom workflow solutions helped us seamlessly integrate our legacy systems with modern tools. What used to take weeks now happens in minutes. flowinternals has revolutionized our operations."
              author="James Mitchell"
              role="CTO, Enterprise Solutions Inc."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dynamous-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to accelerate your career?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-lg">
                Join thousands of successful students who have transformed their careers with flowinternals Academy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-dynamous-600 hover:bg-gray-100 text-lg h-12 px-6 shadow-lg">
                  Enroll Now
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 h-12 px-6">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 max-w-md shadow-xl">
                <h3 className="text-xl font-semibold mb-2">Get notified about new courses</h3>
                <p className="opacity-90 mb-4">
                  Be the first to know when we launch new courses and special promotions.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <Button className="bg-white text-dynamous-600 hover:bg-gray-100 shadow-md">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/90 text-gray-300 border-t border-dynamous-900/30">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">flowinternals</h3>
              <p className="text-sm opacity-80 mb-4">
                Empowering careers through transformative online education.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">COURSES</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">Data Science</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Web Development</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">AI & Machine Learning</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Cloud Computing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">Cybersecurity</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about-us" className="hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white">Careers</Link>
                </li>
                <li>
                  <Link to="/partners" className="hover:text-white">Partners</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white">Blog</Link>
                </li>
                <li>
                  <Link to="/press" className="hover:text-white">Press</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">LEGAL</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/terms" className="hover:text-white">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-dynamous-900/30 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm opacity-70">
              © 2025 flowinternals. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <select className="bg-dynamous-900/50 text-gray-300 rounded px-3 py-1 text-sm border border-dynamous-800/30 focus:outline-none focus:ring-1 focus:ring-dynamous-500">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
