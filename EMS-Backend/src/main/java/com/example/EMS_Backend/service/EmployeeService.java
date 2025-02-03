package com.example.EMS_Backend.service;

import java.util.List;

import com.example.EMS_Backend.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(String employeeId);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(String employeeId, EmployeeDto updatedEmployeeDto);
    void deleteEmployee(String employeeId);
}
