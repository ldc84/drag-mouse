(function ($) {

  // ripple
  document.querySelectorAll(`[effect="ripple"]`).forEach(el => {
    el.addEventListener('click', e => {
      e = e.touches ? e.touches[0] : e;
      const r = el.getBoundingClientRect(),
            d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
      el.style.cssText = `--s: 0; --o: 1;`;
      el.offsetTop;
      el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`;
    });
  });

  // scroll
  $(".nano").nanoScroller();

  // drop layer
  $(function(){
    var drop = $('[data-drop] > a');
    
    drop.on('click', function(){
      var $this = $(this);
      var layer = $this.next('[class^="drop-layer"]');

      $this.toggleClass('active');
      layer.toggle();
      return false;
    });
  });

  // header
  $(function(){
    var header = $('#header');
    var gnbSub = header.find('.gnb-list .sub > a');
    var noti = header.find('.noti');
    var notiCon = header.find('.notification-box');

    // gnb sub
    gnbSub.on('click', function(){
      var $this = $(this);
      var sub = $this.next('ul');

      $this.toggleClass('active');
      sub.toggle();
      return false;
    });

    // 알림
    noti.on('click', function(){
      notiCon.toggleClass('active');
      return false;
    });
  });

  // chatbot
  $(function(){
    var chatbot = $('.chatbot');
    var help = chatbot.find('.help');
    var close = chatbot.find('.close');

    help.on('click', function(){
      chatbot.addClass('active');
      return false;
    });

    close.on('click', function(){
      chatbot.removeClass('active');
      return false;
    });
  });

})(jQuery);