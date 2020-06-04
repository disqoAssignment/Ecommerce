package com.disco.ecommerce.elastic;

import com.disco.ecommerce.elastic.model.Category;
import com.disco.ecommerce.elastic.model.Product;
import com.disco.ecommerce.elastic.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ElasticSearchApplication {

    @Autowired
    private ProductService productService;

    private static final Logger logger = LoggerFactory.getLogger(ElasticSearchApplication.class);


    public static void main(String[] args) {


        SpringApplication.run(ElasticSearchApplication.class, args);
    }


    private Product getFirstItem() {
        Product item = new Product();
        item.setId(4L);
        item.setName("i play. by green sprouts Baby Girls' Sun Hat");

        List<Category> categories = new ArrayList<>();
        categories.add(new Category("Baby"));
        categories.add(new Category("Cotton"));
        categories.add(new Category("Organic"));

        item.setCategories(categories);
        item.setBrand("YSL");
        item.setPrice(25);

        return item;
    }

    private Product getSecondItem() {
        Product item = new Product();
        item.setId(40L);
        item.setName("Romper Jumpsuit");

        List<Category> categories = new ArrayList<>();
        categories.add(new Category("Baby"));
        categories.add(new Category("Girl"));
        categories.add(new Category("Cotton"));

        item.setCategories(categories);
        item.setBrand("Made in Armenia");
        item.setPrice(5);

        return item;
    }

    private Product getThirdItem() {
        Product item = new Product();
        item.setId(52L);
        item.setName("Macbook Air");

        List<Category> categories = new ArrayList<>();
        categories.add(new Category("MacBook"));
        categories.add(new Category("Computer"));
        categories.add(new Category("Retina Display"));

        item.setCategories(categories);
        item.setBrand("Apple");
        item.setPrice(2100);

        return item;
    }

    private Product getForthtem() {
        Product item = new Product();
        item.setId(512L);
        item.setName("Headset");

        List<Category> categories = new ArrayList<>();
        categories.add(new Category("JBL"));
        categories.add(new Category("Wireless"));

        item.setCategories(categories);
        item.setBrand("JBL");
        item.setPrice(120);

        return item;
    }


}




