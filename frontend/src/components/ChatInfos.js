import React from 'react'
import AddNewContact from './AddNewContact'

function ChatInfos({currentChatContact, showAddContactForm}) {

    const closeUserProfile = () => {
        const chat = document.querySelector('.chat');
        chat.classList.remove('chat--mobile');

        const profile = document.querySelector('.user-profile');
        profile.classList.remove('user-profile--show');
    }

    return (
        <div className="col-12 col-md-5 col-lg-4 col-xl-3 px-4 px-sm-5 px-lg-4 user-profile">
            <div className="user-profile__close d-flex d-xl-none" onClick={closeUserProfile}>
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 38.8 38.9">
                    <g>
                        <path d="M2,38.9a1.9,1.9,0,0,1-1.4-.5,2.1,2.1,0,0,1,0-2.9L35.4.6a1.9,1.9,0,0,1,2.8,0,1.9,1.9,0,0,1,0,2.8L3.4,38.4A1.9,1.9,0,0,1,2,38.9Z" fill="#d87232" />
                        <path d="M36.8,38.9a1.9,1.9,0,0,1-1.4-.5L.6,3.4A1.9,1.9,0,0,1,.6.6,1.9,1.9,0,0,1,3.4.6L38.2,35.5a2.1,2.1,0,0,1,0,2.9A1.9,1.9,0,0,1,36.8,38.9Z" fill="#d87232" />
                    </g>
                </svg>
            </div>
            <div className="user-profile__wrapper">
                <div className="user-profile__avatar">
                    <img src={currentChatContact && currentChatContact.profilePicture ? currentChatContact.profilePicture : './avatar_placeholder.png'} alt={currentChatContact ? currentChatContact.username : 'image'} loading="lazy"/>
                </div>
                <div className="user-profile__details mt-1">
                    <span className="user-profile__name">{currentChatContact ? currentChatContact.username : 'John Doe'}</span>
                    <span className="user-profile__phone">(025) 015-234-567</span>
                    <span className="user-profile__location">New York, United States</span>
                </div>
                <div className="user-profile__description">
                    <p>Fly me to the moon 🌙 If you feel like your life is a routine, step back and take a deep breath.</p>
                </div>
                <div className="user-profile__learning mt-4">
                    <span className="user-profile__label">Social Medias</span>
                    <ul className="user-profile__tags user-profile__tags--primary mt-2">
                        {currentChatContact 
                            && currentChatContact.socialMedias 
                                ? currentChatContact.socialMedias.map(social => {
                                    return <li key={social.name}><a href={social.link} target="_blank">{social.name}</a></li>
                                })
                                : <li><a href='' target="_blank">No social media added :(</a></li>
                        }
                    </ul>
                </div>
                <div className="user-profile__hobbies">
                    <span className="user-profile__label">Activities</span>
                    <ul className="user-profile__tags user-profile__tags--secondary mt-2">
                        {currentChatContact && currentChatContact.activities?.map((activity, index) => {
                            return <li key={index}>{activity}</li>
                        })}
                    </ul>
                </div>
                <AddNewContact showAddContactForm={showAddContactForm}/>
            </div>
        </div>
    )
}

export default ChatInfos
