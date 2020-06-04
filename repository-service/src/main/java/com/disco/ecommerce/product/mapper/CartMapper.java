package com.disco.ecommerce.product.mapper;

import com.disco.ecommerce.product.dto.CartDTO;
import com.disco.ecommerce.product.dto.OrderItemDTO;
import com.disco.ecommerce.product.entity.Cart;
import com.disco.ecommerce.product.entity.Customer;
import com.disco.ecommerce.product.entity.OrderItem;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

import java.util.ArrayList;
import java.util.List;

public class CartMapper {

    private CartMapper() {
        //empty private constructor to hide the implicit public one.
    }

    public static Cart toEntity(CartDTO dto) {
        if (dto == null) {
            return null;
        }
        final Cart entity = new Cart();
        entity.setCartId(dto.getCartId());
        entity.setCartItems(CartItemMapper.toEntityList(dto.getCartItems()));
        Customer customer = new Customer();
        customer.setCustomerId(dto.getCustomerId());
        entity.setCustomer(customer);

        return entity;
    }

    public static CartDTO toDTO(Cart entity) {
        if (entity == null) {
            return null;
        }
        final CartDTO dto = new CartDTO();

        dto.setCartItems(CartItemMapper.toDTOList(entity.getCartItems()));
        dto.setCartId(entity.getCartId());
        dto.setCustomerId(entity.getCustomer().getCustomerId());
        return dto;
    }


    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.SHORT_PREFIX_STYLE);
    }
}

