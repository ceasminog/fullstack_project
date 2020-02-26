package com.catworld.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repos  extends JpaRepository <User, Long> {
}
