import axios from "axios";
import authHeader from "./auth-header";
import BASE_URL from '../utils/baseUrl';

const API_URL = BASE_URL + "api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getAllUsers = () => {
  return axios.get(API_URL + "all", { headers: authHeader() });
};

const getUser = (userId) => {
  return axios.get(API_URL + `user/${userId}`, { headers: authHeader() });
};

const updateStatus = (userId, status) => {
  return axios.post(API_URL + `user/update-status`, {userId, status});
};

export default {
  register,
  login,
  logout,
  getAllUsers,
  getUser,
  updateStatus
};
