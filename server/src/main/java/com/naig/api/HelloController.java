package com.naig.api;

import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Collections;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow requests from your Next.js app
public class HelloController {
   
   @GetMapping("/api/hello")
   public Map<String, String> sayHello() {
       return Collections.singletonMap("message", "Hello from Java!");
   }

   @PostMapping("/api/hello")
   public Map<String, String> sendHello(@RequestBody Map<String, String> input) {
       String message = input.get("input");
       return Collections.singletonMap("message", "You sent: " + message);
   }
}

