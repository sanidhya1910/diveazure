'use client';

import { 
  Waves, Award, Users, MapPin, Phone, Mail, Calendar, Star, ArrowRight, 
  Anchor, Compass, Shield, Play, CheckCircle, Globe, Camera, 
  Clock, Target, Zap, TrendingUp 
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6,182,212,0.15), transparent 80%)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(6,182,212,0.05),transparent)] animate-spin [animation-duration:60s]"></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 -z-40 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Premium Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div className="backdrop-blur-xl bg-slate-900/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <Waves className="relative h-10 w-10 text-cyan-400 p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors" />
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-white">DIVE</span>
                  <span className="text-cyan-400">AZURE</span>
                </div>
              </Link>

              <div className="hidden lg:flex items-center space-x-8">
                {['Courses', 'Shop', 'Medical', 'Itinerary'].map((item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="relative text-gray-300 hover:text-white transition-colors duration-300 group py-2"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Link 
                  href="/login" 
                  className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
                >
                  Sign In
                </Link>
                <Link 
                  href="/register" 
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Diving
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Professional Diving School in Lakshadweep</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                <span className="block text-white mb-4">Dive Into</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Paradise
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the underwater world with professional PADI certifications in the pristine waters of Agatti Island, Lakshadweep.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link 
                href="/courses" 
                className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10 flex items-center">
                  View Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </Link>
              
              <button className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-white flex items-center justify-center group-hover:bg-white/5 transition-all">
                  <Play className="h-5 w-5 ml-0.5" />
                </div>
                <span className="font-medium">Watch Introduction</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {[
                { icon: <Award className="h-6 w-6" />, text: "PADI Certified" },
                { icon: <Shield className="h-6 w-6" />, text: "Safety First" },
                { icon: <Globe className="h-6 w-6" />, text: "International Standards" },
                { icon: <Users className="h-6 w-6" />, text: "Expert Instructors" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 text-center">
                  <div className="text-cyan-400">{item.icon}</div>
                  <span className="text-sm text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Card Design */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              World-Class <span className="text-cyan-400">Training</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the highest standards of diving education with our internationally certified programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "PADI Certification",
                description: "Official PADI courses from Open Water to Instructor level, recognized worldwide for professional diving standards.",
                color: "from-yellow-500/20 to-orange-500/20",
                border: "border-yellow-500/30",
                iconBg: "bg-yellow-500/10"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Expert Instructors",
                description: "Learn from experienced professionals with thousands of dives in tropical waters and advanced certifications.",
                color: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-500/30",
                iconBg: "bg-blue-500/10"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Safety Excellence",
                description: "Uncompromising safety standards with modern equipment, emergency protocols, and small group sizes.",
                color: "from-green-500/20 to-teal-500/20",
                border: "border-green-500/30",
                iconBg: "bg-green-500/10"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border ${feature.border} backdrop-blur-sm hover:scale-105 transition-all duration-500 cursor-pointer`}
                style={{
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                }}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Target className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Certification Courses</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Diving <span className="text-cyan-400">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From beginner to professional, we offer comprehensive PADI courses for every level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Open Water Diver",
                level: "Beginner",
                duration: "3-4 days",
                price: "₹25,000",
                description: "Your gateway to the underwater world. Learn fundamental diving skills and safety procedures.",
                highlights: ["18m depth certification", "Worldwide recognition", "Basic equipment training"],
                popular: false
              },
              {
                title: "Advanced Open Water",
                level: "Intermediate", 
                duration: "2-3 days",
                price: "₹20,000",
                description: "Expand your skills with specialty dives including deep diving and navigation.",
                highlights: ["30m depth certification", "5 adventure dives", "Enhanced skills"],
                popular: true
              },
              {
                title: "Rescue Diver",
                level: "Advanced",
                duration: "4-5 days", 
                price: "₹30,000",
                description: "Learn to prevent and manage diving emergencies and assist other divers.",
                highlights: ["Emergency response", "Leadership skills", "Problem solving"],
                popular: false
              }
            ].map((course, index) => (
              <div
                key={index}
                className={`relative group ${course.popular ? 'md:-mt-8' : ''}`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`relative p-8 rounded-3xl border backdrop-blur-sm group-hover:scale-105 transition-all duration-500 h-full ${
                  course.popular 
                    ? 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-gray-700/50 bg-slate-800/50 hover:border-gray-600/50'
                }`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : course.level === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}>
                      {course.level}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{course.price}</div>
                      <div className="text-sm text-gray-400">{course.duration}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/login"
                    className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                      course.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25'
                        : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    Login to Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diving Essentials Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
              <Anchor className="h-4 w-4 text-teal-400" />
              <span className="text-teal-300 text-sm font-medium">Professional Equipment</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Diving <span className="text-cyan-400">Essentials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional diving equipment and safety gear for your underwater adventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Diving Equipment", icon: <Anchor className="h-8 w-8" /> },
              { name: "Safety Gear", icon: <Shield className="h-8 w-8" /> },
              { name: "Navigation Tools", icon: <Compass className="h-8 w-8" /> },
              { name: "Underwater Exploration", icon: <Waves className="h-8 w-8" /> }
            ].map((item, index) => (
              <div key={index} className="group p-6 rounded-2xl border border-gray-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-cyan-400">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Certified Divers", icon: <Users className="h-6 w-6" /> },
              { number: "15+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
              { number: "98%", label: "Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "50+", label: "Dive Sites", icon: <MapPin className="h-6 w-6" /> }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="mb-4 text-cyan-400 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Phone className="h-4 w-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to <span className="text-cyan-400">Dive In?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Contact us to start your underwater adventure in the pristine waters of Lakshadweep.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: <MapPin className="h-6 w-6" />, 
                title: "Location", 
                content: "Agatti Island, Lakshadweep" 
              },
              { 
                icon: <Phone className="h-6 w-6" />, 
                title: "Call Us", 
                content: "+91 9876543210" 
              },
              { 
                icon: <Mail className="h-6 w-6" />, 
                title: "Email Us", 
                content: "info@diveazure.com" 
              }
            ].map((contact, index) => (
              <div key={index} className="group p-6 rounded-2xl border border-gray-700/50 bg-slate-800/30 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-cyan-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-gray-300">{contact.content}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link 
              href="/courses"
              className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all duration-300"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-slate-900/50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Waves className="h-8 w-8 text-cyan-400" />
                <div className="text-2xl font-bold">
                  <span className="text-white">DIVE</span>
                  <span className="text-cyan-400">AZURE</span>
                </div>
              </Link>
              <p className="text-gray-400 max-w-md mb-6">
                Professional diving school in Agatti Island, Lakshadweep. PADI certified courses from beginner to instructor level.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons can be added here */}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses" className="hover:text-cyan-400 transition-colors">Courses</Link></li>
                <li><Link href="/shop" className="hover:text-cyan-400 transition-colors">Shop</Link></li>
                <li><Link href="/medical" className="hover:text-cyan-400 transition-colors">Medical Forms</Link></li>
                <li><Link href="/itinerary" className="hover:text-cyan-400 transition-colors">Itinerary</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/login" className="hover:text-cyan-400 transition-colors">Login</Link></li>
                <li><Link href="/register" className="hover:text-cyan-400 transition-colors">Register</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dive Azure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
