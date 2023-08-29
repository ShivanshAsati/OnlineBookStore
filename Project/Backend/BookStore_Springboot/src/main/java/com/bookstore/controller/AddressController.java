package com.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.dto.AddressDTO;
import com.bookstore.service.AddressService;

@RestController
@RequestMapping("/address")
@CrossOrigin(origins = "http://localhost:3000")
public class AddressController {
	
	@Autowired
	public AddressService addressService;
	
	@PostMapping("/addtocustomer/{customerId}")
	public ResponseEntity<?> addressDetails(@PathVariable Long customerId, @RequestBody AddressDTO addressDTO) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.addAddress(customerId, addressDTO));
	}
	
	@GetMapping("/customer/{customerId}")
	public ResponseEntity<?> getAddress(@PathVariable Long customerId) {
		return ResponseEntity.status(HttpStatus.OK).body(addressService.getAddress(customerId));
	}
	
	@DeleteMapping("/addressid/{addressId}")
	public ResponseEntity<?> deleteAddress(@PathVariable Long addressId) {
		return ResponseEntity.status(HttpStatus.FOUND).body(addressService.deleteAddress(addressId));
	}
	
	@PutMapping("/addressid/{addressId}")
	public ResponseEntity<?>  updateAddress(@PathVariable Long addressId, @RequestBody AddressDTO addressDTO) {
		return ResponseEntity.status(HttpStatus.FOUND).body(addressService.updateAddress(addressId, addressDTO));
	}
	

}
