import React, {useState, useRef, useEffect} from 'react'
import AuthService from "../services/auth.service"
import ConversationsService from "../services/conversations.service"
import MessagesService from '../services/messages.service';
import UserService from '../services/auth.service';
import AddNewContact from './AddNewContact';

function MessageList({currentChatContact, setCurrentChatContact, currentUser, setCurrentConversation, hideAddContactForm, contactForm, showAddContactForm, onlineUsersIds}) {
    const inputRef = useRef();

    const [filteredList, setFilteredList] = useState([]);
    const [allUsersList, setAllUsersList] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [realTimeContacts, setRealTimeContacts] = useState([]);

    useEffect(() => {
        if(contacts.length !== 0) {
            setRealTimeContacts(contacts)
        }
    }, [contacts])

    useEffect(() => {
        let timeout;
        const timeout0 = setTimeout(() => {
            const contactList = [];

            contacts.map(contact => {
                if(contact.status === 'online') {
                    if(onlineUsersIds.includes(contact.id)) {
                        contactList.push(contact)
                       // console.log('User is online and in array')
                    }
                    else {
                        // console.log('User is only but not in array')
                        contactList.push(contact)
                    }
                } else {
                    if(!onlineUsersIds.includes(contact.id)) {
                        // console.log('User is offline but not in array')
                        contactList.push(contact)   
                    }
                    else {
                        // console.log('User is offline but in array')
                        UserService.updateStatus(contact.id, 'online')
                            .then((resp) => console.log(resp))

                        let updatedContact = {...contact};
                        updatedContact.status = 'online'
                        contactList.push(updatedContact)
                    }
                }
            })
            
            timeout = setTimeout(() => {
                setRealTimeContacts(contactList);
            }, 1000)
        }, 3000)

        return () => {
            clearTimeout(timeout);
            clearTimeout(timeout0);
        }
    }, [onlineUsersIds, contacts])

    useEffect(() => {
        ConversationsService.getAUserConversations(currentUser.id)
            .then((resp) => {setConversations(resp.data)})
            .catch((err) => console.log(err))
    }, [currentUser.id])

    useEffect(() => {
        if(contactForm) {
            AuthService.getAllUsers()
                .then((users) => {
                    setAllUsersList(users.data)
                    setFilteredList(users.data)
                })
                .catch((err) => console.log(err))
        }
    }, [contactForm])

    const addQueryParam = (key, value) => {
        const url = new URL(window.location.href);
        url.searchParams.set(key, value);
        window.history.pushState({}, '', url.toString());
    };

    const changeActiveUser = (user) => {
        const chat = document.querySelector('.chat');
        chat.classList.add('chat--show')

        setCurrentChatContact(user);
        const currentConversationId = user.conversationId;
        setCurrentConversation(currentConversationId);
        addQueryParam('conversation', currentConversationId);
    }

    const handleInputChange = (event) => {
        if(contactForm && event.target.value !== '') {
            const filteredUsers = allUsersList.filter(user => user.username.toLowerCase().startsWith(event.target.value.toLowerCase()));
            setFilteredList(filteredUsers)
        }
        if(event.target.value === '') setFilteredList(allUsersList)
    }

    const addToContacts = (newContact) => {
        const found = contacts.find(contact => contact.id === newContact.id);
        if(found) {
            alert('Contact already exists!');
            return;
        }
        else {
            const newConversation = {
                participantOneId: currentUser.id,
                participantTwoId: newContact.id
            };

            // create a new conversation
            // this request retrieves an object with fields: id, participantOneId, participantTwoId, createdAt
            ConversationsService.createConversation(newConversation)
                .then((newConversation) => {
                    // get the new contact user, to be displayed in messageList component
                    // thi user id is participantTwoId
                    UserService.getUser(newConversation.data.participantTwoId)
                        .then((user) => {
                            // add the conversationId field to the new user
                            // then add it to state (no need to refresh the page to display new added contact)
                            const newContact = {
                                conversationId: newConversation.data.id,
                                ...user.data
                            }
                            setContacts(contacts => [...contacts, newContact])
                        }) 
                        .catch((err) => console.log(err))
                }) 
                .catch((err) => console.log(err))
    
            hideAddContactForm()
            inputRef.current.value = ''
        }
    }

    const getNewContactDetails = async (conversation, participant, allContacts) => {
        let participantId = participant === 'one' ? conversation.participantOneId : conversation.participantTwoId;
        try {
          const user = AuthService.getUser(participantId);
          user.then((userResponse) => {
            const lastMessage = MessagesService.getLastMessageFromConversation(conversation.id);
            lastMessage.then((messageResponse) => {
                allContacts.push({
                    ...userResponse.data,
                    conversationId: conversation.id,
                    lastMessage: messageResponse.data
                }) 
            })
          })
        } catch (err) {
          console.log('Could not retrieve information!')
        }
    }

    useEffect(() => {
        if(conversations.length !== 0) {
            const allContacts = [];
            conversations.map((conv) => {
                if(conv.participantOneId !== currentUser.id) getNewContactDetails(conv, 'one', allContacts)
                else getNewContactDetails(conv, 'two', allContacts)
            })

            const timeout = setTimeout(() => {
                setContacts(allContacts);
            }, 1000)        
            
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [conversations, currentUser.id])

    const toggleDarkMode = () => {
        const body = document.querySelector('body');
        if( body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode')
        } else {
            body.classList.add('dark-mode')
        }
    }

    /* onlineUsersIds.find(id => contact.id === id)  */

    return (
        <div className="col-12 col-md-4 col-lg-5 col-xl-3 px-0 messages-page__list-scroll">
            <div className="messages-page__header mb-0 px-4 pt-3 pb-3">
                <span className="messages-page__title">
                    {contactForm 
                        ? <div style={{ cursor: 'pointer'}} onClick={hideAddContactForm}>
                            <svg style={{marginBottom: '3px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg> Go Back
                        </div>
                        : currentUser.username
                    }
                </span>
                <div className="messages-page__dark-mode-toogler" onClick={toggleDarkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--dark-mode" viewBox="0 0 49.7 49.7">
                        <path d="M25.4,49.7A25.6,25.6,0,0,1,1.3,32.3,25.6,25.6,0,0,1,17.3.1a2,2,0,0,1,2.1.5,2.2,2.2,0,0,1,.5,2.1,19.9,19.9,0,0,0-1.2,6.8A21,21,0,0,0,25,24.7,21,21,0,0,0,40.2,31h0a20.9,20.9,0,0,0,6.9-1.2,2,2,0,0,1,2.5,2.5,25.8,25.8,0,0,1-16,16.1A28.7,28.7,0,0,1,25.4,49.7ZM15,5.5A21.4,21.4,0,0,0,5.1,31.1,21.5,21.5,0,0,0,15.9,43.4a21.2,21.2,0,0,0,28.3-8.8,17.5,17.5,0,0,1-4,.4h0a24.9,24.9,0,0,1-18-7.5,24.9,24.9,0,0,1-7.5-18A26.9,26.9,0,0,1,15,5.5Z" fill="#f68b3c" />
                    </svg>
                </div>
            </div>
            <div className="messages-page__search mb-0 px-3 pb-3">
                <div className="custom-form__search-wrapper">
                    <input 
                        type="text" 
                        className="form-control custom-form" 
                        id="search" 
                        placeholder={`${contactForm  ? 'Search for a user...' : 'Find a user or a message???'}`} 
                        autoComplete="off"
                        onChange={handleInputChange}    
                        ref={inputRef}
                    />
                    <button type="submit" className="custom-form__search-submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--search" viewBox="0 0 46.6 46.6">
                            <path d="M46.1,43.2l-9-8.9a20.9,20.9,0,1,0-2.8,2.8l8.9,9a1.9,1.9,0,0,0,1.4.5,2,2,0,0,0,1.5-.5A2.3,2.3,0,0,0,46.1,43.2ZM4,21a17,17,0,1,1,33.9,0A17.1,17.1,0,0,1,33,32.9h-.1A17,17,0,0,1,4,21Z" fill="#f68b3c" />
                        </svg>
                    </button>
                </div>
            </div>
            <ul className="messages-page__list pb-5 px-1 px-md-3">
                {
                    contactForm 
                        ? filteredList.map((user) => {
                            return  <li 
                                        key={user.id}
                                        className={`
                                            messaging-member messaging-member--new 
                                            ${user.status === 'online' 
                                                ? 'messaging-member--online' 
                                                : ''} 
                                            ${currentChatContact && 
                                                currentChatContact.id === user.id 
                                                    ? 'messaging-member--active' 
                                                    : ''}`}
                                        onClick={() => addToContacts(user)}
                                    >
                                        <div className="messaging-member__wrapper">
                                            <div className="messaging-member__avatar">
                                                <img src={user.profilePicture ? user.profilePicture : '/chat-app/avatar_placeholder.png'} alt={user.username} loading="lazy"/>
                                                <div className="user-status"></div>
                                            </div>
                                            <span className="messaging-member__name">{user.username}</span>
                                            <span className="messaging-member__message">Click to add user to contact list!</span>
                                        </div>
                                    </li>
                        })
                        : realTimeContacts.length === 0
                            ? <div>
                                <div style={{marginTop: '10px', textAlign: 'center'}}>No conversations yet...</div>
                                <AddNewContact showAddContactForm={showAddContactForm}/>
                            </div>
                            : realTimeContacts.map(contact => {
                                return  <li 
                                            key={contact.id}
                                            className={`
                                                messaging-member 
                                                ${contact.status === 'online'
                                                    ? 'messaging-member--online' 
                                                    : ''} 
                                                ${currentChatContact && 
                                                    currentChatContact.id === contact.id 
                                                        ? 'messaging-member--active' 
                                                        : ''}`} // add  messaging-member--new if has new message
                                            onClick={() => changeActiveUser(contact)}
                                        >
                                            <div className="messaging-member__wrapper">
                                                <div className="messaging-member__avatar">
                                                    <img src={contact.profilePicture ? contact.profilePicture : '/chat-app/avatar_placeholder.png'} alt={contact.username} loading="lazy"/>
                                                    <div className="user-status"></div>
                                                </div>
                                                <span className="messaging-member__name">{contact.username}</span>
                                                <span className="messaging-member__message">{contact?.lastMessage?.body ? contact?.lastMessage?.body : 'No messages yet'}</span>
                                            </div>
                                        </li>
                        })
                }
            </ul>
        </div>
    )
}

export default MessageList
