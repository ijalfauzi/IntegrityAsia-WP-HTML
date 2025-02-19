import React, { useState, useEffect, useCallback } from 'react';

const References = () => {
  // Full list of reference logos from the screenshots
  const references = [
    // Page 1
    {
      name: "Mitrais",
      logo: "/assets/images/references/logo-mitrais.webp",
      link: "#"
    },
    {
      name: "Amalan",
      logo: "/assets/images/references/logo-amalan.webp",
      link: "#"
    },
    {
      name: "Generali",
      logo: "/assets/images/references/logo-generali.webp",
      link: "#"
    },
    {
      name: "ISS",
      logo: "/assets/images/references/logo-iss.webp",
      link: "#"
    },
    {
      name: "Futuredy",
      logo: "/assets/images/references/logo-futuredy.webp",
      link: "#"
    },
    {
      name: "Harukaedu",
      logo: "/assets/images/references/logo-harukaedu.webp",
      link: "#"
    },
    // Page 2
    {
      name: "Eastsprings",
      logo: "/assets/images/references/logo-eastsprings.webp",
      link: "#"
    },
    {
      name: "Exxon Mobil",
      logo: "/assets/images/references/logo-exxon-mobil.webp",
      link: "#"
    },
    {
      name: "Grupogat",
      logo: "/assets/images/references/logo-grupogat.webp",
      link: "#"
    },
    {
      name: "Protelindo",
      logo: "/assets/images/references/logo-protelindo.webp",
      link: "#"
    },
    {
      name: "iForte",
      logo: "/assets/images/references/logo-iforte.webp",
      link: "#"
    },
    {
      name: "DBS",
      logo: "/assets/images/references/logo-dbs.webp",
      link: "#"
    },
    // Page 3
    {
      name: "Abhitech",
      logo: "/assets/images/references/logo-abhitech.webp",
      link: "#"
    },
    {
      name: "Indcater",
      logo: "/assets/images/references/logo-indcater.webp", 
      link: "#"
    },
    {
      name: "OCBC",
      logo: "/assets/images/references/logo-ocbc.webp",
      link: "#"
    },
    {
      name: "Eptec",
      logo: "/assets/images/references/logo-eptec.webp",
      link: "#"
    },
    {
      name: "ANZ",
      logo: "/assets/images/references/logo-anz.webp",
      link: "#"
    },
    {
      name: "AJJV",
      logo: "/assets/images/references/logo-ejjv.webp",
      link: "#"
    },
    // Page 4
    {
      name: "Vlink",
      logo: "/assets/images/references/logo-vlink.webp",
      link: "#"
    },
    {
      name: "Sucor Sekuritas",
      logo: "/assets/images/references/logo-sucor-sekuritas.webp",
      link: "#"
    },
    {
      name: "Astra",
      logo: "/assets/images/references/logo-astra.webp",
      link: "#"
    },
    {
      name: "Bina Talenta",
      logo: "/assets/images/references/logo-binatalenta.webp",
      link: "#"
    },
    {
      name: "RHB",
      logo: "/assets/images/references/logo-rhb.webp",
      link: "#"
    },
    {
      name: "HH",
      logo: "/assets/images/references/logo-hh.webp",
      link: "#"
    },
    // Page 5
    {
      name: "Ragaeka",
      logo: "/assets/images/references/logo-ragaeka.webp",
      link: "#"
    },
    {
      name: "KPSG",
      logo: "/assets/images/references/logo-kpsg.webp",
      link: "#"
    },
    {
      name: "SPIE",
      logo: "/assets/images/references/logo-spie.webp",
      link: "#"
    },
    {
      name: "Korosi",
      logo: "/assets/images/references/logo-korosi.webp",
      link: "#"
    },
    {
      name: "Elpi",
      logo: "/assets/images/references/logo-elpi.webp",
      link: "#"
    },
    {
      name: "Prudential",
      logo: "/assets/images/references/logo-prudential.webp",
      link: "#"
    },
    // Page 6
    {
      name: "Anymind",
      logo: "/assets/images/references/logo-anymind.webp",
      link: "#"
    },
    {
      name: "iSTech",
      logo: "/assets/images/references/logo-istech.webp",
      link: "#"
    },
    {
      name: "AVRIST",
      logo: "/assets/images/references/logo-avrist.webp",
      link: "#"
    },
    {
      name: "PaninDai-ichiLife",
      logo: "/assets/images/references/logo-panin-dai-ichi-life.webp",
      link: "#"
    },
    {
      name: "Indorama",
      logo: "/assets/images/references/logo-indorama.webp",
      link: "#"
    },
    {
      name: "Global Arrow",
      logo: "/assets/images/references/logo-global-arrow.webp",
      link: "#"
    },
    // Page 7
    {
      name: "Intecs",
      logo: "/assets/images/references/logo-intecs.webp",
      link: "#"
    },
    {
      name: "EasyCash",
      logo: "/assets/images/references/logo-easycash.webp",
      link: "#"
    },
    {
      name: "Glints",
      logo: "/assets/images/references/logo-glints.webp",
      link: "#"
    },
    {
      name: "Eastern Logistics",
      logo: "/assets/images/references/logo-easternlogistics.webp",
      link: "#"
    },
    {
      name: "Datasaur",
      logo: "/assets/images/references/logo-datasaur.webp",
      link: "#"
    },
    {
      name: "Globa Jasa",
      logo: "/assets/images/references/logo-global-jasa-angkasa.webp",
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
    const timer = setInterval(goToNext, 20000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
            OUR REFERENCES
          </h2>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="overflow-hidden mx-12">
            <div 
              className={`
                flex items-center transition-transform duration-500 ease-in-out
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
                    className="block h-32 sm:h-36 md:h-40 flex items-center justify-center p-3 transition-opacity 
                             hover:opacity-80"
                  >
                    <img
                      src={reference.logo}
                      alt={reference.name}
                      className="w-auto max-w-full h-auto max-h-full object-contain"
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