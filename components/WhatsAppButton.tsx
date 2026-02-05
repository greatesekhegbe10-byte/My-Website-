import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={CONTACT_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white fill-current" />
      <span className="absolute -top-10 right-0 bg-white text-gray-900 text-xs px-2 py-1 rounded shadow-md opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none group-hover:opacity-100">
        Chat with us!
      </span>
    </a>
  );
};

export default WhatsAppButton;
