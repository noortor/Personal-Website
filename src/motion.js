  $(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    $("#header-content").css("transform",'translate(0px,-'+scrollval/20+'%)');
});
