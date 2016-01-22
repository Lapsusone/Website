var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;

var sticky_navigation = function(){
    var scroll_top = $(window).scrollTop();

    if (scroll_top > sticky_navigation_offset_top) {
        $('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0,'box-shadow':'0 2px 10px rgba(0, 0, 0, .5)' });
    } else {
        $('#sticky_navigation').css({ 'position': 'absolute', 'top':200,'box-shadow':'none'});
    }
};

sticky_navigation();

$(window).scroll(function() {
    sticky_navigation();
});


