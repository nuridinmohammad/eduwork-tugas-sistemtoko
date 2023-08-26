import axios from "axios";

export const getProducts = async (params) => {
  return await axios.get(
    `https://sistemtoko.com/public/demo/product?page=${params.page}&sorting=${params.sorting}&categories=${params.cat}&search_name=${params.search}`
  );
};

export const getCategories = async () => {
  return await axios.get(`https://sistemtoko.com/public/demo/cat`);
};

export const getDetail = async (id) => {
  return await axios.get(`https://sistemtoko.com/public/demo/single/${id}`);
};

export const getVarian = async (id) => {
  return await axios.get(`https://sistemtoko.com/public/demo/varian/${id}`);
};

export const getSearch = async () => {
  return await axios.get(`https://sistemtoko.com/public/demo/categories`);
};
