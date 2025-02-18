import React, { useState, useEffect, useCallback } from 'react';

const References = () => {
  // 18 references (3 slides × 6 logos)
  const references = [
    {
      name: "Company 1",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 2",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 3",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 4",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 5",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 6",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    // Second slide
    {
      name: "Company 7",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 8",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 9",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 10",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 11",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 12",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    // Third slide
    {
      name: "Company 13",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 14",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 15",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 16",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 17",
      logo: "/api/placeholder/200/100",
      link: "#"
    },
    {
      name: "Company 18",
      logo: "/api/placeholder/200/100",
      link: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const visibleSlides = 6;

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => {
      const nextIndex = prev + visibleSlides;
      if (nextIndex >= references.length) {
        setTimeout(() => {
          setIsAnimating(false);
          setCurrentIndex(0);
        }, 0);
        return prev;
      }
      setTimeout(() => setIsAnimating(false), 500);
      return nextIndex;
    });
  }, [isAnimating, references.length]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => {
      const nextIndex = prev - visibleSlides;
      if (nextIndex < 0) {
        setTimeout(() => {
          setIsAnimating(false);
          setCurrentIndex(references.length - visibleSlides);
        }, 0);
        return prev;
      }
      setTimeout(() => setIsAnimating(false), 500);
      return nextIndex;
    });
  }, [isAnimating, references.length]);

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
            OUR REFERENCES
          </h2>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="overflow-hidden mx-12">
            <div 
              className={`
                flex transition-transform duration-500 ease-in-out
                ${isAnimating ? 'pointer-events-none' : ''}
              `}
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`
              }}
            >
              {references.map((reference, index) => (
                <div 
                  key={index} 
                  className="w-1/6 flex-shrink-0 px-4"
                >
                  <a 
                    href={reference.link}
                    className="block aspect-[2/1] bg-white p-4 transition-opacity 
                             hover:opacity-80 group"
                  >
                    <img
                      src={reference.logo}
                      alt={reference.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 
                               transition-all duration-300"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center
                     text-gray-700 hover:text-red-600 transition-colors"
            disabled={isAnimating}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center
                     text-gray-700 hover:text-red-600 transition-colors"
            disabled={isAnimating}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default References;