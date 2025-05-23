'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Filter } from 'lucide-react';

export default function ModelsPage() {
  const [filterOpen, setFilterOpen] = useState(false);
  
  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Optional Filter Bar */}
        <div className="mb-8">
          <button 
            className="flex items-center gap-2 text-[#1B3B6F] bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter className="w-4 h-4" />
            <span>Filter Models</span>
          </button>
          
          {filterOpen && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 bg-white p-6 rounded-xl shadow-md">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">License</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none">
                  <option value="">All Licenses</option>
                  <option value="mit">MIT</option>
                  <option value="apache">Apache 2.0</option>
                  <option value="llama">LLaMA License</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none">
                  <option value="">All Sizes</option>
                  <option value="7b">7B Parameters</option>
                  <option value="13b">13B Parameters</option>
                  <option value="70b">70B Parameters</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#A9D6E5] focus:border-[#A9D6E5] outline-none">
                  <option value="">All Types</option>
                  <option value="base">Base Model</option>
                  <option value="instruct">Instruction-tuned</option>
                  <option value="chat">Chat Model</option>
                  <option value="code">Code Generation</option>
                </select>
              </div>
            </div>
          )}
        </div>
        
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-[#1B3B6F] mb-4">Supported AI Models</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sovereign, green compute for Europe's open-source AI.
          </p>
        </div>
        
        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* LLaMA 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#1B3B6F] mb-2">LLaMA 2</h2>
            <p className="text-gray-600 mb-4">
              Meta&apos;s powerful open-source LLM, fine-tuned for chat and instruction-following with improved safety.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                #Open-Source
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                #7B-70B
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                #Chat
              </span>
            </div>
            <Link
              href="/models/llama-2"
              className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
            >
              View Details
            </Link>
          </div>
          
          {/* Mistral */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#1B3B6F] mb-2">Mistral</h2>
            <p className="text-gray-600 mb-4">
              Highly efficient language model with excellent performance at small parameter sizes. Performs well on reasoning tasks.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                #Open-Source
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                #7B
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                #Instruction-Tuned
              </span>
            </div>
            <Link
              href="/models/mistral"
              className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
            >
              View Details
            </Link>
          </div>
          
          {/* DeepSeek */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#1B3B6F] mb-2">DeepSeek</h2>
            <p className="text-gray-600 mb-4">
              Trained on diverse datasets with strong performance on knowledge-intensive tasks and multilingual support.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                #Open-Source
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                #7B-67B
              </span>
              <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">
                #Multilingual
              </span>
            </div>
            <Link
              href="/models/deepseek"
              className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
            >
              View Details
            </Link>
          </div>
          
          {/* Falcon */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#1B3B6F] mb-2">Falcon</h2>
            <p className="text-gray-600 mb-4">
              Built by the Technology Innovation Institute, this model excels at following complex prompts and instructions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                #Open-Source
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                #7B-40B
              </span>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                #Apache-2.0
              </span>
            </div>
            <Link
              href="/models/falcon"
              className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
            >
              View Details
            </Link>
          </div>
          
          {/* Code LLaMA */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#1B3B6F] mb-2">Code LLaMA</h2>
            <p className="text-gray-600 mb-4">
              Specialized on code understanding and generation. Supports multiple programming languages with high-quality outputs.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                #Open-Source
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                #7B-34B
              </span>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                #Code
              </span>
            </div>
            <Link
              href="/models/code-llama"
              className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
            >
              View Details
            </Link>
          </div>
          
          {/* Phi-2 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#1B3B6F] mb-2">Phi-2</h2>
            <p className="text-gray-600 mb-4">
              Microsoft&apos;s small yet powerful LLM with excellent performance-to-size ratio. Handles complex reasoning tasks despite small size.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                #Open-Source
              </span>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                #2.7B
              </span>
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                #Efficient
              </span>
            </div>
            <Link
              href="/models/phi-2"
              className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 