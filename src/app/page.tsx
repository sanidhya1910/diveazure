import { Waves, Award, Users, MapPin, Phone, Mail, Calendar, Star, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 -z-20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/20 to-slate-900 -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-400/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Waves className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Dive Azure
              </span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/courses" className="text-white/80 hover:text-cyan-400 transition-all duration-300 relative group">
                <span>Courses</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/medical" className="text-white/80 hover:text-cyan-400 transition-all duration-300 relative group">
                <span>Medical Forms</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/itinerary" className="text-white/80 hover:text-cyan-400 transition-all duration-300 relative group">
                <span>Itinerary</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/login" className="text-white/80 hover:text-cyan-400 transition-all duration-300 relative group">
                <span>Login</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/register" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Professional PADI Certified Diving School</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 animate-slide-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent">
              Dive
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Azure
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-6 text-white/90 animate-slide-up delay-200">
            Professional Diving School in Paradise
          </p>
          
          <div className="flex items-center justify-center mb-12 animate-slide-up delay-300">
            <MapPin className="h-6 w-6 mr-3 text-cyan-400" />
            <span className="text-xl text-white/80">Agatti Island, Lakshadweep</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-500">
            <Link href="/courses" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="#contact" className="group px-8 py-4 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25">
              <span className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-float delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-teal-400 rounded-full animate-float delay-700"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>      {/* Features Section */}      <section className="py-20 bg-black/30 backdrop-blur-sm">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Dive Azure?</h2>            <p className="text-xl text-white/80">Experience the best diving education in pristine waters</p>          </div>          <div className="grid md:grid-cols-3 gap-8">            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-colors">              <Award className="h-12 w-12 text-cyan-400 mx-auto mb-4" />              <h3 className="text-xl font-semibold mb-3 text-white">PADI Certified</h3>              <p className="text-white/80">Professional Association of Diving Instructors certified courses and instructors</p>            </div>            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-colors">              <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />              <h3 className="text-xl font-semibold mb-3 text-white">Expert Instructors</h3>              <p className="text-white/80">Experienced and passionate dive masters dedicated to your safety and learning</p>            </div>            <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-colors">              <Waves className="h-12 w-12 text-cyan-400 mx-auto mb-4" />              <h3 className="text-xl font-semibold mb-3 text-white">Pristine Waters</h3>              <p className="text-white/80">Crystal clear waters of Lakshadweep with incredible marine biodiversity</p>            </div>          </div>        </div>      </section>      {/* Courses Preview */}      <section id="courses" className="py-20">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <h2 className="text-4xl font-bold mb-4 text-white">Our Courses</h2>            <p className="text-xl text-white/80">From beginner to advanced diving certifications</p>          </div>          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">            {[              {                title: "Open Water Diver",                description: "Your first step into the underwater world",                duration: "3-4 days",                price: "₹25,000"              },              {                title: "Advanced Open Water",                description: "Enhance your skills with specialty dives",                duration: "2-3 days",                price: "₹20,000"              },              {                title: "Rescue Diver",                description: "Learn to handle diving emergencies",                duration: "3-4 days",                price: "₹30,000"              }            ].map((course, index) => (              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-colors">                <h3 className="text-xl font-semibold mb-3 text-white">{course.title}</h3>                <p className="text-white/80 mb-4">{course.description}</p>                <div className="flex justify-between items-center mb-4">                  <span className="text-cyan-400 font-semibold">{course.duration}</span>                  <span className="text-2xl font-bold text-white">{course.price}</span>                </div>                <Link href="/courses" className="block text-center bg-cyan-600 hover:bg-cyan-700 py-2 rounded-lg transition-colors">                  Learn More                </Link>              </div>            ))}          </div>        </div>      </section>      {/* Contact Section */}      <section id="contact" className="py-20 bg-black/30 backdrop-blur-sm">        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="text-center mb-16">            <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>            <p className="text-xl text-white/80">Ready to start your diving adventure?</p>          </div>          <div className="grid md:grid-cols-2 gap-8">            <div className="space-y-6">              <div className="flex items-center space-x-4">                <MapPin className="h-6 w-6 text-cyan-400 flex-shrink-0" />                <div>                  <h3 className="font-semibold text-white">Location</h3>                  <p className="text-white/80">Agatti Island, Lakshadweep</p>                </div>              </div>              <div className="flex items-center space-x-4">                <Phone className="h-6 w-6 text-cyan-400 flex-shrink-0" />                <div>                  <h3 className="font-semibold text-white">Phone</h3>                  <p className="text-white/80">+91 98765 43210</p>                </div>              </div>              <div className="flex items-center space-x-4">                <Mail className="h-6 w-6 text-cyan-400 flex-shrink-0" />                <div>                  <h3 className="font-semibold text-white">Email</h3>                  <p className="text-white/80">info@diveazure.com</p>                </div>              </div>            </div>            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">              <h3 className="text-xl font-semibold mb-4 text-white">Quick Contact</h3>              <form className="space-y-4">                <input                  type="text"                  placeholder="Your Name"                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"                />                <input                  type="email"                  placeholder="Your Email"                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"                />                <textarea                  placeholder="Your Message"                  rows={4}                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"                ></textarea>                <button                  type="submit"                  className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-colors"                >                  Send Message                </button>              </form>            </div>          </div>        </div>      </section>      {/* Footer */}      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="flex flex-col md:flex-row justify-between items-center">            <div className="flex items-center space-x-2 mb-4 md:mb-0">              <Waves className="h-6 w-6 text-cyan-400" />              <span className="text-lg font-semibold text-white">Dive Azure</span>            </div>            <p className="text-white/60 text-center md:text-right">              © 2025 Dive Azure. Exploring the depths of Lakshadweep.            </p>          </div>        </div>      </footer>    </div>  );}