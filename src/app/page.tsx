import { Waves, Award, Users, MapPin, Phone, Mail, Calendar, Star, ArrowRight, Fish, Anchor, Compass } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Ocean Background - Subtle and Professional */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 -z-50"></div>
      
      {/* Gentle underwater effect */}
      <div className="fixed inset-0 -z-40 opacity-30">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(6,182,212,0.1),transparent)] animate-spin [animation-duration:60s]"></div>
      </div>
      
      {/* Floating bubbles */}
      <div className="fixed inset-0 -z-30">
        <div className="bubble absolute top-3/4 left-1/4 w-2 h-2" style={{animationDelay: '0s'}}></div>
        <div className="bubble absolute top-2/3 left-3/4 w-3 h-3" style={{animationDelay: '2s'}}></div>
        <div className="bubble absolute top-1/2 left-1/3 w-1 h-1" style={{animationDelay: '4s'}}></div>
        <div className="bubble absolute top-4/5 right-1/4 w-2 h-2" style={{animationDelay: '1s'}}></div>
        <div className="bubble absolute top-1/3 right-1/3 w-1 h-1" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Professional Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <Waves className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span className="text-xl font-bold text-white">DIVE AZURE</span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/courses" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Courses</Link>
              <Link href="/medical" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Medical</Link>
              <Link href="/itinerary" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Itinerary</Link>
              <Link href="/login" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Login</Link>
              <Link href="/register" className="bg-cyan-600 hover:bg-cyan-500 px-6 py-2 rounded-lg font-medium transition-colors">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Ocean Inspired */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Subtle wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent wave-border"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
              <Anchor className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">PADI Certified Diving Center</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Discover the Deep</span>
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Blue of Lakshadweep
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional diving courses in the pristine waters of Agatti Island. 
            From beginner to advanced certifications with experienced instructors.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-slate-800/30 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/20">
              <MapPin className="h-5 w-5 mr-2 text-cyan-400" />
              <span className="text-gray-300">Agatti Island, Lakshadweep</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-cyan-600 hover:bg-cyan-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact" className="border border-cyan-500 hover:bg-cyan-500/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Floating marine elements */}
        <div className="absolute bottom-20 left-10 animate-float opacity-20">
          <Fish className="h-8 w-8 text-cyan-400" />
        </div>
        <div className="absolute top-1/3 right-16 animate-float opacity-20" style={{animationDelay: '2s'}}>
          <Compass className="h-6 w-6 text-blue-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose <span className="text-cyan-400">Dive Azure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience world-class diving education and adventures in one of the most pristine marine environments on Earth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 text-center group hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-600/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-600/20 transition-colors">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">PADI Certified</h3>
              <p className="text-gray-300 leading-relaxed">
                Internationally recognized certifications with experienced PADI instructors ensuring the highest safety standards
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 text-center group hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-600/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-600/20 transition-colors">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Expert Instructors</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn from certified professionals with years of experience in the pristine waters of Lakshadweep
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-500/20 text-center group hover:border-cyan-400/50 transition-colors">
              <div className="bg-cyan-600/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-600/20 transition-colors">
                <Waves className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Pristine Waters</h3>
              <p className="text-gray-300 leading-relaxed">
                Crystal clear waters with incredible marine biodiversity and perfect diving conditions year-round
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our <span className="text-cyan-400">Courses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From beginner to advanced diving certifications - your underwater journey starts here
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Open Water Diver",
                description: "Your first step into the underwater world with comprehensive training",
                duration: "3-4 days",
                price: "₹25,000",
                level: "Beginner"
              },
              {
                title: "Advanced Open Water",
                description: "Enhance your skills with specialty dives and advanced techniques",
                duration: "2-3 days",
                price: "₹20,000",
                level: "Intermediate"
              },
              {
                title: "Rescue Diver",
                description: "Learn to handle diving emergencies and become a confident diver",
                duration: "3-4 days",
                price: "₹30,000",
                level: "Advanced"
              }
            ].map((course, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-cyan-600/20 text-cyan-300 border border-cyan-500/30">
                    {course.level}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{course.price}</div>
                    <div className="text-gray-400 text-sm">{course.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <Link href="/courses" className="inline-flex items-center justify-center w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-lg font-semibold transition-colors group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Start Your <span className="text-cyan-400">Adventure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to explore the underwater paradise? Get in touch with our team for bookings and inquiries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-600/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-300">Agatti Island, Lakshadweep, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-600/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-600/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-300">info@diveazure.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-500/20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Waves className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">Dive Azure</span>
              </Link>
              <p className="text-gray-300 max-w-md leading-relaxed mb-4">
                Professional diving school in the pristine waters of Lakshadweep, offering world-class PADI certified courses.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/courses" className="text-gray-300 hover:text-cyan-400 transition-colors">Courses</Link></li>
                <li><Link href="/itinerary" className="text-gray-300 hover:text-cyan-400 transition-colors">Itinerary</Link></li>
                <li><Link href="/medical" className="text-gray-300 hover:text-cyan-400 transition-colors">Medical Forms</Link></li>
                <li><Link href="/dashboard" className="text-gray-300 hover:text-cyan-400 transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-cyan-400 transition-colors">FAQ</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                © 2025 Dive Azure. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                PADI Certified • Licensed Tour Operator
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
