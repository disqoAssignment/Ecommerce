package com.disco.ecommerce.elastic.resource;


import com.disco.ecommerce.elastic.model.Product;
import com.disco.ecommerce.elastic.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/product")
public class SearchController {

    @Autowired
    private ProductService productService;


    @RequestMapping(value = "/get-by-name/{name}", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> findMovieByName(@PathVariable("name") String productName) {
        List<Product> fetchedProducts = productService.getByName(productName);
        return ResponseEntity.ok(fetchedProducts);
    }

    @RequestMapping(value = "/get-by-brand/{name}", method = RequestMethod.GET)
    public ResponseEntity<List<Product>> findMovieByBrand(@PathVariable("name") String aBrand) {
        List<Product> fetchedProducts = productService.findByBrand(aBrand);
        return ResponseEntity.ok(fetchedProducts);
    }


}
