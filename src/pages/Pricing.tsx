
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'weekly' | 'monthly'>('monthly');

  const plans = [
    {
      name: "Basic",
      description: "Basic chat functionality",
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
      disabledFeatures: [
        "Early access to new features"
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
      disabledFeatures: [
        "Early access to new features"
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
      disabledFeatures: [],
      cta: "Get Started",
      popular: false
    }
  ];

  const getCurrentPrice = (plan: typeof plans[0]) => {
    return billingPeriod === 'weekly' ? plan.weeklyPrice : plan.monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
                Pay Monthly, Use Daily
              </h1>
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                Get started with Elykid - A safe space where you can safely share your thoughts, feelings and experiences!
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-16">
                <div className="bg-gray-100 rounded-full p-1 flex">
                  <button
                    onClick={() => setBillingPeriod('weekly')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      billingPeriod === 'weekly'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    WEEKLY
                  </button>
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                      billingPeriod === 'monthly'
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    MONTHLY
                    {billingPeriod === 'monthly' && (
                      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        -10%
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-3xl p-8 transition-all duration-300 ${
                    plan.popular
                      ? "bg-black text-white shadow-2xl scale-105 border-2 border-primary"
                      : "bg-white border border-gray-200 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div className="text-left mb-8">
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-black'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>
                    
                    <div className="flex items-baseline mb-2">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>
                        {getCurrentPrice(plan)}
                      </span>
                      <span className={`text-sm ml-2 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-5 h-5 rounded-full mr-3 mt-0.5 flex items-center justify-center ${
                          plan.popular ? 'bg-primary' : 'bg-primary'
                        }`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.disabledFeatures.map((feature, featureIndex) => (
                      <li key={`disabled-${featureIndex}`} className="flex items-start opacity-50">
                        <div className="w-5 h-5 rounded-full mr-3 mt-0.5 flex items-center justify-center bg-gray-300">
                          <Check className="w-3 h-3 text-gray-500" />
                        </div>
                        <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 flex items-center justify-center ${
                      plan.popular
                        ? "bg-white text-black hover:bg-gray-100"
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
                    Yes, we offer a 7-day free trial for both Sigma and Alpha plans. No credit card required.
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
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's the difference between weekly and monthly billing?
                  </h3>
                  <p className="text-gray-600">
                    Monthly billing offers a 10% discount compared to weekly billing. You get the same features with both options.
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
