import React from 'react';
import { CheckCircle, Lock, Monitor, Server } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-darker relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Combining technical excellence with creative innovation to deliver products that stand out and stay secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                    <Monitor className="text-blue-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">High-Performance Web Development</h3>
                <p className="text-gray-400 mb-6">
                    We build responsive, user-centered digital experiences using React.js and modern CMS platforms. From corporate websites to complex SaaS dashboards, we ensure speed, accessibility, and scalability.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-emerald-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-6">
                    <Lock className="text-emerald-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cybersecurity & Risk Management</h3>
                <p className="text-gray-400 mb-6">
                    Security is not an afterthought. We implement security-first architectures, hardening VPS infrastructure, securing APIs, and providing comprehensive penetration testing to protect your assets.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6">
                    <Server className="text-purple-400 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fintech & Automated Systems</h3>
                <p className="text-gray-400 mb-6">
                    Specialized in developing automated trading bots, subscription-based fintech platforms, and secure payment integrations. We turn complex logic into reliable, automated revenue streams.
                </p>
            </div>
        </div>

        {/* Competitive Advantage */}
        <div className="mt-20 bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">How We Differ From The Competition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                        <h4 className="text-white font-bold text-lg">Dual Expertise</h4>
                        <p className="text-gray-400 text-sm mt-1">Unlike standard agencies, we possess deep expertise in both creative UX/UI Design and hardcore Cybersecurity. We make things look good AND make them unbreakable.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                        <h4 className="text-white font-bold text-lg">Production-Grade Quality</h4>
                        <p className="text-gray-400 text-sm mt-1">We don't use generic templates. We build custom, component-driven architectures (React, AEM) designed for enterprise scalability from day one.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                        <h4 className="text-white font-bold text-lg">Business-First Logic</h4>
                        <p className="text-gray-400 text-sm mt-1">We understand business models. Whether it's a trading bot or an e-commerce store, we optimize for conversion, revenue retention, and operational efficiency.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                        <h4 className="text-white font-bold text-lg">Seamless Support</h4>
                        <p className="text-gray-400 text-sm mt-1">We provide ongoing documentation, staff training, and 24/7 AI-assisted support to ensure you are never left in the dark.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;