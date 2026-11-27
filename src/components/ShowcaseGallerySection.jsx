import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

export default function ShowcaseGallerySection() {
  return (
    <section className="w-full p-0 m-0 overflow-hidden bg-[#FCEED8]">
      {/* 3 Vertical Images Side-by-Side Without Any Gap, from Left Corner to Right Corner */}
      <div className="grid grid-cols-3 w-full gap-0 p-0 m-0">
        <div className="w-full overflow-hidden leading-none">
          <img
            src={image1}
            alt="Surya Hallmark Showcase Collection 1"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>
        <div className="w-full overflow-hidden leading-none">
          <img
            src={image2}
            alt="Surya Hallmark Showcase Collection 2"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>
        <div className="w-full overflow-hidden leading-none">
          <img
            src={image3}
            alt="Surya Hallmark Showcase Collection 3"
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
