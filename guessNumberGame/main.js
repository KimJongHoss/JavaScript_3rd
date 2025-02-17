// 랜덤 번호 지정
// 유저가 번호를 입력한다
// 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤 번호를 맞추면, 맞췄습니다!
// 랜덤 번호 < 유저번호 : Down!!
// 랜덤 번호 > 유저 번호 : Up!!
// Reset 버튼을 누르면 게임이 리셋된다.
// 3번의 기회를 다 쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.

let gameOver = false // 게임이 종료되는 것을 알리는 boolean
let knowRandom = false // 게임이 시작되면 남은 기회 설정 버튼을 비활성화하기 위한 boolean
let correct = false // 정답일 경우에 true로 활성화됨
let computerNum = 0 //랜덤 번호
let chances = 3 //남은 기회
let goButton = document.getElementById("goButton") //실행 버튼
let resetButton = document.getElementById("resetButton") //리셋 버튼
let answerButton = document.getElementById("answerButton") //랜덤 번호 버튼
let setChanceButton = document.getElementById("setChanceButton") //기회 수 설정 버튼
let userInput = document.getElementById("userInput") //숫자를 입력하는 input 창
let setChanceInput = document.getElementById("setChanceInput") //기회 횟수를 설정하는 input창
let resultArea = document.getElementById("resultArea") //UP/DOWN/맞춤 상태를 알려주는 창
let answerArea = document.getElementById("answerArea") //랜덤 번호를 알려주는 창
let chanceArea = document.getElementById("chanceArea") //남은 기회를 알려주는 창
let historyArea = document.getElementById("historyArea") //입력했던 숫자를 출력해주는 창
let history = [] //유저가 그동안 입력한 숫자들

goButton.addEventListener("click", play) //go버튼을 눌렀을 때 play 함수 실행
resetButton.addEventListener("click", resetLogic) //reset 버튼을 눌렀을 때 reset 함수 실행
answerButton.addEventListener("click", controlAnswerButton) //랜덤 버튼을 눌렀을 때 controlRandomButton 함수 실행
document.getElementById('setChanceInput').value = chances; // chances 값으로 입력 필드 초기화
userInput.addEventListener("focus", function(){ //input 박스에 초점이 맞춰지면 초기화, 익명함수
    userInput.value = "";
})
setChanceButton.addEventListener("click", setChance) //setChanceButton 버튼을 눌렀을 때 setChance 함수 실행

//게임 시작 시 자동으로 실행되는 함수
function pickRandomNum(){ //랜덤 번호 생성, 랜덤번호 출력
    computerNum = Math.floor(Math.random()*100 +1)
    // answerArea.textContent = computerNum
    answerArea.textContent = "?????"
    console.log("정답 : ", computerNum)
    chanceArea.textContent = `남은 기회: ${chances}번` //남은 기회 출력
}

//goButton을 눌렀을 때 함수
function play(){ //랜덤 번호와 유저 번호 비교, 결과 출력
    let userValue = Number(userInput.value)
    setChanceButton.disabled = true

    if (!checkRange(userValue)) { 
        return; // userValue가 범위를 벗어나면 함수 종료
    }

    if(!writeHistory(userValue)){//유저가 입력했던 값을 history 배열에 넣는다.
        return;
    } 

    showChances() //남은 기회를 보여주는 함수

    compareValue(userValue) //유저의 값과 랜덤 번호를 비교하여 UP/DOWN/맞췄습니다 출력

    controlChances() //남은 기회 제어
    
    showHistory(history)
}

//play() 함수에 속한 함수들
function writeHistory (userValue){ //history 배열 안에 userValue값 넣는 함수
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return false;
    }
    history.push(userValue)
    console.log(history)
    return true;
}

function showChances(){ //남은 기회를 보여주는 함수
    chances --;
    chanceArea.textContent = `남은 기회: ${chances}번` //남은 기회 출력
    console.log("chance", chances)
}

function compareValue(userValue){ //유저의 값과 랜덤 번호를 비교하여 UP/DOWN/맞췄습니다 출력
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!!!"
    }else{
        resultArea.textContent = "맞췄습니다!!!"
        gameOver = true
        correct = true
    }
}

function controlChances(){ //남은 기회를 제어하는 함수
    if(chances < 1){ //기회를 모두 소진하게 되면 boolean = true
        gameOver = true
    }

    if (gameOver){ //기회를 모두 소진하면 버튼 비활성화
        goButton.disabled = true;
        if(correct == false){
            resultArea.textContent = "기회를 모두 소진하여 실패하셨습니다."
        }
    }
}

function showHistory(history){
    historyArea.textContent = history
}


//resetButton을 눌렀을 때 함수
function resetLogic(){
    //기회 reset
    resetChances()
    // 새로운 번호가 생성
    pickRandomNum()
    // user input창이 깨끗하게 정리
    userInput.value = ""
    // history 배열이 초기화
    history = [];
    //resultArea.textContent가 "결과가 나온다"로 바뀜
    resultArea.textContent = "결과가 나온다."
    //남은 기회 출력
    chanceArea.textContent = `남은 기회: ${chances}번`
    // 랜덤 번호 버튼 초기화
    answerButton.textContent = "랜덤 번호 보기"
    // historyArea 초기화
    historyArea.textContent = ""
}

//reset() 함수에 속한 함수들
function resetChances(){ // 기회가 3으로 돌아온다.
    chances = 3
    gameOver = false
    correct = false
    goButton.disabled = false;
    setChanceButton.disabled = false;
    setChanceInput.value = chances
}

// controlRandomButton을 눌렀을 때 함수
function controlAnswerButton(){
    if(knowRandom == false){
        knowRandom = true
        answerArea.textContent = computerNum
        answerButton.textContent = "랜덤 번호 숨기기"
    }else{
        knowRandom = false
        answerArea.textContent = "?????"
        answerButton.textContent = "랜덤 번호 보기"
    }
    
}

//setChanceButton을 눌렀을 때 함수
function setChance(){
    if(setChanceInput.value<1 || setChanceInput.value>10){
        resultArea.textContent = "기회 수는 1~10까지의 숫자만 입력 가능합니다."
        return;
    }
    resultArea.textContent = "결과가 나온다."
    chances = setChanceInput.value
    chanceArea.textContent = `남은 기회: ${chances}번` //남은 기회 출력
}

//예외 처리
function checkRange (userValue){ //userValue가 1과 100 사이에 있는지 검사
    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100 사이 숫자를 입력해주세요."
        return false; //유효하지 않음
    }
    return true; //유효함
}

pickRandomNum()