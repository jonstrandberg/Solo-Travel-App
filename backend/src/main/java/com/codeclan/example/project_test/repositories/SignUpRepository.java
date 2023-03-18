package com.codeclan.example.project_test.repositories;

import com.codeclan.example.project_test.models.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SignUpRepository extends JpaRepository<SignUp, Long> {
    List<SignUp> findByEventId(Long Id);
}
