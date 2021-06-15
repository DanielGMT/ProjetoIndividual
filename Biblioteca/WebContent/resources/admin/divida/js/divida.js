SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
					
					SENAI.biblioteca.buscarDivida = function() {
						var valorBusca = $("#searchBar").val();
						SENAI.biblioteca.exibirDividas(undefined, undefined, undefined, undefined, valorBusca);
					};
					
					SENAI.biblioteca.exibirDividas = function(listaDeDividas, listaDeEmprestimos, listaDeLivros, listaDeClientes,
							valorBusca) {
						
						var cfg = {
								type : "POST",
								url : "../../rest/bibliotecaRest/inserirDividas/",
								success : function() {
									
								},
								error : function(err) {
									alert("Erro ao consultar as dívidas: "
											+ err.responseText);
								}
									
							};
						SENAI.ajax.post(cfg);
						
						var search = document.getElementById("searchBar");
						search.addEventListener("keyup", function(event) {
						  if (event.keyCode === 13) {
						   event.preventDefault();
						   document.getElementById("searchButton").click();
						  }
						});
						
					
						if (listaDeDividas != undefined
								&& listaDeDividas.length > 0) { 
						
							let novaLista = [];
							 for (var t = 0; t < listaDeClientes.length; t++) {
									for (var i = 0; i < listaDeEmprestimos.length; i++) {
									
										for(var k = 0; k < listaDeDividas.length; k++)	
									if(listaDeClientes[t].id == listaDeEmprestimos[i].clienteId){
										
									if(listaDeDividas[k].emprestimoId == listaDeEmprestimos[i].id){
						
										
											
												
													
													
												novaLista.push(listaDeDividas[k]);
											

										}
									}
								}
							 }
							let perPage = 12
							const state = {
							  page: 1,
							  perPage,
							  
							  totalPage: Math.ceil(novaLista.length / perPage),
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
										
										
										
										for (var t = 0; t < listaDeClientes.length; t++) {
											for (var i = 0; i < listaDeEmprestimos.length; i++) {
											
											
											if(listaDeClientes[t].id == listaDeEmprestimos[i].clienteId){
												
											if(item.emprestimoId == listaDeEmprestimos[i].id){
								
												
													for (var h = 0; h < listaDeClientes.length; h++){
														if(listaDeClientes[h].id == listaDeEmprestimos[i].clienteId){
															
															for (var j = 0; j < listaDeLivros.length; j++){
																if(listaDeLivros[j].id == listaDeEmprestimos[i].livroId){
																	html.get('.fleinin').innerHTML += "<tr><td>"+ listaDeClientes[h].nome +"</td>"
																	+ "<td>"+ listaDeLivros[j].titulo +"</td>"
																	 + "<td>multa</td>"
																	+ "<td>"
																	+ "R$"+item.valor+",00"
																	+ "</td>"
																	+ "</tr>";
																}	
															}
														}	
													}
													
											}
											}
										}
										}
										
							},
							createTable(){
								const table = document.createElement('table')
								table.classList.add('table')
								table.classList.add('table-bordered')
								
								table.innerHTML += "<tbody class ='fleinin'><tr><th>Leitor</th><th>Livro</th><th>Tipo</th><th>Valor</th></tr>"
								+ "</tbody>";
								html.get('.resultadoDividas').appendChild(table);
							},
							update(){
								 
								 html.get('.resultadoDividas').innerHTML = ""
									 list.createTable()
								let page = state.page - 1
								let start = page * state.perPage
								let end = start + state.perPage
								let novaLista = [];
								 for (var t = 0; t < listaDeClientes.length; t++) {
										for (var i = 0; i < listaDeEmprestimos.length; i++) {
										
											for(var k = 0; k < listaDeDividas.length; k++)	
										if(listaDeClientes[t].id == listaDeEmprestimos[i].clienteId){
											
										if(listaDeDividas[k].emprestimoId == listaDeEmprestimos[i].id){
							
											
												
													
														
														
													novaLista.push(listaDeDividas[k]);
												
												
											
										
													}
													
										
									}
										
										}
								 }
								console.log(novaLista);
								 const paginatedItems = novaLista.slice(start, end)
								
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
							if (listaDeDividas == undefined) {
								if (valorBusca == "") {
									valorBusca = null;
								}
							
								var cfg = {
										type : "POST",
										url : "../../rest/bibliotecaRest/buscarClientesPorNome/" 
											+ valorBusca,
										success : function(listaDeClientes) {
											
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
																				
																				SENAI.biblioteca.exibirDividas(listaDeDividas, listaDeEmprestimos, listaDeLivros, listaDeClientes);
																						
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

									SENAI.ajax.post(cfg);
							
							} else {
								const html = {
										get(element){
											return document.querySelector(element)
										}
								}
								html.get('.resultadoDividas').innerHTML = "<span><label><font color='red'> Nenhum registro encontrado. </font></label></span>";
						
							}
							
							
							
							
						}
						
	
					};
					
		
					

					SENAI.biblioteca.exibirDividas(undefined, undefined, undefined, undefined, "");
				
					
					
					
					SENAI.biblioteca.finalizarDivida = function(id) {
						var qtLinhas = $(".resultadoDividas tr").length;
						$(this).parents("tr").remove();
						$("#add-new").removeAttr("disabled");
						if ((qtLinhas - 2) == 0) {
							SENAI.biblioteca.buscarDivida();
						};
					
						var cfg = {
							type : "POST",
							url : "../../rest/bibliotecaRest/finalizarDivida/"
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
								
								SENAI.biblioteca.exibirLivroSelect();
								SENAI.biblioteca.buscarDivida();
							},
							error : function(err) {
								alert("Erro ao finalizar o empréstimo: "
										+ err.responseText);
							}
						};
						SENAI.ajax.post(cfg);
					}

				});