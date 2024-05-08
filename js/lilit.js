var viewportWidth = window.innerWidth;

$(window).on('load', function () {
    $('html, body').animate({ scrollTop: 0 });

})
$(document).on("contextmenu", function (e) {
    e.preventDefault();
});


function sendMail(e) {

    let params = {
        choose: document.querySelector('input[name="choose"]:checked').value,
        guestname: document.getElementById("guestname").value,
        guestnumber: document.getElementById("guestnumber").value,
    };

    const serviceID = "service_4kvupjb";
    const templateID = "template_17qflhh";
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            (document.querySelector('input[name="choose"]:checked').value = ""),
                (document.getElementById("guestname").value = ""),
                (document.getElementById("guestnumber").value = ""),
                console.log(res);
            console.log("Succesfully");
            window.location.reload();
        })
        .catch((err) => console.log(err));
}

const sendMailbtn = document.querySelector("#sendMail");

sendMailbtn.addEventListener("click", (e) => {
    e.preventDefault()
    sendMail();
   alert("сообщение отправлено");
});
