'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
      {/* Hero/Header Section */}
      <section className="bg-gradient-to-b from-[#1B3B6F] to-[#2a5ca3] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Arctevia: Sovereign Compute<br /> for the Future of AI</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B3B6F] mb-6">Introduction</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Arctevia is offering sovereign compute infrastructure tailored for Europe's AI-driven future.
            </p>
            <p className="mb-4">
              We are committed to providing secure, scalable, and environmentally sustainable computing 
              solutions powered entirely by 100% renewable energy from the Nordic region. At Arctevia, 
              we prioritize data sovereignty and privacy, ensuring that AI developers can confidently 
              build, train, and deploy their models without compromise.
            </p>
            <p className="mb-4">
              Our platform enables companies, research labs, and developers to access high-performance 
              AI infrastructure that aligns with European regulations and offers a more sustainable 
              alternative to traditional cloud services.
            </p>
          </div>
        </section>

        {/* Section 2: Our Mission */}
        <section className="mb-16 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-[#1B3B6F] mb-6">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              At Arctevia, our mission is clear:
            </p>
            <p className="mb-4">
              To empower AI innovation by providing sovereign compute infrastructure that prioritizes 
              privacy, sustainability, and data security. We aim to democratize access to cutting-edge 
              AI technology, offering transparent, green, and secure compute resources for AI startups, 
              enterprises, and researchers across Europe and beyond.
            </p>
            <p className="mb-4">
              Our Nordic-based infrastructure leverages the region's renewable energy sources—hydropower, 
              wind, and geothermal—to ensure that AI workloads are executed in the most energy-efficient, 
              environmentally responsible way possible.
            </p>
            <p className="mb-4">
              We believe the future of AI depends on trust, transparency, and data protection — values we're committed to as we grow.
            </p>
          </div>
        </section>

        {/* Section 3: Our Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B3B6F] mb-6">Our Vision</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              We're building Arctevia to support the next generation of AI infrastructure — helping teams deploy and scale their models on trusted, sustainable infrastructure.
            </p>
            <p className="mb-4">
              Our goal is to support Europe's growing demand for sovereign AI infrastructure — offering a privacy-first, sustainable foundation for innovation.
            </p>
            <p className="mb-4">
              Through innovation and commitment, we aim to be a trusted partner for companies seeking secure, scalable, and sustainable compute for their AI projects.
            </p>
          </div>
        </section>

        {/* Section 4: Core Values */}
        <section className="mb-16 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-[#1B3B6F] mb-6">Core Values</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              At Arctevia, our values define how we do business:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Sovereignty:</span> We believe that every AI developer should have control over their data. 
                That's why we focus on offering AI compute infrastructure that respects data sovereignty, 
                especially under EU jurisdiction.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Privacy:</span> Data privacy isn't just a requirement—it's a promise. 
                We operate fully GDPR-compliant and make sure that your data remains secure, private, 
                and free from external surveillance.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Sustainability:</span> Our infrastructure is powered by 100% renewable energy sources. 
                From hydropower to wind and geothermal, we are committed to reducing the carbon footprint 
                of the AI industry while providing scalable and reliable compute power.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Transparency:</span> No hidden fees, no surprises. 
                We believe in offering clear, predictable pricing so that our customers can focus on 
                their work, not complicated bills.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Innovation:</span> We continuously innovate to provide the best solutions for AI compute. 
                Whether it's offering the latest open-source AI models or improving our infrastructure, 
                we are committed to pushing the boundaries of what AI can achieve.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Why Choose Arctevia */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1B3B6F] mb-6">Why Choose Arctevia?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Arctevia isn't just another cloud service provider. Here's why you should choose us for your AI compute needs:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">100% Renewable Energy</span> – Powered by hydropower, 
                geothermal, and wind, our infrastructure is built for the future.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Data Sovereignty</span> – Your data is always under your control, 
                ensuring complete privacy and protection from external surveillance.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Optimized for Open-Source AI</span> – We specialize in open-source models 
                like LLaMA, Mistral, and DeepSeek, giving you the flexibility to run the latest AI 
                technologies without being locked into proprietary systems.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">European Compliance</span> – Fully GDPR-compliant, ensuring that 
                you meet EU data protection regulations effortlessly.
              </li>
              <li className="pl-6 relative">
                <span className="absolute left-0 font-bold text-[#1B3B6F]">•</span>
                <span className="font-semibold text-[#1B3B6F]">Green AI</span> – With an eco-friendly approach, 
                Arctevia enables your AI projects to be both powerful and sustainable.
              </li>
            </ul>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="mb-16 bg-gradient-to-b from-white to-[#A9D6E5] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#1B3B6F] mb-4">
            Interested in partnering with Arctevia?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We're actively exploring partnerships with data centers, AI startups, and researchers who share our commitment to privacy-first, sustainable AI infrastructure.
            
            Reach out to discuss how we can collaborate and shape the future of sovereign AI compute — together.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-[#1B3B6F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2a5ca3] transition-colors inline-block"
          >
            Request Intro Call
          </button>
        </section>

        {/* Image Section (Nordic landscapes, renewable energy) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <img src="/PHOTOS/Hydropower image.png" alt="Nordic hydropower" className="w-full h-48 object-cover rounded-xl"/>
          <img src="/PHOTOS/Wind farm image.png" alt="Wind farm" className="w-full h-48 object-cover rounded-xl"/>
          <img src="/PHOTOS/Geothermal energy image.png" alt="Geothermal energy" className="w-full h-48 object-cover rounded-xl"/>
        </section>

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