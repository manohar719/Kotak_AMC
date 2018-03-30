/*-------------------Global Function ----------------*/

$(document).ready(function() {
    initializeCarousel(); /*Initalize owl carosuel on load banner*/
    onLoadAnimation() /*On load page blocks animations AOS initialize*/
    menuClick(); /*Resposnsive toggle button*/
    blurFocus(); /*Input feild placeholder animation*/
    MenuClick(); /*Menu links initliazing owl slider*/
    formValidation(); /*form validation*/
    selectFocusAnimation();

    $('.formField .submit').click(function(e) {
        e.preventDefault();

    });

    if ($(window).width() < 767) {

        accordions();
    }
    if ($(window).width() < 980) {
        $(".owl-item").each(function(index) {
            $(this).find(".lhsBox h2").insertBefore($(this).find('.rhsBox'));
        });
    } else {
        $(".owl-item").each(function(index) {
            $(this).find(".lhsBox h2").insertBefore($(this).find('h4'));
        });
    }
});

$(window).load(function() {
    setTimeout(emergingAnimation, 3000);
    setTimeout(incomeFundAnimation, 10000);
    setTimeout(taxSavingAnimation, 10000);

});

function selectFocusAnimation() {
    $(".flyingCloth").fadeOut();
    $(".nav li").click(function() {
        $(".flyingCloth").fadeOut();
    });
    $(".nav > ul > li:last").click(function() {
        setInterval(function() {
            $(".flyingCloth").fadeIn();
            $(".flyingCloth").delay(1500).addClass("flyAnimate");
        }, 2500);
    });

}

function taxSavingAnimation() {
    if ($(window).width() < 480) {
        $(".taxCoin").animate({
            top: '62%',
            left: '35%'
        }, 1000, function() {
            $(".balTax").addClass('active').delay(2000).queue(function() {
                $(".balTax,.balanceStand,.taxCoin").hide().delay(2000).queue(function() {
                    $(".taxCoin").css({ top: "40%", left: "29%" })
                    $(".balTax").removeClass('active')
                    $(".balTax,.balanceStand,.taxCoin").stop(true, false).show(1000, function() {
                        taxSavingAnimation()
                    });

                });
            });
        });
    } else {
        $(".taxCoin").animate({
            top: '57%',
            left: '57%'
        }, 1000, function() {
            $(".balTax").addClass('active').delay(2000).queue(function() {
                $(".balTax,.balanceStand,.taxCoin").hide().delay(2000).queue(function() {
                    $(".taxCoin").css({ top: "38%", left: "35%" })
                    $(".balTax").removeClass('active')
                    $(".balTax,.balanceStand,.taxCoin").stop(true, false).show(1000, function() {
                        taxSavingAnimation()
                    });

                });
            });
        });
    }

}

function emergingAnimation() {

    if ($(window).width() < 480) {
        $('.coinRs').stop(true, false).show().animate({
            top: '80%',
            left: '57%',
            opacity: '0'
        }, 500);
        $('.rupee1').stop(true, false).show().animate({
            opacity: '1'
        }, 750);
        $('.graphAnimation').stop(true, false).show().animate({
            width: '180px'
        }, 900, function() {
            $('.blg2').animate({
                opacity: '1'
            }, 1000, function() {
                $('.rupee2, .rupee3').animate({
                    opacity: '1'
                }, 1200)
            });
            $('.graphAnimation').delay(500).animate({
                width: '248px'
            }, 1200, function() {
                $('.blg3').animate({
                    opacity: '1'
                }, 800, function() {
                    $(' .rupee4, .rupee5, .rupee6, .rupee7').animate({
                        opacity: '1'
                    }, 850, function() {
                        $('.coinRs').hide();
                        //$('.graphAnimation').hide();
                        setTimeout(function() {
                            $('.coinRs').css({ "top": "45%", "left": "57%", "opacity": "1" });
                            $('.graphAnimation').css("width", "80px")
                            $('.rupee1,.blg2,.blg3,.rupee2, .rupee3, .rupee4, .rupee5, .rupee6, .rupee7').css("opacity", 0)
                            emergingAnimation()
                        }, 2000);
                    })
                });

            });
        });
    } else {
        $('.coinRs').stop(true, false).show().animate({
            top: '81%',
            left: '84%',
            opacity: '0'
        }, 500);
        $('.rupee1').stop(true, false).show().animate({
            opacity: '1'
        }, 750);
        $('.graphAnimation').stop(true, false).show().animate({
            width: '275px'
        }, 900, function() {
            $('.blg2').animate({
                opacity: '1'
            }, 1000, function() {
                $('.rupee2, .rupee3').animate({
                    opacity: '1'
                }, 1200)
            })
        });
        $('.graphAnimation').delay(500).animate({
            width: '405px'
        }, 1200, function() {
            $('.blg3').animate({
                opacity: '1'
            }, 800, function() {
                $(' .rupee4, .rupee5, .rupee6, .rupee7').animate({
                    opacity: '1'
                }, 850, function() {
                    $('.coinRs').hide();
                    //$('.graphAnimation').css("width", "155px").hide();
                    setTimeout(function() {
                        $('.coinRs').css({ "top": "41%", "left": "90%", "opacity": "1" });
                        $('.graphAnimation').css("width", "155px");
                        $('.rupee1,.blg2,.blg3,.rupee2, .rupee3, .rupee4, .rupee5, .rupee6, .rupee7').css("opacity", 0)
                        emergingAnimation()
                    }, 2000);
                })
            });

        });
    }
}

