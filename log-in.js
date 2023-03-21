var form = document.querySelector('#form').addEventListener("submit",function(e){
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email === "abcd@gmail.com" && password === "12345678") {
        window.location.href = "home-page.html";
        // window.open("home-page.html");
    }else{
        alert("Insert abcd@gmail.com & 12345678")
    }
})