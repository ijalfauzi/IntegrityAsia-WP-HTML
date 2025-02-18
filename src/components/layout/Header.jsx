import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';

const ResponsiveLogo = () => (
  <img 
    src="/assets/images/logo.webp"
    srcSet="/assets/images/logo-small.webp 128w, /assets/images/logo.webp 256w"
    sizes="(max-width: 768px) 128px, 256px"
    width={128}
    height={40}
    alt="Integrity Asia"
    className="h-auto w-32 max-w-32"
  />
);

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState(null);
  const searchInputRef = useRef(null);
  const menuRef = useRef(null);
  const searchButtonRef = useRef(null);

  const menuItems = {
    'About Us': {
      type: 'dropdown',
      items: [
        'Our Vision And Mission',
        'Our People',
        'Anti-Bribery And Corruption Policy',
        'Quality Policy',
        'Information Security Policy'
      ]
    },
    'Our Expertise': {
      type: 'mega',
      items: [
        {
          title: 'PREVENTION',
          items: [
            'EMPLOYMENT BACKGROUND SCREENING',
            'DUE DILIGENCE',
            'REGULATORY CONSULTING & TRAINING'
          ]
        },
        {
          title: 'DETECTION',
          items: [
            'WHISTLEBLOWING SYSTEM',
            'MYSTERY SHOPPING',
            'MARKET SURVEY AND INSPECTION'
          ]
        },
        {
          title: 'MITIGATION',
          items: [
            'AUDIT & FRAUD INVESTIGATION',
            'INSURANCE INVESTIGATION',
            'ASSET AND SKIP TRACING',
            {
              title: 'BRAND PROTECTION',
              items: [
                'TRADEMARK INVESTIGATION',
                'NON-USE INVESTIGATION',
                'ANTI-COUNTERFEITING',
                'PARALLEL TRADING INVESTIGATION'
              ]
            }
          ]
        }
      ]
    },
    'Our Coverage': { type: 'link' },
    'Newsroom': {
      type: 'dropdown',
      items: ['Articles', 'Company News']
    },
    'Join Us': {
      type: 'dropdown',
      items: ['Opportunities', 'Freelancer', 'Partnership', 'Franchise']
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setActiveSubmenu(null);
        setActiveNestedMenu(null);
      }
      if (isSearchOpen && !searchInputRef.current?.contains(event.target) 
          && !searchButtonRef.current?.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  const SearchForm = () => {
    const searchButtonRect = searchButtonRef.current?.getBoundingClientRect();
    const rightOffset = searchButtonRect ? window.innerWidth - searchButtonRect.right : 0;

    return (
      <div 
        className={`
          absolute top-full right-0 bg-white rounded-lg shadow-lg overflow-hidden
          transition-all duration-200 ease-in-out z-50
          ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
        style={{ right: `${rightOffset}px` }}
        ref={searchInputRef}
      >
        <form className="flex items-center p-2 w-80">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-3 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg focus:outline-none focus:bg-white"
          />
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="ml-2 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  };

  const ExpertiseMenu = () => (
    <div 
      className="absolute top-full left-0 bg-white shadow-lg min-w-[240px] z-40 py-1"
      onMouseLeave={() => {
        setActiveSubmenu(null);
        setActiveNestedMenu(null);
      }}
    >
      {menuItems['Our Expertise'].items.map(category => (
        <div
          key={category.title}
          className="relative"
          onMouseEnter={() => setActiveSubmenu(category.title)}
        >
          <button
            className="w-full flex items-center justify-between px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 hover:text-red-600"
          >
            {category.title}
            <ChevronRight className="w-4 h-4" />
          </button>

          {activeSubmenu === category.title && (
            <div className="absolute left-full top-0 bg-white shadow-lg min-w-[240px] py-1">
              {category.items.map(item => {
                if (typeof item === 'string') {
                  return (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 hover:text-red-600"
                    >
                      {item}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveNestedMenu(item.title)}
                  >
                    <button
                      className="w-full flex items-center justify-between px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 hover:text-red-600"
                    >
                      {item.title}
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {activeNestedMenu === item.title && (
                      <div className="absolute left-full top-0 bg-white shadow-lg min-w-[240px] py-1">
                        {item.items.map(nestedItem => (
                          <a
                            key={nestedItem}
                            href="#"
                            className="block px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 hover:text-red-600"
                          >
                            {nestedItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const DropdownMenu = ({ items }) => (
    <div className="absolute top-full left-0 bg-white shadow-lg py-1 min-w-[240px] z-40">
      <ul>
        {items.map(item => (
          <li key={item}>
            <a
              href="#"
              className="block px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 hover:text-red-600"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <header className="relative bg-white shadow-sm" ref={menuRef}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo with optimized image loading */}
          <a href="/" className="flex-shrink-0 py-4">
            <ResponsiveLogo />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <a 
              href="/" 
              className="text-red-600 hover:text-red-700 text-[16px] leading-[20px] font-semibold px-[18px] py-[10px]"
            >
              Home
            </a>
            
            {Object.entries(menuItems).map(([name, config]) => (
              <div
                key={name}
                className="relative"
                onMouseEnter={() => setActiveMenu(name)}
              >
                <button
                  className={`
                    px-[18px] py-[10px] text-[16px] leading-[20px] font-semibold
                    ${activeMenu === name ? 'text-red-600' : 'text-[#222529] hover:text-red-600'}
                  `}
                >
                  {name}
                </button>
                
                {activeMenu === name && config.type === 'dropdown' && (
                  <DropdownMenu items={config.items} />
                )}
                
                {activeMenu === name && config.type === 'mega' && (
                  <ExpertiseMenu />
                )}
              </div>
            ))}

            <a 
              href="/contact"
              className="ml-[18px] px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
            >
              Contact Us
            </a>

            <button
              ref={searchButtonRef}
              onClick={() => setIsSearchOpen(true)}
              className="ml-[18px] p-2 hover:bg-gray-100 rounded-full"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-500" />
            </button>
          </nav>
        </div>
      </div>

      {/* Search Form */}
      <SearchForm />
    </header>
  );
};

export default Header;