SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
					
					SENAI.biblioteca.cadastrarEmprestimo = function() {
						var novoEmprestimo = new Object();
						var data = new Date();
						novoEmprestimo.clienteId = $("#inputCliente").val();
						novoEmprestimo.livroId = $("#inputLivro").val();	
						
						var mes = 0;
						var dia = 0;
						var ano = 0; 
						
						if((data.getMonth()+1) == 1){
							if(data.getDate() >= 25){
								dia = (data.getDate()+7) - 31;
								mes = 2;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 2){
							if(data.getDate() >= 22){
								dia = (data.getDate()+7) - 28;
								mes = 3;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 3){
							if(data.getDate() >= 25){
								dia = (data.getDate()+7) - 31;
								mes = 4;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 4){
							if(data.getDate() >= 24){
								dia = (data.getDate()+7) - 30;
								mes = 5;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 5){
							if(data.getDate() >= 25){
								dia = (data.getDate()+7) - 31;
								mes = 6;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 6){
							if(data.getDate() >= 24){
								dia = (data.getDate()+7) - 30;
								mes = 7;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 7){
							if(data.getDate() >= 25){
								dia = (data.getDate()+7) - 31;
								mes = 8;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 8){
							if(data.getDate() >= 25){
								dia = (data.getDate()+7) - 31;
								mes = 9;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 9){
							if(data.getDate() >= 24){
								dia = (data.getDate()+7) - 30;
								mes = 10;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 10){
							if(data.getDate() >= 25){
								dia = (data.getDate()+7) - 31;
								mes = 11;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 11){
							if(data.getDate() >= 24){
								dia = (data.getDate()+7) - 30;
								mes = 12;
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}else if((data.getMonth()+1) == 12){
							if(data.getDate() >= 25){
								dia = (data.getDate()+7) - 31;
								mes = 1;
								ano = (data.getFullYear()+1)
								novoEmprestimo.dataDev = (ano)+"-"+(mes)+"-"+(dia);
							}else{
								novoEmprestimo.dataDev = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+(data.getDate()+7);
							}
						}
						
						
						novoEmprestimo.dataEmp = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+data.getDate();
						novoEmprestimo.status = 1;
						
						var cfgajax = {
							url : "../../rest/bibliotecaRest/addEmprestimo",
							data : novoEmprestimo,
							success : function(msg) {
								var cfg = {
									title : "Mensagem",
									height : 250,
									width : 400,
									modal : true,
									buttons : {
										"OK" : function() {
											$(this).dialog("close");
											SENAI.biblioteca.exibirLivroSelect()
										}
									}
								};
								$("#msg").html(msg);
								$("#msg").dialog(cfg);

								SENAI.biblioteca.buscarEmprestimo();
							},

							error : function(err) {
								alert("Erro:"
										+ err.responseText);
							}

						};

						SENAI.ajax.post(cfgajax);
					};
					
					SENAI.biblioteca.buscarEmprestimo = function() {
						var valorBusca = $("#searchBar").val();
						SENAI.biblioteca.exibirEmprestimos(undefined, undefined, undefined, valorBusca);
					
					};
					SENAI.biblioteca.buscarEmprestimo2 = function() {
						var valorBusca = $("#searchBar2").val();
					
						SENAI.biblioteca.exibirEmprestimosFinalizados(undefined, undefined, undefined, valorBusca);
					};
					
					SENAI.biblioteca.exibirEmprestimos = function(listaDeEmprestimos, listaDeLivros, listaDeClientes,
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
						
					
						if (listaDeEmprestimos != undefined
								&& listaDeEmprestimos.length > 0) { 
							
							let novaLista = [];
							for (var t = 0; t < listaDeClientes.length; t++) {
							
									for (var j = 0; j < listaDeLivros.length; j++){
										for (var k = 0; k < listaDeEmprestimos.length; k++){
								if(listaDeClientes[t].id == listaDeEmprestimos[k].clienteId){
									
									 
										
											if(listaDeClientes[t].id == listaDeEmprestimos[k].clienteId){
												
													if(listaDeLivros[j].id == listaDeEmprestimos[k].livroId){
														
														novaLista.push(listaDeEmprestimos[k]);
														
													}
												}
											}
										}
									}
								}
							
							let perPage = 6
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
									createTable(){
										const table = document.createElement('table')
										table.classList.add('table')
										table.classList.add('table-bordered')
										
										table.innerHTML += "<tbody class ='letsb'><tr><th>Leitor</th><th>Livro</th><th>Data de empréstimo</th><th>Ações</th></tr>"
										+ "</tbody>";
										html.get('.resultadoEmprestimos').appendChild(table);
									},
									create(item){
										
							
								
										for (var t = 0; t < listaDeClientes.length; t++) {
											
											if(listaDeClientes[t].id == item.clienteId){
												
												 
													for (var h = 0; h < listaDeClientes.length; h++){
														if(listaDeClientes[h].id == item.clienteId){
															for (var j = 0; j < listaDeLivros.length; j++){
																if(listaDeLivros[j].id == item.livroId){
																	html.get('.letsb').innerHTML += "<tr>"
																		
															+ "<td>"+ listaDeClientes[h].nome +"</td>"
															+ "<td>"+ listaDeLivros[j].titulo +"</td>"
															+ "<td>"+item.dataEmp+"</td>"
															+ "<td><a class = 'delete' onclick = 'SENAI.biblioteca.finalizarEmprestimo("
															+ item.id
															+ ")'>"
															+ "<button>Finalizar</button></a></td></tr>";
																}	
															}
														}	
													}
												  
			
											}
										}
										
								
										
									},
									update(){
										 
										 html.get('.resultadoEmprestimos').innerHTML = ""
											 list.createTable();
										let page = state.page - 1
										let start = page * state.perPage
										let end = start + state.perPage
										
										
										let novaLista = [];
										for (var t = 0; t < listaDeClientes.length; t++) {
										
												for (var j = 0; j < listaDeLivros.length; j++){
													for (var k = 0; k < listaDeEmprestimos.length; k++){
											if(listaDeClientes[t].id == listaDeEmprestimos[k].clienteId){
												
												 
													
														if(listaDeClientes[t].id == listaDeEmprestimos[k].clienteId){
															
																if(listaDeLivros[j].id == listaDeEmprestimos[k].livroId){
																	
																	novaLista.push(listaDeEmprestimos[k]);
																	
																}
															}
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
							if (listaDeEmprestimos == undefined) {
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
												url : "../../rest/bibliotecaRest/coletarLivros2/",
												success : function(listaDeLivros) {
													var cfo = {
															type : "GET",
															url : "../../rest/bibliotecaRest/buscarEmprestimos/",
															success : function(listaDeEmprestimos) {
																
																			SENAI.biblioteca.exibirEmprestimos(listaDeEmprestimos, listaDeLivros, listaDeClientes);
																		
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
										alert("Erro ao consultar os Emprestimos: "
												+ err.responseText);
									}
								};

								SENAI.ajax.post(cfg);
							
							}else{
								
								const html = {
										get(element){
											return document.querySelector(element)
										}
								}
								html.get('.resultadoEmprestimos').innerHTML = "<span><label><font color='red'> Nenhum registro encontrado. </font></label></span>";
							}
							
							
							
							
						}
						
	
					};
					
				
					SENAI.biblioteca.exibirEmprestimosFinalizados = function(listaDeEmprestimosFinalizados, listaDeLivros, listaDeClientes,
							valorBusca) {
						var search = document.getElementById("searchBar2");
						search.addEventListener("keyup", function(event) {
						  if (event.keyCode === 13) {
						   event.preventDefault();
						   document.getElementById("searchButton2").click();
						  }
						});
						
						var html = "";
					
						if (listaDeEmprestimosFinalizados != undefined
								&& listaDeEmprestimosFinalizados.length > 0) { 
							
							
							let novaLista = [];
							
							for (var j = 0; j < listaDeLivros.length; j++){
								for (var h = 0; h < listaDeClientes.length; h++){
								for (var k = 0; k < listaDeEmprestimosFinalizados.length; k++)
								if(listaDeLivros[j].id == listaDeEmprestimosFinalizados[k].livroId){
									
										if(listaDeClientes[h].id == listaDeEmprestimosFinalizados[k].clienteId){
											novaLista.push(listaDeEmprestimosFinalizados[k])
										}
									}
								}
							}
							
							let perPage = 6
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
								 
								  
								  html.get('.next2').addEventListener('click', () => {
									  controls.next()
									  update()
								  })
								  
								  html.get('.prev2').addEventListener('click', () => {
									  controls.prev()
									  update()
								  })
								  
								 html.get('.last2').addEventListener('click', () => {
									  controls.goTo(state.totalPage)
									  update()
								  })
								  
								  html.get('.first2').addEventListener('click', () => {
									  controls.goTo(1)
									  update()
								  })}
								 
							  
							}
							
				
							const list2 = {
									createTable(){
										let table = document.createElement('table')
										table.classList.add('table')
										table.classList.add('table-bordered')
										
										table.innerHTML += "<tbody class ='lets'><tr><th>Nome</th><th>Título</th><th>Data de empréstimo</th><th>Data de devolução</th><th>Data real de devolução</th></tr>"
										+ "</tbody>";
										html.get('.resultadoEmprestimosFin').appendChild(table);			
									},
									create(item){
										
										

									for (var j = 0; j < listaDeLivros.length; j++){
										if(listaDeLivros[j].id == item.livroId){
											for (var h = 0; h < listaDeClientes.length; h++){
												if(listaDeClientes[h].id == item.clienteId){
 
													html.get('.lets').innerHTML += "<tr><td>"+ listaDeClientes[h].nome +"</td>"
													+ "<td>"+ listaDeLivros[j].titulo +"</td>"
													+ "<td>"+item.dataEmp+"</td>"
														
													+ "<td>"+item.dataDev+"</td>"
															
													+ "<td>"+item.dataReal+"</td></tr>";
												}	
											}
										}	
									}
									
											
									},
									update(){
										 
										 html.get('.resultadoEmprestimosFin').innerHTML = ""
											 
										let page = state.page - 1
										let start = page * state.perPage
										let end = start + state.perPage
										
										let novaLista = [];
										
										for (var j = 0; j < listaDeLivros.length; j++){
											for (var h = 0; h < listaDeClientes.length; h++){
											for (var k = 0; k < listaDeEmprestimosFinalizados.length; k++)
											if(listaDeLivros[j].id == listaDeEmprestimosFinalizados[k].livroId){
												
													if(listaDeClientes[h].id == listaDeEmprestimosFinalizados[k].clienteId){
														novaLista.push(listaDeEmprestimosFinalizados[k])
													}
												}
											}
										}
										
										const paginatedItems = novaLista.slice(start, end)
										list2.createTable();
										paginatedItems.forEach(list2.create);
									 }
									
							 	}
							
							
								
								const buttons = {
										element: html.get('#pagination #numbers'),
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
									list2.update()
							 		buttons.update()
							 	}
							 
							 	function init(){
							 		
							 		update()
							 		controls.createListeners()
							 	}
							 	
							 	init();
							
						} else {
							if (listaDeEmprestimosFinalizados == undefined) {
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
												url : "../../rest/bibliotecaRest/coletarLivros2/",
												success : function(listaDeLivros) {
													var cfo = {
															type : "GET",
															url : "../../rest/bibliotecaRest/buscarEmprestimosFinalizados/",
															success : function(listaDeEmprestimosFinalizados) {
																
																			SENAI.biblioteca.exibirEmprestimosFinalizados(listaDeEmprestimosFinalizados, listaDeLivros, listaDeClientes);
																		
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
							
							}else{
								
								const html = {
										get(element){
											return document.querySelector(element)
										}
								}
								html.get('.resultadoEmprestimosFin').innerHTML = "<span><label><font color='red'> Nenhum registro encontrado. </font></label></span>";
							}
							
							
							
							
							
						}
					
					};
						
					
					
					
					SENAI.biblioteca.exibirEmprestimos(undefined, undefined, undefined, "");
					SENAI.biblioteca.exibirEmprestimosFinalizados(undefined, undefined, undefined, "");
					
					
					SENAI.biblioteca.exibirLivroSelect = function() {
						var html = 
							"<label>Selecione o leitor:</label>"+
							"<select id='inputCliente' class='form-control form-control-sm'>"+
							"</select>"+
							"<label>Selecione o livro:</label>" +
							"<select id='inputLivro' class='form-control form-control-sm'>"+
							"</select>";
						$("#selects").html(html);
						$.ajax({
							type : "GET",
							url : "../../rest/bibliotecaRest/coletarLivros/",
							
							success : function(listaDeLivros) {
								if (listaDeLivros != ""){
									$("#inputLivro").html("");
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Selecione");
									$("#inputLivro").append(option);
									for (var i = 0; i < listaDeLivros.length; i++){
										if(listaDeLivros[i].quantidade > 0){
											var option = document.createElement("option");
											option.setAttribute ("value", listaDeLivros[i].id);
											option.innerHTML = (listaDeLivros[i].titulo+" ["+listaDeLivros[i].quantidade+"]");
											$("#inputLivro").append(option);
										}
									}
								}else{
									$("#inputLivro").html("");
									
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Cadastre um livro primeiro!");
									$("#inputLivro").append(option);
									$("#inputLivro").addClass("aviso");
								}
								SENAI.biblioteca.exibirClienteSelect()
							},
							error: function(err){
								alert("Erro ao coletar os livros: "
										+ err.responseText);
							}
						});
					};
					
					
					SENAI.biblioteca.exibirClienteSelect = function() {	
						$.ajax({
							type : "GET",
							url : "../../rest/bibliotecaRest/coletarCliente/",
					
							success : function(listaDeClientes) {
	
								if (listaDeClientes != ""){
									$("#inputCliente").html("");
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Selecione");
									$("#inputCliente").append(option);
									
									for (var i = 0; i < listaDeClientes.length; i++){
										var option = document.createElement("option");
										option.setAttribute ("value", listaDeClientes[i].id);
										option.innerHTML = (listaDeClientes[i].nome);
										$("#inputCliente").append(option);
									}
								}else{
									$("#inputCliente").html("");
									
									var option = document.createElement("option");
									option.setAttribute ("value", "");
									option.innerHTML = ("Cadastre um cliente primeiro!");
									$("#inputCliente").append(option);
									$("#inputCliente").addClass("aviso");
								}
								
							},
							error: function(err){
								alert("Erro ao coletar os clientes: "
										+ err.responseText);
							}
						});
					};
						
					
					
					SENAI.biblioteca.finalizarEmprestimo = function(id) {
						var cfg = {
								type : "GET",
								url : "../../rest/bibliotecaRest/buscarDividas/",
								success : function(divida) {
									var valor = 0;
									var msg = "";
									for(var i = 0; i<divida.length; i++){
										if(divida[i].emprestimoId == id){
											valor = divida[i].valor;
										}
									}
									if(valor > 0){
										msg = "Este empréstimo possui uma dívida pendente no valor de: R$"+valor+",00. Ao finaliza-lo, também finalizará a dívida. Deseja continuar?";
									}else{
										msg = "Tem certeza que deseja finalizar este empréstimo?";
									}
																		
						var cfg = {
								title : "Mensagem",
								height : 250,
								width : 400,
								modal : true,
								buttons : {
									"Não" : function() {
										$(this).dialog("close");
									},
									"Sim" : function() {
										$("#msg").dialog(cfg);
										var qtLinhas = $("#resultadoEmprestimos tr").length;
										$(this).parents("tr").remove();
										$("#add-new").removeAttr("disabled");
										if ((qtLinhas - 2) == 0) {
											SENAI.biblioteca.buscarEmprestimo();
										};
									
										var cfg = {
											type : "POST",
											url : "../../rest/bibliotecaRest/finalizarEmprestimo/"
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
												SENAI.biblioteca.buscarEmprestimo();
											},
											error : function(err) {
												alert("Erro ao finalizar o empréstimo: "
														+ err.responseText);
											}
										};
										SENAI.ajax.post(cfg);
									}
								}
							};

						$("#msg").html(msg);
						$("#msg").dialog(cfg);
								},
								error : function(err) {
									alert("Erro ao finalizar o empréstimo: "
											+ err.responseText);
								}
							};
							SENAI.ajax.post(cfg);
					}
					
				});