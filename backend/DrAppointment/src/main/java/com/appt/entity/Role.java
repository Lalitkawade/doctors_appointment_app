package com.appt.entity;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	private String name; // e.g., ROLE_ADMIN, ROLE_DOCTOR, ROLE_PATIENT

	@ManyToMany(mappedBy = "roles")
	private Set<User> users = new HashSet<>();

	public String getName() {
		return name;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public Role(String name, Set<User> users) {
		super();
		this.name = name;
		this.users = users;
	}

	public Role() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Role [name=" + name + ", users=" + users + "]";
	}
	
}
