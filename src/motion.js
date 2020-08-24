$(window).scroll(function () {
  var scrollval = $(this).scrollTop(); // It will return scroll value
  $(".header-img").css("transform", "translate(0px,-" + scrollval / 20 + "%)");
});
