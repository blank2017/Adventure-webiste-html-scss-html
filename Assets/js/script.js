let navbar = document.querySelector(".header__menu");


// Toggle menu 
document.querySelector("#toggle").onclick = () => {
    navbar.classList.toggle("active");
}

// SLIDE VIDEO
document.querySelectorAll(".about .about__video .controls .control-btn").forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute("data-src");
        console.log(src)
        document.querySelector(".about .about__video video").src = src;
    }
});
