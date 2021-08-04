const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form > input");
const greeting = document.querySelector("#greeting");
const mainpage = document.querySelector("#mainpage");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    const username = loginInput.value;
    event.preventDefault();
    // submit 하자마자 바로 새로고침되는 디폴트를 막기 위해
    console.log(username);
    loginForm.classList.add(HIDDEN_CLASSNAME); // 창이 숨겨짐
    localStorage.setItem("username",username); //localStorage에 입력
    greeting.innerText =`환영합니다, ${username}님!`
    // 같은말: greeting.innerText = "당신을 환영합니다, " + username + "님!";
    // 참고로 파이썬에서는 f"당신을 환영합니다, {username}님!" 이렇게 써야됨~~
    mainpage.classList.remove(HIDDEN_CLASSNAME);
}

//한 번 입력했을 때 localStorage는 정상적으로 내 정보를 기억하는데
// 새로고침 누르면 사이트에서는 다시 로그인창을 보여줌 이것을 막기 위해 아래와 같은 코드작성
const saveUserName = localStorage.getItem("username");
if(saveUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    // input 결과를 보여주고, 저장
}else{
    greeting.innerText =`환영합니다, ${saveUserName}님!`;
    // function처럼 {username} 쓰면 안된다!! 이건 function 안에서만 정의된 이름이라서~~
    // 여기서는 saveUserName~~
    mainpage.classList.remove(HIDDEN_CLASSNAME);
}

