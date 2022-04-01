let key = 'e3e8795023c84abc98e43b3c8ad006b4';
let source = 'bbc-news';

let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${key}`,true);

xhr.onload = function() {
    if(this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHTML = "";
        articles.forEach(function(element, index) {
            let news = `
                        <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking New:${index+1}</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body">
                                    ${element["content"]}.<a href="${element['url']}" target="_blank">Read more here</a>
                                </div>

                            </div>
                        </div>`;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    }else {
        console.log("Some error occurred");
    }
}

xhr.send();


