(function($){
  // Caption
  $('.article-entry, .article-inner').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox') || $(this).parent().is('a')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a class="fancybox" href="' + this.src + '" data-fancybox=\"gallery\" data-caption="' + alt + '"></a>')
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }
  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  var nav = document.getElementById('main-nav-toggle');
  nav.onclick = function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  };

  var wrap = document.getElementById('wrap');
  wrap.onclick = function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  };

  // 回到顶部按钮功能
  $(document).ready(function() {
    var $backToTop = $('#back-to-top');
    var $window = $(window);
    
    if ($backToTop.length > 0) {
      // 滚动监听
      $window.scroll(function() {
        if ($window.scrollTop() > 300) {
          $backToTop.addClass('show');
        } else {
          $backToTop.removeClass('show');
        }
      });
      
      // 点击回到顶部
      $backToTop.click(function(e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600, 'swing');
        return false;
      });
      
      // 键盘支持
      $backToTop.keydown(function(e) {
        if (e.which === 13 || e.which === 32) { // Enter 或 Space
          e.preventDefault();
          $backToTop.click();
        }
      });
    }
  });

})(jQuery);