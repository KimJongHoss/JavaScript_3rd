//문제1 유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만들어보자

let num =  Math.floor(Math.random() * 3) - 1; //-1~1 범위의 정수 중 하나의 값이 들어감
if(num>0){
    console.log("해당 숫자는 양수입니다.")
}else if(num<0){
    console.log("해당 숫자는 음수입니다.")
} else if(num==0){
    console.log("해당 숫자는 0입니다.")
}else{
    console.log("올바른 값을 입력해주세요.")
}

//해당 함수에서 floor을 사용하여 소수점을 버리게 해서 0이 나올 수 있는 확률을 높임

//문제2 레포트 점수에 따라 등급을 매기는 프로그램을 만들어보자

let score = Math.floor(Math.random() * 101); //0~100 범위의 정수 값
let grade = '' // 등급을 담는 변수
let opt = " " // 세부 등급을 담는 변수

//등급 결정
if(score>=90){
    grade = 'A'
}else if(score>=80){
    grade = 'B'
}else if(score>=70){
    grade = 'C'
}else if(score>=60){
    grade = 'D'
}else if(score<60){
    grade = 'F'
}else{
    console.log("올바른 값을 넣어주세요.")
}

// 세부 등급 추가 (F는 제외)
if (grade !== 'F') {
    if (score % 10 >= 7) {
        opt = '+'; // 7~9점대는 +
    } else if (score % 10 <= 3) {
        opt = '-'; // 0~3점대는 -
    }else{
        opt = '0'
    }
}
console.log(grade+opt)

//문제3 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다.
//      let skills = ["HTML", "CSS", "JavaScript", "React"]
//      JavaScript와 React 둘 다 할 줄 안다면 "합격!", Javascript와 React 둘 중 하나만 할 줄 안다면 "예비",
//      두 스킬이 없다면 "탈락"을 보여주는 프로그램을 만들어보자

const techs = ["HTML", "CSS", "JavaScript", "React"];
let skills = [];
let count = 0
let result = " "

techs.forEach(tech => {
    if (Math.random() < 0.5) { // 각 아이템을 50% 확률로 포함시킴
        skills.push(tech);
    }
});

if(skills.includes("JavaScript") == true){
    count++
}

if(skills.includes("React") == true){
    count++
}

if(count === 2){ // ===을 사용해서 자료형의 종류까지 확인
    console.log("합격!")
}else if(count === 1){
    console.log("예비..")
}else{ //0말고 다른 값이 들어올 수 없어서 else처리
    console.log("탈락...")
}