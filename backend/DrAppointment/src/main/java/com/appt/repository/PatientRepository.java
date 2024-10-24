package com.appt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appt.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> { }
