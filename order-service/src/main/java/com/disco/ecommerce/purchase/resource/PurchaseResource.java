package com.disco.ecommerce.purchase.resource;


import com.disco.ecommerce.purchase.models.OrderItemDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
@Api(value = "Purchase Resource REST Endpoint", description = "Exposes product purchase operations")
@RestController
@RequestMapping("/purchase")
public class PurchaseResource {

    @Value("${api.key}")
    private String apiKey;

    @Autowired
    private RestTemplate restTemplate;

    @ApiOperation(value = "Returns list of orders")
    @RequestMapping(value = "/{customerId}", method = RequestMethod.GET)
    public List<OrderItemDTO> getOrder(@ApiParam(value = "customerId", required = true) @PathVariable("customerId") String customerId) {
        List<OrderItemDTO> orders = restTemplate.getForObject("http://repository-service/api/repo/order/all" + customerId + "?api_key=" + apiKey, List.class);
        return orders;
    }
    @ApiOperation(value = "Returns  order  by Id")
    @RequestMapping(value = "/{orderId}", method = RequestMethod.GET)
    public OrderItemDTO getOrderById(@ApiParam(value = "orderId", required = true) @PathVariable("orderId") Long orderId) {
       return  restTemplate.getForObject("http://repository-service/api/repo/order/item" + orderId + "?api_key=" + apiKey, OrderItemDTO.class);

    }
}
