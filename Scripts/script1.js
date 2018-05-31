
document.addEventListener("DOMContentLoaded",()=>{
  var Paralxinstances = M.Parallax.init(document.querySelectorAll('.parallax'), {
    
  })
  var Sliderinstances = M.Slider.init( document.querySelectorAll('.slider'), {
    interval:3000,
    duration:650
  });


  var SideNavinstances = M.Sidenav.init(document.querySelectorAll('.sidenav'), {
    inDuration:200
  });
 
  AOS.init({
    disable: 'mobile',
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
})

