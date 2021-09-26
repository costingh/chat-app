import React, {useEffect, useRef} from 'react'
import '../styles/Chat.scss'
import MessageList from './MessageList'
import ChatContent from './ChatContent'
import ChatInfos from './ChatInfos'

// sockets
import SockJS from 'sockjs-client'
import Stomp from 'stompjs';

const SOCKET_URL = '/ws-message';

function Chat() {

	const ws = useRef(null);
	const stomp = useRef(null);
	const chatId = 1234;
	let messagesSubscription = null;

	useEffect(() => {
		ws.current = new SockJS(SOCKET_URL);
		ws.current.onopen = () => alert("ws opened");
		ws.current.onclose = () => alert(1000);

		stomp.current = Stomp.over(ws.current);
		stomp.current.reconnect_delay = 5000;
		stomp.current.connect({}, frame => {
			messagesSubscription = stomp.current.subscribe(`/topic/${chatId}`, chatActions => {
				const response = JSON.parse(chatActions.body);
				console.log(response)
			});
		});

		return () => {
			ws.current.close();
		};
	}, [])

	const sendMessage = (message) => {
		stomp.current.send(`/app/send/${chatId}`, {}, JSON.stringify(message));
	}

    return (
		<div className="home-page__content messages-page">
			<div className="container-fluid h-100">
				<div className="row px-0 h-100">
					<MessageList/>
					<ChatContent 
						sendMessage={sendMessage}
					/>
					<ChatInfos/>
				</div>
			</div>
		</div>
    )
}

export default Chat
