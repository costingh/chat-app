// react
import React, {useEffect, useRef, useState} from 'react'
// components
import MessageList from './MessageList'
import ChatContent from './ChatContent'
import ChatInfos from './ChatInfos'
// redux 
import { useSelector } from "react-redux";
// sockets
import SockJS from 'sockjs-client'
import Stomp from 'stompjs';
// router
import { Redirect } from 'react-router-dom';
// styles
import '../styles/Chat.scss'
// utils
import {getQueryParam} from '../utils/utils'

const SOCKET_URL = '/ws-message';

function Chat() {
	const { user: currentUser } = useSelector((state) => state.auth);
	const [currentConversation, setCurrentConversation] = useState(null);

	const ws = useRef(null);
	const stomp = useRef(null);
	
	const chatId = 1234;
	let messagesSubscriptions = [];

	const [currentChatContact, setCurrentChatContact] = useState(null);

	useEffect(() => {
		ws.current = new SockJS(SOCKET_URL);
			ws.current.onopen = () => alert("ws opened");
			ws.current.onclose = () => alert(1000);

			stomp.current = Stomp.over(ws.current);
			stomp.current.reconnect_delay = 5000;

			return () => {
				ws.current.close();
			};
	}, [])

	useEffect(() => {
		stomp.current.connect({}, frame => {
			let newMessagesSubscription = stomp.current.subscribe(`/topic/${currentConversation}`, chatActions => {
				const response = JSON.parse(chatActions.body);
				console.log(response)
			});

			messagesSubscriptions.push(newMessagesSubscription);
		});
	}, [currentConversation])

	// Must come after useRef and useEffect !!
	if (!currentUser) {
		return <Redirect to="/login" />;
	}

	const sendMessage = (message) => {
		stomp.current.send(`/app/send/${currentConversation}`, {}, JSON.stringify(message));
	}

    return (
		<div className="home-page__content messages-page">
			<div className="container-fluid h-100">
				<div className="row px-0 h-100">
					<MessageList
						currentChatContact={currentChatContact}
						setCurrentChatContact={setCurrentChatContact}
						currentUser={currentUser}
						setCurrentConversation={setCurrentConversation}
					/>
					<ChatContent 
						sendMessage={sendMessage}
						currentUser={currentUser}
						currentChatContact={currentChatContact}
					/>
					<ChatInfos/>
				</div>
			</div>
		</div>
    )
}

export default Chat
