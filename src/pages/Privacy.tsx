import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { formatDateAU } from "@/lib/utils";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-dynamous-900/20 via-background to-dynamous-950/30 py-16 border-b border-dynamous-900/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
            </p>
            <div className="mt-8 text-sm text-gray-400">
              <span>Last updated: {formatDateAU()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Overview */}
            <div className="mb-12 p-6 bg-dynamous-900/10 border border-dynamous-800/30 rounded-lg">
              <p className="text-gray-300 text-lg leading-relaxed">
                Your privacy is important to us. This Privacy Policy outlines how we collect, use, store and protect your personal information in accordance with the Australian Privacy Principles under the Privacy Act 1988 (Cth).
              </p>
            </div>

            {/* Privacy sections */}
            <div className="space-y-12">
              
              {/* Section 1 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  1. Collection of Personal Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>We may collect personal information when you:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                    <li>Use our website</li>
                    <li>Contact us through forms or email</li>
                    <li>Subscribe to newsletters or updates</li>
                    <li>Purchase or enquire about products or services</li>
                  </ul>
                  <p>
                    The types of personal information we collect may include your name, email address, phone number, company name, and any other information you voluntarily provide.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  2. Use of Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>We use the personal information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                    <li>Provide and improve our products and services</li>
                    <li>Respond to enquiries and provide support</li>
                    <li>Send updates, newsletters or promotional materials (you can opt out at any time)</li>
                    <li>Analyse website usage and enhance user experience</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  3. Disclosure of Personal Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>We do not sell or trade your personal information. We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-400">
                    <li>Service providers who assist in operating our website or business</li>
                    <li>Legal authorities, if required by law</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  4. Storage and Security
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We take reasonable steps to protect your personal information from misuse, loss, unauthorised access, modification or disclosure. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  5. Access and Correction
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    You may request access to the personal information we hold about you and request corrections if necessary. Please contact us via the details below.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  6. Cookies and Analytics
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our website may use cookies and third-party analytics tools to track and analyse usage. This helps us improve site functionality and performance. You can disable cookies in your browser settings.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  7. Third-Party Links
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Our website may contain links to other websites. We are not responsible for the privacy practices of those sites.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  8. Changes to This Policy
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. The latest version will always be available on our website.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  9. Contact Us
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions or concerns about this Privacy Policy or how your personal information is handled, please contact us at:
                  </p>
                  <div className="bg-dynamous-900/20 p-4 rounded-lg border border-dynamous-800/30 mt-4">
                    <p className="text-dynamous-400 font-semibold">flowinternals</p>
                    <p className="text-gray-400">Email: <a href="mailto:flowinternals@gmail.com" className="text-dynamous-400 hover:text-dynamous-300 transition-colors">flowinternals@gmail.com</a></p>
                    <p className="text-gray-400">Website: <a href="https://flowinternals.com" className="text-dynamous-400 hover:text-dynamous-300 transition-colors">https://flowinternals.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 p-8 bg-gradient-to-r from-dynamous-900/20 to-dynamous-800/20 rounded-lg border border-dynamous-700/30 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Questions about our privacy practices?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're here to help. Contact our support team if you need clarification about how we handle your personal information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:flowinternals@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-dynamous-600 hover:bg-dynamous-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Contact Support
                </a>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-dynamous-600 text-dynamous-400 hover:bg-dynamous-600/10 font-semibold rounded-lg transition-all duration-200"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy; 