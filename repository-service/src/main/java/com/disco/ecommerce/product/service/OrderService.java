package com.disco.ecommerce.product.service;


import com.disco.ecommerce.product.dto.OrderItemDTO;
import com.disco.ecommerce.product.entity.OrderItem;

import java.util.List;

public interface OrderService {

    OrderItemDTO getOrderById(Long orderId);

   List<OrderItemDTO> getOrders(Long customerId);

    void save(OrderItemDTO order);


    void update(Long orderId);

    void delete(Long orderId);

}
