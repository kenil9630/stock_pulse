import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 StockPulse AI. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}