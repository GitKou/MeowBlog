package com.nichijou.springmvcdemo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.nichijou.springmvcdemo.model.Post;
import com.nichijou.springmvcdemo.model.Tag;
import com.nichijou.springmvcdemo.service.ApiService;

@Controller
@RequestMapping("/api")
public class ApiController {

	@Autowired
	ApiService apiService;

	@RequestMapping("/getlike")
	@ResponseBody
	public String getLike(Model model) {

		int likenum = apiService.getAllLike();

		Gson gson = new Gson();
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("like", likenum);
		map.put("success", 1);
		return gson.toJson(map);

	}

	@RequestMapping("/addlike")
	@ResponseBody
	public String addLike(HttpServletRequest request) {
		String ip = request.getRemoteAddr();

		int isRepeatIp = apiService.getLikeByIp(ip);

		Gson gson = new Gson();
		Map<String, Integer> map = new HashMap<String, Integer>();

		if (isRepeatIp == 0) {
			apiService.addLike(ip);
			map.put("like", apiService.getAllLike());
			map.put("success", 1);
		} else {

			map.put("like", apiService.getAllLike());
			map.put("success", 0);
		}

		return gson.toJson(map);

	}

	@RequestMapping("/getTag")
	@ResponseBody
	public String getTag(Model model) {

		List<Tag> tags = apiService.getAllTag();
		Gson gson = new Gson();
		return gson.toJson(tags);

	}

	@RequestMapping("/addTag")
	@ResponseBody
	public String addTag(@RequestParam("tagname") String tagname, Model model) {
		System.out.println(tagname);
		int result = apiService.addTag(tagname);
		System.out.println(result);
		Gson gson = new Gson();
		return gson.toJson(result);

	}

	@RequestMapping("/getPost")
	@ResponseBody
	public String getPost(Model model) {

		List<Post> posts = apiService.getAllPost();
		Gson gson = new Gson();
		// 设置html不转义
		gson = new GsonBuilder().disableHtmlEscaping().create();
		String json = gson.toJson(posts);
		return json;

	}
	
	@RequestMapping("/getPostAbstract")
	@ResponseBody
	public String getPostAbstract(String offset,String limit,Model model) {
		List<Post> posts = apiService.getPostAbstract(offset,limit);
		Gson gson = new Gson();
		// 设置html不转义
		gson = new GsonBuilder().disableHtmlEscaping().create();
		String json = gson.toJson(posts);
		return json;

	}

	@RequestMapping("/getPost/{postid}")
	@ResponseBody
	public String getPostById(@PathVariable String postid, Model model) {

		Post post = apiService.getPostById(Integer.parseInt(postid));
		Gson gson = new Gson();
		// 设置html不转义
		gson = new GsonBuilder().disableHtmlEscaping().create();
		String json = gson.toJson(post);
		return json;

	}

	@RequestMapping("/addPost")
	@ResponseBody
	public String addPost(@RequestBody Post post, Model model) {
		int result = apiService.addPost(post);
		Gson gson = new Gson();
		String json = gson.toJson(result);
		return json;

	}
}
