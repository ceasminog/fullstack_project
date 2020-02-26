package com.catworld.backend;

import com.catworld.backend.UserDao;
import org.springframework.stereotype.Service;



@Service
public class UserDaoImplementation  implements UserDao {
  //  @Override
    public User getByLogin(int login_) {
        return null;
        // @Query("Select * from Users Where login = login_")
    }
}