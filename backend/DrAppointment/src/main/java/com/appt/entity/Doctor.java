package com.appt.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Doctor {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String firstName;
    private String lastName;
    private String specialization;
    
 // One-to-One relationship with User
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    
 // One-to-Many relationship with Appointments
    @OneToMany(mappedBy = "doctor")
    private List<Appointment> appointments = new ArrayList<>();

	public Long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getSpecialization() {
		return specialization;
	}

	public User getUser() {
		return user;
	}

	public List<Appointment> getAppointments() {
		return appointments;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	public Doctor(Long id, String firstName, String lastName, String specialization, User user,
			List<Appointment> appointments) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.specialization = specialization;
		this.user = user;
		this.appointments = appointments;
	}

	public Doctor() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Doctor [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", specialization="
				+ specialization + ", user=" + user + ", appointments=" + appointments + "]";
	}

	
    
}
