package com.partymaker.controllers;

import com.partymaker.Application;
import com.partymaker.entity.User;
import com.partymaker.entity.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/registration")
    public boolean registration(String login, String password) {
        try {
            userRepository.save(new User(login, password)); // добавляем в базу нового пользователя
            return true;
        } catch (Exception e) { // перехватываю более общий т.к. JdbcSQLException проверяемое, а save его не бросает как таковой
            log.info("исключение при добавлении нового пользователя: " + e);
            return false;
        }
    }

    @RequestMapping("/authorization")
    public User authorization(String login, String password) {
        User user = userRepository.findByLogin(login);
        if (user != null && password != null) {
            if (password.equals(user.getPassword())) {
                return user;
            }
        }
        return null; // неверный пароль либо такого пользователя в базе не существует
    }
}
