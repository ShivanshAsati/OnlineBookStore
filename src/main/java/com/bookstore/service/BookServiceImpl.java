package com.bookstore.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.dto.BookDTO;
import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.ApiResponse;
import com.bookstore.entities.Author;
import com.bookstore.entities.Book;
import com.bookstore.repository.BookRepository;

@Service
@Transactional
public class BookServiceImpl implements BookService{
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse addBook(BookDTO bookDTO) {
		Book book = mapper.map(bookDTO, Book.class);
		bookRepository.save(book);
		ApiResponse apiResponse = new ApiResponse("Book Added Successfully!!");
		return apiResponse;
	}

	@Override
	public BookDTO getBookDetails(Long bookId) {
		// TODO Auto-generated method stub
		return null;
	}

	
	public Book findBookById(Long id) {
		Book book = bookRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Book not found!"));
		return book;
	}
//	@Override
//	public BookDTO getBookDetails(Long bookId) {
//		Book book = bookRepository.findById(bookId).
//		orElseThrow(() -> new ResourceNotFoundException("Invalid Book ID !!!"));
//		return mapper.map(book, BookDTO.class);
//	}
	
	
	
	
}
