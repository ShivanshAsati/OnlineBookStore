package com.bookstore.controller;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.dto.AddUserDTO;
import com.bookstore.dto.AuthResp;
import com.bookstore.dto.SignUpRequest;
import com.bookstore.dto.SigninRequest;
import com.bookstore.dto.UserDTO;
import com.bookstore.entities.Person;
import com.bookstore.entities.User;
import com.bookstore.jwt_utils.JwtUtils;
import com.bookstore.security.CustomUserDetails;
import com.bookstore.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserAuthController {
//dep :
	@Autowired
	private AuthenticationManager mgr;
	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserService userService;

	/*
	 * request payload : Auth req DTO : email n password resp payload : In case of
	 * success : Auth Resp DTO : mesg + JWT token + SC 200 IN case of failure : SC
	 * 401
	 */
	@PostMapping("/signin")
	public ResponseEntity<?> signIn(@RequestBody @Valid SigninRequest request) {
		System.out.println("in sign in " + request);
		// invoke autheticate(...) of Authenticate for auth
		Authentication principal = mgr
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		CustomUserDetails userDetails = (CustomUserDetails)principal.getPrincipal();
		System.out.println("here -------------------->");
		Person person = userDetails.getPerson();
		AuthResp res = mapper.map(person, AuthResp.class);

		// generate JWT
		res.setToken(utils.generateJwtToken(principal));
		return ResponseEntity.ok(res);
	}
	
//	@PostMapping("/signup")
//	public ResponseEntity<?> userRegistration(@RequestBody @Valid AddUserDTO user) {
//		System.out.println("in reg user : user " );
//		// invoke service layer method , for saving : user info + associated roles info
//		return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(user));
//	}
	
}
