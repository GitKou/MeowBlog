package com.nichijou.springmvcdemo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.nichijou.springmvcdemo.model.User;

@Repository
public interface IUserDao {

	public List<User> getAllUser();

	public void add(User user);
	
	//可以用param指定多个参数或为参数命名
	public User getUserById(@Param("id")int id);

	public void update(User newuser);
	
	public void delete(int id);


}
