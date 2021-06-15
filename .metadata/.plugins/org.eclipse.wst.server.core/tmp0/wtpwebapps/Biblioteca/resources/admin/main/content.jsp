<script type="text/javascript" src="main/js/main.js"></script>

<div id="divBuscaMain">
	<input type="text" class="form-control" id="searchBar" placeholder="Buscar por título..." />
	<button id="searchButton" OnClick="SENAI.biblioteca.buscarLivro()">Buscar</button>
</div>
<div id="tituloMain">Biblioteca Arco-Íris</div>
	<div id="subtituloMain">Acervo de livros</div>

	<div class="resultadoLivros" >
	
	</div>


  <ul class="pagination">
    <li class="page-item">
      <a class="first" href="#"><<</a>
    </li>
    <li class="page-item">
      <a class="prev" href="#"><</a>
    </li>
   <li class="numbers">
   
   </li>
    <li class="page-item">
      <a class="next" href="#">></a>
    </li>
    <li class="page-item">
      <a class="last" href="#">>></a>
    </li>
  </ul>

    

<div id="exibirLivro" style="display: none">
	<label>Título do livro:</label> 
	<input readonly class='form-control' id="tituloExibir" name="titulo" type="text">
	<label>Descrição:</label> 
	<input readonly class='form-control' id="descExibir" name="descricao" type="text"> 
	<label>Quantidade:</label> 
	<input readonly class='form-control' id="qtdadeExibir" name="quantidade" type="text"> 
	
	<label>Autor:</label> 
	<input readonly class='form-control' id="autorExibir" name="autor" type="text"> 
	
	<label>Editora:</label> 
	<input readonly class='form-control' id="editoraExibir" name="editora" type="text"> 
	<input readonly name="idLivro" id="idLivroExibir" type="hidden">
</div>	
