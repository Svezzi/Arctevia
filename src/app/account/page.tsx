'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Key, MapPin, InfoIcon, AlertTriangle, RefreshCw, CreditCard, Activity, Clock, Wallet } from 'lucide-react';

export default function AccountPage() {
  // Mock user data for direct access without authentication
  const user = {
    email: "user@articstack.com",
    region: "Iceland",
    credits: 12.30,
    gpuHours: 41.5,
    totalJobs: 22,
    apiKey: "as_8f92n3o2f923nf982nf982nf982"
  };

  const [region, setRegion] = useState(user.region);
  const [showApiKey, setShowApiKey] = useState(false);
  
  // Format API key for display
  const displayApiKey = showApiKey ? user.apiKey : "••••••••••••••••••••••••••";
  
  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#1B3B6F] mb-6">Your Account</h1>
        
        {/* User Information Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Account Information</h2>
          
          <div className="space-y-4">
            {/* Email Address */}
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#A9D6E5] mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Email Address</p>
                <p className="text-gray-700">{user.email}</p>
              </div>
            </div>
            
            {/* API Key */}
            <div className="flex items-start gap-3">
              <Key className="w-5 h-5 text-[#A9D6E5] mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">API Key</p>
                <div className="flex items-center">
                  <p className="text-gray-700 font-mono bg-gray-50 p-1 rounded text-sm">{displayApiKey}</p>
                  <button 
                    className="text-[#1B3B6F] text-sm ml-2 hover:underline"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Region Preference */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#A9D6E5] mt-0.5" />
              <div className="flex-grow">
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-500">Region Preference</p>
                  <div className="relative ml-2 group">
                    <InfoIcon className="w-4 h-4 text-gray-400 cursor-help" />
                    <div className="absolute left-0 bottom-full mb-2 w-64 bg-gray-800 text-white text-xs p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none z-10 transition-opacity">
                      Select where your jobs and data are processed. This affects latency and regulatory compliance.
                    </div>
                  </div>
                </div>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none"
                >
                  <option value="Iceland">Iceland</option>
                  <option value="Norway">Norway</option>
                  <option value="Germany">Germany</option>
                  <option value="Auto">Auto (Lowest Latency)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Usage Summary Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Usage Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Total Jobs */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Activity className="w-5 h-5 text-[#A9D6E5]" />
              <div>
                <p className="text-sm font-medium text-gray-500">Total Jobs Run</p>
                <p className="text-[#1B3B6F] font-bold text-xl">{user.totalJobs}</p>
              </div>
            </div>
            
            {/* GPU Hours */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5 text-[#A9D6E5]" />
              <div>
                <p className="text-sm font-medium text-gray-500">GPU Hours Used</p>
                <p className="text-[#1B3B6F] font-bold text-xl">{user.gpuHours}</p>
              </div>
            </div>
            
            {/* Credits */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Wallet className="w-5 h-5 text-[#A9D6E5]" />
              <div>
                <p className="text-sm font-medium text-gray-500">Credits Remaining</p>
                <p className="text-[#1B3B6F] font-bold text-xl">€{user.credits.toFixed(2)}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button 
              className="inline-flex items-center bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg font-medium hover:bg-[#1B3B6F] hover:text-white transition-colors"
              onClick={() => setRegion('Iceland')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Change Region
            </button>
            
            <button 
              className="inline-flex items-center bg-gray-100 text-gray-400 px-4 py-2 rounded-lg font-medium cursor-not-allowed"
              disabled
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Regenerate API Key
            </button>
            
            <Link 
              href="/pricing"
              className="inline-flex items-center bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg font-medium hover:bg-[#1B3B6F] hover:text-white transition-colors"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Add More Credits
            </Link>
          </div>
        </div>
        
        {/* Danger Zone */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Danger Zone</h2>
          
          <div className="border border-red-200 rounded-lg p-4 bg-red-50">
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-red-700">Delete Your Account</p>
                <p className="text-red-600 text-sm">This action cannot be undone. All your data and jobs will be permanently removed.</p>
              </div>
            </div>
            
            <button 
              className="mt-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
              onClick={() => alert("In a real app, this would show a confirmation dialog.")}
            >
              Delete My Account
            </button>
          </div>
        </div>
        
        {/* For development - note about mock data */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700 text-sm">
          <p className="font-medium">⚠️ Development Mode</p>
          <p>This page is using mock data and has auth checks disabled. Remember to re-enable authentication before production.</p>
        </div>
      </div>
    </div>
  );
} 