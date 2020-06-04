package com.disco.ecommerce.product.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;

@ApiModel(value="OrderItemDTO", description="Sample model for Order")
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrderItemDTO implements Serializable{

    @ApiModelProperty(notes = "order id")
    private Long orderItemId;

    @ApiModelProperty(notes = "name")
    private String  name;

    @ApiModelProperty(notes = "description")
    private String description;

    @ApiModelProperty(notes = "product id")
    private  Long productId;

    @ApiModelProperty(notes = "customer id")
    private long customerId;

    @ApiModelProperty(notes = "price")
    private double price;

    @ApiModelProperty(notes = "quantity")
    private int quantity;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
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

    public Long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(Long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }
}
