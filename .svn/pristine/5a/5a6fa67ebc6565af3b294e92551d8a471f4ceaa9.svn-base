package com.nichijou.springmvcdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nichijou.springmvcdemo.model.User;
import com.nichijou.springmvcdemo.service.UserService;

@Controller
public class UserController {
	@Autowired
	UserService userService;
	
//	请求的url(RequestMapping),传入controller的参数(RequestParam),传到view的参数(Model)
//	@RequestMapping(value="/hello")
//	public String hello(@RequestParam("username") String username, Model model){
//		  model.addAttribute("username", username);
//		  return "hello";
//	}
	
	//实现用户增删改查
	@RequestMapping(value="/select",method=RequestMethod.GET)
	public String select(Model model){
		List<User> userList = userService.getAllUser();
		model.addAttribute("userList",userList);
		return "index.html";
	}
	
	@RequestMapping(value="/add",method=RequestMethod.GET)
	public String add(){
		return "add";
	}
	//新增用户完成后跳转到select页面
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(User user,Model model){
		userService.add(user);
		return "redirect:/select";
	}
	
	@RequestMapping(value="/{userid}",method=RequestMethod.GET)
	public String update(@PathVariable String userid,Model model){
		User user = userService.getUserById(Integer.parseInt(userid));
		model.addAttribute("user",user);
		return "update";
	}
	
	@RequestMapping(value="/update",method=RequestMethod.POST)
	public String update(User newuser,Model model){
		userService.update(newuser);
		return "redirect:/select";
	}
	
	@RequestMapping(value="/delete/{userid}",method=RequestMethod.GET)
	public String add(@PathVariable String userid,Model model){
		userService.delete(Integer.parseInt(userid));
		return "redirect:/select";
	}
}
