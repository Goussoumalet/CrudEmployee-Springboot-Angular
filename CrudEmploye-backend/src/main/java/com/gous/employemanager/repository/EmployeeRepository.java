package com.gous.employemanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gous.employemanager.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
