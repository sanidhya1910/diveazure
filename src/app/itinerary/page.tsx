import { Waves, ArrowLeft, Calendar, Clock, MapPin, Users, Star, Camera, Fish } from 'lucide-react';
import Link from 'next/link';

const itineraries = [
  {
    id: 1,
    title: "Open Water Certification Package",
    duration: "4 Days / 3 Nights",
    price: "₹35,000",
    rating: 4.9,
    participants: "Max 4 students",
    description: "Complete your PADI Open Water certification in the crystal-clear waters of Agatti Island.",
    highlights: [
      "PADI Open Water Diver certification",
      "4 training dives with instructor",
      "3 nights accommodation",
      "All meals included",
      "Equipment rental included",
      "Digital course materials"
    ],
    schedule: [
      {
        day: "Day 1",
        title: "Arrival & Theory",
        activities: [
          "Airport pickup from Agatti Airport",
          "Check-in and welcome briefing",
          "PADI theory sessions",
          "Equipment familiarization",
          "Pool/confined water session 1"
        ]
      },
      {
        day: "Day 2",
        title: "Confined Water Training",
        activities: [
          "Confined water session 2",
          "Skills practice and mastery",
          "Safety procedures training",
          "Final theory exam",
          "Free time and beach relaxation"
        ]
      },
      {
        day: "Day 3",
        title: "Open Water Dives",
        activities: [
          "Open water dive 1 & 2",
          "Skills demonstration",
          "Underwater navigation",
          "Marine life identification",
          "Lunch on dive boat"
        ]
      },
      {
        day: "Day 4",
        title: "Certification & Departure",
        activities: [
          "Open water dive 3 & 4",
          "Final skills assessment",
          "Certification ceremony",
          "Logbook completion",
          "Airport transfer"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Advanced Diving Explorer",
    duration: "3 Days / 2 Nights",
    price: "₹28,000",
    rating: 4.8,
    participants: "Max 6 divers",
    description: "Perfect for certified divers wanting to explore advanced diving sites around Lakshadweep.",
    highlights: [
      "5 guided adventure dives",
      "Deep diving experience",
      "Wreck diving exploration",
      "Underwater photography workshop",
      "Night diving adventure",
      "Marine conservation talk"
    ],
    schedule: [
      {
        day: "Day 1",
        title: "Deep & Navigation",
        activities: [
          "Arrival and check-in",
          "Deep diving specialty",
          "Underwater navigation dive",
          "Equipment and safety briefing",
          "Welcome dinner"
        ]
      },
      {
        day: "Day 2",
        title: "Wreck & Photography",
        activities: [
          "Wreck diving exploration",
          "Underwater photography dive",
          "Photo editing workshop",
          "Marine life documentation",
          "Beach BBQ dinner"
        ]
      },
      {
        day: "Day 3",
        title: "Night Dive & Departure",
        activities: [
          "Final day dive",
          "Equipment maintenance workshop",
          "Night diving adventure",
          "Certificate presentation",
          "Departure transfer"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Lakshadweep Discovery Tour",
    duration: "7 Days / 6 Nights",
    price: "₹65,000",
    rating: 5.0,
    participants: "Max 8 travelers",
    description: "Comprehensive exploration of multiple islands with diving, culture, and adventure activities.",
    highlights: [
      "Visit 3 different islands",
      "10+ guided dives",
      "Cultural village visits",
      "Traditional fishing experience",
      "Island hopping by boat",
      "Local cuisine experiences",
      "Snorkeling and water sports",
      "Turtle watching (seasonal)"
    ],
    schedule: [
      {
        day: "Day 1-2",
        title: "Agatti Island",
        activities: [
          "Arrival and orientation",
          "Beach dives and reef exploration",
          "Local village visit",
          "Traditional cooking class",
          "Sunset cruise"
        ]
      },
      {
        day: "Day 3-4",
        title: "Kadmat Island",
        activities: [
          "Island transfer by boat",
          "Advanced diving sites",
          "Water sports activities",
          "Fishing with locals",
          "Beach camping experience"
        ]
      },
      {
        day: "Day 5-6",
        title: "Bangaram Island",
        activities: [
          "Pristine reef diving",
          "Underwater photography",
          "Marine conservation project",
          "Cultural exchange program",
          "Farewell celebration"
        ]
      },
      {
        day: "Day 7",
        title: "Departure",
        activities: [
          "Final dive (optional)",
          "Souvenir shopping",
          "Group photo session",
          "Airport transfer",
          "Journey home"
        ]
      }
    ]
  }
];

export default function Itinerary() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">Dive Azure</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white/80 hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/courses" className="text-white/80 hover:text-cyan-400 transition-colors">Courses</Link>
              <Link href="/medical" className="text-white/80 hover:text-cyan-400 transition-colors">Medical Forms</Link>
              <Link href="/itinerary" className="text-cyan-400">Itinerary</Link>
              <Link href="/login" className="text-white/80 hover:text-cyan-400 transition-colors">Login</Link>
              <Link href="/register" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Diving Itineraries
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Carefully crafted diving experiences that combine world-class training, breathtaking underwater exploration, and the natural beauty of Lakshadweep islands.
          </p>
        </div>
      </section>

      {/* Itineraries */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
                {/* Header */}
                <div className="p-8 border-b border-white/20">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">{itinerary.title}</h2>
                      <p className="text-white/80 mb-4">{itinerary.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center text-white/60">
                          <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                          {itinerary.duration}
                        </div>
                        <div className="flex items-center text-white/60">
                          <Users className="h-4 w-4 mr-2 text-cyan-400" />
                          {itinerary.participants}
                        </div>
                        <div className="flex items-center text-white/60">
                          <Star className="h-4 w-4 mr-2 text-yellow-400" />
                          {itinerary.rating} Rating
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{itinerary.price}</div>
                      <div className="text-white/60">per person</div>
                      <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Star className="h-5 w-5 text-cyan-400 mr-2" />
                        Package Includes
                      </h3>
                      <ul className="space-y-2">
                        {itinerary.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-white/80">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Calendar className="h-5 w-5 text-cyan-400 mr-2" />
                        Daily Schedule
                      </h3>
                      <div className="space-y-4">
                        {itinerary.schedule.map((day, idx) => (
                          <div key={idx} className="border-l-2 border-cyan-400 pl-4">
                            <h4 className="font-semibold text-white mb-1">{day.day}: {day.title}</h4>
                            <ul className="space-y-1 text-sm text-white/70">
                              {day.activities.map((activity, actIdx) => (
                                <li key={actIdx}>• {activity}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-colors">
                      Book This Package
                    </button>
                    <button className="flex-1 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black py-3 rounded-lg font-semibold transition-colors">
                      Download Detailed Itinerary
                    </button>
                    <button className="flex-1 border-2 border-white/30 hover:bg-white/10 py-3 rounded-lg font-semibold transition-colors">
                      Customize Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Itineraries?</h2>
            <p className="text-xl text-white/80">Expertly designed experiences that go beyond just diving</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Best Dive Sites</h3>
              <p className="text-white/70">Access to exclusive and pristine diving locations around Lakshadweep</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Guides</h3>
              <p className="text-white/70">PADI certified instructors with local knowledge and expertise</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Photo Opportunities</h3>
              <p className="text-white/70">Capture stunning underwater and landscape photography</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Fish className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Marine Life</h3>
              <p className="text-white/70">Encounter diverse marine ecosystems and rare species</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready for Your Diving Adventure?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us to book your preferred itinerary or create a custom diving experience tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </Link>
            <Link href="/register" className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Create Account
            </Link>
          </div>
          <p className="text-white/60 mt-6">
            Special discounts available for groups of 4 or more • Early bird offers for advance bookings
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Waves className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-semibold text-white">Dive Azure</span>
            </div>
            <p className="text-white/60 text-center md:text-right">
              © 2025 Dive Azure. Exploring the depths of Lakshadweep.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
