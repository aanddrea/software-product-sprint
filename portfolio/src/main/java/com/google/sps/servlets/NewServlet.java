package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/mySeverlet")
public class NewServlet extends HttpServlet {
    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String[] tips;
    tips = new String[3];
    tips[0] = "take a deep breath";
    tips[1] = "be grateful";
    tips[2] = "read a book";

    int rnum = (int) Math.floor(Math.random() *  tips.length);
    String tip_show = tips[rnum];
    
    response.setContentType("text/html;");
    response.getWriter().println("<h1>my message: hello :) nice to meet you</h1>");
    response.getWriter().println("<h1>here is a wellness tip : </h1>" + tip_show);

  }
}
