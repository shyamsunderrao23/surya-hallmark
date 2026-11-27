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
    <section className="w-full py-8 sm:py-12 bg-[#FCEED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Horizontal Category Row with Larger, Crystal-Clear Circular Icons */}
        <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar py-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group flex flex-col items-center flex-shrink-0 cursor-pointer transition-transform duration-200"
            >
              {/* Circular Icon with HD Clarity, Outer Ring & Smooth Hover Effect */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full p-1 sm:p-1.5 bg-white border-2 border-[#DFCAB4] shadow-sm group-hover:border-[#5B131B] group-hover:shadow-lg group-hover:shadow-[#5B131B]/15 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF6F0]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center rounded-full group-hover:scale-110 transition-transform duration-300 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Category Label */}
              <span className="mt-3 text-xs sm:text-sm md:text-base font-semibold text-[#3D141A] group-hover:text-[#5B131B] transition-colors duration-200 text-center whitespace-nowrap tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
