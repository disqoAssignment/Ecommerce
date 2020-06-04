package com.disco.ecommerce.product.resource;

import com.disco.ecommerce.product.dto.CartDTO;
import com.disco.ecommerce.product.dto.CartItemDTO;
import com.disco.ecommerce.product.dto.ProductDTO;
import com.disco.ecommerce.product.entity.*;
import com.disco.ecommerce.product.mapper.CartMapper;
import com.disco.ecommerce.product.service.CartService;
import com.disco.ecommerce.product.service.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
@Api(value = "Cart Resource API  REST Endpoint", description = "Exposes API for cart operations }")
@RestController
@RequestMapping("/cart")
public class CartResource {

    @Value("${api.key}")
    private String apiKey;

    @Autowired
    private CartService cartService;

    @Autowired
    ProductService productService;

    private static final double DISCOUNT = 0.25;

    @ApiOperation(value = "Returns cart item associated with customer account ")
    @RequestMapping(value = "/{customerId}", method = RequestMethod.GET)
    public CartDTO getCartByCustomerId(@ApiParam(value = "customerId", required = true) @PathVariable("customerId") Long customerId) {
        return cartService.getCartByUserId(customerId);

    }

    @ApiOperation(value = "Add product to cart")
    @ApiResponse(code = 204, message = "Successful added to cart")
    @RequestMapping(value = "/{cartId}/{productId}/{quantity}", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void addCartItem(@ApiParam(value = "cartId", required = true)@PathVariable("cartId") Long cartId,
                            @ApiParam(value = "productId", required = true) @PathVariable("productId") Long productId,
                            @ApiParam(value = "quantity", required = true) @PathVariable("quantity") Integer quantity) {

        ProductDTO productDto = productService.getProductById(productId);

        CartItemDTO cartItemDTO = new CartItemDTO();
        cartItemDTO.setPrice(productDto.getProductPrice() - DISCOUNT);
        cartItemDTO.setProductId(productId);
        cartItemDTO.setCartId(cartId);
        cartItemDTO.setQuantity(quantity);

        CartDTO cartDTO = new CartDTO();
        cartDTO.setCartId(cartId);
        cartDTO.addToCartItems(cartItemDTO);
        cartService.save(cartDTO);
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
