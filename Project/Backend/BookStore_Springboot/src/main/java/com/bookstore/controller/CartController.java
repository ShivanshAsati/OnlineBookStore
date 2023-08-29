//package com.bookstore.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.bookstore.custom_exceptions.ResourceNotFoundException;
//import com.bookstore.dto.AddAuthorDTO;
//import com.bookstore.dto.AddItemDTO;
//import com.bookstore.dto.ApiResponse;
//import com.bookstore.dto.AuthorDTO;
//import com.bookstore.dto.OnlyAuthorDTO;
//import com.bookstore.entities.Cart;
//import com.bookstore.entities.User;
//import com.bookstore.service.CartService;
//import com.bookstore.service.UserService;
//
//@RestController
//@RequestMapping("/cart")
//public class CartController {
//	
//	@Autowired
//	private CartService cartService;
//	
//	@Autowired
//	private UserService userService;
//	
//	@PostMapping("/add")
//	public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemDTO request, @RequestHeader("Authorization") String jwt) throws ResourceNotFoundException{
//		User user=userService.findUserProfileByJwt(jwt);
//		cartService.addCartItem(user.getId(), request);
//		ApiResponse res= new ApiResponse("Item Added To Cart Successfully");
//		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
//		
//	}
//
//	
//	
//	@GetMapping("/get")
//	public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws ResourceNotFoundException{
//		User user=userService.findUserProfileByJwt(jwt);
//		Cart cart=cartService.findUserCart(user.getId());
//		System.out.println("cart - "+cart.getUser().getEmail());
//		return new ResponseEntity<Cart>(cart,HttpStatus.OK);
//	}
//	
//	
//}
