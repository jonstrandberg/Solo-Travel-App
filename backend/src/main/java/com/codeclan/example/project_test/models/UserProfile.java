package com.codeclan.example.project_test.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_profiles")
@JsonIgnoreProperties({"signUpList", "createdEventsList"})
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "display_name")
    private String displayName;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @Column(name = "home_town")
    private String homeTown;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "age")
    private int age;

//    @JsonBackReference
    @OneToMany(mappedBy = "userProfile")
    private List<SignUp> signUpList;

    @ManyToOne
    @JoinColumn(name = "location")
    private Location location;

    @OneToMany(mappedBy = "creator")
    private List<Event> createdEventsList;

    public UserProfile() {}

    public UserProfile(String displayName, String avatarUrl, String homeTown, String nationality, int age, Location location) {
        this.displayName = displayName;
        this.avatarUrl = avatarUrl;
        this.homeTown = homeTown;
        this.nationality = nationality;
        this.age = age;
        this.signUpList = new ArrayList<>();
        this.location = location;
        this.createdEventsList = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public List<Event> getCreatedEventsList() {
        return createdEventsList;
    }

    public void setCreatedEventsList(List<Event> createdEventsList) {
        this.createdEventsList = createdEventsList;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public String getHomeTown() {
        return homeTown;
    }

    public void setHomeTown(String homeTown) {
        this.homeTown = homeTown;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<SignUp> getSignUpList() {
        return signUpList;
    }

    public void setSignUpList(List<SignUp> signUpList) {
        this.signUpList = signUpList;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
}
