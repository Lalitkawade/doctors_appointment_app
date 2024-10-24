package com.appt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.appt.entity.Appointment;
import com.appt.entity.Doctor;
import com.appt.entity.Patient;
import com.appt.record.AppointmentRecord;
import com.appt.repository.AppointmentRepository;
import com.appt.repository.DoctorRepository;
import com.appt.repository.PatientRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    public Appointment createAppointment(AppointmentRecord appointmentRecord) {
        Appointment appointment = new Appointment();
        appointment.setDateTime(appointmentRecord.dateTime());
        appointment.setReason(appointmentRecord.reason());

        Doctor doctor = doctorRepository.findById(appointmentRecord.doctor().getId())
        		.orElseThrow();
        Patient patient = patientRepository.findById(appointmentRecord.patient().getId())
                .orElseThrow();

        appointment.setDoctor(doctor);
        appointment.setPatient(patient);

        return appointmentRepository.save(appointment);
    }

    // Additional methods for update, delete, get
}
