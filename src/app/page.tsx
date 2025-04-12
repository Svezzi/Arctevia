'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section - with increased top padding for breathing room */}
      <section className="pt-36 pb-24 bg-[#EDF3F9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-full mx-auto text-center mb-10 leading-tight">
              Train open-source models — in Europe, without compromise.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-center mb-10">
              The fastest way to run private, open-source LLMs<br />
              — sovereign, green, and entirely in-region.
            </p>
            <div className="mb-6 flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
              >
                Apply for Early Access
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center max-w-xl mx-auto">
              No U.S. exposure. No lock-in. Just fast, secure, sovereign AI compute.<br />
              Built for open-source models like Mistral, LLaMA, and DeepSeek.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - with white background */}
      <section className="pt-20 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-900 mb-16 max-w-7xl mx-auto">
            If you&apos;re building open-source AI and need compliance, control, and simplicity<br />
            — we built Arctevia for you.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Feature 1 */}
            <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-gray-900">Enforced Sovereignty</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Jobs run only in Europe — with jurisdictional and cryptographic controls.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl mb-3">⚙️</div>
              <h3 className="text-lg font-semibold text-gray-900">Developer-Ready</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Launch models with ease using familiar open tooling — no DevOps needed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl mb-3">📜</div>
              <h3 className="text-lg font-semibold text-gray-900">Compliance, Clearly</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Designed to meet GDPR, with legal clarity and auditability from day one.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Feature 4 */}
            <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="text-lg font-semibold text-gray-900">Green by Default</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Powered by 100% renewable energy from Nordic sources — low carbon footprint.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl mb-3">🔓</div>
              <h3 className="text-lg font-semibold text-gray-900">Built on Open Standards</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Kubernetes. MLflow. Terraform. Full ownership, no vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section - light blue background */}
      <section className="pt-16 pb-16 bg-[#EDF3F9]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Popular Open Models
          </h2>
          <h3 className="text-lg text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Run open models with full freedom — no lock-in, no surveillance.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Model Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                LLaMA 2
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #Open-Source
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #7B
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #Quantized
                </span>
              </div>
              <button
                onClick={() => window.location.href='/models/llama-2'}
                className="bg-[#A9D6E5] text-[#1B3B6F] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
              >
                View Details
              </button>
            </div>

            {/* Model Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mistral
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #Open-Source
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #7B
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #Instruction-Tuned
                </span>
              </div>
              <button
                onClick={() => window.location.href='/models/mistral'}
                className="bg-[#A9D6E5] text-[#1B3B6F] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
              >
                View Details
              </button>
            </div>

            {/* Model Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                DeepSeek
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #Open-Source
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #7B
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                  #Coder
                </span>
              </div>
              <button
                onClick={() => window.location.href='/models/deepseek'}
                className="bg-[#A9D6E5] text-[#1B3B6F] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1B3B6F] hover:text-white transition duration-200 inline-block"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EDF3F9] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Arctevia. All rights reserved.</p>
          <p>Built with privacy and sustainability in mind.</p>
        </div>
      </footer>

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
