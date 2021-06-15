package br.com.BibliotecaRest.objetos;

import java.io.Serializable;
import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Cliente implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private int id;
	private String nome;
	
	private String email;
	private String imagem;
	private String login;
	private String senha;
	private String data;
	java.util.Date dataProBanco = null;
	
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
	
	
	public String getData(){
		return data;
	}
	
	public void setData(String data){
		this.data = data;
	}
	
	public String getEmail(){
		return email;
	}
	
	public void setEmail(String email){
		this.email = email;
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
	
	public String converteNascimentoParaBD(String nascimento) {
		
		 String[] nascimentoDividido = nascimento.split("/");

		 String nascimentoConvertido = nascimentoDividido[2] + "-" + nascimentoDividido[1] + "-" + nascimentoDividido[0];
		
		 return nascimentoConvertido;
	 }
	 

	 public String converteNascimentoParaFrontend(String nascimento) {
		
		 String[] nascimentoDividido = nascimento.split("-");
	
		 String nascimentoConvertido = nascimentoDividido[2] + "/" + nascimentoDividido[1] + "/" + nascimentoDividido[0];
		 
		 return nascimentoConvertido;
	 }
}
