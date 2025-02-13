let menu = 3

//if문
if(menu == 1){
    console.log("물건 사기")
} else if(menu == 2){
    console.log("잔고 확인")
} else if(menu == 3){
    console.log("히스토리 확인")
}else {
    console.log("홈으로 돌아가기")
}

//switch문
switch(menu){
    case 1 :
        console.log("물건 사기")
        break;
    case 2 :
        console.log("잔고 확인")
        break;
    case 3 :
        console.log("히스토리 확인")
        break;
    default :
        console.log("홈으로 돌아가기")
}
// switch문이 좀 더 제한이 존재
// 값 하나로 딱 떨어지는 경우만 사용 가능

if(menu == 1){ //if문은 이와 같이 논리 연산자와 함꼐 범위 표현이 가능
    console.log("물건 사기")
}else if(1<menu == menu < 4){
    console.log("잔고 확인")
} else {
    console.log("홈으로 돌아가기")
}

switch(menu){ //위 if문을 switch문으로 표현하고 싶으면 이와 같이 표현
    case 1 :
        console.log("물건 사기")
        break;
    case 2 : case 3 :
        console.log("잔고 확인")
        break;
    default :
        console.log("홈으로 돌아가기")
}