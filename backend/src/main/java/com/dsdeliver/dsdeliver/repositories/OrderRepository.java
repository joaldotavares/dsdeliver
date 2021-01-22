package com.dsdeliver.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dsdeliver.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	
}
