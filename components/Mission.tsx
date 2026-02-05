import React from 'react';
import { ShieldCheck, Target, Zap } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-darker to-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Mission</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-100">
              Empowering Your Digital Future
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              At <span className="text-primary font-semibold">Alex Tech Enterprise</span>, our mission is to bridge the gap between innovation and security. We believe that true digital transformation requires a foundation of trust. 
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              We are dedicated to providing world-class website design and cybersecurity solutions that not only elevate your brand but also protect your most valuable assets. Your growth is our priority, and your security is our promise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
              <h4 className="text-white font-bold mb-2">Uncompromised Security</h4>
              <p className="text-sm text-gray-400">Protecting your business with enterprise-grade defense strategies.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors">
              <Zap className="w-10 h-10 text-yellow-400 mb-4" />
              <h4 className="text-white font-bold mb-2">Rapid Innovation</h4>
              <p className="text-sm text-gray-400">Delivering cutting-edge web solutions that keep you ahead of the curve.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors sm:col-span-2">
              <Target className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-white font-bold mb-2">Client-Centric Focus</h4>
              <p className="text-sm text-gray-400">Tailoring every solution to meet your unique business objectives and challenges.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;