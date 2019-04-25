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
            // save a couple of customers
            repository.save(new User("Jack", "6"));
            repository.save(new User("Chloe", "1"));
            repository.save(new User("Kim", "5"));
            repository.save(new User("David", "8"));
            repository.save(new User("Michelle", "9"));

            // fetch all customers
            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (User user : repository.findAll()) {
                log.info(user.toString());
            }
            log.info("");

            // fetch an individual customer by ID
            repository.findById(1L)
                    .ifPresent(user -> {
                        log.info("Customer found with findById(1L):");
                        log.info("--------------------------------");
                        log.info(user.toString());
                        log.info("");
                    });

            // fetch customers by last name
            log.info("Customer found with findByName('Bauer'):");
            log.info("--------------------------------------------");
            repository.findByName("Bauer").forEach(name -> {
                log.info(name.toString());
            });
            // for (Customer bauer : repository.findByLastName("Bauer")) {
            // 	log.info(bauer.toString());
            // }
            log.info("");
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}