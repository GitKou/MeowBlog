function loadMusic(){$("musicplayer")&&$("#musicplayer").append('<iframe frameborder="no"border="0"marginwidth="0"marginheight="0"width=330 height=110 src="http://music.163.com/outchain/player?type=0&id=127487814&auto=0&height=90"></iframe>')}$(window).load(function(i){if(setTimeout(loadMusic,300),localStorage.isFirstVisit){if(localStorage.isFirstVisit&&"no"==localStorage.isFirstVisit){localStorage.isFirstVisit="no",console.log("欢迎回来");var t=document.getElementsByClassName("subdescription")[0];t.innerHTML="嘿~我的老伙计~~欢迎回来"}}else console.log("初次"),localStorage.isFirstVisit="no"}),$(document).ready(function(i){document.addEventListener("visibilitychange",document.getElementsByClassName("avatar")[0].onmouseover=function(){this.classList.add("animated","rotate-img")},document.getElementsByClassName("avatar")[0].onmouseout=function(){this.classList.remove("animated","rotate-img")}),i(function(){i(window).scroll(function(){i(window).scrollTop()>250?i("#backTop").fadeIn(500):i("#backTop").fadeOut(300)}),i("#backTop").click(function(){return i("body, html").animate({scrollTop:0},1e3),!1})}),i.getJSON("api/getlike",function(t){i(".like-vote span").html(t.like)}),i(".like-vote").click(function(){i.getJSON("api/addlike",function(t){t.success?(i(".like-vote span").html(t.like),i(".like-title").html("我也喜欢你")):i(".like-title").html("你的爱我已经感受到了~")})})});