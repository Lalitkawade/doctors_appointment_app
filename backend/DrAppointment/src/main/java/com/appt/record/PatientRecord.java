package com.appt.record;

import java.time.LocalDate;
import java.util.List;

import com.appt.entity.Appointment;
import com.appt.entity.User;

public record PatientRecord(String firstName, String lastName, int age, String ailment, LocalDate dateOfBirth, User user, List<Appointment> appointments) {
	 
}
