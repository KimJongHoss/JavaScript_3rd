
//for문 : 정확히 for문을 얼마나 돌리고 싶은지 범위를 알때 사용
for(let i = 0; i<10; i++){
    console.log("Hello World", i)
}

//짝수만 출력하기
for(let i = 0; i<10; i++){
    if(i%2 == 0){
        console.log("Hello World", i)
    }
}

for(let i = 0; i<10; i+=2){ //처리 속도가 빠르다
        console.log("Hello World", i)
}

//이중 for문
for(let i = 2; i<=9; i++){
    for(let j = 1; j<=9; j++){
        console.log(i + " x " + j + " = " + i*j)
    }
}

//while문 : 범위를 정확히 특정할 수 없을 때
let i = 2
while(i<10){
    console.log("while문 실행", i)
    i++
}

//for문의 배열 활용

let fruit = ["banana", "apple", "grape", "mango"]

for(let i = 0; i<fruit.length; i++){
    console.log(fruit[i])
}