package com.disco.ecommerce.product.resource;

import com.disco.ecommerce.product.dto.OrderItemDTO;
import com.disco.ecommerce.product.dto.ProductDTO;
import com.disco.ecommerce.product.entity.Cart;
import com.disco.ecommerce.product.entity.Customer;
import com.disco.ecommerce.product.entity.OrderItem;
import com.disco.ecommerce.product.entity.Product;
import com.disco.ecommerce.product.mapper.OrderMapper;
import com.disco.ecommerce.product.service.CartService;
import com.disco.ecommerce.product.service.OrderService;
import com.disco.ecommerce.product.service.ProductService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
@Api(value = "Order Resource API  REST Endpoint", description = "Exposes API for purchase operations }")
@RestController
@RequestMapping("/order")
public class CustomerOrderResource{

    @Value("${api.key}")
    private String apiKey;

    @Autowired
    private OrderService orderService;


    @ApiOperation(value = "Returns order by id")
    @RequestMapping(name = "/item/{orderId}", method = RequestMethod.GET)
    public OrderItemDTO getOrderById(@ApiParam(value = "orderId", required = true)@PathVariable("orderId") Long orderId) {
        return orderService.getOrderById(orderId);
    }

    @ApiOperation(value = "Returns orders by customerId")
    @RequestMapping(name = "/all/{customerId}", method = RequestMethod.GET)
    public List<OrderItemDTO> getOrdersByCustomerId(@ApiParam(value = "customerId", required = true) @PathVariable("customerId") Long customerId) {
        return orderService.getOrders(customerId);
    }

    @ApiOperation(value = "Order a product")
    @ApiResponse(code = 204, message = "Successful purchase operation")
    @RequestMapping(value = "/{customerId}/{productId}/{quantity}", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void addOrder(@ApiParam(value = "customerId", required = true) @PathVariable("customerId") Long customerId,
                         @ApiParam(value = "productId", required = true) @PathVariable("productId") Long productId,
                         @ApiParam(value = "quantity", required = true) @PathVariable("quantity") Integer quantity) {

        OrderItemDTO orderItemDTO = new OrderItemDTO();
        orderItemDTO.setProductId(productId);
        orderItemDTO.setCustomerId(customerId);
        orderItemDTO.setQuantity(quantity);
        orderItemDTO.setName("{order }/{" + customerId + "}" + Instant.now());

    }

    @ApiOperation(value = "Remove/Cancel an order")
    @ApiResponse(code = 204, message = "Successful order cancelation")
    @RequestMapping(value = "/delete/{orderId}", method = RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void removeItem(@ApiParam(value = "orderId", required = true) @PathVariable(value = "orderId") Long orderId) {
        orderService.delete(orderId);
    }


    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Illegal request.")
    public void handleClientErrors(Exception e) {
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "Server error.")
    public void handleServertErrors(Exception e) {
    }


}
