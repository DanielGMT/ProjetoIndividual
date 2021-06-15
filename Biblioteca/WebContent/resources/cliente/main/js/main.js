SENAI.biblioteca = new Object();

$(document)
.ready(
		function() {
SENAI.biblioteca.buscarLivro = function() {
	var valorBusca = $("#searchBar").val();
	SENAI.biblioteca.exibirMainLivros(undefined, undefined, undefined, valorBusca);
};

SENAI.biblioteca.filtro = function(){
	var cfg = {
			type : "GET",
			url : "../../rest/bibliotecaRest/buscarUsuarioLogado/",
			success : function(usuario) {
				if(usuario != null){
			
					SENAI.biblioteca.exibirMainLivros(undefined, undefined, undefined, "");
				}else{
					window.location = "../../index.html";
				}
				
			},
			error : function(err) {
				alert("Erro ao autenticar o login: "
						+ err.responseText);
			}
		};
	SENAI.ajax.post(cfg);
}

SENAI.biblioteca.exibirMainLivros = function(listaDeLivros, listaDeAutores, listaDeEditoras, valorBusca) {
	
	 var html = "";
	

	
	
	if (listaDeLivros != undefined
			&& listaDeLivros.length > 0) { 
		
		
		
		let perPage = 16
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
		
		
	 
		const list = {
			 create(item){
				 
				const div = document.createElement('div')
				div.classList.add('box')
				 
						
					
					if(item.quantidade == 0){
						for (var h = 0; h < listaDeAutores.length; h++){
							if(listaDeAutores[h].id == item.autorId){
								div.innerHTML = "<button onclick='SENAI.biblioteca.exibirDetalhes("+item.id+")'><img src='livro/"+item.imagem+"' height='178' width='128'/></button>"
								 + "<progress id='file' value='0' max='100'> 0% </progress>"
								 +"<span><label> "+item.titulo+" </label></span>"
								 +"<span><label><font color='red'> Esgotado </font></label></span>";
							}	
						}
						
						
					}else if(item.quantidade > 0 && item.quantidade < 10){
						
						div.innerHTML = "<button onclick='SENAI.biblioteca.exibirDetalhes("+item.id+")'>"
							 
							 + "<img src='livro/"+item.imagem+"' height='178' width='128'/></button>"
							 + "<progress id='file' value='"+item.quantidade+"0' max='100'>"+item.quantidade+"0% </progress>"
							 +"<span><label> "+item.titulo+" </label></span>";
						
					}else{
						div.innerHTML = "<button class = 'animated-button1' onclick='SENAI.biblioteca.exibirDetalhes("+item.id+")'>"
						 	+ "<span></span>"
						 	+ "<span></span>"
						 	+ "<span></span>"
						 	+ "<span></span>"
						 	+ "<span></span>"
						 	+ "<span></span>"
						 	+ "<span></span>"
						 	+ "<span></span>"
						 	+"<img src='livro/"+item.imagem+"' height='178' width='128'/></button>"
						 + "<progress id='file' value='100' max='100'> 100% </progress>"
						 +"<span><label> "+item.titulo+" </label></span>";
					 
					}
					
			
				
				html.get('.resultadoLivros').appendChild(div);
				
			 },
			 update(){
				 
				 html.get('.resultadoLivros').innerHTML = ""
					
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
											SENAI.biblioteca.exibirMainLivros(listaDeLivros, listaDeAutores, listaDeEditoras);
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
	
	
	var search = document.getElementById("searchBar");
	search.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	   event.preventDefault();
	   document.getElementById("searchButton").click();
	  }
	});
};
SENAI.biblioteca.exibirDetalhes = function(idLivro){
		
		var cfg = {
				type : "GET",
				url : "../../rest/bibliotecaRest/coletarAutores/",
				success : function(listaDeAutores) {
					var cfr = {
							type : "GET",
							url : "../../rest/bibliotecaRest/coletarEditoras/",
							success : function(listaDeEditoras) {
								var cft = {
										type : "POST",
										url : "../../rest/bibliotecaRest/buscarLivroPeloId/"
												+ idLivro,
										success : function(livro) {
											
											$("#idLivroExibir").val(livro.id);
											$("#tituloExibir").val(livro.titulo);
											$("#descExibir").val(livro.descricao);
											$("#qtdadeExibir").val(livro.quantidade);
										
											for (var j = 0; j < listaDeAutores.length; j++){
												
												if(listaDeAutores[j].id == livro.autorId){
													$("#autorExibir").val(listaDeAutores[j].nome);
												}	
											}
												for (var j = 0; j < listaDeEditoras.length; j++){
													
													if(listaDeEditoras[j].id == livro.editoraId){
														$("#editoraExibir").val(listaDeEditoras[j].nome);
													}	
												}
										
											SENAI.biblioteca.abrirLivro();
										},
										error : function(err) {
											alert("Erro ao editar o livro!"
													+ err.responseText);
										}
							};
								SENAI.ajax.post(cft);
				},
				error : function(err) {
					alert("Erro ao editar o livro!"
							+ err.responseText);
				}
			};
			SENAI.ajax.post(cfr);
				},
				error : function(err) {
					alert("Erro ao editar o livro!"
							+ err.responseText);
				}
		};
		SENAI.ajax.post(cfg);
	};
	
	
	SENAI.biblioteca.abrirLivro = function() {
		var cfg = {
				title : "Exibir Livro",
				height : 420,
				width : 550,
				modal : true,
				buttons : {
					"Fechar" : function() {
						$(this).dialog("close");
					}
						
				},
				close : function() {
				}
					
			};
		$("#exibirLivro").dialog(cfg);
		};
	
	
	SENAI.biblioteca.filtro();
	
		});


	