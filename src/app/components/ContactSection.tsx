import { motion } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Message: ${formData.message}
    `);
    
    // Open default email client
    window.location.href = `mailto:cosmuquantaa@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-3">
            Let's Talk
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            Ready to transform your business with autonomous intelligence? Get in touch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-2xl border border-[#00A8B5]/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-white mb-2 uppercase tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg transition-all duration-200 focus:outline-none text-white ${
                    focused === 'name'
                      ? 'border-[#00A8B5] shadow-lg'
                      : 'border-white/10'
                  }`}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-white mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg transition-all duration-200 focus:outline-none text-white ${
                    focused === 'email'
                      ? 'border-[#00A8B5] shadow-lg'
                      : 'border-white/10'
                  }`}
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold text-white mb-2 uppercase tracking-wide">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocused('company')}
                  onBlur={() => setFocused(null)}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg transition-all duration-200 focus:outline-none text-white ${
                    focused === 'company'
                      ? 'border-[#00A8B5] shadow-lg'
                      : 'border-white/10'
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-white mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={3}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg transition-all duration-200 focus:outline-none resize-none text-white ${
                    focused === 'message'
                      ? 'border-[#00A8B5] shadow-lg'
                      : 'border-white/10'
                  }`}
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-white text-black rounded-lg font-black text-base shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              {/* Book a Schedule Button */}
              <motion.a
                href="https://cal.com/cosmuquantaa-pmzt7y/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-3 bg-[#00A8B5] text-white rounded-lg font-black text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Clock className="w-5 h-5" />
                Book a Schedule
              </motion.a>
            </form>
          </motion.div>

          {/* Right - Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-[#00A8B5]/20">
              <h3 className="text-2xl font-black text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#002D72] to-[#00A8B5] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Email</h4>
                    <p className="text-white/70 text-sm">cosmuquantaa@gmail.com</p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#002D72] to-[#00A8B5] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Address</h4>
                    <p className="text-white/70 text-sm">1) Madhapur, Hyderabad, Telangana</p>
                    <p className="text-white/70 text-sm">2) Balapur, Hyderabad, Telangana</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#002D72] to-[#00A8B5] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">Office Hours (Hybrid)</h4>
                    <p className="text-white/70 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-[#00A8B5]/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5826799753746!2d78.39062931487768!3d17.43507218805259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d6a3c3e26b%3A0x6c5c0c6c0c6c0c6c!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Madhapur, Hyderabad"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}