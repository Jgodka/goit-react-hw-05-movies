import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '283a14b4f248b8ca5f38791577975244';

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data.results;
};
export const getDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data.results;
};
