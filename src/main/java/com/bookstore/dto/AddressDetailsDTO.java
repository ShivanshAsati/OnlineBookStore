package com.bookstore.dto;

import javax.persistence.Column;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AddressDetailsDTO 
{
	
	private String street;
	
	
	private String landmark;
	
	
	private String city;
	
	
	private String state;
	
	
	private String country;
	
	
	private String zipcode;

}
