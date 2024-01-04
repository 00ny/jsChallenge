const body = document.querySelector("body");
const h2 = document.querySelector("h2")

function colorPaint() {
  if (window.innerWidth < 800) {
    body.style.backgroundColor = "skyblue";
  } else if (window.innerWidth > 800 && window.innerWidth < 1300) {
    body.style.backgroundColor = "purple";
  } else if (window.innerWidth > 1300) {
    body.style.backgroundColor = "yellow";
  }
}

colorPaint();
h2.style.color = "white";

window.addEventListener("resize",colorPaint)