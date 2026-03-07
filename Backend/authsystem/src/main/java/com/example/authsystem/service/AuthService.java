package com.example.authsystem.service;

import com.example.authsystem.dto.request.LoginRequest;
import com.example.authsystem.dto.request.RegisterRequest;
import com.example.authsystem.dto.response.AuthResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
}