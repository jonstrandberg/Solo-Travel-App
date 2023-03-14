package com.codeclan.example.project_test.controllers;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.Location;
import com.codeclan.example.project_test.models.UserProfile;
import com.codeclan.example.project_test.repositories.EventRepository;
import com.codeclan.example.project_test.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.rmi.ServerException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

@RestController
public class EventController {

    @Autowired
    EventRepository eventRepository;

//  Get all Events
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

    //  Sets Event Title
    @PutMapping("/events/{id}/set_title")
    public ResponseEntity<Event> setEventTitle(
            @PathVariable long id,
            @RequestBody HashMap<String, String> title) {

        Event updatedEvent = eventRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("event not found: " + id));

        updatedEvent.setTitle(title.get("new"));

        eventRepository.save(updatedEvent);

        return ResponseEntity.ok(updatedEvent);
    }

    //  Sets Event Time
    @PutMapping("/events/{id}/set_time")
    public ResponseEntity<Event> setEventTime(
            @PathVariable long id,
            @RequestBody HashMap<String, String> time) {

        Event updatedEvent = eventRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("event not found: " + id));

        updatedEvent.setTime(time.get("new"));

        eventRepository.save(updatedEvent);

        return ResponseEntity.ok(updatedEvent);
    }

    //  Sets Event Date
    @PutMapping("/events/{id}/set_date")
    public ResponseEntity<Event> setEventDate(
            @PathVariable long id,
            @RequestBody HashMap<String, String> date) {

        Event updatedEvent = eventRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("event not found: " + id));

        updatedEvent.setDate(date.get("new"));

        eventRepository.save(updatedEvent);

        return ResponseEntity.ok(updatedEvent);
    }

    //  Sets Event Duration
    @PutMapping("/events/{id}/set_duration")
    public ResponseEntity<Event> setEventDuration(
            @PathVariable long id,
            @RequestBody HashMap<String, String> duration) {

        Event updatedEvent = eventRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("event not found: " + id));

        updatedEvent.setDuration(duration.get("new"));

        eventRepository.save(updatedEvent);

        return ResponseEntity.ok(updatedEvent);
    }

    //  Sets Event Description
    @PutMapping("/events/{id}/set_description")
    public ResponseEntity<Event> setEventDescription(
            @PathVariable long id,
            @RequestBody HashMap<String, String> description) {

        Event updatedEvent = eventRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("event not found: " + id));

        updatedEvent.setDescription(description.get("new"));

        eventRepository.save(updatedEvent);

        return ResponseEntity.ok(updatedEvent);
    }

    //  Sets Event Location
    @PutMapping("/events/{id}/set_location")
    public ResponseEntity<Event> setEventLocation(
            @PathVariable long id,
            @RequestBody HashMap<String, Location> location) {

        Event updatedEvent = eventRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("event not found: " + id));

        updatedEvent.setLocation(location.get("new"));

        eventRepository.save(updatedEvent);

        return ResponseEntity.ok(updatedEvent);
    }



}
