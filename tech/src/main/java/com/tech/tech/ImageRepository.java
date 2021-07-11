package com.tech.tech;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface ImageRepository extends JpaRepository<Image,Long>{
    
}
