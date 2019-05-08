package com.partymaker.controllers;

import com.partymaker.entity.User;
import org.junit.Before;;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private UserController userController;

    @Before
    public void beforeTests() {
        userController.registration("Devid", "12345");
        userController.registration("Pol", "1928");
        userController.registration("Kevin", "9876");
    }

    @Test
    public void controllerIsNotNull() {
        assertThat(userController).isNotNull();
    }

    @Test
    public void registrationNewUser() {
        assertTrue(userController.registration("Mark", "2468"));
    }

    @Test
    public void registrationUniqueUser() {
        assertFalse(userController.registration("Devid", "12345"));
    }

    @Test
    public void registrationWithNullArgument() {
        assertFalse(userController.registration("Tom", null));
        assertFalse(userController.registration(null, "123"));
        assertFalse(userController.registration(null, null));
    }

    @Test
    public void authorizationUser() {
        User user = userController.authorization("Devid", "12345");
        assertEquals("Devid", user.getLogin());
        assertEquals("12345", user.getPassword());
    }

    @Test
    public void authorizationUserNotExists() {
        assertNull(userController.authorization("Antuan", "123"));
    }

    @Test
    public void authorizationWrongPassword() {
        assertNull(userController.authorization("Devid", "000"));
    }

    @Test
    public void authorizationWithNullArgument() {
        assertNull(userController.authorization("Devid", null));
        assertNull(userController.authorization(null, "12345"));
        assertNull(userController.authorization(null, null));
    }
}