package com.disco.ecommerce.product.service.impl;

import com.disco.ecommerce.product.dto.CartDTO;
import com.disco.ecommerce.product.entity.Cart;
import com.disco.ecommerce.product.entity.CartItem;
import com.disco.ecommerce.product.mapper.CartMapper;
import com.disco.ecommerce.product.repository.CartItemRepository;
import com.disco.ecommerce.product.repository.CartRepository;
import com.disco.ecommerce.product.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    public CartDTO getCartByCartId(Long cartId) {
        Cart cart = cartRepository.findById(cartId).orElse(null);

        return cart != null ? CartMapper.toDTO(cart) : null;
    }

    public CartDTO getCartByUserId(Long userId) {
        Cart cart = cartRepository.findById(userId).orElse(null);
        return cart != null ? CartMapper.toDTO(cart) : null;
    }


    public void save(CartDTO dto) {
        if (dto != null) {
            cartRepository.save(CartMapper.toEntity(dto));
        }
    }



}
