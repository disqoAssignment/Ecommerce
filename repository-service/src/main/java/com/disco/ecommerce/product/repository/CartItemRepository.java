package com.disco.ecommerce.product.repository;

import com.disco.ecommerce.product.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
