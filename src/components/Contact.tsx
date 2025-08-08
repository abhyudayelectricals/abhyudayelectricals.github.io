import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('validation');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      if (!formspreeId) {
        console.error('Formspree form ID not configured');
        setSubmitStatus('error');
        return;
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: message,
          _subject: `New Contact Form Submission from ${name}`,
          _replyto: email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1.5 border text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1.5 border text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1.5 border text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 99999 99999"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={3}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1.5 border text-sm"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="text-green-600 text-xs font-medium">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-xs font-medium">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              {submitStatus === 'validation' && (
                <div className="text-red-600 text-xs font-medium">
                  Please fill in all fields before submitting.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 rounded-lg shadow-xl p-6 text-white">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              {/* Google Map - Full Width */}
              <div className="w-full">
                <div className="h-[160px] w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.784785527996!2d77.41458597581115!3d27.8163946761202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39733b3f2c62330d%3A0xd69c5a728cfcb636!2sAbhyuday%20Electricals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sde!4v1732488230743!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm">Address</h4>
                    <p className="text-gray-300 text-sm break-words">
                      Abhyuday Electricals Pvt. Ltd.
                      <br />
                      N-6, UPSIDC Industrial Area
                      <br />
                      Kosi Kotwan, Uttar Pradesh 281403, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-500 mr-2" />
                      <div>
                        <h4 className="font-semibold text-sm inline mr-2">Phone:</h4>
                        <span className="text-gray-300 text-sm">+91 (98) 480-69384</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-500 mr-2" />
                      <div>
                        <h4 className="font-semibold text-sm inline mr-2">Email:</h4>
                        <a href={`mailto:${'aps@abhyudayelectricals.com'}`} className="text-gray-300 text-sm break-all">
                          {'aps'}@{'abhyudayelectricals.com'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}