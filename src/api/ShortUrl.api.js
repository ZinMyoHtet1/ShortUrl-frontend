import axios from "axios";

const instance = axios.create({
  baseURL: "https://shorturlbyjys.onrender.com",
  // baseURL: "http://localhost:3000",
});

export default {
  createShortUrl: (form) => instance.post("/create", form),
  createTempUserID: () => instance.get("/temp-token"),
};
