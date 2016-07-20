package com.nichijou.springmvcdemo.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nichijou.springmvcdemo.dao.ILikevoteDao;
import com.nichijou.springmvcdemo.dao.IPostDao;
import com.nichijou.springmvcdemo.dao.ITagDao;
import com.nichijou.springmvcdemo.model.Likevote;
import com.nichijou.springmvcdemo.model.Post;
import com.nichijou.springmvcdemo.model.PostTag;
import com.nichijou.springmvcdemo.model.Tag;

@Service
public class ApiService {
	@Autowired
	ILikevoteDao likevoteDao;
	@Autowired
	ITagDao tagDao;

	@Autowired
	IPostDao postDao;

	public int getLikeByIp(String ip) {
		Likevote likevote = new Likevote();
		likevote.setIpaddress(ip);
		return likevoteDao.getLikeNum(likevote);

	}

	public int getAllLike() {
		Likevote likevote = new Likevote();
		return likevoteDao.getLikeNum(likevote);

	}

	public int addLike(String ip) {
		Likevote likevote = new Likevote();
		likevote.setIpaddress(ip);
		return likevoteDao.addLike(likevote);
	}

	public List<Tag> getAllTag() {
		return tagDao.getAllTag();

	}

	public int addTag(String tagname) {
		Tag tag = new Tag();
		tag.setTagname(tagname);
		tagDao.addTag(tag);
		return tag.getId();
	}

	public List<Post> getAllPost() {
		List<Post> posts = postDao.getAllPost();
		for(Post p :posts){
			p.setTags(tagDao.getTagsByPostId(p.getId()));
		}
		return posts;

	}

	public int addPost(Post post) {
		Date date = new Date();
		Timestamp timestrap = new Timestamp(date.getTime());
		System.out.println(timestrap);
		post.setPost_time(timestrap.toString());
		try {
			postDao.addPost(post);

			for (int tag_id : post.getTags_id()) {
				PostTag posttag = new PostTag();
				posttag.setPost_id(post.getId());
				posttag.setTag_id(tag_id);
				postDao.addPostTag(posttag);

			}
		} catch (Exception e) {
		    e.printStackTrace();
			return 0;
		}
		return 1;
	}

	public Post getPostById(int postid) {
		Post post = postDao.getPostById(postid);
		post.setTags(tagDao.getTagsByPostId(postid));
		//点击量+1
		postDao.addPageViews(postid);
		return post;
	}

	public List<Post> getPostAbstract( String offset, String limit) {
		List<Post> posts = postDao.getPostAbstract(Integer.parseInt(offset),Integer.parseInt(limit));
		for(Post p :posts){
			p.setTags(tagDao.getTagsByPostId(p.getId()));
		}
		return posts;
	}
}
