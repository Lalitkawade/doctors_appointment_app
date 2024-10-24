package com.appt.controller;

import java.util.List;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appt.entity.Appointment;
import com.appt.service.AppointmentService;

@RestController
@CrossOrigin("http://localhost:5000")
@RequestMapping("/patients")
//@PreAuthorize("hasRole('PATIENT')")
public class PatientController {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping("/appointments")
    public ResponseEntity<List<Appointment>> getAppointments(Authentication authentication) {
        //UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        // Fetch patient's appointments based on authenticated user
        return null;
    }

    // Additional endpoints for managing appointments
}