package com.nichijou.springmvcdemo.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.nichijou.springmvcdemo.model.Tag;

@Repository
public interface ITagDao {
	public List<Tag> getAllTag();

	public int addTag(Tag tag);

	public List<String> getTagsByPostId(int postid);
}
