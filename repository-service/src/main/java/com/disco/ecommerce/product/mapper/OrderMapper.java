package com.disco.ecommerce.product.mapper;

import com.disco.ecommerce.product.dto.OrderItemDTO;
import com.disco.ecommerce.product.dto.ProductDTO;
import com.disco.ecommerce.product.entity.Customer;
import com.disco.ecommerce.product.entity.OrderItem;
import com.disco.ecommerce.product.entity.Product;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

import java.util.ArrayList;
import java.util.List;

public class OrderMapper {

    private OrderMapper() {
        //empty private constructor to hide the implicit public one.
    }

    public static OrderItem toEntity(OrderItemDTO dto) {
        if (dto == null) {
            return null;
        }
        final OrderItem entity = new OrderItem();
        Customer customer = new Customer();
        customer.setCustomerId(dto.getCustomerId());
        entity.setCustomer(customer);
        Product product = new Product();
        product.setProductId(dto.getProductId());
        entity.setProduct(product);
        entity.setPrice(dto.getPrice());
        entity.setQuantity(dto.getQuantity());
        return entity;
    }

    public static OrderItemDTO toDTO(OrderItem entity) {
        if (entity == null) {
            return null;
        }
        final OrderItemDTO dto = new OrderItemDTO();
        dto.setOrderItemId(dto.getOrderItemId());
        dto.setDescription(entity.getProduct().getProductDescription());
        dto.setCustomerId(entity.getCustomer().getCustomerId());
        dto.setName(entity.getProduct().getProductName());
        dto.setPrice(entity.getPrice());
        dto.setQuantity(entity.getQuantity());

        return dto;
    }

    public static List<OrderItemDTO> toDTOList(List<OrderItem> orders) {
        final List<OrderItemDTO> orderList = new ArrayList<>(orders.size());
        for (final OrderItem orderItem : orders) {
            orderList.add(toDTO(orderItem));
        }
        return orderList;
    }

    public static List<OrderItem> toEntityList(List<OrderItemDTO> dtos) {
        final List<OrderItem> orderList = new ArrayList<>(dtos.size());
        for (final OrderItemDTO orderItemDTO : dtos) {
            orderList.add(toEntity(orderItemDTO));
        }
        return orderList;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.SHORT_PREFIX_STYLE);
    }
}

