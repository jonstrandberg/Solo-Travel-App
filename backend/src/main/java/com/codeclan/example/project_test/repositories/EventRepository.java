package com.codeclan.example.project_test.repositories;

import com.codeclan.example.project_test.models.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    List<Event> findByLocationId(Long Id);
    List<Event> findBySignUpListUserProfileId(Long Id);
    List<Event> findByCreatorId(Long Id);
}
