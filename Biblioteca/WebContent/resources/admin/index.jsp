  <%@ page import="br.com.BibliotecaRest.objetos.Sessao,br.com.BibliotecaRest.objetos.Usuario" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Página inicial</title>

<link rel="stylesheet" href="navbar/css/navbar.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.4.1/jspdf.debug.js"></script>
<script type="text/javascript" src="canvasjs.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet" href="../css/jquery-ui.css">
<script src="relatorio/Chart.js"></script>
<script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.stock.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/canvas2image@1.0.5/canvas2image.min.js"></script>
<script type="text/javascript" src="../js/jquery-3.3.1.js"></script>
<script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
<link rel="stylesheet" href="index.css">
<link rel="stylesheet" href="cruds.css">
<script type="text/javascript" src="../js/jquery-ui.js"></script>
<script type="text/javascript"src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script type="text/javascript" src="index.js"></script>
<script type="text/javascript" src="../js/ajax.js"></script>
</head>

<body onload = "loadPage('main')">

<% 


Sessao sessao = Sessao.getInstance();

Usuario usuario = sessao.getUsuario();

if(usuario == null){
response.sendRedirect("../../index.html");
}


%>

<nav class="navbar navbar-inverse">

	<div class="container-fluid">
	
		<div class="navbar-header"></div>
		<ul class="nav navbar-nav">
			<li><a class="glyphicon glyphicon-home navbar-brand" href="#" onclick = "loadPage('main')"></a></li>
			<li><a href="#" onclick="loadPage('emprestimo')">Empréstimos</a></li>
		</ul>
		<ul class="nav navbar-nav">
			<li><a href="#" onclick="loadPage('divida')">Dívidas</a></li>
		</ul>
		<ul class="nav navbar-nav">
			<li><a href="#" onclick="loadPage('relatorio')">Gráficos</a></li>
		</ul>
		<ul class="nav navbar-nav">
			<li class="dropdown"><a class="dropdown-toggle"
				data-toggle="dropdown" href="#">Registros <span class="caret"></span></a>
				<ul class="dropdown-menu">
					<li><a href="#" onclick="loadPage('livro')">Registro de livros</a></li>
					<li><a href="#" onclick="loadPage('autor')">Registro de autores</a></li>
					<li><a href="#" onclick="loadPage('editora')">Registro de editoras</a></li>
					<li><a href="#" onclick="loadPage('adminRegistro')">Registro de Administradores</a></li>
					<li><a href="#"onclick="loadPage('clienteRegistro')">Registro de Clientes</a></li>
				</ul></li>
		</ul>
		<ul id="perfil" class="nav navbar-nav navbar-right">
			<li class="dropdown"><a href="#" class="dropdown-toggle"
				data-toggle="dropdown" role="button" aria-haspopup="true"
				aria-expanded="false"> <span class="foto glyphicon glyphicon-user"></span>
					<span class="caret"></span>
			</a>
				<ul class="dropdown-menu">
					<li><a href="#" onclick="loadPage('perfil')">Perfil</a></li>
					<li><a href = "#" onclick="deslogar()">Sair</a></li>
				</ul>
		</ul>
		<div class="navbar-text nav navbar-right">
			
		</div>
	</div>
</nav>
<div class="container">

	<div id="registerContent"></div>
</div>
</body>
</html>