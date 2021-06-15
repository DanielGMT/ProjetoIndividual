package br.com.BibliotecaRest.objetos;

import java.io.Serializable;

public class Livro implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private int id;
	private String titulo;
	private String descricao;
	private int quantidade;
	private String imagem;
	private int editoraId;
	private int autorId;
	
	
	public int getId(){
		return id;
	}
	
	public void setId(int id){
		this.id = id;
	}
	
	public String getTitulo(){
		return titulo;
	}
	
	public void setTitulo(String titulo){
		this.titulo = titulo;
	}
	
	public String getDescricao(){
		return descricao;
	}
	
	public void setDescricao(String descricao){
		this.descricao = descricao;
	}

	public int getQuantidade(){
		return quantidade;
	}
	
	public void setQuantidade(int quantidade){
		this.quantidade = quantidade;
	}
	
	public String getImagem(){
		return imagem;
	}
	
	public void setImagem(String imagem){
		this.imagem = imagem;
	}
	
	public int getEditoraId(){
		return editoraId;
	}
	
	public void setEditoraId(int editoraId){
		this.editoraId = editoraId;
	}
	
	public int getAutorId(){
		return autorId;
	}
	
	public void setAutorId(int autorId){
		this.autorId = autorId;
	}
}
