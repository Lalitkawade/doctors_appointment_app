package com.appt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appt.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
