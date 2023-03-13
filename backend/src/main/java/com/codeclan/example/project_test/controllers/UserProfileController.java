package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserProfileController {

    @Autowired
    UserProfileRepository userProfileRepository;

    @GetMapping(value = "/user_profiles")
    public ResponseEntity<List<UserProfile>> getAllUserProfiles(){
        return new ResponseEntity<>(userProfileRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/user_profiles/{id}")
    public ResponseEntity getUserProfile(@PathVariable Long id){
        return new ResponseEntity<>(userProfileRepository.findById(id), HttpStatus.OK);
    }
}
