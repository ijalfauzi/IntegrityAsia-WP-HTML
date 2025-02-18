import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-gray-400 pt-16 pb-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* YouTube Video */}
          <div className="relative bg-black/20 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              className="w-full aspect-video"
              allowFullScreen
            ></iframe>
          </div>

          {/* Headquarters & Associated Companies */}
          <div className="space-y-12">
            {/* Headquarters */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                HEADQUARTERS
              </h3>
              <div className="space-y-1 text-[14px]">
                <p className="text-gray-500 uppercase mb-1">Address</p>
                <p>JI. DR Tarumangara 5G Citarum Bandung, 57418 Indonesia</p>
                <p className="text-gray-500 uppercase mt-4 mb-1">Phone</p>
                <p>+62 21 - 7568277</p>
                <p className="text-gray-500 uppercase mt-4 mb-1">Email</p>
                <p>info@integrity-asia.com</p>
              </div>
            </div>

            {/* Associated Companies */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                ASSOCIATED COMPANIES
              </h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://integrity-indonesia.com" 
                   className="text-[11px] hover:text-red-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  integrity-indonesia.com
                </a>
                <a href="https://integrity-malaysia.com" 
                   className="text-[11px] hover:text-red-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  integrity-malaysia.com
                </a>
                <a href="https://integrity-thailand.com" 
                   className="text-[11px] hover:text-red-600 transition-colors inline-flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  integrity-thailand.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Member Of */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              MEMBER OF
            </h3>
            <div className="flex gap-6">
              <img 
                src="/assets/images/pbsa.webp" 
                alt="PBSA" 
                className="h-8 w-auto"
              />
              <img 
                src="/assets/images/psis.webp" 
                alt="PSIS" 
                className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              FOLLOW US ON SOCIAL MEDIA
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src="/assets/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src="/assets/images/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <img src="/assets/images/youtube.svg" alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Title */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              SUBSCRIBE NEWSLETTER
            </h3>
            <p className="text-[14px]">
              Get the latest updates and industry insights
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col justify-end">
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#2B2B2B] text-white px-4 py-3 rounded text-[14px]
                           placeholder:text-gray-500 focus:outline-none 
                           focus:ring-2 focus:ring-red-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded text-[14px]
                         hover:bg-red-700 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="text-[14px]">
            Copyright © INTEGRITY - All Rights Reserved © 2023 |{' '}
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Notice</a> |{' '}
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;