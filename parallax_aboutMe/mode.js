//dark mode
document.querySelector("#toggle-theme").addEventListener("click", function() {
    document.getElementById("nav").classList.toggle("dark-mode");
    document.getElementById("toggle-theme").classList.toggle("dark-mode");
    document.getElementById("parallax-1").classList.toggle("alt1");
    document.getElementById("parallax-2").classList.toggle("alt2");
    document.getElementById("parallax-3").classList.toggle("alt3");
    const paras = document.getElementsByClassName("para");
    for (let i in paras) {
        paras[i].classList.toggle("dark-mode");
    }
}); 
