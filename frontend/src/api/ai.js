import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const askAI = async (message) => {
  const response = await API.post("/ask", {
    message,
  });

  return response.data.response;
};