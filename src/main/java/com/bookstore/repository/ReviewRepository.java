package com.bookstore.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bookstore.entities.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

	@Query("Select r from Review r where r.book.id=:bookId")
	public List<Review> getAllbooksReview(@Param("bookId") Long bookId);
}