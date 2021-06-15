SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
					
					SENAI.biblioteca.cadastrarLivro = function() {

						var novoLivro = new Object();
						novoLivro.titulo = $("#inputname").val();
						novoLivro.descricao = $("#inputdesc").val();
						novoLivro.quantidade = $("#inputqnt").val();
						var fullPath = document.getElementById('inputimagem').value;
						if (fullPath) {
						    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
						    var filename = fullPath.substring(startIndex);
						    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
						        filename = filename.substring(1);
						    }
						    
						}
						 novoLivro.imagem = filename;
						novoLivro.editoraId = $("#inputeditora").val();		
						novoLivro.autorId = $("#inputautor").val();
						
						
						var cfgajax = {
							url : "../../rest/bibliotecaRest/addLivro",
							data : novoLivro,
							success : function(msg) {
								var cfg = {
									title : "Mensagem",
									height : 250,
									width : 400,
									modal : true,
									buttons : {
										"OK" : function() {
											$(this).dialog("close");
										}
									}
								};
								$("#msg").html(msg);
								$("#msg").dialog(cfg);

								SENAI.biblioteca.buscarLivro();
							},

							error : function(err) {
								alert("Erro ao cadastrar um novo Livro!"
										+ err.responseText);
							}

						};

						SENAI.ajax.post(cfgajax);
					};

					SENAI.biblioteca.buscarLivro = function() {
						var valorBusca = $("#searchBar").val();
						SENAI.biblioteca.exibirLivros(undefined, undefined, undefined, valorBusca);
					};
					
					SENAI.biblioteca.exibirLivros = function(listaDeLivros, listaDeAutores, listaDeEditoras,
							valorBusca) {
						var search = document.getElementById("searchBar");
						search.addEventListener("keyup", function(event) {
						  if (event.keyCode === 13) {
						   event.preventDefault();
						   document.getElementById("searchButton").click();
						  }
						});
						
					
						if (listaDeLivros != undefined
								&& listaDeLivros.length > 0) { 
							
							let perPage = 7
							const state = {
							  page: 1,
							  perPage,
							  
							  totalPage: Math.ceil(listaDeLivros.length / perPage),
							  maxVisibleButtons: 5
							}
						 
						 const html = {
									get(element){
										return document.querySelector(element)
									}
							}

							

							
						
							
							const controls = {
							  next(){
							    state.page++
							   
							    const lastPage = state.page > state.totalPage
							    if(lastPage) {
							    	state.page--
							    }
							  },
							  prev(){
								  state.page--
								  if(state.page < 1){
									  state.page++
								  }
							  },
							  goTo(page){
								 state.page = +page
							   },
							
							  createListeners() {
								 
								  
								  html.get('.next').addEventListener('click', () => {
									  controls.next()
									  update()
								  })
								  
								  html.get('.prev').addEventListener('click', () => {
									  controls.prev()
									  update()
								  })
								  
								 html.get('.last').addEventListener('click', () => {
									  controls.goTo(state.totalPage)
									  update()
								  })
								   
								  html.get('.first').addEventListener('click', () => {
									  controls.goTo(1)
									  update()
								  })}
								 
							  
							}
							
							var str1 = "";
	
							var n = "";
							var date = new Date();
							var str2 = new Date();
							var dd = String(str2.getDate()).padStart(2, '0');
							var mm = String(str2.getMonth() + 1).padStart(2, '0'); //January is 0!
							var yyyy = str2.getFullYear();
						 
							const list = {
									
									create(item){
										
										
		
															
																for (var j = 0; j < listaDeEditoras.length; j++){
																	if(listaDeEditoras[j].id == item.editoraId){
																for (var h = 0; h < listaDeAutores.length; h++){
																	if(listaDeAutores[h].id == item.autorId){
																	html.get('.fleinin').innerHTML += "<tr>"
																		+ "<td>"
																		+ "<img src='livro/"+item.imagem+"' border=7 height=160 width=110></img>"
																		+ "</td>"
																		+"<td>"
																		+ item.titulo
																		+ "</td>"
																		+"<td>"
																		+ item.descricao
																		+ "</td>"
																		+"<td>"			 
																		+ ""+ listaDeAutores[h].nome +""
																		+ "</td>"
																		+"<td>"
																		+ ""+ listaDeEditoras[j].nome +""
																		+ "</td>"
																		+ "<td>"
																		+ item.quantidade
																		+ "</td>"
																		+ "<td><a class = 'edit' onclick = 'SENAI.biblioteca.editarLivro("
																		+ item.id
																		+ "); SENAI.biblioteca.exibirEditoraSelectEdit(); SENAI.biblioteca.exibirAutorSelectEdit();'>"
																		+ "<i class='glyphicon glyphicon-pencil'></i></a>"
																		+ "<a class = 'delete' onclick = 'SENAI.biblioteca.deletarLivro("
																		+ item.id
																		+ ")'>"
																		+ "<i class='glyphicon glyphicon-trash'></i></a></td></tr>";
																}	
															}
														}	
													}
													
											
									
										
							},
							createTable(){
								const table = document.createElement('table')
								table.classList.add('table')
								table.classList.add('table-bordered')
								
								table.innerHTML += "<tbody class ='fleinin'><tr><th>Capa</th><th>Título</th><th>Descrição</th><th>Autor</th><th>Editora</th><th>Unidades</th><th>Ações</th></tr>"
								+ "</tbody>";
								html.get('.resultadoLivros').appendChild(table);
							},
							update(){
								 
								 html.get('.resultadoLivros').innerHTML = ""
									 list.createTable()
								let page = state.page - 1
								let start = page * state.perPage
								let end = start + state.perPage
								const paginatedItems = listaDeLivros.slice(start, end)
								
								paginatedItems.forEach(list.create);
							 }
							 
					 	}
						
						const buttons = {
								element: html.get('.pagination .numbers'),
								create(number) {
									const button = document.createElement('a')
									
									button.innerHTML = number;
									
									if(state.page == number){
										button.classList.add('active')
									}
									
									button.addEventListener('click', (event) => {
										const page = event.target.innerText
										
										controls.goTo(page)
										update()
									})
									
									buttons.element.appendChild(button)
								},
								update() {
									buttons.element.innerHTML = ""
										const {maxLeft, maxRight} = buttons.calculateMaxVisible()
										
										
										for(let page = maxLeft; page<=maxRight; page++){
											buttons.create(page)
										}
								},
								calculateMaxVisible(){
									const { maxVisibleButtons } = state
									let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
									let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))
								 if(maxLeft < 1){
									 maxLeft = 1
									 maxRight = maxVisibleButtons
								 }
									if(maxRight > state.totalPage){
										maxLeft = state.totalPage - (maxVisibleButtons - 1)
										maxRight = state.totalPage
										
										if(maxLeft < 1){
											maxLeft = 1
										}
									}
									
									return {maxLeft, maxRight}
								}
						}
						
						function update() {
							list.update()
					 		buttons.update()
					 	}
					 
					 	function init(){
					 		update()
					 		controls.createListeners()
					 	}
					 	
					 	init();
								
							
						} else {
							if (listaDeLivros == undefined) {
								if (valorBusca == "") {
									valorBusca = null;
								}
								var cfg = {
									type : "POST",
									url : "../../rest/bibliotecaRest/buscarLivrosPorTitulo/"
											+ valorBusca,
									success : function(listaDeLivros) {
										
										var cfh = {
												type : "GET",
												url : "../../rest/bibliotecaRest/coletarAutores/",
												success : function(listaDeAutores) {
													var cfi = {
															type : "GET",
															url : "../../rest/bibliotecaRest/coletarEditoras/",
															success : function(listaDeEditoras) {
																SENAI.biblioteca.exibirLivros(listaDeLivros, listaDeAutores, listaDeEditoras);
															},
															error : function(err) {
																alert("Erro ao consultar os livros: "
																		+ err.responseText);
															}
														};
													SENAI.ajax.post(cfi);
												},
												error : function(err) {
													alert("Erro ao consultar os livros: "
															+ err.responseText);
												}
											};
										SENAI.ajax.post(cfh);
									},
									error : function(err) {
										alert("Erro ao consultar os livros: "
												+ err.responseText);
									}
								};

								SENAI.ajax.post(cfg);
							} else {
								const html = {
										get(element){
											return document.querySelector(element)
										}
								}
								html.get('.resultadoLivros').innerHTML = "<span><label><font color='red'> Nenhum registro encontrado. </font></label></span>";
						
							}
						}
						
					
						
					};

					SENAI.biblioteca.exibirLivros(undefined, undefined, undefined, "");
					
					SENAI.biblioteca.exibirEditoraSelect = function() {
						var html = 
							"<label>Editora:</label>" +
							"<select id='inputeditora' class='form-control form-control-sm'>"+
							"</select>"+
							"<label>Autor:</label>"+
							"<select id='inputautor' class='form-control form-control-sm'>"+
							"</select>";
						$("#selects").html(html);
						$.ajax({
							type : "GET",
							url : "../../rest/bibliotecaRest/coletarEditoras/",
							
							success : function(listaDeEditoras) {
								if (listaDeEditoras != ""){
									$("#inputeditora").html("");
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Selecione");
									$("#inputeditora").append(option);
									for (var i = 0; i < listaDeEditoras.length; i++){
										var option = document.createElement("option");
										option.setAttribute ("value", listaDeEditoras[i].id);
										option.innerHTML = (listaDeEditoras[i].nome);
										$("#inputeditora").append(option);
									}
								}else{
									$("#inputeditora").html("");
									
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Cadastre uma editora primeiro!");
									$("#inputeditora").append(option);
									$("#inputeditora").addClass("aviso");
								}
							},
							error: function(err){
								alert("Erro ao coletar as editoras: "
										+ err.responseText);
							}
						});
					};
					
					
					SENAI.biblioteca.exibirAutorSelect = function() {	
						$.ajax({
							type : "GET",
							url : "../../rest/bibliotecaRest/coletarAutores/",
					
							success : function(listaDeAutores) {
	
								if (listaDeAutores != ""){
									$("#inputautor").html("");
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Selecione");
									$("#inputautor").append(option);
									
									for (var i = 0; i < listaDeAutores.length; i++){
										var option = document.createElement("option");
										option.setAttribute ("value", listaDeAutores[i].id);
										option.innerHTML = (listaDeAutores[i].nome);
										$("#inputautor").append(option);
									}
								}else{
									$("#inputautor").html("");
									
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Cadastre um autor primeiro!");
									$("#inputautor").append(option);
									$("#inputautor").addClass("aviso");
								}
								
							},
							error: function(err){
								alert("Erro ao coletar os autores: "
										+ err.responseText);
							}
						});
						
						
						
					};
					
					SENAI.biblioteca.deletarLivro = function(id) {
						msg = "Tem certeza que deseja excluir este livro?"
						var cfg = {
								title : "Mensagem",
								height : 250,
								width : 400,
								modal : true,
								buttons : {
									"Não" : function() {
										$(this).dialog("close");
									},
									"Sim" : function(){
										var qtLinhas = $(".resultadoLivros tr").length;
										$(this).parents("tr").remove();
										$("#add-new").removeAttr("disabled");
										var cfg = {
											type : "POST",
											url : "../../rest/bibliotecaRest/deletarLivro/"
													+ id,
											success : function(msg) {
												var cfg = {
													title : "Mensagem",
													height : 250,
													width : 400,
													modal : true,
													buttons : {
														"OK" : function() {
															$(this).dialog("close");
														}
													}
												};

												$("#msg").html(msg);
												$("#msg").dialog(cfg);

												SENAI.biblioteca.buscarLivro();
											},
											error : function(err) {
												alert("Erro ao deletar o livro: "
														+ err.responseText);
											}
										};
										SENAI.ajax.post(cfg);
									}
								}
						};
						$("#msg").html(msg);
						$("#msg").dialog(cfg);
						
					};

					SENAI.biblioteca.editarLivro = function(id) {
						var cfg = {
							type : "POST",
							url : "../../rest/bibliotecaRest/buscarLivroPeloId/"
									+ id,
							success : function(livro) {
								$("#idLivroEdit").val(livro.id);
								$("#tituloEdit").val(livro.titulo);
								$("#descEdit").val(livro.descricao);
								$("#qtdadeEdit").val(livro.quantidade);
								/*
								$("#editoraEdit").val(livro.editoraId);
								$("#autorEdit").val(livro.autorId);
								
								rever para ficar selecionado na edição, linhas 245 até 252 também
				*/
								var selCategoria = document.getElementById('editoraEdit');
								for(var i=0; i < selCategoria.length; i++){
									if (selCategoria.options[i].value == livro.editoraId){
										selCategoria.options[i].setAttribute("selected", "selected");
									}else{
										selCategoria.options[i].removeAttribute("selected");
									}
								}
								SENAI.biblioteca.exibirEdicao(livro);
							},
							error : function(err) {
								alert("Erro ao editar o livro!"
										+ err.responseText);
							}
						};
						SENAI.ajax.post(cfg);
					};

					SENAI.biblioteca.exibirEditoraSelectEdit = function() {
						var html = 
							"<label>Editora:</label>" +
							"<select id='editoraEdit' class='form-control form-control-sm'>"+
							"</select>"+
							"<label>Autor:</label>"+
							"<select id='autorEdit' class='form-control form-control-sm'>"+
							"</select>";
						$("#selectsEdit").html(html);
						$.ajax({
							type : "GET",
							url : "../../rest/bibliotecaRest/coletarEditoras/",
							
							success : function(listaDeEditoras) {
								if (listaDeEditoras != ""){
									$("#editoraEdit").html("");
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Selecione");
									$("#editoraEdit").append(option);
									for (var i = 0; i < listaDeEditoras.length; i++){
										var option = document.createElement("option");
										option.setAttribute ("value", listaDeEditoras[i].id);
										option.innerHTML = (listaDeEditoras[i].nome);
										$("#editoraEdit").append(option);
									}
								}else{
									$("#editoraEdit").html("");
									
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Cadastre uma editora primeiro!");
									$("#editoraEdit").append(option);
									$("#editoraEdit").addClass("aviso");
								}
							},
							error: function(err){
								alert("Erro ao coletar as editoras: "
										+ err.responseText);
							}
						});
					};
					
					SENAI.biblioteca.exibirAutorSelectEdit = function() {
						$.ajax({
							type : "GET",
							url : "../../rest/bibliotecaRest/coletarAutores/",
							
							success : function(listaDeAutores) {
								if (listaDeAutores != ""){
									$("#autorEdit").html("");
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Selecione");
									$("#autorEdit").append(option);
									
									for (var i = 0; i < listaDeAutores.length; i++){
										var option = document.createElement("option");
										option.setAttribute ("value", listaDeAutores[i].id);
										option.innerHTML = (listaDeAutores[i].nome);
										$("#autorEdit").append(option);
									}
								}else{
									$("#autorEdit").html("");
									
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Cadastre um autor primeiro!");
									$("#autorEdit").append(option);
									$("#autorEdit").addClass("aviso");
								}
							},
							error: function(err){
								alert("Erro ao coletar os autores: "
										+ err.responseText);
							}
						});
					};

					SENAI.biblioteca.exibirEdicao = function(livro) {
						var cfg = {
							title : "Editar Livro",
							height : 420,
							width : 550,
							modal : true,
							buttons : {
								"Cancelar" : function() {
									$(this).dialog("close");
								},

								"Salvar" : function() {
									if($("#autorEdit").val() == 0 || $("#editoraEdit").val() == 0){
										alert("Deve escolher uma opção!")
									}else{
									var dialog = this;
									var livro = new Object();
									livro.id = $("#idLivroEdit").val();
									livro.titulo = $("#tituloEdit").val();
									livro.descricao = $("#descEdit").val();
									livro.quantidade = $("#qtdadeEdit").val();
									var fullPath = document.getElementById('imgEdit').value;
									if (fullPath) {
									    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
									    var filename = fullPath.substring(startIndex);
									    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
									        filename = filename.substring(1);
									    }
									    
									}
									livro.imagem = filename;
									livro.editoraId = $("#editoraEdit").val();
									livro.autorId = $("#autorEdit").val();
									
									var cfg = {
										type : "POST",
										url : "../../rest/bibliotecaRest/editarLivro",
										data : livro,

										success : function(msg) {
											$(dialog).dialog("close");
											var cfg = {
												title : "Mensagem",
												height : 250,
												width : 400,
												modal : true,
												buttons : {
													"OK" : function() {
														$(this).dialog("close");
													}
												}
											};
											$("#msg").html(msg);
											$("#msg").dialog(cfg);

											SENAI.biblioteca.buscarLivro();
										},
										error : function(err) {
											alert("Erro ao editar o livro!"
													+ err.responseText);
										}
									};

									SENAI.ajax.post(cfg);
									}},
							}
								
						};
						$("#editarLivro").dialog(cfg);
					};

			
				});