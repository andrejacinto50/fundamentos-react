package br.com.treinaweb.twclientes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class TwclientesApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwclientesApplication.class, args);
	}

}
