
const API_KEY=`aba0666514534ea79d87736c79641bcd`
let news = []
//news 데이터를 가져오는 함수
async function getLatestNews () {
    const url = new URL( `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr`);

    console.log("kkk", url);

    const response = await fetch(url);//fetch : url에 있는 데이터를 가져오는 함수
    const data = await response.json()
    news = data.articles
    console.log("hhh", response)
    console.log("ggg", news)


};

getLatestNews();
