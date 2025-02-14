
//문제 1 1부터 100까지 더하는 for문을 만들고 결과를 출력해보자.
let result = 0;

for(let i=1; i<=100; i++){
    result += i
}

console.log(result)

//문제2 1부터 100까지 홀수만 출력하는 반복문을 만들어보자

for(let i=1; i<=100; i+=2){
    console.log(i)
}

//문제3 1부터 50까지 369 결과를 프린트해보자

for(let i=1;i<=50; i++){
    if(i%10%3==0 && i%10 != 0){
        if(Math.floor(i/10)%3 == 0 && i>10){ //10의자리와 1의자리 모두 3의 배수일 경우
            console.log("짝짝")
        }else{ //1의자리가 3의 배수인 경우
            console.log("짝")
        }
    }else if(Math.floor(i/10)%3 == 0 && i>10){ //10의 자리가 3의 배수인 경우
        console.log("짝")
    }else{
        console.log(i)
    }
}

//문제4 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 만들어 보자.
//소수는 1과 자기자신 말고는 나머지가 0이 나와서는 안된다.

let num = Math.floor(Math.random()*100+1)
let primeNumber = true
for(let i =2; i<num; i++){
    if (num%i==0){
        primeNumber = false
    }
}
console.log(num + "은 소수이다라는 사실이 " + primeNumber + "입니다." )