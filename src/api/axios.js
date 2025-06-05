import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://codefusion-ai-665288705807.us-central1.run.app/", // JSON server or FastAPI URL
  // baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
