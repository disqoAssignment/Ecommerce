package com.disco.ecommerce.product.repository;

import com.disco.ecommerce.product.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

}
