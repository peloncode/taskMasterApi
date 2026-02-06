import axios from "axios";

// Vite usa import.meta.env en lugar de process.env
const API_URL = import.meta.env.VITE_API_URL + "/products";

export const getProducts = () => axios.get(API_URL);
export const createProduct = (data: any) => axios.post(API_URL, data);
export const updateProduct = (id: string, data: any) =>
  axios.put(`${API_URL}/${id}`, data);
export const deleteProduct = (id: string) => axios.delete(`${API_URL}/${id}`);
