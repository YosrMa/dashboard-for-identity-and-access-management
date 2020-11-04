package org.sid.mySpringBootApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MySpringBootAppApplication /* implements CommandLineRunner */{
    @Autowired
    
	public static void main(String[] args) {
	    SpringApplication.run(MySpringBootAppApplication.class, args);
		
		
		
	}
	
	/*
	 * @Override public void run(String... args) throws Exception {
	 * AdminRepository.save(new admin("ahmed1","admin1","pass1"));
	 * AdminRepository.save(new admin("ahmed2","admin2","pass2"));
	 * AdminRepository.save(new admin("ahmed3","admin3","pass3"));
	 * 
	 * AdminRepository.findAll().forEach(p->System.out.println(p.getName()));
	 * 
	 * }
	 */
	 

}
