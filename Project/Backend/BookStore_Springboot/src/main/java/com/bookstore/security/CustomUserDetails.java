package com.bookstore.security;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.bookstore.entities.Person;
import com.bookstore.entities.User;

public class CustomUserDetails implements UserDetails {
	private User user;
	private Person person;
	

	public CustomUserDetails(User user) {
		super();
		this.user = user;
	}
	
	public CustomUserDetails(Person person) {
		super();
		this.person = person;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// Can I return List<SimpleGrantedAuthority> ? YESS
		return List.of(new SimpleGrantedAuthority(person.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return person.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return person.getEmail();
	}

//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// Can I return List<SimpleGrantedAuthority> ? YESS
//		return List.of(new SimpleGrantedAuthority(user.getRole().name()));
//	}
//
//	@Override
//	public String getPassword() {
//		// TODO Auto-generated method stub
//		return user.getPassword();
//	}
//
//	@Override
//	public String getUsername() {
//		// TODO Auto-generated method stub
//		return user.getEmail();
//	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
//	public User getUser() {
//		return user;
//	}
	
	public Person getPerson() {
		return person;
	}

}
