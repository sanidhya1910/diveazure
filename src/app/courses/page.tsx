import { Waves, Clock, Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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
    prerequisites: "Minimum age 10 years, basic swimming ability"
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
    prerequisites: "PADI Open Water Diver certification or equivalent"
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
    prerequisites: "PADI Advanced Open Water Diver and EFR certification"
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
    prerequisites: "PADI Rescue Diver, 40 logged dives, EFR certification"
  }
];

export default function Courses() {
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
              <Link href="/courses" className="text-cyan-400">Courses</Link>
              <Link href="/medical" className="text-white/80 hover:text-cyan-400 transition-colors">Medical Forms</Link>
              <Link href="/itinerary" className="text-white/80 hover:text-cyan-400 transition-colors">Itinerary</Link>
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
            Diving Courses
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Explore our comprehensive range of PADI certified diving courses. From your first underwater breath to professional level training, we&apos;ll guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      course.level === 'Beginner' ? 'bg-green-600 text-white' :
                      course.level === 'Intermediate' ? 'bg-yellow-600 text-white' :
                      course.level === 'Advanced' ? 'bg-orange-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400">{course.price}</div>
                    <div className="text-white/60 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                </div>

                <p className="text-white/80 mb-6">{course.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Course Includes:</h4>
                  <ul className="space-y-2">
                    {course.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-white/80">
                        <Star className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Prerequisites:</h4>
                  <p className="text-white/80">{course.prerequisites}</p>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                  <button className="flex-1 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black py-3 rounded-lg font-semibold transition-colors">
                    More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Diving Journey?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us to discuss which course is right for you or to book your next certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Contact Us
            </Link>
            <Link href="/medical" className="border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Complete Medical Form
            </Link>
          </div>
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
