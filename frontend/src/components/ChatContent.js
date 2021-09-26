import React from 'react'

function ChatContent({sendMessage}) {

    const send = () => {
        sendMessage('Hello')
        console.log('Message sent...')
    }

    return (
        <div className="chat col-12 col-md-8 col-lg-7 col-xl-6 px-0 pl-md-1">
            <div className="chat__container">
                <div className="chat__wrapper py-2 pt-mb-2 pb-md-3">
                    <div className="chat__messaging messaging-member--online pb-2 pb-md-2 pl-2 pl-md-4 pr-2">
                        <div className="chat__previous d-flex d-md-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--previous" viewBox="0 0 45.5 30.4">
                                <path d="M43.5,13.1H7l9.7-9.6A2.1,2.1,0,1,0,13.8.6L.9,13.5h0L.3,14v.6c0,.1-.1.1-.1.2v.4a2,2,0,0,0,.6,1.5l.3.3L13.8,29.8a2.1,2.1,0,1,0,2.9-2.9L7,17.2H43.5a2,2,0,0,0,2-2A2.1,2.1,0,0,0,43.5,13.1Z" fill="#f68b3c" />
                            </svg>
                        </div>
                        <div className="chat__notification d-flex d-md-none chat__notification--new">
                            <span>1</span>
                        </div>
                        <div className="chat__infos pl-2 pl-md-0">
                            <div className="chat-member__wrapper" data-online="true">
                                <div className="chat-member__avatar">
                                    <img src="https://randomuser.me/api/portraits/thumb/women/56.jpg" alt="Jenny Smith" loading="lazy"/>
                                    <div className="user-status user-status--large"></div>
                                </div>
                                <div className="chat-member__details">
                                    <span className="chat-member__name">Jenny Smith</span>
                                    <span className="chat-member__status">Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="chat__actions mr-2 ">
                            <ul className="m-0">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 48 48">
                                        <path d="M38.4,48c-2.1,0-5.1-.8-9.5-3.2a62.9,62.9,0,0,1-14.6-11A61.7,61.7,0,0,1,3.2,19C-.9,11.8-.3,8.5.7,6.4A9.7,9.7,0,0,1,4.8,2,21.1,21.1,0,0,1,7.8.4h.3c1.8-.7,3-.3,4.9,1.5h.1a40.1,40.1,0,0,1,5.4,8.2c1.3,2.6,1.6,4.3-.2,6.9l-.5.6c-.8,1-.8,1.2-.8,1.6s1.9,3.4,5.2,6.7S28,30.8,28.8,31s.6,0,1.6-.8l.7-.4c2.5-1.9,4.2-1.6,6.8-.3A40.6,40.6,0,0,1,46.1,35h.1c1.8,1.9,2.2,3.1,1.5,4.9v.2h0a21.1,21.1,0,0,1-1.6,3,10,10,0,0,1-4.3,4.1A7.7,7.7,0,0,1,38.4,48ZM9.5,4.1H9.2L6.9,5.4H6.8A6.3,6.3,0,0,0,4.3,8.1c-.3.7-1.2,2.6,2.4,9A58.9,58.9,0,0,0,17.1,30.9,58.2,58.2,0,0,0,30.9,41.3c6.4,3.6,8.4,2.7,9.1,2.4a6.7,6.7,0,0,0,2.5-2.5.1.1,0,0,0,.1-.1c.5-.8.9-1.6,1.3-2.4v-.2l-.5-.6a35.4,35.4,0,0,0-7.3-4.8c-1.7-.8-1.8-.8-2.7-.1l-.6.4A5.3,5.3,0,0,1,28,34.9c-2.9-.6-7.4-4.9-8.7-6.2s-5.6-5.8-6.2-8.7.6-3.6,1.5-4.8l.4-.6c.7-.9.8-1-.1-2.7a35.4,35.4,0,0,0-4.8-7.3Z" fill="#f68b3c" />
                                    </svg>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 46.8 47.4">
                                        <path d="M35.8,47.4H11a11,11,0,0,1-11-11V11.6A11,11,0,0,1,11,.6h8.8a2,2,0,1,1,0,4H11a7,7,0,0,0-7,7V36.4a7,7,0,0,0,7,7H35.8a7,7,0,0,0,7-7v-9a2,2,0,1,1,4,0v9A11,11,0,0,1,35.8,47.4Z" fill="#f68b3c" />
                                        <path d="M36.6,20.4A10.2,10.2,0,1,1,46.8,10.2,10.2,10.2,0,0,1,36.6,20.4ZM36.6,4a6.2,6.2,0,1,0,6.2,6.2A6.2,6.2,0,0,0,36.6,4Z" fill="#f68b3c" />
                                    </svg>
                                </li>
                                <li className="chat__details d-flex d-xl-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 42.2 11.1">
                                        <g>
                                            <circle cx="5.6" cy="5.6" r="5.6" fill="#d87232" />
                                            <circle cx="21.1" cy="5.6" r="5.6" fill="#d87232" />
                                            <circle cx="36.6" cy="5.6" r="5.6" fill="#d87232" />
                                        </g>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat__content pt-4 px-3">
                        <ul className="chat__list-messages">
                            <li>
                                <div className="chat__time">Yesterday at 16:43</div>
                                <div className="chat__bubble chat__bubble--you">
                                    Hey, I bought something yesterdat but haven't gotten any confirmation. Do you know I if the order went through?
                                </div>
                            </li>
                            <li>
                                <div className="chat__bubble chat__bubble--me">
                                    Hi! I just checked, your order went through and is on it's way home. Enjoy your new computer! 😃
                                </div>
                            </li>
                            <li>
                                <div className="chat__bubble chat__bubble--you">
                                    Ohh thanks ! I was really worried about it !
                                </div>
                                <div className="chat__bubble chat__bubble--you">
                                    Can't wait for it to be delivered
                                </div>
                            </li>
                            <li>
                                <div className="chat__time">07:14</div>
                                <div className="chat__bubble chat__bubble--me">
                                    Aenean iaculis massa non lorem dignissim volutpat. Praesent id faucibus lorem, a sagittis nunc. Duis facilisis lectus vel sapien ultricies, sed placerat augue elementum. In sagittis, justo nec sodales posuere, nunc est sagittis tellus, eget scelerisque dolor risus vel augue
                                </div>
                                <div className="chat__bubble chat__bubble--me">
                                    Is everything alright?
                                </div>
                            </li>
                            <li>
                                <div className="chat__bubble chat__bubble--you">
                                    Vestibulum finibus pulvinar quam, at tempus lorem. Pellentesque justo sapien, pulvinar sed magna et, vulputate commodo nisl. Aenean pharetra ornare turpis. Pellentesque viverra blandit ullamcorper. Mauris tincidunt ac lacus vel convallis. Vestibulum id nunc nec urna accumsan dapibus quis ullamcorper massa. Aliquam erat volutpat. Nam mollis mi et arcu dapibus condimentum.
                                </div>
                                <div className="chat__bubble chat__bubble--you">
                                    Nulla facilisi. Duis laoreet dignissim lectus vel maximus
                                </div>
                                <div className="chat__bubble chat__bubble--you">
                                    Curabitur volutpat, ipsum a condimentum hendrerit ! 😊
                                </div>
                            </li>
                            <li>
                                <div className="chat__time">09:26</div>
                                <div className="chat__bubble chat__bubble--me">
                                    Perfect, thanks !
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="chat__send-container px-2 px-md-3 pt-1 pt-md-3">
                        <div className="custom-form__send-wrapper">
                            <input type="text" className="form-control custom-form" id="message" placeholder="Ecrivez un message …" autoComplete="off"/>
                            <div className="custom-form__send-img">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--send-img" viewBox="0 0 45.7 45.7">
                                    <path d="M6.6,45.7A6.7,6.7,0,0,1,0,39.1V6.6A6.7,6.7,0,0,1,6.6,0H39.1a6.7,6.7,0,0,1,6.6,6.6V39.1h0a6.7,6.7,0,0,1-6.6,6.6ZM39,4H6.6A2.6,2.6,0,0,0,4,6.6V39.1a2.6,2.6,0,0,0,2.6,2.6H39.1a2.6,2.6,0,0,0,2.6-2.6V6.6A2.7,2.7,0,0,0,39,4Zm4.7,35.1Zm-4.6-.4H6.6a2.1,2.1,0,0,1-1.8-1.1,2,2,0,0,1,.3-2.1l8.1-10.4a1.8,1.8,0,0,1,1.5-.8,2.4,2.4,0,0,1,1.6.7l4.2,5.1,6.6-8.5a1.8,1.8,0,0,1,1.6-.8,1.8,1.8,0,0,1,1.5.8L40.7,35.5a2,2,0,0,1,.1,2.1A1.8,1.8,0,0,1,39.1,38.7Zm-17.2-4H35.1l-6.5-8.6-6.5,8.4C22,34.6,22,34.7,21.9,34.7Zm-11.2,0H19l-4.2-5.1Z" fill="#f68b3c" />
                                </svg>
                            </div>
                            <div className="custom-form__send-emoji">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--send-emoji" viewBox="0 0 46.2 46.2">
                                    <path d="M23.1,0A23.1,23.1,0,1,0,46.2,23.1,23.1,23.1,0,0,0,23.1,0Zm0,41.6A18.5,18.5,0,1,1,41.6,23.1,18.5,18.5,0,0,1,23.1,41.6Zm8.1-20.8a3.5,3.5,0,0,0,3.5-3.5,3.5,3.5,0,0,0-7,0,3.5,3.5,0,0,0,3.5,3.5ZM15,20.8a3.5,3.5,0,0,0,3.5-3.5A3.5,3.5,0,0,0,15,13.9a3.4,3.4,0,0,0-3.4,3.4A3.5,3.5,0,0,0,15,20.8Zm8.1,15a12.6,12.6,0,0,0,10.5-5.5,1.7,1.7,0,0,0-1.3-2.6H14a1.7,1.7,0,0,0-1.4,2.6A12.9,12.9,0,0,0,23.1,35.8Z" fill="#f68b3c" />
                                </svg>
                            </div>
                            <button type="submit" className="custom-form__send-submit"  onClick={send}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--send" viewBox="0 0 45.6 45.6">
                                    <g>
                                        <path d="M20.7,26.7a1.4,1.4,0,0,1-1.2-.6,1.6,1.6,0,0,1,0-2.4L42.6.5a1.8,1.8,0,0,1,2.5,0,1.8,1.8,0,0,1,0,2.5L21.9,26.1A1.6,1.6,0,0,1,20.7,26.7Z" fill="#d87232" />
                                        <path d="M29.1,45.6a1.8,1.8,0,0,1-1.6-1L19.4,26.2,1,18.1a1.9,1.9,0,0,1-1-1.7,1.8,1.8,0,0,1,1.2-1.6L43.3.1a1.7,1.7,0,0,1,1.8.4,1.7,1.7,0,0,1,.4,1.8L30.8,44.4a1.8,1.8,0,0,1-1.6,1.2ZM6.5,16.7l14.9,6.6a2,2,0,0,1,.9.9l6.6,14.9L41,4.6Z" fill="#d87232" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatContent
