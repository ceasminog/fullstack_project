package com.catworld.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		// вначале авторизация через SpringSecurity
	    SpringApplication.run(BackendApplication.class, args);
	    //  Работа с бд.
		//  документация https://docs.spring.io/spring-data/jdbc/docs/1.0.0.RC2/reference/html/
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("spring/context.xml");
		UserService s = context.getBean(UserService.class);
		UserDao personDao = s.getUserDao(); // логично получать инфо пользователя по его логину и вывести в личном кабинете. Как?!
		//personDao.getByLogin();
	}
}

