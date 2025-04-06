'use client';

import Link from 'next/link';
import { Server, Shield, Leaf, Zap, Brain, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#EAF2F8] pb-20">
      {/* Hero Section - with margin top to account for fixed navbar */}
      <section className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3">
              <Zap className="w-5 h-5 text-[#1B3B6F] mr-2" />
              <span className="text-lg font-medium text-[#1B3B6F]">European AI Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1B3B6F] mb-6">
              Sovereign Compute. Built for Open-Source AI.
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              Run open models like LLaMA and Mistral on Nordic GPU infrastructure<br />— no lock-in, no surveillance.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#A9D6E5] text-[#1B3B6F] px-6 py-3 rounded-xl font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
            >
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3B6F] text-center mb-16">
            Why Arctevia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-[#EAF2F8] p-8 rounded-2xl shadow-md">
              <div className="bg-[#A9D6E5] p-3 rounded-xl inline-block mb-5">
                <Brain className="w-8 h-8 text-[#1B3B6F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1B3B6F] mb-3">
                🧠 Optimized for Open Models
              </h3>
              <p className="text-gray-600">
                Run top open-source models like Mistral, LLaMA, and Falcon in seconds — no config headaches.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#EAF2F8] p-8 rounded-2xl shadow-md">
              <div className="bg-[#A9D6E5] p-3 rounded-xl inline-block mb-5">
                <Shield className="w-8 h-8 text-[#1B3B6F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1B3B6F] mb-3">
                🛡️ Sovereign by Default
              </h3>
              <p className="text-gray-600">
                Your data stays local, private, and under your control. No tracking, no backdoors — just compute.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#EAF2F8] p-8 rounded-2xl shadow-md">
              <div className="bg-[#A9D6E5] p-3 rounded-xl inline-block mb-5">
                <Leaf className="w-8 h-8 text-[#1B3B6F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1B3B6F] mb-3">
                🌱 Green Infrastructure
              </h3>
              <p className="text-gray-600">
                Powered by 100% renewable energy from Nordic sources — with one of the lowest carbon footprints in AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#1B3B6F] text-center mb-4">
            Popular Open Models
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Run these leading open-source LLMs on secure, high-performance Nordic GPUs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Model Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-[#1B3B6F] mb-3">
                LLaMA 2
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #Open-Source
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #7B
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #Quantized
                </span>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200"
              >
                Run on Arctevia
              </button>
            </div>
            
            {/* Model Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-[#1B3B6F] mb-3">
                Mistral
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #Open-Source
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #7B
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #Instruction-Tuned
                </span>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200"
              >
                Run on Arctevia
              </button>
            </div>
            
            {/* Model Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-[#1B3B6F] mb-3">
                DeepSeek
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #Open-Source
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #7B
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                  #Coder
                </span>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="bg-[#A9D6E5] text-[#1B3B6F] px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200"
              >
                Run on Arctevia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#A9D6E5] rounded-2xl mt-20 mx-6 md:mx-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1B3B6F] mb-6">
            GPU Power That Respects Your Privacy
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Join our early access program and be among the first to experience truly sovereign AI compute.
          </p>
          <p className="text-lg text-gray-700 italic mb-10">
            🚀 Join developers and AI teams moving to sovereign compute — before the cloud gets locked down.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#1B3B6F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#A9D6E5] hover:text-[#1B3B6F] transition duration-200 inline-block"
          >
            Join Early Access
          </button>
        </div>
      </section>

      {/* Early Access Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl w-full relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-[#1B3B6F] mb-4">Join Arctevia Early Access</h2>
            <iframe
              src="https://tally.so/r/mVNgzg"
              width="100%"
              height="500"
              className="rounded-md w-full"
              title="Arctevia Waitlist"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
