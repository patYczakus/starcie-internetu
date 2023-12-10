const articles = [
    {
        name: "Nowe era ogłoszeń",
        date: "niedziela, 10 gru 2023",
        pinned: false,
        img: "default",
        article: [
            `Te głoszenia tracą swoją moc na rzecz <a href="https://discord.gg/7S3P2DUwAm" target="_blank">serwera support</a>. Tam też można skontaktować się z działem wsparcia.<br />Tym razem usunąłem wszystkie dane kont, a nie je podmieniłem, także każdy ma podmienione dane na start!`,
            `<iframe src="https://discord.com/widget?id=1173722642004574359&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>`,
        ],
    },
]

function create() {
    document.body.innerHTML = `<span style="font-size: 32px;">Ogłoszenia</span>`
    for (let i = 0; i < articles.length - 1; i++) {
        if (!articles[i].pinned)
            document.body.innerHTML += `<div id="article">
        <div class="header"><img src="${
            articles[i].img == "default" ? "https://cdn.discordapp.com/attachments/1047919900875825293/1064986147643740223/sketch-1673982624892.png" : articles[i].img
        }" /><span>${articles[i].name}<div style="font-size: 50%">${articles[i].date}</div></span></div>
        <div><p>${articles[i].article.join("</p><p>")}</p></div>
        </div>
        <hr />`
        else
            document.body.innerHTML =
                `<div id="article">
        <div class="header"><img src="${
            articles[i].img == "default" ? "https://cdn.discordapp.com/attachments/1047919900875825293/1064986147643740223/sketch-1673982624892.png" : articles[i].img
        }" /><span>📌 ${articles[i].name}<div style="font-size: 50%">${articles[i].date}</div></span></div>
        <div><p>${articles[i].article.join("</p><p>")}</p></div>
        </div>
        <hr />` + document.body.innerHTML
    }
    document.body.innerHTML += `<div id="article">
    <div class="header"><img src="${
        articles[articles.length - 1].img == "default"
            ? "https://cdn.discordapp.com/attachments/1047919900875825293/1064986147643740223/sketch-1673982624892.png"
            : articles[articles.length - 1].img
    }" /><span>${articles[articles.length - 1].name}<div style="font-size: 50%">${articles[articles.length - 1].date}</div></span></div>
    <div><p>${articles[articles.length - 1].article.join("</p><p>")}</p></div>
    </div>`
}
