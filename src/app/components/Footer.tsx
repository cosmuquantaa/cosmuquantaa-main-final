import { motion } from 'motion/react';
import { useState } from 'react';

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToProduct = (path: string) => {
    window.location.href = path;
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#002D72] to-[#001845] text-white overflow-hidden border-t border-[#00A8B5]/20">
        {/* Large outline logo background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 200 200" className="text-white">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-[120px] font-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              CQ
            </text>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-3xl font-black">CosmuQuantaa</span>
                  <div className="w-2 h-2 rounded-full bg-[#00A8B5]"></div>
                </div>
                <p className="text-white/70 leading-relaxed max-w-md mb-6">
                  Pioneering autonomous intelligence systems that transform businesses through intelligent automation and autonomous decision-making.
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/company/cosmuquantaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-black text-lg mb-6 uppercase tracking-wide">Solutions</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Custom Precision Fine Tuning', id: 'llm' },
                  { label: 'Code Review Services', id: 'code' },
                  { label: 'Quick Commerce', id: 'quickify' },
                  { label: 'CosmuBuilder', id: 'placeholder1' },
                  { label: 'Intelligent Document Analysis', id: 'placeholder2' }
                ].map((item, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => navigateToProduct(item.id)}
                      className="text-white/70 hover:text-[#00A8B5] transition-colors duration-200 text-left"
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-black text-lg mb-6 uppercase tracking-wide">Company</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Vision', id: 'vision' },
                  { label: 'Team', id: 'team' },
                  { label: 'Contact', id: 'contact' }
                ].map((item, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      className="text-white/70 hover:text-[#00A8B5] transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-white/50 text-sm">
              © 2025 CosmuQuantaa. All rights reserved.
            </p>
            <div className="flex gap-8">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTermsModal(true)}
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </button>
            </div>
          </motion.div>
        </div>

        {/* Gradient accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#002D72] via-[#00A8B5] to-[#002D72]"></div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-3xl max-h-[80vh] overflow-y-auto p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-black text-black">Privacy Policy</h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 text-black">
              <section>
                <h3 className="text-xl font-bold mb-2">Introduction</h3>
                <p className="text-black/70 leading-relaxed">
                  We value your privacy and are committed to maintaining your trust. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our website and services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">No Data Collection</h3>
                <p className="text-black/70 leading-relaxed">
                  We do not collect, store, or process any personal data or user-submitted code. When you use our code analysis features, your code is processed in real-time using AI models, but it is not saved or retained on our servers or in any database.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Third-Party Services</h3>
                <p className="text-black/70 leading-relaxed">
                  Our platform may utilize third-party services (such as cloud hosting or analytics providers). These services may collect information as described in their respective privacy policies. We do not share any user data with third parties under our current operating model.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Cookies & Tracking</h3>
                <p className="text-black/70 leading-relaxed">
                  Our website does not use cookies or any form of tracking technologies to collect personal data or monitor your activity.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Children's Privacy</h3>
                <p className="text-black/70 leading-relaxed">
                  Our services are not directed to children under the age of 13. We do not knowingly collect any personal information from children.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Policy Updates</h3>
                <p className="text-black/70 leading-relaxed">
                  We may update this Privacy Policy from time to time. If we make significant changes, we will notify users by updating the date at the top of this page or by providing a prominent notice on our website.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-black/70 leading-relaxed">
                  For questions or concerns about our privacy practices, please contact us at <a href="mailto:CosmuQuantaa@gmail.com" className="text-[#00A8B5] hover:underline">CosmuQuantaa@gmail.com</a>.
                </p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-black/90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-3xl max-h-[80vh] overflow-y-auto p-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-black text-black">Terms of Service</h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 text-black">
              <section>
                <h3 className="text-xl font-bold mb-2">Introduction</h3>
                <p className="text-black/70 leading-relaxed">
                  Welcome to CosmuQuantaa. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Use of Services</h3>
                <p className="text-black/70 leading-relaxed">
                  You may use our services only for lawful purposes and in accordance with these terms. You are responsible for ensuring that your use of our services does not violate any laws, regulations, or third-party rights.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Intellectual Property</h3>
                <p className="text-black/70 leading-relaxed">
                  All content on our website, including but not limited to text, graphics, logos, and software, is the property of CosmuQuantaa and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written permission.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Limitation of Liability</h3>
                <p className="text-black/70 leading-relaxed">
                  CosmuQuantaa is not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Indemnification</h3>
                <p className="text-black/70 leading-relaxed">
                  You agree to indemnify and hold CosmuQuantaa and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our services or violation of these terms.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Governing Law</h3>
                <p className="text-black/70 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                <p className="text-black/70 leading-relaxed">
                  For questions or concerns about our terms of service, please contact us at <a href="mailto:CosmuQuantaa@gmail.com" className="text-[#00A8B5] hover:underline">CosmuQuantaa@gmail.com</a>.
                </p>
              </section>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10">
              <button
                onClick={() => setShowTermsModal(false)}
                className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-black/90 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}