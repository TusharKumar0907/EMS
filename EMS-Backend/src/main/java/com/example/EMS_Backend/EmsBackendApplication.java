package com.example.EMS_Backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

// import com.example.EMS_Backend.repository.EmployeeRepository;


// @EnableMongoRepositories(basePackageClasses = EmployeeRepository.class)
@SpringBootApplication
public class EmsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);
	}

}
