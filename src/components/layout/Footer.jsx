import React, { useState } from 'react';

const Footer = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const loadVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <footer className="bg-[#1B1B1B] text-gray-400 pt-16 pb-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Video Placeholder - Only loads YouTube when clicked */}
          <div className="relative bg-black/20 rounded-lg overflow-hidden">
            {videoLoaded ? (
              <iframe
                src="https://www.youtube.com/embed/your-video-id"
                className="w-full aspect-video"
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                className="w-full aspect-video bg-gray-800 flex items-center justify-center cursor-pointer group"
                onClick={loadVideo}
              >
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 text-red-600 mb-2 group-hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                  </svg>
                  <span className="text-gray-300 group-hover:text-white transition-colors">Click to load video</span>
                </div>
              </div>
            )}
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
                className="w-[100px] h-[100px] object-contain"
                loading="lazy"
              />
              <img 
                src="/assets/images/cii.webp" 
                alt="CII" 
                className="w-[100px] h-[100px] object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              FOLLOW US ON SOCIAL MEDIA
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[14px] text-gray-400 hover:text-red-600 transition-colors flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 text-gray-400">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-400 hover:text-red-600 transition-colors flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 text-gray-400">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                    </svg>
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[14px] text-gray-400 hover:text-red-600 transition-colors flex items-center gap-3">
                  <span className="flex items-center justify-center w-5 h-5 text-gray-400">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                    </svg>
                  </span>
                  YouTube
                </a>
              </li>
            </ul>
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