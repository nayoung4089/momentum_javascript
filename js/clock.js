const clock = document.querySelector(".clock");

function getClock(){
    // 시간 가져오기 (년도, 날짜, 시분초 전체)
    const time = new Date();
    let hours = String(time.getHours()).padStart(2,"0");
    let minutes = String(time.getMinutes()).padStart(2,"0");
    let seconds = String(time.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
// 아니면 그냥 padStart(2,"0") 즉, 2자리면 ok고 아니면 "0"을 더해줘라 라는 말을 해주는 함수~!!
}
// 페이지 열자마자 실행. 이거 없으면 1초 뒤에 실행됨
getClock();
// 1초마다 함수 실행
setInterval(getClock, 1000); // 1000이면 1초 의미!


// 1초 뒤에 함수 실행
// setTimeout(getClock, 1000)


