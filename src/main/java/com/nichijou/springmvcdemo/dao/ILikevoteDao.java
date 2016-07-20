package com.nichijou.springmvcdemo.dao;

import org.springframework.stereotype.Repository;

import com.nichijou.springmvcdemo.model.Likevote;

@Repository
public interface ILikevoteDao {

	public int getLikeNum(Likevote likevote);
	
	public int addLike(Likevote likevote);
}
