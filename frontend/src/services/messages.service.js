import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/messages/";

const getAllMessagesFromConversation = (conversationId) => {
  return axios.get(API_URL + `all-messages/${conversationId}`, { headers: authHeader() });
};

export default {
    getAllMessagesFromConversation,
};