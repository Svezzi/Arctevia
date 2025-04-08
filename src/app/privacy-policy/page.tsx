'use client';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
      {/* Hero/Header Section */}
      <section className="bg-gradient-to-b from-[#1B3B6F] to-[#2a5ca3] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              At Arctevia, we are committed to protecting your privacy and handling your personal data responsibly.
            </p>
            <p className="mb-4">
              We do not collect or store any personal data beyond what is necessary to provide our services — such as responding to partner inquiries submitted through our contact form.
            </p>
            <p className="mb-4">
              All data is processed in accordance with the General Data Protection Regulation (GDPR). Any information you provide will be stored securely and never shared with third parties.
            </p>
            <p className="mb-4">
              You can request access to, correction of, or deletion of your personal data by contacting us at <a href="mailto:info@arctevia.com" className="text-blue-600 underline">info@arctevia.com</a>.
            </p>
            <p>
              This policy may be updated as our services evolve. Last updated: April 2025.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 