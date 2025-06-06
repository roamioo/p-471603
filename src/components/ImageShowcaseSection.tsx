import React from "react";
const ImageShowcaseSection = () => {
  return <section className="w-full pt-16 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience the Future Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Elykid is your personal AI companion that understands you, learns from you, 
            and grows with you. Built to think with you, not for you.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img alt="Elykid AI Companion - Your personal intelligent assistant" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1713345248737-2698000f143d?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Your Personal AI Companion</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Elykid is designed to be more than just an assistant - it's your thinking partner. 
              Whether you need advice, want to brainstorm ideas, or just need someone to talk to, 
              Elykid adapts to your personality and conversation style for truly personalized interactions.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ImageShowcaseSection;