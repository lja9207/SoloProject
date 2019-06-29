package com.project.web.repositories;

import com.project.web.domain.CustomerDTO;
import com.project.web.entities.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
   // public CustomerDTO findOne4(Customer customer);
}