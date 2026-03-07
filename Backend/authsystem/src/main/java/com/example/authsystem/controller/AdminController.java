package com.example.authsystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	@Operation(summary = "Admin dashboard access")
    @GetMapping("/dashboard")
    public String adminDashboard() {
        return "Admin dashboard accessed";
    }
}