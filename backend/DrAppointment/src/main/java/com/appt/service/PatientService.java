package com.appt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appt.entity.Patient;
import com.appt.entity.User;
import com.appt.record.PatientRecord;
import com.appt.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private UserService userService;

    public Patient createPatient(PatientRecord patientRecord) {
        User user = new User();
        user.setUsername(patientRecord.user().getUsername());
        user.setPassword(patientRecord.user().getPassword());
        userService.createUser(user, "ROLE_PATIENT");

        Patient patient = new Patient();
        patient.setFirstName(patientRecord.firstName());
        patient.setLastName(patientRecord.lastName());
        patient.setDateOfBirth(patientRecord.dateOfBirth());
        patient.setUser(user);
        patient.setAppointments(patientRecord.appointments());

        return patientRepository.save(patient);
    }

}
