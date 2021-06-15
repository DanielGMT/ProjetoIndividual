SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
					SENAI.biblioteca.cadastrarAutor = function() {

						var novoAutor = new Object();
						novoAutor.nome = $("#inputname").val();

						var cfgajax = {
							url : "../../rest/bibliotecaRest/addAutor",
							data : novoAutor,

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

								SENAI.biblioteca.buscarAutor();
							},

							error : function(err) {
								alert("Erro ao cadastrar um novo autor!"
										+ err.responseText);
							}

						};

						SENAI.ajax.post(cfgajax);
					};

					SENAI.biblioteca.buscarAutor = function() {
						var valorBusca = $("#searchBar").val();
						SENAI.biblioteca.exibirAutores(undefined, valorBusca);
					};
					
					
					SENAI.biblioteca.exibirAutores = function(listaDeAutores,
							valorBusca) {
						var search = document.getElementById("searchBar");
						search.addEventListener("keyup", function(event) {
						  if (event.keyCode === 13) {
						   event.preventDefault();
						   document.getElementById("searchButton").click();
						  }
						});
						var html = "<table class='table table-bordered'>";
						html += "<tr><th>Nome</th><th id='acao'>Ações</th></tr>";
						if (listaDeAutores != undefined
								&& listaDeAutores.length > 0) {
							
							let perPage = 12
							const state = {
							  page: 1,
							  perPage,
							  
							  totalPage: Math.ceil(listaDeAutores.length / perPage),
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
										
										html.get('.fleinin').innerHTML += "<tr><td>"
											+ item.nome
											+ "</td>"
											+ "<td><a class = 'edit' onclick = 'SENAI.biblioteca.editarAutor("
											+ item.id
											+ "); '>"
											+ "<i class='glyphicon glyphicon-pencil'></i></a>"
											+ "<a class = 'delete' onclick = 'SENAI.biblioteca.deletarAutor("
											+ item.id
											+ ")'>"
											+ "<i class='glyphicon glyphicon-trash'></i></a></td></tr>";		
										
		
							},
							createTable(){
								const table = document.createElement('table')
								table.classList.add('table')
								table.classList.add('table-bordered')
								
								table.innerHTML += "<tbody class ='fleinin'><tr><th>Nome</th><th>Ações</th></tr>"
								+ "</tbody>";
								html.get('.resultadoAutores').appendChild(table);
							},
							update(){
								 
								 html.get('.resultadoAutores').innerHTML = ""
									 list.createTable()
								let page = state.page - 1
								let start = page * state.perPage
								let end = start + state.perPage
								const paginatedItems = listaDeAutores.slice(start, end)
								
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
							if (listaDeAutores == undefined) {
								if (valorBusca == "") {
									valorBusca = null;
								}
								var cfg = {
									type : "POST",
									url : "../../rest/bibliotecaRest/buscarAutoresPorNome/"
											+ valorBusca,
									success : function(listaDeAutores) {
										SENAI.biblioteca
												.exibirAutores(listaDeAutores);
									},
									error : function(err) {
										alert("Erro ao consultar os autores: "
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
								html.get('.resultadoAutores').innerHTML = "<span><label><font color='red'> Nenhum registro encontrado. </font></label></span>";
						
							}
						}
						
					};

					SENAI.biblioteca.exibirAutores(undefined, "");

					SENAI.biblioteca.deletarAutor = function(id) {
						msg = "Tem certeza que deseja excluir este autor?"
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
											var cfg = {
												type : "POST",
												url : "../../rest/bibliotecaRest/deletarAutor/"
														+ id,
												success : function(msg) {
													var qtLinhas = $("#resultadoAutores tr").length;
													$(this).parents("tr").remove();
													$("#add-new").removeAttr("disabled");
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
					
													SENAI.biblioteca.buscarAutor();
												},
												error : function(err) {
													alert("Erro: "
															+ err.responseText);
												}
											};
											SENAI.ajax.post(cfg);
										}
									}
								};
						$("#msg").html(msg);
						$("#msg").dialog(cfg);
					}

					SENAI.biblioteca.editarAutor = function(id) {
						var cfg = {
							type : "POST",
							url : "../../rest/bibliotecaRest/buscarAutorPeloId/"
									+ id,
							success : function(autor) {
								$("#nomeEdit").val(autor.nome);
								$("#idAutorEdit").val(autor.id);
								SENAI.biblioteca.exibirEdicao(autor);
							},
							error : function(err) {
								alert("Erro ao editar o autor!"
										+ err.responseText);
							}
						};
						SENAI.ajax.post(cfg);
					};
					

					SENAI.biblioteca.exibirEdicao = function(autor) {
						var cfg = {
							title : "Editar Autor",
							height : 180,
							width : 550,
							modal : true,
							buttons : {
								"Cancelar" : function() {
									$(this).dialog("close");
								},

								"Salvar" : function() {
									var dialog = this;
									var autor = new Object();
									autor.id = $("#idAutorEdit").val();
									autor.nome = $("#nomeEdit").val();

									var cfg = {
										type : "POST",
										url : "../../rest/bibliotecaRest/editarAutor",
										data : autor,

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

											SENAI.biblioteca.buscarAutor();
										},
										error : function(err) {
											alert("Erro ao editar o autor "+ err.responseText);
										}
									};

									SENAI.ajax.post(cfg);
								}
							},
							close : function() {
							}
						};
						$("#editarAutor").dialog(cfg);
					};
		
				
				});