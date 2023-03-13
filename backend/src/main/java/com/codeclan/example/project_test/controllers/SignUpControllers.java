package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.SignUp;
import com.codeclan.example.project_test.repositories.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SignUpControllers {

    @Autowired
    SignUpRepository signUpRepository;

    @GetMapping(value = "/sign_ups")
    public ResponseEntity<List<SignUp>> getAllSignUps(){
        return new ResponseEntity<>(signUpRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/sign_ups/{id}")
    public ResponseEntity getSignUp(@PathVariable Long id){
        return new ResponseEntity<>(signUpRepository.findById(id), HttpStatus.OK);
    }
}
