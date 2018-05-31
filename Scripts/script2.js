//Jquery Scripts To avoid confusion among vanila and jquery

$(document).ready(
()=>{
    $("#tourButton").bind("click",()=>{
        $("#main,#footer").removeClass("hidden")
        $("#videoHeader").addClass("hidden")
    }) 
    $("#searchButton").bind("click",()=>{
      
        $("#searchButton").addClass("hidden")
        $("#searchBar").removeClass("hidden")
        $("#searchBar").addClass("magictime puffIn")
    })   
    }
)