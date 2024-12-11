import axios from "axios";

const instance = axios.create({
  baseURL: "https://myapp-jys.onrender.com/products",
  // baseURL: "http://localhost:3000/products",
});

export default {
  getAll: () => instance.get(),
  getById: (productId) => instance.get(`/${productId}`),
  post: (productForm) => instance.post("/", productForm),
  deleteById: (productId) => instance.delete(`${productId}`),
};
