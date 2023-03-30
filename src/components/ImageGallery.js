import React from 'react';
import imageGallery from '../data/image-gallery';

const ImageGallery = () => {

  return (
    <React.Fragment>{[...imageGallery].map(image => {
      return <figure key={image.id}>
        <img src={image.path} alt={image.alt} />
      </figure>
    })}</React.Fragment>
  );
}

export default ImageGallery;