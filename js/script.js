/*
 **********************************************************
 * OPAQUE NAVBAR SCRIPT
 **********************************************************
 */

 // Toggle tranparent navbar when the user scrolls the page
//
//  $(window).scroll(function() {
//    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
//    {
//        $('.opaque-navbar').addClass('opaque');
//    } else {
//        $('.opaque-navbar').removeClass('opaque');
//    }
// });
// $('.carousel').carousel({
//   interval: 6000,
//   pause: "false"
// });
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
