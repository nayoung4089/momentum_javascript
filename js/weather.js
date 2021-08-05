const API_KEY = "본인키";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // &units=metric은 화씨를 섭씨로 변경
    fetch(URL).then(response =>response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.main.temp} ℃ ${data.weather[0].main}` ; // 콘솔창 치면 weather이 여기서 나옴
        city.innerText = data.name; // 콘솔창 치면 city가 여기서 나옴
    }); // URL을 불러오기. then을 쓰는 이유는 fetch는 시간이 걸리는 함수거든! 로딩 있다고 보면 됨

}
function onGeoError(){
    alert("위치를 알 수 없어요");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 모든게 ok일 때 실행할 함수, 에러떴을 때 실행할 함수 이렇게 2개 넣어주기
