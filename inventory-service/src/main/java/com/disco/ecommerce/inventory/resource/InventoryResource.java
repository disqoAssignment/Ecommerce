package com.disco.ecommerce.inventory.resource;


import com.disco.ecommerce.inventory.dto.ProductDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.Authorization;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
@Api(value = "Inventory  Resource REST Endpoint", description = "Exposes products listing available in inventory also vew product unit detailes")
@RestController
@RequestMapping("/product")
public class InventoryResource {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${api.key}")
    private String apiKey;

    @ApiOperation(value = "Returns Product object")
    @RequestMapping(value = "/{productId}", method = RequestMethod.GET)
    public ProductDTO getProductItem(@ApiParam(value = "productId", required = true) @PathVariable("productId") Long productId) {
        ProductDTO productDTO = restTemplate.getForObject("http://repository-service/api/repo/product/item"+productId + "?api_key=" +  apiKey, ProductDTO.class);
        return productDTO;

    }
    @ApiOperation(value = "Returns list of products")
    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<ProductDTO> getAllProducts() {
        List<ProductDTO> productDTOList = restTemplate.getForObject("http://repository-service/api/repo/product/all" +"?api_key=" +  apiKey, List.class);
        return productDTOList;

    }


}

