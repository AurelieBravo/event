// *******************clickbouton******************
const btn = document.querySelector("#btn");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  img.classList.toggle("show");
});

// *****************evenement de la souris*********************

const mousseEvent = document.querySelector(".mousseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mousseEvent.addEventListener("mousemove", (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mousseEvent.style.left = (e.x / window.innerWidth) * 100 + "%";
  // *********************pour flouter*******************************
  if (e.x > 700) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});
// **************************l'ecriture dans la bulle*******************************************
document.getElementById("input").addEventListener("input", (e) => {
  vertical.innerHTML = e.target.value;
});
// ******************************couleur*********************************************
const theme = document.querySelectorAll(".theme");
const dark = document.querySelector("dark");
const salmon = document.querySelector(".salmon");
const yellow = document.querySelector("yellow");

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.id);
    document.body.classList.remove("darkTheme","yellowTheme","salmonTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
        case"salmon":
        document.body.classList.add("salmonTheme");
        break;
        case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      default:
        null;
    }
  });
});
