package com.nichijou.springmvcdemo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.nichijou.springmvcdemo.model.Post;
import com.nichijou.springmvcdemo.model.PostTag;

@Repository
public interface IPostDao {
	public List<Post> getAllPost();

	public int addPost(Post post);

	public int addPostTag(PostTag posttag);

	public Post getPostById(int postid);

	public int addPageViews(int postid);

	public List<Post> getPostAbstract(@Param("offset") int offset ,@Param("limit") int limit);
}
