// 문제에 사용될 배열
let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
  ];

//  map 문제
//  모든 이름을 대문자로 바꾸어서 출력하시오.
let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);
//  성을 제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let firstName = names.map(firstName => firstName.split(" ")[0]);

console.log(firstName);

//  이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let initials = names.map(initial => 
    initial
      .split(" ") // 띄어쓰기로 단어 나누기
      .map(word => word.charAt(0).toUpperCase()) // 각 단어의 첫 글자만 가져오기
      .join("") // 다시 문자열로 합치기
  );
  
  console.log(initials);

//  filter 문제
//  이름에 a를 포함한 사람들을 출력하시오.
  let namesFilter = names.filter(item => item.includes('a'));

  console.log(namesFilter)
//  이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
    let repeatedWords = names.filter(word => {
        return [...word].some((char, index, arr) => index > 0 && char === arr[index - 1]);
    });

    console.log(repeatedWords);

    // some 문제
    // 전체 이름의 길이가 20자 이상인 사람이 있는가?
    let twentyOvername = names.some(item =>{
        return [...item].length >= 20
    })
    console.log(twentyOvername)

    // 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
    let includePExceptFirstName = names.some(item => {
        let parts = item.split(" "); // 띄어쓰기로 단어 나누기
        let firstNameRemoved = parts.slice(1); // 성을 제외한 나머지 이름 부분
        return firstNameRemoved.some(name => name.toLowerCase().includes("p")); // p 포함 여부 체크
    })

    console.log(includePExceptFirstName);

    // every 문제
    // 모두의 전체 이름의 길이가 20자 이상인가?
    let everyTwentyOvername = names.every(item =>{
        return [...item].length >= 20
    })
    console.log(everyTwentyOvername)

    // 모두의 이름에 a 가 포함되어 있는가?
    let everyIncludePExceptFirstName = names.every(item => {
        let parts = item.split(" "); // 띄어쓰기로 단어 나누기
        let firstNameRemoved = parts.slice(1); // 성을 제외한 나머지 이름 부분
        return firstNameRemoved.some(name => name.toLowerCase().includes("a")); // a 포함 여부 체크
    })
    console.log(everyIncludePExceptFirstName);

    // find 문제
    // 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
    let findTwentyOvername = names.find(item =>{
        return [...item].length >= 20
    })
    console.log(findTwentyOvername)

    // 미들네임이 포함되어있는 첫번째 사람을 찾으시오.(예-Steven Paul Jobs)
    let hasMiddleName = names.find(name => name.split(" ").length === 3);

    console.log(hasMiddleName);

    // findIndex 문제
    // 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
    let findIndexTwentyOvername = names.findIndex(item => item.length >= 20);
    console.log(findIndexTwentyOvername);
    // 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
    let hasMiddleNameIndex = names.findIndex(name => name.split(" ").length === 3);

    console.log(hasMiddleNameIndex);
