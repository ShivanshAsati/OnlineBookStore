package com.bookstore.service;

import java.util.List;


import com.bookstore.dto.AddUserDTO;
import com.bookstore.dto.ApiResponse;


import com.bookstore.dto.GetUserDTO;
import com.bookstore.dto.UpdateUserDTO;
import com.bookstore.dto.UserDTO;
import com.bookstore.entities.User;


public interface UserService 
{
	public ApiResponse addUser(AddUserDTO userDTO);
	
	public List<UserDTO> getAllUsers();
	
	public ApiResponse deleteUser(Long id);

	public ApiResponse updateUser(UpdateUserDTO detachedUser);

	public User findUserProfileByJwt(String jwt);

	public User findUserById(Long userId);
	
}
