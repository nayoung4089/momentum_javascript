const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input"); //todoForm에서 input값을 가져오는 거!
const todoList = document.getElementById("todo-list");

//localStorage에 받아온 todo 저장하기
let todos = []; //모든 todolist를 array 속에 집어넣기

function saveItems(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

// ul = todo-list에 li / span 넣기
function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span"); // document.createElement("li span") 이건 안 먹힘..
    span.innerText = newTodo.text; // 밑의 함수에서 우리가 todolist에 넣은 input값을 span에 넣게 짬
    // .text 붙인 이유는 이제 newTodoObj를 받을 거니까! 그래서 text를 따로 골라줘야 됨
    li.appendChild(span); // li 안에 span을 집어넣기
    
    //지우기버튼 만들기
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(button);
    function remove(event){
        const li = event.target.parentElement; // 이거 안써줘도 되긴 하는데.. 혹시나 다른 li를 내가 또 만들까봐 일단 따라간다
        li.remove();
        //localStorage에 지워진 건 저장되지 못하게 만들기
        todos = todos.filter((todo) => todo.id !== parseInt(li.id));
        // list가 지워지면 자동으로 id도 소멸된다. 그래서 localStorage에 저장된 id가 li에 있는 id와 다르면
        // 이미 지워졌다는 반증이므로 filter한다 이말!

        // 사실 함수로 쓰자면
        // function sexyfilter(todo){ return todo.id !== li.id};
        // todos = todos.filter(sexyfilter); 

        // 지워진 정보를 업로드하여 localStorage에 저장
        saveItems();
    }
    button.addEventListener("click",remove);

    // todoList에 전체를 넣기
    todoList.appendChild(li); 
}

// 자동 새로고침을 막고, localStorage에 저장하기
function handleTodoSubmit(event){
    event.preventDefault(); // 입력하면 새로고침되는 문제를 해결
    console.log(todoInput.value);
    const newTodo = todoInput.value;
    todoInput.value = ""; // 입력창에 내가 쓴 것을 지워줌. 그리고 나서 다음 걸 쓸 수 있게!

    // localStorage에 저장된 item들이 각각 다른 id 가질 수 있게 만들기
    const newTodoObj = {
        text: newTodo,
        id: Date.now() // 지금 시간을 밀리세컨초까지 보여줘서 거의 랜덤과 가까운 수임
    }
    todos.push(newTodoObj); // array 속으로 집어넣기

    paintTodo(newTodoObj); // html에 우리가 입력한 정보 보여주기
    saveItems(); // localStorage에 저장
}
todoForm.addEventListener("submit",handleTodoSubmit);


// 저장된 todolist를 새로고침해도 없어지지 않게 만들기
const savedTodos = localStorage.getItem("todos"); // localStorage에 저장된 key name = todos를 가져온다
if(savedTodos){
    const parseTodos = JSON.parse(savedTodos); // array로 만들어줌
    todos = parseTodos; // 새로고침 전 localStorage에 기록된 것들도 지워지지 않고 포함되게 하려고
    parseTodos.forEach(paintTodo); // paintTodo는 todolist의 정보를 가지고 있어서, 이 함수를 각각 item마다 실행시켜줘 이말!
}

