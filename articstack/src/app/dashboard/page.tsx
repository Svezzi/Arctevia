'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BarChart, Activity, Cpu, Clock } from 'lucide-react';

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState<'7d' | '30d'>('7d');
  
  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-[#1B3B6F]">Your Dashboard</h1>
          <Link
            href="/submit-job"
            className="bg-[#A9D6E5] text-[#1B3B6F] px-6 py-3 rounded-xl font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200"
          >
            Submit New Job
          </Link>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 - Active Jobs */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-600">Active Jobs</h2>
              <Activity className="w-6 h-6 text-[#A9D6E5]" />
            </div>
            <p className="text-4xl font-bold text-[#1B3B6F]">3</p>
          </div>
          
          {/* Card 2 - Job Queue */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-600">Job Queue</h2>
              <Clock className="w-6 h-6 text-[#A9D6E5]" />
            </div>
            <p className="text-4xl font-bold text-[#1B3B6F]">2</p>
          </div>
          
          {/* Card 3 - GPU Hours */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-600">GPU Hours</h2>
              <Cpu className="w-6 h-6 text-[#A9D6E5]" />
            </div>
            <p className="text-4xl font-bold text-[#1B3B6F]">128</p>
          </div>
          
          {/* Card 4 - Completed Jobs */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-600">Completed Jobs</h2>
              <BarChart className="w-6 h-6 text-[#A9D6E5]" />
            </div>
            <p className="text-4xl font-bold text-[#1B3B6F]">18</p>
          </div>
        </div>
        
        {/* Usage Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-12 relative">
          <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-red-600 opacity-30 tracking-wider">DEMO INTERFACE</h1>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-[#1B3B6F]">GPU Usage</h2>
            <div className="flex space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                className={`px-4 py-1 rounded-lg text-sm font-medium ${
                  timeframe === '7d' 
                    ? 'bg-white shadow-sm text-[#1B3B6F]' 
                    : 'text-gray-500 hover:text-[#1B3B6F]'
                }`}
                onClick={() => setTimeframe('7d')}
              >
                7d
              </button>
              <button
                className={`px-4 py-1 rounded-lg text-sm font-medium ${
                  timeframe === '30d' 
                    ? 'bg-white shadow-sm text-[#1B3B6F]' 
                    : 'text-gray-500 hover:text-[#1B3B6F]'
                }`}
                onClick={() => setTimeframe('30d')}
              >
                30d
              </button>
            </div>
          </div>
          
          {/* Placeholder Chart */}
          <div className="w-full h-64 bg-gray-50 rounded-lg overflow-hidden">
            {timeframe === '7d' ? (
              <div className="h-full flex items-end justify-around p-4">
                <div className="w-1/12 bg-[#A9D6E5] rounded-t-md h-1/4"></div>
                <div className="w-1/12 bg-[#A9D6E5] rounded-t-md h-2/5"></div>
                <div className="w-1/12 bg-[#A9D6E5] rounded-t-md h-3/4"></div>
                <div className="w-1/12 bg-[#A9D6E5] rounded-t-md h-1/2"></div>
                <div className="w-1/12 bg-[#A9D6E5] rounded-t-md h-2/3"></div>
                <div className="w-1/12 bg-[#A9D6E5] rounded-t-md h-4/5"></div>
                <div className="w-1/12 bg-[#A9D6E5] rounded-t-md h-1/3"></div>
              </div>
            ) : (
              <div className="h-full flex items-end justify-around p-4">
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-1/4"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-3/4"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-1/3"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-1/2"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-2/3"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-1/5"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-4/5"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-3/5"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-1/2"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-2/5"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-3/4"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-1/4"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-1/3"></div>
                <div className="w-1/16 bg-[#A9D6E5] rounded-t-md h-5/6"></div>
              </div>
            )}
            <div className="flex justify-between px-4 text-xs text-gray-500">
              {timeframe === '7d' 
                ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <div key={i}>{day}</div>
                  ))
                : ['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => (
                    <div key={i} className="flex-1 text-center">{week}</div>
                  ))
              }
            </div>
          </div>
        </div>
        
        {/* Job History */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#1B3B6F] mb-6">Job History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPU Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Runtime</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Sentiment Analysis</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">LLaMA 2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">A100</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">2.4h</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Running
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Image Generator</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">Mistral</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">L4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">5.1h</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Content Classifier</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">DeepSeek</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">RTX 4090</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">1.8h</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Queued
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Text Summarizer</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">LLaMA 2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">A100</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">3.2h</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Failed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Data Processor</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">Mistral</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">L4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">8.5h</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      Cancelled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 