package org.sid.mySpringBootApp.web;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class AdminController {
	
	
	
	@RequestMapping("/tableau")
	public String index( ) {
		return "Dashboard";
	}
	



}
