import { useState, useEffect, useRef } from 'react';

import { fetchGalleryWithQuery } from './Api/Api';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  // const [error, setError] = null;

  const isFirstRender = useRef(true);

  const handleSubmit = evt => {
    evt.preventDefault();
    setPage(1);
    setQuery(evt.target.elements.query.value);
    setImages([]);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    async function getImage() {
      if (query === 0) {
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetchGalleryWithQuery(query, page);
        setImages(prevImages => [...prevImages, ...response.hits]);
      } finally {
        setIsLoading(false);
      }
    }
    getImage();
  }, [query, page]);

  const selectImage = imageUrl => {
    // console.log(imageUrl);
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const hendleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const modalClose = () => {
    setSelectedImage('');
    setIsOpen(false);
  };

  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        modalClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onSelect={selectImage} />
      )}

      {isOpen && <Modal src={selectedImage} onClose={modalClose} />}
      {images.length > 0 && <Button onClick={hendleLoadMore} />}
      <GlobalStyle />
    </div>
  );
};
