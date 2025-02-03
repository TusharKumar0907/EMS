package com.example.EMS_Backend.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "employees") // Equivalent to @Entity + @Table
public class Employee {

    @Id
    private String id; // MongoDB's _id (stored as String)
    private String firstName;
    private String lastName;
    private String email;
    
}
