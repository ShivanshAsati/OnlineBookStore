package com.bookstore.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.custom_exceptions.UserAlreadyExistsException;
import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.AddUserDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.AuthorBookDTO;
import com.bookstore.dto.AuthorDTO;
import com.bookstore.dto.GetUserDTO;
import com.bookstore.dto.OnlyAuthorDTO;
import com.bookstore.dto.UpdateUserDTO;
import com.bookstore.dto.UserAddressDTO;
import com.bookstore.dto.UserDTO;
import com.bookstore.entities.Author;
import com.bookstore.entities.Role;
import com.bookstore.entities.User;
import com.bookstore.jwt_utils.JwtUtils;
import com.bookstore.repository.UserRepository;

import net.bytebuddy.dynamic.DynamicType.Builder.FieldDefinition.Optional;


@Service
@Transactional
public class UserServiceImpl implements UserService
{
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired	// not sure
	private JwtUtils jwtUtils;
	
	//private JwtTokenProvider jwtTokenProvider;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Override
	public ApiResponse addUser(AddUserDTO userDTO) 
	{
		User user = mapper.map(userDTO, User.class);
		if(userRepository.existsByEmail(user.getEmail())) {
			throw new UserAlreadyExistsException("User Already Exists");
		}
		
		user.setPassword(encoder.encode(userDTO.getPassword()));
		user.setRole(Role.USER);
		userRepository.save(user);
		ApiResponse apiResponse = new ApiResponse("USER ADDED SUCCESSFULLY..!!");
		return apiResponse;
	}
	
	@Override
	public List<UserDTO> getAllUsers() {
		List<UserDTO> userList = new ArrayList<>();
		userRepository.findAll().forEach(i -> userList.add(new UserDTO(i.getId(), i.getFirstName(), i.getLastName(), i.getEmail(), i.getMobile(), i.getPassword())));;
		return userList;
	}
	
	@Override
	public ApiResponse deleteUser(Long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!"));
		userRepository.delete(user);
		ApiResponse apiResponse = new ApiResponse("User deleted successfully!");
		return apiResponse;
	}
	/*
	@Override
	public User findUserById(Long userId)
	{
		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Invalid ID!"));
		return user;
	}
	*/
	/*
	@Override
	public User findUserProfileByJwt(String jwt) throws ResourceNotFoundException {
		System.out.println("user service");
		String email=jwtTokenProvider.getEmailFromJwtToken(jwt);
		
		System.out.println("email"+email);
		
		User user=userRepository.findByEmail(email);
		
		
		
		if(user==null) {
			throw new ResourceNotFoundException("user not exist with email "+email);
		}
		System.out.println("email user"+user.getEmail());
		return user;
	}
	*/
	

	public ApiResponse updateUser(UpdateUserDTO detachedUser) {
		User user = userRepository.findById(detachedUser.getId()).orElseThrow(() -> new ResourceNotFoundException("Something went wrong!"));
		user.setFirstName(detachedUser.getFirstName());
		user.setLastName(detachedUser.getLastName());
		user.setEmail(detachedUser.getEmail());
		user.setMobile(detachedUser.getMobile());
		user.setPassword(detachedUser.getPassword());
		userRepository.save(user);
		return new ApiResponse("User updated successfully!");
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws ResourceNotFoundException{
		System.out.println("user service");
		String email=jwtUtils.getEmailFromJwtToken(jwt);
		
		System.out.println("email"+email);
		
		User user = userRepository.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("Invalid email!"));
		

		if(user==null) {
			throw new ResourceNotFoundException("user not exist with email "+email);
		}
		System.out.println("email user"+user.getEmail());
		return user;
	}

	@Override
	public User findUserById(Long userId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found by Id!"));
		return user;
	}
}











