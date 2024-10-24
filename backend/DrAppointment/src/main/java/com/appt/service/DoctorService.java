package com.appt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appt.entity.Doctor;
import com.appt.entity.User;
import com.appt.record.DoctorRecord;
import com.appt.repository.DoctorRepository;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private UserService userService;

    public Doctor createDoctor(DoctorRecord doctorRecord) {
        User user = new User();
        user.setUsername(doctorRecord.user().getUsername());
        user.setPassword(doctorRecord.user().getPassword());
        userService.createUser(user, "ROLE_DOCTOR");

        Doctor doctor = new Doctor();
        doctor.setFirstName(doctorRecord.firstName());
        doctor.setLastName(doctorRecord.lastName());
        doctor.setSpecialization(doctorRecord.specialization());
        doctor.setAppointments(doctorRecord.appointments());
        doctor.setUser(user);

        return doctorRepository.save(doctor);
    }
}