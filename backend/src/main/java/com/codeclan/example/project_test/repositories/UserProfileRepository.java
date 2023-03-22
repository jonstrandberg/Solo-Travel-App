package com.codeclan.example.project_test.repositories;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {

    List<UserProfile> findByLocationId(Long Id);
    List<UserProfile> findBySignUpListEventId(Long Id);
    List<UserProfile> findByFirebaseId(String Id);
}
