const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];


const background = document.querySelector("body")

function switch_BG() {
    const color = colors;
    const random_num = Math.floor(Math.random()*color.length);
    const ran_BG1=color[random_num];
    const ran_BG2=color[Math.floor(Math.random()*color.length)];
    background.style.background = `linear-gradient(to left,${ran_BG1},${ran_BG2})`;
}

// switch_BG()
setInterval(switch_BG,1000)

