package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Location;
import com.codeclan.example.project_test.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LocationController {

    @Autowired
    LocationRepository locationRepository;

    // Get all Locations
    @GetMapping(value = "/locations")
    public ResponseEntity<List<Location>> getAllLocations(
            @RequestParam(name = "country_id", required = false) Long countryId

    ){
        if (countryId != null){
            return new ResponseEntity<>(locationRepository.findByCountryId(countryId), HttpStatus.OK);
        }
        return new ResponseEntity<>(locationRepository.findAll(), HttpStatus.OK);
    }

    // Get Location by ID
    @GetMapping(value = "/locations/{id}")
    public ResponseEntity getLocation(@PathVariable Long id){
        return new ResponseEntity<>(locationRepository.findById(id), HttpStatus.OK);
    }

    public ResponseEntity getLocations(@PathVariable String name) {
        return new ResponseEntity<>(locationRepository.findByName(name), HttpStatus.OK);
    }
}
