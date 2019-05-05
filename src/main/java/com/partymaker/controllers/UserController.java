package com.partymaker.controllers;

import com.partymaker.Application;
import com.partymaker.Exceptions.authorizationException;
import com.partymaker.Exceptions.registrationException;
import com.partymaker.entity.User;
import com.partymaker.entity.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/registration")
    public void loginRegistration(String login, String pasword) {
        try {
            userRepository.save(new User(login, pasword)); // добавляем в базу нового пользователя
        }
        catch(Exception e) { // перехватываю более общий т.к. JdbcSQLException проверяемое, а save его не бросает как таковой
            throw new registrationException(); // исключение при добавлении нового пользователя (такой логин уже существует)
        }
    }

    @RequestMapping("/authorization")
    public User loginAuthorization(String login, String pasword) {
        User user = userRepository.findByLogin(login);
        if (user != null && pasword != null) {
            if (pasword.equals(user.getPassword())) return user;
        }
        throw new authorizationException(); // неверный пароль либо такого пользователя в базе не существует
    }
}
