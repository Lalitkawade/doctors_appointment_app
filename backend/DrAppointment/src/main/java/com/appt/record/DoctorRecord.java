package com.appt.record;

import java.util.List;

import com.appt.entity.Appointment;
import com.appt.entity.User;

public record DoctorRecord(String firstName, String lastName, String specialization, User user, List<Appointment> appointments) {
	
}
