package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
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
}
