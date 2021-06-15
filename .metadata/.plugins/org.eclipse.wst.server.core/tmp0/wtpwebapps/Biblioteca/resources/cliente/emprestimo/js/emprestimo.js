
SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
					
SENAI.biblioteca.exibirEmprestimo = function(listaDeEmprestimos, listaDeLivros, cliente) {
	
	
	var html = "<table class='table table-bordered'>";
	html += "<tr><th>   Leitor   </th><th>   Livro   </th><th>   Data de empréstimo   </th><th>   Data para devolução   </th>" +
			"</tr>";

	if (listaDeEmprestimos != undefined
			&& listaDeEmprestimos.length > 0) { 
	
		
		var bandeira = false;
	
		var str1 = "";
		
		var n = "";
		var date = new Date();
		var str2 = new Date();
		var dd = String(str2.getDate()).padStart(2, '0');
		var mm = String(str2.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = str2.getFullYear();
		
			for (var i = 0; i < listaDeEmprestimos.length; i++) {
			
			
			if(cliente.id == listaDeEmprestimos[i].clienteId){
				str1 = listaDeEmprestimos[i].dataDev;
				
				str2 = dd + "/" + mm + "/" + yyyy;
				
				  n = str1.localeCompare(str2);
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
					+"<td>"
					+ listaDeEmprestimos[i].dataEmp
					+ "</td>"
	
					+ "<td>"
					+ listaDeEmprestimos[i].dataDev
					+ "</td>"
					+"</tr>";
				
				bandeira = true;
				
				}
			}
			
			if(bandeira == false){
				html += "<tr><td colspan='4'> Nenhum registro encontrado</td>"
					+ "</tr>";
			}
			
	} else {
		if (listaDeEmprestimos == undefined) {
			
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
												SENAI.biblioteca.exibirEmprestimo(listaDeEmprestimos, listaDeLivros, cliente);
															
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
		
		
		
		
	}else {
		html += "<tr><td colspan='4'> Nenhum registro encontrado</td>"
			+ "</tr>";

	}
	
	}
	html += "</table>";
	$("#resultadoEmprestimo").html(html);
};			
SENAI.biblioteca.exibirEmprestimo(undefined, undefined, undefined);

});