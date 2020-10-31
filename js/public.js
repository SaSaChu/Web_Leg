
 
$(function() {

  $(".i_img_new, .i_img_s").imgLiquid ();

  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('span').click (function () {
      $(this).toggleClass ('s');
    });
  });

  $('.smenu').click(function() {
    $('.smenu_boxs').addClass('smenu_open');
  });

  $('.icon-menu').click(function() {
    $('.main').addClass('nav_hover');
    $('#r_menu_boxs').addClass('nav_open');
    $('#menu_back ').addClass('b_open');
    scrollLock();
  });


  $('#menu_back').click(function() {
    $('.main').removeClass('nav_hover');
    $('#r_menu_boxs').removeClass('nav_open');
    $('#menu_back').removeClass('b_open');
    scrollUnlock();
  });

  $('.icon-close').click(function() {
    $('.main').removeClass('nav_hover');
    $('#r_menu_boxs').removeClass('nav_open');
    $('#menu_back').removeClass('b_open');
    scrollUnlock();
  });

  
});
