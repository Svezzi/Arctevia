'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, CheckCircle, Settings, Lock, Brain, Radio, DollarSign, X } from 'lucide-react';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  // Define sections for both the sidebar and content
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started with Arctevia',
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Arctevia offers a simple, secure way to run open-source AI models on Nordic infrastructure.
            This guide walks you through setup and launching your first job in minutes.
          </p>
          <p className="text-gray-600 mb-4">
            Create an account, set up your API key, choose a model from our supported list, and submit your first job using either the web interface or CLI.
          </p>
          <div className="mt-6">
            <Link 
              href="/submit-job" 
              className="inline-flex items-center text-[#1B3B6F] font-medium hover:text-[#A9D6E5] transition-colors"
            >
              👉 Submit your first job →
            </Link>
          </div>
        </>
      )
    },
    {
      id: 'job-submission',
      title: 'How Job Submission Works',
      icon: <Settings className="w-5 h-5 text-gray-500" />,
      content: (
        <>
          <p className="text-gray-600 mb-4">
            When you submit a job, Arctevia allocates GPU resources and prepares the environment for your selected model.
            Jobs are queued and executed based on your configuration and current availability.
          </p>
          <p className="text-gray-600 mb-4">
            You can track progress in your dashboard or via API.
            Once a job completes, output is securely stored and usage metrics help you track costs.
          </p>
          <div className="mt-6">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center text-[#1B3B6F] font-medium hover:text-[#A9D6E5] transition-colors"
            >
              👉 View job dashboard →
            </Link>
          </div>
        </>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Handling',
      icon: <Lock className="w-5 h-5 text-blue-500" />,
      content: (
        <>
          <p className="text-gray-600 mb-4">
            At Arctevia, data sovereignty is a core principle.
          </p>
          <p className="text-gray-600 mb-4">
            Your data <strong>never leaves the Nordic region</strong> unless you explicitly allow it.
            We never inspect, monitor, or analyze job contents — only what's needed to run your workload.
          </p>
          <p className="text-gray-600 mb-4">
            Data is encrypted in transit and at rest.
            You can choose to auto-delete outputs immediately after jobs complete, or store them securely in your private environment.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-4">
            <p className="text-sm text-blue-700">
              ✅ Arctevia is ISO 27001 certified and fully compliant with GDPR for all European customers.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'models',
      title: 'Supported Models & Compatibility',
      icon: <Brain className="w-5 h-5 text-purple-500" />,
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Arctevia supports a growing range of open-source models — from small and efficient (like Phi-2) to large-scale (like LLaMA 2 70B and Falcon 180B).
          </p>
          <p className="text-gray-600 mb-4">
            Each model includes optimized presets for common workloads (chat, code generation, summarization), with the option to customize configurations as needed.
          </p>
          <div className="mt-6">
            <Link 
              href="/models" 
              className="inline-flex items-center text-[#1B3B6F] font-medium hover:text-[#A9D6E5] transition-colors"
            >
              👉 Browse supported models →
            </Link>
          </div>
        </>
      )
    },
    {
      id: 'infrastructure',
      title: 'Partner Infrastructure & Regions',
      icon: <Radio className="w-5 h-5 text-indigo-500" />,
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Arctevia operates exclusively on infrastructure hosted in the Nordic region — including 🇮🇸 Iceland, 🇳🇴 Norway, and 🇫🇮 Finland — powered by 100% renewable energy.
          </p>
          <p className="text-gray-600 mb-4">
            Our partnerships with Nordic cloud providers ensure:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 pl-2">
            <li>High availability</li>
            <li>Low-latency access</li>
            <li>Strong compliance with EU regulations</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mt-4">
            <p className="text-sm text-green-700">
              🌱 By running in the Nordics, your AI workloads can have a carbon footprint up to 93% lower than those on standard clouds.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'pricing',
      title: 'Pricing & Credits',
      icon: <DollarSign className="w-5 h-5 text-amber-500" />,
      content: (
        <>
          <p className="text-gray-600 mb-4">
            Arctevia uses transparent, usage-based pricing — no hidden fees.
            You only pay for the GPU hours you consume, with rates based on GPU type and model size.
          </p>
          <p className="text-gray-600 mb-4">
            🎁 <strong>New users receive €50 in credits</strong> to get started.
            Academic teams, open-source developers, and public sector orgs may qualify for special pricing.
          </p>
          <div className="mt-6">
            <Link 
              href="/pricing" 
              className="inline-flex items-center text-[#1B3B6F] font-medium hover:text-[#A9D6E5] transition-colors"
            >
              👉 View pricing details →
            </Link>
          </div>
        </>
      )
    }
  ];
  
  const toggleSection = (id: string) => {
    if (activeSection === id) {
      setActiveSection(null);
    } else {
      setActiveSection(id);
      // Scroll to section when clicked in mobile view
      const element = document.getElementById(id);
      if (element && window.innerWidth < 768) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Desktop - Two column layout with sidebar */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Hidden on mobile */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="sticky top-28 bg-white shadow-md rounded-xl p-4">
              <h2 className="text-lg font-semibold text-[#1B3B6F] mb-4">Contents</h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`flex items-center p-2 rounded-lg text-sm ${
                          activeSection === section.id
                            ? 'bg-[#EAF2F8] text-[#1B3B6F] font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        } transition-colors`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <span className="mr-2">{section.icon}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <div className="max-w-3xl mx-auto py-12">
              {/* Page Title */}
              <h1 className="text-4xl font-bold text-[#1B3B6F] mb-6">Documentation</h1>
              
              {/* Subheading / Intro */}
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Welcome to the Arctevia documentation. Find guides, tutorials, and API references to help you get started with our sovereign compute platform.
                </p>
                <p className="mb-4">
                  Our documentation is currently being developed. We&apos;ll update this section soon with detailed information on how to use Arctevia for your AI projects.
                </p>
              </div>
              
              {/* Documentation Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={section.id}>
                    {index > 0 && <hr className="border-t border-gray-200 my-8" />}
                    <div 
                      id={section.id}
                      className="bg-white shadow-md p-6 rounded-xl mb-6 scroll-mt-28"
                    >
                      {/* Section Header */}
                      <div 
                        className="flex items-center gap-3 mb-4 cursor-pointer md:cursor-default"
                        onClick={() => toggleSection(section.id)}
                      >
                        <span className="flex-shrink-0">{section.icon}</span>
                        <h2 className="text-xl font-semibold text-[#1B3B6F]">{section.title}</h2>
                        <button className="ml-auto md:hidden">
                          <ChevronRight 
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              activeSection === section.id ? 'rotate-90' : ''
                            }`} 
                          />
                        </button>
                      </div>
                      
                      {/* Section Content - Always visible on desktop, toggle on mobile */}
                      <div className={`md:block ${activeSection === section.id || activeSection === null ? 'block' : 'hidden'}`}>
                        {section.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Section - Located near the end of the component */}
              <div className="bg-white p-6 rounded-xl shadow-md mt-12">
                <h2 className="text-xl font-semibold text-[#1B3B6F] mb-4">Need Help?</h2>
                <p className="text-gray-600 mb-6">
                  Reach out to us at{' '}
                  <a href="mailto:hello@arctevia.com" className="text-[#1B3B6F] font-medium hover:underline">
                    hello@arctevia.com
                  </a>{' '}
                  or join our{' '}
                  <a href="https://discord.gg/arctevia" className="text-[#1B3B6F] font-medium hover:underline" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#A9D6E5] text-[#1B3B6F] px-6 py-3 rounded-xl font-semibold hover:bg-[#1B3B6F] hover:text-white transition-colors inline-block"
                >
                  👉 Get Early Access →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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