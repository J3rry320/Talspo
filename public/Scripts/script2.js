//Jquery Scripts To avoid confusion among vanila and jquery

$(document).ready(
()=>{
  
    $("#searchButton").bind("click",()=>{
      
        $("#searchButton").addClass("hidden")
        $("#searchBar").removeClass("hidden")
        $("#searchBar").addClass("magictime puffIn")
    })   
    }
)