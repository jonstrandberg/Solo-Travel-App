package com.codeclan.example.project_test.models;

import javax.persistence.*;

@Entity
@Table(name = "sign_ups")
public class SignUp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_profile", nullable = false)
    private UserProfile userProfile;

    @ManyToOne
    @JoinColumn(name = "event", nullable = false)
    private Event event;

    public SignUp() {}

    public SignUp(UserProfile user, Event event) {
        this.userProfile = user;
        this.event = event;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserProfile getUserProfile() {
        return userProfile;
    }

    public void setUserProfile(UserProfile userProfile) {
        this.userProfile = userProfile;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
