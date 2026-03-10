import axios from "axios";

const api = axios.create({
  baseURL: "https://rbac-backend.up.railway.app",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response?.status === 401) {

      localStorage.removeItem("token");
      window.location.href = "/login";

    }

    return Promise.reject(error);
  }
);

export default api;