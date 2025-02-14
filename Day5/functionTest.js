// 문제1 "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오

function greet(){
    console.log("안녕 내 이름은 제시카야")
}

greet()

// 문제2 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”

function greetUpdate(name){
    console.log("안녕 내 이름은", name + "야")
}

greetUpdate("에밀리")
greetUpdate("할리")

// 문제3 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
function greetValue(name){
    console.log("안녕 내 이름은", name + "야")
    return name
}

let result = greetValue("철수")
console.log("매개변수 name :", result)

//  문제4 meetAt 함수를 만들어주세요.
//  인자를 세개 받습니다.
//  첫번째 인자는 년도에 해당하는 숫자입니다.
//  두번째 인자는 월에 해당하는 숫자입니다.
//  세번째 인자는 일에 해당하는 숫자입니다.
//  년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
//  년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을
//  리턴 해주세요.
//  년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을
//  리턴 해주세요.
// 결과 예시
// meetAt(2022); // 결과 --> 2022년
// meetAt(2032, 3); // 결과 --> "2032년 3월"
// meetAt(1987, 10, 28); // 결과 --> "1987/10/28"

function meetAt(year, month, day) {
    if (arguments.length === 1) {
        return year + "년"
    } else if (arguments.length === 2) {
        return year + "년 " + month + "월"
    } else if (arguments.length === 3) {
        return year + "/" + month + "/" + day
    }
}

console.log(meetAt(2025));        // "2025년"
console.log(meetAt(2025, 2));     // "2025년 2월"
console.log(meetAt(2025, 2, 14)); // "2025/2/14"

// 문제5 findSmallestElement 함수를 구현해 주세요.
// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열
// [100,200,3,0,2,1]

function findSmallestElement(arr){
    // 배열인지 확인 (Array.isArray 사용)
    if (!Array.isArray(arr)) {
        console.log("배열이 아닙니다.");
        return;
    }

    // 숫자로만 이루어진 배열인지 확인 (every 사용)
    if (!arr.every(num => typeof num === "number")) {
        console.log("배열에 숫자 외의 값이 포함되어 있습니다.");
        return;
    }

    // 배열이 비어있는지 확인
    if(arr.length == 0){
        console.log("배열이 비어있습니다.")
        return 0;
    }

    // 가장 작은 값 return
    let min = arr[0];
    for (let num of arr) {
        if (num < min) {
            min = num;
        }
    }

    return min;
}

let array = [100, 200, 3, 0, 2, 1]
let resultArray = findSmallestElement(array)
console.log(resultArray)


// 문제6 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
// 출력예 )
// 12300인 경우
//  50000 X 0
//  10000 X 1
//  5000  X 0
//  1000 X 2
//  500 X 0
//  100 X 3

function giveChange(money){
    const MAX_COST = Number.MAX_SAFE_INTEGER //최대 비용 설정
    let oman = 0 //오만원권 개수
    let man = 0 //만원권 개수
    let ochen = 0 //오천원권 개수
    let chen = 0 //천원권 개수
    let oback = 0 //500원 개수
    let back = 0 //100원 개수
    let osip = 0 //50원 개수
    let sip = 0 //10원 개수
    let o = 0 // 5원 개수
    let il = 0 //1원 개수

     // money가 숫자인지 확인
     if (typeof money !== 'number') {
        console.log("입력된 값은 숫자가 아닙니다.");
        return;
    }

    // 최대 비용을 넘지 않도록 확인
    if (money > MAX_COST) {
        console.log("비용이 너무 큽니다. 최대 비용은", MAX_COST, "입니다.");
        return;
    }
    
    //5만원권 세기
    if (money>50000){
        oman = Math.floor(money/50000)
        money -= 50000*oman
    }

    //만원권 세기
    if(money>10000){
        man = Math.floor(money/10000)
        money -= 10000*man
    }

    //오천원권 세기
    if(money>5000){
        ochen = Math.floor(money/5000)
        money -= 5000*ochen
    }

    //천원권 세기
    if(money>1000){
        chen = Math.floor(money/1000)
        money -= 1000*chen
    }

    //500원 세기
    if(money>500){
        oback = Math.floor(money/500)
        money -= 500*oback
    }

    //100원 세기
    if(money>100){
        back = Math.floor(money/100)
        money -= 100*back
    }

    //50원 세기
    if(money>50){
        osip = Math.floor(money/50)
        money -= 50*osip
    }

    //10원 세기
    if(money>10){
        sip = Math.floor(money/10)
        money -= 10*sip
    }

    //5원 세기
    if(money>5){
        o = Math.floor(money/5)
        money -= 5*o
    }

    //1원 세기
    if(money>1){
        il = Math.floor(money/1)
        money -= 1*il
    }
    console.log("50000" + " X " + oman + "\n"
        +"10000" + " X " + man + "\n"
        +"5000" + " X " + ochen + "\n"
        +"1000" + " X " + chen + "\n"
        +"500" + " X " + oback + "\n"
        +"100" + " X " + back + "\n"
        +"50" + " X " + osip + "\n"
        +"10" + " X " + sip + "\n"
        +"5" + " X " + o + "\n"
        +"1" + " X " + il + "\n"
    )
}

giveChange(12300)