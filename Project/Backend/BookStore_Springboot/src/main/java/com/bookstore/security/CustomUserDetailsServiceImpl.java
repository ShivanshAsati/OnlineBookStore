package com.bookstore.security;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.bookstore.entities.User;
import com.bookstore.repository.UserRepository;

@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService {
	// dep user dao
	@Autowired
	private UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// invoke dao's method to get uer details form DB
		User user = userRepo.findByEmail(email)
				.orElseThrow(() ->
				new UsernameNotFoundException("Invalid Email !!!!!"));
		//=> user email exists
		return new CustomUserDetails(user);
	}
}