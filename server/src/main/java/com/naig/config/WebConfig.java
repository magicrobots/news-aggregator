package com.naig.config; // Make sure this matches your package structure

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Allow CORS for API routes
                .allowedOrigins("http://localhost:3000") // Allow requests from your frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow all common HTTP methods
                .allowedHeaders("*") // Allow any headers
                .allowCredentials(true) // Allow credentials if needed
                .maxAge(3600); // Cache preflight responses for 1 hour
    }
}

