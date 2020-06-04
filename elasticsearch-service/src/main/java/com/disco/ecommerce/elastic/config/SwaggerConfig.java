package com.disco.ecommerce.elastic.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(generateAPIInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.disco.ecommerce.elastic.resource"))
                .paths(PathSelectors.any())
                .build();
    }


    private ApiInfo generateAPIInfo() {
        return new ApiInfo("ECommerce/Elsatic Search", "Demo application for DISCO task assesment", "1.0.0",
                "to do ", getContacts(), "", "");
    }


    private Contact getContacts() {
        return new Contact("Varduhi Sargsyan", "", "postvard@gmail.com");
    }
}
