package com.disco.ecommerce.cart.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
import java.util.List;
@ApiModel(value="CartDTO", description="Sample model for the Cart")
@JsonIgnoreProperties(ignoreUnknown = true)
public class CartDTO implements Serializable{

    @ApiModelProperty(notes = "cart id associated with customer account")
    private Long cartId;

    @ApiModelProperty(notes = "list of items added to cart")
    private List<CartItemDTO> cartItems;

    @ApiModelProperty(notes = "customer id")
    private long  customerId;


    public Long getCartId() {
        return cartId;
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public List<CartItemDTO> getCartItems() {
        return cartItems;
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
