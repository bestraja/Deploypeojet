
import React, { useState } from 'react';
import '../Layout/ImageSlider.css'; 

const images = [
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/557a5573-53db-4c56-99a2-15c039110de0/NIKE+AIR+MAX+90+LTR+%28GS%29.png',
  'https://www.cdiscount.com/pdt2/4/3/9/1/300x300/mp40392439/rw/baskets-nike-nike-air-max-fusion-gs-cj3824-003.jpg',
  'https://www.cdiscount.com/pdt2/7/7/4/1/400x400/mp132762774/rw/basket-7-tnx-006-rose-size-34.jpg',
  'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/25b6211d-181e-4ee2-8ff6-10ae1b1050db/AIR+FORCE+1+%28GS%29.png',
  
  
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="prev-button" onClick={goToPrevious}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button className="next-button" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
