
const butToggles = document.querySelectorAll(".toggleBut");

butToggles.forEach(but => {
    but.addEventListener('click', function(){
        but.parentElement.parentElement.style.borderColor = "hsl(61, 70%, 52%)";
        but.parentElement.parentElement.style.backgroundColor = "hsla(61, 69.80%, 52.00%, 0.29)";
    });
});