<script type="text/javascript" src="clienteRegistro/js/cliente.js"></script>
<div id="cadastrarCliente">
	<p>
		<button class="btn btn-primary" id="downButton" type="button"
			data-toggle="collapse" data-target="#collapseExample"
			aria-expanded="false" aria-controls="collapseExample">
			Cadastrar novo Leitor <span class="caret"></span>
		</button>
	</p>
</div>
<div class="collapse" id="collapseExample">
	<form>
		<div class="form-group">
			<label for="inputnome">Nome do leitor</label> <input
				class="form-control" id="inputnome" placeholder="Nome">
				<label for="inputdatanasc">Data de nascimento</label> <input
				class="form-control" id="inputdatanasc" placeholder="Data de nascimento">
				<label for="inputemail">E-mail</label> <input
				class="form-control" id="inputemail" placeholder="E-mail">
				<label for="inputlogin">Login</label> <input
				class="form-control" type="text" id="inputlogin" placeholder="Login">
				<label for="inputsenha">Senha</label> <input
				class="form-control" type="password" id="inputsenha" autocomplete="off" placeholder="Senha">
				<label for="inputrepetirsenha">Repetir senha</label> <input
				class="form-control" type="password" id="inputrepetirsenha" autocomplete="off" placeholder="Senha">
				 <label for="inputimagem">Selecione uma imagem de perfil:</label> <input 
				class="form-control" type="file" id="inputimagem" accept="image/*">
		</div>
		<div id="entrar">
			<button type="button" id="add-new"
				onclick="SENAI.biblioteca.cadastrarCliente()" id="adicionarCliente" class="btn btn-primary">Adicionar</button>
		</div>
	</form>
</div>
<div class="table-wrapper">
	<div class="col-md-12">
		<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Leitores
			registrados</h2>
		<div id="divBusca">
			<input type="text" class='form-control' id="searchBar" placeholder="Buscar por nome..." />
			<button id="searchButton" OnClick="SENAI.biblioteca.buscarCliente()">Buscar</button>
		</div>
	</div>
	<div class="resultadoClientes"></div>
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
<div id="editarCliente" style="display: none">
	<label>Senha atual:</label> <input class='form-control' id="senhaEdit" name="senha" type="password">
	<label>Nova senha:</label> <input class='form-control' id="novaSenhaEdit" name="senha" type="password">
	<label>Repita a nova senha:</label> <input class='form-control' id="repetirSenhaEdit" name="senha" type="password">
	<input name="idCliente" id="idClienteEdit" type="hidden">
</div>

<div id="msg" style="display: none"></div>