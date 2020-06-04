package com.disco.ecommerce.product.service.impl;


import com.disco.ecommerce.product.dto.ProductDTO;
import com.disco.ecommerce.product.entity.Product;
import com.disco.ecommerce.product.mapper.ProductMapper;
import com.disco.ecommerce.product.repository.ProductRepository;
import com.disco.ecommerce.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;


    public List<ProductDTO> getAllProducts() {

        List<Product> products = productRepository.findAll();
        return products != null ? ProductMapper.toDTOList(products) : null;
    }

    public ProductDTO getProductById(Long productId) {

        Product product = productRepository.findById(productId).orElse(null);
        return product != null ? ProductMapper.toDTO(product) : null;
    }

    @Override
    public ProductDTO getProductByName(String name) {

        Product product = productRepository.findByProductName(name);
        return product != null ? ProductMapper.toDTO(product) : null;

    }

    public void save(ProductDTO product) {

        if (product != null) {
            productRepository.save(ProductMapper.toEntity(product));
        }
    }

    public void delete(Long productId) {
        productRepository.deleteById(productId);
    }
}
