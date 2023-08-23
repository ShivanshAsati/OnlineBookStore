package com.bookstore.service;



import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import com.bookstore.dto.AddBookDTO;

import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.GetBookDTO;
import com.bookstore.dto.OnlyBookDTO;

public interface BookService {

	ApiResponse addBook(AddBookDTO bookDTO);

	ApiResponse updateBook(OnlyBookDTO detachedBook);

	List<OnlyBookDTO> getAllBooks();

	AddBookDTO getBook(Long id);
	
	List<GetBookDTO> getBooks();


	ApiResponse deleteBook(Long id);


}

