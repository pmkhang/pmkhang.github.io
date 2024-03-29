/* eslint-disable jsx-a11y/img-redundant-alt */

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import './SliderShow.scss';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/store';


interface Image {
   id: number;
   url: string;
}

interface SliderGalleryProps {
   images: Image[];
   className?: string;
}

const SlideShow: React.FC<SliderGalleryProps> = ({ images, className }) => {
   const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);


   const splideOptions = {
      type: 'loop',
      rewind: true,
      perPage: 1,
      arrows: false,
      pagination: true,
      autoplay: true,
      interval: 3000,
      pauseOnHover: true,
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
