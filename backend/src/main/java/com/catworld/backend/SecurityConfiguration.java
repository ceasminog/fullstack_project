package com.catworld.backend;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.security.spec.EncodedKeySpec;

@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    // настроены конфигурации аутентификации
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("user")
                .password("user")
                .roles("USER")
                .and()
                .withUser("admin")
                .password("admin")
                .roles("ADMIN");
    }

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        //return new BCryptPasswordEncoder(); // пароли храняться в зашифрованном виде
        return NoOpPasswordEncoder.getInstance(); //так не будет шифрования(для проверки)
    }

    // права пользователя в зависимости от его роли
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/user").hasAnyRole("ADMIN", "USER")
                .antMatchers("/").permitAll()
                .and().formLogin();
// надо бы написать обработку ошибок или перенаправлять на error.html какой-нибудь
      /*
       http.formLogin()
                .loginPage("/login.html")
                .loginProcessingUrl("/perform_login")
                .defaultSuccessUrl("/index.html",true)
                .failureUrl("/error.html");*/
    }

}
