console.log('javascript');
//69d2ce90b58c44a282466257823b815b
//Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '69d2ce90b58c44a282466257823b815b';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax get request
let xhr = new XMLHttpRequest();


xhr.open("GET", `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element,index) {

            // console.log(articles[news]);
            let news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                    data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    ${element["title"]}
                                </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                            data-parent="#newsAccordion">
                            <div class="card-body">
                                ${element["content"]}.<a href="${element["url"]}" target="_blank">Read more here</a>
                            </div>
                        </div>
                        </div>`;
            newsHtml += news;
        });

        newsAccordion.innerHTML += newsHtml;
    }
    else {
        console.error('Some error occured');
    }

}
xhr.send();





