

const API_KEY=`aba0666514534ea79d87736c79641bcd`
let newsList = []
const menus = document.querySelectorAll(".menus button")//모든 카테고리
menus.forEach(menu=>menu.addEventListener("click", (event)=>getNewsByCategory(event))) //menu click event

//news 데이터를 가져오는 함수
// async function getLatestNews () {
//     const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

//     const response = await fetch(url);//fetch : url에 있는 데이터를 가져오는 함수
//     const data = await response.json()
//     newsList = data.articles
//     render();

// };

// const getNewsByCategory= async (event)=>{ // menu click 함수
//     const category = event.target.textContent.toLowerCase();
//     console.log("category",category);
//     const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
//     const response = await fetch(url);
//     const data = await response.json();
//     newsList = data.articles;
//     console.log("data", data)

//     render();
// }

// const getNewsByKeyword= async ()=>{
//     const keyword = document.getElementById("search-box").value;
//     console.log("keyword",keyword);
//     const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&q=${keyword}&apiKey=${API_KEY}`);
//     const response = await fetch(url);
//     const data = await response.json();
//     newsList = data.articles;
//     console.log("keyword", keyword)

//     render();
// }

const fetchNews = async (params = {}) => {
    const url = new URL("https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines");
    url.searchParams.append("country", "kr"); //append : URLSearchParams 객체의 메서드로, URL에 쿼리 파라미터를 추가하는 역할
    // url.searchParams.append("apiKey", API_KEY);

    Object.entries(params).forEach(([key, value]) => { //Object.entries(params): 객체의 속성(key-value 쌍)을 배열 형태로 변환하는 메서드
        url.searchParams.append(key, value);
    });

    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;

    render();
};

// 최신 뉴스 가져오기
const getLatestNews = () => fetchNews();

// 카테고리별 뉴스 가져오기
const getNewsByCategory = (event) => {
    const category = event.target.textContent.toLowerCase();
    fetchNews({ category });
};

// 키워드 검색 뉴스 가져오기
const getNewsByKeyword = () => {
    const keyword = document.getElementById("search-box").value;
    fetchNews({ q: keyword });
};

const render=()=>{
    const newsHTML = newsList.map(
        (news)=>{
            // // 테스트를 위해 news.source.name을 null로 변경
            // if (news.title === "유재석 “아이유, 박명수 앞에서 안 쫄아..저 친구 보통 아니다 느껴” (‘핑계고’)[종합] - 조선비즈 - 조선비즈") { // 특정 뉴스 제목을 선택하여 테스트
            //     news.source.name = null;
            // }

            // // 테스트를 위해 news.publishedAt을 특정 시간대로 변경
            // if (news.title === "유재석 “아이유, 박명수 앞에서 안 쫄아..저 친구 보통 아니다 느껴” (‘핑계고’)[종합] - 조선비즈 - 조선비즈") { // 특정 뉴스 제목을 선택하여 테스트
            //     news.publishedAt = "2025-02-17T16:05:00Z";
            // }

            let description = news.description;
            let newsImage = news.urlToImage;
            let newsSource = news.source.name;
            let newsDate = timeAgo(news.publishedAt);
            console.log("description", description)
            console.log("newsImage", newsImage)
            console.log("newsDate", newsDate)
            if (description === null || description.trim() === "") { //내용 없는 경우
                description = "No Description";
            }
            if (description.length > 200) { //내용이 200자가 넘는 경우
                description = description.substring(0, 200) + " ...";
            }
            if (newsImage === null) { //이미지 없는 경우
                newsImage = "assets/img/no-image.png";
                console.log("newsImageAfterPut", newsImage)
            }
             // 따옴표 추가
             newsImage = `"${newsImage}"`;

             if (newsSource === null) { //출처 없는 경우
                newsSource = "No source";
                console.log("newsSource", newsSource)
            }
        return `<div class="row news">
            <div class="col-lg-4 news-img">
                <img class="news-img-size" src=${newsImage} onerror="this.src='assets/img/no-image.png';"/>
            </div>
            <div class="col-lg-8 news-contents">
                <h2>
                    ${news.title}
                </h2>
                <p>
                    ${description}
                </p>
                <div>
                    ${newsSource} * ${newsDate}
                </div>
            </div>
        </div>`;
        }
    ).join(''); //onerror 코드로 404인 링크를 잡아낼 수 있다.
    console.log("html", newsHTML)

    document.getElementById('news-board').innerHTML = newsHTML;
}

getLatestNews();

// 1. 버튼들에 클릭 이벤트 주기

// 2. 카테고리별 뉴스 가져오기
// 3. 그 뉴스 데이터 보여주기


function timeAgo(dateString) { //시간을 ~ago 형태로 바꾸는 함수
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.round((now - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = Math.round(months / 12);

    if (seconds < 60) {
        return seconds + " seconds ago";
    } else if (minutes < 60) {
        return minutes + " minutes ago";
    } else if (hours < 24) {
        return hours + " hours ago";
    } else if (days < 30) {
        return days + " days ago";
    } else if (months < 12) {
        return months + " months ago";
    } else {
        return years + " years ago";
    }
}

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