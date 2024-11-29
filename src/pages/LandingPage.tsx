import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Book, Brain, Heart, Star, Users, 
  Smile, BookOpen, Clock, CheckCircle, TrendingUp,
  PenTool, Wand2, GamepadIcon, Bot
} from 'lucide-react';
import MainNavbar from '../components/layout/MainNavbar';
import MainFooter from '../components/layout/MainFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6F7FF] via-[#F5E6FF] to-white">
      <MainNavbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Floating Elements Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -20,
                rotate: 0,
                opacity: 0.8
              }}
              animate={{
                y: window.innerHeight + 20,
                x: `+=${Math.sin(i) * 100}`,
                rotate: 360,
                opacity: 0
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="pink"
                className="w-full h-full opacity-60"
              >
                <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 7 12 8 12s8-7.58 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Transforming Education with Kokoro Quest
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              See How Kokoro Quest Empowers Students and Enhances Learning Outcomes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 rounded-xl
                  bg-gradient-to-r from-[#6EE7B7] via-[#9333EA] to-[#EC4899]
                  text-white font-semibold shadow-lg hover:shadow-xl 
                  transform hover:scale-105 transition-all duration-200"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Journey
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-xl
                  bg-white text-[#9333EA] font-semibold shadow-md
                  hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Book className="w-5 h-5 mr-2" />
                See Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Journey Flow Section - Game Map Style */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&h=1080&auto=format&fit=crop&q=80')] 
          opacity-10 bg-cover bg-center" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Your Learning Adventure
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: PenTool,
                title: "Journal Your Story",
                description: "Express your thoughts and feelings through guided journaling",
                color: "from-[#6EE7B7] to-[#3B82F6]"
              },
              {
                icon: Wand2,
                title: "AI Manga Creation",
                description: "Watch your journal transform into beautiful manga panels",
                color: "from-[#9333EA] to-[#EC4899]"
              },
              {
                icon: GamepadIcon,
                title: "Play & Learn",
                description: "Engage with AR games and interactive activities",
                color: "from-[#F59E0B] to-[#EF4444]"
              },
              {
                icon: Bot,
                title: "AI Companion",
                description: "Get personalized guidance and support",
                color: "from-[#6366F1] to-[#8B5CF6]"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg
                  border-2 border-[#E5E7EB] hover:border-[#9333EA] transition-colors">
                  <div className={`p-3 bg-gradient-to-br ${step.color} 
                    rounded-xl w-fit mb-4`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8">
                    <ArrowRight className="w-8 h-8 text-[#9333EA]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* User Groups Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Student Engagement",
                icon: Smile,
                features: [
                  "Daily mood check-in with AI companion",
                  "Personalized SEL activities",
                  "Interactive journaling and manga creation"
                ],
                color: "from-[#6EE7B7] to-[#3B82F6]"
              },
              {
                title: "Teacher Involvement",
                icon: BookOpen,
                features: [
                  "Real-time analytics dashboard",
                  "Progress monitoring tools",
                  "Customizable content alignment"
                ],
                color: "from-[#9333EA] to-[#EC4899]"
              },
              {
                title: "Parent Participation",
                icon: Heart,
                features: [
                  "Regular progress updates",
                  "Access to child's manga stories",
                  "Collaborative home activities"
                ],
                color: "from-[#F59E0B] to-[#EF4444]"
              }
            ].map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg
                  border-2 border-[#E5E7EB] hover:border-[#9333EA] transition-colors"
              >
                <div className={`p-3 bg-gradient-to-br ${group.color} rounded-xl w-fit mb-4`}>
                  <group.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#6EE7B7]" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Results Section */}
      <div className="py-16 bg-gradient-to-b from-[#F5E6FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Research-Backed Results
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                stat: "11%",
                title: "Academic Achievement",
                description: "Gain in academic performance through SEL integration",
                color: "from-[#6EE7B7] to-[#3B82F6]"
              },
              {
                icon: Brain,
                stat: "45%",
                title: "Emotional Regulation",
                description: "Reduction in anxiety symptoms with CBT techniques",
                color: "from-[#9333EA] to-[#EC4899]"
              },
              {
                icon: Star,
                stat: "87%",
                title: "Student Engagement",
                description: "Increase in classroom participation and motivation",
                color: "from-[#F59E0B] to-[#EF4444]"
              }
            ].map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg
                  border-2 border-[#E5E7EB] hover:border-[#9333EA] transition-colors
                  text-center"
              >
                <div className={`p-3 bg-gradient-to-br ${result.color} 
                  rounded-xl w-fit mx-auto mb-4`}>
                  <result.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {result.stat}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {result.title}
                </h3>
                <p className="text-gray-600">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-[#6EE7B7] via-[#9333EA] to-[#EC4899]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Transform Learning?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#E6F7FF] mb-8"
          >
            Join thousands of students on their journey of emotional discovery
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 rounded-xl
                bg-white text-[#9333EA] font-semibold shadow-lg
                hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Started Free
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl
                bg-[#7C3AED] text-white font-semibold shadow-lg
                hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <Book className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}