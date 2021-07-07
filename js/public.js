$(function() {

   // 光箱
  $('.showModel').click(function() {
    $('#myModel').addClass('showModel')

    $('#myModel .model_boxs.box_' + $(this).data('id')).addClass('show').siblings().removeClass('show')
  });

  $('.btn_close, .t-close, .btn_delete').click(function() {
    $('#myModel').removeClass('showModel')
  })


  // table點選切換tab
  $('.ba').click(function() {
    $('.ba').removeClass ('h');
    $(this).addClass ('h');

    $('.partnersbox').removeClass('partnershow');
    $('.partnersbox').eq($(this).index()).addClass('partnershow');
   });

   $('.ba').eq (0).click();

   // table點選切換tab(2)
  // $('.table_step').click(function() {
  //   $('.table_step').removeClass ('t-s');
  //   $(this).addClass ('t-s');

  //   $('.stepbox').removeClass('stepshow');
  //   $('.stepbox').eq($(this).index()).addClass('stepshow');
  //  });

   $('.table_step').eq (0).click();

  // 圖片縮放
  // $(".i_img_new, .i_img_s, .p_img_new, .p_banner_boxs460, .p_img_s, .p_i_h360, .img_about_pic, .in_ban, .img_run").imgLiquid ();
  $(".p_img_new, .p_banner_boxs460, .p_img_s, .p_i_h360, .img_about_pic, .in_ban, .img_run").imgLiquid ();

  
  // 手機選單
  $('#r_menu_boxs').each (function () {
    var $that = $(this);
    $that.find ('.m-menu-t').click (function () {
      $(this).toggleClass ('s');
    });
  });

  $('.icon-menu').click(function() {
    // $('.main').addClass('nav_hover');
    $('#r_menu_boxs').addClass('nav_open');
    // $('#menu_back ').addClass('b_open');
    // scrollLock();
  });

  $('.icon-close').click(function() {
    // $('.main').removeClass('nav_hover');
    $('#r_menu_boxs').removeClass('nav_open');
    // $('#menu_back').removeClass('b_open');
    // scrollUnlock();
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

  $('.i_banner_boxs').each(function() {
    let $banner = $(this);

    let total = parseInt($banner.attr('data-total'), 10) // 取出全部有多少個
    
    // 產生與定義下方的點點點
    let $points = $(Array.apply(null, Array(total)).map(_ => $('<label />').click(function() {
      $banner.attr('data-index', $points.index($(this)) + 1)
    }))).map($.fn.toArray).appendTo($banner.find('.points'))

    // 左箭頭元素
    $banner.find('.left').click(_ => {
      let index = parseInt($banner.attr('data-index'), 10) // 取出目前值
      if (index == 1) { // 最左邊了，跳到最後一張
        $banner.attr('data-index', total)
      } else {
        $banner.attr('data-index', index - 1)
      }
    })

    // 右箭頭元素
    let $right = $banner.find('.right').click(_ => {
      let index = parseInt($banner.attr('data-index'), 10) // 取出目前值
      if (index == total) { // 最右邊了，跳到第一張
        $banner.attr('data-index', 1)
      } else {
        $banner.attr('data-index', index + 1)
      }
    })

    // 自動播放，每七秒鐘 往右一張
    setInterval(_ => $right.click(), 5 * 1000)
  });


  // 計數器
  $.fn.countUp && $('.counter').countUp();

  // 圖片左右輪播
  $('.carousel').each(function() {
    let $carousel = $(this)

    let $left = $carousel.find('.left')
    let $right = $carousel.find('.right')
    let $images = $carousel.find('.images')

    // 定義點擊圖片跳大圖
    $images.find('.image[data-src]').click(function() {
      // 取出所有圖片網址與點擊網址
      let images = $images.find('.image[data-src]').map(function() { return $(this).attr('data-src') }).toArray()
      let image = $(this).data('src')

      // 取出元素
      let $box = $('#carousel-box')
      let $image = $box.find('.image img').attr('src', image)
      
      // 定義左箭頭
      $box.find('.left').unbind().click(_ => {
        let index = images.indexOf(image) - 1
        index = index == 0 ? images.length - 1 : index
        $image.attr('src', image = images[index])
      })
      // 定義右箭頭
      $box.find('.right').unbind().click(_ => {
        let index = images.indexOf(image) + 1
        index = index == images.length ? 0 : index
        $image.attr('src', image = images[index])
      })

      // 定義關閉
      $box.find('.close').unbind().click(_ => {
        $box.toggleClass('show')
      }).click()
    })

    if ($images.find('.image').length < 6)
      return $images.empty().append($('<span />').text('圖片需六張（包含）以上'))

    // 點擊右箭頭
    $right.click(_ => {
      let $image = $carousel.find('.image').first()
      let $clone = $image.clone(true, true)
      $image.remove()
      $images.append($clone)
    })

    // 點擊左箭頭
    $left.click(_ => {
      let $image = $carousel.find('.image').last()
      let $clone = $image.clone(true, true)
      $image.remove()
      $images.prepend($clone)
    })
  });


  $('.run_new_boxs').each(function() {
    var $that = $(this);

    // 取得 unit，沒有給預設 1
    var unit = $that.data('unit');
    unit = unit ? unit : 1;
    $that.attr('data-unit', unit);

    // 取得 page，沒有給預設 1
    var page = $that.data('page');
    page = page ? page : 1;
    $that.attr('data-page', page);

    // 取得 auto，沒有給預設 0
    var auto = $that.data('auto');
    auto = auto ? auto : 0;
    $that.attr('data-auto', auto);

    // 頁數
    var pageCount = Math.ceil($that.find('.item').length / unit);

    var setDataPage = function(n) {
      var p = parseInt($that.attr('data-page'), 10) + (n && $(this).hasClass('left') ? -1 : 1);
      p = p > pageCount ? 1 : p;
      p = p < 1 ? pageCount : p;
      $that.attr('data-page', p);
    };

    // 定義箭頭
    var arrow = $that.data('arrow');
    if (arrow && arrow.toLowerCase() == 'on') {

      // 在這邊設定左右按鈕的內容
      var $arrows = [
        $('<b />').addClass('left'),
        $('<b />').addClass('right')];

      $arrows = $($arrows).map($.fn.toArray).click(setDataPage);

      $that.append(
        $arrows);
    }
    
    // $($arrows).map($.fn.toArray).click(setDataPage);
    // 下方點點點
    let $points = $(Array.apply(null, Array($that.find('.item').length)).map(_ => $('<i />').click(function() {
      $that.attr('data-page', $points.index($(this)) + 1)
    }))).map($.fn.toArray).appendTo($that.find('.pages'))


    // 定義輪播
    auto && setInterval(setDataPage, auto);

  });

  $('.radio-subitems[name]').each(function() {
    let $that = $(this)
    $('.radio-input[name="' + $that.attr('name') + '"]').click(function() {
      if ($(this).hasClass('yes')) $that.addClass('show')
      else $that.removeClass('show')
    })
  })


});


