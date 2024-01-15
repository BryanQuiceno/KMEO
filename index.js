const playSong = document.getElementsByClassName("play");
const stopSong = document.getElementsByClassName("stop");
const friky = document.getElementsByClassName("song");
const volume = document.querySelector(".volume");

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
