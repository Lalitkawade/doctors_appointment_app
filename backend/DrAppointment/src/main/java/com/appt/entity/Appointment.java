package com.appt.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime dateTime;
    private String reason;

 // Many-to-One relationship with Doctor
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    // Many-to-One relationship with Patient
    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

	public Long getId() {
		return id;
	}

	public LocalDateTime getDateTime() {
		return dateTime;
	}

	public String getReason() {
		return reason;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setDateTime(LocalDateTime dateTime) {
		this.dateTime = dateTime;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Appointment(Long id, LocalDateTime dateTime, String reason, Doctor doctor, Patient patient) {
		super();
		this.id = id;
		this.dateTime = dateTime;
		this.reason = reason;
		this.doctor = doctor;
		this.patient = patient;
	}

	public Appointment() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", dateTime=" + dateTime + ", reason=" + reason + ", doctor=" + doctor
				+ ", patient=" + patient + "]";
	}
    
    
}
