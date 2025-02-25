//예제 1
console.log(1);
console.log(2);
console.log(3);

//예제2
console.log(1);
function test(){
    console.log(2);
    console.log(3);
}

test();

//예제 3

console.log(1);
setTimeout(() => console.log(2), 5000);
console.log(3);