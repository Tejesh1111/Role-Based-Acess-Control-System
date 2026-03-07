package com.example.authsystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/user")
public class UserController {
	@Operation(summary = "User profile access")
    @GetMapping("/profile")
    public String userProfile() {
        return "User profile accessed";
    }
}