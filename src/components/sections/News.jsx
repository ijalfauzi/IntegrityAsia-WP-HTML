import React from 'react';

const NewsCard = ({ category, title, excerpt, image, link }) => (
  <a 
    href={link}
    className="group block relative overflow-hidden rounded-lg aspect-[4/3]"
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
    </div>

    {/* Content */}
    <div className="relative h-full p-6 flex flex-col justify-end">
      {/* Category Tag */}
      <div className="inline-block mb-3">
        <span className="px-3 py-1 text-xs font-medium bg-red-600 text-white uppercase rounded">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white/90 
                     transition-colors duration-300 line-clamp-2 mb-2">
        {title}
      </h3>

      {/* Excerpt - Only shown on hover */}
      <p className="text-sm text-white/80 line-clamp-2 opacity-0 -translate-y-2
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-300">
        {excerpt}
      </p>
    </div>
  </a>
);

const News = () => {
  const newsItems = [
    {
      category: 'Articles',
      title: 'The eFishery fraud: an Indonesian unicorn entangled in financial reporting fraud',
      excerpt: 'A detailed investigation into financial reporting irregularities at a major Indonesian startup.',
      image: '/assets/images/post-1.webp',
      link: '/news/efishery-fraud'
    },
    {
      category: 'Articles',
      title: 'KYC: a step towards minimizing fraud risk in microfinance institutions',
      excerpt: 'Each year in November, the global community marks International Fraud Awareness Week, a...',
      image: '/assets/images/post-2.webp',
    },
    {
      category: 'Articles',
      title: 'A case for conflict disclosure and due diligence in vendor management',
      excerpt: 'Understanding the importance of transparency and thorough vetting in vendor relationships.',
      image: '/assets/images/post-3.webp',
      link: '/news/conflict-disclosure'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
            LATEST NEWS
          </h2>
          <p className="text-gray-600 md:max-w-2xl text-sm">
            Stay up-to-date on our company news and industry insights.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              category={item.category}
              title={item.title}
              excerpt={item.excerpt}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-8 sm:mt-12 text-center">
          <a 
            href="/news" 
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
          >
            View All Articles
            <svg
              className="ml-2 w-4 h-4"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;