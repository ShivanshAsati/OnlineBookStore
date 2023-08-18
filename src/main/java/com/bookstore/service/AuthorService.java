package com.bookstore.service;

import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.ApiResponse;

public interface AuthorService {
	public ApiResponse addAuthor(AddAuthorDTO authorDTO);
}
