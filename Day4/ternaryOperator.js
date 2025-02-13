let menu = 2

//if문
if(menu <= 3){
    console.log("범위 안의 숫자입니다.")
}else{
    console.log("범위 밖의 숫자입니다.")
}

//삼항 연산식 조건? true일 때 : false일 때
let answer = menu <=3? "범위 안의 숫자입니다.":"범위 밖의 숫자입니다."

console.log(answer)

//1. 조건이 많지 않고
//2. 반환하고 싶은 값이 딱 하나만 코드에 있을 때 사용