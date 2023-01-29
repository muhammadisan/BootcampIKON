package com.muhammadisan.springredisjwt;

import com.muhammadisan.springredisjwt.entity.Book;
import com.muhammadisan.springredisjwt.model.AuthenticationRequest;
import com.muhammadisan.springredisjwt.model.AuthenticationResponse;
import com.muhammadisan.springredisjwt.repository.BookDao;
import com.muhammadisan.springredisjwt.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
class JwtController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtil jwtTokenUtil;

	@Autowired
	private MyUserDetailsService userDetailsService;

	@GetMapping("/hello")
	public String firstPage() {
		return "Hello JWT";
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws Exception {

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
							authenticationRequest.getPassword()));
		} catch (BadCredentialsException e) {
			throw new Exception("Incorrect username or password", e);
		}

		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = jwtTokenUtil.generateToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}

}

@SpringBootApplication
@RestController
@RequestMapping("/books")
public class SpringJwtApplication {
	@Autowired
	private BookDao dao;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping
	public Book save(@RequestBody Book book) {
		return dao.save(book);
	}

	@GetMapping
	public List<Book> getAllProducts() {
		return dao.findAll();
	}

	@GetMapping("/{id}")
	public Book findProduct(@PathVariable int id) {
		return dao.findBookById(id);
	}

	@DeleteMapping("/{id}")
	public String remove(@PathVariable int id) {
		return dao.deleteBook(id);
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringJwtApplication.class, args);
	}

}