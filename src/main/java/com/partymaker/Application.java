package com.partymaker;

import com.partymaker.entity.UserRepository;
import com.partymaker.entity.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Bean
    public CommandLineRunner demo(UserRepository repository) {
        return (args) -> {
            // добавление новых пользователей
//            repository.save(new User("Kim", "123"));
//            repository.save(new User("Jack", "123"));
//            repository.save(new User("Chloe", "345"));
//            repository.save(new User("David", "324"));
//            repository.save(new User("Michelle", "234"));

            // получение пользователя по логину
//            User user = repository.findByLogin("Kim");
//            log.info("Пользователь Kim" + user);

            // вывод пользоователя с конкретным id
//            repository.findById(1L)
//                    .ifPresent(user -> {
//                        log.info("вывод пользоователя с id = 1");
//                        log.info("--------------------------------");
//                        log.info(user.toString());
//                        log.info("");
//                    });

            // вывод всех пользователей
//            log.info("вывод всех пользователей - findAll():");
//            log.info("-------------------------------");
//            for (User user : repository.findAll()) {
//                log.info(user.toString());
//            }

        };
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}