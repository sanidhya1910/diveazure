'use client';

import { Waves, ArrowLeft, AlertTriangle, FileText, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MedicalForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    emergencyContact: '',
    emergencyPhone: '',
    
    // Medical Questions
    medicalConditions: {
      heartProblems: false,
      respiratoryProblems: false,
      diabetes: false,
      epilepsy: false,
      bloodPressure: false,
      medications: false,
      allergies: false,
      surgeries: false,
      pregnancy: false,
      other: false
    },
    medicationsList: '',
    allergiesList: '',
    surgicalHistory: '',
    otherConditions: '',
    
    // Diving Experience
    certificationLevel: '',
    lastDive: '',
    totalDives: '',
    
    // Declarations
    truthfulAnswers: false,
    medicalClearance: false,
    liability: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMedicalConditionChange = (condition: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      medicalConditions: {
        ...prev.medicalConditions,
        [condition]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Medical form submitted successfully! We will review your information and contact you if needed.');
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
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white/80 hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/courses" className="text-white/80 hover:text-cyan-400 transition-colors">Courses</Link>
              <Link href="/medical" className="text-cyan-400">Medical Forms</Link>
              <Link href="/itinerary" className="text-white/80 hover:text-cyan-400 transition-colors">Itinerary</Link>
              <Link href="/login" className="text-white/80 hover:text-cyan-400 transition-colors">Login</Link>
              <Link href="/register" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Medical Statement
            </h1>
            <div className="bg-orange-600/20 border border-orange-600/50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-orange-400 mb-2">Important Notice</h3>
                  <p className="text-white/80">
                    This medical statement is required for all diving activities. Please answer all questions honestly. 
                    If you answer &quot;Yes&quot; to any medical condition, you may need a physician&apos;s clearance before diving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="h-6 w-6 text-cyan-400 mr-3" />
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Gender *</label>
                  <select
                    required
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Emergency Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.emergencyContact}
                    onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Emergency Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.emergencyPhone}
                    onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Medical Conditions */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="h-6 w-6 text-cyan-400 mr-3" />
                Medical History
              </h2>
              <p className="text-white/80 mb-6">
                Please check YES or NO for each question. If you answer YES to any question, please provide details in the appropriate section below.
              </p>
              
              <div className="space-y-4">
                {[
                  { key: 'heartProblems', label: 'Heart problems, heart attack, cardiac surgery, or stroke' },
                  { key: 'respiratoryProblems', label: 'Asthma, lung disease, or breathing problems' },
                  { key: 'diabetes', label: 'Diabetes requiring medication' },
                  { key: 'epilepsy', label: 'Epilepsy, seizures, or convulsions' },
                  { key: 'bloodPressure', label: 'High or low blood pressure' },
                  { key: 'medications', label: 'Currently taking prescription medications' },
                  { key: 'allergies', label: 'Allergies to medications, marine life, or other substances' },
                  { key: 'surgeries', label: 'Recent surgeries or operations' },
                  { key: 'pregnancy', label: 'Pregnancy (current or suspected)' },
                  { key: 'other', label: 'Any other medical condition not listed above' }
                ].map((condition) => (
                  <div key={condition.key} className="flex items-center justify-between p-4 border border-white/20 rounded-lg">
                    <span className="text-white">{condition.label}</span>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={condition.key}
                          checked={formData.medicalConditions[condition.key as keyof typeof formData.medicalConditions] === true}
                          onChange={() => handleMedicalConditionChange(condition.key, true)}
                          className="text-cyan-400"
                        />
                        <span className="text-white">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={condition.key}
                          checked={formData.medicalConditions[condition.key as keyof typeof formData.medicalConditions] === false}
                          onChange={() => handleMedicalConditionChange(condition.key, false)}
                          className="text-cyan-400"
                        />
                        <span className="text-white">No</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Details */}
              <div className="mt-8 space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">List all medications you are currently taking:</label>
                  <textarea
                    rows={3}
                    value={formData.medicationsList}
                    onChange={(e) => handleInputChange('medicationsList', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                    placeholder="Include dosage and frequency..."
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">List any allergies:</label>
                  <textarea
                    rows={3}
                    value={formData.allergiesList}
                    onChange={(e) => handleInputChange('allergiesList', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                    placeholder="Medications, marine life, latex, etc..."
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Surgical history (within last 2 years):</label>
                  <textarea
                    rows={3}
                    value={formData.surgicalHistory}
                    onChange={(e) => handleInputChange('surgicalHistory', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                    placeholder="Type of surgery and date..."
                  />
                </div>
              </div>
            </div>

            {/* Diving Experience */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Diving Experience</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Certification Level</label>
                  <select
                    value={formData.certificationLevel}
                    onChange={(e) => handleInputChange('certificationLevel', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="">Select Level</option>
                    <option value="none">No Certification</option>
                    <option value="open-water">Open Water</option>
                    <option value="advanced">Advanced Open Water</option>
                    <option value="rescue">Rescue Diver</option>
                    <option value="divemaster">Divemaster</option>
                    <option value="instructor">Instructor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Dive Date</label>
                  <input
                    type="date"
                    value={formData.lastDive}
                    onChange={(e) => handleInputChange('lastDive', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Total Logged Dives</label>
                  <input
                    type="number"
                    value={formData.totalDives}
                    onChange={(e) => handleInputChange('totalDives', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Declarations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Declarations</h2>
              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.truthfulAnswers}
                    onChange={(e) => handleInputChange('truthfulAnswers', e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-white">
                    I certify that I have answered all questions completely and honestly, and that the information provided is accurate to the best of my knowledge.
                  </span>
                </label>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.medicalClearance}
                    onChange={(e) => handleInputChange('medicalClearance', e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-white">
                    I understand that if I answered &quot;Yes&quot; to any medical condition, I may need to obtain medical clearance from a physician before participating in diving activities.
                  </span>
                </label>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.liability}
                    onChange={(e) => handleInputChange('liability', e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-white">
                    I understand that scuba diving involves inherent risks and I accept responsibility for my participation in diving activities.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Submit Medical Form
              </button>
            </div>
          </form>
        </div>
      </div>

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
