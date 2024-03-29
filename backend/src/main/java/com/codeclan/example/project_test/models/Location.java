package com.codeclan.example.project_test.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "locations")
@JsonIgnoreProperties({"eventList", "userProfileList"})
public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToOne
//    @JsonIgnoreProperties({"locations"})
//    @JsonBackReference
    @JoinColumn(name = "country")
    private Country country;

//    @JsonIgnoreProperties({"location", "event"})
//    @JsonIgnoreProperties({"eventList"})
//    @JsonBackReference
    @OneToMany(mappedBy = "location")
    private List<Event> eventList;

//    @JsonIgnoreProperties({"location", "userprofile"})
//    @JsonIgnoreProperties({"userProfileList"})
//    @JsonBackReference
    @OneToMany(mappedBy = "location")
    private List<UserProfile> userProfileList;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    public Location() {}

    public Location(String name, Country country, String description, String imageUrl) {
        this.name = name;
        this.country = country;
        this.eventList = new ArrayList<>();
        this.userProfileList = new ArrayList<>();
        this.description = description;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public List<UserProfile> getUserProfileList() {
        return userProfileList;
    }

    public void setUserProfileList(List<UserProfile> userProfileList) {
        this.userProfileList = userProfileList;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Event> getEventList() {
        return eventList;
    }

    public void setEventList(List<Event> eventList) {
        this.eventList = eventList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Country getCountry() {
        return country;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
