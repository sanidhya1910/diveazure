'use client';

import { 
  Waves, Clock, Star, ArrowLeft, Award, Users, Shield, CheckCircle, 
  Target, Zap, Globe, Calendar, Phone, Mail, MapPin
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const courses = [
  {
    id: 1,
    title: "Open Water Diver",
    level: "Beginner",
    duration: "3-4 days",
    price: "₹25,000",
    description: "Your first step into the underwater world. This course teaches you the basic skills and knowledge to dive safely with a buddy to a maximum depth of 18 meters.",
    includes: [
      "PADI Open Water Diver certification",
      "All equipment during training", 
      "Digital learning materials",
      "4 open water training dives",
      "Instructor guidance and support"
    ],
    prerequisites: "Minimum age 10 years, basic swimming ability",
    popular: false,
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
    iconBg: "bg-green-500/10"
  },
  {
    id: 2,
    title: "Advanced Open Water Diver",
    level: "Intermediate",
    duration: "2-3 days", 
    price: "₹20,000",
    description: "Enhance your diving skills with 5 adventure dives including deep diving and underwater navigation. Perfect for expanding your diving experiences.",
    includes: [
      "PADI Advanced Open Water certification",
      "5 adventure dives",
      "Equipment for all dives",
      "Specialty dive experiences",
      "Advanced techniques training"
    ],
    prerequisites: "PADI Open Water Diver certification or equivalent",
    popular: true,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/10"
  },
  {
    id: 3,
    title: "Rescue Diver",
    level: "Advanced",
    duration: "3-4 days",
    price: "₹30,000", 
    description: "Learn to prevent and manage diving emergencies. This challenging course builds your confidence and makes you a better dive buddy.",
    includes: [
      "PADI Rescue Diver certification",
      "Emergency response training",
      "First aid and CPR certification", 
      "Scenario-based training",
      "Professional rescue techniques"
    ],
    prerequisites: "PADI Advanced Open Water Diver and EFR certification",
    popular: false,
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    iconBg: "bg-orange-500/10"
  },
  {
    id: 4,
    title: "Divemaster",
    level: "Professional",
    duration: "2-3 weeks",
    price: "₹85,000",
    description: "Your first step into professional diving. Learn to guide certified divers and assist with training programs.",
    includes: [
      "PADI Divemaster certification",
      "Professional development",
      "Dive theory and practical skills",
      "Leadership training", 
      "Business aspects of diving"
    ],
    prerequisites: "PADI Rescue Diver, 40 logged dives, EFR certification",
    popular: false,
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/30", 
    iconBg: "bg-purple-500/10"
  }
];

export default function Courses() {
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
        {[...Array(15)].map((_, i) => (
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
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Courses', href: '/courses', active: true },
                  { name: 'Shop', href: '/shop' },
                  { name: 'Medical', href: '/medical' },
                  { name: 'Itinerary', href: '/itinerary' }
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative py-2 transition-colors duration-300 group ${
                      item.active ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                      item.active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
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
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 group transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Target className="h-4 w-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">PADI Certified Training</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Diving </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Master the art of diving with our comprehensive PADI certified courses. From your first underwater breath to professional instructor level.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { number: "15+", label: "Years Teaching", icon: <Award className="h-5 w-5" /> },
              { number: "500+", label: "Certified Divers", icon: <Users className="h-5 w-5" /> },
              { number: "98%", label: "Success Rate", icon: <Star className="h-5 w-5" /> },
              { number: "4", label: "Course Levels", icon: <Target className="h-5 w-5" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-cyan-400 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`relative group ${course.popular ? 'lg:-mt-8' : ''}`}
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`relative p-8 rounded-3xl border backdrop-blur-sm group-hover:scale-105 transition-all duration-500 h-full ${
                    course.popular 
                      ? 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                      : `${course.border} bg-gradient-to-br ${course.color}`
                  }`}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {course.title}
                      </h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Beginner' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : course.level === 'Intermediate'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : course.level === 'Advanced'
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}>
                        {course.level}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white mb-1">{course.price}</div>
                      <div className="text-gray-400 flex items-center justify-end">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Includes */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mr-2" />
                      Course Includes:
                    </h4>
                    <ul className="space-y-3">
                      {course.includes.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <Star className="h-4 w-4 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prerequisites */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                      <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                      Prerequisites:
                    </h4>
                    <p className="text-gray-300">{course.prerequisites}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Link
                      href="/login"
                      className={`flex-1 text-center py-4 rounded-xl font-semibold transition-all duration-300 ${
                        course.popular
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg hover:shadow-cyan-500/25'
                          : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500'
                      }`}
                    >
                      Login to Enroll
                    </Link>
                    <button className="flex-1 border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 py-4 rounded-xl font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Phone className="h-4 w-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Ready to Start?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Begin Your <span className="text-cyan-400">Diving Journey</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Contact us to discuss which course is right for you, or get started with your medical forms and booking.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: <MapPin className="h-6 w-6" />, 
                title: "Visit Our Center", 
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
                content: "courses@diveazure.com" 
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
              href="/medical"
              className="border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800/50 transition-all duration-300"
            >
              Medical Forms
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
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
                <li><Link href="/courses" className="hover:text-cyan-400 transition-colors">Courses</Link></li>
                <li><Link href="/shop" className="hover:text-cyan-400 transition-colors">Shop</Link></li>
                <li><Link href="/medical" className="hover:text-cyan-400 transition-colors">Medical Forms</Link></li>
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
