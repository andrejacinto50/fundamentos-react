package model;

import javax.annotation.Generated;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@EntityScan
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {

	@Id
	@Generated(value = { "Identity" })
	private Long id;

	private  String nome;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nome=" + nome + "]";
	}
}
