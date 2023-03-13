package com.codeclan.example.project_test.repositories;

import com.codeclan.example.project_test.models.SignUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignUpRepository extends JpaRepository<SignUp, Long> {
}
