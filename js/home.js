$(document).ready(function(){
  $('.click').click(function(){
      $('.pop_box').css({"opacity":"0.92", "pointer-events":"auto" });
});
 $('.btn1').click(function(){
$('.pop_box').css({"opacity":"0", "pointer-events":"none"});
});
});
