$(window).load(function($) { setTimeout(loadMusic, 300);
    if (!localStorage.isFirstVisit) { console.log("\u521d\u6b21");
        localStorage.isFirstVisit = "no" } else if (localStorage.isFirstVisit && localStorage.isFirstVisit == "no") { localStorage.isFirstVisit = "no";
        console.log("\u6b22\u8fce\u56de\u6765");
        var p = document.getElementsByClassName("subdescription")[0];
        p.innerHTML = "\u563f~\u6211\u7684\u8001\u4f19\u8ba1~~\u6b22\u8fce\u56de\u6765" } });
$(document).ready(function($) {
    document.addEventListener("visibilitychange", document.getElementsByClassName("avatar")[0].onmouseover = function() { this.classList.add("animated", "rotate-img") }, document.getElementsByClassName("avatar")[0].onmouseout = function() { this.classList.remove("animated", "rotate-img") });
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 250) $("#backTop").fadeIn(500);
            else $("#backTop").fadeOut(300) });
        $("#backTop").click(function() {
            $("body, html").animate({ scrollTop: 0 },
                1E3);
            return false
        })
    });
    $.getJSON("api/getlike", function(data) { $(".like-vote span").html(data.like) }), $(".like-vote").click(function() { $.getJSON("api/addlike", function(data) { data.success ? ($(".like-vote span").html(data.like), $(".like-title").html("\u6211\u4e5f\u559c\u6b22\u4f60")) : $(".like-title").html("\u4f60\u7684\u7231\u6211\u5df2\u7ecf\u611f\u53d7\u5230\u4e86~") }) })
});

function loadMusic() { $("musicplayer") && $("#musicplayer").append('<iframe frameborder="no"border="0"marginwidth="0"marginheight="0"width=330 height=110 src="http://music.163.com/outchain/player?type=0&id=127487814&auto=0&height=90"></iframe>') };
