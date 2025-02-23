let names = ["Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein"]

    // 원래 for문을 사용할 때
    // for(let i =0; i<names.length; i++){
    //     console.log(names[i])
    // }

    // foreach() 함수

    // 원래 방식
    // function printName(item){
    //     console.log(item)
    // }

    // names.forEach(printName)

    //함수를 매개변수로 넣어버리기
    // names.forEach(function (item){
    //     console.log(item)
    // })

    //ES6 문법 사용
    names.forEach((item)=>console.log(item))

    // index도 같이 넘기기
    names.forEach((item, index)=>console.log(item, index))

    //map()

    let data = names.map((item)=>{
        return item
    })

    console.log(data)
    // foreach()는 반환해주는 값이 없지만 map()은 반드시 배열을 반환한다.
    
    //map() 활용 방법
    let ceoList =[
        {name:"Larry Page", age:23, ceo:true},
        {name:"Tim Cook", age:40, ceo:true},
        {name:"Elon Musk", age:55, ceo:false}
    ]

    //ceoList 중 name만 모아서 출력하고 싶을 때
    let ceoData = ceoList.map((item)=>{
        return item.name
    })

    console.log(ceoData)

    //filter
    let namesFilter = names.filter((item)=>{
        return item.startsWith("L")
    })

    console.log(namesFilter)

    let ceoFilter = ceoList.filter((item)=>{
        return item.age==23
    })

    console.log(ceoFilter)

    //some() : 있는지 없는지만 boolean형으로 알려줌
    let namesSome = names.some((item)=>{
        return item.startsWith("L")
    })

    console.log("some:",namesSome)

    //every() : 모든 데이터가 해당 조건에 합당한지 boolean형으로 알려줌
    let namesEvery = names.every((item)=>{
        return item.startsWith("L")
    })

    console.log("every:",namesEvery)

    //find() : 해당 조건에 속하는 가장 먼저 찾은 문자열 하나 반환
    let namesfind = names.find((item)=>{
        return item.startsWith("L")
    })

    console.log("find:",namesfind)

    //findIndex() : 해당 조건에 속하는 가장 먼저 찾은 데이터의 index 번호를 반환
    let namesfindIndex = names.findIndex((item)=>{
        return item.startsWith("L")
    })

    console.log("findIndex:",namesfindIndex)