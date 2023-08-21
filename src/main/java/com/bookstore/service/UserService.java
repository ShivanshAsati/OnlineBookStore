package com.bookstore.service;

import java.util.List;

import com.bookstore.dto.AddUserDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.UserDTO;

public interface UserService 
{
	public ApiResponse addUser(AddUserDTO userDTO);
	
	public List<UserDTO> getAllUsers();
	
	public ApiResponse deleteUser(Long id);
}
