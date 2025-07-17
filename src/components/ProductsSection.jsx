import React, { useState } from 'react';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 1,
      name: 'Portable',
      icon: 'https://qiniu.mfdemo.cn/fanshuang/2024/09/22/66efc934e0f17.svg',
      products: [
        {
          id: 1,
          name: 'Argus D10',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/02/08/67a6f916c8b91.png',
          link: '',
          tag: 'New'
        },
        {
          id: 2,
          name: 'Thor M20',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/03/19/67da6f5b0d65b.png',
          link: '',
          tag: 'Popular'
        },
        {
          id: 3,
          name: 'Thor M60',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/07/10/686f586f36847.png',
          link: ''
        },
        {
          id: 4,
          name: 'Thor M10',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/03/19/67da7655a7017.png',
          link: ''
        }
      ]
    },
    {
      id: 2,
      name: 'Fixed',
      icon: 'https://qiniu.mfdemo.cn/fanshuang/2024/09/22/66efc9497004c.svg',
      products: [
        {
          id: 5,
          name: 'Argus D20',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2024/09/25/66f3a116213a5.png',
          link: ''
        },
        {
          id: 6,
          name: 'Ares J10',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/03/19/67da8a01c0a2e.png',
          link: '',
          tag: 'Featured'
        },
        {
          id: 7,
          name: 'Thor M50',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/07/09/686de2ebc4ea9.png',
          link: ''
        },
        {
          id: 8,
          name: 'Thor M30',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/07/09/686e284853e6d.png',
          link: ''
        }
      ]
    },
    {
      id: 3,
      name: 'Hardkill',
      icon: 'https://qiniu.mfdemo.cn/fanshuang/2024/09/22/66efc95cc048e.svg',
      products: [
        {
          id: 9,
          name: 'Apolo H10',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/03/19/67da8d0a98527.png',
          link: '',
          tag: 'Advanced'
        },
        {
          id: 10,
          name: 'Apolo H20',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2025/03/19/67da8d1318aef.png',
          link: ''
        }
      ]
    },
    {
      id: 4,
      name: 'Vehicle',
      icon: 'https://qiniu.mfdemo.cn/fanshuang/2024/09/22/66efc9528fc28.svg',
      products: [
        {
          id: 11,
          name: 'Zeus V10',
          image: 'https://qiniu.mfdemo.cn/fanshuang/2024/12/03/674e5c74063ea.png',
          link: '',
          tag: 'Premium'
        }
      ]
    }
  ];


  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-16 min-h-[900px] overflow-hidden">
      {/* Decorative elements for dark theme */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-base font-semibold tracking-widest text-white bg-blue-600 border border-blue-400 rounded-full shadow-blue-400/20 shadow mb-5 capitalize backdrop-blur">
            Our Product Lineup
          </span>
          <h2 className="text-5xl md:text-6xl uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-5 tracking-tight drop-shadow-lg">
            Adaptive Threat Response Systems
          </h2>
          <p className="text-2xl text-blue-100 max-w-2xl mx-auto font-light">
            Smart solutions for securing skies against unauthorized aerial activity.
          </p>
        </div>

        {/* Category tabs */}
        <div className="w-full overflow-x-auto pb-2 mb-10 sm:mb-14 scrollbar-hide">
          <div className="flex flex-nowrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 mx-auto min-w-max px-1 sm:px-0">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 transition-all duration-300 whitespace-nowrap font-semibold tracking-wide text-base sm:text-lg shadow-md backdrop-blur-lg ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white border-blue-400 shadow-blue-400/30 scale-105'
                    : 'bg-blue-900/30 text-blue-200 border-blue-700 hover:bg-blue-800/50 hover:text-white'
                }`}
                style={{ boxShadow: activeCategory === index ? '0 0 16px 2px #60a5fa55' : undefined }}
                tabIndex={0}
              >
                <img src={category.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 drop-shadow-blue-400/40" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {categories[activeCategory].products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-700 backdrop-blur-lg"
            >
              {product.tag && (
                <span className="absolute top-4 right-4 z-10 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-blue-400/30 shadow">
                  {product.tag}
                </span>
              )}
              <a href={product.link} className="block h-full">
                <div className="h-64 bg-gradient-to-br from-gray-800/60 to-blue-900/30 flex items-center justify-center p-8 border-b border-blue-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_24px_#60a5fa88]"
                    loading="lazy"
                  />
                </div>
                <div className="px-7 pt-7  flex flex-col justify-between h-full">
                  <h3 className="text-2xl font-bold text-blue-100 mb-3 text-center group-hover:text-white transition-colors tracking-wide drop-shadow">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-colors duration-300 shadow-lg shadow-blue-400/20 border border-blue-400/40 backdrop-blur">
                      <span className="font-semibold tracking-wide">View Details</span>
                      <svg
                        className="w-5 h-5 ml-2 animate-pulse"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;