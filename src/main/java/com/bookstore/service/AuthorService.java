package com.bookstore.service;

import com.bookstore.dto.AddAuthorDTO;
import com.bookstore.dto.ApiResponse;

public interface AuthorService {
	ApiResponse addAuthor(AddAuthorDTO authorDTO);
}
