$(document).ready(function(){       
    var scroll_pos = 0;
        $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 80) {
                $(".slider .navbar-default").css('background-color', '#ef4e29');
            } else {
                // $(".slider .navbar-default").css('background-color', 'transparent');
            }
        });
});
