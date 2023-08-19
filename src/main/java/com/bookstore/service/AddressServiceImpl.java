package com.bookstore.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.dto.AddressDetailsDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.entities.Address;
import com.bookstore.repository.AddressRepository;


@Service
@Transactional
public class AddressServiceImpl implements AddressService {
	
	
	@Autowired
	public AddressRepository addressRepository;
	
	@Autowired
	public ModelMapper mapper;
	

	@Override
	public ApiResponse addressDetails(AddressDetailsDTO addressDTO) {
		
		Address address = mapper.map(addressDTO, Address.class);
		addressRepository.save(address);
		ApiResponse apiResponse = new ApiResponse("Address ADDED");
		return apiResponse;
	}

}
