$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.screensection').css({
        'background-position': -wScroll + 'px 0'
    });

    $('.logo').css({
        'transform': 'translate(-50%, ' + wScroll / 1.3 + '%)'
    });

    $('.bird').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.tree').css({
        'transform': 'translate(0px, -' + wScroll / 8 + '%)'
    });
    /*顺序显示相册图片*/
    if (wScroll > $('.albums').offset().top - $(window).height() / 1.5) {
        $('.albums figure').each(function(i) {
            setTimeout(function() {
                $('.albums figure').eq(i).addClass('is-showing');
            }, 150 * (i + 1));
        });
    }
    /*滚动改变透明度*/
    if (wScroll > $('.large-window').offset().top - $(window).height() / 2) {
        var opacity = wScroll / $('.large-window').offset().top;
        $('.window-tint').css({
            'opacity': opacity
        });

    }
    /*两边分开*/
    if (wScroll > $('.blog-posts').offset().top - $(window).height()) {
        var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + 350);
        $('.post-1').css({
            'transform': 'translate(' + offset + 'px ,' + Math.abs(offset * 0.5) + 'px)'
        });
        $('.post-3').css({
            'transform': 'translate(' + Math.abs(offset) + 'px ,' + Math.abs(offset * 0.5) + 'px)'
        });
    }

});
