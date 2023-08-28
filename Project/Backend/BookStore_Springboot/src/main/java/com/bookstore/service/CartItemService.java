package com.bookstore.service;


import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.entities.Book;
import com.bookstore.entities.Cart;
import com.bookstore.entities.CartItem;

public interface CartItemService {

	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws ResourceNotFoundException;
	
	public CartItem isCartItemExist(Cart cart, Book book, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws ResourceNotFoundException;
	
	public CartItem findCartItemById(Long cartItemId) throws ResourceNotFoundException;

}
