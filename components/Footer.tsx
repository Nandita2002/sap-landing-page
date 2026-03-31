"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold">Rise Infotech</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Providing industry-ready SAP training with real-time projects and mentorship.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-1">
            <li><a href="#modules">Modules</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">📞 +91 XXXXXXXX</p>
          <p className="text-gray-400 text-sm">📧 info@riseinfotech.in</p>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Rise Infotech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;