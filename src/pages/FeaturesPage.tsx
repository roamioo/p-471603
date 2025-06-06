
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      title: "Smart everything",
      description: "Elykid learns from your interactions, adapting its responses to match your preferences and providing personalized assistance.",
      icon: (
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path>
            <path d="M12 8a4 4 0 1 0 4 4"></path>
            <circle cx="12" cy="12" r="1"></circle>
          </svg>
        </div>
      )
    },
    {
      title: "Seamless Everyday",
      description: "Integrate Elykid effortlessly into your daily routine with features designed to enhance your productivity and lifestyle.",
      icon: (
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <path d="M9 13v-1h6v1"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Intense Customization",
      description: "Tailor Elykid to your specific needs with extensive customization options for appearance, behavior, and responses.",
      icon: (
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Conversation Archives",
      description: "Never lose track of important discussions with complete archives of all your conversations with Elykid.",
      icon: (
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Security",
      description: "Your data is protected with advanced encryption and privacy features to ensure your conversations remain confidential.",
      icon: (
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          </svg>
        </div>
      )
    },
    {
      title: "Calming music",
      description: "Enhance your mood with Elykid's curated selection of calming music perfect for relaxation, focus, or meditation.",
      icon: (
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>
      )
    },
  ];

  const customizationOptions = [
    "Appearance", 
    "Avatar", 
    "Voice & Dialect"
  ];

  const aiMemoryTypes = [
    "Long Term Memory",
    "Recent Memory",
    "Short Term Memory"
  ];

  const informationFeatures = [
    "Knowledge Base",
    "Internet Search",
    "Time Awareness"
  ];

  return (
    <div className="bg-white">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Main features<br />
                of Elykid
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg">
                From smart AI memory to total customization options, Elykid has it all. From its smart AI, you'll love what Elykid can do.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {mainFeatures.map((feature, index) => (
                  <div key={index} className="mb-10">
                    {feature.icon}
                    <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-black rounded-3xl overflow-hidden w-64 h-[500px] shadow-xl">
                  <div className="p-5 text-white">
                    <p className="text-center">It's smart!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 p-8 rounded-3xl shadow-lg">
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="h-48 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Customization interface placeholder</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Customization<br/>your AI</h2>
              <ul className="space-y-4 mb-8">
                {customizationOptions.map((option, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* AI Memory Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Memory</h2>
              <ul className="space-y-4 mb-8">
                {aiMemoryTypes.map((type, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 p-8 rounded-3xl shadow-lg">
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="h-48 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">AI Memory interface placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Information Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-8 rounded-3xl shadow-lg">
                <div className="bg-white rounded-xl p-4 shadow">
                  <div className="h-48 flex items-center justify-center">
                    <p className="text-gray-400 text-sm">Information interface placeholder</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Informatica</h2>
              <ul className="space-y-4 mb-8">
                {informationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Made For You Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            AI specifically made for you.
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-3">
              <div className="bg-black rounded-xl p-6 flex items-center justify-center h-72">
                <p className="text-white">Combination of social AI placeholder image</p>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="bg-black rounded-xl p-6 flex items-center justify-center h-56">
                <p className="text-white">AI Memory placeholder image</p>
              </div>
            </div>
            
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-black rounded-xl p-6 h-56">
                <h3 className="text-white text-xl font-semibold mb-4">Long Term Memory</h3>
                <p className="text-gray-400">
                  Elykid remembers your conversations, preferences, and important details to provide
                  increasingly personalized assistance over time.
                </p>
                <div className="flex gap-4 mt-6">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black">1</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black">2</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black">3</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-black">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be part of the future<br />
            of personal AI
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Unlock the full potential of personal AI assistance with Elykid - your personal AI
            companion, crafted just for you.
          </p>
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium">
            Get Started
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FeaturesPage;
