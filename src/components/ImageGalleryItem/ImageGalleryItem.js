import { PropTypes } from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryItems,
} from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ tags, image, onSelect }) => {
  return (
    <ImageGalleryItems id={image.id}>
      <ImageGalleryItemImage
        src={image.webformatURL}
        alt={tags}
        onClick={() => onSelect(image.largeImageURL)}
      />
    </ImageGalleryItems>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
