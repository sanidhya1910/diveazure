'use client';

import { Waves, User, Calendar, FileText, Award, Camera, Settings, LogOut, ChevronRight, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock user data - in a real app, this would come from your authentication system
const userData = {
  name: "John Doe",
  email: "john.doe@email.com",
  certificationLevel: "Advanced Open Water",
  totalDives: 47,
  memberSince: "2023",
  upcomingCourses: [
    {
      id: 1,
      title: "Rescue Diver Course",
      date: "2025-02-15",
      time: "08:00 AM",
      location: "Agatti Island",
      status: "confirmed"
    }
  ],
  recentDives: [
    {
      id: 1,
      site: "Coral Garden",
      date: "2025-01-20",
      depth: "18m",
      duration: "45 min",
      visibility: "25m"
    },
    {
      id: 2,
      site: "Turtle Point",
      date: "2025-01-19",
      depth: "15m",
      duration: "50 min",
      visibility: "30m"
    },
    {
      id: 3,
      site: "Wreck Dive",
      date: "2025-01-18",
      depth: "22m",
      duration: "40 min",
      visibility: "20m"
    }
  ],
  certifications: [
    {
      title: "Open Water Diver",
      date: "2023-06-15",
      certNumber: "OW-2023-001234"
    },
    {
      title: "Advanced Open Water",
      date: "2024-03-20",
      certNumber: "AOW-2024-005678"
    }
  ]
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabContent = {
    overview: {
      title: "Dashboard Overview",
      component: <OverviewContent setActiveTab={setActiveTab} />
    },
    dives: {
      title: "Dive Logbook",
      component: <DiveLogContent />
    },
    courses: {
      title: "My Courses",
      component: <CoursesContent />
    },
    certifications: {
      title: "Certifications",
      component: <CertificationsContent />
    },
    profile: {
      title: "Profile Settings",
      component: <ProfileContent />
    }
  };

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
            <div className="flex items-center space-x-6">
              <span className="text-white/80">Welcome, {userData.name}</span>
              <button className="text-white/80 hover:text-cyan-400 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <button className="text-white/80 hover:text-red-400 transition-colors">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/30 backdrop-blur-sm border-r border-white/10 min-h-screen">
          <div className="p-6">
            <div className="text-center mb-8">
              <div className="bg-cyan-600/20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <User className="h-10 w-10 text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-white">{userData.name}</h2>
              <p className="text-white/60">{userData.certificationLevel}</p>
              <p className="text-cyan-400 text-sm">{userData.totalDives} Total Dives</p>
            </div>

            <nav className="space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: Calendar },
                { id: 'dives', label: 'Dive Logbook', icon: FileText },
                { id: 'courses', label: 'My Courses', icon: Award },
                { id: 'certifications', label: 'Certifications', icon: Award },
                { id: 'profile', label: 'Profile', icon: User }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-400/30'
                        : 'text-white/80 hover:bg-white/10 hover:text-cyan-400'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-white mb-8">
            {tabContent[activeTab as keyof typeof tabContent].title}
          </h1>
          {tabContent[activeTab as keyof typeof tabContent].component}
        </div>
      </div>
    </div>
  );
}

function OverviewContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm">Total Dives</p>
              <p className="text-3xl font-bold text-white">{userData.totalDives}</p>
            </div>
            <FileText className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm">Certifications</p>
              <p className="text-3xl font-bold text-white">{userData.certifications.length}</p>
            </div>
            <Award className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm">Member Since</p>
              <p className="text-3xl font-bold text-white">{userData.memberSince}</p>
            </div>
            <Calendar className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm">Current Level</p>
              <p className="text-lg font-bold text-white">Advanced</p>
            </div>
            <User className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Upcoming Courses */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Calendar className="h-6 w-6 text-cyan-400 mr-3" />
          Upcoming Courses
        </h2>
        {userData.upcomingCourses.length > 0 ? (
          <div className="space-y-4">
            {userData.upcomingCourses.map((course) => (
              <div key={course.id} className="border border-white/20 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-white">{course.title}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-white/60">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(course.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.time}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {course.location}
                      </span>
                    </div>
                  </div>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {course.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/60">No upcoming courses. <Link href="/courses" className="text-cyan-400 hover:text-cyan-300">Browse available courses</Link></p>
        )}
      </div>

      {/* Recent Dives */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <FileText className="h-6 w-6 text-cyan-400 mr-3" />
          Recent Dives
        </h2>
        <div className="space-y-3">
          {userData.recentDives.slice(0, 3).map((dive) => (
            <div key={dive.id} className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <h3 className="font-semibold text-white">{dive.site}</h3>
                <p className="text-white/60 text-sm">{new Date(dive.date).toLocaleDateString()}</p>
              </div>
              <div className="text-right text-white/60 text-sm">
                <p>Depth: {dive.depth}</p>
                <p>Duration: {dive.duration}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href="#" onClick={() => setActiveTab('dives')} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mt-4">
          View all dives <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

function DiveLogContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-white/80">Track your diving experiences and progress</p>
        <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors">
          Add New Dive
        </button>
      </div>
      
      <div className="grid gap-4">
        {userData.recentDives.map((dive) => (
          <div key={dive.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">{dive.site}</h3>
                <p className="text-white/60">{new Date(dive.date).toLocaleDateString()}</p>
              </div>
              <button className="text-cyan-400 hover:text-cyan-300">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/20">
              <div>
                <p className="text-white/60 text-sm">Max Depth</p>
                <p className="text-white font-semibold">{dive.depth}</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Duration</p>
                <p className="text-white font-semibold">{dive.duration}</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Visibility</p>
                <p className="text-white font-semibold">{dive.visibility}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoursesContent() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-white/80">Manage your course bookings and progress</p>
        <Link href="/courses" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors">
          Browse Courses
        </Link>
      </div>
      
      {userData.upcomingCourses.map((course) => (
        <div key={course.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center text-white/60">
              <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
              {new Date(course.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-white/60">
              <Clock className="h-4 w-4 mr-2 text-cyan-400" />
              {course.time}
            </div>
            <div className="flex items-center text-white/60">
              <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
              {course.location}
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors">
              View Details
            </button>
            <button className="border border-white/30 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">
              Download Materials
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function CertificationsContent() {
  return (
    <div className="space-y-6">
      <p className="text-white/80">Your diving certifications and achievements</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {userData.certifications.map((cert, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <Award className="h-8 w-8 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-semibold">PADI</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
            <p className="text-white/60 mb-2">Certified: {new Date(cert.date).toLocaleDateString()}</p>
            <p className="text-white/60 text-sm">Cert #: {cert.certNumber}</p>
            <button className="mt-4 border border-cyan-400 hover:bg-cyan-400 hover:text-black px-4 py-2 rounded-lg transition-colors">
              Download Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 font-semibold mb-2">Name</label>
            <input
              type="text"
              value={userData.name}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
            />
          </div>
          <div>
            <label className="block text-white/80 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={userData.email}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white"
            />
          </div>
        </div>
        <button className="mt-4 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg transition-colors">
          Update Profile
        </button>
      </div>
    </div>
  );
}
