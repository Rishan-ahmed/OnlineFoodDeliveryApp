package com.project.ofd.repository;

import com.project.ofd.model.Resturents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface resturentRepository extends JpaRepository<Resturents, Long> {
    
}
