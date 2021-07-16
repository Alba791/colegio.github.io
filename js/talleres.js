let imagen=document.getElementById('imagen');
function color1(){
    imagen.style.background="black"
}
imagen.addEventListener("mouseenter",color1);

function color2(){
    imagen.style.background="White"
}
imagen.addEventListener("mouseleave",color2);