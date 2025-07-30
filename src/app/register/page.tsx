'use client';

import { Waves, ArrowLeft, Eye, EyeOff, Mail, Lock, User, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    newsletter: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      console.log('Registration attempt:', formData);
      setIsLoading(false);
      // Here you would typically handle the registration
      alert('Registration successful! Please check your email to verify your account.');
    }, 1000);
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
              <Link href="/medical" className="text-white/80 hover:text-cyan-400 transition-colors">Medical Forms</Link>
              <Link href="/itinerary" className="text-white/80 hover:text-cyan-400 transition-colors">Itinerary</Link>
              <Link href="/login" className="text-white/80 hover:text-cyan-400 transition-colors">Login</Link>
              <Link href="/register" className="text-cyan-400">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-cyan-600/20 p-3 rounded-full">
                  <Waves className="h-8 w-8 text-cyan-400" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Join Dive Azure</h1>
              <p className="text-white/80">Create your account to start your diving journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border ${errors.firstName ? 'border-red-500' : 'border-white/20'} text-white placeholder-white/60 focus:outline-none focus:border-cyan-400`}
                      placeholder="Enter your first name"
                    />
                  </div>
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Last Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border ${errors.lastName ? 'border-red-500' : 'border-white/20'} text-white placeholder-white/60 focus:outline-none focus:border-cyan-400`}
                      placeholder="Enter your last name"
                    />
                  </div>
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border ${errors.email ? 'border-red-500' : 'border-white/20'} text-white placeholder-white/60 focus:outline-none focus:border-cyan-400`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border ${errors.phone ? 'border-red-500' : 'border-white/20'} text-white placeholder-white/60 focus:outline-none focus:border-cyan-400`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full pl-12 pr-12 py-3 rounded-lg bg-white/10 border ${errors.password ? 'border-red-500' : 'border-white/20'} text-white placeholder-white/60 focus:outline-none focus:border-cyan-400`}
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                <p className="text-white/60 text-sm mt-1">Password must be at least 8 characters long</p>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Confirm Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full pl-12 pr-12 py-3 rounded-lg bg-white/10 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} text-white placeholder-white/60 focus:outline-none focus:border-cyan-400`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="space-y-4">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-white">
                    I agree to the{' '}
                    <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>
                    {' '}*
                  </span>
                </label>
                {errors.agreeTerms && <p className="text-red-400 text-sm">{errors.agreeTerms}</p>}

                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                    className="mt-1"
                  />
                  <span className="text-white">
                    I would like to receive updates about courses, diving tips, and special offers
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/80">
                Already have an account?{' '}
                <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Why Create an Account?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-cyan-600/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">Easy Booking</h4>
                <p className="text-white/60 text-sm">Quick course reservations and schedule management</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <User className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">Personal Dashboard</h4>
                <p className="text-white/60 text-sm">Track your progress and certifications</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600/20 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Waves className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-1">Dive Logs</h4>
                <p className="text-white/60 text-sm">Digital logbook and dive history</p>
              </div>
            </div>
          </div>
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
