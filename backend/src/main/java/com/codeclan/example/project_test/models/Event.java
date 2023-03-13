package com.codeclan.example.project_test.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "events")
@JsonIgnoreProperties({"signUpList"})
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private String date;

    @Column(name = "time")
    private String time;

    @Column(name = "duration")
    private String duration;

    @Column(name = "description")
    private String description;

    @ManyToOne
//    @JsonIgnoreProperties({"event"})
    @JoinColumn(name = "location")
    private Location location;

//    @JsonIgnoreProperties({"event", "signUpList"})
    @OneToMany(mappedBy = "event")
    private List<SignUp> signUpList;

    public Event() {}

    public Event(String title, String time, String duration, String description, Location location, String date) {
        this.title = title;
        this.time = time;
        this.duration = duration;
        this.description = description;
        this.location = location;
        this.date = date;
        this.signUpList = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public List<SignUp> getSignUpList() {
        return signUpList;
    }

    public void setSignUpList(List<SignUp> signUpList) {
        this.signUpList = signUpList;
    }
}
