<%@ page import="br.com.BibliotecaRest.objetos.Sessao,br.com.BibliotecaRest.objetos.Usuario" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Página inicial</title>

<link rel="stylesheet" href="navbar/css/navbar.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet" href="../css/jquery-ui.css">
<script type="text/javascript" src="../js/jquery-3.3.1.js"></script>
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
			<li><a href="#" onclick = "loadPage('emprestimo')">Empréstimo</a></li>
		</ul>
		<ul class="nav navbar-nav">
			<li><a href="#" onclick = "loadPage('divida')">Dívida</a></li>
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
	<div id="registerContent">
	
	
	</div>
</div>

</body>
</html>