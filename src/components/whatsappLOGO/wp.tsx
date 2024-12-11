import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export function WhatsAppLogo() {
  return (
    <div className="relative flex items-center justify-center w-24 h-24 bg-green-500 rounded-full shadow-lg">
      {/* Outer Circle */}
      <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-20"></div>

      {/* WhatsApp Icon */}
      <div className="relative flex flex-col items-center text-white">
        <MessageCircle className="w-12 h-12" />
        <Phone className="absolute bottom-2 right-2 w-4 h-4 bg-white text-green-500 rounded-full p-1" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <WhatsAppLogo />
    </div>
  );
}
