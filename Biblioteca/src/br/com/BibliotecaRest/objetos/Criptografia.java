
/*
package br.com.BibliotecaRest.objetos;

import java.math.BigInteger;
import java.security.MessageDigest;

public class Criptografia {
	
	public static String criptografar (String senha) {
		String novaSenha = "";
		MessageDigest md;
		try {
			md = MessageDigest.getInstance("MD5");
			BigInteger hash = new BigInteger(1,md.digest(senha.getBytes()));
			novaSenha = hash.toString(16);
		} catch (Exception e) {
			e.printStackTrace();
			return novaSenha;
		}
		return novaSenha;
		
	}
}
*/