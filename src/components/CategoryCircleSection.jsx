import React from 'react';
import { Link } from 'react-router-dom';

// Import high-resolution images directly for automatic Vite cache-busting & instant loading
import ringsImg from '../assets/categories/rings.jpg';
import necklacesImg from '../assets/categories/necklaces.jpg';
import earringsImg from '../assets/categories/earrings.jpg';
import braceletsImg from '../assets/categories/bracelets.jpg';
import weddingImg from '../assets/categories/wedding.jpg';
import mensImg from '../assets/categories/mens.jpg';
import giftsImg from '../assets/categories/gifts.jpg';

const categories = [
  {
    id: 'rings',
    name: 'Rings',
    image: ringsImg,
    link: '/category/rings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: necklacesImg,
    link: '/category/necklaces',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    image: earringsImg,
    link: '/category/earrings',
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    image: braceletsImg,
    link: '/category/bracelets',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    image: weddingImg,
    link: '/category/wedding',
  },
  {
    id: 'mens',
    name: "Men's Collection",
    image: mensImg,
    link: '/category/men',
  },
  {
    id: 'gifts',
    name: 'Gifts',
    image: giftsImg,
    link: '/category/gifts',
  },
];

export default function CategoryCircleSection() {
  return (
    <section className="w-full py-8 sm:py-14 bg-[#FCEED8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Horizontal Category Row with Extra-Large, Crystal-Clear Circles */}
        <div className="flex items-center justify-between gap-4 sm:gap-6 md:gap-7 lg:gap-8 overflow-x-auto no-scrollbar py-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group flex flex-col items-center flex-shrink-0 cursor-pointer transition-transform duration-300"
            >
              {/* Extra-Large Circular Frame with Luxury Double Ring & Shadow Lift */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full p-1.5 sm:p-2 bg-white border-2 sm:border-[2.5px] border-[#DFCAB4] shadow-md group-hover:border-[#5B131B] group-hover:shadow-2xl group-hover:shadow-[#5B131B]/25 group-hover:-translate-y-2 transition-all duration-300 ease-out">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF6F0] relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center rounded-full group-hover:scale-112 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  {/* Subtle inner ambient ring */}
                  <div className="absolute inset-0 rounded-full border border-black/5 pointer-events-none" />
                </div>
              </div>

              {/* Category Label */}
              <span className="mt-3.5 sm:mt-4 text-xs sm:text-sm md:text-base font-bold text-[#3D141A] group-hover:text-[#5B131B] transition-colors duration-200 text-center whitespace-nowrap tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
