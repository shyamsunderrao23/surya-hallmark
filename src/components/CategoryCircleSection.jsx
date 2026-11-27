import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'rings',
    name: 'Rings',
    image: '/categories/rings.png',
    link: '/category/rings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: '/categories/necklaces.png',
    link: '/category/necklaces',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: '/categories/earrings.png',
    link: '/category/earrings',
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    image: '/categories/bracelets.png',
    link: '/category/bracelets',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    image: '/categories/wedding.png',
    link: '/category/wedding',
  },
  {
    id: 'mens',
    name: "Men's Collection",
    image: '/categories/mens.png',
    link: '/category/men',
  },
  {
    id: 'gifts',
    name: 'Gifts',
    image: '/categories/gifts.png',
    link: '/category/gifts',
  },
];

export default function CategoryCircleSection() {
  return (
    <section className="w-full py-6 sm:py-10 bg-[#FCEED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Horizontal Category Row matching uploaded reference */}
        <div className="flex items-center justify-between gap-3 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar py-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group flex flex-col items-center flex-shrink-0 cursor-pointer transition-transform duration-200"
            >
              {/* Circular Icon with Warm Glow & Hover Accent */}
              <div className="relative w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-full overflow-hidden p-1 bg-gradient-to-b from-[#FFF5EA] to-[#F5E2CF] border border-[#DFCAB4] shadow-xs group-hover:border-[#5B131B] group-hover:shadow-md transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-108 transition-transform duration-300 ease-out"
                />
              </div>

              {/* Category Label */}
              <span className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-medium text-[#3D141A] group-hover:text-[#5B131B] group-hover:font-semibold transition-colors duration-200 text-center whitespace-nowrap">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
