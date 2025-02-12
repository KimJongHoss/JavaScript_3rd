//조건문의 구조

// if(조건문){ //조건문이 true가 되면 if문 실행
//     조건이 충족하면 할일들
// }

if(true){
    console.log("조건은 참입니다.")
}

//else문
if(false){
    console.log("조건은 참입니다.")
}else{
    console.log("거짓입니다.")
}

//if문 예시
let age = 21

if(age > 20){
    console.log("운전이 가능합니다.")
}else{ //모든 조건이 거짓일 때 실행
    console("운전 불가능합니다.")
}

//else if문
age = 18

if(age > 20){ //필수 구문
    console.log("운전이 가능합니다.")
}else if(age>=18){ //선택 구문
    console.log("오토바이 운전이 가능합니다.")
}else{ //선택 구문
    console("운전 불가능합니다.")
}

//if문의 순서
age = 21

if(age>=18){ //범위를 작은 것부터 큰 것으로 두어야 한다.
    console.log("오토바이 운전이 가능합니다.")
}else if(age > 20){ 
    console.log("운전이 가능합니다.")
}else{ 
    console("운전 불가능합니다.")
}

//논리연산자와 함께 사용하는 if문
if(age>=18 && age < 20){ //AND연산자
    console.log("오토바이 운전만 가능합니다.")
}else if(age > 20){ 
    console.log("운전이 가능합니다.")
}else{ 
    console("운전 불가능합니다.")
}

if(age>=18 || age < 20){ //OR연산자
    console.log("오토바이 운전만 가능합니다.")
}else if(age > 20){ 
    console.log("운전이 가능합니다.")
}else{ 
    console("운전 불가능합니다.")
}

//if문 속 if문
let licence = false

if(age > 20){ //필수 구문
    if(licence == true){
        console.log("운전이 가능합니다.")
    }else{
        console.log("면허를 취득하세요!")
    }
}else if(age>=18){ //선택 구문
    console.log("오토바이 운전이 가능합니다.")
}else{ //선택 구문
    console("운전 불가능합니다.")
}