package com.disco.ecommerce.elastic.model;

import java.util.List;

public class Category {
    private String name;
    private List<Product> products;


    public Category() {
    }

    public Category(String name) {
        this.name = name;
    }

    public Category(List<Product> products) {
        this.products = products;
    }
    public Category(String name, List<Product> products) {
        this(name);
        this.products = products;
    }



}
