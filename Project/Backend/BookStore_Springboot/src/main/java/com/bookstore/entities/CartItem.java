package com.bookstore.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "cart_item")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CartItem extends BaseEntity{
	
//	@JsonIgnore
//	@ManyToOne
//	@JoinColumn(name = "cart_id")
//	private Cart cart;
	
	public CartItem(Book book, User user, double totalPrice, double totalDiscountedPrice) {
		this.book = book;
		this.user = user;
		this.totalPrice = totalPrice;
		this.totalDiscountedPrice = totalDiscountedPrice;
	}
	
	@ManyToOne
	@JoinColumn(name = "book_id")
	private Book book;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "quantity",columnDefinition = "int default 1")
	private int quantity;
	
	private double totalPrice;
	
	private double totalDiscountedPrice;
	
	
}
