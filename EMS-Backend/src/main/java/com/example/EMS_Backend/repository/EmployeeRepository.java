package com.example.EMS_Backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.EMS_Backend.entity.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

}
