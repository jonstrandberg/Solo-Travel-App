package com.codeclan.example.project_test.repositories;

import com.codeclan.example.project_test.models.Event;
import com.codeclan.example.project_test.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByName(String name);
    List<Location> findByCountryId(Long Id);


}
