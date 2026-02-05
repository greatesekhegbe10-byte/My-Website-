import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Alex Tech Enterprise
            </span>
            <p className="mt-4 text-gray-400 text-sm">
              Your one-stop destination for cutting-edge technology and unparalleled service.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400 text-sm">{CONTACT_INFO.address}</li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-white text-sm">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="text-gray-400 text-sm">{CONTACT_INFO.phone}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Social Media</h3>
            <div className="mt-4 flex space-x-6">
              <a 
                href={CONTACT_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                title="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href={CONTACT_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                title="X (Twitter)"
              >
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Alex Tech Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;