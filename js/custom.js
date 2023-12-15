$(function () {
    $('.slide_wrap').slick({
        fade: true,
        autoplay: true,
        pauseOnHover: false,
        arrows: false,
    });

    $('.slide_wrap').on('afterChange', function (s, e, c) {
        $('.menu li').removeClass('on');
        $('.menu li').eq(c).addClass('on')
    })

    $('.menu li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.slide_wrap').slick('slickGoTo', idx);
    })

    $('.game_slide_wrap').slick({
        autoplay: false,
        pauseOnHover: false,
        arrows: false,
        slidesToShow: 3,
        dots: true,
    });
})