function login(){
    var user,pass;
    user=document.getElementById("usuario").value;
    pass=document.getElementById("contraseña").value;
    if(user =="hernan@certus.edu.pe"&& pass == 1234){
        alert("usuario y contraseña validos");
        window.location="promedio.html";
        return false;
    }

    else{
        alert("sus datos son incorrectos");}}
    
