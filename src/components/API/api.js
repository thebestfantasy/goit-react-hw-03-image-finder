import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=36982386-348bf5f111e16de042d4f4c47&image_type=photo&orientation=horizontal&per_page=12';

export const getPhotos = async () => {
  const { data } = await axios('cat');
  //   const data.data = await axios();
  return data;
};
