import React from 'react';
import { User, Code, Shield, Layers, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-dark to-darker border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About The Founder</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <User className="text-primary" /> Great Alex Esekhegbe
            </h3>
            <h4 className="text-xl text-emerald-400 font-medium">Full-Stack Software Engineer & Cybersecurity Expert</h4>
            
            <p className="text-gray-400 leading-relaxed">
              I am an innovative UX/UI Designer and Front-End Developer skilled in creating dynamic, user-centered digital experiences using React.js and Adobe Experience Manager (AEM). I blend creativity with technical precision to deliver responsive, accessible, and high-performing web interfaces.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              With a strong background in backend architecture and cybersecurity, I specialize in building secure SaaS platforms, automated trading systems, and fintech solutions. My approach ensures that every product is not only visually stunning but also fortified against modern digital threats.
            </p>

            <div className="pt-4">
              <h5 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" /> Key Highlights
              </h5>
              <ul className="space-y-2 text-sm text-gray-400">
                 <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  Developed automated trading bot platforms for MT5 and binary options.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  Designed security-first architectures for fintech systems, securing APIs and payment gateways.
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2"></span>
                  Skilled in React.js, Python, Node.js, and AEM for scalable, component-driven design.
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all group">
                <Shield className="w-8 h-8 text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2">Cybersecurity</h4>
                <p className="text-xs text-gray-400">Vulnerability Assessment, VPS Hardening, API Security, Risk Mitigation.</p>
             </div>

             <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group">
                <Code className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2">Full-Stack Dev</h4>
                <p className="text-xs text-gray-400">React.js, Node.js, Python, PHP, SaaS Architecture, Automated Systems.</p>
             </div>

             <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all group">
                <Layers className="w-8 h-8 text-purple-500 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2">UX/UI Design</h4>
                <p className="text-xs text-gray-400">Figma, Adobe XD, Prototyping, Responsive Design Systems.</p>
             </div>

             <div className="bg-gray-800/60 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-all group">
                <Award className="w-8 h-8 text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold mb-2">CMS & Content</h4>
                <p className="text-xs text-gray-400">Adobe Experience Manager (AEM), Contentful, JSON Structuring, SEO.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;