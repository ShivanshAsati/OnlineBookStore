package com.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.service.AuthorService;

@RestController
@RequestMapping("/author")
public class AuthorController {
	
	@Autowired
	private AuthorService authorService;
	
	@PostMapping("/add")
	public ResponseEntity<?> addAuthor(@RequestBody AddAuthorDTO authorDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(authorService.addAuthor(authorDTO));
	}
}
