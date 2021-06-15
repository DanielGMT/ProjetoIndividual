SENAI.biblioteca = new Object();

$(document)
		.ready(
				function() {
					SENAI.biblioteca.cadastrarCliente = function() {
						var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
						var senhaCript = "";
						var novoCliente = new Object();
						novoCliente.nome = $("#inputnome").val();
						novoCliente.data = $("#inputdatanasc").val();
						novoCliente.email = $("#inputemail").val();
						novoCliente.login = $("#inputlogin").val();
						if($("#inputrepetirsenha").val() != $("#inputsenha").val()){
							alert("Senhas não conferem.");
						}else if($("#inputsenha").val() == null){
							alert("Favor preencher a senha!")
						}else if($("#inputsenha").val().length < 6){
							alert("A senha deve ter no mínimo 6 caracteres!")
						}else{
							senhaCript = $("#inputsenha").val();
							novoCliente.senha = MD5(senhaCript);
							
						}
						var fullPath = document.getElementById('inputimagem').value;
						if (fullPath) {
						    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
						    var filename = fullPath.substring(startIndex);
						    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
						        filename = filename.substring(1);
						    }
						    
						}
						 novoCliente.imagem = filename;
						 
						 var cfgajax = {
									url : "../../rest/bibliotecaRest/addCliente",
									data : novoCliente,

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

										SENAI.biblioteca.buscarCliente();
									},

									error : function(err) {
										alert("Erro ao cadastrar um novo leitor!"
												+ err.responseText);
									}

								};

								SENAI.ajax.post(cfgajax);
							};

					SENAI.biblioteca.buscarCliente = function() {
						var valorBusca = $("#searchBar").val();
						SENAI.biblioteca.exibirClientes(undefined, valorBusca);
					};

					SENAI.biblioteca.exibirClientes = function(listaDeClientes,
							valorBusca) {
						var search = document.getElementById("searchBar");
						search.addEventListener("keyup", function(event) {
						  if (event.keyCode === 13) {
						   event.preventDefault();
						   document.getElementById("searchButton").click();
						  }
						});	
						var html = "<table class='table table-bordered'>";
						html += "<tr><th>Foto</th><th>Nome</th><th>Data de Nasc</th><th>E-mail</th><th>Login</th><th id='acao'>Ações</th></tr>";
						if (listaDeClientes != undefined
								&& listaDeClientes.length > 0) {
							
							let perPage = 7
							const state = {
							  page: 1,
							  perPage,
							  
							  totalPage: Math.ceil(listaDeClientes.length / perPage),
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
										
										html.get('.fleinin').innerHTML +=  "<tr><td>"
											+ "<img id='imgDoPerfil' src='clienteRegistro/"+item.imagem+"' border=7 height=80 width=100></img>"
											+ "</td>"
											+ "<td>"
											+ item.nome
											+ "</td>"
											+ "<td>"
											+ item.data
											+ "</td>"
											+ "<td>"
											+ item.email
											+ "</td>"
											+ "<td>"
											+ item.login
											+ "</td>"
											+ "<td><a class = 'edit' onclick = 'SENAI.biblioteca.editarCliente("
											+ item.id
											+ "); '>"
											+ "<i class='glyphicon glyphicon-pencil'></i></a>"
											+ "<a class = 'delete' onclick = 'SENAI.biblioteca.deletarCliente("
											+ item.id
											+ ")'>"
											+ "<i class='glyphicon glyphicon-trash'></i></a></td></tr>";
										
		
							},
							createTable(){
								const table = document.createElement('table')
								table.classList.add('table')
								table.classList.add('table-bordered')
								
								table.innerHTML += "<tbody class ='fleinin'><tr><th>Foto</th><th>Nome</th><th>Data de Nascimento</th><th>E-mail</th><th>Login</th><th>Ações</th></tr>"
								+ "</tbody>";
								html.get('.resultadoClientes').appendChild(table);
							},
							update(){
								 
								 html.get('.resultadoClientes').innerHTML = ""
									 list.createTable()
								let page = state.page - 1
								let start = page * state.perPage
								let end = start + state.perPage
								const paginatedItems = listaDeClientes.slice(start, end)
								
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
							if (listaDeClientes == undefined) {
								if (valorBusca == "") {
									valorBusca = null;
								}
								var cfg = {
									type : "POST",
									url : "../../rest/bibliotecaRest/buscarClientesPorNome/"
											+ valorBusca,
									success : function(listaDeClientes) {
										SENAI.biblioteca
												.exibirClientes(listaDeClientes);
									},
									error : function(err) {
										alert("Erro ao consultar os Clientes: "
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
								html.get('.resultadoClientes').innerHTML = "<span><label><font color='red'> Nenhum registro encontrado. </font></label></span>";
						
							}
						}
						
					};

					SENAI.biblioteca.exibirClientes(undefined, "");

					SENAI.biblioteca.deletarCliente = function(id) {
						msg = "Tem certeza que deseja excluir esta conta de cliente?"
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
											var qtLinhas = $("#resultadoClientes tr").length;
											$(this).parents("tr").remove();
											$("#add-new").removeAttr("disabled");
											if ((qtLinhas - 2) == 0) {
												SENAI.biblioteca.buscarCliente();
											};
											var cfg = {
												type : "POST",
												url : "../../rest/bibliotecaRest/deletarCliente/"
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
					
													SENAI.biblioteca.buscarCliente();
												},
												error : function(err) {
													alert("Erro ao deletar o Cliente: "
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

					SENAI.biblioteca.editarCliente = function(id) {
						var cfg = {
							type : "POST",
							url : "../../rest/bibliotecaRest/buscarClientePeloId/"
									+ id,
							success : function(cliente) {
								$("#idClienteEdit").val(cliente.id);
								SENAI.biblioteca.exibirEdicao(cliente);
							},
							error : function(err) {
								alert("Erro ao editar o Cliente!"
										+ err.responseText);
							}
						};
						SENAI.ajax.post(cfg);
					};

	
					
					SENAI.biblioteca.exibirEdicao = function(cliente) {
						var cfg = {
							title : "Editar Cliente",
							height : 380,
							width : 550,
							modal : true,
							buttons : {
								"Cancelar" : function() {
									$(this).dialog("close");
								},

								"Salvar" : function() {
									var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}
								
									var senhaCriptDig = MD5($("#senhaEdit").val());
									var senhaCriptNew = MD5($("#novaSenhaEdit").val());
									
									console.log(cliente.senha);
								
									console.log(senhaCriptDig);
									
									if(cliente.senha != senhaCriptDig){
										alert("Senha atual não está correta!");
									}else if($("#novaSenhaEdit").val() != $("#repetirSenhaEdit").val()){
										alert("A nova senha não confere.")
									}else if($("#novaSenhaEdit").val() == null){
										alert("Favor preencher a senha!")
									}else if($("#novaSenhaEdit").val().length < 6){
										alert("A senha deve ter no mínimo 6 caracteres!")
									}else{
									var dialog = this;
									cliente.id = $("#idClienteEdit").val();
									cliente.senha = senhaCriptNew;
								
									
									var cfg = {
										type : "POST",
										url : "../../rest/bibliotecaRest/editarCliente",
										data : cliente,

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

											SENAI.biblioteca.buscarCliente();
										},
										error : function(err) {
											alert("Erro ao editar o cliente "+ err.responseText);
										}
									};

									SENAI.ajax.post(cfg);
								}
							},
							
						}
						};
						$("#editarCliente").dialog(cfg);
					};

				});