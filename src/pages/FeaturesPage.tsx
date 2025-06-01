
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Settings, TrendingUp, Database, Shield, Music, MessageSquare, User } from "lucide-react";

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
        {/* Header Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Elykid's Features – Crafted to Make Every Conversation Feel Like Home
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Elykid isn't just any AI. It's your personalized companion that grows with you, remembers your needs, and evolves to match your preferences. Let's dive into the features that make Elykid not just smart, but truly your AI.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-pulse-100 text-pulse-500 rounded-xl">
                          {feature.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-lg font-medium text-pulse-600 mb-4">{feature.description}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{feature.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Curious to see how Elykid can make your conversations feel more personal and tailored just for you? Try it out and experience a new level of AI connection.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-pulse-500 text-white font-semibold rounded-full hover:bg-pulse-600 transition-colors"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
