package com.nichijou.springmvcdemo.model;

import java.util.List;

public class Post {
	private int id;
	private String title;
	private int pageviews;
	private String post_time;
	private String content;
	private String post_abstract;
	private List<String> tags;
	private List<Integer> tags_id;
	
	private String limit;
	private String offset;
	
	public List<Integer> getTags_id() {
		return tags_id;
	}
	public void setTags_id(List<Integer> tags_id) {
		this.tags_id = tags_id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public int getPageviews() {
		return pageviews;
	}
	public void setPageviews(int pageviews) {
		this.pageviews = pageviews;
	}
	public String getPost_time() {
		return post_time;
	}
	public void setPost_time(String timestrap) {
		this.post_time = timestrap;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getPost_abstract() {
		return post_abstract;
	}
	public void setPost_abstract(String post_abstract) {
		this.post_abstract = post_abstract;
	}
	public String getLimit() {
		return limit;
	}
	public void setLimit(String limit) {
		this.limit = limit;
	}
	public String getOffset() {
		return offset;
	}
	public void setOffset(String offset) {
		this.offset = offset;
	}
	public List<String> getTags() {
		return tags;
	}
	public void setTags(List<String> tags) {
		this.tags = tags;
	}
	
}
