$(document).ready(function() { 

  $( window ).resize(function() {
    if ($(window).width() > 1100) {
      $( ".mobile-line:first-child" ).css("transform","rotate(0deg)").css("margin-bottom","10px");
      $( ".mobile-line:nth-of-type(2)" ).css("opacity","1");
      $( ".mobile-line:last-child" ).css("transform","rotate(0deg)").css("margin-bottom","10px");
      $(".mobile-menu").slideUp();
      m=0;
   }

  });

    var i =1;
    var k=1; 
    var leftController = 1;

    
    setInterval(swapImages, 4000);

    function swapImages(){
        if(i<8)
            i++;
        else i=1;
        $(".active").removeClass("active")
        $(".slide"+i).addClass("active")
    }

    $(".directions").click(function(){

        var elmId = $(this).attr("id");
        
        if(elmId=="right"){
           swapImages()
        }
        else{
            if(i>1)
                i--;
            else i=8;
            $(".active").removeClass("active")
            $(".slide"+i).addClass("active")
        }
        
       
    });

    $(".Pdirections").click(function(){

        var elemetn = document.getElementById("productImg");
        var stopPoint= elemetn.getAttribute("data-stop");
        var elmId = $(this).attr("id");
       
        
        if(elmId=="Pright"){
            if(k<stopPoint)
                k++;
            else k=1;
     
            $(".shown").removeClass("shown")
            $(".product"+k).addClass("shown")
            var $images = $(".shown").attr("src");
            $(".zoomPart img").attr("src", $images);
        }
        else{
            if(k!=1)
                k--;
            else{
                k=stopPoint;
                
            } 
            $(".shown").removeClass("shown")
            $(".product"+k).addClass("shown")
            var $images = $(".shown").attr("src");
            $(".zoomPart img").attr("src", $images);
        }       
       
    });

    // Zoom Part

  if (window.innerWidth > 1100) {
    $(".product").click(function(){
      var $images = $(".shown").attr("src");
      $(".zoomPart img").attr("src", $images);
      $(".container").css("opacity","0.2");
      $(".zoomPart").css("display","block");
    });
    $(".closePart").click(function(){
      $(".container").css("opacity","1");
      $(".zoomPart").css("display","none");
    });
    
  }



    //Mobile Nav Bar

  $( ".mobile-line:first-child" ).css("transform-origin","bottom left");
  $( ".mobile-line:last-child" ).css("transform-origin","top left");


  var m = 0;


  $(".mobile-menu .navLi a").click(function(){ m=0;});

  $(".mobile-nav").click(function(){

    
    if(m%2==0){
      $( ".mobile-line:first-child" ).css("transform","rotate(45deg)");
      $( ".mobile-line:nth-of-type(2)" ).css("opacity","0");
      $( ".mobile-line:last-child" ).css("transform","rotate(-45deg)");
      $(".mobile-menu").slideDown();
      m=1;
    }
    else{
      $( ".mobile-line:first-child" ).css("transform","rotate(0deg)").css("margin-bottom","10px");
      $( ".mobile-line:nth-of-type(2)" ).css("opacity","1");
      $( ".mobile-line:last-child" ).css("transform","rotate(0deg)").css("margin-bottom","10px");
      $(".mobile-menu").slideUp();
      m=0;
    }
});

if (window.innerWidth < 960) {
  $(".logo img").attr("src","images/headerLogo.png");
  $(".gallerySwitch i").removeClass("fa-3x").addClass("fa-2x");
}
else{
  $(".logo img").attr("src","images/logo.png");
  $(".gallerySwitch i").removeClass("fa-2x").addClass("fa-3x");

}




});