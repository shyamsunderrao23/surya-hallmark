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
    <section className="w-full py-8 sm:py-12 bg-[#FCEED8] overflow-hidden">
      <div className="w-full px-3 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        {/* Full Edge-to-Edge 7-Column Grid: Exactly 7 items spanning from left edge to right edge with NO scrollbar */}
        <div className="grid grid-cols-7 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-start justify-items-center w-full">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group flex flex-col items-center w-full cursor-pointer transition-transform duration-300"
            >
              {/* Extra-Large Circular Frame spanning smoothly from left to right */}
              <div className="relative w-full max-w-[85px] sm:max-w-[120px] md:max-w-[145px] lg:max-w-[170px] xl:max-w-[190px] aspect-square rounded-full p-1 sm:p-1.5 md:p-2 bg-white border-2 sm:border-[2.5px] border-[#DFCAB4] shadow-md group-hover:border-[#5B131B] group-hover:shadow-2xl group-hover:shadow-[#5B131B]/25 group-hover:-translate-y-2 transition-all duration-300 ease-out">
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
              <span className="mt-2.5 sm:mt-3.5 text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-[#3D141A] group-hover:text-[#5B131B] transition-colors duration-200 text-center whitespace-nowrap tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
