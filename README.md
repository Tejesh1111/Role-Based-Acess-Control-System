                                                      ROLE BASED ACESS CONTROL 
<br/>

A full-stack Role Based Access Control (RBAC) authentication system built using Spring Boot, JWT, React, and TypeScript.

This project demonstrates secure authentication, authorization, and role-based UI rendering with a modern frontend.

<br/>

<br/>
Swagger API :
<br/>
Swagger UI available at:
<br/>
http://localhost:8080/swagger-ui.html
<br/>
<br/>
FEATURES 

Authentication :

User Registration

User Login

JWT Token Authentication

Secure Password Hashing (BCrypt)



<br/>
<br/>
Authorization :

Role Based Access Control

Admin and User Roles

Protected API Routes

Role-based UI Rendering



<br/>
<br/>


Backend Features:


Spring Boot REST APIs

JWT Security Filter

Global Exception Handling

DTO Validation

Swagger API Documentation

MySQL Database Integration



<br/>
<br/>


Frontend Features:

React + TypeScript

Vite Build Tool

Tailwind CSS UI

React Router

Axios API Calls

Protected Routes

Role Based Dashboard



<br/>
<br/>



Tech Stack

Backend:

Java

Spring Boot

Spring Security

JWT

Hibernate / JPA

MySQL

Maven

Swagger



<br/>
Frontend :

React

TypeScript

Vite

Tailwind CSS

React Router

<br/>
<br/>


Project Structure:
<br/>
Backend : <img width="400" height="697" alt="image" src="https://github.com/user-attachments/assets/07325745-bb4e-4f29-9b0d-9d5762fa23f3" />
FrontEend : <img width="227" height="814" alt="image" src="https://github.com/user-attachments/assets/850c2f22-4ee7-493d-abc3-a8bfe4bac772" />


<br/>
<br/>
<br/>
Backend Setup (Spring Boot)
<br/>
Clone Repository
<br/>
git clone https://github.com/YOUR_USERNAME/Rbac-System.git
<br/>
Configure Database
<br/>
Update application.properties:
<br/>
spring.datasource.url=jdbc:mysql://localhost:3306/rbac_db
<br/>
spring.datasource.username=root
<br/>
spring.datasource.password=yourpassword
<br/>
spring.jpa.hibernate.ddl-auto=update
<br/>
spring.jpa.show-sql=true
<br/>
<br/>
<br/>
Run Backend
<br/>
mvn spring-boot:run
<br/>
Server runs at:
<br/>
http://localhost:8080
<br/>
<br/>
<br/>
Frontend Setup (React)
<br/>
Navigate to frontend folder:
<br/>
cd Frontend
<br/>
Install dependencies:
<br/>
npm install
<br/>
Run frontend:
<br/>
npm run dev
<br/>
Frontend runs at:
<br/>
http://localhost:5173

<br/>
<br/>
<br/>
API Endpoints
<br/>
POST	/api/auth/register	           For Registering new user
<br/>
POST	/api/auth/login	              For Logging in as user
<br/>
Protected Routes
<br/>
Role	Endpoint
<br/>
ADMIN	/api/admin/**
<br/>
USER	/api/user/**
<br/>

<br/>
<br/>
<br/>
Screenshots
<br/>
<br/>
Front Page : <img width="1919" height="1023" alt="image" src="https://github.com/user-attachments/assets/8ed06681-e165-4c0c-8b85-4c3c9e49b478" />
Register Page : <img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/4a92028b-8138-47c5-8466-98b1a41126c3" />
Login Page : <img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/4dda0936-788d-4cc1-8a16-d8da1d0279fc" />
User Dashboard Page : <img width="1919" height="732" alt="image" src="https://github.com/user-attachments/assets/90cf566a-c177-4e80-b23b-b2cf99426c01" />
Admin Page : <img width="1919" height="601" alt="image" src="https://github.com/user-attachments/assets/22b5b772-2217-4a61-832d-d3504b2d2b7d" />


<br/>
<br/>
<br/>
<br/>
<br/>
Demonstration Video:

https://github.com/user-attachments/assets/1c01be43-e56a-45d6-9bfe-62641f2d9379


Security Features:
<br/>

JWT Authentication

Password Encryption (BCrypt)

Role Based Authorization

Secure API Access

Input Validation


<br/>
<br/>
<br/>










