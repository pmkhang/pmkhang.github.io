/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import './SliderShow.scss';

interface Image {
   id: number;
   url: string;
}

interface SliderGalleryProps {
   images: Image[];
   className?: string;
}

const SlideShow: React.FC<SliderGalleryProps> = ({ images, className }) => {
   const splideOptions = {
      type: 'slide',
      rewind: true,
      perPage: 1,
      arrows: false,
      pagination: true,
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      perMove: 1,
   };

   return (
      <Splide options={splideOptions} className={className}>
         {images.map((image) => (
            <SplideSlide key={image.id} className="slide-item">
               <img className="slide-img" src={image.url} alt={`Image ${image.id}`} />
            </SplideSlide>
         ))}
      </Splide>
   );
};

export default SlideShow;
