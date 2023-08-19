package com.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.bookstore.dto.AddUserDTO;
import com.bookstore.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController
{
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> addUser(@RequestBody AddUserDTO userDTO)
	{
		return ResponseEntity.status(HttpStatus.OK).body(userService.addUser(userDTO));
	}
	
	@GetMapping("/getall")
	public List<AddUserDTO> getAllAuthor() {
		return userService.getAllUsers();
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteAuthor(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.FOUND).body(userService.deleteUser(id));
	}
}
