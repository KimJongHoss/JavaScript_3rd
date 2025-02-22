// 1. 객체

// 1) 객체 초기화 방법

let name ="gilDong";
let age = 17;

// let person = {name: name, age: age}

let person = {name, age} //변수 이름이 키값이었으면 좋겠을 때만 사용 가능
// let person ={ nameValue: name, ageValue: age}와 같이 변수 이름과 키값이 다르면 사용 불가
console.log(person)

// 2) 객체를 분해하는 방법

let project = {
    projectName: "JSProject",
    usingLanguage: 3
}

// 객체의 값을 꺼내다가 다시 변수로 만들기
// let projectName = project.projectName;
// let usingLanguage = project.usingLanguage;

let {projectName, usingLanguage} = project //변수 이름과 키값을 다르게 설정할 때는 사용 불가

console.log(projectName, usingLanguage)

// 3) Spread 연산자 - 특정 데이터만 필요할 경우

let person2 = {
    personName:"ilsik",
    personAge: 32,
    healthy: true
}

// let {personName, personAge, healthy} = person2 //모든 객체의 요소 변수로 만들기

let {personName,...restInfo} = person2 //이름만 변수로 꺼내오고 다른 요소들은 객체로 묶기

console.log(personName, restInfo)

// 4) 동적인 데이터 log에서 사용하기

let name2 = "chelsu"
let age2 = 25

console.log("제 이름은",name2,"입니다. 제 나이는", age, "입니다.")
console.log("제 이름은 "+name2+"입니다. 제 나이는"+ age+ "입니다.")

console.log(`제 이름은 ${name2}입니다. 제 나이는 ${age2}입니다.`)


// 2. 배열

// 1) array의 요소들을 변수로 만들고 순서대로 값을 넣어주는 방법
let array = [1, 2, 3]

// let a = array[0]
// let b = array[1]
// let c = array[2]

// let [a,b,c] = array

// console.log(a, b, c)

// 2) Spread 연산자 - 특정 데이터만 필요할 경우

let [a,...rest] = array

console.log(a)
console.log(rest)

// 3) 여러 배열의 요소들을 한 번에 출력
// ... : 변수의 내용을 복사해옴

let ar = [1, 2]
let br = [3, 4]
let cr = [5, 6]

// let result = ar.concat(br, cr)
let result =[...ar, ...br, ...cr]
console.log(result)

// 3. 화살표 함수
function foo (){
    console.log("hello")
}

let foo2 =()=> {
    console.log("hello")
}

foo()
foo2()

// return 있는 화살표 함수
function foo3(){
    return "haha"
}

let foo4 =()=> "haha" //return 생략 가능, 함수가 한줄이고 리턴만 있으면 {} 생략 가능

console.log(foo3(), foo4())

// 화살표 함수가 함수를 대체할 수 없는 이유
// this때문

let age3 =17
let person3 = {
    name3: "isik",
    age3: 20,
    getInfo2: function(){
        console.log(age3)
    } 
}

person3.getInfo2() //전역 변수가 나오게 됨

let age4 =17
let person4 = {
    name3: "isik",
    age4: 20,
    getInfo3: function(){
        console.log(this.age4)
    } 
}

person4.getInfo3() //지역 변수가 나오게 됨
// 함수를 부르는 객체가 this
// 이 this가 화살표 함수에는 없음
//lexical scope : 내가 포함되어 있는 범위