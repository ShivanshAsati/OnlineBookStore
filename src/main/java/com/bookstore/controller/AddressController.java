package com.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.dto.AddressDetailsDTO;
import com.bookstore.service.AddressService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/address")
public class AddressController {
	
	@Autowired
	public AddressService addressService;
	
	@PostMapping("/details")
	public ResponseEntity<?> addressDetails(@RequestBody AddressDetailsDTO addressDTO)
	{
		return ResponseEntity.status(HttpStatus.OK).body(addressService.addressDetails(addressDTO));
	}
	

}
