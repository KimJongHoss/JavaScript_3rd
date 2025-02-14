//햄버거 만드는 코드

console.log("빵 두기")
console.log("상추 두기")
console.log("고기 패티 두기")
console.log("참깨빵으로 마무리~")

//감자튀김 만드는 코드

console.log("감튀 박스 선택")
console.log("감튀 담기")

//콜라 만드는 코드

console.log("콜라통 선택")
console.log("얼음 담기")
console.log("콜라담기")

//햄버거 만드는 함수

function makeBurger(){
    console.log("빵 두기")
    console.log("상추 두기")
    console.log("고기 패티 두기")
    console.log("참깨빵으로 마무리~")
}

//감자튀김 만드는 함수

function serveFrenchFries(){
    console.log("감튀 박스 선택")
    console.log("감튀 담기")

}

//콜라 만드는 함수

function serveCoke(){
    console.log("콜라통 선택")
    console.log("얼음 담기")
    console.log("콜라담기")
}

//함수 호출하기
makeBurger()
serveFrenchFries()
serveCoke()

//함수에 매개변수와 함께 사용

function makeBurgerWithPatty(patty){
    console.log("빵 두기")
    console.log("상추 두기")

    if(patty == "불고기"){
        console.log("고기 패티 두기")
    }else if(patty == "새우"){
        console.log("새우 패티 두기")
    }
    
    console.log("참깨빵으로 마무리~")
}

makeBurgerWithPatty("새우")

//함수에 여러 매개변수와 함께 사용

function makeBurgerEntire(patty, size, num){
    console.log("빵 두기")
    console.log("상추 두기")

    if(patty == "불고기"){
        console.log("고기 패티 두기")
    }else if(patty == "새우"){
        console.log("새우 패티 두기")
    }
    
    console.log("참깨빵으로 마무리~")
    console.log(patty + "버거 " + size + "사이즈 " + num + "개 준비 완료")
}

makeBurgerEntire("불고기", "L", 3)

//return : 함수가 끝났을 때 결과값이 필요할 때 사용

function makeBurgerReturn(patty, size, num){
    console.log("빵 두기")
    console.log("상추 두기")

    if(patty == "불고기"){
        console.log("고기 패티 두기")
    }else if(patty == "새우"){
        console.log("새우 패티 두기")
    }
    
    console.log("참깨빵으로 마무리~")
    console.log(patty + "버거 " + size + "사이즈 " + num + "개 준비 완료")

    return "완료되었습니다."
}

let result = makeBurgerReturn("소고기", "M", 5)
console.log("버거 프로세스 결과", result)

//return을 만나면 함수가 끝나게 됨

function makeBurgerZero(patty, size, num){
    console.log("빵 두기")
    console.log("상추 두기")
    if(num < 1){
        return "버거 개수가 0개입니다."
    }

    if(patty == "불고기"){
        console.log("고기 패티 두기")
    }else if(patty == "새우"){
        console.log("새우 패티 두기")
    }
    
    console.log("참깨빵으로 마무리~")
    console.log(patty + "버거 " + size + "사이즈 " + num + "개 준비 완료")

    return "완료되었습니다."
}

let resultZero = makeBurgerZero("새우", "S", 0)
console.log("버거 개수가 0개일 때 결과 : ", resultZero)

//함수를 모아서 함수 만들기

function makeSet(){
    makeBurgerEntire("불고기", "M", 2)
    serveCoke()
    serveFrenchFries()
}

makeSet()