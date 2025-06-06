
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

const Step = ({ number, title, description, imageSrc }: StepProps) => {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-4">
        <span className="text-primary text-sm font-medium">{number}</span>
        <h3 className="text-lg font-medium ml-2">{title}</h3>
      </div>
      <div className="bg-gradient-to-br from-purple-400 to-blue-600 p-1 rounded-2xl mb-4">
        <div className="bg-white rounded-2xl overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Category = ({ title, isActive = false }: { title: string; isActive?: boolean }) => {
  return (
    <div className={cn("py-2 px-3 rounded-full text-sm", 
      isActive ? "bg-black text-white" : "text-black hover:bg-gray-100"
    )}>
      {title}
    </div>
  );
};

const HowToUse = () => {
  const steps = [
    {
      number: "01",
      title: "Sign up",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.",
      imageSrc: "/placeholder.svg"
    },
    {
      number: "02",
      title: "Create your profile",
      description: "Phasellus vehicula justo eget diam posuere sollicitudin eu tincidunt nulla. Curabitur eleifend tempor magna, in tempor enim tempus in. Sed quis magna rhoncus, pretium quam id, sodales mi.",
      imageSrc: "/placeholder.svg"
    },
    {
      number: "03",
      title: "Choose your style",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      imageSrc: "/placeholder.svg"
    },
    {
      number: "04", 
      title: "Create your profile",
      description: "Phasellus vehicula justo eget diam posuere sollicitudin eu tincidunt nulla. Curabitur eleifend tempor magna, in tempor enim tempus in. Sed quis magna rhoncus, pretium quam id, sodales mi.",
      imageSrc: "/placeholder.svg"
    },
    {
      number: "05",
      title: "Create your profile",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
      imageSrc: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center">How to use</h1>
            <p className="text-center text-gray-600 mb-12">
              Get started with Elykid in a few simple steps, your safety 
              is our top priority. Made for humans by humans who care.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-16">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search topic..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-16">
              <Category title="Sorting method" />
              <Category title="Getting Started" isActive={true} />
              <Category title="First steps" />
              <Category title="Chat features" />
              <Category title="Customize" />
              <Category title="Advanced features" />
            </div>

            {/* Steps Section */}
            <div>
              {steps.map((step, index) => (
                <Step
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  imageSrc={step.imageSrc}
                />
              ))}
            </div>

            {/* Need Help Section */}
            <div className="mt-16 mb-16 text-center">
              <h2 className="text-2xl font-bold mb-2">Need help?</h2>
              <p className="text-sm text-gray-600">
                Can't find what you're looking for?
              </p>
            </div>
          </div>
        </section>

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
