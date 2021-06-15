<script type="text/javascript" src="autor/js/autor.js"></script>

<div id="cadastrarAutor">
	<p>
		<button class="btn btn-primary" id="downButton" type="button"
			data-toggle="collapse" data-target="#collapseExample"
			aria-expanded="false" aria-controls="collapseExample">
			Cadastrar novo autor <span class="caret"></span>
		</button>
	</p>
</div>
<div class="collapse" id="collapseExample">
	<form>
		<div class="form-group">
			<label for="exampleInputEmail1">Nome do autor</label> <input
				class="form-control" id="inputname" placeholder="Nome">
		</div>
		<div id="entrar">
			<button type="button" id="add-new"
				onclick="SENAI.biblioteca.cadastrarAutor()" class="btn btn-primary">Adicionar</button>
		</div>
	</form>
</div>
<div class="table-wrapper">
	<div class="col-md-12">
		<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Autores
			registrados</h2>
		<div id="divBusca">
			<input type="text" class='form-control' id="searchBar" placeholder="Buscar por nome..." />
			<button id="searchButton" OnClick="SENAI.biblioteca.buscarAutor()">Buscar</button>
		</div>
	</div>
	<div class="resultadoAutores"></div>
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
<div id="editarAutor" style="display: none">
	<label>Nome:</label> <input id="nomeEdit" class='form-control' name="nome" type="text">
	<input name="idAutor" id="idAutorEdit" type="hidden">
</div>

<div id="msg" style="display: none"></div>