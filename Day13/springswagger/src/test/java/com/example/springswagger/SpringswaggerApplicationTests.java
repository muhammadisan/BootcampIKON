package com.example.springswagger;

import com.example.springswagger.entity.Product;
import com.example.springswagger.repository.ProductRepository;
import com.example.springswagger.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.BDDMockito.*;

@ExtendWith(MockitoExtension.class)
class SpringswaggerApplicationTests {

	@Mock
	private ProductRepository productRepository;

	@InjectMocks
	private ProductService productService;

	private Product product;

	@BeforeEach
	void setUp() {
		product = Product.builder()
				.id(1)
				.name("Handphone")
				.description("Xiaomi istri")
				.stock(420)
				.price(BigDecimal.valueOf(7999000))
				.build();
	}

	@DisplayName("JUnit test for getProducts method")
	@Test
	public void givenProductsList_whenGettAllProducts_thenReturnProductsList() {
		// given
		Product product1 = Product.builder()
				.id(2)
				.name("Laptop Gaming")
				.description("Asus ROG")
				.stock(9)
				.price(BigDecimal.valueOf(30000000))
				.build();

		given(productRepository.findAll()).willReturn(List.of(product, product1));

		// when
		List<Product> productsList = productService.getProducts();

		// then
		assertThat(productsList).isNotNull();
		assertThat(productsList.size()).isEqualTo(2);
	}

	@DisplayName("JUnit test for getProductById method")
	@Test
	public void givenProductId_whenGetProductyId_thenReturnProductObject() {
		// given
		given(productRepository.findById(1)).willReturn(Optional.of(product));

		// when
		Product savedProduct = productService.getProductById(product.getId()).get();

		// then
		assertThat(savedProduct).isNotNull();
	}

	@DisplayName("JUnit test for saveProduct method")
	@Test
	public void givenProductObject_whenSaveProduct_thenReturnProductObject() {
		// given
		given(productRepository.save(product)).willReturn(product);

		// when -  action or the behaviour that we are going test
		Product savedProduct = productService.saveProduct(product);

		// then - verify the output
		assertThat(savedProduct).isNotNull();
	}

	@DisplayName("JUnit test for deleteProduct method")
	@Test
	public void givenProductId_whenDeleteProduct_thenReturnMessage() {
		// given
		int productId = 1;
		willDoNothing().given(productRepository).deleteById(productId);

		// when -  action or the behaviour that we are going test
		productService.deleteProduct(productId);

		// then - verify the output
		verify(productRepository, times(1)).deleteById(productId);
	}
}
