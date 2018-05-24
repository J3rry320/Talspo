
document.addEventListener("DOMContentLoaded",()=>{
  var Paralxinstances = M.Parallax.init(document.querySelectorAll('.parallax'), {
    
  })
  var Caruselinstances = M.Carousel.init(document.querySelectorAll('.carousel'),{
    shift:10,
  
    padding:5
  });
  var instances = M.Sidenav.init(document.querySelectorAll('.sidenav'), {
    inDuration:200
  });
  var typed = new Typed("#typewritter", {
    strings: ["Get Skills That You Deserve", "Explore,Learn and Develop","Be the Best At What You Are"],
    smartBackspace: true, // Default value,
    typeSpeed:150,
    backSpeed:75,
 
    loop:true
  });

})

$(document).ready(()=>{
console.log($(document).scrollTop())

})