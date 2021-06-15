<script type="text/javascript" src="emprestimo/js/emprestimo.js"></script>

<div id="cadastrarEmprestimo">
	<p>
		<button class="btn btn-primary" onclick="SENAI.biblioteca.exibirClienteSelect(); SENAI.biblioteca.exibirLivroSelect();" id="downButton" type="button"
			data-toggle="collapse" data-target="#collapseExample"
			aria-expanded="false" aria-controls="collapseExample">
			Efetuar novo empréstimo <span class="caret"></span>
		</button>
	</p>
</div>
<div class="collapse" id="collapseExample">
	<form>
		<div class="form-group">
			<div id="selects">
				<label>Selecione o leitor:</label>
				<select id='inputCliente' class='form-control form-control-sm'>
					
				</select>
				<label>Selecione o livro:</label>
				<select id='inputLivro' class='form-control form-control-sm'>
	
				</select>
			</div>
		</div>
		<div id="entrar">
			<button type="button" id="add-new"
				onclick="SENAI.biblioteca.cadastrarEmprestimo()" id="adicionarEmprestimo" class="btn btn-primary">Efetuar</button>
		</div>
	</form>
</div>
<div class="table-wrapper">
	<div class="col-md-12">
		<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Empréstimos
			pendentes</h2>
		<div id="divBusca">
			<input type="text" class='form-control' id="searchBar" placeholder="Buscar por nome..." />
			<button class="sbutton1" id="searchButton" OnClick="SENAI.biblioteca.buscarEmprestimo()">Buscar</button>
		</div>
	</div>
	<div class="resultadoEmprestimos"></div>
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
  
  
<div class="col-md-12">
		<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Empréstimos
			finalizados</h2>
		<div id="divBusca">
			<input type="text" class='form-control' id="searchBar2" placeholder="Buscar por nome.." />
			<button class="sbutton2" id="searchButton2" OnClick="SENAI.biblioteca.buscarEmprestimo2()">Buscar</button>
		</div>
	</div>

<div class="resultadoEmprestimosFin"></div>
	 

 <ul class="pagination" id="pagination">
    <li class="page-item">
      <a class="first2" href="#"><<</a>
    </li>
    <li class="page-item">
      <a class="prev2" href="#"><</a>
    </li>
   <li class="numbers" id="numbers">
   
   </li>
    <li class="page-item">
      <a class="next2" href="#">></a>
    </li>
    <li class="page-item">
      <a class="last2" href="#">>></a>
    </li>
  </ul>
  
</div>	
	
	
 
	
<div id="msg" style="display: none"></div>