package com.disco.ecommerce.product.mapper;

import com.disco.ecommerce.product.dto.CartDTO;
import com.disco.ecommerce.product.dto.CartItemDTO;
import com.disco.ecommerce.product.dto.CartItemDTO;
import com.disco.ecommerce.product.entity.Cart;
import com.disco.ecommerce.product.entity.CartItem;
import com.disco.ecommerce.product.entity.OrderItem;
import com.disco.ecommerce.product.entity.Product;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

import java.util.ArrayList;
import java.util.List;

public class CartItemMapper {

    private CartItemMapper() {
        //empty private constructor to hide the implicit public one.
    }

    public static CartItem toEntity(CartItemDTO dto) {
        if (dto == null) {
            return null;
        }
        final CartItem entity = new CartItem();
        Cart cart = new Cart();
        cart.setCartId(dto.getCartId());
        entity.setCart(cart);
        Product product = new Product();
        product.setProductId(dto.getProductId());
        entity.setProduct(product);
        entity.setPrice(dto.getPrice());
        entity.setQuantity(dto.getQuantity());

        return entity;
    }

    public static CartItemDTO toDTO(CartItem entity) {
        if (entity == null) {
            return null;
        }
        final CartItemDTO dto = new CartItemDTO();
        dto.setCartItemId(entity.getCartItemId());
        dto.setCartId(entity.getCart().getCartId());
        dto.setPrice(entity.getPrice());
        dto.setProductId(entity.getProduct().getProductId());
        dto.setQuantity(entity.getQuantity());

        return dto;
    }


    public static List<CartItemDTO> toDTOList(List<CartItem> cartItems) {
        final List<CartItemDTO> cartList = new ArrayList<>(cartItems.size());
        for (final CartItem cartItem : cartItems) {
            cartList.add(toDTO(cartItem));
        }
        return cartList;
    }

    public static List<CartItem> toEntityList(List<CartItemDTO> dtos) {
        final List<CartItem> cartList = new ArrayList<>(dtos.size());
        for (final CartItemDTO orderItemDTO : dtos) {
            cartList.add(toEntity(orderItemDTO));
        }
        return cartList;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.SHORT_PREFIX_STYLE);
    }
}

