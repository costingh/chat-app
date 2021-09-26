package com.web.chat.payload.request;

import javax.validation.constraints.NotBlank;

public class ConversationRequest {
    @NotBlank
    private String participantOneId;
    @NotBlank
    private String participantTwoId;

    public String getParticipantOneId() {
        return participantOneId;
    }

    public void setParticipantOneId(String participantOneId) {
        this.participantOneId = participantOneId;
    }

    public String getParticipantTwoId() {
        return participantTwoId;
    }

    public void setParticipantTwoId(String participantTwoId) {
        this.participantTwoId = participantTwoId;
    }
}
