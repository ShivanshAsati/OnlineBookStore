package com.bookstore.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.entities.Book;
import com.bookstore.entities.Cart;
import com.bookstore.entities.CartItem;
import com.bookstore.entities.User;
import com.bookstore.repository.CartItemRepository;
import com.bookstore.repository.CartRepository;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {
	
	@Autowired
	private CartItemRepository cartItemRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private CartRepository cartRepository;

	@Override
	public CartItem createCartItem(CartItem cartItem) {
		
		cartItem.setQuantity(1);
		cartItem.setPrice(cartItem.getBook().getPrice()*cartItem.getQuantity());
		cartItem.setDiscountedPrice(cartItem.getBook().getDiscountedPrice()*cartItem.getQuantity());
		CartItem createdCartItem=cartItemRepository.save(cartItem);
		return createdCartItem;
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws ResourceNotFoundException {
		CartItem item = findCartItemById(id);
		User user = userService.findUserById(item.getUserId());
		
		if(user.getId().equals(userId)) {	
			item.setQuantity(cartItem.getQuantity());
			item.setPrice(item.getQuantity()*item.getBook().getPrice());
			item.setDiscountedPrice(item.getQuantity()*item.getBook().getDiscountedPrice());
			return cartItemRepository.save(item);
				
		}
		else {
			throw new ResourceNotFoundException("You can't update  another users cart_item");
		}
		
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Book book, Long userId) {
		CartItem cartItem=cartItemRepository.isCartItemExist(cart, book, userId);
		return cartItem;
	}
	
	@Override
	public void removeCartItem(Long userId,Long cartItemId) throws ResourceNotFoundException{
		System.out.println("userId- "+userId+" cartItemId "+cartItemId);
		CartItem cartItem = findCartItemById(cartItemId);
		User user = userService.findUserById(cartItem.getUserId());
		User reqUser = userService.findUserById(userId);
		
		if(user.getId().equals(reqUser.getId())) {
			cartItemRepository.deleteById(cartItem.getId());
		}
		else {
			throw new ResourceNotFoundException("you can't remove anothor users item");
		}
		
	}

	@Override
	public CartItem findCartItemById(Long cartItemId){
		CartItem cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new ResourceNotFoundException("Something went wrong!"));
		return cartItem;
	}

}
