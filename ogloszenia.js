const articles = [
    {
        name: "Pierwszy artykuł do wersji 0.3",
        date: "czwartek, 19 sty 2023",
        img: "default",
        article: [
            `Witajcie, mili gracze!<br />
            Przyszedłem z Wami z dość dużą aktualizacją, m. in. dodałem artykuły/ogłoszenia.<br />
            Poza tym są jeszcze inne nowości:<br />
            > Naprawa błędów (oraz próba naprawy błędu spowodowanego efektem tunelu - chodzi o błąd, w którym odrzucało logowanie)<br />
            > Animacja otwierania skrzyń (kosztem wydajności)<br />
            > Zmiana kolejności postaci`,
            `Też są postanowienia:<br />
            > Jak zwykle dużo postaci<br />
            > Klany, gildie, kluby, gangi - jak zwał, tak zwał<br />
            > Misje<br />
            > Sklep`
        ]
    }
]

function create() {
    document.body.innerHTML = `<span style="font-size: 32px;">Ogłoszenia</span>`
    for (let i = 0; i < articles.length - 1; i++) {
        document.body.innerHTML += `<div id="article">
        <div class="header"><img src="${articles[i].img == "default" ? "https://cdn.discordapp.com/attachments/1047919900875825293/1064986147643740223/sketch-1673982624892.png" : articles[i].img}" /><span>${articles[i].name}<div style="font-size: 25%">${articles[i].date}</div></span></div>
        <div>${articles[i].article.join("</p><p>")}</p></div>
        </div>
        <hr />`
    }
    document.body.innerHTML += `<div id="article">
    <div class="header"><img width="250" height="150" src="${articles[articles.length - 1].img == "default" ? "https://cdn.discordapp.com/attachments/1047919900875825293/1064986147643740223/sketch-1673982624892.png" : articles[articles.length - 1].img}" /><span>${articles[articles.length - 1].name}<div style="font-size: 50%">${articles[articles.length - 1].date}</div></span></div>
    <div><p>${articles[articles.length - 1].article.join("</p><p>")}</p></div>
    </div>`
}