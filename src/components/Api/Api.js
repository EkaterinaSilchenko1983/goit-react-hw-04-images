import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchGalleryWithQuery = async (searchQuery, per_page) => {
  const response = await axios.get(
    `?q=${searchQuery}&page=${per_page}&key=30770270-1c512d3309800b706c0d5f4a2&image_type=photo&orientation=horizontal&per_page=12`
  );
  console.log(response.data.hits);
  return response.data;
};
