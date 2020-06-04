package com.disco.ecommerce.cart.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
@ApiModel
@JsonIgnoreProperties(ignoreUnknown = true)
public class CartItemDTO implements Serializable{

    @ApiModelProperty(notes = "cartItem id")
    private Long cartItemId;

    @ApiModelProperty(notes = "cart id")
    private  long cartId;

    @ApiModelProperty(notes = "product id")
    private  long productId;

    @ApiModelProperty(notes = "price")
    private double price;

    @ApiModelProperty(notes = "quantity id")
    private int quantity;


    public Long getCartItemId() {
		return cartItemId;
	}

	public void setCartItemId(Long cartItemId) {
		this.cartItemId = cartItemId;
	}

    public long getCartId() {
        return cartId;
    }

    public void setCartId(long cartId) {
        this.cartId = cartId;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
}
