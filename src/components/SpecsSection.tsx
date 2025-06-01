
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>About Elykid</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Say What You Want. It's Between You and Your AI. At Elykid, we get how important privacy is. Your conversations are protected with end-to-end encryption. We don't store your data or use it for anything else. This is your space. No judgments. No breaches. Just you and your companion.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
