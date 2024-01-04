const submit = document.querySelector("form")
const lose = document.querySelector(".lose")
const win = document.querySelector(".win")
const rangeNum = document.getElementById("Generate")
//범위 정하기
const myNum = document.querySelector("#Guess")
//내가 찍는 숫자
const span2 = document.querySelector("div span:nth-child(2)")
const span4 = document.querySelector("div span:nth-child(4)")

function play(event) {
    event.preventDefault();
    // 첫번째, 멈춘다.

    const range_Num = parseInt(rangeNum.value);
    localStorage.setItem("rangeNum",range_Num+1);
    const my_Num = parseInt(myNum.value);
    localStorage.setItem("myNum",my_Num);
    // 두번째, 입력받은 값들을 저장한다.

    const max_Num = localStorage.getItem("rangeNum");
    const machineNum = Math.floor(Math.random()*max_Num);
    //숫자 만들어오고 아래 진행
    // 세번쨰, 랜덤숫자를 만들어온다.

    span2.innerText = my_Num;
    span4.innerText = machineNum;
    // 네번째, 숫자들과 결과를 표시해준다.
    const div = document.querySelector("body>div")
    div.classList.remove("hidden");
    if (my_Num === machineNum) {
        win.classList.remove("hidden");
        lose.classList.add("hidden");
    }
    else {
        lose.classList.remove("hidden");
        win.classList.add("hidden");
    }
}

submit.addEventListener("submit",play)