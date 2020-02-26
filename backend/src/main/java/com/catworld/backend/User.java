package com.catworld.backend;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.security.PrivateKey;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;

    private String name;

    public User(int id, String name)
    {
        this.id = id;
        this.name = name;
    }

    public User()  {    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
