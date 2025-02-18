import React from 'react';

const ServiceCard = ({ title, image, services }) => (
  <div className="group">
    {/* Image Container */}
    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-8">
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 transition-colors duration-300"></div>
      
      {/* Title - Hidden on hover */}
      <div className="absolute inset-0 flex items-center justify-center 
                    transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-[-1rem]">
        <h3 className="text-xl font-semibold text-white uppercase text-center px-4">{title}</h3>
      </div>

      {/* Find Out More - Shown on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-8
                    group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <button className="px-6 py-2 bg-white text-gray-900 text-sm font-medium rounded 
                       hover:bg-gray-100 transition-colors">
          FIND OUT MORE →
        </button>
      </div>
    </div>

    {/* Services List */}
    <div className="space-y-2">
      {services.map(({ icon: Icon, name, link }) => (
        <a 
          key={name} 
          href={link} 
          className="flex items-center gap-4 py-3 relative group/link
                     px-3 sm:px-4 -mx-3 sm:-mx-4"
        >
          {/* Icon Container */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 relative z-10 transition-transform duration-300 
                        group-hover/link:scale-110 group-hover/link:text-red-600">
            <Icon className="w-full h-full" />
          </div>

          {/* Text */}
          <span className="text-sm text-gray-700 font-medium relative z-10 transition-colors duration-300 
                         group-hover/link:text-red-600 min-w-0 flex-1">
            {name}
          </span>

          {/* Hover Background Effect */}
          <div className="absolute inset-0 bg-gray-50 scale-95 opacity-0 
                         group-hover/link:opacity-100 group-hover/link:scale-100 
                         transition-all duration-300 rounded-lg" />

          {/* Arrow Icon - Slides in on hover */}
          <div className="absolute right-3 sm:right-4 opacity-0 -translate-x-4 transition-all duration-300 
                         group-hover/link:opacity-100 group-hover/link:translate-x-0 text-red-600">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="w-4 h-4"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "PREVENTION",
      image: "/assets/images/business-investigation.jpg",
      services: [
        {
          name: "Employment Background Screening",
          link: "/services/employment-background-screening",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )
        },
        {
          name: "Due Diligence",
          link: "/services/due-diligence",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
              <path d="M11 8v6" />
              <path d="M8 11h6" />
            </svg>
          )
        },
        {
          name: "Regulatory Consulting & Training",
          link: "/services/regulatory-consulting",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          )
        }
      ]
    },
    {
      title: "DETECTION",
      image: "/assets/images/our-detection.png",
      services: [
        {
          name: "Whistleblowing System",
          link: "/services/whistleblowing",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )
        },
        {
          name: "Mystery Shopping",
          link: "/services/mystery-shopping",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          )
        },
        {
          name: "Market Survey and Inspection",
          link: "/services/market-survey",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
              <path d="m12 12 4 10 1.7-4.3L22 16Z" />
            </svg>
          )
        }
      ]
    },
    {
      title: "MITIGATION",
      image: "/assets/images/governance-compliance.jpg",
      services: [
        {
          name: "Fraud Investigation",
          link: "/services/fraud-investigation",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="m8 12 2 2 4-4" />
            </svg>
          )
        },
        {
          name: "Insurance Investigation",
          link: "/services/insurance-investigation",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
          )
        },
        {
          name: "Asset & Skip Tracing",
          link: "/services/asset-tracing",
          icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21 21-6-6m4-7A7 7 0 1 1 3 8a7 7 0 0 1 14 0Z" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
            OUR SERVICE
          </h2>
          <p className="text-gray-600 md:max-w-2xl text-sm">
            Providing effective and reliable risk mitigation services, 
            carried out by local experts and supported by advanced technology.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              services={service.services}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;