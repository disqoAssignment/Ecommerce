package com.disco.ecommerce.authentication.resource;

import com.disco.ecommerce.authentication.service.CustomUserDetailsService;
import com.disco.ecommerce.authentication.models.AuthenticationRequest;
import com.disco.ecommerce.authentication.models.AuthenticationResponse;
import com.disco.ecommerce.authentication.util.JwtUtil;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtTokenUtil;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;



    @ApiOperation(value = "Service healthcheck / simple echo")
    @RequestMapping(value = "echo", method = RequestMethod.GET)
    public String firstPage() {
        return "echo";
    }


    @ApiOperation(value = "Returns Hello World")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The request has succeeded or (your message)"),
            @ApiResponse(code = 401, message = "The request requires user authentication or (your message)"),
            @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden or (your message)"),
            @ApiResponse(code = 404, message = "The server has not found anything matching the Request-URI or (your message)")})
    @RequestMapping(value = "login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@ApiParam(value = "authenticationRequest", required = true) @RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }


        final UserDetails userDetails = customUserDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String jwt = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

}

