
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepImageProps {
  imageSrc: string;
  alt: string;
}

const StepImage = ({ imageSrc, alt }: StepImageProps) => {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-blue-600 p-1 rounded-2xl mb-4">
      <div className="bg-white rounded-2xl overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

interface CategoryItemProps {
  title: string;
  isActive?: boolean;
  children?: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
  hasChildren?: boolean;
}

const CategoryItem = ({ 
  title, 
  isActive = false, 
  children, 
  isExpanded = false,
  onToggle,
  hasChildren = false
}: CategoryItemProps) => {
  return (
    <div className="mb-2">
      <div 
        className={cn(
          "flex items-center py-2 cursor-pointer",
          isActive ? "text-black font-medium" : "text-gray-500"
        )}
        onClick={onToggle}
      >
        {hasChildren && (
          <span className="mr-2">
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
        <span>{title}</span>
      </div>
      {isExpanded && children && (
        <div className="ml-6 mt-2 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  );
};

interface SubCategoryProps {
  title: string;
  isActive?: boolean;
}

const SubCategory = ({ title, isActive = false }: SubCategoryProps) => {
  return (
    <div 
      className={cn(
        "py-1 text-sm",
        isActive ? "text-primary font-medium" : "text-gray-500"
      )}
    >
      {title}
    </div>
  );
};

const HowToUse = () => {
  const [expandedCategory, setExpandedCategory] = useState<string>("Getting started");
  
  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory("");
    } else {
      setExpandedCategory(category);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          {/* Left Sidebar with Categories */}
          <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-8 md:mb-0">
            <div className="sticky top-24">
              <CategoryItem 
                title="Getting started" 
                isActive={expandedCategory === "Getting started"} 
                isExpanded={expandedCategory === "Getting started"}
                onToggle={() => toggleCategory("Getting started")}
                hasChildren={true}
              >
                <SubCategory title="Sign up" isActive={true} />
                <SubCategory title="Create your profile" />
                <SubCategory title="Get Advices" />
                <SubCategory title="Explore & engage" />
              </CategoryItem>
              
              <CategoryItem 
                title="Pricing plans" 
                isActive={expandedCategory === "Pricing plans"}
                isExpanded={expandedCategory === "Pricing plans"}
                onToggle={() => toggleCategory("Pricing plans")}
                hasChildren={true}
              />
              
              <CategoryItem 
                title="Core features" 
                isActive={expandedCategory === "Core features"}
                isExpanded={expandedCategory === "Core features"}
                onToggle={() => toggleCategory("Core features")}
                hasChildren={true}
              />
              
              <CategoryItem 
                title="Roadmap" 
                isActive={expandedCategory === "Roadmap"}
                isExpanded={expandedCategory === "Roadmap"}
                onToggle={() => toggleCategory("Roadmap")}
                hasChildren={true}
              />
              
              <CategoryItem 
                title="Enhanced features" 
                isActive={expandedCategory === "Enhanced features"}
                isExpanded={expandedCategory === "Enhanced features"}
                onToggle={() => toggleCategory("Enhanced features")}
                hasChildren={true}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {/* Hero Section */}
            <section className="mb-10">
              <h1 className="text-4xl font-bold mb-4 text-center">How to use</h1>
              <p className="text-center text-gray-600 mb-10">
                Get started with Elykid - A safe space where you can safely
                share your thoughts, feelings and experiences!
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mb-12">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <input
                  type="text"
                  placeholder="Search topic"
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              {/* Content Section */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
                  
                  <div className="mb-12">
                    <div className="flex items-center mb-4">
                      <span className="text-primary text-xs font-medium border border-primary rounded-full w-6 h-6 flex items-center justify-center mr-3">01</span>
                      <h3 className="text-xl font-medium">Sign up</h3>
                    </div>
                    
                    <StepImage 
                      imageSrc="/placeholder.svg" 
                      alt="Sign up screenshot" 
                    />
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      A platform that lets you express yourself as much as you want. Whether it's your personal 
                      experiences or your thoughts. Elykid is space for you to share them all.
                    </p>
                  </div>

                  <div className="mb-12">
                    <div className="flex items-center mb-4">
                      <span className="text-primary text-xs font-medium border border-primary rounded-full w-6 h-6 flex items-center justify-center mr-3">02</span>
                      <h3 className="text-xl font-medium">Create your profile</h3>
                    </div>
                    
                    <StepImage 
                      imageSrc="/placeholder.svg" 
                      alt="Create profile screenshot" 
                    />
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Customize your profile to reflect your personality. Add a profile picture, bio, and other details
                      to help others get to know you better. Your profile is your digital identity on Elykid.
                    </p>
                  </div>

                  <div className="mb-12">
                    <div className="flex items-center mb-4">
                      <span className="text-primary text-xs font-medium border border-primary rounded-full w-6 h-6 flex items-center justify-center mr-3">03</span>
                      <h3 className="text-xl font-medium">Get Advice</h3>
                    </div>
                    
                    <StepImage 
                      imageSrc="/placeholder.svg" 
                      alt="Get advice screenshot" 
                    />
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Elykid offers personalized advice based on your experiences and feelings. Our AI-powered
                      system provides helpful guidance and support whenever you need it.
                    </p>
                  </div>

                  <div className="mb-12">
                    <div className="flex items-center mb-4">
                      <span className="text-primary text-xs font-medium border border-primary rounded-full w-6 h-6 flex items-center justify-center mr-3">04</span>
                      <h3 className="text-xl font-medium">Explore & engage</h3>
                    </div>
                    
                    <StepImage 
                      imageSrc="/placeholder.svg" 
                      alt="Explore screenshot" 
                    />
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      Discover stories from other users, engage with their content, and build meaningful connections.
                      The more you interact, the more personalized your experience becomes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Need Help Section */}
            <div className="mt-16 mb-16 text-center">
              <h2 className="text-2xl font-bold mb-2">Need help?</h2>
              <p className="text-sm text-gray-600">
                Can't find what you're looking for?
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Be part of the future
                <br />
                of personal AI
              </h2>
              <p className="text-gray-600 mb-8">
                Unlock the full potential of AI companionship with Elykid and experience a
                revolutionary personal AI.
              </p>
              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full">
                Get started
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToUse;
