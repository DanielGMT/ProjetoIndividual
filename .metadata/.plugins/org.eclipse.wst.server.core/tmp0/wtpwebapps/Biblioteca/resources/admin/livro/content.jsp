<script type="text/javascript" src="livro/js/livro.js"></script>

<div id="cadastrarLivro">
	<p>
		<button class="btn btn-primary" onclick="SENAI.biblioteca.exibirEditoraSelect(); SENAI.biblioteca.exibirAutorSelect();" id="downButton" type="button"
			data-toggle="collapse" data-target="#collapseExample"
			aria-expanded="false" aria-controls="collapseExample">
			Cadastrar novo livro <span class="caret"></span>
		</button>
	</p>
</div>
<div class="collapse" id="collapseExample">
	<form>
		<div class="form-group">
			<label>Título do livro</label>
			<input class='form-control' id='inputname' type='text'>
			<label>Descrição:</label>
			<input class='form-control' id='inputdesc' type='text'>
			<label>Quantidade:</label>
			<input class='form-control' id='inputqnt' type='text'>
			<label for="inputimagem">Selecione uma capa:</label> <input 
			class="form-control" type="file" id="inputimagem" accept="image/*">
			<div id="selects">
				<label>Editora:</label>
				<select id='inputeditora' class='form-control form-control-sm'>
					
				</select>
				<label>Autor:</label>
				<select id='inputautor' class='form-control form-control-sm'>
	
				</select>
			</div>
		</div>
		<div id="entrar">
			<button type="button" id="add-new"
				onclick="SENAI.biblioteca.cadastrarLivro()" class="btn btn-primary">Adicionar</button>
		</div>
	</form>
</div>
<div class="table-wrapper">
	<div class="col-md-12">
		<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Livros
			registrados</h2>
		<div id="divBusca">
			<input type="text" class='form-control' id="searchBar" placeholder="Buscar por título..." />
			<button id="searchButton" OnClick="SENAI.biblioteca.buscarLivro()">Buscar</button>
		</div>
	</div>
	<div class="resultadoLivros"></div>
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
	<div class="clearfix">
		<div class="hint-text"></div>

	</div>
</div>
<div id="msg" style="display: none"></div>

<div id="editarLivro" style="display: none">
	<label>Capa:</label> 
	<input class="form-control" id="imgEdit" name="imagem" type="file" accept="image/*">
	<label>Título do livro:</label> 
	<input class='form-control' id="tituloEdit" name="titulo" type="text">
	<label>Descrição:</label> 
	<input class='form-control' id="descEdit" name="descricao" type="text"> 
	<label>Quantidade:</label> 
	<input class='form-control' id="qtdadeEdit" name="quantidade" type="text"> 
	<div id="selectsEdit">
		<label>Autor:</label> 
		<select id="selectBox" id="autorEdit" class="form-control form-control-sm">
		
		</select>
		<label>Editora:</label> 
		<select id="editoraEdit" class="form-control form-control-sm">
		
		</select> 
	</div>	
	<input name="idLivro" id="idLivroEdit" type="hidden">
</div>