package com.appt.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	
	private final JavaMailSender javaMailSender;
	
	public EmailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}
	
	@Async
	public void sendMail(String to, String subject, String body) {
		SimpleMailMessage simpleMessage = new SimpleMailMessage();
		simpleMessage.setTo(to);
		simpleMessage.setFrom("api@live.smtp.mailtrap.io");
		simpleMessage.setSubject(subject);
		simpleMessage.setText(body);
		
		javaMailSender.send(simpleMessage);
		
	}
}
