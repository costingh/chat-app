package com.web.chat.payload.request;

public class OnlineUserRequest {
    private String userId;

    public OnlineUserRequest() {
    }

    public OnlineUserRequest(String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
