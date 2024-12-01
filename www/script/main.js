const API_KEY = 'd3dec04bf26d4e678a8d02c458537ad2';
const source = 'google-news';
const q = 'tesla';

const url = 'https://newsapi.org/v2/top-headlines?q=' + q + '&apiKey=' + API_KEY;
// const url = 'https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + API_KEY;

async function fetchNews() {
    console.error('fetching! ' + url);
    try {
        const result = await fetch(url).then(response => response.json());
        const articles = result.articles;
        let content = '';
        articles.forEach(article => {
            console.warn(article);
            if (article && article.title) {
                let piece = `
                    <article>
                        <h1><a href="${article.url}" target="_blank">${article.title}</a></h1>
                        <a href="${article.urlToImage}">
                        <img src="${article.urlToImage}" 
                        alt="${article.urlToImage}"
                        width="100px" height="100px" />
                        
</a>
                        <p>${article.description}</p>
                    </article>
                `;
                content += piece;
                console.warn(piece);
            }
        });
        document.getElementById('news').innerHTML = content;
    } catch (e) {
        console.error('could not fetch news', e);
    }
}

fetchNews();
