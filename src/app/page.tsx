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
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/30 to-cyan-900/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_50%_at_50%_100%,rgba(6,182,212,0.3),transparent)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/30 to-blue-600/30 backdrop-blur-xl border-2 border-cyan-400/40 rounded-full px-8 py-4 mb-8 shadow-2xl shadow-cyan-500/30 glow-border">
              <Star className="h-6 w-6 text-cyan-300 mr-3 animate-pulse" />
              <span className="text-cyan-200 text-lg font-black tracking-wide">WHY CHOOSE DIVE AZURE</span>
              <Star className="h-6 w-6 text-cyan-300 ml-3 animate-pulse" />
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Dive Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent text-shimmer">
                Excellence
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 font-semibold max-w-4xl mx-auto leading-relaxed">
              Experience world-class diving education in the pristine waters of Lakshadweep
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group relative fade-in-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:-translate-y-2 card-3d">
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">PADI Certified</h3>
                <p className="text-white/70 leading-relaxed">
                  Professional Association of Diving Instructors certified courses and instructors ensuring world-class training standards
                </p>
              </div>
            </div>
            
            <div className="group relative fade-in-up [animation-delay:0.2s]">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:-translate-y-2 card-3d">
                <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Expert Instructors</h3>
                <p className="text-white/70 leading-relaxed">
                  Experienced and passionate dive masters dedicated to your safety, learning, and underwater exploration
                </p>
              </div>
            </div>
            
            <div className="group relative fade-in-up [animation-delay:0.4s]">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:-translate-y-2 card-3d">
                <div className="bg-gradient-to-br from-cyan-400/20 to-teal-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Waves className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Pristine Waters</h3>
                <p className="text-white/70 leading-relaxed">
                  Crystal clear waters of Lakshadweep with incredible marine biodiversity and perfect diving conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-cyan-400/40 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 right-1/6 w-6 h-6 bg-blue-400/30 rounded-full animate-float [animation-delay:1s]"></div>
          <div className="absolute top-2/3 left-1/4 w-3 h-3 bg-teal-400/50 rounded-full animate-float [animation-delay:2s]"></div>
        </div>
      </section>

      {/* Courses Preview */}
      <section id="courses" className="py-32 bg-black/20 backdrop-blur-sm relative overflow-hidden">
        {/* Section Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(6,182,212,0.2)_60deg,transparent_120deg,rgba(59,130,246,0.2)_180deg,transparent_240deg,rgba(20,184,166,0.2)_300deg,transparent_360deg)] animate-spin [animation-duration:40s]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/30 to-cyan-600/30 backdrop-blur-xl border-2 border-blue-400/40 rounded-full px-8 py-4 mb-8 shadow-2xl shadow-blue-500/30 glow-border">
              <Award className="h-6 w-6 text-blue-300 mr-3 animate-pulse" />
              <span className="text-blue-200 text-lg font-black tracking-wide">PROFESSIONAL TRAINING PROGRAMS</span>
              <Award className="h-6 w-6 text-blue-300 ml-3 animate-pulse" />
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Diving
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent text-shimmer">
                Courses
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/80 font-semibold max-w-4xl mx-auto leading-relaxed">
              From beginner to advanced diving certifications - your underwater journey starts here
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Open Water Diver",
                description: "Your first step into the underwater world with comprehensive training",
                duration: "3-4 days",
                price: "₹25,000",
                level: "Beginner",
                gradient: "from-green-400 to-cyan-500",
                delay: ""
              },
              {
                title: "Advanced Open Water",
                description: "Enhance your skills with specialty dives and advanced techniques",
                duration: "2-3 days",
                price: "₹20,000",
                level: "Intermediate",
                gradient: "from-blue-400 to-cyan-500",
                delay: "[animation-delay:0.2s]"
              },
              {
                title: "Rescue Diver",
                description: "Learn to handle diving emergencies and become a confident diver",
                duration: "3-4 days",
                price: "₹30,000",
                level: "Advanced",
                gradient: "from-cyan-400 to-teal-500",
                delay: "[animation-delay:0.4s]"
              }
            ].map((course, index) => (
              <div key={index} className={`group relative transform transition-all duration-700 hover:scale-105 card-3d fade-in-up ${course.delay}`}>
                <div className={`absolute -inset-2 bg-gradient-to-r ${course.gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-300 animate-pulse pulse-epic`}></div>
                <div className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 group-hover:border-cyan-400/60 transition-all duration-500 transform group-hover:-translate-y-3 shadow-2xl shadow-black/50 group-hover:shadow-cyan-500/30">
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-black bg-gradient-to-r ${course.gradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {course.level}
                    </span>
                    <div className="text-right">
                      <div className="text-3xl font-black text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors duration-300">{course.price}</div>
                      <div className="text-white/60 text-sm font-semibold">{course.duration}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-black mb-6 text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-white/70 mb-8 leading-relaxed text-lg group-hover:text-white/90 transition-colors duration-300">
                    {course.description}
                  </p>
                  
                  <Link href="/courses" className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-4 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 btn-epic">
                    <span>🏊‍♂️ LEARN MORE</span>
                    <ArrowRight className="ml-3 h-6 w-6 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
                {/* Floating decorative element */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-400/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 fade-in-up [animation-delay:0.6s]">
            <Link href="/courses" className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-400/60 border-2 border-cyan-400/50 glow-border btn-epic">
              <span>🌊 VIEW ALL COURSES</span>
              <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-2 mb-6">
              <Calendar className="h-4 w-4 text-teal-400 mr-2" />
              <span className="text-teal-300 text-sm font-medium">Diving Experiences</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Featured 
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"> Itineraries</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Carefully crafted diving adventures that combine training, exploration, and unforgettable experiences
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Open Water Certification Package",
                duration: "4 Days / 3 Nights",
                price: "₹35,000",
                description: "Complete your PADI Open Water certification with accommodation, meals, and guided dives in crystal-clear waters.",
                highlights: ["PADI Open Water certification", "3 nights accommodation", "All meals included", "Equipment rental", "4 training dives"],
                gradient: "from-emerald-500 to-cyan-500"
              },
              {
                title: "Lakshadweep Discovery Tour",
                duration: "7 Days / 6 Nights",
                price: "₹65,000",
                description: "Explore multiple islands with diving, cultural experiences, and adventure activities across the pristine archipelago.",
                highlights: ["Visit 3 islands", "10+ guided dives", "Cultural experiences", "Island hopping", "Marine life encounters"],
                gradient: "from-blue-500 to-teal-500"
              }
            ].map((itinerary, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${itinerary.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {itinerary.title}
                      </h3>
                      <div className="flex items-center text-white/60">
                        <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                        {itinerary.duration}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-cyan-400">{itinerary.price}</div>
                      <div className="text-white/60 text-sm">per person</div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {itinerary.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {itinerary.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-white/70">
                          <Star className="h-4 w-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/itinerary" className="group/btn inline-flex items-center justify-center w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    <span>View Details</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/itinerary" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25">
              <span>Explore All Itineraries</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black/20 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Mail className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-300 text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Start Your 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Adventure</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to explore the underwater paradise? Get in touch with our team for bookings and inquiries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Location</h4>
                        <p className="text-white/70">Agatti Island, Lakshadweep, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                        <p className="text-white/70">+91 98765 43210</p>
                        <p className="text-white/50 text-sm">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <p className="text-white/70">info@diveazure.com</p>
                        <p className="text-white/50 text-sm">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-4 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-xl border-t border-cyan-400/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <Waves className="h-10 w-10 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <span className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Dive Azure
                </span>
              </Link>
              <p className="text-white/70 max-w-md leading-relaxed mb-6">
                Professional diving school in the pristine waters of Lakshadweep, offering world-class PADI certified courses and unforgettable underwater experiences.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-cyan-600/20 hover:bg-cyan-600/40 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-cyan-400 text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-cyan-600/20 hover:bg-cyan-600/40 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-cyan-400 text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-cyan-600/20 hover:bg-cyan-600/40 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110">
                  <span className="text-cyan-400 text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/courses" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Courses</Link></li>
                <li><Link href="/itinerary" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Itinerary</Link></li>
                <li><Link href="/medical" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Medical Forms</Link></li>
                <li><Link href="/dashboard" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Contact Us</Link></li>
                <li><Link href="/faq" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">FAQ</Link></li>
                <li><Link href="/terms" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-center md:text-left mb-4 md:mb-0">
                © 2025 Dive Azure. All rights reserved. Exploring the depths of Lakshadweep.
              </p>
              <p className="text-white/50 text-sm">
                PADI Certified • Licensed Tour Operator • Emergency Certified
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}