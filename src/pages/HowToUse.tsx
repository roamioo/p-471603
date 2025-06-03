
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, UserPlus, MessageCircle, Settings, CheckCircle, Mail } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Download the App or Visit the Website",
      description: "Head over to the Elykid website or find the Elykid app in your device's app store (Google Play or App Store).",
      details: "Available on all major platforms including iOS, Android, and web browsers."
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Create Your Account",
      description: "Click 'Sign Up' and fill in your information. Enter your name, email address, and choose a password.",
      details: "Don't forget to accept the terms and conditions before moving on!"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Verify Your Email",
      description: "Check your inbox for a verification email. Just click the link inside to confirm your account.",
      details: "This step ensures your account security and helps us keep you updated."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Set Up Your Profile",
      description: "Once verified, you'll be prompted to set up your profile. Add a profile picture and share some info to help personalize your experience.",
      details: "This helps Elykid understand your preferences from the start."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Start Chatting with Elykid",
      description: "You're all set! Open the app and start chatting with Elykid. It's an AI that learns from you, making each conversation feel more tailored and personal.",
      details: "The more you chat, the smarter and more in tune with your needs it becomes."
    }
  ];

  const tips = [
    {
      title: "Explore Different Personalities",
      description: "Don't stick to just one AI personality. Try Athena for sharp insights, Nathan for empathy, or Kai for a laid-back chat."
    },
    {
      title: "Customize Your Experience",
      description: "Dive into the settings to customize tone, appearance, and features. The more you personalize, the better your experience."
    },
    {
      title: "Be Yourself",
      description: "The more authentic you are in your conversations, the better Elykid can adapt to your personality and needs."
    },
    {
      title: "Use It Regularly",
      description: "Regular interactions help Elykid learn your patterns and preferences, making each conversation more meaningful."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.05)_0%,transparent_50%)]"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pulse-50 border border-pulse-200 mb-8">
                <span className="text-sm font-medium text-pulse-600">Getting Started Guide</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-8 leading-[1.1]">
                How to Use
                <br />
                <span className="bg-gradient-to-r from-pulse-500 to-pulse-600 bg-clip-text text-transparent">
                  Elykid
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
                Welcome to Elykid! Excited to start your journey with your personalized AI companion? 
                Let's get you set up in just a few simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative mb-20 last:mb-0"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-pulse-200 to-transparent hidden lg:block"></div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                    {/* Step Icon and Number */}
                    <div className="flex items-center gap-6 lg:flex-col lg:items-center lg:gap-4">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pulse-100 to-pulse-50 text-pulse-500 rounded-2xl shadow-lg">
                        {step.icon}
                      </div>
                      <div className="bg-pulse-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Step {index + 1}
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 bg-white rounded-3xl border border-gray-100 p-10 hover:border-pulse-200 hover:shadow-xl hover:shadow-pulse-500/10 transition-all duration-500">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <p className="text-pulse-600 font-medium">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Pro Tips for Getting the
                  <br />
                  <span className="bg-gradient-to-r from-pulse-500 to-pulse-600 bg-clip-text text-transparent">
                    Most Out of Elykid
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  These expert tips will help you unlock the full potential of your AI companion.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tips.map((tip, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-pulse-200 hover:shadow-xl hover:shadow-pulse-500/10 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-2 h-2 bg-pulse-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pulse-600 transition-colors duration-300">
                        {tip.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed ml-6">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)]"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
                Ready to
                <br />
                <span className="bg-gradient-to-r from-pulse-400 to-pulse-500 bg-clip-text text-transparent">
                  Get Started?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                And that's it! You're ready to go. Start chatting with Elykid and watch it evolve as you interact. 
                Take your time exploring all the features and enjoy a one-of-a-kind personalized experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-pulse-500 to-pulse-600 text-white font-semibold text-lg rounded-2xl hover:from-pulse-600 hover:to-pulse-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-pulse-500/25 transform hover:scale-105"
                >
                  Start Your Journey
                </a>
                
                <a
                  href="#"
                  className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToUse;
