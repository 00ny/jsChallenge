const clockTitle = document.querySelector(".js-clock");
const christmas = new Date("2024-12-25");


function dDay() {
    const today = new Date();
    const diff = christmas-today-(3600*1000*9);
  const days = Math.floor(diff/(1000*3600*24));
  const hours = String(Math.floor((diff/(1000*3600)%24))).padStart(2,"0");
  const min = String(Math.floor((diff/(1000*60)%60))).padStart(2,"0");
  const sec = String(Math.floor(diff/1000%60)).padStart(2,"0");
  clockTitle.innerText = `${days}:${hours}:${min}:${sec}`;
}

setInterval(dDay, 1000);

//초를 받아오니까 60초-> 분 , 3600초 -> 시간 3600*24 -> 하루