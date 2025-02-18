// 유저가 값을 입력한다
// + 버튼을 클릭하면 할일이 추가된다.
// 유저가 delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할 일이 끝나면서 밑줄이 간다.
// 진행중, 완료 탭을 누르면 언더바가 이동한다.
// 진행중 탭은 진행중인 아이템만, 완료 탭은 완료 아이템만 출력
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input"); //task를 적는 input 박스
let addButton = document.getElementById("add-button"); //task를 추가하는 + 버튼
let taskList = [] //task를 담는 array
addButton.addEventListener("click", addTask) //+ 버튼을 눌렀을 때 event

function addTask(){ //task를 array에 담는 함수
    let taskContent = taskInput.value
    taskList.push(taskContent)
    console.log(taskList);
    render();
}

function render(){ //task를 화면에 출력해주는 함수 
    let resultHTML = ``;
    for(let i=0; i<taskList.length; i++){
        resultHTML += `<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>`;
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}