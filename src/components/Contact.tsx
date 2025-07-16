import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Link2 } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'messages'), form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error sending message!');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'SPAL84453@gmail.com',
      href: 'mailto:SPAL84453@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-6000544527',
      href: 'tel:+916000544527'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jammu, Punjab, Visakhapatnam, IN',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/chand6907',
      color: 'hover:bg-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/chand6907',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:SPAL84453@gmail.com',
      color: 'hover:bg-red-600'
    },
    {
      icon: Link2, // Use lucide-react's Link2 icon for Linktree
      label: 'Linktree',
      href: 'https://linktr.ee/pc6907',
      color: 'hover:bg-green-400'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            LET'S CONNECT 🤝
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            I'd love to hear from you! Feel free to reach out to me via email or connect with me on my social profiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:from-cyan-600 group-hover:to-purple-700 transition-all duration-300">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{contact.label}</p>
                        <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
              {success && <p className="text-green-500 text-center mt-4">Message sent!</p>}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-6 text-white">Connect with me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400/50 ${social.color} transition-all duration-300 group hover:transform hover:scale-110`}
                >
                  <IconComponent size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2025 Chand. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;