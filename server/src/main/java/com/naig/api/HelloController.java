package com.naig.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Map;
import java.util.Collections;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HelloController {
   
   @GetMapping("/api/hello")
    public Map<String, String> sayHello() {
        return Collections.singletonMap("message", "Hello from Java!");
    }
}

