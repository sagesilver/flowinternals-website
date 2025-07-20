import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-dynamous-900/30 sticky top-0 z-10 bg-black backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/a4fc7853-2ebb-4b66-bb30-8a3a378f59d3.png" 
              alt="flowinternals logo" 
              className="h-14 w-auto hover:opacity-80 transition-opacity" 
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
            Home
          </Link>
          <Link to="/courses" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
            Courses
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
            Products
          </Link>
          <Link to="/features" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
            Features
          </Link>
          <a href="/#testimonials" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
            Testimonials
          </a>
          <Link to="/pricing" className="text-sm font-medium hover:text-dynamous-400 transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">
            Sign In
          </Button>
          <Button className="bg-dynamous-600 hover:bg-dynamous-700 shadow-lg shadow-dynamous-600/20">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 