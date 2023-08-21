package com.bookstore.service;

import java.util.List;

import com.bookstore.dto.AddUserDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.GetUserDTO;
import com.bookstore.dto.UpdateUserDTO;

public interface UserService 
{
	public ApiResponse addUser(AddUserDTO userDTO);
	
	public List<AddUserDTO> getAllUsers();
	
	public ApiResponse deleteUser(Long id);
	
	public ApiResponse updateUser(UpdateUserDTO detachedUser);
	
//	public GetUserDTO getUser(Long id);
}
