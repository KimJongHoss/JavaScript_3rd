//객체 사용법
let patient = {
    name : "gildong",
    age : 17,
    disease : "cold"
}

console.log(patient)

//객체 특정 데이터 출력
console.log(patient.name)
console.log(patient.age)

console.log(patient["age"])

//객체 특정 데이터 변경
patient.name = "minsu"
patient["age"] = 25
console.log(patient)

//배열로 객체 다루기
let patientList = [{name:"ilsik", age: 13, disease:"cold"}, 
    {name:"isik", age: 25, disease:"headache"}, {name:"samsik", age: 23, disease:"colic"}]

console.log(patientList)

//배열에 있는 객체의 데이터 출력
console.log("첫 번째 환자는 ", patientList[0])

//배열에 있는 객체의 특정 데이터 출력
console.log("첫 번째 환자의 나이는 ", patientList[0].age,"살입니다.")
console.log("첫 번째 환자의 나이는 ", patientList[0]["age"],"살입니다.")

console.log("두 번째 환자의 이름은 ", patientList[1].name,"입니다.")
console.log("두 번째 환자의 이름은 ", patientList[1]["name"],"입니다.")

console.log("세 번째 환자의 이름는 ", patientList[2].name,"입니다.")
console.log("세 번째 환자의 나이는 ", patientList[2]["age"],"살입니다.")