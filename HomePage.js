
$(document).ready(function(){
   
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
          
      });
    } // End if
  });
   
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

function gotocrugpage(){
    
    window.location.href="https://www.sensible.com/contact.html";
    
}
function greeting(){
    var greet=document.getElementById("showgreeting");
    greet.style.visibility="visible";
}
function buttonclicked(){
   $('[rel=tooltip]').tooltip('enable');  document.getElementById("btn1").disabled=true;
    document.getElementById("btn2").disabled=true;
    document.getElementById("btn3").disabled=true;
    var greet=document.getElementById("buttonclicked");
    
    
    greet.style.visibility="visible";
    
}
function SearchFunction() {
   
}