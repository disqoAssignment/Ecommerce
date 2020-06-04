package com.disco.ecommerce.elastic.service;

import com.disco.ecommerce.elastic.model.Category;
import com.disco.ecommerce.elastic.model.Product;
import com.disco.ecommerce.elastic.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getByName(String name) {
        return productRepository.findByName(name);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> findByCategory(Category category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> findByBrand(String brand) {
        return productRepository.findByBrand(brand);
    }


}
