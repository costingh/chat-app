import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/conversation/";

const createConversation = (conversation) => {
  return axios.post(API_URL + "add", { headers: authHeader() }, conversation);
};

const getAUserConversations = (userId) => {
  return axios.get(API_URL + `all/${userId}`, { headers: authHeader() });
};

const getAllConversations = () => {
  return axios.get(API_URL + 'all', { headers: authHeader() });
};

export default {
    createConversation,
    getAUserConversations,
    getAllConversations
};