package com.appt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appt.entity.Doctor;
import com.appt.entity.Patient;
import com.appt.record.DoctorRecord;
import com.appt.record.PatientRecord;
import com.appt.service.DoctorService;
import com.appt.service.PatientService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:5000")
//@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private DoctorService doctorService;

    @Autowired
    private PatientService patientService;

    @PostMapping("/doctors")
    public ResponseEntity<Doctor> createDoctor(@RequestBody DoctorRecord doctorRecord) {
        Doctor doctor = doctorService.createDoctor(doctorRecord);
        return new ResponseEntity<>(doctor, HttpStatus.CREATED);
    }

    @PutMapping("/doctors/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable Long id, @RequestBody DoctorRecord doctorRecord) {
        // Implement update logic
    	return null;
    }

    @PostMapping("/patients")
    public ResponseEntity<Patient> createPatient(@RequestBody PatientRecord patientRecord) {
        Patient patient = patientService.createPatient(patientRecord);
        return new ResponseEntity<>(patient, HttpStatus.CREATED);
    }

    @PutMapping("/patients/{id}")
    public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestBody PatientRecord patientRecord) {
        // Implement update logic
    	return null;
    }
}
