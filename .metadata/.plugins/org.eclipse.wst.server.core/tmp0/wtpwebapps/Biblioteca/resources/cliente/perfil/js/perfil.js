SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
						SENAI.biblioteca.exibirPerfil = function(){
							
							var cfg = {
									type : "POST",
									url : "../../rest/bibliotecaRest/buscarUsuario",
									
							success : function(usuario) {
							if(usuario == null){
								window.location = "../../index.html";
							}else{
									var cfg = {
											type : "POST",
											url : "../../rest/bibliotecaRest/buscarClientePeloUsuario/" 
												+ usuario.login,
											
									success : function(cliente) {
										var html = "";
										
										html +=  "<img id='imgDoPerfil' src='perfil/"+cliente.imagem+"' class='img-roundedd img-responsive' height=200 width=210></img>";
										
										$("#imgPerfil").html(html);
										var html = "";
										
										html += cliente.nome;
										html+= "<hr/>";
										$("#nomePerfil").html(html);
										
										
										var html = "";
										
										html += cliente.email;
										html+= "<hr/>";
										$("#emailPerfil").html(html);
										
										var html = "";
										
										html += cliente.data;
										html+= "<hr/>";
										$("#dataPerfil").html(html);
										
										
										var html = "";
										
										html += cliente.login;
										html+= "<hr/>";
										$("#userPerfil").html(html);
										
										
										$("#resultadoPerfil").html(html);
									},
									error : function(err) {
										alert("Erro ao buscar o cliente "+ err.responseText);
									}
								};
									SENAI.ajax.post(cfg);
								}
								
								
							},
							error : function(err) {
										alert("Erro ao identificar usuario "+ err.responseText);
								}
											};
						
											SENAI.ajax.post(cfg);	
							};

							SENAI.biblioteca.exibirPerfil();
							
							
				});
