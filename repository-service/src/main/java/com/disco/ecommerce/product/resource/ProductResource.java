package com.disco.ecommerce.product.resource;

import com.disco.ecommerce.product.dto.ProductDTO;
import com.disco.ecommerce.product.entity.Product;
import com.disco.ecommerce.product.mapper.ProductMapper;
import com.disco.ecommerce.product.service.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Api(value = "Product Resource API REST Endpoint", description = "Exposes product operations")
@RestController
@RequestMapping("/product")
public class ProductResource {

    @Value("${api.key}")
    private String apiKey;
    @Autowired
    private ProductService productService;

    @ApiOperation(value = "Returns product list")
    @RequestMapping(name = "/all", method = RequestMethod.GET)
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts();
    }

    @ApiOperation(value = "Returns product by id")
    @RequestMapping(name = "/item/{productId}", method = RequestMethod.GET)
    public ProductDTO getProductItem(@ApiParam(value = "productId", required = true) @PathVariable("productId") Long productId) {
        return productService.getProductById(productId);

    }


    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Illegal request.")
    public void handleClientErrors(Exception e) {
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Server error.")
    public void handleServertErrors(Exception e) {
    }
}
