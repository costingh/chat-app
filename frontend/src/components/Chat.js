import React from 'react'
import '../styles/Chat.scss'
import MessageList from './MessageList'
import ChatContent from './ChatContent'
import ChatInfos from './ChatInfos'

function Chat() {
    return (
		<div className="home-page__content messages-page">
			<div className="container-fluid h-100">
				<div className="row px-0 h-100">
					<MessageList/>
					<ChatContent/>
					<ChatInfos/>
				</div>
			</div>
		</div>
    )
}

export default Chat
