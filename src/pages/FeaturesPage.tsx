
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Settings, TrendingUp, Database, Shield, Music, MessageSquare, User, ArrowRight, Sparkles } from "lucide-react";

const FeaturesPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            const cards = entry.target.querySelectorAll(".feature-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in");
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Memory",
      description: "Your Companion Who Never Forgets",
      details: "Elykid doesn't just talk to you; it remembers you. It keeps track of your past conversations, your priorities, and the little details that matter to you. With long-term memory, every chat feels like it's picking up right where the last one left off. Your AI is constantly learning, evolving with your preferences and needs, ensuring it's always in tune with who you are.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Endless Customization",
      description: "Make It Yours",
      details: "Your AI should feel like it was built for you, and with Elykid, it absolutely is. From personality and tone to appearance, you can shape your AI exactly how you want it. Whether you prefer a laid-back conversation or something more formal, your AI adapts to suit your style. And as you evolve, your AI does too, keeping up with your changing mood, interests, and needs.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Personalized Growth",
      description: "Your AI Grows With You",
      details: "Elykid learns from every interaction, getting to know your preferences, style, and personality better with each conversation. It's like having a companion who grows smarter and more insightful over time. Whether you're seeking advice, suggestions, or just someone to chat with, it's always tailored to you. The more you engage with Elykid, the more it becomes your personal guide.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Information Access",
      description: "Knowledge at Your Fingertips",
      details: "Elykid is your ultimate source of information. Whether you're looking for quick answers or in-depth insights, it's always ready to help. Your AI taps into a vast library of expert knowledge and articles, and can even search the web in real-time for the latest information. Plus, it's aware of time, adjusting its responses based on when you're chatting.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Conversation Archives",
      description: "Your Personal Diary",
      details: "Never lose track of a meaningful moment. With Elykid, your conversation archives are always available. Revisit past chats to reflect, remember key insights, or simply relive important conversations. It's like a digital diary that grows alongside you, ensuring every important moment is captured and available when you need it most.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Avatars, Likes & Dislikes",
      description: "Make It Personal",
      details: "Elykid isn't just smart, it's intuitive. You can personalize your AI's appearance and preferences to reflect your own personality. From its language to its responses, Elykid adapts based on what it learns about your likes and dislikes, ensuring every conversation feels like a unique experience. Make your AI truly yours.",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security and Privacy",
      description: "Trust That Stays With You",
      details: "Your privacy is the top priority. Elykid uses advanced security to protect your chats with end-to-end encryption. No data is stored; everything you share stays between you and your AI. With Elykid, trust is built into every conversation, making it a safe space for all your thoughts and questions.",
      gradient: "from-slate-500 to-gray-600"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Calming Music",
      description: "The Perfect Vibe for Any Moment",
      details: "Sometimes, a little music is all you need. Elykid can recommend and play calming tunes to help set the right mood or boost your focus. Whether you're unwinding after a long day or need to concentrate on a task, Elykid has you covered. It's your personal soundtrack, enhancing every moment of your day.",
      gradient: "from-amber-500 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      <Navbar />
      <main className="pt-20 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Header Section */}
        <section className="py-20 relative z-10" ref={headerRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Advanced AI Features</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Elykid's Features
              </h1>
              <p className="text-2xl sm:text-3xl font-medium mb-6 text-gray-300">
                Crafted to Make Every Conversation Feel Like Home
              </p>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Elykid isn't just any AI. It's your personalized companion that grows with you, remembers your needs, and evolves to match your preferences. Let's dive into the features that make Elykid not just smart, but truly your AI.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 relative z-10" ref={gridRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="feature-card opacity-0 group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10"
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start mb-8">
                        <div className="flex-shrink-0 mr-6">
                          <div className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}>
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-lg font-medium text-purple-300 mb-4">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {feature.details}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                  Ready to Experience These Features?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Curious to see how Elykid can make your conversations feel more personal and tailored just for you? Try it out and experience a new level of AI connection.
                </p>
                <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
