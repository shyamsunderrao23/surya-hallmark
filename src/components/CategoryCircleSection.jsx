import React from 'react';
import { Link } from 'react-router-dom';

// Import high-resolution images directly for automatic Vite cache-busting & instant loading
import ringsImg from '../assets/categories/rings.jpg';
import necklacesImg from '../assets/categories/necklaces.jpg';
import earringsImg from '../assets/categories/earrings.jpg';
import braceletsImg from '../assets/categories/bracelets.jpg';
import weddingImg from '../assets/categories/wedding.jpg';
import mensImg from '../assets/categories/mens.jpg';
import pendantsImg from '../assets/categories/pendants.jpg';

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
    id: 'pendants',
    name: 'Pendants',
    image: pendantsImg,
    link: '/category/pendants',
  },
];

export default function CategoryCircleSection() {
  return (
    <section className="w-full py-10 sm:py-16 bg-[#FCEED8] overflow-hidden">
      <div className="w-full px-2 sm:px-4 md:px-7 lg:px-9 xl:px-12">
        {/* Full Edge-to-Edge 7-Column Grid: Static Circles with NO Hover Effects */}
        <div className="grid grid-cols-7 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-start justify-items-center w-full">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="flex flex-col items-center w-full cursor-pointer"
            >
              {/* Extra-Large Full-Bleed Circle with NO outer ring and NO hover shift */}
              <div className="relative w-full max-w-[115px] sm:max-w-[150px] md:max-w-[185px] lg:max-w-[215px] xl:max-w-[240px] aspect-square rounded-full overflow-hidden shadow-sm">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center rounded-full"
                  loading="eager"
                />
              </div>

              {/* Category Label */}
              <span className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#3D141A] text-center whitespace-nowrap tracking-wide">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
