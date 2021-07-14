package controller;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import model.Cliente;
import repository.ClienteRepository;

public class ClienteController {
	@Autowired
	private ClienteRepository clienteRepository;
	
	@GET 
	public List<Cliente> listar() {
	return clienteRepository.findAll();		
		
	}
    
	@POST
	@ResponseStatus(HttpStatus.CREATED )
	public Cliente adicionar(@RequestBody Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
}
