
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section ref={ctaRef} className="w-full bg-gradient-to-r from-pulse-500 to-pulse-600 py-16 sm:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to Start Your Journey with Elykid?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Your AI companion is already tuned into your vibe. All that's left is for you to say hey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-pulse-500 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
            Start Chatting Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-pulse-500 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
