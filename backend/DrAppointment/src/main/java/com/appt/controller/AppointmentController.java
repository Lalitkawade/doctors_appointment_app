package com.appt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appt.entity.Appointment;
import com.appt.record.AppointmentRecord;
import com.appt.service.AppointmentService;

@RestController
@CrossOrigin("http://localhost:5000")
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @PostMapping
    //@PreAuthorize("hasAnyRole('DOCTOR', 'PATIENT')")
    public ResponseEntity<Appointment> createAppointment(@RequestBody AppointmentRecord appointmentRecord) {
        Appointment appointment = appointmentService.createAppointment(appointmentRecord);
        return new ResponseEntity<>(appointment, HttpStatus.CREATED);
    }

    // Additional endpoints as needed
}