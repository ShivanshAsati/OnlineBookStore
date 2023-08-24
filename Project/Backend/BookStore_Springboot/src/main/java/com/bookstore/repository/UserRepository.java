package com.bookstore.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookstore.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
	//add a finder to get user details by it's email
	Optional<User> findByEmail(String email);
}
