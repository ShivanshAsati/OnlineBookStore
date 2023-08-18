package com.bookstore.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.ApiResponse;
import com.bookstore.entities.Author;
import com.bookstore.repository.AuthorRepository;

@Service
@Transactional
public class AuthorServiceImpl implements AuthorService{
	@Autowired
	private AuthorRepository authorRepository;
	
	@Autowired
	private ModelMapper mapper;
	
	public ApiResponse addAuthor(AddAuthorDTO authorDTO) {
		Author author = mapper.map(authorDTO, Author.class);
		authorRepository.save(author);
		ApiResponse apiResponse = new ApiResponse("Author Successfully Added!!!");
		return apiResponse;
	}
}
