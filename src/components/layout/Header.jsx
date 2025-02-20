import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight, Menu, ChevronDown } from 'lucide-react';

const ResponsiveLogo = () => (
  <img 
    src="/assets/images/logo.webp"
    srcSet="/assets/images/logo-small.webp 128w, /assets/images/logo.webp 256w"
    sizes="(max-width: 768px) 128px, 256px"
    width={128}
    height={40}
    alt="Integrity Asia"
    className="h-auto w-24 md:w-32 max-w-32"
  />
);

const Header = () => {
  // State management
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState(null);
  
  // Refs
  const searchInputRef = useRef(null);
  const menuRef = useRef(null);
  const searchButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Menu structure
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
          title: 'Prevention',
          items: [
            'Employment Background Screening',
            'Due Diligence',
            'Regulatory Consulting & Training'
          ]
        },
        {
          title: 'Detection',
          items: [
            'Whistleblowing System',
            'Mystery Shopping',
            'Market Survey And Inspection'
          ]
        },
        {
          title: 'Mitigation',
          items: [
            'Audit & Fraud Investigation',
            'Insurance Investigation',
            'Asset And Skip Tracing',
            {
              title: 'Brand Protection',
              items: [
                'Trademark Investigation',
                'Non-Use Investigation',
                'Anti-Counterfeiting',
                'Parallel Trading Investigation'
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

  // Click outside handlers
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Desktop menu click outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setActiveSubmenu(null);
        setActiveNestedMenu(null);
      }
      
      // Mobile menu handled by backdrop click
      
      // Search click outside
      if (isSearchOpen && 
          !searchInputRef.current?.contains(event.target) && 
          !searchButtonRef.current?.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    // Handle escape key for accessibility
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isSearchOpen) setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isSearchOpen, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Enhanced search form component for desktop
  const SearchForm = () => {
    const searchButtonRect = searchButtonRef.current?.getBoundingClientRect();
    const rightOffset = searchButtonRect ? window.innerWidth - searchButtonRect.right : 0;
    
    // Reference to the input field for auto-focus when opened
    const inputRef = useRef(null);
    
    // Focus the input when search is opened
    useEffect(() => {
      if (isSearchOpen && inputRef.current) {
        setTimeout(() => inputRef.current.focus(), 100);
      }
    }, [isSearchOpen]);

    return (
      <div 
        className={`
          fixed inset-0 z-50 flex items-start justify-center
          transition-all duration-300 ease-in-out pt-24
          backdrop-blur-sm bg-black/10
          ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsSearchOpen(false);
        }}
        ref={searchInputRef}
      >
        <div 
          className={`
            w-full max-w-2xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden
            transition-all duration-300 ease-in-out
            ${isSearchOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'}
            border-2 border-gray-100
          `}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
            <input
              ref={inputRef}
              type="search"
              placeholder="What are you looking for?"
              className="w-full pl-12 pr-12 py-4 text-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/10"
            />
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <div className="text-xs text-gray-500">Popular searches:</div>
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors">
                Background Screening
              </button>
              <button className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors">
                Due Diligence
              </button>
              <button className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded-full hover:bg-red-100 hover:text-red-700 transition-colors">
                Fraud Investigation
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Desktop dropdown menu component
  const DesktopDropdownMenu = ({ items }) => (
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

  // Desktop expertise menu component
  const DesktopExpertiseMenu = () => (
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

  // Mobile menu backdrop with improved animation
const MobileMenuBackdrop = () => (
  <div 
    className={`
      fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40
      transition-all duration-400 ease-out
      ${isMobileMenuOpen 
        ? 'opacity-100' 
        : 'opacity-0 pointer-events-none'
      }
    `}
    onClick={() => setIsMobileMenuOpen(false)}
    aria-hidden="true"
  />
);

// Mobile menu components with enhanced animations
const MobileMenu = () => {
  return (
    <div 
      ref={mobileMenuRef}
      className={`
        fixed inset-y-0 left-0 w-3/4 bg-white z-50 overflow-y-auto 
        shadow-2xl rounded-r-2xl
        transition-all duration-400 ease-in-out
        ${isMobileMenuOpen 
          ? 'translate-x-0 scale-x-100 opacity-100' 
          : '-translate-x-8 scale-98 opacity-0 pointer-events-none'
        }
      `}
      style={{
        transformOrigin: 'left center',
      }}
    >
      <div className="p-5 flex items-center justify-between border-b border-gray-100">
        <a 
          href="/" 
          className="block transition-transform duration-300 hover:scale-105" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <ResponsiveLogo />
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-90"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="px-5 py-4 border-b border-gray-100">
        <form className="flex items-center group focus-within:ring-2 focus-within:ring-red-500/20 focus-within:rounded-lg transition-all duration-200">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-3 py-2.5 text-sm text-gray-700 bg-gray-50 rounded-lg focus:outline-none focus:bg-white transition-colors duration-200"
          />
          <button
            type="submit"
            className="ml-2 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200/70 transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </form>
      </div>

      <nav className="mt-2 overflow-hidden">
        <a 
          href="/" 
          className="flex items-center px-5 py-3 text-red-600 font-semibold border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 active:bg-gray-100 animate-slideInRight"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ animationDelay: '50ms' }}
        >
          Home
        </a>
        
        {Object.entries(menuItems).map(([name, config], index) => (
          <MobileMenuItem 
            key={name}
            name={name}
            config={config}
            index={index}
          />
        ))}

        <div className="p-5 animate-fadeUp" style={{ animationDelay: '300ms' }}>
          <a 
            href="/contact"
            className="block py-3 mt-2 bg-red-600 text-white font-semibold rounded text-center hover:bg-red-700 transition-all duration-200 active:scale-98 active:bg-red-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

const MobileMenuItem = ({ name, config, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animationDelay = 50 + (index * 50); // Staggered animation
  
  if (config.type === 'link') {
    return (
      <a 
        href="#" 
        className="flex items-center px-5 py-3 text-gray-800 font-semibold border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 animate-slideInRight"
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        {name}
      </a>
    );
  }
  
  if (config.type === 'dropdown') {
    return (
      <div className="animate-slideInRight" style={{ animationDelay: `${animationDelay}ms` }}>
        <button
          className="flex items-center justify-between w-full px-5 py-3 text-gray-800 font-semibold border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{name}</span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        
        <div 
          className={`
            overflow-hidden transition-all duration-300 ease-out bg-gray-50 border-b border-gray-100
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {config.items.map((item, i) => (
            <a
              key={item}
              href="#"
              className="block px-8 py-2.5 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 hover:bg-gray-100/70"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                transitionDelay: `${i * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 300ms, transform 300ms'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  if (config.type === 'mega') {
    return (
      <div className="animate-slideInRight" style={{ animationDelay: `${animationDelay}ms` }}>
        <button
          className="flex items-center justify-between w-full px-5 py-3 text-gray-800 font-semibold border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{name}</span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        
        <div 
          className={`
            overflow-hidden transition-all duration-400 ease-out bg-gray-50 border-b border-gray-100
            ${isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {config.items.map((category, i) => (
            <MobileMegaCategory 
              key={category.title}
              category={category}
              onItemClick={() => setIsMobileMenuOpen(false)}
              index={i}
              parentOpen={isOpen}
            />
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};

const MobileMegaCategory = ({ category, onItemClick, index, parentOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animationDelay = 50 + (index * 75);
  
  return (
    <div 
      className="border-t border-gray-200/70"
      style={{ 
        transitionDelay: `${animationDelay}ms`,
        opacity: parentOpen ? 1 : 0,
        transform: parentOpen ? 'translateY(0)' : 'translateY(-5px)',
        transition: 'opacity 400ms, transform 400ms'
      }}
    >
      <button
        className="flex items-center justify-between w-full px-8 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{category.title}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-out bg-gray-100
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {category.items.map((item, i) => {
          if (typeof item === 'string') {
            return (
              <a
                key={item}
                href="#"
                className="block px-10 py-2.5 text-xs text-gray-600 hover:text-red-600 transition-colors duration-200 hover:bg-gray-200/70"
                onClick={onItemClick}
                style={{ 
                  transitionDelay: `${i * 50}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-8px)',
                  transition: 'opacity 300ms, transform 300ms'
                }}
              >
                {item}
              </a>
            );
          }
          
          return (
            <MobileNestedMenu 
              key={item.title}
              item={item}
              onItemClick={onItemClick}
              index={i}
              parentOpen={isOpen}
            />
          );
        })}
      </div>
    </div>
  );
};

const MobileNestedMenu = ({ item, onItemClick, index, parentOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animationDelay = 50 + (index * 50);
  
  return (
    <div 
      className="border-t border-gray-200/50"
      style={{ 
        transitionDelay: `${animationDelay}ms`,
        opacity: parentOpen ? 1 : 0,
        transform: parentOpen ? 'translateY(0)' : 'translateY(-5px)',
        transition: 'opacity 300ms, transform 300ms'
      }}
    >
      <button
        className="flex items-center justify-between w-full px-10 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-200/70 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.title}</span>
        <ChevronDown 
          className={`w-3 h-3 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <div 
        className={`
          overflow-hidden transition-all duration-300 ease-out bg-gray-200/50
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {item.items.map((nestedItem, i) => (
          <a
            key={nestedItem}
            href="#"
            className="block px-12 py-2.5 text-xs text-gray-600 hover:text-red-600 transition-colors duration-200 hover:bg-gray-300/50"
            onClick={onItemClick}
            style={{ 
              transitionDelay: `${i * 30}ms`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(-5px)',
              transition: 'opacity 300ms, transform 300ms'
            }}
          >
            {nestedItem}
          </a>
        ))}
      </div>
    </div>
  );
};

  // No longer needed as close button is inside the menu

  return (
    <header className="relative bg-white shadow-sm" ref={menuRef}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 py-4">
            <ResponsiveLogo />
          </a>

          {/* Mobile Menu Toggle - Search removed */}
          <div className="flex items-center md:hidden">
            <button
              data-mobile-toggle
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Desktop Navigation */}
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
                  <DesktopDropdownMenu items={config.items} />
                )}
                
                {activeMenu === name && config.type === 'mega' && (
                  <DesktopExpertiseMenu />
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

      {/* Search Form - Desktop */}
      <SearchForm />
      
      {/* Mobile Menu */}
      <MobileMenu />
      
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && <MobileMenuBackdrop />}
    </header>
  );
};

export default Header;