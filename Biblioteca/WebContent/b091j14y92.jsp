 <%@ page import="br.com.BibliotecaRest.objetos.SessaoEmail,br.com.BibliotecaRest.objetos.Cliente" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pagina inicial</title>

<link rel="stylesheet" href="resources/visitante/navbar/css/navbar.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet" href="resources/css/jquery-ui.css">
<script type="text/javascript" src="resources/js/jquery-3.3.1.js"></script>
<link rel="stylesheet" href="resources/visitante/index.css">
<link rel="stylesheet" href="resources/visitante/login/css/login.css">

<script type="text/javascript" src="resources/js/jquery-ui.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/visitante/index.js"></script>
<script type="text/javascript" src="resources/js/ajax.js"></script>
	

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round|Open+Sans">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<script type="text/javascript" src="resources/visitante/login/sincronizarDados.js"></script>
</head>
<body>

<% 


SessaoEmail sessaoEmail = SessaoEmail.getInstance();

Cliente cliente = sessaoEmail.getCliente();

if(cliente == null){
response.sendRedirect("index.html");
}


%>

	<div id="adminPage"></div>
	<div id="clientPage"></div>
	<div id = "navbar">
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<div class="navbar-header"></div>
				<ul class="nav navbar-nav">
					<li><a class="glyphicon glyphicon-home navbar-brand" href="index.html"></a></li>
				</ul>
				<ul id="perfil" class="nav navbar-nav navbar-right">
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown" role="button" aria-haspopup="true"
						aria-expanded="false"> <span class="glyphicon glyphicon-user"></span>
							<span class="caret"></span>
					</a>
						<ul class="dropdown-menu">
							<li><a href="index.html">Login</a></li>
						</ul>
				</ul>
			</div>
		</nav>
	</div>
<div class="container" id="conteudo">
		<label id="titulos">Digite o email cadastrado:</label> 
	<input class="fadeIn third" id="outroEmail" placeholder="email" name="email" type="text">
	
	<button id="botaoConf" onclick="enviar()">Confirmar</button>
	</div>


</body>
</html>