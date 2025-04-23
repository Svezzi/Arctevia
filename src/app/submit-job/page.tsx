'use client';

import { useState } from 'react';

/* Adding a global style for placeholder text color */
const formStyleFix = `
  ::placeholder {
    color: #4B5563 !important;
    opacity: 1;
  }
`;

export default function SubmitJob() {
  return (
    <>
      <style jsx global>{formStyleFix}</style>
      <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-md rounded-xl">
          <h1 className="text-3xl font-semibold text-[#1B3B6F] mb-8">Submit a New Job</h1>
          
          <form className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Job Name */}
              <div className="col-span-full mb-6">
                <label htmlFor="jobName" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Name
                </label>
                <input
                  type="text"
                  id="jobName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none text-gray-800"
                  placeholder="Enter job name"
                />
              </div>
              
              {/* Model Selection */}
              <div className="mb-6">
                <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Model
                </label>
                <select
                  id="model"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none text-gray-800"
                >
                  <option value="">Select a model</option>
                  <option value="llama2">LLaMA 2</option>
                  <option value="mistral">Mistral</option>
                  <option value="deepseek">DeepSeek</option>
                  <option value="codellama">Code LLaMA</option>
                  <option value="phi2">Phi-2</option>
                  <option value="falcon">Falcon</option>
                </select>
              </div>
              
              {/* Runtime Hours */}
              <div className="mb-6">
                <label htmlFor="runtime" className="block text-sm font-medium text-gray-700 mb-2">
                  Runtime Hours
                </label>
                <input
                  type="number"
                  id="runtime"
                  min="1"
                  max="24"
                  defaultValue="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none text-gray-800"
                />
              </div>
              
              {/* GPU Type */}
              <div className="mb-6">
                <label htmlFor="gpuType" className="block text-sm font-medium text-gray-700 mb-2">
                  GPU Type
                </label>
                <select
                  id="gpuType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none text-gray-800"
                >
                  <option value="">Select GPU type</option>
                  <option value="a100">NVIDIA A100</option>
                  <option value="l4">NVIDIA L4</option>
                  <option value="4090">NVIDIA RTX 4090</option>
                </select>
              </div>
              
              {/* Number of GPUs */}
              <div className="mb-6">
                <label htmlFor="gpuCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of GPUs
                </label>
                <input
                  type="number"
                  id="gpuCount"
                  min="1"
                  max="4"
                  defaultValue="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none text-gray-800"
                />
              </div>
              
              {/* File Upload - Drag & Drop */}
              <div className="col-span-full mb-8">
                <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Model Definition
                </label>
                <div 
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#A9D6E5] transition-colors"
                  onClick={() => window.location.href = '/coming-soon'}
                >
                  <div className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="mt-1">Drag and drop your file here, or click to browse</p>
                    <p className="text-xs mt-2">Supports .py, .ipynb, .yaml files</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cost Estimate */}
            <div className="mb-8 bg-gray-50 p-4 rounded-lg">
              <p className="text-lg font-medium text-[#1B3B6F]">Estimated Cost: <span className="font-bold">$2.45</span></p>
              <p className="text-sm text-gray-500">Based on selected model, runtime, and GPU configuration</p>
            </div>
            
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => window.location.href = '/signup-form'}
                className="bg-[#A9D6E5] text-[#1B3B6F] px-6 py-3 rounded-xl font-semibold hover:shadow-lg"
              >
                Sign up for Early Access
              </button>
            </div>
            <p className="text-lg font-semibold text-center text-[#1B3B6F] mt-4">This is a demo interface. Submitting jobs will be available when we launch.</p>
          </form>
          
          {/* Recent Jobs Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#1B3B6F] mb-4">Recent Jobs</h2>
            <div className="bg-white shadow rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">News Classifier</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mistral</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Running
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Text Generator</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">LLaMA 2</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Code Assistant</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DeepSeek</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Queued
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 