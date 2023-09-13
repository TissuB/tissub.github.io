$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
$('.menu-cont').on('click', function() {
  
  var menu = $('.menu-txt').text();
	var close = $('.menu-txt').attr('data-text');
  
  $('.menu').toggleClass('active');
  
  if ($('.menu-txt').text(menu)) {
  	$('.menu-txt').text(close);
  } else {
    $('.menu-txt').text(menu);
  } 
  	$('.menu-txt').attr('data-text',menu);
})
var findNCenter = function() {
  var elems = document.querySelectorAll('.center-vertical');

  for(var i =0; i<elems.length; i++) {
    elems[i].style.marginTop = (elems[i].parentNode.offsetHeight - elems[i].offsetHeight)/2 + 'px';
  }
};

document.addEventListener && document.addEventListener('DOMContentLoaded', findNCenter);
window.addEventListener && window.addEventListener('resize', findNCenter);

$(document).ready(function() {

  var count = $('#inner p').length;
  var i = 1;
    
setInterval(function() {
  if (i < count) {
    $('#inner').css('-webkit-transform','translate3d(0,-' + i + '00%,0)');
      i++;
  }
}, 800);
});