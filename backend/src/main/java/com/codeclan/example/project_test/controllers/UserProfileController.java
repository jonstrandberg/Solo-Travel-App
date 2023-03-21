package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Location;
import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.repositories.LocationRepository;
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

    @Autowired
    LocationRepository locationRepository;

    //  Get all UserProfiles
    @GetMapping(value = "/user_profiles")
    public ResponseEntity<List<UserProfile>> getAllUserProfiles(
            @RequestParam(name = "event_id", required = false) Long eventId,
            @RequestParam(name = "location_id", required = false) Long locationId
    ){
        if (eventId != null) {
            return new ResponseEntity<>(userProfileRepository.findBySignUpListEventId(eventId), HttpStatus.OK);
        }
        if (locationId != null) {
            return new ResponseEntity<>(userProfileRepository.findByLocationId(locationId), HttpStatus.OK);
        }
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

    //  Update UserProfile
    @PutMapping("/user_profiles/{id}/update")
    public ResponseEntity<UserProfile> updateUserProfile(
            @PathVariable long id,
            @RequestBody UserProfile putUserProfile) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setDisplayName(putUserProfile.getDisplayName());
        updatedUserProfile.setAvatarUrl(putUserProfile.getAvatarUrl());
        updatedUserProfile.setHomeTown(putUserProfile.getHomeTown());
        updatedUserProfile.setNationality(putUserProfile.getNationality());
        updatedUserProfile.setAge(putUserProfile.getAge());
        updatedUserProfile.setLocation(putUserProfile.getLocation());
        updatedUserProfile.setInterests(putUserProfile.getInterests());
        updatedUserProfile.setFirebaseId(putUserProfile.getFirebaseId());

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

    //  Sets Display Name
    @PutMapping("/user_profiles/{id}/set_display_name")
    public ResponseEntity<UserProfile> setUserProfileDisplayName(
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
    public ResponseEntity<UserProfile> setUserProfileHomeTown(
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
    public ResponseEntity<UserProfile> setUserProfileNationality(
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
    public ResponseEntity<UserProfile> setUserProfileAge(
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
    public ResponseEntity<UserProfile> setUserProfileAvatarUrl(
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
    public ResponseEntity<UserProfile> setUserProfileLocation(
            @PathVariable long id,
            @RequestBody HashMap<String, Long> bodyParameters) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        Long locationId = bodyParameters.get("new");
        Location newLocation = locationRepository.findById(locationId).orElseThrow(RuntimeException::new);
        updatedUserProfile.setLocation(newLocation);

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

    //  Sets Interests
    @PutMapping("/user_profiles/{id}/set_interests")
    public ResponseEntity<UserProfile> setUserProfileInterests(
            @PathVariable long id,
            @RequestBody HashMap<String, String> interests) {

        UserProfile updatedUserProfile = userProfileRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("user profile not found: " + id));

        updatedUserProfile.setInterests(interests.get("new"));

        userProfileRepository.save(updatedUserProfile);

        return ResponseEntity.ok(updatedUserProfile);
    }

}
