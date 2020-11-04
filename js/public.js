
 
$(function() {

  // 圖片縮放
  $(".i_img_new, .i_img_s, .p_img_new, .p_banner_boxs460").imgLiquid ();

  // 手機選單
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

  
  // 手風琴
  var oneOpen = true;

  // 這裡就看你怎麼命名就改就好
  $('#accordion .p_page').each (function () {
    // 內容不用看
    $(this).data ('height', $(this).outerHeight ());
    $(this).get (0).$span = $(this).find ('>span');

    
    $(this).get (0).run = function () {
      if ($(this).hasClass ('show')) $(this).css ({ height: $(this).data ('height') }) && $(this).hasClass ('show') && oneOpen && $(this).siblings ().removeClass ('show').each (function () { if ($(this).get (0).$span) $(this).css ({ height: $(this).get (0).$span.outerHeight (true) }); });
      else $(this).css ({ height: $(this).get (0).$span.outerHeight (true) });
    }.bind ($(this));

    $(this).get (0).$span.click (function () {
      if ($(this).hasClass ('show')) $(this).removeClass ('show');
      else $(this).addClass ('show');
      $(this).get (0).run ();
    }.bind ($(this)));
    
    $(this).get (0).run ();
  });

});
