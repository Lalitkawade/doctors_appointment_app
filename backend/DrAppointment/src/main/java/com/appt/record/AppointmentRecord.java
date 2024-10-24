package com.appt.record;

import java.time.LocalDateTime;

import com.appt.entity.Doctor;
import com.appt.entity.Patient;
	
public record AppointmentRecord(LocalDateTime dateTime, String reason, Doctor doctor, Patient patient) {
}
