package com.example.springswagger.service;

import com.example.springswagger.entity.Product;
import com.example.springswagger.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    public Object getProductById(Integer id) {
        try {
            var res = productRepository.findById(id).get();
            return res;
        } catch (Exception e) {
            return e.toString();
        }
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public String deleteProduct(Integer id) {
        try {
            productRepository.deleteById(id);
            return "Success delete product with id = " + id;
        } catch (Exception e) {
            return e.toString();
        }

    }
}
