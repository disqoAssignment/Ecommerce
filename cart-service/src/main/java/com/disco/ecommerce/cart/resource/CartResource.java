package com.disco.ecommerce.cart.resource;

import com.disco.ecommerce.cart.models.CartDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@Api(value = "Cart Resource REST Endpoint", description = "Shows the cart details")
@RestController
@RequestMapping("/cart")
public class CartResource {

    @Value("${api.key}")
    private String apiKey;

    @Autowired
    private RestTemplate restTemplate;

    @ApiOperation(value = "Returns Cart object")
    @RequestMapping(value = "/{customerId}", method = RequestMethod.GET)
    public CartDTO getProductItem(@ApiParam(value = "customerId", required = true)@PathVariable("customerId") Long customerId) {
        CartDTO cartDTO = restTemplate.getForObject("http://repository-service/api/repo/cart" + customerId + "?api_key=" +  apiKey, CartDTO.class);
        return cartDTO;

    }


}
