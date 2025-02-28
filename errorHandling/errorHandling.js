let weight = 29

try{
    // 소스 코드를 쓴다.
    //이 안에서 에러가 발생하면
    gildong

}catch(error){
    // catch가 에러를 잡아준다.
    console.log("내가 잡은 에러는 ", error.message)
}

try{
    if(weight<30){
        throw new Error("당신은 너무 말랐습니다.") //throw : error를 강제로 발생시킬 때 사용
    }
    
}catch(error){
    console.log("내가 잡은 에러는 ", error.message)
}
//에러를 핸들링하고 싶다면 소스 코드를 try 안에 쓰자

//에러가 발생하면 해당 try문은 끝나게 됨
try{
    console.log("하하하")
    if(weight<30){
        throw new Error("당신은 너무 말랐습니다.") //throw : error를 강제로 발생시킬 때 사용
    }
    console.log("밥먹자~~~")
    
}catch(error){
    console.log("내가 잡은 에러는 ", error.message)
}