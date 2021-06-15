package br.com.BibliotecaRest.objetos;

import java.io.Serializable;

public class Emprestimo implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private int id;
	private int clienteId;
	private int livroId;
	private String dataEmp;
	private String dataDev;
	private String dataReal;
	private int status;
	
	
	public int getId(){
		return id;
	}
	
	public void setId(int id){
		this.id = id;
	}
	
	public int getClienteId(){
		return clienteId;
	}
	
	public void setClienteId(int clienteId){
		this.clienteId = clienteId;
	}
	
	public int getLivroId() {
		return livroId;
	}
	
	public void setLivroId(int livroId) {
		this.livroId = livroId;
	}
	
	public String getDataEmp() {
		return dataEmp;
	}
	
	public void setDataEmp(String dataEmp) {
		this.dataEmp = dataEmp;
	}
	
	public String getDataDev() {
		return dataDev;
	}
	
	public void setDataDev(String dataDev) {
		this.dataDev = dataDev;
	}
	
	public String getDataReal() {
		return dataReal;
	}
	
	public void setDataReal(String dataReal) {
		this.dataReal = dataReal;

	}
	
	public int getStatus() {
		return status;
	}
	
	public void setStatus(int status) {
		this.status = status;
	}
	
	
	public String converteDataParaFrontend(String data) {
		
		 String[] dataDividida = data.split("-");
	
		 String dataConvertida = dataDividida[2] + "/" + dataDividida[1] + "/" + dataDividida[0];
		 
		 return dataConvertida;
	 }
}
