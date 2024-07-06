function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Dark / Light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");
const themeImage = document.querySelector("#profile-pic")

if (currentTheme === "dark"){
    setDarkMode();
}

btn.addEventListener("click", function() {
    setTheme();
});

btn2.addEventListener("click", function() {
    setTheme();
});

function setTheme(){
    let currentTheme = document.body.getAttribute("theme")

    if(currentTheme==="dark"){
        setLightMode();
    }else{
        setDarkMode();
    }
}

function setDarkMode(){
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme","dark");

    themeIcons.forEach((icon)=>{
        icon.src = icon.getAttribute("src-dark")
    });


    var image = document.getElementById("profile-pic");
    if(image!=null)
        {
            image.classList.toggle('inverted')
        }
    
};
function setLightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme","light");

    themeIcons.forEach((icon)=>{
        icon.src = icon.getAttribute("src-light")
    });
    var image = document.getElementById("profile-pic");
    if(image!=null)
        {
            image.classList.toggle('inverted')
        }
};

window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector("#desktop-nav");
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });
window.addEventListener('scroll',(e)=>{
    const nav2 = document.querySelector("#hamburger-nav");
    if(window.pageYOffset>0){
      nav2.classList.add("add-shadow");
    }else{
      nav2.classList.remove("add-shadow");
    }
});

// document.getElementById('modeToggle').addEventListener('click', function() {
//     var image = document.getElementById("profile-pic");
//     image.classList.toggle('inverted');
// });

