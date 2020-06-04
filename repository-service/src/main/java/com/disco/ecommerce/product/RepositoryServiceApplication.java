package com.disco.ecommerce.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class RepositoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RepositoryServiceApplication.class, args);
	}
}




