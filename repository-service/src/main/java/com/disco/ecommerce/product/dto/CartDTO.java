package com.disco.ecommerce.product.dto;

import com.disco.ecommerce.product.entity.CartItem;
import com.disco.ecommerce.product.entity.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
@ApiModel(value="CartDTO", description="Sample model for the Cart")
@JsonIgnoreProperties(ignoreUnknown = true)
public class CartDTO implements Serializable {

    @ApiModelProperty(notes = "cart id associated with customer account")
    private Long cartId;

    @ApiModelProperty(notes = "customer id")
    private long customerId;

    @ApiModelProperty(notes = "list of items added to cart")
    private List<CartItemDTO> cartItems = new ArrayList<>();


    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public List<CartItemDTO> getCartItems() {
        return cartItems;
    }

    public void addToCartItems(CartItemDTO cartItemDTO) {
        cartItems.add(cartItemDTO);
    }

    public void setCartItems(List<CartItemDTO> cartItems) {
        this.cartItems = cartItems;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }
}
