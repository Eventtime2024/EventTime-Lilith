var viewportWidth = window.innerWidth;

$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
   
})
// $(document).on("contextmenu", function(e) {
//     e.preventDefault();
// });


function SendMail(){
   var parms={
       choose:document.getElementsByName('choose').value,
       guestname:document.getElementById("#guestname").value,
       guestname:document.getElementById("#guestnumber").value
   }
    emailjs.send("service_p65aldn","template_jzfinoc",parms)
}
