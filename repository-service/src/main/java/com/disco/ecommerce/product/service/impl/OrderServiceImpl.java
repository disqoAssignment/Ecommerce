package com.disco.ecommerce.product.service.impl;

import com.disco.ecommerce.product.dto.OrderItemDTO;
import com.disco.ecommerce.product.entity.Cart;
import com.disco.ecommerce.product.entity.OrderItem;
import com.disco.ecommerce.product.mapper.CartMapper;
import com.disco.ecommerce.product.mapper.OrderMapper;
import com.disco.ecommerce.product.repository.CartRepository;
import com.disco.ecommerce.product.repository.OrderItemRepository;
import com.disco.ecommerce.product.service.CartService;
import com.disco.ecommerce.product.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderItemRepository orderItemRepository;


    @Override
    public OrderItemDTO getOrderById(Long orderId) {
        OrderItem order = orderItemRepository.findById(orderId).orElse(null);
        return order != null ? OrderMapper.toDTO(order) : null;
    }

    @Override
    public List<OrderItemDTO> getOrders(Long customerId) {
        //todo
        return null;
    }

    @Override
    public void save(OrderItemDTO dto) {
        if (dto != null) {
            orderItemRepository.save(OrderMapper.toEntity(dto));
        }
    }

    @Override
    public void update(Long orderId) {
//todo
    }

    @Override
    public void delete(Long orderId) {

    }

}
