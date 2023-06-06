import axios from 'axios';

axios.defaults.baseURL = 'https://food-delivery-g72t.onrender.com';

export const getAllFoods = async signal => {
  const response = await axios.get(`/api/dishes`, {
    signal,
  });
  return response.data;
};

export const getAllOrders = async (movieId, signal) => {
  const response = await axios.get(`/movie/${movieId}`, {
    signal,
  });
  return response.data;
};

export const addNewOrder = async (data, signal) => {
  const response = await axios.post(`/api/orders`, data);
  return response.data;
};
