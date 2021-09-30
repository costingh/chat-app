# chat-app

See Live Demo: https://costingh.github.io/chat-app

## Description

This is a chat application built using React (create-react-app), Spring Boot, MongoDB. It uses Web Sockets for real time chatting and displaying online users. 

Test credentials:
* USERNAME: user-test
* PASSWORD: password-test

* User can signup new account, or login with username & password.
* By User’s role (admin, moderator, user), we authorize the User to access resources (role-based Authorization)
* User can add friends (if they have accounts)
* User can send private messages to contacts in his list

Test credentials:
* USERNAME: user-test
* PASSWORD: password-test

| Methods | Urls | Actions |
| --- | --- | --- |
| `POST` | `/api/auth/signup` | signup new account |
| `POST` | `/api/auth/signin` | login an account |
| `GET` | `/api/test/all` | sretrieve public content |
| `GET` | `/api/test/user` | access User’s content |
| `GET` | `/api/test/mod` | access Moderator’s content |
| `GET` | `/api/test/admin` | access Admin’s content |
| `GET` | `/api/auth/all` | access all available contacts |
| `GET` | `/api/auth/user/{userId}` | access a specific user |
| `POST` | `/api/auth/user/update-status` | update user.status field online || offline |

– Spring Security will manage cors, csrf, session, rules for protected resources, authentication & authorization along with exception handler.
– The database we will use is MongoDB which can be accessed by the help of Spring Data MongoDB.

