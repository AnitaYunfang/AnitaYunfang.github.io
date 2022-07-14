        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                $(".header-menu").addClass("is-scroll");
            } else {
                $(".header-menu").removeClass("is-scroll");
            }
        });
