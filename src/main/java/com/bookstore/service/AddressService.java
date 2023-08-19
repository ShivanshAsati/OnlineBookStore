package com.bookstore.service;

import com.bookstore.dto.AddressDetailsDTO;
import com.bookstore.dto.ApiResponse;

public interface AddressService 
{
	public ApiResponse addressDetails(AddressDetailsDTO addressDTO);
}
