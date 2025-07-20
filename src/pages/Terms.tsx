import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { formatDateAU } from "@/lib/utils";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-dynamous-900/20 via-background to-dynamous-950/30 py-16 border-b border-dynamous-900/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These terms govern your use of our website and services. Please read them carefully before using our platform.
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
                These Terms and Conditions ("Terms") govern your use of this website. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </div>

            {/* Terms sections */}
            <div className="space-y-12">
              
              {/* Section 1 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  1. General Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    This website is operated in Australia and complies with Australian Consumer Law and other applicable laws and regulations.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  2. Use of Website
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    You agree to use the website for lawful purposes only. You must not use the website in any way that causes or is likely to cause damage, disruption, or impairment to the site or its availability.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  3. Intellectual Property
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    All content on this website, including text, images, logos, graphics, and software, is the property of flowinternals or its licensors. You may not copy, reproduce, or distribute any part of this website without prior written consent.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  4. Product and Service Information
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Any product or service descriptions, prices, or availability shown on this website are subject to change without notice. We reserve the right to modify or discontinue any offerings at any time.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  5. Disclaimer
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    While we strive to ensure the accuracy of information on this website, we do not guarantee that the content is current, complete or error-free. The website is provided on an "as is" basis without warranties of any kind.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  6. Limitation of Liability
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    To the fullest extent permitted by law, flowinternals will not be liable for any loss, damage, or expense incurred by you in connection with your use of this website or reliance on its content.
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
                    This website may contain links to other websites. We do not control and are not responsible for the content or privacy practices of those sites.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  8. User-Generated Content
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you submit or post content (e.g., reviews, comments), you grant us a non-exclusive, royalty-free licence to use, reproduce, and display that content on the website or related platforms.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  9. Termination
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may suspend or terminate your access to the website if you breach these Terms or use the website in a way that is unlawful or harmful.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  10. Governing Law
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    These Terms are governed by the laws of New South Wales, Australia. By using the website, you submit to the exclusive jurisdiction of the courts of that state.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  11. Changes to Terms
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    We may update these Terms at any time. Continued use of the website following any changes indicates your acceptance of the new Terms.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="border-l-4 border-dynamous-600 pl-6">
                <h2 className="text-2xl font-bold text-dynamous-400 mb-4">
                  12. Contact Us
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    If you have any questions about these Terms and Conditions, please contact us at:
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
                Questions about our terms and conditions?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're here to help clarify any aspects of our terms and conditions. Contact our support team for assistance.
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

export default Terms; 