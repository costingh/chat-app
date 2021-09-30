import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Chat from "./Chat";

const BoardUser = () => {
  const [showChat, setShowChat] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setShowChat(true);
        console.log(response.data)
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setShowChat(false);
          console.log(_content)

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
      <>
        {showChat && <Chat/>}
      </>
    );
  };
  
  export default BoardUser;