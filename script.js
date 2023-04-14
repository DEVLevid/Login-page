let eyeClosed = document.querySelector(".eyeClosed");
let password = document.querySelector(".password");

eyeClosed.onclick = function(){
    if(password.type === "password"){
        password.type = "Text";
        eyeClosed.src = "images/view.png";
    }else{
        password.type = "password";
        eyeClosed.src = "images/hide.png";
    }
}