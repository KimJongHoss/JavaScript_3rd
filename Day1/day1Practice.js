//문제1 두 변수 a, b의 값을 바꾸기
let a = 1
let b = 2
console.log(a, b) //1, 2

let temp = 0
temp = a
a = b
b = temp

console.log(a, b) //1, 2

//문제2 다음 연산자들의 결과값을 예측해보자

let c = 20 + 30 //둘 다 숫자 타입이므로 수학적으로 계산된 50이 나올 것이다.
console.log(c)
let d = "20" + "30" // 둘 다 문자열 타입이므로 2030이 나올 것이다
console.log(d)
let e = "Hello" + " " + 2021 // 문자열이 포함되어 있기 때문에 Hello 2021로 나올 것이다.
console.log(e)
let f = 1 + 2 * 3 // 모두 숫자 타입이기 때문에 수학적으로 계산된 7이 나올 것이다.
console.log(f)
let g = (1 + 3) ** 2 // 모두 숫자 타입이고 4를 2번 거듭제곱하기 때문에 16이 나올 것이다.
console.log(g)
let h = 1 / 0 // 모두 숫자 타입이고 0으로 어떤 숫자를 나눴기 때문에 infinity가 나올 것이다.
console.log(h)
let i = 6 % 2 // 6을 2로 나눴을 때 나머지가 0이기 때문에 0이 출력될 것이다.
console.log(i)
let j = 7.5 % 2 // 7.5를 2로 나눴을 때 나머지인 1.5가 출력될 것이다.
console.log(j)
let k = 5 == 5 // 5와 5는 같은 값이기 때문에 true가 출력될 것이다.
console.log(k)
let l = 5 === 5 // 5와 5는 같은 값이고 같은 타입이기 때문에 true가 출력될 것이다.
console.log(l)
let m = 5 == "5" // 5와 "5"는 같은 값이기 때문에 true가 출력될 것이다.
console.log(m)
let n = 5 === "5" // 5와 "5"는 같은 값이지만 다른 타입이기 때문에 false가 출력될 것이다.
console.log(n)
let o = 5 != 5.0 // 5와 5.0은 같은 값이기 때문에 false가 출력될 것이다.
console.log(o)
let p = 5 !== 5.0 // 5와 5.0은 같은 값이고 같은 숫자 타입이기 때문에 false가 출력될 것이다.
console.log(p)
let q = "true" === true // "true"는 문자열 타입이고 true는 boolean 타입이기 때문에 false가 출력될 것이다.
console.log(q)
let r = 5 <= 5.0 //두 값은 같기 때문에 true가 출력될 것이다.
console.log(r)
let s = 5 >= 5 //두 값은 같기 때문에 true가 출력될 것이다.
console.log(s)
let t = true || true //둘 중에 하나 이상이 true값이기 때문에 true가 출력될 것이다.
console.log(t)
let u = true || false //둘 중에 하나 이상이 true값이기 때문에 true가 출력될 것이다.
console.log(u)
let v = true && true //두 값 모두 true이기 때문에 true가 출력될 것이다.
console.log(v)
let w = true && false //두 값 중 하나이상 false이기 때문에 false가 출력될 것이다.
console.log(w)
let x = !true // true에 부정연산자가 붙었기 때문에 false가 출력 될 것이다.
console.log(x)
let y = !false // false에 부정연산자가 붙었기 때문에 true가 출력 될 것이다.
console.log(y)