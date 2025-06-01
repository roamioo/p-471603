
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with Elykid",
      features: [
        "100 messages per month",
        "Basic AI personalities",
        "Standard response time",
        "Mobile app access",
        "Basic customization"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For users who want the full Elykid experience",
      features: [
        "Unlimited messages",
        "All AI personalities",
        "Priority response time",
        "Advanced memory features",
        "Full customization options",
        "Voice commands (coming soon)",
        "Conversation archives",
        "Premium support"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "per month",
      description: "For power users and teams",
      features: [
        "Everything in Pro",
        "Multiple AI companions",
        "Group chats with AIs",
        "Advanced reasoning features",
        "Priority feature access",
        "Custom AI training",
        "Analytics dashboard",
        "24/7 premium support"
      ],
      cta: "Contact Sales",
      popular: false
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
                Choose Your Elykid Plan
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Find the perfect plan for your AI companion journey. Start free and upgrade anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-gradient-to-br from-pulse-500 to-pulse-600 text-white shadow-2xl scale-105"
                      : "bg-white border border-gray-200 shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-pulse-500 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 mt-0.5 ${plan.popular ? 'text-white' : 'text-pulse-500'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                      plan.popular
                        ? "bg-white text-pulse-500 hover:bg-gray-50"
                        : "bg-pulse-500 text-white hover:bg-pulse-600"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I change my plan anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a free trial for paid plans?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer a 7-day free trial for both Pro and Premium plans. No credit card required.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What happens to my data if I cancel?
                  </h3>
                  <p className="text-gray-600">
                    Your conversation history is preserved for 30 days after cancellation, giving you time to export or reactivate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
