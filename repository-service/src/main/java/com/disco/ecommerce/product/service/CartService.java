package com.disco.ecommerce.product.service;


import com.disco.ecommerce.product.dto.CartDTO;
import com.disco.ecommerce.product.entity.Cart;

import java.io.IOException;

public interface CartService {

    CartDTO getCartByUserId(Long userId);

    void save(CartDTO cart);

    public CartDTO getCartByCartId(Long cartId);

}
