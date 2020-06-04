package com.disco.ecommerce.product.dto;

import com.disco.ecommerce.product.entity.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.*;
import java.io.Serializable;

@ApiModel(value="CreditCardDTO", description="Sample model for Customer credit cart")
@JsonIgnoreProperties(ignoreUnknown = true)
public class CreditCardDTO implements Serializable {


    @ApiModelProperty(notes = "cc id")
    private Long creditCardId;

    @ApiModelProperty(notes = "credit card holder")
    private Customer customer;

    @ApiModelProperty(notes = "16 digit number for cc")
    private String PAN;

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getPAN() {
        return PAN;
    }

    public void setPAN(String PAN) {
        this.PAN = PAN;
    }
}