function incomeFundAnimation() {
    setInterval(function() {
        $('.incomeFundBanner').parent("#invest-carouel .active").removeClass('animated');
        setTimeout(function() {
            $('.incomeFundBanner').parent("#invest-carouel .active").addClass('animated');
        }, 100);
    }, 15000);
}


function initializeCarousel() {
    $('#invest-carouel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        dots: false,
    });

    $('#whyInvest').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        slideBy: 2,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
    $('#invest-carouel').on('translate.owl.carousel', function(e) {
        idx = e.item.index;
        $('#invest-carouel').find('.owl-item').removeClass('animated');
        $('#invest-carouel').find('.owl-item').eq(idx).addClass('animated');
    });
}


function MenuClick() {
    $('.mainNav').on('click', 'a', function(e) {
        e.preventDefault();
        $(this).parent().siblings().find('a').removeClass('active');
        $('#invest-carouel').trigger('to.owl.carousel', $(this).parent().index());
        $(this).addClass('active');
        if ($('.mainNav').hasClass('open')) {
            $('.mainNav').removeClass('open');
            $('.nav').fadeOut('slow');
        }
    });
}


function weInvest() {

    if ($(window).width() < 767) {
        $('.roundBlock').addClass('active');
        $('.line').addClass('active');
    } else {

        $('.roundBlock').each(function(index) {
            $(this).find('.mover').delay(1500 * index).fadeIn(100, function() {
                $(this).addClass('active');
                $(this).siblings('.roundElement').delay(2000).fadeIn(300, function() {
                    $(this).find('.line').addClass('active').parents('.roundBlock').addClass('active');
                });
            });
        });

    }

}




function accordions() {
    //$(".pathImage .popup").first().css('display', 'block');
    $('.pathImage a').click(function(e) {
        e.preventDefault();

        $(this).toggleClass('m-active');
        $('.pathImage .roundBlock').not(this).removeClass('m-active');

        var a = $(this).children('.popup');
        $(a).slideToggle('fast');
        $(".pathImage .popup").not(a).slideUp('fast');
    });


}



function blurFocus() {
    $(".inputField").focusin(function() {
        $(this).parents('.inputCustom').addClass('inputFilled');
    });

    $(".inputField").focusout(function() {
        $(this).parents('.inputCustom').addClass('inputFilled');
        if ($(this).val() === '') {
            $(this).parents('.inputCustom').removeClass('inputFilled');
        }
    });
}


function menuClick() {
    $('.menuIcon span').click(function() {
        $('.nav').fadeToggle('slow');
        $('.mainNav').toggleClass('open');
    });
}


function onLoadAnimation() {
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000
    });
}


function responsiveSlider() {
    if ($('.mobile .mobileSlider').length > 0) {
        $('.mobile .mobileSlider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            items: 1,
            mouseDrag: false
        });
    }
}

function formValidation() {

    var errors = false;


    $('.formField input').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            error_div.html('This field is required.');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error')
            errors = false;
        }
    });
    $(".formField select").on("change", function() {
        var city = $("#city");
        if (city.val() == "City") {
            //If the "Please Select" option is selected display error.
            alert("Please select an option!");
            return false;
        }
        return true;
    });

    $('.numbersOnly').keypress(function(e) {
        var error_div = $(this).parent().find('.error_message');
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            error_div.html('Number only.');
            error_div.css('display', 'block');
            return false;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
        }
    });

    $('.email').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.email_validation($(this).val())) {
            error_div.html('Please enter: email');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
        } else {
            error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
            errors = false;
        }
    });



};



$.empty_field_validation = function(field_value) {
    if (field_value.trim() == '') return false;
    return true;
}

$.email_validation = function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function(i, field) {
        console.log(i);
        console.log(field);
    });
    return o;
};