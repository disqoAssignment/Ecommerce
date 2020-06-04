package com.disco.ecommerce.elastic.repository;

import com.disco.ecommerce.elastic.model.Category;
import com.disco.ecommerce.elastic.model.Product;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface ProductRepository  extends ElasticsearchRepository<Product, Long> {

    List<Product> findByName(String name);
    List<Product> findByCategory(Category category);
    List<Product> findByBrand(String brand);
    List<Product> findByPrice(Double start, Double end);

}
