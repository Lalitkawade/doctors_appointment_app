package com.appt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appt.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	List<Appointment> findByDoctorId(Long doctorId);
    List<Appointment> findByPatientId(Long patientId);
}
