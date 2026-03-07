import api from "../api/axios";

type AuthRequest = {
  name?: string;
  email: string;
  password: string;
  role?: string;
};

export const registerUser = async (data: AuthRequest) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data: AuthRequest) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};