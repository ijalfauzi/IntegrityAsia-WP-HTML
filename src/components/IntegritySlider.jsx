import React, { useState, useEffect, useCallback, useRef } from 'react';

const IntegritySlider = () => {
  const slides = [
    {
      image: "/assets/images/slides/slide-1.jpg",
      title: {
        prefix: "WELCOME TO ",
        main: "INTEGRITY ASIA"
      },
      mainText: "Prevention, detection, mitigation:",
      subText: "Protecting your business every step of the way",
      type: "welcome",
      skewDirection: {
        row1: "left",
        row2: "right"
      },
      bgColor: "rgba(128, 128, 128, 0.9)",
      animationType: "normal" // row1: left-to-right, row2: right-to-left
    },
    {
      image: "/assets/images/slides/slide-2.jpg",
      title: "MITIGATION",
      mainText: "Trust our team to handle fraud:",
      subText: "Our investigation and mitigation services keep your business safe",
      type: "mitigation",
      titleColor: "#F9B800",
      skewDirection: {
        row1: "right",
        row2: "left"
      },
      bgColor: "rgba(0, 0, 0, 0.85)",
      animationType: "alternate" // row1: right-to-left, row2: left-to-right
    },
    {
      image: "/assets/images/slides/slide-3.jpg",
      title: "DETECTION",
      mainText: "Stay vigilant against fraud:",
      subText: "Our detection services keep your business safe",
      type: "detection",
      titleColor: "#F9B800",
      skewDirection: {
        row1: "left",
        row2: "right"
      },
      bgColor: "rgba(0, 0, 0, 0.85)",
      animationType: "normal"
    },
    {
      image: "/assets/images/slides/slide-4.jpg",
      title: "PREVENTION",
      mainText: "Prevention is the key to fraud protection:",
      subText: "Trust our team to keep your business safe",
      type: "prevention",
      titleColor: "#E32520",
      skewDirection: {
        row1: "right",
        row2: "left"
      },
      bgColor: "rgba(0, 0, 0, 0.85)",
      animationType: "alternate"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayTimer = useRef(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToNextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, slides.length]);

  const goToPrevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, slides.length]);

  useEffect(() => {
    autoPlayTimer.current = setInterval(goToNextSlide, 5000);
    return () => clearInterval(autoPlayTimer.current);
  }, [goToNextSlide]);

  const TrapezoidOverlay = ({ slide, isActive }) => {
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    const getSkewAngle = (direction) => direction === 'right' ? '-20deg' : '20deg';

    const getRowAnimation = (isRow1) => {
      if (!isActive) return '';
      
      if (slide.animationType === 'normal') {
        return isRow1 ? 'animate-slideLeftToRight' : 'animate-slideRightToLeft';
      }
      return isRow1 ? 'animate-slideRightToLeft' : 'animate-slideLeftToRight';
    };

    return (
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] ml-0 lg:ml-24 xl:ml-32">
            {/* Title */}
            <div className={`font-bold mb-3 ${isMobile ? 'text-center' : 'ml-8'}`}>
              {typeof slide.title === 'object' ? (
                <span className="text-sm md:text-base">
                  <span className="text-black">{slide.title.prefix}</span>
                  <span className="text-red-600">{slide.title.main}</span>
                </span>
              ) : (
                <span 
                  className="text-sm md:text-base"
                  style={{ color: slide.titleColor }}
                >
                  {slide.title}
                </span>
              )}
            </div>

            {/* Content Blocks */}
            <div className={`${isMobile ? 'flex flex-col items-center' : ''}`}>
              {/* First Block */}
              <div 
                className={`relative mb-1 inline-block opacity-0 ${getRowAnimation(true)}`}
                style={{ animationDelay: '0.3s' }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    left: isMobile ? '0' : '-20px',
                    right: isMobile ? '0' : '-20px',
                    transform: isMobile ? 'none' : `skew(${getSkewAngle(slide.skewDirection.row1)})`,
                    transformOrigin: '50% 50%',
                    width: isMobile ? '100%' : 'calc(100% + 40px)',
                    backgroundColor: slide.bgColor
                  }}
                />
                <div className={`relative py-2 text-white ${isMobile ? 'px-4 text-center' : 'px-8'}`}>
                  <div className="text-base md:text-lg lg:text-xl font-bold whitespace-normal">
                    {slide.mainText}
                  </div>
                </div>
              </div>

              {/* Second Block */}
              <div 
                className={`relative inline-block opacity-0 ${getRowAnimation(false)}`}
                style={{ animationDelay: '0.5s' }}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    left: isMobile ? '0' : '-20px',
                    right: isMobile ? '0' : '-20px',
                    transform: isMobile ? 'none' : `skew(${getSkewAngle(slide.skewDirection.row2)})`,
                    transformOrigin: '50% 50%',
                    width: isMobile ? '100%' : 'calc(100% + 40px)',
                    backgroundColor: slide.bgColor
                  }}
                />
                <div className={`relative py-2 text-white ${
                  isMobile ? 'px-4 text-center' : 'px-8'
                }`}>
                  <div className="text-base md:text-lg lg:text-xl font-bold whitespace-normal">
                    {slide.subText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="relative w-full overflow-hidden" 
      style={{ height: '100vh' }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-300 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <TrapezoidOverlay 
            slide={slide} 
            isActive={index === currentSlide}
          />
        </div>
      ))}

      <button
        onClick={goToPrevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors z-20 text-white"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors z-20 text-white"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default IntegritySlider;