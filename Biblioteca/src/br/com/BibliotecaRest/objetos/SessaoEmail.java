package br.com.BibliotecaRest.objetos;

public class SessaoEmail{
	   private static SessaoEmail instance = null;
	   private Cliente cliente;

	   private SessaoEmail(){
	   }

	   public void setCliente(Cliente cliente){
	      this.cliente = cliente;
	   }

	   public Cliente getCliente(){
	       return cliente;
	   }
	   public static SessaoEmail getInstance(){
	         if(instance == null){
	               instance = new SessaoEmail();
	         }
	        return instance;
	   }
	}