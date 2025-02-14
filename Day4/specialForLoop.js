
let fruit = ['apple', 'mango', 'strawberry', 'pineapple']

let sentence = 'Hello World'

for(let i=0; i<fruit.length; i++){
    console.log("좋아하는 과일은", fruit[i])
}

//for ... of : 배열이나 문자열처럼 하나하나 순회할수 있는 데이터
for(let item of fruit){
    console.log("내가 좋아하는 과일은",item)
}

for(let char of sentence){
    console.log("char = ", char)
}

//장점 : 단순함
//단점 : 세부 조절이 불가능함

//for ... in : 키값을 가져올 때 사용
let person ={
    name : 'gildong',
    age : 25,
    healthy : true
}

for(let key in person){
    console.log("key = ",key)
    if(key === "healthy"){
        console.log("얘는 건강하니?", person[key])
    }
}

for(let key in fruit){
    console.log("key", key)
}

//키값이 동적일 때