package com.bookstore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookstore.entities.Person;
import com.bookstore.entities.User;

public interface PersonRepository extends JpaRepository<Person, Long>{
	Optional<Person> findByEmail(String email);
	boolean existsByEmail(String email);
}
