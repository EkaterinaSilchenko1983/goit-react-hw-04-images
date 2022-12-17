import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { PropTypes } from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onSelect }) => {
  return (
    <ImageGalleryList>
      {images.map(image => (
        <ImageGalleryItem
          image={image}
          key={image.id}
          tags={image.tags}
          onSelect={onSelect}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
};
