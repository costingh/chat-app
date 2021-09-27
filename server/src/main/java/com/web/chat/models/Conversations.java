package com.web.chat.models;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.domain.Persistable;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "conversations")
public class Conversations  implements Persistable<String>  {
    @Id
    private String id;
    private String participantOneId;
    private String participantTwoId;
    private Date createdDate;

    public Conversations() {
    }

    public Conversations(String participantOneId, String participantTwoId) {
        this.participantOneId = participantOneId;
        this.participantTwoId = participantTwoId;
    }

    public String getId() {
        return id;
    }

    @Override
    public boolean isNew() {
        return false;
    }

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

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
}
