import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/conversation/";

const createConversation = (conversation) => {
  return axios.post(API_URL + "add", conversation, { headers: authHeader() });
};

const getAUserConversations = (userId) => {
  return axios.get(API_URL + `all/${userId}`, { headers: authHeader() });
};

const getAllConversations = () => {
  return axios.get(API_URL + 'all', { headers: authHeader() });
};

const getConversation = (conversationId) => {
  return axios.get(API_URL + `${conversationId}`, { headers: authHeader() });
};

const deleteConversation = (conversationId) => {
  return axios.delete(API_URL + `delete/${conversationId}`, { headers: authHeader() });
};

export default {
    createConversation,
    getAUserConversations,
    getAllConversations,
    getConversation,
    deleteConversation
};