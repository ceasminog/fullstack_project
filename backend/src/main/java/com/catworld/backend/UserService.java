package com.catworld.backend;

public class UserService {
    public UserDao getUserDao() {
        return personDao;
    }

    private final UserDao personDao;

    public UserService(UserDao personDao) {
        this.personDao = personDao;
    }
}
