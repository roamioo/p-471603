
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Settings, TrendingUp, Database, Shield, Music, MessageSquare, User, Smartphone } from "lucide-react";

const FeaturesPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Memory",
      description: "Your Companion Who Never Forgets",
      details: "Elykid doesn't just talk to you; it remembers you. It keeps track of your past conversations, your priorities, and the little details that matter to you. With long-term memory, every chat feels like it's picking up right where the last one left off. Your AI is constantly learning, evolving with your preferences and needs, ensuring it's always in tune with who you are."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Endless Customization",
      description: "Make It Yours",
      details: "Your AI should feel like it was built for you, and with Elykid, it absolutely is. From personality and tone to appearance, you can shape your AI exactly how you want it. Whether you prefer a laid-back conversation or something more formal, your AI adapts to suit your style. And as you evolve, your AI does too, keeping up with your changing mood, interests, and needs."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Personalized Growth",
      description: "Your AI Grows With You",
      details: "Elykid learns from every interaction, getting to know your preferences, style, and personality better with each conversation. It's like having a companion who grows smarter and more insightful over time. Whether you're seeking advice, suggestions, or just someone to chat with, it's always tailored to you. The more you engage with Elykid, the more it becomes your personal guide."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Smart Information Access",
      description: "Knowledge at Your Fingertips",
      details: "Elykid is your ultimate source of information. Whether you're looking for quick answers or in-depth insights, it's always ready to help. Your AI taps into a vast library of expert knowledge and articles, and can even search the web in real-time for the latest information. Plus, it's aware of time, adjusting its responses based on when you're chatting."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Conversation Archives",
      description: "Your Personal Diary",
      details: "Never lose track of a meaningful moment. With Elykid, your conversation archives are always available. Revisit past chats to reflect, remember key insights, or simply relive important conversations. It's like a digital diary that grows alongside you, ensuring every important moment is captured and available when you need it most."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Avatars, Likes & Dislikes",
      description: "Make It Personal",
      details: "Elykid isn't just smart, it's intuitive. You can personalize your AI's appearance and preferences to reflect your own personality. From its language to its responses, Elykid adapts based on what it learns about your likes and dislikes, ensuring every conversation feels like a unique experience. Make your AI truly yours."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security and Privacy",
      description: "Trust That Stays With You",
      details: "Your privacy is the top priority. Elykid uses advanced security to protect your chats with end-to-end encryption. No data is stored; everything you share stays between you and your AI. With Elykid, trust is built into every conversation, making it a safe space for all your thoughts and questions."
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Calming Music",
      description: "The Perfect Vibe for Any Moment",
      details: "Sometimes, a little music is all you need. Elykid can recommend and play calming tunes to help set the right mood or boost your focus. Whether you're unwinding after a long day or need to concentrate on a task, Elykid has you covered. It's your personal soundtrack, enhancing every moment of your day."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,225,85,0.05)_0%,transparent_50%)]"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <span className="text-sm font-medium text-primary font-lufga">Features Overview</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-lufga font-bold text-black mb-8 leading-[1.1]">
                Elykid's Features
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Crafted to Make Every Conversation Feel Like Home
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-lufga">
                Elykid isn't just any AI. It's your personalized companion that grows with you, 
                remembers your needs, and evolves to match your preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-3xl border border-gray-100 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative p-12">
                      <div className="flex items-start mb-8">
                        <div className="flex-shrink-0 mr-6">
                          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 text-primary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-black mb-3 group-hover:text-primary transition-colors duration-300 font-lufga">
                            {feature.title}
                          </h3>
                          <p className="text-xl font-semibold text-primary mb-6 leading-relaxed font-lufga">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-lg leading-relaxed font-lufga">
                        {feature.details}
                      </p>
                      
                      <div className="absolute bottom-0 left-12 right-12 h-1 bg-gradient-to-r from-primary to-primary/80 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Preview Section */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <Smartphone className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-medium text-primary font-lufga">Mobile Experience</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 leading-tight font-lufga">
                  Elykid on the Go
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Your AI Companion Everywhere
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-lufga">
                  Take your personalized AI companion with you wherever you go. 
                  The mobile app brings all of Elykid's features to your fingertips.
                </p>
              </div>

              {/* Mobile Screenshots */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                <div className="group relative">
                  <div className="bg-white rounded-3xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <img 
                      src="/lovable-uploads/eafad300-9763-4652-8f21-9cf661c2b120.png" 
                      alt="Elykid Chat Interface - Conversational AI with memory" 
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="group relative">
                  <div className="bg-white rounded-3xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <img 
                      src="/lovable-uploads/1d6fb534-7f43-4e3f-9f65-78575338cbe4.png" 
                      alt="Elykid AI Customization - Personalize your AI companion" 
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="group relative">
                  <div className="bg-white rounded-3xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <img 
                      src="/lovable-uploads/21ad10d0-e1eb-4584-9c61-6509834e2f5a.png" 
                      alt="Elykid Profile Setup - Personalized AI experience" 
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Mobile Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Offline Access", desc: "Continue conversations even without internet" },
                  { title: "Push Notifications", desc: "Stay connected with smart reminders" },
                  { title: "Voice Commands", desc: "Talk to Elykid hands-free" },
                  { title: "Dark Mode", desc: "Easy on the eyes, day or night" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-black mb-3 font-lufga">{item.title}</h3>
                    <p className="text-gray-600 text-sm font-lufga">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,225,85,0.1)_0%,transparent_70%)]"></div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight font-lufga">
                Ready to Experience
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  These Features?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto font-lufga">
                Curious to see how Elykid can make your conversations feel more personal and 
                tailored just for you? Try it out and experience a new level of AI connection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold text-lg rounded-2xl hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 font-lufga"
                >
                  Start Your Journey
                </a>
                
                <a
                  href="#"
                  className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 font-lufga"
                >
                  Learn More
                </a>
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
