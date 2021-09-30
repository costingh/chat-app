import axios from "axios";
import authHeader from "./auth-header";
import BASE_URL from '../utils/baseUrl';

const API_URL = BASE_URL + "api/messages/";

const getAllMessagesFromConversation = (conversationId) => {
  return axios.get(API_URL + `all-messages/${conversationId}`, { headers: authHeader() });
};

const getLastMessageFromConversation = (conversationId) => {
  return axios.get(API_URL + `last-message/${conversationId}`, { headers: authHeader() });
};

export default {
    getAllMessagesFromConversation,
    getLastMessageFromConversation
};