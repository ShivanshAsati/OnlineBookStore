package com.bookstore.service;

import java.util.List;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.AddUserDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.entities.User;

public interface UserService 
{
	public ApiResponse addUser(AddUserDTO userDTO);
	
	public List<AddUserDTO> getAllUsers();
	
	public ApiResponse deleteUser(Long id);
	
	//below understand
	
	//public User findUserProfileByJwt(String jwt) throws ResourceNotFoundException;
	
	
	public User findUserById(Long userId) throws ResourceNotFoundException;
}
