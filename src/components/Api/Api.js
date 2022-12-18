import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchGalleryWithQuery = async (searchQuery, per_page) => {
  try {
    const response = await axios.get(
      `?q=${searchQuery}&page=${per_page}&key=30770270-1c512d3309800b706c0d5f4a2&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (response.data.hits.length === 0) {
      throw Error('There is no any match on your request!');
    }

    return response.data;
  } catch (error) {
    console.log(error.config);
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      throw Error('There is no server response. Try later again!');
    } else if (error.request) {
      console.log(error.request);
      throw Error('There is no server response. Try later again!');
    } else {
      console.log('Error', error.message);
      throw error;
    }
  }
};
