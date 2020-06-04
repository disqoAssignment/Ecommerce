package com.disco.ecommerce.authentication.repo;


import com.disco.ecommerce.authentication.model.Role;
import com.disco.ecommerce.authentication.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long> {

	Optional<Role> findByName(RoleName roleName);
}
