package com.disco.ecommerce.product.mapper;

import com.disco.ecommerce.product.dto.ProductDTO;
import com.disco.ecommerce.product.entity.Product;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.apache.commons.lang.builder.ToStringStyle;

import java.util.ArrayList;
import java.util.List;

public class ProductMapper {

    private ProductMapper() {
        //empty private constructor to hide the implicit public one.
    }

    public static Product toEntity(ProductDTO productDTO) {
        if (productDTO == null) {
            return null;
        }
        final Product product = new Product();

        return product;
    }

    public static ProductDTO toDTO(Product product) {
        if (product == null) {
            return null;
        }
        final ProductDTO productDTO = new ProductDTO();
        productDTO.setProductId(product.getProductId());
        productDTO.setUnitInStock(product.getUnitInStock());
        productDTO.setProductPrice(product.getProductPrice());
        productDTO.setProductName(product.getProductName());
        productDTO.setProductDate(product.getProductDate());
        productDTO.setProductCondition(product.getProductCondition());
        productDTO.setProductDescription(product.getProductDescription());

        return productDTO;
    }

    public static List<ProductDTO> toDTOList(List<Product> products) {
        final List<ProductDTO> productDTOList = new ArrayList<>(products.size());
        for (final Product product : products) {
            productDTOList.add(toDTO(product));
        }
        return productDTOList;
    }

    public static List<Product> toEntityList(List<ProductDTO> productDTOs) {
        final List<Product> productList = new ArrayList<>(productDTOs.size());
        for (final ProductDTO productDTO : productDTOs) {
            productList.add(toEntity(productDTO));
        }
        return productList;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this, ToStringStyle.SHORT_PREFIX_STYLE);
    }
}

