function sendMail(){
    let parms={
        name: document.getElementById("fname").value,
        email: document.getElementById("ed").value,
        message: document.getElementById("mn").value,
        message: document.getElementById("es").value,
    }
    emailjs.send("service_34qyo9n","template_ekpi27c",parms).then(alert("Email Sent!!"))
}
