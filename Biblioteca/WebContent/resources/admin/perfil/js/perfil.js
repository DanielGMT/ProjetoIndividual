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
											url : "../../rest/bibliotecaRest/buscarAdminPeloUsuario/" 
												+ usuario.login,
											
									success : function(admin) {
										var html = "";
						
										html += "<img id='imgDoPerfil' src='perfil/"+admin.imagem+"' class='img-roundedd img-responsive' height=200 width=210></img>";
										
										$("#imgPerfil").html(html);
										
										
										var html = "";
										
										html += admin.nome;
										
										html+= "<hr/>";
										
										$("#nomePerfil").html(html);
										
										
										
										var html = "";
										
										html += admin.login;
										
										
										$("#userPerfil").html(html);
										
									},
									error : function(err) {
										alert("Erro ao buscar o admin "+ err.responseText);
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
