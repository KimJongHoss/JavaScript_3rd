
const API_KEY=`aba0666514534ea79d87736c79641bcd`
let newsList = []
const menus = document.querySelectorAll(".menus button")//모든 카테고리
menus.forEach(menu=>menu.addEventListener("click", (event)=>getNewsByCategory(event))) //menu click event
let totalResult = 0
let page = 1
const pageSize = 10
const GROUPSIZE = 5

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
    try{
        const url = new URL("https://newsapi.org/v2/top-headlines");
        url.searchParams.append("country", "us"); //append : URLSearchParams 객체의 메서드로, URL에 쿼리 파라미터를 추가하는 역할
        url.searchParams.append("apiKey", API_KEY);
        
        // page가 params에 들어있다면, 해당 값으로 page 설정
        if (params.page) {
            page = params.page
        }


        Object.entries(params).forEach(([key, value]) => { //Object.entries(params): 객체의 속성(key-value 쌍)을 배열 형태로 변환하는 메서드
            url.searchParams.append(key, value);
        });
        
        console.log("url:",url)
        const response = await fetch(url);
        const data = await response.json();
        if(response.status===200){
            if(data.articles.length===0){ //검색 결과가 없을 때
                throw new Error("No result for this search")
            }
            newsList = data.articles;
            totalResult = data.totalResults; // totalResult 값 설정 추가
            console.log("totalResult",totalResult)
            render();        
            paginationRender();    
        }else{
            throw new Error(data.message)
        }

    } catch(error){
        errorRender(error.message)
    }
};

// 최신 뉴스 가져오기
const getLatestNews = () => {
    keywordCategory = "";
    currentCategory = "";
    page = 1
    fetchNews();
}

let currentCategory = ""; // 현재 선택된 카테고리 저장
// 카테고리별 뉴스 가져오기
const getNewsByCategory = (event) => {
    currentCategory = event.target.textContent.toLowerCase();
    keywordCategory = "";
    page = 1
    fetchNews({ category: currentCategory });
};

let keywordCategory = "";
// 키워드 검색 뉴스 가져오기
const getNewsByKeyword = () => {
    keywordCategory = document.getElementById("search-box").value;
    currentCategory = "";
    page = 1
    fetchNews({ q: keywordCategory });
};

const render=()=>{
    const newsHTML = newsList.map(
        (news)=>{
            // // 테스트를 위해 news.source.name을 null로 변경
            // if (news.title === "Apple’s new C1 brings two killer features, and it’s just the start - 9to5Mac") { // 특정 뉴스 제목을 선택하여 테스트
            //     news.source.name = null;
            // }

            // // 테스트를 위해 news.publishedAt을 특정 시간대로 변경
            // if (news.title === "Apple’s new C1 brings two killer features, and it’s just the start - 9to5Mac") { // 특정 뉴스 제목을 선택하여 테스트
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

    document.getElementById('news-board').innerHTML = newsHTML;
}

const errorRender=(errorMessage)=>{
    const errorHTML = `<div class="alert alert-danger" role="alert">
        ${errorMessage}
    </div>`
    document.getElementById('news-board').innerHTML=errorHTML
}

const paginationRender=()=>{
    // totalResult
    // page
    // pageSize
    // groupSize
    // totalPages
    const totalPages = Math.ceil(totalResult/pageSize)
    // pageGroup
    const PAGEGROUP = Math.ceil(page/GROUPSIZE);
    // lastPage
    let lastPage = PAGEGROUP * GROUPSIZE;
    // 마지막 페이지 그룹이 그룹 사이즈보다 작다면 lastpage = totalPage
    if(lastPage > totalPages){
        lastPage = totalPages;
    }
    // firstPage
    const firstPage = lastPage - (GROUPSIZE-1)<=0? 1:lastPage - (GROUPSIZE-1);

     
    // 이전 페이지와 다음 페이지의 활성화 상태를 결정
    const prevPageDisabled = page <= 1 ? 'disabled' : ''; // 첫 페이지일 때 비활성화
    const nextPageDisabled = page >= totalPages ? 'disabled' : ''; // 마지막 페이지일 때 비활성화

    console.log(lastPage, firstPage)
    
    let paginationHTML = `
        <li class="page-item ${prevPageDisabled}" onclick="moveToPage(${page - 1})">
            <a class="page-link" href="#">Previous</a>
        </li>
    `;

    for(let i=firstPage; i<=lastPage; i++){
        paginationHTML += `<li class="page-item ${i===page?"active":" "}"  onclick="moveToPage(${i})"><a class="page-link" href="#">${i}</a></li>`
    }

    paginationHTML += `
        <li class="page-item ${nextPageDisabled}" onclick="moveToPage(${page + 1})">
            <a class="page-link" href="#">Next</a>
        </li>
    `;

    console.log("paginationHTML", paginationHTML)
    document.querySelector(".pagination").innerHTML=paginationHTML
    // <nav aria-label="Page navigation example">
    //     <ul class="pagination">
    //         <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    //         <li class="page-item"><a class="page-link" href="#">1</a></li>
    //         <li class="page-item"><a class="page-link" href="#">2</a></li>
    //         <li class="page-item"><a class="page-link" href="#">3</a></li>
    //         <li class="page-item"><a class="page-link" href="#">Next</a></li>
    //     </ul>
    // </nav>
}

const moveToPage=(pageNum)=>{
    console.log("movetopage",pageNum);
    // fetchNews({ page: pageNum, pageSize: pageSize });
    const params = { page: pageNum, pageSize: pageSize };

    if (currentCategory) { // 카테고리가 선택되어 있다면 추가
        params.category = currentCategory;
    }

    if (keywordCategory) { // 카테고리가 선택되어 있다면 추가
        params.q = keywordCategory;
    }

    console.log("params: " , params)

    fetchNews(params)
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