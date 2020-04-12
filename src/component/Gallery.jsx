import React from "react";

const Gallery = () => {
  return (
    <div class="gallery">
      <figure class="gallery__item">
        <img src="img/hotel-1.jpg" alt="hotel 1" class="gallery__photo" />
      </figure>
      <figure class="gallery__item">
        <img src="img/hotel-2.jpg" alt="hotel 2" class="gallery__photo" />
      </figure>
      <figure class="gallery__item">
        <img src="img/hotel-3.jpg" alt="hotel 3" class="gallery__photo" />
      </figure>
    </div>
  );
};

export default Gallery;
