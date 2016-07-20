$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.screensection').css({
        'background-position': -wScroll + 'px 0'
    });

    $('.logo').css({
        'transform': 'translate(0px, ' + wScroll / 1.3 + '%)'
    });

    $('.pen').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    // $('.pen').css({
    //     'transform': 'translate('+ wScroll / 2 +'%, 0)'
    // });
    $('.tree').css({
        'transform': 'translate(0px, ' + wScroll / 8 + '%)'
    });
    if (wScroll > $('.albums').offset().top - $(window).height() / 1.5) {
        $('.albums figure').each(function(i) {
            setTimeout(function() {
                $('.albums figure').eq(i).addClass('is-showing');
            }, 150 * (i + 1));
        });
    }
    if (wScroll > $('.large-window').offset().top - $(window).height() / 2) {
        var opacity = wScroll / $('.large-window').offset().top;
        $('.window-tint').css({
            'opacity': opacity
        });

    }
    if (wScroll > $('.blog-posts').offset().top - $(window).height()) {
        var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + 350);
        $('.post-1').css({
            'transform': 'translate(' + offset + 'px ,' + Math.abs(offset * 0.5) + 'px)'
        });
        $('.post-3').css({
            'transform': 'translate(' + Math.abs(offset) + 'px ,' + Math.abs(offset * 0.2) + 'px)'
        });
    }

});
