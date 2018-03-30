$(function() {
    $(document).on("scroll onload", onScroll);
    //smoothscroll
    $('.sideNav a').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('li').each(function() {
            $(this).removeClass('active');
        });
        $(this).parent().addClass('active');

        var target = $(this).attr('data-href'),
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top -100
        }, 500, 'swing', function() {
            $(document).on("scroll", onScroll);
        });
    });
});

$(window).load(function() {
    $('.sideNav li:first-child a').trigger('click');
    $('.overlay').delay(3000).fadeOut(300, function() {
        $('html,body').css({ 'overflow': 'visible' });
        $('#invest-carouel .owl-item').eq(3).addClass('animated');
    });

});

var count = 0;

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    var weInvestpos = $('.weInvest h3').offset().top - 600;
    $('.sideNav a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("data-href"));
        if (refElement.position().top-200 <= scrollPos && refElement.position().top-200 + refElement.outerHeight(true) > scrollPos) {
            $('.sideNav ul li').removeClass("active");
            currLink.parent().addClass("active");
        } else {
            currLink.parent().removeClass("active");
        }

    });

    if (weInvestpos < scrollPos) {
        count++;
        if (count < 2) {
            weInvest();
        }

    }
}
