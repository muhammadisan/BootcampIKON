package com.example.springswagger.controller;

import com.example.springswagger.entity.Product;
import com.example.springswagger.service.ProductService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ProductController {
    @Autowired
    private ProductService productService;

    @ApiOperation("Get all products info")
    @GetMapping("/")
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    /**
     * @param id    Product id
     */
    @ApiOperation("Get product info by id")
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Integer id) {
        return productService.getProductById(id);
    }

    @ApiOperation("Add new product")
    @PostMapping("/add-product")
    public Product createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @ApiOperation("Edit product info")
    @PutMapping("/edit")
    public Product editProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @ApiOperation("Delete product by id")
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Integer id) {
        productService.deleteProduct(id);
    }
}
