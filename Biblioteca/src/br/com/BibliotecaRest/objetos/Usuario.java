package br.com.BibliotecaRest.objetos;

import java.io.Serializable;

public class Usuario implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private String login;
	private String senha;
	private int permissao;
	
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
	
	public int getPermissao(){
		return permissao;
	}
	
	public void setPermissao(int permissao){
		this.permissao = permissao;
	}
}
