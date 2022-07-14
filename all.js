$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 400) {
        $(".fix-scroll").addClass("fix-scroll-show");
    } else {
        $(".fix-scroll").removeClass("fix-scroll-show");
    }
});

$(function() {
    $("#gotop").click(function(){
        $("html,body").animate({scrollTop:0},900);
        return false;
    });
});
