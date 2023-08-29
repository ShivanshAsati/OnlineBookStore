package com.bookstore.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.ApiResponse;
import com.bookstore.dto.CartBookDTO;
import com.bookstore.dto.CartItemDTO;
import com.bookstore.dto.DetachedAddressDTO;
import com.bookstore.dto.DisplayCartItemDTO;
import com.bookstore.entities.Address;
import com.bookstore.entities.Book;
import com.bookstore.entities.CartItem;
import com.bookstore.entities.User;
import com.bookstore.repository.BookRepository;
import com.bookstore.repository.CartItemRepository;
import com.bookstore.repository.UserRepository;

@Service
@Transactional
public class CartItemServiceImpl implements CartItemService {
	
	@Autowired
	private CartItemRepository cartItemRepository;
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private BookRepository bookRepository;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addItem(CartItemDTO cartItemDTO) {
		System.out.println(cartItemDTO);
		User user = userRepository.findById(cartItemDTO.getUserId()).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		Book book = bookRepository.findById(cartItemDTO.getBookId()).orElseThrow(() -> new ResourceNotFoundException("invalid book id!"));
		System.out.println("<--------------------");
		double tPrice = book.getPrice();
		double tDiscPrice = book.getDiscountedPrice();
//		CartItem cartItem = new CartItem(book, user, qty, book.getPrice()*qty, book.getDiscountedPrice()*qty);
		CartItem cartItem = new CartItem(book, user, tPrice, tDiscPrice);
		cartItem.setQuantity(1);
//		System.out.println("Cart item: " + cartItem.toString());
		cartItemRepository.save(cartItem);
		System.out.println("Added success");
		ApiResponse apiResponse = new ApiResponse("Cart Item ADDED");
		return apiResponse;
	}

	@Override
	public List<DisplayCartItemDTO> getCartItems(Long userId) {
		User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("invalid user id!"));
		List<DisplayCartItemDTO> cartItemList = new ArrayList<>();
		user.getCartItems().forEach(i -> cartItemList.add(new DisplayCartItemDTO(i.getId(), new CartBookDTO(i.getBook().getId(),i.getBook().getTitle(),i.getBook().getAuthor().getName(),i.getBook().getImagePath()) , userId, i.getQuantity(), i.getTotalPrice(), i.getTotalDiscountedPrice())));
		return cartItemList;
	}

	
//	@Override
//	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws ResourceNotFoundException {
//		CartItem item = findCartItemById(id);
//		User user = userService.findUserById(item.getUserId());
//		
//		if(user.getId().equals(userId)) {	
//			item.setQuantity(cartItem.getQuantity());
//			item.setPrice(item.getQuantity()*item.getBook().getPrice());
//			item.setDiscountedPrice(item.getQuantity()*item.getBook().getDiscountedPrice());
//			return cartItemRepository.save(item);
//				
//		}
//		else {
//			throw new ResourceNotFoundException("You can't update  another users cart_item");
//		}
//		
//	}
//
//	@Override
//	public CartItem isCartItemExist(Cart cart, Book book, Long userId) {
//		CartItem cartItem=cartItemRepository.isCartItemExist(cart, book, userId);
//		return cartItem;
//	}
//	
//	@Override
//	public void removeCartItem(Long userId,Long cartItemId) throws ResourceNotFoundException{
//		System.out.println("userId- "+userId+" cartItemId "+cartItemId);
//		CartItem cartItem = findCartItemById(cartItemId);
//		User user = userService.findUserById(cartItem.getUserId());
//		User reqUser = userService.findUserById(userId);
//		
//		if(user.getId().equals(reqUser.getId())) {
//			cartItemRepository.deleteById(cartItem.getId());
//		}
//		else {
//			throw new ResourceNotFoundException("you can't remove anothor users item");
//		}
//		
//	}
//
//	@Override
//	public CartItem findCartItemById(Long cartItemId){
//		CartItem cartItem = cartItemRepository.findById(cartItemId).orElseThrow(() -> new ResourceNotFoundException("Something went wrong!"));
//		return cartItem;
//	}


}
