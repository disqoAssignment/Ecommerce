package com.disco.ecommerce.authentication.models;

import io.swagger.annotations.ApiModel;

import java.io.Serializable;
@ApiModel(value="AuthenticationResponse", description="Authentication response model")
public class AuthenticationResponse implements Serializable {

    private final String jwt;

    public AuthenticationResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}
