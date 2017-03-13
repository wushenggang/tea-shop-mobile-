// JavaScript Document

window.onload = function() {
  var mySwiper1 = new Swiper('#header',{
	  freeMode : true,
	  slidesPerView : 'auto',
  });
  var mySwiper2 = new Swiper('#banner',{
	  autoplay:5000,
	  visibilityFullFit : true,
	  loop:true,
	  pagination : '.pagination',
  });
  var length=document.getElementById('tb_b').children.length;
  if(length>5){
  var mySwiper3 = new Swiper('.swiper-container',{
    freeMode : true,
    slidesPerView : 'auto',
  });
}
if(length===4){
  document.getElementById('tb_b').style.marginLeft=0.1*screen.width+'px';
}
if(length===3){
  document.getElementById('tb_b').style.marginLeft=0.2*screen.width+'px';
}
if(length===2){
  document.getElementById('tb_b').style.marginLeft=0.3*screen.width+'px';
}
if(length===1){
  document.getElementById('tb_b').style.marginLeft=0.4*screen.width+'px';
}
var n;
for(n=0;n<20;n++){
  var index=$('.tb').eq(n).find('p').text().length;
  if(index===2){
    $('.tb').eq(n).find('p').css({"letter-spacing":"0.5em"});
  }
}
  var tabsSwiper = new Swiper('#tabs-container',{
    speed:500,
    onSlideChangeStart: function(){
      $(".tabs .active").removeClass('active')
      $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
    }
  })
  $(".tabs a").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".tabs .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper.slideTo( $(this).index() )
  })
  $(".tabs a").click(function(e){
    e.preventDefault()
  })
  
}
