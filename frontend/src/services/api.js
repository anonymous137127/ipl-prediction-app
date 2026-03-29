import axios from "axios";

const API = axios.create({
  baseURL: "https://ipl-backend-0emd.onrender.com/api",
});

export default API;