
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'weekly' | 'monthly'>('monthly');

  const plans = [
    {
      name: "Basic",
      description: "For casual users",
      weeklyPrice: "₹0",
      monthlyPrice: "₹0",
      period: billingPeriod === 'weekly' ? 'per week' : 'per month',
      features: [
        "30 min of chat daily",
        "2 min of voice call daily",
        "Access to limited personas",
        "100 Saved Conversation",
        "Factual Memory"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Sigma",
      description: "Your safe space",
      weeklyPrice: "₹45",
      monthlyPrice: "₹180",
      period: billingPeriod === 'weekly' ? 'per week' : 'per month',
      features: [
        "Unlimited Chat!",
        "30 min of voice call daily",
        "Access to all personas",
        "1000 Saved Conversation",
        "Long Term & Factual Memory"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Alpha",
      description: "Access to Exclusivity",
      weeklyPrice: "₹0",
      monthlyPrice: "₹0",
      period: billingPeriod === 'weekly' ? 'per week' : 'per month',
      features: [
        "Unlimited Chat!",
        "Unlimited voice call access",
        "Access to persona store",
        "Unlimited conversation storage",
        "Long Term & Factual Memory",
        "Early access to new features"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  const getCurrentPrice = (plan: typeof plans[0]) => {
    return billingPeriod === 'weekly' ? plan.weeklyPrice : plan.monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Header Section - Simplified */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-5">
                Pay Monthly, Use Daily
              </h1>
              <p className="text-gray-600 mb-10 text-lg">
                Get started with Elykid - A safe space where you can safely share your thoughts, feelings and experiences!
              </p>
              
              {/* Billing Toggle - Updated Design */}
              <div className="flex items-center justify-center mb-12">
                <div className="bg-gray-200 rounded-full p-1 flex">
                  <button
                    onClick={() => setBillingPeriod('weekly')}
                    className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      billingPeriod === 'weekly'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                      billingPeriod === 'monthly'
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards - Simplified */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                      {getCurrentPrice(plan)}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-800">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2.5 px-4 rounded-xl font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* New CTA Section */}
        <section className="py-20 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Be part of the future of personal AI
            </h2>
            <p className="text-gray-600 mb-8">
              Unlock the full potential of AI companionship with Elykid and experience a revolutionary personal AI.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-xl text-base font-medium h-auto">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      
      {/* Updated Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;
