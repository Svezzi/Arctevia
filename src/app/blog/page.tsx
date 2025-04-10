'use client';

export default function BlogPage() {
  return (
    <div className="bg-[#EAF2F8] min-h-screen pt-24 pb-16">
      {/* Hero/Header Section */}
      <section className="bg-gradient-to-b from-[#1B3B6F] to-[#2a5ca3] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B3B6F] mb-6">Coming Soon</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Our blog is under construction. Check back soon for updates, insights, and news about Arctevia&apos;s progress!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="prose prose-lg max-w-none text-gray-700 text-center">
            <p className="mb-4">
              Our blog is coming soon with articles about sovereign compute, open-source AI, and sustainable infrastructure.
            </p>
            <p className="mt-4">
              Check back soon for insights, tutorials, and updates on Arctevia's development.
            </p>
            <p className="mt-8 text-sm">
              Want to contribute a guest post? Contact us at <a href="mailto:info@arctevia.com" className="text-blue-600 underline">info@arctevia.com</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 