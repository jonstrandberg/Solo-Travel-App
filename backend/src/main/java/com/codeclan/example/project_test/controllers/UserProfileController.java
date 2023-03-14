package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Location;
import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.HashMap;
import java.util.List;

@RestController
public class UserProfileController {

    @Autowired
    UserProfileRepository userProfileRepository;

    //  Get all UserProfiles
    @GetMapping(value = "/user_profiles")
    public ResponseEntity<List<UserProfile>> getAllUserProfiles(){
        return new ResponseEntity<>(userProfileRepository.findAll(), HttpStatus.OK);
    }

    //  Get UserProfile by ID
    @GetMapping(value = "/user_profiles/{id}")
    public ResponseEntity getUserProfile(@PathVariable Long id){
        return new ResponseEntity<>(userProfileRepository.findById(id), HttpStatus.OK);
    }

    //  Post New UserProfile
    @PostMapping(path = "/user_profiles",
            consumes = MediaType.APPLICATION_JSON_VALUE,    // expects data in JSON format
            produces = MediaType.APPLICATION_JSON_VALUE)    // returns data in JSON format
    public ResponseEntity<UserProfile> postUserProfile(@RequestBody UserProfile newUserProfile) throws ServerException {

        UserProfile userProfile = userProfileRepository.save(newUserProfile);
        if (userProfile != null) {
            return new ResponseEntity<>(userProfile, HttpStatus.CREATED);
        } else {
            throw new ServerException("error: could not create new user profile");
        }
    }

    //  Sets Display Name
    @PutMapping("/user_profiles/{id}/set_display_name")
    public ResponseEntity<UserProfile> setDisplayName(
            @PathVariable long id,
            @RequestBody HashMap<String, String> displayName) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setDisplayName(displayName.get("new"));

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

    //  Sets Home Town
    @PutMapping("/user_profiles/{id}/set_home_town")
    public ResponseEntity<UserProfile> setHomeTown(
            @PathVariable long id,
            @RequestBody HashMap<String, String> homeTown) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setHomeTown(homeTown.get("new"));

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

    //  Sets Nationality
    @PutMapping("/user_profiles/{id}/set_nationality")
    public ResponseEntity<UserProfile> setNationality(
            @PathVariable long id,
            @RequestBody HashMap<String, String> nationality) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setNationality(nationality.get("new"));

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

    //  Sets Age
    @PutMapping("/user_profiles/{id}/set_age")
    public ResponseEntity<UserProfile> setAge(
            @PathVariable long id,
            @RequestBody HashMap<String, Integer> age) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setAge(age.get("new"));

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

    //  Sets Avatar URL
    @PutMapping("/user_profiles/{id}/set_avatar_url")
    public ResponseEntity<UserProfile> setAvatarUrl(
            @PathVariable long id,
            @RequestBody HashMap<String, String> avatarUrl) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setAvatarUrl(avatarUrl.get("new"));

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

    //  Sets Location
    @PutMapping("/user_profiles/{id}/set_location")
    public ResponseEntity<UserProfile> setLocation(
            @PathVariable long id,
            @RequestBody HashMap<String, Location> location) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setLocation(location.get("new"));

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

}
