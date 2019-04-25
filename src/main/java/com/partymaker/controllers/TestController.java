package com.partymaker.controllers;

import com.partymaker.dto.TestDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/test")
    public TestDTO test() {
        TestDTO testDTO = new TestDTO();
        testDTO.setName("test_name");
        testDTO.setValue("test_value");
        return testDTO;
    }
}
