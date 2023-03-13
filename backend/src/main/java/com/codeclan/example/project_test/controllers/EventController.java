package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.Location;
import com.codeclan.example.project_test.repositories.EventRepository;
import com.codeclan.example.project_test.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.util.List;

@RestController
public class EventController {

    @Autowired
    EventRepository eventRepository;

//  Get All Events
    @GetMapping(value = "/events")
    public ResponseEntity<List<Event>> getAllEvents(){
        return new ResponseEntity<>(eventRepository.findAll(), HttpStatus.OK);
    }

//  Get Event by ID
    @GetMapping(value = "/events/{id}")
    public ResponseEntity getEvent(@PathVariable Long id){
        return new ResponseEntity<>(eventRepository.findById(id), HttpStatus.OK);
    }

//  Post New Event
    @PostMapping(path = "/events",
            consumes = MediaType.APPLICATION_JSON_VALUE,    // expects data in JSON format
            produces = MediaType.APPLICATION_JSON_VALUE)    // returns data in JSON format
    public ResponseEntity<Event> postEvent(@RequestBody Event newEvent) throws ServerException {

        Event event = eventRepository.save(newEvent);
        if (event != null) {
            return new ResponseEntity<>(event, HttpStatus.CREATED);
        } else {
            throw new ServerException("error: could not create new event");
        }
    }




}
