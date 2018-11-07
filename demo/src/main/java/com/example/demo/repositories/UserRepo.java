package com.example.demo.repositories;

/**
 * Created by Sandra on 2018-11-02.
 */
import com.example.demo.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<User, Long> {
    List<User> findByLastName(String findByName);
    User findByLoginAndPassword(String login, String password);
    List<User> findAll();
    User findByLogin(String login);
}