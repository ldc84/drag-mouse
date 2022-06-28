AOS.init();

$(function(){

  // client
  var client = $('.landing-client > .client');
  var clientDiv = client.find('> div');

  clientDiv.each(function(i){
    var $this = $(this);
    var p = $this.html();

    $this.append(p);
  });

  // people slick
  var peopleBox = $('.people-box.m-only');
  peopleBox.slick({
    dots: true,
    arrows: false,
    infinite: false,
  });

});