$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#logomenu').fadeIn();
        } else {
            $('#logomenu').fadeOut();
        }
    });

    $('#logomenu').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});