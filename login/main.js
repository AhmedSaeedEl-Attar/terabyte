var log =document.getElementById("log"),
    back= document.getElementById("back"),
    hide = document.getElementById("hide") , 
    oppo = document.getElementById("oppo");

log.onclick = function login() {
    setTimeout(function(){
        hide.classList.add("show");
    } , 300) ;
    oppo.style.opacity="0.8";
}
back.onclick = function(){
    hide.classList.remove("show");
    oppo.style.opacity="1";

}