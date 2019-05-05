package com.partymaker.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;


@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private UserController userController;


//    @Test(expected = Exception.class)
    @Test
    public void loginRegistrationUnique() {
        String login = "Jack";
        String password = "12345";
//        userController.loginRegistration(login, password);
//        userController.loginRegistration(login, password);
    }

    @Test
    public void loginAuthorization() {

    }
}