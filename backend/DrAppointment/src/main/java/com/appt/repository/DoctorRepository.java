package com.appt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appt.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> { }