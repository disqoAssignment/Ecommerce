package com.disco.ecommerce.product.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.io.Serializable;
import java.util.Date;


@ApiModel(value="ProductDTO", description="Sample model for Product")
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDTO implements Serializable {

    @ApiModelProperty(notes = "product id")
    private Long productId;

    @ApiModelProperty(notes = "product name")
    private String productName;

    @ApiModelProperty(notes = "product description")
    private String productDescription;

    @ApiModelProperty(notes = "date product is added to inventory")
    private Date productDate;

    @ApiModelProperty(notes = "product price")

    private double productPrice;
    @ApiModelProperty(notes = "product condition new | used")

    private String productCondition;
    @ApiModelProperty(notes = "unit in stock")
    private int unitInStock;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public Date getProductDate() {
        return productDate;
    }

    public void setProductDate(Date productDate) {
        this.productDate = productDate;
    }

    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductCondition() {
        return productCondition;
    }

    public void setProductCondition(String productCondition) {
        this.productCondition = productCondition;
    }

    public int getUnitInStock() {
        return unitInStock;
    }

    public void setUnitInStock(int unitInStock) {
        this.unitInStock = unitInStock;
    }
}
