package com.disco.ecommerce.product.service;

import com.disco.ecommerce.product.dto.ProductDTO;
import com.disco.ecommerce.product.entity.Product;

import java.util.List;

public interface ProductService {

	
	List<ProductDTO> getAllProducts();
	
	ProductDTO getProductById(Long productId);
	ProductDTO getProductByName(String name);
	
	void save(ProductDTO product);
	
	void delete(Long productId);

}
