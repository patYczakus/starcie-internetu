const articles = [
    {
        name: "Aktualizacja 0.3.1, czyli pogaduszki o postaciach",
        date: "piątek, 20 sty 2023",
        img: "default",
        article: [
            `Witajcie, gracze! Dziś ta aktualizacja powoduje zmiany w postaciach, dodaje kolejne postacie oraz zmienia same granie.`,
            `Na mocy przybrali:<BR />
            > habby<br />
            -> HP podstawowe zwiększyło się o 10<br />
            -> Zwiększone ataki<br />
            > trajom<br />
            -> HP podstawowe zwiększyło się o 600<br />
            -> Zwiększone ataki<br />
            > theSecondComing<br />
            -> HP podstawowe zwiększyło się o 300<br />
            -> DEF na odporność mocy został zwiększony o 1000<br />
            > Sylwestrowy Octane<br />
            -> Zmniejszone BTP`,
            `Pojawili się też postacie, które straciły energię kodu:<BR />
            > theChosenOne<br />
            -> HP podstawowe zmniejszyło się o 500<br />`,
            `Teraz kolej na nowych postaci:
            > pikachu [ Pokémon (NOWY WYMIAR) ] <br />
            > kira [ Starcie internetu ]<br />
            > paty [ Stick'y-land ]<br />
            > havier [ Stick'y-land ]<br />`,
            `Prócz tego mechanika się zmieniła. Zamiast gradientu pojawiło się zmieniające się tło. Do tego się zmienił system leczenia.<br />
            + można pokazać nowe audiosy:<br />
            Atak<br /><audio controls src="https://patyczakus.github.io/starcie-internetu/audios/attack.wav"></audio><br />
            Ktytyczny cios<br /><audio controls src="https://patyczakus.github.io/starcie-internetu/audios/critical.wav"></audio>`
        ]
    },
    {
        name: "Pierwszy artykuł do wersji 0.3",
        date: "czwartek, 19 sty 2023",
        img: "default",
        article: [
            `Witajcie, mili gracze!<BR />
            Przyszedłem z Wami z dość dużą aktualizacją, m. in. dodałem artykuły/ogłoszenia.<BR />
            Poza tym są jeszcze inne nowości:<BR />
            > Naprawa błędów (oraz próba naprawy błędu spowodowanego efektem tunelu - chodzi o błąd, w którym odrzucało logowanie)<BR />
            > Animacja otwierania skrzyń<BR />
            > Zmiana kolejności postaci`,
            `Też są postanowienia:<BR />
            > Jak zwykle dużo postaci<BR />
            > Klany, gildie, kluby, gangi - jak zwał, tak zwał<BR />
            > Misje<BR />
            > Sklep`
        ]
    }
]

function create() {
    document.body.innerHTML = `<span style="font-size: 32px;">Ogłoszenia</span>`
    for (let i = 0; i < articles.length - 1; i++) {
        document.body.innerHTML += `<div id="article">
        <div class="header"><img src="${articles[i].img == "default" ? "https://cdn.discordapp.com/attachments/1047919900875825293/1064986147643740223/sketch-1673982624892.png" : articles[i].img}" /><span>${articles[i].name}<div style="font-size: 50%">${articles[i].date}</div></span></div>
        <div><p>${articles[i].article.join("</p><p>")}</p></div>
        </div>
        <hr />`
    }
    document.body.innerHTML += `<div id="article">
    <div class="header"><img src="${articles[articles.length - 1].img == "default" ? "https://cdn.discordapp.com/attachments/1047919900875825293/1064986147643740223/sketch-1673982624892.png" : articles[articles.length - 1].img}" /><span>${articles[articles.length - 1].name}<div style="font-size: 50%">${articles[articles.length - 1].date}</div></span></div>
    <div><p>${articles[articles.length - 1].article.join("</p><p>")}</p></div>
    </div>`
}