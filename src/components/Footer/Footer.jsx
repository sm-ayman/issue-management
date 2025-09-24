import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-600 shadow-inner mt-10 px-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-10 px-6 text-sm text-gray-200">
        {/* Company Info */}
        <div>
          <h3 className="font-semibold text-white mb-3">IssueFix</h3>
          <p>
            Simplifying issue tracking and employee management with an
            easy-to-use platform.
          </p>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Report an Issue
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-indigo-500 py-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} IssueFix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
