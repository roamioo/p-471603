
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, UserPlus, MessageCircle, Settings, CheckCircle } from "lucide-react";

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
      icon: <CheckCircle className="w-8 h-8" />,
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                How to Use Elykid – Getting Started
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Welcome to Elykid! Excited to start your journey with your personalized AI companion? Let's get you set up in just a few simple steps.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start mb-12 last:mb-0">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-pulse-100 text-pulse-500 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="bg-pulse-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        Step {index + 1}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-2">{step.description}</p>
                    <p className="text-gray-600">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pro Tips for Getting the Most Out of Elykid
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Explore Different Personalities
                  </h3>
                  <p className="text-gray-600">
                    Don't stick to just one AI personality. Try Athena for sharp insights, Nathan for empathy, or Kai for a laid-back chat.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Customize Your Experience
                  </h3>
                  <p className="text-gray-600">
                    Dive into the settings to customize tone, appearance, and features. The more you personalize, the better your experience.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Be Yourself
                  </h3>
                  <p className="text-gray-600">
                    The more authentic you are in your conversations, the better Elykid can adapt to your personality and needs.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Use It Regularly
                  </h3>
                  <p className="text-gray-600">
                    Regular interactions help Elykid learn your patterns and preferences, making each conversation more meaningful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                And that's it! You're ready to go. Start chatting with Elykid and watch it evolve as you interact. Take your time exploring all the features and enjoy a one-of-a-kind personalized experience.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-pulse-500 text-white font-semibold rounded-full hover:bg-pulse-600 transition-colors"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowToUse;
