const playSong = document.getElementsByClassName("play");
const stopSong = document.getElementsByClassName("stop");
const friky = document.getElementsByClassName("song");
const volume = document.querySelector(".volume");
const menuBtn = document.getElementsByClassName("menu-btn");
const buttonMenu = document.getElementById("buttonMenu");
const barraNavegacion = document.getElementById("barra-navegacion");
let transform = "rotate(0deg)";

let nombre = "Friky";
let cancion = new Audio(`audio/${nombre}.mp3`);
let labelName = document.querySelector(`.${nombre}`);
document.getElementById("labelName").innerHTML = labelName.textContent;

for (let elemento of playSong) {
  elemento.addEventListener("click", function () {
    cancion.play();
    document.getElementById("play").classList.add("hidden");
    document.getElementById("stop").classList.remove("hidden");
    document.getElementById("labelName").innerHTML = labelName.textContent;
  });
}
for (let elemento of stopSong) {
  elemento.addEventListener("click", function () {
    cancion.pause();
    document.getElementById("play").classList.remove("hidden");
    document.getElementById("stop").classList.add("hidden");
  });
}
for (let elemento of friky) {
  elemento.addEventListener("click", function () {
    cancion.pause();
    nombre = this.getAttribute("id");
    cancion = new Audio(`audio/${nombre}.mp3`);
    labelName = document.querySelector(`.${nombre}`);
    cancion.play();
    document.getElementById("play").classList.add("hidden");
    document.getElementById("stop").classList.remove("hidden");
    document.getElementById("labelName").innerHTML = labelName.textContent;
  });
}
volume.addEventListener("click", function () {
  cancion.volume = this.value;
});
console.log(window.getComputedStyle(buttonMenu));
console.log(window.getComputedStyle(buttonMenu).zIndex);
for (let elemento of menuBtn) {
  elemento.addEventListener("click", function () {
    barraNavegacion.style.transition = ".5s";
    // barraNavegacion.classList.toggle("active");
    buttonMenu.style.transition = ".5s";

    if (transform === "rotate(0deg)") {
      barraNavegacion.style.display = "flex";
      barraNavegacion.style.transition = ".5s";
      barraNavegacion.style.transform = "translateX(100%)";

      buttonMenu.style.transform = "rotate(90deg)";
      transform = "rotate(90deg)";
    } else {
      barraNavegacion.style.transform = "translateX(-100%)";
      barraNavegacion.style.transition = ".5s";
      buttonMenu.style.transform = "rotate(0deg)";
      transform = "rotate(0deg)";
    }
  });
}
