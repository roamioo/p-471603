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
  return;
};
export default CTA;