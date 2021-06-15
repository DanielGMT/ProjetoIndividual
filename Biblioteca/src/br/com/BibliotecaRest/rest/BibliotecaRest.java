package br.com.BibliotecaRest.rest;

import java.io.IOException;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Response;
import javax.ws.rs.POST;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.SimpleEmail;
import org.codehaus.jackson.map.ObjectMapper;

import br.com.BibliotecaRest.bd.conexao.Conexao;
import br.com.BibliotecaRest.jdbc.JDBCBibliotecaDAO;
import br.com.BibliotecaRest.objetos.Autor;
import br.com.BibliotecaRest.objetos.Editora;
import br.com.BibliotecaRest.objetos.Emprestimo;
import br.com.BibliotecaRest.objetos.Livro;
import br.com.BibliotecaRest.objetos.Sessao;
import br.com.BibliotecaRest.objetos.SessaoEmail;
import br.com.BibliotecaRest.objetos.Usuario;
import br.com.BibliotecaRest.objetos.Cliente;
import br.com.BibliotecaRest.objetos.Divida;
import br.com.BibliotecaRest.objetos.Admin;
@Path("bibliotecaRest")
public class BibliotecaRest extends UtilRest {

	public BibliotecaRest() {

	}

	@POST
	@Path("/addAutor")
	@Consumes("application/*")
	public Response addAutor(String autorParam) {
		try {

			Autor autor = new ObjectMapper().readValue(autorParam, Autor.class);

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.inserir(autor);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Autor cadastrado com sucesso.");
			} else {
				return this
						.buildErrorResponse("Não foi possível cadastrar o autor.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}

	@POST
	@Path("/buscarAutoresPorNome/{nome}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarAutoresPorNome(@PathParam("nome") String nome) {
		try {
			List<Autor> autores = new ArrayList<Autor>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			autores = jdbcBiblioteca.buscarPorNome(nome);
			conec.fecharConexao();

			return this.buildResponse(autores);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}

	@POST
	@Path("/deletarAutor/{id}")
	@Consumes("application/*")
	public Response deletarAutor(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.deletarAutor(id);
			conec.fecharConexao();
			if (retorno) {
				return this.buildResponse("Autor deletado com sucesso!");
			} else {
				
				return this.buildErrorResponse("Não foi possível deletar. Há um livro cadastrado com este autor.");
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}

	@POST
	@Path("buscarAutorPeloId/{id}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarAutorPeloId(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();

			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			Autor autor = jdbcBiblioteca.buscarPorId(id);
			conec.fecharConexao();
			return this.buildResponse(autor);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}

	@POST
	@Path("/editarAutor")
	@Consumes("application/*")
	public Response editarAutor(String autorParam) {
		try {
			Autor autor = new ObjectMapper().readValue(autorParam, Autor.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.atualizar(autor);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Autor editado com sucesso!");
			} else {
				return this
						.buildErrorResponse("Não foi possível editar o autor.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	//---------------------------------------------------------------
	
	
	
	
	@POST
	@Path("/addEditora")
	@Consumes("application/*")
	public Response addEditora(String editoraParam) {
		try {

			Editora editora = new ObjectMapper().readValue(editoraParam, Editora.class);

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.inserirEditora(editora);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Editora cadastrada com sucesso.");
			} else {
				return this.buildErrorResponse("Não foi possível cadastrar a editora.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/buscarEditorasPorNome/{nome}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarEditorasPorNome(@PathParam("nome") String nome) {
		try {
			List<Editora> editora = new ArrayList<Editora>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			editora = jdbcBiblioteca.buscarEditoraPorNome(nome);
			conec.fecharConexao();

			return this.buildResponse(editora);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/deletarEditora/{id}")
	@Consumes("application/*")
	public Response deletarEditora(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.deletarEditora(id);
			conec.fecharConexao();
			if (retorno) {
				return this.buildResponse("Editora deletada com sucesso!");
			} else {
				
				return this.buildErrorResponse("Não foi possível deletar. Há um livro cadastrado com esta editora.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("buscarEditoraPeloId/{id}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarEditoraPeloId(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();

			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			Editora editora = jdbcBiblioteca.buscarEditorasPorId(id);
			conec.fecharConexao();
			return this.buildResponse(editora);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/editarEditora")
	@Consumes("application/*")
	public Response editarEditora(String editoraParam) {
		try {
			Editora editora = new ObjectMapper().readValue(editoraParam, Editora.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.atualizarEditora(editora);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Editora editada com sucesso!");
			} else {
				return this
						.buildErrorResponse("Não foi possível editar a editora.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	
	//---------------------------------------------------------------
	
	
	
	
	@POST
	@Path("/addLivro")
	@Consumes("application/*")
	public Response addLivro(String livroParam) {
		
		try {
			Livro livro = new ObjectMapper().readValue(livroParam, Livro.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.inserirLivro(livro);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Livro cadastrado com sucesso.");
			} else {
				return this.buildErrorResponse("Não foi possível cadastrar o livro.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/buscarLivrosPorTitulo/{titulo}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarLivrosPorTitulo(@PathParam("titulo") String titulo) {
		try {
			List<Livro> livro = new ArrayList<Livro>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			livro = jdbcBiblioteca.buscarLivroPorTitulo(titulo);
			conec.fecharConexao();

			return this.buildResponse(livro);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@GET
	@Path("/coletarEditoras/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response coletarEditoras() {
		try {
			List<Editora> editora = new ArrayList<Editora>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			editora = jdbcBiblioteca.coletarEditora();
			conec.fecharConexao();

			return this.buildResponse(editora);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@GET
	@Path("/coletarAutores/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response coletarAutores() {
		try {
			List<Autor> autor = new ArrayList<Autor>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			autor = jdbcBiblioteca.coletarAutor();
			conec.fecharConexao();

			return this.buildResponse(autor);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@GET
	@Path("/coletarLivros/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response coletarLivros() {
		try {
			List<Livro> livro = new ArrayList<Livro>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			livro = jdbcBiblioteca.coletarLivro();
			conec.fecharConexao();

			return this.buildResponse(livro);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@GET
	@Path("/coletarLivros2/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response coletarLivros2() {
		try {
			List<Livro> livro = new ArrayList<Livro>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			livro = jdbcBiblioteca.coletarLivro2();
			conec.fecharConexao();

			return this.buildResponse(livro);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@GET
	@Path("/coletarCliente/")
	@Produces(MediaType.APPLICATION_JSON)
	public Response coletarClientes() {
		try {
			List<Cliente> cliente = new ArrayList<Cliente>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			cliente = jdbcBiblioteca.coletarCliente();
			conec.fecharConexao();

			return this.buildResponse(cliente);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/deletarLivro/{id}")
	@Consumes("application/*")
	public Response deletarLivro(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			jdbcBiblioteca.deletarLivro(id);
			conec.fecharConexao();

			return this.buildResponse("Livro deletado com sucesso.");
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("buscarLivroPeloId/{id}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarLivroPeloId(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();

			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			Livro livro = jdbcBiblioteca.buscarLivrosPorId(id);
			conec.fecharConexao();
			return this.buildResponse(livro);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/editarLivro")
	@Consumes("application/*")
	public Response editarLivro(String livroParam) {
		try {
			Livro livro = new ObjectMapper().readValue(livroParam, Livro.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.atualizarLivro(livro);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Livro editado com sucesso!");
			} else {
				return this
						.buildErrorResponse("Não foi possível editar o livro.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
 
	@POST
	@Path("/addAdmin")
	@Consumes("application/*")
	public Response addAdmin(String adminParam) {
		
		try {
			Admin admin = new ObjectMapper().readValue(adminParam, Admin.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.inserirAdmin(admin);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Admin cadastrado com sucesso.");
			} else {
				return this.buildErrorResponse("Não foi possível cadastrar o admin.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/buscarAdminsPorNome/{nome}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarAdminsPorNome(@PathParam("nome") String nome) {
		try {
			List<Admin> admin = new ArrayList<Admin>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			admin = jdbcBiblioteca.buscarAdminPorNome(nome);
			conec.fecharConexao();

			return this.buildResponse(admin);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	
	@POST
	@Path("/deletarAdmin/{id}")
	@Consumes("application/*")
	public Response deletarAdmin(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			jdbcBiblioteca.deletarAdmin(id);
			conec.fecharConexao();

			return this.buildResponse("Admin deletado com sucesso.");
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("buscarAdminPeloId/{id}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarAdminPeloId(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();

			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			Admin admin = jdbcBiblioteca.buscarAdminsPorId(id);
			conec.fecharConexao();
			return this.buildResponse(admin);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("/editarAdmin")
	@Consumes("application/*")
	public Response editarAdmin(String adminParam) {
		try {
			Admin admin = new ObjectMapper().readValue(adminParam, Admin.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.atualizarAdmin(admin);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Admin editado com sucesso!");
			} else {
				return this
						.buildErrorResponse("Não foi possível editar o admin.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	
};

	
	

@POST
@Path("/addCliente")
@Consumes("application/*")
public Response addCliente(String clienteParam) {
	
	try {
		Cliente cliente = new ObjectMapper().readValue(clienteParam, Cliente.class);
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		boolean retorno = jdbcBiblioteca.inserirCliente(cliente);
		conec.fecharConexao();
		System.out.println("a imagem é: "+ cliente.getImagem());
		if (retorno) {
			return this.buildResponse("Leitor cadastrado com sucesso.");
		} else {
			return this.buildErrorResponse("Login já existente!");
		}
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}
	
	@POST
	@Path("/buscarClientesPorNome/{nome}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarClientesPorNome(@PathParam("nome") String nome) {
		try {
			List<Cliente> cliente = new ArrayList<Cliente>();

			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			cliente = jdbcBiblioteca.buscarClientePorNome(nome);
			conec.fecharConexao();

			return this.buildResponse(cliente);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	
	@POST
	@Path("/deletarCliente/{id}")
	@Consumes("application/*")
	public Response deletarCliente(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			jdbcBiblioteca.deletarCliente(id);
			conec.fecharConexao();

			return this.buildResponse("Leitor deletado com sucesso.");
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	
	@POST
	@Path("buscarClientePeloId/{id}")
	@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
	public Response buscarClientePeloId(@PathParam("id") int id) {
		try {
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();

			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			Cliente cliente = jdbcBiblioteca.buscarClientesPorId(id);
			conec.fecharConexao();
			return this.buildResponse(cliente);
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	}
	

	
	@POST
	@Path("/editarCliente")
	@Consumes("application/*")
	public Response editarCliente(String clienteParam) {
		try {
			Cliente cliente = new ObjectMapper().readValue(clienteParam, Cliente.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
			boolean retorno = jdbcBiblioteca.atualizarCliente(cliente);
			conec.fecharConexao();

			if (retorno) {
				return this.buildResponse("Leitor editado com sucesso!");
			} else {
				return this
						.buildErrorResponse("Não foi possível editar o leitor.");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	
};

@POST
@Path("/buscarUsuario")
@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
public Response buscarClientePeloId() {
	try {
	
		Usuario usuario = Sessao.getInstance().getUsuario();
		
		
		return this.buildResponse(usuario);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}
@POST
@Path("logarAdmin/{id}")
@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
public Response logarAdmin(@PathParam("id") int id) {
	try {
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		Sessao sessao = Sessao.getInstance();
		
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		Usuario usuario = jdbcBiblioteca.adminLogado(id);
		conec.fecharConexao();
		sessao.setUsuario(usuario);
		return this.buildResponse(usuario);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("logarCliente/{id}")
@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
public Response logarCliente(@PathParam("id") int id) {
	try {
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		Sessao sessao = Sessao.getInstance();
		
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		Usuario usuario = jdbcBiblioteca.clienteLogado(id);
		conec.fecharConexao();
		sessao.setUsuario(usuario);
		return this.buildResponse(usuario);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("/buscarAdminPeloUsuario/{usuario}")
@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
public Response buscarAdminPeloUsuario(@PathParam("usuario") String usuario) {
	try {
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		Admin admin = jdbcBiblioteca.buscarAdminPorUsuario(usuario);
		conec.fecharConexao();
		return this.buildResponse(admin);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("/buscarClientePeloUsuario/{usuario}")
@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
public Response buscarClientePeloUsuario(@PathParam("usuario") String usuario) {
	try {
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		Cliente cliente = jdbcBiblioteca.buscarClientePorUsuario(usuario);
		conec.fecharConexao();
		return this.buildResponse(cliente);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

//-----------------------------


@POST
@Path("/addEmprestimo")
@Consumes("application/*")
public Response addEmprestimo(String emprestimoParam) {
	
	try {
		Emprestimo emprestimo = new ObjectMapper().readValue(emprestimoParam, Emprestimo.class);
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		boolean retorno = jdbcBiblioteca.inserirEmprestimo(emprestimo);
		conec.fecharConexao();

		if (retorno) {
			return this.buildResponse("Empréstimo realizado com sucesso.");
		} else {
			return this.buildErrorResponse("Não foi possível realizar o empréstimo. O usuário já possui um empréstimo pendente.");
		}
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("/finalizarEmprestimo/{id}")
@Consumes("application/*")
public Response finalizarEmprestimo(@PathParam("id") int id) {
	try {
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		jdbcBiblioteca.finalizarEmprestimo(id);
		conec.fecharConexao();

		return this.buildResponse("Empréstimo finalizado com sucesso.");
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@GET
@Path("/buscarEmprestimos")
@Produces(MediaType.APPLICATION_JSON)
public Response buscarEmprestimos() {
	try {
		
		List<Emprestimo> emprestimo = new ArrayList<Emprestimo>();
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		emprestimo = jdbcBiblioteca.buscarEmprestimos();
		conec.fecharConexao();
		return this.buildResponse(emprestimo);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@GET
@Path("/buscarEmprestimos2")
@Produces(MediaType.APPLICATION_JSON)
public Response buscarEmprestimos2() {
	try {
		
		List<Emprestimo> emprestimo = new ArrayList<Emprestimo>();
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		emprestimo = jdbcBiblioteca.buscarEmprestimos2();
		conec.fecharConexao();
		return this.buildResponse(emprestimo);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@GET
@Path("/buscarEmprestimosFinalizados")
@Produces(MediaType.APPLICATION_JSON)
public Response buscarEmprestimosFinalizados() {
	try {
		
		List<Emprestimo> emprestimo = new ArrayList<Emprestimo>();
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		emprestimo = jdbcBiblioteca.buscarEmprestimosFinalizados();
		conec.fecharConexao();
		return this.buildResponse(emprestimo);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("/buscarEmpPorData/{dataFinal}")
@Produces(MediaType.APPLICATION_JSON)
public Response buscarEmpPorData(@PathParam("dataFinal") String dataFinal) {
	try {
		
	
		List<Emprestimo> emprestimo = new ArrayList<Emprestimo>();
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();
		
		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		emprestimo = jdbcBiblioteca.buscarEmpPorData(dataFinal);
		conec.fecharConexao();
		return this.buildResponse(emprestimo);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@GET
@Path("/buscarDividas")
@Produces(MediaType.APPLICATION_JSON)
public Response buscarDividas() {
	try {
		
		List<Divida> divida = new ArrayList<Divida>();
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		divida = jdbcBiblioteca.buscarDividas();
		conec.fecharConexao();
		return this.buildResponse(divida);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@GET
@Path("/buscarDividas2")
@Produces(MediaType.APPLICATION_JSON)
public Response buscarDividas2() {
	try {
		
		List<Divida> divida = new ArrayList<Divida>();
		
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		divida = jdbcBiblioteca.buscarDividas2();
		conec.fecharConexao();
		return this.buildResponse(divida);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("/inserirDividas")
@Consumes("application/*")
public void inserirDividas() {
	try {
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		jdbcBiblioteca.inserirDividas();
		conec.fecharConexao();
	} catch (Exception e) {
		e.printStackTrace();
	}
}


@POST
@Path("/deslogar")
@Produces(MediaType.APPLICATION_JSON)
public Response deslogar() {
	try {
	Sessao sessao = Sessao.getInstance();
	Usuario usuario = sessao.getUsuario();
	
	if(usuario!=null) {
		sessao.setUsuario(null);
	}else {
		
	}
	return this.buildResponse(sessao);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@GET
@Path("/buscarUsuarioLogado")
@Produces(MediaType.APPLICATION_JSON)
public Response logarCliente() {
	try {
		Sessao sessao = Sessao.getInstance();
		
		Usuario usuario = sessao.getUsuario();
		
		sessao.setUsuario(usuario);
		return this.buildResponse(usuario);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}


@POST
@Path("/verificarLogin/{login}")
@Produces({ MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON })
public Response verificarLogin(@PathParam("login") String login) {
	try {
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		Usuario usuario = jdbcBiblioteca.verificarLogin(login);
		System.out.println(usuario.getSenha());
		conec.fecharConexao();
		return this.buildResponse(usuario);
	} catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("/enviarEmail/{umEmail}")
public Response enviarEmail(@PathParam("umEmail") String umEmail) {
	
	System.out.println(umEmail);
	String meuEmail = "daniel4002gg@gmail.com";
	String minhaSenha = "DD88485392d";
	
	SimpleEmail email = new SimpleEmail();
	email.setHostName("smtp.gmail.com");
	email.setSmtpPort(465);
	email.setAuthenticator(new DefaultAuthenticator(meuEmail, minhaSenha));
	email.setSSLOnConnect(true);
	
	 int leftLimit = 97; // letter 'a'
	    int rightLimit = 122; // letter 'z'
	    int targetStringLength = 10;
	    Random random = new Random();
	    StringBuilder buffer = new StringBuilder(targetStringLength);
	    for (int i = 0; i < targetStringLength; i++) {
	        int randomLimitedInt = leftLimit + (int) 
	          (random.nextFloat() * (rightLimit - leftLimit + 1));
	        buffer.append((char) randomLimitedInt);
	    }
	    String generatedString = buffer.toString();
	 
	   
	
	String senha = generatedString;
	SessaoEmail sessaoEmail = SessaoEmail.getInstance();
	
	Cliente cliente = new Cliente();
	cliente.setEmail(umEmail);
	cliente.setSenha(senha);
	sessaoEmail.setCliente(cliente);
	try {
		email.setFrom(meuEmail);
		email.setSubject("Recuperação de senha");
		email.setMsg("Foi solicitado uma nova senha para a sua conta, se deseja alterá-la clique neste link: http://localhost:8080/Biblioteca/b091j14y92.jsp");
		email.addTo(umEmail);
		email.send();
		System.out.println("Email foi enviado com sucesso!");
		return this.buildResponse(senha);
	}catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}


@POST
@Path("/enviarEmailSenha/{outroEmail}/{outraSenha}")
public Response enviarEmailSenha(@PathParam("outroEmail") String outroEmail, @PathParam("outraSenha") String outraSenha) {
	
	System.out.println(outroEmail);
	String meuEmail = "daniel4002gg@gmail.com";
	String minhaSenha = "DD88485392d";
	
	SimpleEmail email = new SimpleEmail();
	email.setHostName("smtp.gmail.com");
	email.setSmtpPort(465);
	email.setAuthenticator(new DefaultAuthenticator(meuEmail, minhaSenha));
	email.setSSLOnConnect(true);
	

	try {
		email.setFrom(meuEmail);
		email.setSubject("Recuperação de senha realizada.");
		email.setMsg("Sua senha foi alterada com sucesso!  Sua nova senha é: "+outraSenha+"");
		email.addTo(outroEmail);
		email.send();
		System.out.println("Email foi enviado com sucesso!");
		return this.buildResponse(outraSenha);
	}catch (Exception e) {
		e.printStackTrace();
		return this.buildErrorResponse(e.getMessage());
	}
}

@POST
@Path("/alterarSenha/{senha}/{email}")
public void enviarEmail(@PathParam("senha") String senha, @PathParam("email") String email) {
	
	try {
		Conexao conec = new Conexao();
		Connection conexao = conec.abrirConexao();

		JDBCBibliotecaDAO jdbcBiblioteca = new JDBCBibliotecaDAO(conexao);
		jdbcBiblioteca.trocarSenha(email, senha);
		
		conec.fecharConexao();
	
	}catch (Exception e) {
		e.printStackTrace();
	
	}
}


@GET
@Path("/retornarEmail")
@Produces(MediaType.APPLICATION_JSON)
public Response retornarEmail() {
	Cliente cliente = SessaoEmail.getInstance().getCliente();
	
	
	return this.buildResponse(cliente);
}


@POST
@Path("/finalizarSessaoEmail")
@Produces(MediaType.APPLICATION_JSON)
public void finalizarSessaoEmail() {
	
	Cliente cliente = SessaoEmail.getInstance().getCliente();
	SessaoEmail sessaoEmail = SessaoEmail.getInstance();

	if(cliente!=null) {
		sessaoEmail.setCliente(null);
	}
}

}
