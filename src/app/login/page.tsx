'use client';

import { Waves, ArrowLeft, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsLoading(false);
      // Here you would typically handle the authentication
      alert('Login functionality will be implemented with backend integration');
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
              <Link href="/login" className="text-cyan-400">Login</Link>
              <Link href="/register" className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
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
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-white/80">Sign in to your Dive Azure account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-12 pr-12 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-cyan-400"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="text-cyan-400"
                  />
                  <span className="text-white/80">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-white/80">
                Don&apos;t have an account?{' '}
                <Link href="/register" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Create one here
                </Link>
              </p>
            </div>

            <div className="mt-6 border-t border-white/20 pt-6">
              <p className="text-center text-white/60 text-sm">
                By signing in, you agree to our{' '}
                <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Link
              href="/courses"
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:border-cyan-400/50 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">Browse Courses</h3>
              <p className="text-white/60 text-sm">View our diving programs</p>
            </Link>
            <Link
              href="/medical"
              className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center hover:border-cyan-400/50 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1">Medical Form</h3>
              <p className="text-white/60 text-sm">Complete health assessment</p>
            </Link>
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
