// 유저가 값을 입력한다
// + 버튼을 클릭하면 할일이 추가된다.
// 유저가 delete 버튼을 누르면 할일이 삭제된다.
// check 버튼을 누르면 할 일이 끝나면서 밑줄이 간다.
// 1. check 버튼을 클릭하는 순간 false -> true
// 2. true이면 완료된 것으로 간주하고 밑줄 보여주기
// 3. false이면 진행 중인 것으로 간주하고 그대로
// 진행중, 완료 탭을 누르면 언더바가 이동한다.
// 진행중 탭은 진행중인 아이템만, 완료 탭은 완료 아이템만 출력
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById("task-input"); //task를 적는 input 박스
let addButton = document.getElementById("add-button"); //task를 추가하는 + 버튼
let taskList = [] //task를 담는 array
addButton.addEventListener("click", addTask) //+ 버튼을 눌렀을 때 event

function addTask(){ //task를 array에 담는 함수
    let task = { //taskContent는 완료 여부를 담을 수 없기 때문에 객체로 대체
        id : randomIDGenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){ //task를 화면에 출력해주는 함수 
    let resultHTML = ``;
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete == true){
            resultHTML +=`<div class="task">
                    <div class="task-done">${taskList[i].taskContent}</div>
                    <div>
                        <img class ="returnIcon" src="assets/image/returnIcon.png" alt="return"
                            onclick="toggleComplete('${taskList[i].id}')">
                        <img class ="deleteIcon" src="assets/image/deleteIcon.png" alt="Delete"
                            onclick="deleteTask('${taskList[i].id}')">
                    </div>
                </div>`;
        }else{
            resultHTML += `<div class="task">
            <div class="task-notDone">${taskList[i].taskContent}</div>
            <div>
                <img class ="checkIcon" src="assets/image/checkIcon.png" alt="Check"
                            onclick="toggleComplete('${taskList[i].id}')">
                <img class ="deleteIcon" src="assets/image/deleteIcon.png" alt="Delete"
                            onclick="deleteTask('${taskList[i].id}')">
            </div>
        </div>`;
        }

        
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) { //check 버튼을 누르면 isComplete가 true로

    for(let i=0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList)
}

function deleteTask(id){ //아이템을 삭제하는 함수
    for(let i=0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1);
            break;
        }
    }
    render();
}

function randomIDGenerate(){ //unique한 task의 id를 생성하는 함수
    return '_' + Math.random().toString(36).substring(2, 11); //2부터 9글자 가져오는 함수
}