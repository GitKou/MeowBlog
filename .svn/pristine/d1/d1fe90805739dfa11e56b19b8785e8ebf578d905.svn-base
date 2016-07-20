package com.nichijou.springmvcdemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nichijou.springmvcdemo.dao.IUserDao;
import com.nichijou.springmvcdemo.model.User;

@Service
public class UserService {
	@Autowired
	IUserDao userDao;

	public List<User> getAllUser() {
		return userDao.getAllUser();
	}

	public void add(User user) {
		userDao.add(user);
	}

	public User getUserById(int id) {
		return userDao.getUserById(id);
	}

	public void update(User newuser) {
		userDao.update(newuser);		
	}

	public void delete(int id) {
		userDao.delete(id);	
	}

}
