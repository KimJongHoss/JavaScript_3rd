// let fruit = "banana"
// let fruit2 = "apple"
// let fruit3 = "grape"
// let fruit4 = "mango"

let fruit = ["banana", "apple", "grape", "mango"]

console.log(fruit)

//index를 이용해서 특정 데이터 가져오기

console.log(fruit[0])

//index를 이용해서 특정 데이터 바꾸기

fruit[0] = "cherry"
console.log(fruit)
fruit[2] = "tomato"
console.log(fruit)

//pop() : 배열 마지막에 있는 아이템을 뺌

fruit.pop()
console.log(fruit)

// push() : 배열 마지막에 아이템을 추가

fruit.push("pineapple")
console.log(fruit)

// includes() : 해당 아이템을 배열이 포함하고 있는지 알려줌

console.log("apple : " + fruit.includes("apple"))
console.log("pear : " + fruit.includes("pear"))

// indexOf() : 아이템의 인덱스를 찾아줌

console.log("apple's index : " + fruit.indexOf("apple"))

// slice() : 배열을 잘라낼 때 사용 - 잘라내고 싶은 index의 시작점과 끝점을 지정

console.log(fruit.slice(2)) //index가 2인 데이터부터 자른 배열을 출력.

console.log(fruit.slice(1, 3)) //index가 1인 데이터부터 3미만인 데이터만 자른 배열을 출력

// splice() : 배열을 잘라낼 때 사용 - 시작점으로부터 몇 개의 아이템을 제거하고 싶은지 입력

fruit.splice(2,1) 
console.log(fruit)

// length : 배열의 크기를 리턴해주는 속성

console.log(fruit.length)