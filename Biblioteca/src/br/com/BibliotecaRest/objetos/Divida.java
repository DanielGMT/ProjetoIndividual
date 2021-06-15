package br.com.BibliotecaRest.objetos;

public class Divida {
	
	private int id;
	private int tipo;
	private float valor;
	private int emprestimoId;
	private int status;
	
	
	public int getId(){
		return id;
	}
	
	public void setId(int id){
		this.id = id;
	}
	
	public int getTipo(){
		return tipo;
	}
	
	public void setTipo(int tipo){
		this.tipo = tipo;
	}
	
	public float getValor() {
		return valor;
	}
	
	public void setValor(float valor) {
		this.valor = valor;
	}
	
	public int getStatus() {
		return status;
	}
	
	public void setStatus(int status) {
		this.status = status;
	}
	
	public int getEmprestimoId() {
		return emprestimoId;
	}
	
	public void setEmprestimoId(int emprestimoId) {
		this.emprestimoId = emprestimoId;
	}
}
