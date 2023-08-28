package com.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookstore.custom_exceptions.ResourceNotFoundException;
import com.bookstore.dto.ApiResponse;
import com.bookstore.entities.CartItem;
import com.bookstore.entities.User;
import com.bookstore.service.CartItemService;
import com.bookstore.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;


	@RestController
	@RequestMapping("/cart_items")
	public class CartItemController {

		@Autowired
		private CartItemService cartItemService;
		@Autowired
		private UserService userService;
		
		@DeleteMapping("/{cartItemId}")
		public ResponseEntity<ApiResponse>deleteCartItemHandler(@PathVariable Long cartItemId, @RequestHeader("Authorization")String jwt) throws ResourceNotFoundException{
			User user=userService.findUserProfileByJwt(jwt);
			cartItemService.removeCartItem(user.getId(), cartItemId);
			ApiResponse res=new ApiResponse("Item Remove From Cart");
			return new ResponseEntity<ApiResponse>(res, HttpStatus.ACCEPTED);
		}
		
		@PutMapping("/{cartItemId}")
		public ResponseEntity<CartItem>updateCartItemHandler(@PathVariable Long cartItemId, @RequestBody CartItem cartItem, @RequestHeader("Authorization")String jwt) throws ResourceNotFoundException{
			User user=userService.findUserProfileByJwt(jwt);
			CartItem updatedCartItem =cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);
			//ApiResponse res=new ApiResponse("Item Updated");
			return new ResponseEntity<>(updatedCartItem,HttpStatus.ACCEPTED);
		}

	
}
