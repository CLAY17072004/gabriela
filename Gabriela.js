var button = document.querySelector(".button");
var span= document.querySelector(".span");
span.style.display="none";

button.addEventListener("click", function(){
    span.style.display="block";
})