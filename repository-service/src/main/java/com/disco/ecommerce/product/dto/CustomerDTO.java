package com.disco.ecommerce.product.dto;

import com.disco.ecommerce.product.entity.Cart;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import java.io.Serializable;

@ApiModel(value="CustomerDTO", description="Sample model for Customer")
@JsonIgnoreProperties(ignoreUnknown = true)
public class CustomerDTO implements Serializable {

	@ApiModelProperty(notes = "customer id")
    private Long customerId;

	@ApiModelProperty(notes = "customer email")
    private String email;
	@ApiModelProperty(notes = "customer name")
    private String customerName;

	@ApiModelProperty(notes = "is verified used")
    private boolean enabled;


	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

}
