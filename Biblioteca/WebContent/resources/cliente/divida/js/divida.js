
SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
					
SENAI.biblioteca.exibirDivida = function(listaDeDividas, listaDeEmprestimos, listaDeLivros, cliente) {
	
	var cfv = {
			type : "POST",
			url : "../../rest/bibliotecaRest/inserirDividas/",
			success : function() {
				
			},
			error : function(err) {
				alert("Erro ao consultar as dívidas: "
						+ err.responseText);
			}
				
		};
	SENAI.ajax.post(cfv);
	
	
	var html = "<table class='table table-bordered'>";
	html += "<tr><th>   Leitor   </th><th>   Livro   </th><th>   Tipo   </th><th>   Valor   </th>" +
			"</tr>";

	if (listaDeDividas != undefined
			&& listaDeDividas.length > 0) { 
	
		var bandeira = false;
		
		for (var o = 0; o < listaDeDividas.length; o++) {	
			for (var i = 0; i < listaDeEmprestimos.length; i++) {
			
			
			if(cliente.id == listaDeEmprestimos[i].clienteId){
				
			if(listaDeDividas[o].emprestimoId == listaDeEmprestimos[i].id){
				
			
				html += "<tr>"
					+ "<td>"
					html+= ""+ cliente.nome +""
					+"</td>"
					+"<td>"
					for (var j = 0; j < listaDeLivros.length; j++){
						if(listaDeLivros[j].id == listaDeEmprestimos[i].livroId){
							html+= ""+ listaDeLivros[j].titulo +"";
						}	
					}
					html+= "</td>"
					+"<td>";
					if(listaDeDividas[o].tipo == 1){
						html += "multa";
					}else{
						html += "extravio";
					}
					html += "</td>"
					+ "<td>"
					+ "R$"+listaDeDividas[o].valor+",00"
					+ "</td>"
					+ "</tr>";
					
					bandeira = true;
			}
			
		}
		}
		}
		
		if(bandeira == false){
			html += "<tr><td colspan='4'> Nenhum registro encontrado</td>"
				+ "</tr>";
		}
	} else {
		if (listaDeDividas == undefined) {
			
			 var cfa = {
					type : "POST",
					url : "../../rest/bibliotecaRest/buscarUsuario",
														
					success : function(usuario) {
													
						if(usuario.permissao == 1){
						var cfb = {
						type : "POST",
						url : "../../rest/bibliotecaRest/buscarClientePeloUsuario/" 
						+ usuario.login,
																
						success : function(cliente) {
							
						var cfh = {
								type : "GET",
								url : "../../rest/bibliotecaRest/coletarLivros/",
								success : function(listaDeLivros) {
									var cfo = {
											type : "GET",
											url : "../../rest/bibliotecaRest/buscarEmprestimos/",
											success : function(listaDeEmprestimos) {
												var cfi = {
														type : "GET",
														url : "../../rest/bibliotecaRest/buscarDividas/",
														success : function(listaDeDividas) {
															
															SENAI.biblioteca.exibirDivida(listaDeDividas, listaDeEmprestimos, listaDeLivros, cliente);
																	
														},
													
														error : function(err) {
															alert("Erro ao consultar os empréstimos: "
																	+ err.responseText);
														}
													};
												SENAI.ajax.post(cfi);
															
											},
										
											error : function(err) {
												alert("Erro ao consultar os empréstimos: "
														+ err.responseText);
											}
										};
									SENAI.ajax.post(cfo);
								},
								error : function(err) {
									alert("Erro ao consultar os empréstimos: "
											+ err.responseText);
								}
									
							};
						SENAI.ajax.post(cfh);
					
						
					},
					error : function(err) {
						alert("Erro ao consultar os EmprestimosFinalizados: "
								+ err.responseText);
					}
					};
					SENAI.ajax.post(cfb);
						}
						},
					error : function(err) {
						alert("Erro ao consultar os EmprestimosFinalizados: "
								+ err.responseText);
					}
			 };
					
					SENAI.ajax.post(cfa);
			
		} else {
			html += "<tr><td colspan='4'> Nenhum registro encontrado</td>"
					+ "</tr>";
	
		}
		
		
		
		
	}
	html += "</table>";
	$("#resultadoDivida").html(html);

};
				
SENAI.biblioteca.exibirDivida(undefined, undefined, undefined, undefined);

});