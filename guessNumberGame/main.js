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

let computerNum = 0 //랜덤 번호
let goButton = document.getElementById("goButton")
let userInput = document.getElementById("userInput")
let resultArea = document.getElementById("resultArea")
let answerArea = document.getElementById("answerArea")

goButton.addEventListener("click", play)

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100 +1)
    answerArea.textContent = computerNum
    console.log("정답 : ", computerNum) 
}

function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "UP!!!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN!!!!"
    }else{
        resultArea.textContent = "맞췄습니다!!!"
    }
}

pickRandomNum()