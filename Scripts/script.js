var social=function (){
    var social=['twitter','tumblr','vine','flickr','skype','ted'];
    var source=new Array(social.length);
    var temp=new Array(social.length);

    for(var i=0;i<social.length;i++){
        source[i]=document.getElementById(social[i]).getAttribute('src');
    }
    for(var i=0;i<social.length;i++){
        temp[i]=new Image();
        temp[i].src =source[i].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover");
    }

    $(document.getElementById(social[0])).hover(function() {
        $(this).attr('src',source[0].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover"));
    },function() {
        $(this).attr('src',source[0]);
    });
    $(document.getElementById(social[1])).hover(function() {
        $(this).attr('src',source[1].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover"));
    },function() {
        $(this).attr('src',source[1]);
    });
    $(document.getElementById(social[2])).hover(function() {
        $(this).attr('src',source[2].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover"));
    },function() {
        $(this).attr('src',source[2]);
    });
    $(document.getElementById(social[0])).hover(function() {
        $(this).attr('src',source[0].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover"));
    },function() {
        $(this).attr('src',source[0]);
    });
    $(document.getElementById(social[3])).hover(function() {
        $(this).attr('src',source[3].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover"));
    },function() {
        $(this).attr('src',source[3]);
    });
    $(document.getElementById(social[4])).hover(function() {
        $(this).attr('src',source[4].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover"));
    },function() {
        $(this).attr('src',source[4]);
    });
    $(document.getElementById(social[5])).hover(function() {
        $(this).attr('src',source[5].replace(/inactive_menu/g,"active").replace(/Inactive_menu/g,"Hover"));
    },function() {
        $(this).attr('src',source[5]);
    });
};
var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
var window_width=$(window).width(),
    window_height=$(window).height();
var sticky_navigation = function(){
    var scroll_top = $(window).scrollTop();

    if (scroll_top > sticky_navigation_offset_top) {
        $('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0,'box-shadow':'0 7px 10px rgba(0, 0, 0, .5)','background-color':'rgba(255,255,255,.9)'});
    } else {
        $('#sticky_navigation').css({ 'position': 'absolute', 'top':200,'box-shadow':'none','background-color':'rgba(255,255,255,1)'});
    }
};
social();
sticky_navigation();
var home_section=function(){
    document.getElementById('home').style.height=($(window).height()-$('header').height())+"px";
};
var sections=function (){
    document.getElementById('interests').style.height=($(window).height()-($('#sticky_navigation').height()))+"px";
    document.getElementById('resume').style.height=($(window).height()-($('#sticky_navigation').height()))+"px";
    document.getElementById('contact').style.height=($(window).height()-($('#sticky_navigation').height()))+"px";
};
$(document).ready(function(){
    home_section();
    sections();
    $(window).resize(function(){
        home_section();
        sections();

    });
    $(window).scroll(function(){
        sticky_navigation();
        if ($(this).scrollTop() > 200) {
            $('#logomenu').fadeIn();
        } else {
            $('#logomenu').fadeOut();
        }
        if($(this).scrollTop() > 70) {
            $('#temp').fadeOut();
        } else {
            $('#temp').fadeIn();
        }
    });

    $('#logomenu').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


