import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://codefusion-ai-backend-273343270591.europe-west1.run.app/", // JSON server or FastAPI URL
  // baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Automatically attach token to all requests
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
