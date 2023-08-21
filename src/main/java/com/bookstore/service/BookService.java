package com.bookstore.service;

import com.bookstore.dto.BookDTO;
import com.bookstore.entities.Book;
import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.ApiResponse;

public interface BookService {

	ApiResponse addBook(BookDTO bookDTO);

	BookDTO getBookDetails(Long bookId);
	
	public Book findBookById(Long id) throws ResourceNotFoundException;

}
