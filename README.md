# chat-app

See Live Demo: https://costingh.github.io/chat-app

## Description

This is a chat application built using React (create-react-app), Spring Boot, MongoDB. It uses Web Sockets for real time chatting and displaying online users. 

Test credentials:
* USERNAME: user-test
* PASSWORD: password-test

## Chatting in real time
![Demo Image](https://github.com/costingh/chat-app/blob/master/demo2.png?raw=true)

* User can signup new account, or login with username & password.
* By User’s role (admin, moderator, user), we authorize the User to access resources (role-based Authorization)
* User can add friends (if they have accounts)
* User can send private messages to contacts in his list

Test credentials:
* USERNAME: user-test
* PASSWORD: password-test

# AuthController
| Methods | Urls | Actions |
| --- | --- | --- |
| `POST` | `/api/auth/signup` | signup new account |
| `POST` | `/api/auth/signin` | login an account |
| `GET` | `/api/auth/all` | access all available contacts |
| `GET` | `/api/auth/user/{userId}` | access a specific user |
| `POST` | `/api/auth/user/update-status` | update user.status field online || offline |

# AuthController
| Methods | Urls | Actions |
| --- | --- | --- |
| `GET` | `/api/test/all` | retrieve public content |
| `GET` | `/api/test/user` | access User’s content |
| `GET` | `/api/test/mod` | access Moderator’s content |
| `GET` | `/api/test/admin` | access Admin’s content |

# ConversationsController
| Methods | Urls | Actions |
| --- | --- | --- |
| `GET` | `/api/conversation/all` | get all existing conversations |
| `POST` | `/api/conversation/add` | create new conversation |
| `GET` | `/api/conversation/all/{userId}` | get all conversations of an id |
| `GET` | `/api/conversation/{conversationId}` | get a conversation |
| `DELETE` | `/api/conversation/delete{conversationId{` | delete a conversation by id |

# MessagesController
| Methods | Urls | Actions |
| --- | --- | --- |
| `GET` | `/api/messages/all-messages/{conversationId}` | get all messages from a conversation |
| `GET` | `/api/messages//last-message/{conversationId}` | get last message from a conversation |


– Spring Security will manage cors, csrf, session, rules for protected resources, authentication & authorization along with exception handler.
– The database we will use is MongoDB which can be accessed by the help of Spring Data MongoDB.

