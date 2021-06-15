package br.com.BibliotecaRest.objetos;

import java.io.Serializable;

public class Admin implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private int id;
	private String nome;
	private String imagem;
	private String login;
	private String senha;
	
	
	public int getId(){
		return id;
	}
	
	public void setId(int id){
		this.id = id;
	}
	
	public String getNome(){
		return nome;
	}
	
	public void setNome(String nome){
		this.nome = nome;
	}
	
	public String getImagem(){
		return imagem;
	}
	
	public void setImagem(String imagem){
		this.imagem = imagem;
	}

	public String getLogin(){
		return login;
	}
	
	public void setLogin(String login){
		this.login = login;
	}
	
	public String getSenha(){
		return senha;
	}
	
	public void setSenha(String senha){
		this.senha = senha;
	}
	
}
