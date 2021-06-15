<script type="text/javascript" src="divida/js/divida.js"></script>


<div class="table-wrapper">
	<div class="col-md-12">
		<h2 class="pt-3 pb-4 text-center font-bold font-up deep-purple-text">Dívidas
			pendentes</h2>
		<div id="divBusca">
			<input type="text" class='form-control' id="searchBar" placeholder="Buscar por nome..." />
			<button id="searchButton" OnClick="SENAI.biblioteca.buscarDivida()">Buscar</button>
		</div>
	</div>
	<div class="resultadoDividas"></div>
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

</div>	

<div id="msg" style="display: none"></div>