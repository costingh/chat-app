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

const SOCKET_URL = 'http://localhost:8080/ws-message';

function Chat() {
	const { user: currentUser } = useSelector((state) => state.auth);

	const CONNECTED_USER = {
		id: currentUser.id,
        profilePicture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        username: currentUser.username,
        lastMessage: 'Yes, I need your help with the project, it need it done by tomorrow 😫',
        status: 'online',
        conversations: [
            'stppvuuidjkel123'
        ],
        description: 'Fly me to the moon 🌙 If you feel like your life is a routine, step back and take a deep breath.',
        socialMedias: [
            {
                name: 'Instagram',
                link: '#'
            },
            {
                name: 'Codepen',
                link: '#'
            },
            {
                name: 'Linkedin',
                link: '#'
            },
        ],
        activities: [
            'Biking',
            'Cooking',
            'Travelling',
            'Graphic Design'
        ]
	}

	const [currentConversation, setCurrentConversation] = useState(null);
	const [messages, setMessages] = useState([]);
	const [contactForm, setContactForm] = useState(false);
	
	const ws = useRef(null);
	const stomp = useRef(null);
	
	let messagesSubscriptions = [];

	const [currentChatContact, setCurrentChatContact] = useState(null);

	useEffect(() => {
			ws.current = new SockJS(SOCKET_URL);
			stomp.current = Stomp.over(ws.current);
			stomp.current.reconnect_delay = 5000;

			stomp.current.connect({}, frame => {
				let newMessagesSubscription = stomp.current.subscribe(`/topic/${currentConversation}`, chatActions => {
					const newMessage = JSON.parse(chatActions.body);
					setMessages(messages => [...messages, newMessage]);
				});

				messagesSubscriptions.push(newMessagesSubscription);
			});

			return () => {
				ws.current.close();
			};
	}, [currentConversation])

	// Must come after useRef and useEffect !!
	if (!currentUser) {
		return <Redirect to="/login" />;
	}

	const sendMessage = (message) => {
		stomp.current.send(`/app/send/${currentConversation}`, {}, JSON.stringify(message));
	}

	const hideAddContactForm = () => {
		setContactForm(false)
	}

	const showAddContactForm = () => {
		setContactForm(true)
	}
					

    return (
		<div className="home-page__content messages-page">
			<div className="container-fluid h-100">
				<div className="row px-0 h-100">
					<MessageList
						currentChatContact={currentChatContact}
						setCurrentChatContact={setCurrentChatContact}
						currentUser={CONNECTED_USER}
						setCurrentConversation={setCurrentConversation}
						hideAddContactForm={hideAddContactForm}
						contactForm={contactForm}
					/>
					<ChatContent 
						sendMessage={sendMessage}
						currentUser={CONNECTED_USER}
						currentChatContact={currentChatContact}
						messages={messages}
						setMessages={setMessages}
					/>
					<ChatInfos
						currentChatContact={currentChatContact}
						showAddContactForm={showAddContactForm}
					/>
				</div>
			</div>
		</div>
    )
}

export default Chat
