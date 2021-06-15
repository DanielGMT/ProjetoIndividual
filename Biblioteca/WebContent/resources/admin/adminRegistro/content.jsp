<script type="text/javascript" src="adminRegistro/js/admin.js"></script>

<div id="cadastrarAdmin">
	<p>
		<button class="btn btn-primary" id="downButton" type="button"
			data-toggle="collapse" data-target="#collapseExample"
			aria-expanded="false" aria-controls="collapseExample">
			Cadastrar novo administrador <span class="caret"></span>
		</button>
	</p>
</div>
<div class="collapse" id="collapseExample">
	<form>
		<div class="form-group">
			<label for="exampleInputEmail1">Nome do admin</label> <input
				class="form-control" id="inputnome" placeholder="Nome">
				<label for="exampleInputEmail1">Login</label> <input
				class="form-control" type="text" id="inputlogin" placeholder="Login">
				<label for="exampleInputEmail1">Senha</label> <input
				class="form-control" type="password" autocomplete="off" id="inputsenha" placeholder="Senha">
				<label for="exampleInputEmail1">Repetir senha</label> <input
				class="form-control" type="password" autocomplete="off" id="inputrepetirsenha" placeholder="Senha">
				 <label for="inputimagem">Selecione uma imagem de perfil:</label> <input 
				 class="form-control" type="file" id="inputimagem" accept="image/*">
		</div>
		<div id="entrar">
			<button type="button" id="add-new"
				onclick="SENAI.biblioteca.cadastrarAdmin()" id="adicionarAdmin" class="btn btn-primary">Adicionar</button>
		</div>
	</form>
</div>
<div class="table-wrapper">
	<div class="col-md-12">
		<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Administradores
			registrados</h2>
		<div id="divBusca">
			<input type="text" class='form-control' id="searchBar" placeholder="Buscar por nome..." />
			<button id="searchButton" OnClick="SENAI.biblioteca.buscarAdmin()">Buscar</button>
		</div>
	</div>
	<div class="table-title" id="resultadoAdmins"></div>

	<div class="clearfix">
		<div class="hint-text"></div>
		
	</div>
</div>
<div id="editarAdmin" style="display: none">
	<label>Senha atual:</label> <input class='form-control' id="senhaEdit" name="senha" type="password">
	<label>Nova senha:</label> <input class='form-control' id="novaSenhaEdit" name="senha" type="password">
	<label>Repita a nova senha:</label> <input class='form-control' id="repetirSenhaEdit" name="senha" type="password">
	<input name="idAdmin" id="idAdminEdit" type="hidden">
</div>

<div id="msg" style="display: none"></div>