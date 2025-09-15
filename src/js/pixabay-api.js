import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52296397-de86b3c84befd39f908867df6';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}
