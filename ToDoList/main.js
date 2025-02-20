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
let tabs = document.querySelectorAll(".task-tabs div"); //조건에 맞는 모든 것을 가져옴
let underLine = document.getElementById("under-line"); //underLine
let taskList = [] //전체 task를 담는 array
let filterList =[] //filter() 함수에서 사용하는 filter된 array
let mode = 'allTask'
addButton.addEventListener("click", function() { //+ 버튼을 눌렀을 때 event
    addTask();
    document.getElementById("task-input").value = ""; // 입력 필드 초기화
}); 

taskInput.addEventListener("keydown", function(event) { //Enter을 눌렀을 때 event
    if (event.key === "Enter") { // Enter 키가 눌렸을 때
        addTask();
        taskInput.value = ""; // 입력 필드 초기화
    }
});

for(let i=1; i<tabs.length; i++){ //index 0은 underLine이므로 1부터 시작
    tabs[i].addEventListener("click", function(event){
        filter(event)
        indicator(event) //underLine이 움직이는 함수
    });
}

// 페이지 로드 후 자동으로 '모두' 탭을 클릭한 상태로 설정
document.addEventListener("DOMContentLoaded", function() {
    tabs[1].click(); // '모두' 탭 클릭
});

function addTask(){ //task를 array에 담는 함수
    let taskValue = taskInput.value.trim(); // 앞뒤 공백 제거

    if (taskValue === "") { 
        showAlert(); // 커스텀 알림창 띄우기
        return; // 함수 실행 중단
    }

    let task = { //taskContent는 완료 여부를 담을 수 없기 때문에 객체로 대체
        id : randomIDGenerate(),
        taskContent : taskValue,
        isComplete : false
    }
    taskList.push(task);
    render();
    filter();
}

function render(){ //task를 화면에 출력해주는 함수 
    // 1. 내가 선택한 탭에 따라서
     // 2. 리스트를 달리 보여준다.
    // all taskList
    // ongoing, done filterList
    
    let renderList =[]
    if(mode === 'allTask'){
        renderList = taskList;
    }else if(mode === 'onGoingTask' || mode === 'doneTask'){
        renderList = filterList;
    }
   
    let resultHTML = ``;
    for(let i=0; i<renderList.length; i++){
        if(renderList[i].isComplete == true){
            resultHTML +=`<div class="task">
                    <div class="task-done">${renderList[i].taskContent}</div>
                    <div>
                        <img class ="returnIcon" src="assets/image/returnIcon.png" alt="return"
                            onclick="toggleComplete('${renderList[i].id}')">
                        <img class ="deleteIcon" src="assets/image/deleteIcon.png" alt="Delete"
                            onclick="deleteTask('${renderList[i].id}')">
                    </div>
                </div>`;
        }else{
            resultHTML += `<div class="task">
            <div class="task-notDone">${renderList[i].taskContent}</div>
            <div>
                <img class ="checkIcon" src="assets/image/checkIcon.png" alt="Check"
                            onclick="toggleComplete('${renderList[i].id}')">
                <img class ="deleteIcon" src="assets/image/deleteIcon.png" alt="Delete"
                            onclick="deleteTask('${renderList[i].id}')">
            </div>
        </div>`;
        }

        
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) { //check 버튼을 누르면 isComplete가 true로
    let completeList =[]
    if(mode === 'allTask'){
        completeList = taskList;
    }else if(mode === 'onGoingTask' || mode === 'doneTask'){
        completeList = filterList;
    }

    for(let i=0; i<completeList.length;i++){
        if(completeList[i].id == id){
            completeList[i].isComplete = !completeList[i].isComplete;
            break;
        }
    }
    render();
    filter();
}

function deleteTask(id){ //아이템을 삭제하는 함수
    
    for(let i=0; i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1);
            break;
        }
    }
    render();
    filter();
}

function filter(event = null){ //event = null로 하면 event가 있으면 있는대로 없으면 없는대로 호출 가능
    if (event) {
        mode = event.target.id; //tab의 상태를 나타내는 변수
    }
    filterList =[]
    if(mode === "allTask"){
        // 전체 리스트를 보여준다.
    }else if(mode === "onGoingTask"){
        // 진행중인 아이템을 보여준다.
        //task.isComplete=false
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i])
            }
        }
        console.log("onGoing", filterList)
    }else if(mode === "doneTask"){
        // 완료된 아이템을 보여준다.
        //task.isComplete=true
        for(let i=0; i<taskList.length; i++){
            if(taskList[i].isComplete === true){
                filterList.push(taskList[i])
            }
        }
    }
    render();
}

//underLine
function indicator(event){
    underLine.style.left = event.currentTarget.offsetLeft + "px";
    underLine.style.width = event.currentTarget.offsetWidth + "px";
    underLine.style.top = event.currentTarget.offsetHeight + "px";
}

// alert 관련
function showAlert() {
    let alertBox = document.getElementById("custom-alert");
    alertBox.style.display = "block"; // alertBox를 보여주는 부분
    setTimeout(() => {
        alertBox.classList.add("show");  // 부드럽게 나타나도록 클래스 추가
    }, 10); // display가 'block'으로 설정된 후에 애니메이션이 적용되도록 딜레이 추가
}

function closeAlert() {
    let alertBox = document.getElementById("custom-alert");

    // 애니메이션 없이 바로 사라지게 함
    alertBox.classList.remove("show");
    
    // display를 'none'으로 설정하여 즉시 숨기기
    alertBox.style.display = "none"; 

}

function randomIDGenerate(){ //unique한 task의 id를 생성하는 함수
    return '_' + Math.random().toString(36).substring(2, 11); //2부터 9글자 가져오는 함수
}