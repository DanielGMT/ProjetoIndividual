/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.108
 * Generated at: 2021-02-22 23:05:51 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.resources.admin.adminRegistro;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class content_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<script type=\"text/javascript\" src=\"adminRegistro/js/admin.js\"></script>\r\n");
      out.write("\r\n");
      out.write("<div id=\"cadastrarAdmin\">\r\n");
      out.write("\t<p>\r\n");
      out.write("\t\t<button class=\"btn btn-primary\" id=\"downButton\" type=\"button\"\r\n");
      out.write("\t\t\tdata-toggle=\"collapse\" data-target=\"#collapseExample\"\r\n");
      out.write("\t\t\taria-expanded=\"false\" aria-controls=\"collapseExample\">\r\n");
      out.write("\t\t\tCadastrar novo administrador <span class=\"caret\"></span>\r\n");
      out.write("\t\t</button>\r\n");
      out.write("\t</p>\r\n");
      out.write("</div>\r\n");
      out.write("<div class=\"collapse\" id=\"collapseExample\">\r\n");
      out.write("\t<form>\r\n");
      out.write("\t\t<div class=\"form-group\">\r\n");
      out.write("\t\t\t<label for=\"exampleInputEmail1\">Nome do admin</label> <input\r\n");
      out.write("\t\t\t\tclass=\"form-control\" id=\"inputnome\" placeholder=\"Nome\">\r\n");
      out.write("\t\t\t\t<label for=\"exampleInputEmail1\">Login</label> <input\r\n");
      out.write("\t\t\t\tclass=\"form-control\" type=\"text\" id=\"inputlogin\" placeholder=\"Login\">\r\n");
      out.write("\t\t\t\t<label for=\"exampleInputEmail1\">Senha</label> <input\r\n");
      out.write("\t\t\t\tclass=\"form-control\" type=\"password\" autocomplete=\"off\" id=\"inputsenha\" placeholder=\"Senha\">\r\n");
      out.write("\t\t\t\t<label for=\"exampleInputEmail1\">Repetir senha</label> <input\r\n");
      out.write("\t\t\t\tclass=\"form-control\" type=\"password\" autocomplete=\"off\" id=\"inputrepetirsenha\" placeholder=\"Senha\">\r\n");
      out.write("\t\t\t\t <label for=\"inputimagem\">Selecione uma imagem de perfil:</label> <input \r\n");
      out.write("\t\t\t\t class=\"form-control\" type=\"file\" id=\"inputimagem\" accept=\"image/*\">\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div id=\"entrar\">\r\n");
      out.write("\t\t\t<button type=\"button\" id=\"add-new\"\r\n");
      out.write("\t\t\t\tonclick=\"SENAI.biblioteca.cadastrarAdmin()\" id=\"adicionarAdmin\" class=\"btn btn-primary\">Adicionar</button>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</form>\r\n");
      out.write("</div>\r\n");
      out.write("<div class=\"table-wrapper\">\r\n");
      out.write("\t<div class=\"col-md-12\">\r\n");
      out.write("\t\t<h2 class=\"pt-3 pb-4 text-center font-bold font-up deep-purple-text\">Administradores\r\n");
      out.write("\t\t\tregistrados</h2>\r\n");
      out.write("\t\t<div id=\"divBusca\">\r\n");
      out.write("\t\t\t<input type=\"text\" class='form-control' id=\"searchBar\" placeholder=\"Buscar por nome...\" />\r\n");
      out.write("\t\t\t<button id=\"searchButton\" OnClick=\"SENAI.biblioteca.buscarAdmin()\">Buscar</button>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div class=\"table-title\" id=\"resultadoAdmins\"></div>\r\n");
      out.write("\r\n");
      out.write("\t<div class=\"clearfix\">\r\n");
      out.write("\t\t<div class=\"hint-text\"></div>\r\n");
      out.write("\t\t\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("<div id=\"editarAdmin\" style=\"display: none\">\r\n");
      out.write("\t<label>Senha atual:</label> <input class='form-control' id=\"senhaEdit\" name=\"senha\" type=\"password\">\r\n");
      out.write("\t<label>Nova senha:</label> <input class='form-control' id=\"novaSenhaEdit\" name=\"senha\" type=\"password\">\r\n");
      out.write("\t<label>Repita a nova senha:</label> <input class='form-control' id=\"repetirSenhaEdit\" name=\"senha\" type=\"password\">\r\n");
      out.write("\t<input name=\"idAdmin\" id=\"idAdminEdit\" type=\"hidden\">\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<div id=\"msg\" style=\"display: none\"></div>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
