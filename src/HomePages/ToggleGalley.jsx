import React, { useState } from 'react';
import './ToggleGallery.css'

function ImageGalleryBlock({ title, images }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleGallery = () => {
    setIsOpen(!isOpen);
  };

  const chunkedImages = [];

  let k = 0;
  for (let i = 0; i < images.length; i++) {
    if ((i + 1) % 4 === 0) {
      chunkedImages.push(images.slice(k, k + 4));
      k = i + 1;
    }
    else if (i + 1 === images.length && images.length !== 4) {
      chunkedImages.push(images.slice(k, images.length));
    }
  }

  return (
    <div className="image-gallery-block">
      <div className="block-title" onClick={toggleGallery}>
        {title}
      </div>
      {isOpen && (
        <div className="gallery-item">
          {chunkedImages.map((group, index) => (
            <div className="gallery-row" key={index}>
              {group.map((image, i) => (
                <div key={i} className="image-container">
                  <img src={image.url} alt={image.title} className='image'/>
                  <div className="image-caption">{image.title}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGalleryBlock;
