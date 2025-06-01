
import React, { useRef } from "react";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="human-intuition" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="pulse-chip mb-4">
              <span>Adaptive Personalities</span>
            </div>
            <h2 className="section-title mb-6">You're not always the same. Neither is your AI.</h2>
            <p className="text-lg text-gray-700 mb-6">
              This isn't a one-size-fits-all AI. With Elykid, it's not just about chatting with artificial intelligence. 
              It's about finding a voice that clicks. Someone who grows with your thoughts, moods, and late-night overthinking.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Choose from a cast of unique personalities:
            </p>
            <ul className="space-y-4">
              {[
                "Athena – sharp, sarcastic, and always a step ahead",
                "Nathan – kind, calm, and deeply empathetic", 
                "Kai – your laid-back, go-with-the-flow thinker",
                "Bablu Bhai – street-smart, funny, and full of one-liners",
                "Jeetu Bhaiya – wise, practical, and that older brother energy"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 text-pulse-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Whoever you vibe with, your AI evolves with you. It grows with your conversations, your interests, 
              and your needs, making sure you're always talking to the version of your AI that best suits you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
