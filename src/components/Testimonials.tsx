
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Elykid feels like having a conversation with a really smart friend who actually gets me. It remembers our past chats and builds on them naturally.",
  author: "Shantanu",
  role: "Beta Tester, Software Engineer",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "I've tried many AI assistants, but Elykid is different. It doesn't just give me answers - it helps me think through problems and discover solutions myself.",
  author: "Nikhil",
  role: "Beta Tester, Product Manager",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "The way Elykid adapts to my communication style is incredible. It's like it learns how I think and responds in a way that just clicks with me.",
  author: "Jay",
  role: "Beta Tester, Designer",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Elykid has become my go-to thinking partner. Whether I'm working through complex decisions or just need to bounce ideas around, it's always there with thoughtful insights.",
  author: "Manas",
  role: "Beta Tester, Entrepreneur",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}, {
  content: "What I love about Elykid is how it doesn't try to replace my thinking - it enhances it. It's like having a brilliant collaborator who's available 24/7.",
  author: "Ravi",
  role: "Beta Tester, Research Analyst",
  gradient: "from-green-600 via-blue-500 to-purple-600",
  backgroundImage: "/background-section2.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
      backgroundImage: `url('${backgroundImage}')`
    }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-white mr-2">04</span>
            <span>Beta Feedback</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">What beta users say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              gradient={testimonial.gradient} 
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
