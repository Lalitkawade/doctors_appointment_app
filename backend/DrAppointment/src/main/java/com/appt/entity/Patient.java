package com.appt.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "patients")
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String firstName;
    private String lastName;
	private int age;
	private String ailment;
	private LocalDate dateOfBirth;
	// One-to-One relationship with User
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // One-to-Many relationship with Appointments
    @OneToMany(mappedBy = "patient")
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

	public int getAge() {
		return age;
	}

	public String getAilment() {
		return ailment;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
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

	public void setAge(int age) {
		this.age = age;
	}

	public void setAilment(String ailment) {
		this.ailment = ailment;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setAppointments(List<Appointment> appointments) {
		this.appointments = appointments;
	}

	public Patient(Long id, String firstName, String lastName, int age, String ailment, LocalDate dateOfBirth,
			User user, List<Appointment> appointments) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.ailment = ailment;
		this.dateOfBirth = dateOfBirth;
		this.user = user;
		this.appointments = appointments;
	}

	public Patient() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", ailment=" + ailment + ", dateOfBirth=" + dateOfBirth + ", user=" + user + ", appointments="
				+ appointments + "]";
	}

	
	
    
}
