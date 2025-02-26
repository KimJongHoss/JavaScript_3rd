
const API_KEY=`aba0666514534ea79d87736c79641bcd`
let news = []
//news 데이터를 가져오는 함수
async function getLatestNews () {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

    console.log("kkk", url);

    const response = await fetch(url);//fetch : url에 있는 데이터를 가져오는 함수
    const data = await response.json()
    news = data.articles
    console.log("hhh", response)
    console.log("ggg", news)


};

getLatestNews();

document.addEventListener('DOMContentLoaded', function () { //햄버거 메뉴
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menus = document.querySelector('.menus');

    if (hamburgerMenu && menus) {
        hamburgerMenu.addEventListener('click', function () {
            menus.classList.toggle('active');
        });
    }
});

document.getElementById("search-icon").addEventListener("click", function() { //input 박스 보였다가 안보였다가
    var searchBox = document.getElementById("search-box");
    var searchButton = document.getElementById("search-button");
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
        searchBox.style.display = "block";  // input 박스를 보이게
    } else {
        searchBox.style.display = "none";  // input 박스를 숨기게
    }
    if (searchButton.style.display === "none" || searchButton.style.display === "") {
        searchButton.style.display = "block";  // button을 보이게
    } else {
        searchButton.style.display = "none";  // button을 숨기게
    }
});