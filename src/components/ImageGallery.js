import React from 'react';
import imageGallery from '../data/image-gallery';

const ImageGallery = () => {

  return (
    <React.Fragment>{[...imageGallery].map(image => {
      return <img src={image.path} alt="" key={image.id} />
    })}</React.Fragment>
  );
}

export default ImageGallery;