package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.SignUp;
import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.repositories.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;

@RestController
public class SignUpControllers {

    @Autowired
    SignUpRepository signUpRepository;

    //  Get all SignUps
    @GetMapping(value = "/sign_ups")
    public ResponseEntity<List<SignUp>> getAllSignUps(){
        return new ResponseEntity<>(signUpRepository.findAll(), HttpStatus.OK);
    }

    //  Get SignUp by ID
    @GetMapping(value = "/sign_ups/{id}")
    public ResponseEntity getSignUp(@PathVariable Long id){
        return new ResponseEntity<>(signUpRepository.findById(id), HttpStatus.OK);
    }

    //  Post New SignUp
    @PostMapping(path = "/sign_ups",
            consumes = MediaType.APPLICATION_JSON_VALUE,    // expects data in JSON format
            produces = MediaType.APPLICATION_JSON_VALUE)    // returns data in JSON format
    public ResponseEntity<SignUp> postSignUp(@RequestBody SignUp newSignUp) throws ServerException {

        SignUp signUp = signUpRepository.save(newSignUp);
        if (signUp != null) {
            return new ResponseEntity<>(signUp, HttpStatus.CREATED);
        } else {
            throw new ServerException("error: could not create new sign up");
        }
    }

    //  Delete Sign Up by ID
    @DeleteMapping(value = "/sign_ups/{id}")
    public ResponseEntity deleteSignUp(@PathVariable Long id) {
        SignUp signUp = signUpRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("event not found: " + id));

        signUpRepository.delete(signUp);
        return ResponseEntity.noContent().build();
    }
}
