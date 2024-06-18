const charaList = {
    // Starcie internetu
    habby: {
        battle: [
            {
                name: { pl: "Piła łańcuchowa", en: "Chainsaw" },
                points: 0,
            },
            { name: "ShOcK", points: 30 },
            {
                name: { pl: "Ognista kula", en: "Fireball" },
                points: 100,
            },
            {
                name: { pl: "Potężne pole uderzeniowe", en: "Powerful blast field" },
                points: 185,
            },
        ],
        description: {
            pl: "Pierwotny wzór postaci; robot zaprogramowany do walki między innymi spoza własnego wymiaru. Piła pozwala unicestwić konającego, ognisty żar w kuli - spalić na popiół, a jego kable - ogłuszyć przeciwnika.",
            en: "The original character design; a robot programmed to fight among others from outside its own dimension. The saw allows it to annihilate the moribund, the fiery embers in the sphere to burn to ashes and its cables to stun the opponent.",
        },
        class: "common",
        dimension: "Starcie internetu",
        hp: 10010,
        level_up: {
            battle: [1.5, 2, 2.7, 3],
            hp: 2.2,
            types: {
                strong: 50,
                weak: 50,
            },
        },
        max_lvl: 22,
        types: {
            have: ["Metal", "Ogień", "Informatyka", "Elektryczność"],
            strong: {
                def: 2000,
                ind: ["Powietrze", "Chi", "Duchoznactwo"],
            },
            weak: {
                def: 2000,
                ind: ["Woda", "Lód", "Informatyka"],
            },
        },
        sp: {
            name: {
                pl: "Zmień tryb na…",
                en: "Change mode to…",
            },
            description: {
                pl: "Dzięki luźnym kablom {{charaName.habby}} potrafi przekształcić miejsce zarezerwowane dla 25% HP miejscem na ataki - im silniejszy atak, tym więcej dostaje.",
                en: "With loose cables {{charaName.habby}} is able to transform the space reserved for 25% HP into a place for attacks - the stronger the attack, the more it gets.",
            },
            maxUses: 2,
        },
        tags: ["sochr"],
    },
    rycerzOceanu: {
        battle: [
            {
                name: { pl: "Miecz", en: "Sword" },
                points: 0,
            },
            {
                name: { pl: "Uderzenie falowe", en: "Waveform impact" },
                points: 70,
            },
        ],
        description: {
            pl: "„Internet, honor, wymiar” - to są jego słowa wypowiedziane podczas każdej bitwy. Wychowany został w rycerskich warunkach i w szkole czarów. Jest jednością z oceanami. Może i nie wygląda na towarzyskiego, ale jest przyjacielem dla całego jego wymiaru.",
            en: "„Internet, honour, dimension” - these are his words spoken during every battle. He was brought up in chivalrous conditions and in a school of witchcraft. He is one with the oceans. He may not look sociable, but he is a friend to his entire dimension.",
        },
        class: "common",
        dimension: "Starcie internetu",
        hp: 8700,
        level_up: {
            battle: [1.8, 2.2],
            hp: 2.4,
            types: {
                strong: 80,
                weak: 40,
            },
        },
        max_lvl: 22,
        types: {
            have: ["Chi", "Woda", "Metal"],
            strong: {
                def: 2500,
                ind: ["Ogień", "Powietrze"],
            },
            weak: {
                def: 3500,
                ind: ["Lód", "Trucizna", "Duchoznactwo"],
            },
        },
        sp: {
            name: {
                pl: "Człowiek z wody",
                en: "Man made of water",
            },
            description: {
                pl: "Nie po to {{charaName.rycerzOceanu}} ukończył najlepszą szkołę magii, aby nie używać czarów! Tworzy sobie specjalną osłonę redukującą szansę na krytyczny cios o 15%, zwiększa swoje HP o 27% oraz losowy atak o 30%.",
                en: "This is not why {{charaName.rycerzOceanu}} graduated from the best school of magic not to use spells! He creates a special shield for himself that reduces the chance of a critical blow by 15%, increases his HP by 27% and his random attack by 30%.",
            },
            maxUses: 1,
        },
        tags: ["ahealth"],
    },
    glalirthor: {
        class: "uncommon",
        description: {
            pl: "Pierwszy elf w Starciu Internetu. Od urodzenia próbował uciekać od obowiązków i balować. Dla podwyższenia swojego ego nauczył się panowania galaktyką.",
            en: "The first elf in Starcie Internetu. Since birth, he has tried to escape his responsibilities and balk. To boost his ego, he learned to rule the galaxy.",
        },
        dimension: "Starcie internetu",
        hp: 4500,
        battle: [
            {
                name: { pl: "Nożyk", en: "Knife" },
                points: 4,
            },
            {
                name: { pl: "Galaktyczna piła", en: "Galaxy saw" },
                points: 95,
            },
        ],
        level_up: {
            hp: 2.8,
            types: {
                weak: 50,
            },
            battle: [2, 3.5],
        },
        max_lvl: 20,
        types: {
            have: ["Galaktyka"],
            weak: {
                def: 2300,
                ind: ["Ogień", "Powietrze", "Informatyka", "Elektryczność", "Trucizna"],
            },
        },
        sp: {
            name: {
                pl: "Galaktyczny kryształ życia",
                en: "Galaxy crystal of live",
            },
            description: {
                pl: "{{charaName.glalirthor}} tworzy pokazowy kryształ, co powoduje zwiększenie ataków o 110%.",
                en: "{{charaName.glalirthor}} creates a show crystal, resulting in an 110% increase in attacks.",
            },
            maxUses: 1,
        },
        tags: ["double", "furr"],
    },
    trajom: {
        class: "legendary",
        description: {
            pl: "Wyglądające jak słodkie lewitujące zwierzątko z pikselowymi rączkami potrafi rozpętać istne wirusowe piekło. Mały, ale zabójczy. Nie trwały, a silny. Wyglądający na najsłabszego, w rzeczywistości - potężny.",
            en: "Looking like a cute levitating animal with pixelated hands can unleash a veritable viral inferno. Small, but deadly. Not durable, but strong. Looking the weakest, in reality - powerful.",
        },
        dimension: "Starcie internetu",
        hp: 9000,
        battle: [
            {
                name: { pl: "Ręka", en: "Hand" },
                points: 0,
            },
            {
                name: { pl: "Kula energetyczna", en: "Energy ball" },
                points: 35,
            },
            {
                name: { pl: "Czarna wyrwa", en: "Black hole" },
                points: 70,
            },
            { name: "/kill", points: 250 },
        ],
        level_up: {
            hp: 3,
            types: {
                weak: 50,
                strong: 100,
            },
            battle: [2.3, 2.5, 2.8, 3.5],
        },
        max_lvl: 14,
        types: {
            have: ["Informatyka", "Elektryczność", "Galaktyka", "Duchoznactwo"],
            strong: {
                def: 4000,
                ind: ["Ogień", "Powietrze"],
            },
            weak: {
                def: 5000,
                ind: ["Chi"],
            },
        },
        sp: {
            name: {
                pl: "Drugie życie",
                en: "Second live",
            },
            description: {
                pl: "{{charaName.trajom}}, w sytuacji zagrożenia, atakuje trzy razy pięścią, po czym resetuje swoje informacje, ale się zwiększa szansa krytyczna o 6%. Dodatkowo posiada 25 BTP po resecie.",
                en: "{{charaName.trajom}}, in a threatening situation, attacks three times with his fist, after which he resets his information, but his crit chance increases to 6%. Additionally, it has 25 BTP after the reset.",
            },
            maxUses: 1,
        },
        tags: ["stormbtp"],
    },
    kira: {
        description: {
            pl: "Dziewica z nieznanego zakątku Internetu. Demoniczna i zarazem budząca strach. Potrafi zabić przeciwnika woskiem ze świeczki, czy poczuć bestialski ból na jego skórze.",
            en: "A virgin from an unknown corner of the Internet. Demonic and fear-inducing at the same time. Able to kill an opponent with wax from a candle, or feel bestial pain on his skin.",
        },
        battle: [
            {
                name: { pl: "Uderzenie", en: "Strike" },
                points: 0,
            },
            {
                name: { pl: "Gorący wosk ze świeczki", en: "Hot candle wax" },
                points: 40,
            },
            {
                name: { pl: "Demoniczny atak", en: "Demonic" },
                points: 95,
            },
        ],
        dimension: "Starcie internetu",
        hp: 10000,
        class: "uncommon",
        max_lvl: 20,
        types: {
            have: ["Ogień", "Trucizna"],
            strong: {
                def: 1200,
                ind: ["Duchoznactwo"],
            },
            weak: {
                def: 1200,
                ind: ["Woda", "Galaktyka", "Ziemia", "Powietrze"],
            },
        },
        level_up: {
            hp: 2.163,
            battle: [2.8, 3, 3.125],
            types: {
                strong: 55,
                weak: 50,
            },
        },
        sp: {
            name: {
                pl: "Wampirzyca",
                en: "The Vampire Girl",
            },
            description: {
                pl: "{{charaName.kira}} „zabiera” zdrowie dla przeciwnika i nadaje sobie za pomocą uderzenia.",
                en: "{{charaName.kira}} „takes away” the health for the opponent and imparts to itself with a strike.",
            },
            maxUses: 10,
        },
        tags: ["atkback"],
    },
    haker1000: {
        description: {
            pl: "Osobnik hakujący dostępne sieci internetowe jakie są możliwe. Szybko wściekający się, sprytny i niezauważalny. Za włamanie się do rządu został trafiony tutaj, bez możliwości przejścia zapory.",
            en: "An individual hacking the available internet networks that are possible. Quick to rage, slick and unnoticeable. For hacking into the government, he was hit here without being able to pass the firewall.",
        },
        battle: [
            { name: { pl: "CyberUderzenie", en: "CyberStrike" }, points: 10 },
            { name: "/powervolt", points: 100 },
        ],
        dimension: "Starcie internetu",
        hp: 7000,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: ["Informatyka", "Elektryczność"],
            strong: {
                def: 4000,
                ind: ["Woda", "Ogień", "Ziemia", "Powietrze", "Informatyka"],
            },
            weak: {
                def: 2000,
                ind: ["Galaktyka", "Chi", "Duchoznactwo"],
            },
        },
        level_up: {
            hp: 3.813479,
            battle: [2.2, 3.5],
            types: {
                strong: -100,
                weak: 50,
            },
        },
        sp: {
            name: "$ cp ../$ENEMY ._",
            description: {
                pl: "{{charaName.haker1000}} kopiuje te same SP co przeciwnik, tracąc przy tym trochę HP. Możliwe też, że będzie miał te same statystyki co przeciwnik!",
                en: "{{charaName.haker1000}} copies the same Star Power as the opponent. It is also possible that he will have the same stats as his opponent!",
            },
            maxUses: Infinity,
        },
        tags: ["btpwa", "atkback", "double", "sochr", "furr"],
    },
    starlight: {
        description: {
            pl: "Zamknięta w sobie i tajemnicza dziewczyna, powstała z mitycznej gwiazdy stworzonej w tym samym czasie co pierwszy atom, z innej czasoprzestrzeni. Ma niezwykłą pasję na punkcie astronomii i układem kosmicznym - widzi w tym idealizm i harmonię; utożsamia się ze wspomnianymi wcześniej gwiazdami tłumacząc, że one potrafią wskazać drogę do jakiegokolwiek miejsca. Jest też fanką wymiaru HoYoverse - ba, sama by chciała tam być jako oficjalna postać, lecz niestety może tylko pomarzyć…",
            en: "A closed-off and mysterious girl, she was created from a mythical star created at the same time as the first atom, from another space-time. She has an unusual passion for astronomy and the cosmic system - she sees idealism and harmony in it; she identifies with the aforementioned stars, explaining that they can show the way to any place. She is also a fan of the HoYoverse dimension - in fact, she would like to be there herself as an official character, but unfortunately she can only dream…",
        },
        battle: [
            {
                name: { pl: "Mała fala galaktyczna", en: "Little Galactic Wave" },
                points: 0,
            },
            {
                name: { pl: "Grawitacyjny miecz", en: "Gravitional sword" },
                points: 20,
            },
            {
                name: { pl: "Strzał gwiazdką", en: "StarShooter" },
                points: 100,
            },
            { name: "<i>MeteoHynnon</i>", points: 330 },
        ],
        dimension: "Starcie internetu",
        hp: 8765,
        class: "legendary",
        max_lvl: 14,
        types: {
            have: ["Galaktyka", "Ziemia", "Chi", "Elektryczność"],
            weak: {
                def: 3500,
                ind: ["Duchoznactwo", "Informatyka"],
            },
        },
        level_up: {
            hp: 3.030174,
            battle: [2.34, 2.8, 3.3, 4.3],
            types: {
                weak: 0,
            },
        },
        sp: {
            name: {
                pl: "Galaktyczny rozłam wzmocnienia",
                en: "Galactic disruption of reinforcement",
            },
            description: {
                pl: "{{charaName.starlight}}, w zależności od BTP (maks. 500) tworzy galaktyczną wyrwę, która:<br />- leczy ją co 3 ruch, gdy HP spadnie do 50% (1 BTP = 2 HP, po 60 oczekiwany ruch się zwiększa o 1);<br />- co 5 ruch powoduje, że jej losowy atak zostaje zwiększony do pewnego procenta (od 200 BTP zaczyna o 10%, każdy kolejny BTP - +0,3%);<br />- atakuje przeciwnika (szansa 30% w każdym ruchu; min. 500 BTP).<br />Statystki się zwiększają o 30% dla wymiaru Gang Sokołów, a dla HoYoverse się zmniejszają o 20%.",
                en: "{{charaName.starlight}}, depending on BTP (max 500) creates a galactic rift that:<br />- heals her every 3rd move when HP drops to 50% (1 BTP = 2 HP, after 60 the expected move increases by 1);<br />- every 5th move causes the her random attack to be increased to a certain percentage (from 200 BTP it starts at 10%, each additional BTP - +0.3%);<br />- attacks the opponent (30% chance in every move; min. 500 BTP).<br />Stats increase by 30% for the Gang Sokołów dimension, and decrease by 20% for the HoYoverse.",
            },
            maxUses: 1,
        },
        tags: ["ahealth", "stormbtp"],
    },
    naładowanaAva: {
        description: {
            pl: "Energiczna i pełna poczucia humoru koleżanka. Chętna władzy i potęgi. Jako pierwsza umie połączyć ogień i prąd, tworząc tzw. naładowany ogień. Nie wkurzaj jej choć trochę, albo poczuj smak jej tortur!",
            en: "An energetic and humorous colleague. Eager for power and might. She is the first to know how to combine fire and electricity, creating the so-called charged fire. Don't piss her off just a little, or get a taste of her torture!",
        },
        battle: [
            {
                name: { pl: "Paletka", en: "Mallet" },
                points: 5,
            },
            {
                name: { pl: "Naładowany ogień", en: "Charged fire" },
                points: 35,
            },
            {
                name: { pl: "Szarża", en: "Chargeby" },
                points: 130,
            },
        ],
        dimension: "Starcie internetu",
        hp: 5000,
        class: "epic",
        max_lvl: 16,
        types: {
            have: ["Ogień", "Elektryczność"],
            strong: {
                def: 1000,
                ind: ["Lód", "Ogień", "Duchoznactwo"],
            },
            weak: {
                def: 3600,
                ind: ["Woda", "Powietrze", "Chi", "Informatyka"],
            },
        },
        level_up: {
            hp: 2.798505,
            battle: [2.2, 2.4732, 2.876505],
            types: {
                strong: 50,
                weak: 100,
            },
        },
        sp: {
            name: {
                pl: "Poddymienie",
                en: "Undersmoke",
            },
            description: {
                pl: "Nigdy nie bądź zawzięty wygranej, albo {{charaName.naładowanaAva}} pokaże Ci, że Cię zdominuje. Tworzy ona ogniste tornado, które jest w stanie zebrać ogromną ilość prądu (gdzie po dwóch sekundach nim atakuje). Dzięki takiej dawce zwiększa swoje ataki <i>Naładowany ogień</i> oraz <i>Szarża</i> o 24%, a zadany atak zabiera 25-50% BTP przeciwnikowi - w razie zadania krytycznym ciosem zwiększa się u przeciwnika także cios krytyczny.",
                en: "Never be giddy about winning, or the {{charaName.naładowanaAva}} will show you that it will dominate you. She creates a fiery tornado that is able to gather a huge amount of electricity (where after two seconds she attacks with it). With such a charge, it increases its attacks <i>Charged fire</i> and <i>Chargeby</i> 24%, and the inflicted attack takes away 25-50% of the opponent's BTP - if dealt a critical blow, the opponent's critical blow is also increased.",
            },
            maxUses: 1,
        },
        tags: ["time", "toks"],
    },

    // Rocket League
    sylwestrowyOctane: {
        battle: [
            {
                name: { pl: "Taran", en: "Ram" },
                points: 3,
            },
            {
                name: { pl: "Taran + nitro", en: "Ram with nitro" },
                points: 30,
            },
            { name: "Dash", points: 82 },
            {
                name: { pl: "Naddźwiękowy dash", en: "Supersonic dash" },
                points: 145,
            },
        ],
        description: {
            pl: "Ta postać jest najbardziej imprezową postacią w grze. Ryzykowanie? To jego natura. Nie zna strachu, więc często szuka zaczepki i powoduje walki.",
            en: "This character is the most party character in the game. Taking risks? That's his nature. He doesn't know fear, so he often looks for a hook and causes fights.",
        },
        class: "legendary",
        dimension: "Rocket League",
        hp: 9000,
        level_up: {
            battle: [2, 2.5, 3, 4],
            hp: 2.862,
            types: {
                strong: 200,
            },
        },
        max_lvl: 14,
        types: {
            have: ["Metal", "Informatyka"],
            strong: {
                def: 2000,
                ind: ["Powietrze", "Woda"],
            },
        },
        sp: {
            name: "«Pa tera!»",
            description: {
                pl: "Tak, nazwa mówi sama za siebie. {{charaName.sylwestrowyOctane}} już wsiąknął niekoniecznie legalne środki odurzające, i pokazuje, na co jego stać. Atak inny niż wszystkie, zadaje naprawdę dużo, ale właśnie - skoro już wsiąknął, to niekoniecznie musi trafić. Szansa na trafienie wynosi 25% (+15% kiedy przeciwnik ma atrybut <b>Korzenie tanka</b>) i albo uderzy w przeciwnika, albo sam oberwie tym atakiem (13% wartości ataku).",
                en: "The Polish SP name does not mean something specific to a foreigner, but when translated it already gives food for thought. {{charaName.sylwestrowyOctane}} has already soaked up the not necessarily legal drugs, and is showing what he can do. An attack unlike any other, it inflicts a really big amount, but precisely - since it has already soaked in, it doesn't necessarily hit. The chance of hitting is 25% (+15% when enemy have <b>Family tree of Tanks</b> attribute), and he will either hit his opponent or get hit himself with this attack (13% of the attack value).",
            },
            maxUses: 3,
        },
        tags: ["stormbtp"],
    },
    platynowyDominus: {
        battle: [
            { name: "Dash", points: 5 },
            {
                name: { pl: "Atak z powietrza", en: "Attack from the sky" },
                points: 75,
            },
            {
                name: { pl: "Pocisk naprowadzany", en: "Heatseeker" },
                points: 170,
            },
        ],
        description: {
            pl: "Można zaryzykować stwierdzeniem, że jest jednym z „mędrców” Internetu. Umie planować w trakcie walki, a co za tym idzie, wygrywa także większość rozegranych bitew. Nieugięty, silny i obdarzony Pociskiem Naprowadzanym. Uważaj, jeśli go napotkasz!",
            en: "One could venture to say that he is one of the „sages” of the Internet. He knows how to plan during a battle and consequently also wins most of the battles he plays. Relentless, strong and gifted with a Heatseeker. Watch out if you encounter him!",
        },
        class: "import",
        dimension: "Rocket League",
        hp: 10000,
        level_up: {
            battle: [1.9, 3.3, 4.1],
            hp: 3.25,
            types: {
                strong: 200,
            },
        },
        max_lvl: 12,
        types: {
            have: ["Metal", "Informatyka"],
            strong: {
                def: 2000,
                ind: ["Powietrze", "Woda", "Elektryczność"],
            },
        },
        sp: {
            name: "«Podnieca cię „What a save!”?»",
            description: {
                pl: "Jak to wkurza {{charaName.platynowyDominus|platynowegoDominusa}}, gdy ktoś poniża lepszego gracza wymienionym tekstem („What a save!”). Zwiększa każdy atak o 19%, ogranicza zadanie crita do 0 i zwiększa przeciwnikowi crita o 27%",
                en: "How it annoys {{charaName.platynowyDominus}} when someone humiliates a better player with the text „What a save!”. Increases each attack by 19%, limits the crit task to 0 and increases the opponent's crit by 27%",
            },
            maxUses: 1,
        },
        tags: ["sochr"],
    },
    zimowyHotshot: {
        battle: [
            {
                name: { pl: "Kolce", en: "Spikes" },
                points: 5,
            },
            {
                name: { pl: "Mróz", en: "Frost" },
                points: 26,
            },
            { name: "Power Hitter", points: 60 },
        ],
        description: {
            pl: "Pojazd, który bardzo lubi zimno; wychowywany w lodowisku. Obdarzony trzema mocami z Rumble. Na pewno polega na szczęściu i potrafi wygrać walkę.",
            en: "A vehicle that is very fond of the cold; raised in an ice rink. Endowed with three powers from Rumble. Definitely relies on luck and can win fights.",
        },
        class: "rare",
        dimension: "Rocket League",
        hp: 8800,
        level_up: {
            battle: [2, 2.1, 2.4],
            hp: 2.25,
            types: {
                strong: 200,
                weak: 30,
            },
        },
        max_lvl: 18,
        types: {
            have: ["Metal", "Informatyka", "Lód"],
            strong: {
                def: 2000,
                ind: ["Powietrze", "Woda", "Lód"],
            },
            weak: {
                def: 3000,
                ind: ["Ogień"],
            },
        },
        sp: {
            name: {
                pl: "Atak krążkiem",
                en: "Puck attack",
            },
            description: {
                pl: "{{charaName.zimowyHotshot}} atakuje rozpędzonym krążkiem hokejowym. Może i nie zadaje dużo, ale jest darmowy!",
                en: "{{charaName.zimowyHotshot}} attacks with a rushing hockey puck. It may not inflict much, but it's free!",
            },
            maxUses: 7,
        },
        tags: [],
    },
    galaktycznyMasamune: {
        battle: [
            {
                name: { pl: "Uderzenie", en: "Hit" },
                points: 10,
            },
            {
                name: { pl: "Rzut o podłogę", en: "Throw to the floor" },
                points: 75,
            },
            {
                name: { pl: "Naddźwiękowy dash", en: "Supersonic dash" },
                points: 140,
            },
        ],
        description: {
            pl: "Postać, która podwyższyła znaczenie swojego wymiaru. Sprytny, chciwy wygranej i pełen energii. Nauczył się tylko grać w tryb Knockout - nie bez powodu i tutaj nieźle poddymia. Uwielbia motywy galaktyczne podobnie jak {{charaName.starlight}} i też często szuka zaczepki jak {{charaName.sylwestrowyOctane}}.",
            en: "A character who has elevated the importance of his dimension. Clever, greedy to win and full of energy. He has only learnt to play Knockout mode - for good reason, here he also subdues quite well. Loves galactic themes just as much as {{charaName.starlight}} and also often looks for a hook like {{charaName.sylwestrowyOctane}}.",
        },
        class: "epic",
        dimension: "Rocket League",
        hp: 7750,
        level_up: {
            battle: [1.9, 2.4, 3.1],
            hp: 2.75,
            types: {
                strong: 200,
                weak: 30,
            },
        },
        max_lvl: 16,
        types: {
            have: ["Galaktyka", "Informatyka", "Metal"],
            strong: {
                def: 2000,
                ind: ["Powietrze", "Woda"],
            },
            weak: {
                def: 4000,
                ind: ["Chi"],
            },
        },
        sp: {
            name: {
                pl: "Galaktyczne wyładowanie",
                en: "Galactic charge",
            },
            description: {
                pl: "To, że tylko gra w jeden tryb, wcale nie oznacza to, że {{charaName.galaktycznyMasamune}} nie może używać czegoś nowego. Używa kombinacji ruchów, gdzie dzięki nich może odpalić wyładowanie. W każdym ruchu zadaje obrażenia i zwiększa ataki o 75% przez 2 ruchy, ale każdy ruch ma także własną funkcję:<br />1) zanika u {{charaName.galaktycznyMasamune|galaktycznegoMasamuna}} cios krytyczny przez 5 ruchów;<br />2) z ataku 10% idzie na BTP, a 12% na HP;<br />3) atak staje się podwojony.",
                en: "Just because he only plays one mode, it doesn't at all mean that {{charaName.galaktycznyMasamune}} can't use something new. He uses a combination of moves where he can fire off a discharge through them. Each move deals damage and increases attacks by 75% for 2 moves, but each move also has its own function:<br />1) fades {{charaName.galaktycznyMasamune|galaktycznyMasamune's}} critical blow for 5 moves;<br />2) of the attack, 10% goes to BTP and 12% goes to HP;<br />3) the attack becomes doubled.",
            },
            maxUses: 3,
        },
        tags: ["sochr", "time"],
    },

    // Stick'y-land
    nikolixia: {
        battle: [
            {
                name: { pl: "Pięść", en: "Fist" },
                points: 10,
            },
            {
                name: { pl: "Podduszenie", en: "Suffrage" },
                points: 30,
            },
            {
                name: { pl: "Boskie uderzenie", en: "God's punch" },
                points: 160,
            },
        ],
        description: {
            pl: "<i>nikolixia -<br />Zmienia się jak internet:<br />Śmieje się i płacze…</i><br />Pierwsza bogini w swoim wymiarze. Gorąca i troskliwa dla przyjaciół w jej wymiarze, zimna i bezwzględna dla swoich wrogów. Jest ciekawa świata internetowego i lubi eksperymentować z różnymi możliwościami. Ma też unikalne poczucie humoru, co powoduje dla swoich przyjaciół ukazywanie swojej niewinności.",
            en: "<i>Friends from her dimension<br />nikolixia protects them;<br />She gives no chance to foes!</i><br />The first goddess in her dimension. Warm and caring to friends in her dimension, cold and ruthless to her enemies. She is curious about the online world and likes to experiment with different possibilities. She also has a unique sense of humour, which causes her friends to show their harmlessness.",
        },
        dimension: "Stick'y-land",
        hp: 10000,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: ["Galaktyka", "Duchoznactwo", "Chi", "Powietrze"],
            strong: {
                def: 3000,
                ind: ["Trucizna", "Ogień", "Woda", "Ziemia", "Metal", "Lód", "Informatyka", "Powietrze"],
            },
            weak: {
                def: 0,
                ind: ["Galaktyka", "Duchoznactwo", "Chi", "Powietrze"],
            },
        },
        level_up: {
            hp: 2.86201,
            battle: [1.8, 2.5, 4],
            types: {
                strong: -100,
                weak: -200,
            },
        },
        sp: {
            name: {
                pl: "Potępienie",
                en: "Doom",
            },
            description: {
                pl: "<i>Potępienie - dar:<br />nikolixia nim włada.<br />Cztery stany ma!</i><br />{{charaName.nikolixia}} posiada cztery stany potępienia, z czego każdy staje się silniejszy:<br />1. Przez 20 ruchów „zabiera” HP przeciwnikowi;<br />2. Zwiększa swoje ataki o 20%;<br />3. Używa „pierścienia niebiańskiego”, zwiększając szansę krytycznego ciosu przeciwnika o 50%;<br />4. Przestaje już być tą troskliwą boginią i się zamienia w piekielne trudnego szatana. Zwiększa swoje ataki o 50% i szansa krytycznego ciosu u niej spada do całkowitego zera, a przeciwnikowi do 100%, ale jej HP zwykłe, jak i maksymalne spadają aż do 50%!",
                en: "<i>nikolixia - god.<br />Kind to friends, cruel to foes;<br />Doom is her power.</i><br />{{charaName.nikolixia}} has four states of condemnation, each of which becomes stronger:<br />1. for 20 moves, „takes away” HP from the opponent;<br />2. increases its attacks by 20%;<br />3. she uses the „celestial ring”, causing her opponent's critical strike chance to increase by 75%;<br />4. stops being that caring goddess anymore and turns into a hellishly difficult fiend. She increases her attacks by 50% and her opponent's critical strike chance drops to completely zero, and her opponent's to 100%, but her normal HP as well as her maximum HP drops by up to 50%!",
            },
            maxUses: 4,
        },
        tags: ["sochr", "atkback", "tanker", "double"],
    },
    theChosenOne: {
        battle: [
            {
                name: { pl: "Silne uderzenie", en: "Powerful punch" },
                points: 0,
            },
            {
                name: { pl: "Atak lodu", en: "Ice attack" },
                points: 20,
            },
            {
                name: { pl: "Atak ognia", en: "Fire attack" },
                points: 50,
            },
            {
                name: "ShOcK",
                points: 75,
            },
            {
                name: { pl: "Laser" },
                points: 130,
            },
            {
                name: { pl: "Armagedon" },
                points: 350,
            },
        ],
        description: {
            pl: "To ten Stickman, który zaatakował swojego twórcę - noogai3. Posiada niewyobrażalnie dużo mocy typu tornado, teleportacja, ogień, laser w oczach… czyli naprawdę postać postać dość porównywalna do boga.",
            en: "This is the Stickman who attacked his creator - noogai3. He has unimaginable powers like tornado, teleportation, fire, laser in his eyes… which is really a character quite comparable to a god.",
        },
        dimension: "Stick'y-land",
        hp: 10000,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: ["Ogień", "Woda", "Ziemia", "Powietrze", "Informatyka", "Elektryczność", "Lód"],
            weak: {
                def: 4000,
                ind: ["Chi", "Galaktyka", "Duchoznactwo"],
            },
        },
        level_up: {
            hp: 3.6,
            battle: [2.5, 2.5, 2.65, 3.2, 3.2, 4.2],
            types: {
                weak: 10,
            },
        },
        sp: {
            name: {
                pl: "Seria niedozwolonych ataków",
                en: "Series of illegal attacks",
            },
            description: {
                pl: "Aby wyeliminować finalnie przeciwnika, {{charaName.theChosenOne}} łamie zasady Starcia Internetu, i atakuje przeciwnika losowymi atakami (poza Armagedonem) aż 20 razy, bez utraty BTP!",
                en: "To eliminate the final opponent, {{charaName.theChosenOne}} breaks the rules of Starcie Internetu, and attacks the opponent with random attacks (except Armagedon) as many as 20 times, without losing his BTP!",
            },
            maxUses: 1,
        },
        tags: ["sochr", "furr"],
    },
    theDarkLord: {
        battle: [
            {
                name: { pl: "Noga", en: "Leg" },
                points: 0,
            },
            {
                name: { pl: "Odrzut powietrzny", en: "Air knockback" },
                points: 37,
            },
            { name: "Vira-Blade", points: 100 },
        ],
        description: {
            pl: "Ten stickman też ujawniający się z osobą noogai3 stał się czarnym charakterem z powodu, że jego twórca go olał w walce przeciwko {{charaName.theChosenOne}} grając w Pasjansa. Finalnie został wyeliminowany przez {{charaName.theSecondComing}}. Jądro Internetu postanowiło go przywrócić do żywych z takim samym charakterem, choć pod pewnymi warunkami. Na początku dochodziło do spięć ze stron {{charaName.theChosenOne}} i {{charaName.theSecondComing}}, ale po pewnym czasie to złagodzono i stał się pełnoprawnym stickmanem w tym wymiarze.",
            en: "This stickman also revealing himself with the person of noogai3 became a villain due to his creator pouncing on him in a fight against {{charaName.theChosenOne}} playing Solitaire. He was eventually eliminated by {{charaName.theSecondComing}}. The Internet core decided to bring him back to life with the same character, albeit with certain conditions. In the beginning there were disputes on the part of {{charaName.theChosenOne}} and {{charaName.theSecondComing}}, but after a while this was mitigated and he became a full-fledged stickman in this dimension.",
        },
        class: "import",
        dimension: "Stick'y-land",
        hp: 10000,
        level_up: {
            battle: [2, 3, 4],
            hp: 3.25,
            types: {
                strong: 0,
                weak: 100,
            },
        },
        max_lvl: 12,
        types: {
            have: ["Informatyka", "Powietrze", "Elektryczność", "Ogień"],
            strong: {
                def: 6000,
                ind: ["Powietrze", "Duchoznactwo", "Ziemia", "Chi"],
            },
            weak: {
                def: 4000,
                ind: ["Trucizna", "Galaktyka"],
            },
        },
        sp: {
            name: "ViraBots",
            description: {
                pl: "{{charaName.theDarkLord}} też był związany ze stworzeniem wirusa. Dzięki takiej hordzie wykonuje serię ataków przez 3 sekundy, 15 co sekundę.",
                en: "{{charaName.theDarkLord}} was also associated with the creation of the virus. With a horde like this, it performs a series of attacks for 3 seconds, 15 every second.",
            },
            maxUses: 1,
        },
        tags: ["atkback", "furr"],
    },
    theSecondComing: {
        battle: [
            {
                name: { pl: "Pięść", en: "Fist" },
                points: 0,
            },
            {
                name: { pl: "Noga", en: "Leg" },
                points: 12,
            },
            {
                name: { pl: "Miecz z diamentów (Minecraft)", en: "Diamond sword (Minecraft)" },
                points: 35,
            },
            { name: "Creative mode (Minecraft)", points: 100 },
            { name: "Awakened", points: 175 },
        ],
        description: {
            pl: "Druga wersja {{charaName.theChosenOne}}; też związany z atakiem na noogai3, ale nie spowodował krytycznych szkód. Ma nietypowy styl walki; posiada możliwość użycia „ostatecznej siły”, co pokazuje jego potęgę w walce.",
            en: "Second version of {{charaName.theChosenOne}}; also involved in an attack on noogai3, but did not cause critical damage. He has an unusual fighting style; he has the ability to use „ultimate force”, which shows his power in combat.",
        },
        class: "dark_shop",
        dimension: "Stick'y-land",
        hp: 10000,
        level_up: {
            battle: [2, 2.7, 3.3, 4, 4.57],
            hp: 3.605,
            types: {
                strong: 200,
                weak: 30,
            },
        },
        max_lvl: 10,
        types: {
            have: ["Chi", "Ziemia", "Informatyka"],
            strong: {
                def: 4000,
                ind: ["Powietrze", "Duchoznactwo"],
            },
            weak: {
                def: 3000,
                ind: ["Trucizna", "Galaktyka"],
            },
        },
        sp: {
            name: "«You need to die…»",
            description: {
                pl: "Gdyby porównać {{charaName.theSecondComing}} do najszybszego komputera świata, to jest najpotężniejszy w szybkości wykonywania kodu. Także dzięki tej możliwości tworzy tymczasowe własne jądro (o wiele wiele słabsze od głównego) oraz z jego mocą uderza atakiem o potężnej wartości.",
                en: "If one were to compare {{charaName.theSecondComing}} to the world's fastest computer, it is the most powerful in the speed of code execution. Also due to this ability, it creates a temporary core of its own (much much weaker than the main one) and with its power it hits with an attack of powerful value.",
            },
            maxUses: 1,
        },
        tags: ["furr"],
    },
    havier: {
        battle: [
            {
                name: { pl: "Strzał prochem", en: "Gunpowder shot" },
                points: 5,
            },
            {
                name: { pl: "Żar ognisty", en: "Fiery embers" },
                points: 60,
            },
            {
                name: "TNT",
                points: 200,
            },
        ],
        description: {
            pl: "Postać, gdzie jego składnikiem jest proch. Strzela prochem, porusza się prochem… więc gdy potrzebujesz „trochę” wybuchów, on jest w tym najlepszy!",
            en: "A character where his ingredient is gunpowder. He shoots gunpowder, he moves with gunpowder… so when you need „some” explosions, he's the best at it!",
        },
        dimension: "Stick'y-land",
        hp: 8000,
        class: "legendary",
        max_lvl: 16,
        types: {
            have: ["Ogień", "Ziemia"],
            strong: {
                def: 2500,
                ind: ["Metal", "Duchoznactwo", "Trucizna"],
            },
            weak: {
                def: 3500,
                ind: ["Informatyka", "Galaktyka"],
            },
        },
        level_up: {
            hp: 2.8,
            battle: [2.8, 3.5],
            types: {
                strong: 150,
                weak: 200,
            },
        },
        sp: {
            name: {
                pl: "Totalna kasacja przeciwnika",
                en: "Total critical massacre",
            },
            description: {
                pl: "{{charaName.havier}} uderza tak mocno, że zadaje dostateczną ilość DMG oraz cios krytyczny zmniejszający się u przeciwnika z czasem - świeżo po użyciu wynosi 100%, po 2 ruchach zmniejsza się do 75%, a po 5 - do 50%.",
                en: "{{charaName.havier}} hits so hard that it deals a enough DMG and a critical damage that decreases in the opponent over time - freshly after use it is 100%, after 2 moves it decreases to 75% and after 5 moves - to 50%.",
            },
            maxUses: 1,
        },
        tags: ["atkback"],
    },
    paty: {
        battle: [
            {
                name: { pl: "Pięść", en: "Fist" },
                points: 0,
            },
            {
                name: { pl: "Atak obrotowy", en: "Rotational attack" },
                points: 20,
            },
            { name: "ShOcK", points: 59 },
            {
                name: { pl: "Piorunowy dash", en: "Thunderbolt dash" },
                points: 123,
            },
        ],
        description: {
            pl: "Tajemnica, zamknięta w sobie osobowość. Ten Stickman nigdy nie traci czujności i gotów jest walczyć nawet z najcięższym przeciwnikiem. Nieodłączną jego częścią jest na pewno piorun - dzięki niemu może zrobić nawet niezłe wsady na przeciwnika.",
            en: "A mysterious, self-contained personality. This Stickman never loses his vigilance and is ready to fight even the toughest opponent. The inseparable part of him is definitely the lightning - thanks to it he can even make a good dunk on his opponent.",
        },
        dimension: "Stick'y-land",
        hp: 10000,
        class: "import",
        max_lvl: 12,
        types: {
            have: ["Elektryczność", "Chi", "Powietrze"],
            weak: {
                def: 2000,
                ind: ["Galaktyka", "Metal"],
            },
        },
        level_up: {
            hp: 3.274,
            battle: [1.9, 2.4, 3.2, 3.447],
            types: {
                weak: 0,
            },
        },
        sp: {
            name: "Lightnin'gedon",
            description: {
                pl: "W końcu trzeba wykończyć przeciwnika! {{charaName.paty}} wykonuje masę dashów z ostatecznym ruchem zwanym <i>Piorunowy laser śmierci</i>, zależne od jego HP (x1,21). Na szkodę traci też pewien procent HP.",
                en: "Finally, the opponent must be finished! {{charaName.paty}} performs a ton of dashing with the ultimate move called <i>Lightning death laser</i>, dependent on his HP (x1,21). He also loses a percentage of his HP.",
            },
            maxUses: 1,
        },
        tags: ["toks"],
    },
    chromo: {
        battle: [
            {
                name: { pl: "Dalekobieżny atak ramion", en: "Long-distance arm attack" },
                points: 3,
            },
            {
                name: { pl: "Odrzut", en: "Knockback" },
                points: 15,
            },
            {
                name: { pl: "Fale telepatyczne", en: "Telepathic waves" },
                points: 30,
            },
            {
                name: { pl: "Potrójny atak", en: "Tripple attack" },
                points: 100,
            },
        ],
        class: "epic",
        dimension: "Stick'y-land",
        description: {
            pl: "Pierwsza postać adaptacyjna do tła. Posiada ataki telepatyczne, może dodatkowo atakować zarówno powietrzem jak i trucizną. Dzięki niebieskiemu i czerwonemu chromowi może uderzać z daleka. Uwielbia nowe znajomości, lecz nie zapomina o tym, że trzeba walczyć w tym kącie Internetu.",
            en: "The first character to adapt to the background. Has telepathic attacks, can additionally attack with both air and poison. Thanks to her blue and red chrome, she can strike from a distance. She loves new friendships, but doesn't forget to fight in this corner of the Internet.",
        },
        max_lvl: 16,
        hp: 5000,
        types: {
            have: ["Powietrze", "Informatyka", "Trucizna"],
            strong: {
                def: 2700,
                ind: ["Ziemia", "Lód", "Trucizna"],
            },
            weak: {
                def: 2800,
                ind: ["Powietrze", "Elektryczność", "Chi", "Duchoznactwo"],
            },
        },
        level_up: {
            battle: [2.7, 2.9, 3.1, 3.2],
            hp: 2.8,
            types: { strong: 300, weak: 110 },
        },
        sp: {
            name: {
                pl: "Sieci type-X",
                en: "Networks type-X",
            },
            description: {
                pl: "{{charaName.chromo}} ukazuje nową generację sieci! Oczywiście do wyniszczenia postaci… Zwiększa ataki niemiłosiernie o 75%.",
                en: "{{charaName.chromo}} reveals a new generation of networks! Obviously to the destruction of the character… Increases attacks mercilessly by 75%.",
            },
            maxUses: 2,
        },
        tags: ["time"],
    },
    twinz: {
        battle: [
            {
                name: { pl: "B: Kopnięcie z półobrotu", en: "B: Half-turn kick" },
                points: 0,
            },
            {
                name: { pl: "O: Atak trzech pierścieni", en: "O: Three ring attack" },
                points: 10,
            },
            {
                name: { pl: "O: Galaktyczne pęknięcia", en: "O: Galactic cracks" },
                points: 45,
            },
            {
                name: { pl: "B: Ognista kula", en: "B: Fireball" },
                points: 65,
            },
            { name: "O: dmg()", points: 105 },
            {
                name: { pl: "B: Wodne tsunami", en: "B: Aqua tsunami" },
                points: 135,
            },
        ],
        description: {
            pl: "Dwie osobowości uwięzione w jednym charakterze. Jeden z nich, {{charaName.blueTwinzer}}, ma opanowane Ogień i Wodę, a drugi, {{charaName.orangeTwinzer}} - Informatykę i Galaktykę. Nie znoszą jednak jednej mocy - Chi. To ona powoduje, że osobowości się rujnują.",
            en: "Two personalities trapped in one character. One, the {{charaName.blueTwinzer}}, has Fire and Water mastered, and the other, the {{charaName.orangeTwinzer}}, IT and Galaxy. However, they can't stand one power - Chi. It is she who causes the personalities to ruin each other.",
        },
        dimension: "Stick'y-land",
        hp: 6000,
        class: "import",
        max_lvl: 12,
        types: {
            have: ["Informatyka", "Galaktyka", "Ogień", "Woda"],
            weak: {
                def: 10000,
                ind: ["Chi"],
            },
        },
        level_up: {
            hp: 3.5,
            battle: [2.5, 2.5, 3.25, 3.25, 4, 4],
            types: {
                weak: 30,
            },
        },
        sp: {
            name: {
                pl: "Atak z dwóch stron",
                en: "Attack from two sides",
            },
            description: {
                pl: "Oba osobowości dzielą się, aby zaatakaować przeciwnika. Szansa na uderzenie od {{charaName.blueTwinzera}} wynosi 40%, a od {{charaName.orangeTwinzera}} - <sup>5</sup>/<sub>12</sub>.",
                en: "Both personalities split to attack the opponent. The chance of a hit from a {{charaName.blueTwinzer}} is 40% and from an {{charaName.orangeTwinzer}} is <sup>5</sup>/<sub>12</sub>.",
            },
            maxUses: 7,
        },
        tags: [],
    },
    szymekDymek: {
        battle: [
            {
                name: { pl: "Widły", en: "Pitchforks" },
                points: 5,
            },
            {
                name: { pl: "Grabież", en: "Plunder" },
                points: 25,
            },
            {
                name: { pl: "Ciągnikowy ruch", en: "Tractor load" },
                points: 250,
            },
        ],
        description: {
            pl: "Rolnik z krwi i kości zainteresowany kryptologią. Pewnego dnia prowadząc potężny ciągnik nie panował nad sobą i nagle zasnął. Po obudzeniu zorientował się, że czuje się jak w VR ze względu na jego wygląd i otoczenie. Jako waleczny chłop, pamiętając jeszcze średniowiecze z historii, radzi nieźle. Nie jest w tym wybitny, ale jak się skupi, to potrafi wygrać.",
            en: "A flesh and blood farmer with an interest in cryptology. One day while driving a powerful tractor he was out of control and suddenly fell asleep. Upon waking up, he realised that he felt like he was in VR because of his appearance and his surroundings. As a brave peasant, still remembering the Middle Ages from history, he manages quite well. He is not outstanding at it, but if he concentrates, he can win.",
        },
        dimension: "Stick'y-land",
        hp: 8400,
        class: "rare",
        max_lvl: 18,
        types: {
            have: ["Ziemia", "Metal", "Informatyka", "Elektryczność"],
            strong: {
                def: 1000,
                ind: ["Woda", "Informatyka", "Trucizna"],
            },
            weak: {
                def: 5000,
                ind: ["Ogień", "Chi", "Metal", "Elektryczność"],
            },
        },
        level_up: {
            hp: 2.55,
            battle: [2, 2.7, 3.35],
            types: {
                strong: 120,
                weak: 210,
            },
        },
        sp: {
            name: {
                pl: "Z ciągnikiem przez Internet",
                en: "With the tractor via the Internet",
            },
            description: {
                pl: "Przez całą rundę ciągnik {{charaName.szymekDymek|szymkaDymka}} powoduje regenerację, dodatkowe BTP oraz 10% szansy na mały atak w postaci spalin ze silnika. Zwiększa także jednorazowo atak <i>Ciągnikowy ruch</i> o 15%.",
                en: "Throughout the entire round, the {{charaName.szymekDymek|szymekDymek's}} tractor causes regeneration, additional BTP and 10% chance of a small attack in the form of exhaust fumes from the engine. It also increases once <i>Tractor load</i> attack by 15%.",
            },
            maxUses: 1,
        },
        tags: ["stormbtp"],
    },
    młody: {
        battle: [
            {
                name: { pl: "Rzut kartą", en: "Card throw" },
                points: 1,
            },
            {
                name: { pl: "Shotgun pełen płonących żetonów", en: "Shotgun full of burning tokens" },
                points: 75,
            },
        ],
        description: {
            pl: "Największy hazardzista na wojowniczym zakątku Internetu, jak i kanciarz podczas gry karcianej. Dla całego wymiaru wmawia, że wygrał na mistrzostwach zaszczyt bycia tutaj, lecz prawda jest zupełnie inna, gdzie do tej pory jest niewiadome, jak się on tutaj dostał - jeżeli się zastanawiasz, czy ktoś uwierzył, to tak: {{charaName.havier}}, {{charaName.szymekDymek}}, {{charaName.kremola}} i {{charaName.theSecondComing}}.",
            en: "The biggest gambler on the warrior corner of the internet, as well as a scumbag during the card game. For all the dimension he tells you that he won the honour of being here at the championship, but the truth is quite different, where it is still unknown how he got here - if you wonder if anyone believed him, the answer is yes: {{charaName.havier}}, {{charaName.szymekDymek}}, {{charaName.kremola}} and {{charaName.theSecondComing}}.",
        },
        dimension: "Stick'y-land",
        hp: 7570,
        class: "epic",
        max_lvl: 16,
        types: {
            have: ["Ogień", "Chi"],
            weak: {
                def: 4000,
                ind: ["Powietrze", "Galaktyka"],
            },
        },
        level_up: {
            hp: 2.3,
            battle: [2.2, 3],
            types: {
                weak: 0,
            },
        },
        sp: {
            name: "Ostre jak brzytwa karty",
            description: {
                pl: "{{charaName.młody}} zaczyna robić ostre końce w kartach, tym samym zwiększając ataki o 16%. W drugim ruchu dodatkowo rzuca trzema płonącymi kartami - jest szansa, że mogą wcale nie uderzyć przeciwnika, a mogą uderzyć wszystkie trzy!",
                en: "{{charaName.młody}} starts making sharp ends in the cards, thus increasing the attacks by 16%. On his second move, he additionally throws three burning cards - there is a chance that they may not hit the opponent at all, and they may hit all three!",
            },
            maxUses: 2,
        },
        tags: [],
    },
    kremola: {
        battle: [
            {
                name: { pl: "Kocie pazurki", en: "Kitty claws" },
                points: 0,
            },
            {
                name: { pl: "Małe kocie kły", en: "Kitty little canine" },
                points: 20,
            },
            {
                name: { pl: "Uderzenie ogonem", en: "Fierce tail stroke" },
                points: 60,
            },
        ],
        description: {
            pl: "Pierwszy Stickman z wyglądem zwierzęcym, dodatkowo jako płeć żeńska. Cicha, introwertyczna i zamknięta w sobie. Lubi dobre bity muzyczne, ale też dobrą zabawę. Też jest zwierzęciem {{charaName.nikolixia|nikolixii}}, bogini Stickmanów - ma obsesję na punkcie kotów, i traktuje je jak swoje (troska, głaskanie - tego typu sprawy).",
            en: "The first Stickman with an animal appearance. In addition, as a female gender. Quiet, introverted and closed-minded. She likes good music beats, but also a good time. She's also a {{charaName.nikolixia|nikolixia's}} pet, the goddess of Stickman - she's obsessed with cats, and treats them as her own (care, patting - that sort of thing).",
        },
        dimension: "Stick'y-land",
        hp: 5600,
        class: "rare",
        max_lvl: 18,
        types: {
            have: ["Trucizna"],
            strong: {
                def: 4000,
                ind: ["Informatyka", "Chi"],
            },
            weak: {
                def: 2000,
                ind: ["Woda", "Ogień", "Elektryczność", "Powietrze", "Lód"],
            },
        },
        level_up: {
            hp: 3,
            battle: [2.2, 2.4, 3.95],
            types: {
                strong: 210,
                weak: 51,
            },
        },
        sp: {
            name: "«Miauuu-łeś szansę przetrwać!»",
            description: {
                pl: "{{charaName.kremola}} atakuje podwójnie pazurami, i zyskuje w ten sposób kocią energię. Jeżeli nie wykorzysta energii przez trzy ruchy, energia ta jest przekształcana w BTP i HP (traci się też możliwość wykonania ponownie SP). W przeciwnym razie poprzez energię tworzy hordę kotów, gdzie każdy kot ma 10% szansy na danie wścieklizny - to powoduje też dodatkowe trzy ruchy trucizny. Maksymalnie może atakować 4 kotów na ruch.<br />[  Wścieklizna nie działa na {{charaName.snackowyAdmin|snackowegoAdmina}} i {{charaName.kiranaYonome|kiranęYonome}}. ]",
                en: "{{charaName.kremola}} attacks twice with its claws, and gains feline energy in the process. If he does not use the energy for three moves, the energy is converted into BTP and HP (the ability to perform SP again is also lost). Otherwise, he creates a horde of cats through energy, where each cat has a 10% chance of giving rabies - this also causes an additional three moves of poison. He can attack a maximum of 4 cats per move.<br />[ Rabies doesn't work on {{charaName.snackowyAdmin}} and {{charaName.kiranaYonome}}. ]",
            },
            maxUses: 2,
        },
        tags: ["btpwa", "time"],
    },
    botek: {
        battle: [
            {
                name: { pl: "Szybkie uderzenie", en: "Quick hit" },
                points: 0,
            },
            {
                name: { pl: "Dalekobieżna pięść", en: "Long-distance fist" },
                points: 15,
            },
            {
                name: { pl: "Piorunowa aura", en: "Thunderbolt aura" },
                points: 70,
            },
            {
                name: { pl: "Koścista artyleria", en: "Bony artillery" },
                points: 110,
            },
            {
                name: { pl: "Czachowy dash", en: "Skull dash" },
                points: 200,
            },
        ],
        description: {
            pl: "Jedyny w swoim rodzaju Polak i Anglik oraz dziwne połączenie kilku postaci. Potrafi korzystać z piorunów cienkich jak zaostrzone końce kart {{charaName.młody|młodego}} i zimne jak lód {{charaName.theChosenOne}}. Jak {{charaName.paty}}, przebywanie samemu nie stanowi dla niego problemu, ale gdy nadejdzie okazja spotkania, od razu do niej dołącza.",
            en: "A unique Polish and British man and a strange combination of several characters. He can use lightning bolts as thin as the sharpened ends of a {{charaName.młody|młody's}} cards and as cold as {{charaName.theChosenOne|theChosenOne's}} ice. Like {{charaName.paty}}, being alone is not a problem for him, but when the opportunity to meet arrives, he immediately joins it.",
        },
        dimension: "Stick'y-land",
        hp: 7400,
        class: "import",
        max_lvl: 12,
        types: {
            have: ["Elektryczność", "Chi", "Galaktyka"],
            weak: {
                def: 3400,
                ind: ["Powietrze", "Metal"],
            },
        },
        level_up: {
            hp: 3.5,
            battle: [1.85, 2.4, 2.8, 3.05, 3.474],
            types: {
                weak: 100,
            },
        },
        sp: {
            name: {
                pl: "Discord Nitro jako szansa bycia jeszcze lepszym",
                en: "Discord Nitro as an opportunity to be even better",
            },
            description: {
                pl: "Discord Nitro pozwala {{charaName.botek|botekowi}} uleczyć się, zwiększyć ataki o 3% i dodać +10 BTP.",
                en: "Discord Nitro allows {{charaName.botek}} to heal itself, increase attacks by 3% and add +10 BTP.",
            },
            maxUses: 14,
        },
        tags: ["toks"],
    },
    agatea: {
        battle: [
            {
                name: { pl: "Lodołamacz", en: "Ice breaker" },
                points: 0,
            },
            {
                name: { pl: "Lodowa pięść", en: "Ice fist" },
                points: 50,
            },
            {
                name: { pl: "Śnieżno-huraganowe pole rażenia", en: "Snow-hurricane field of fire" },
                points: 200,
            },
        ],
        description: {
            pl: "„Rodzynka” w swojej specjalistycznej klasie - jako jedyna od samego początku jest w niej i nie miała chęci jej opuścić. Niestety nie zna swoich ulubionych umiejętności, także ciężko dowiedzieć się o niej cokolwiek; jedynie co wiadomo to że lubi zabawy zimowe i czuje atmosferę świąteczną cały czas. Kiedy musi, przywali tak twardym lodem, że nie ma mowy o zaniknięciu urazu!",
            en: "„Raisin” in her specialist class - she is the only one who has been in it from the very beginning and had no desire to leave it. Unfortunately, she doesn't know her favourite skills, so it's hard to find out anything about her; all that is known is that she enjoys winter games and feels the festive atmosphere all the time. When she has to, she'll hit the ice so hard that there's no way the injury will fade!",
        },
        dimension: "Stick'y-land",
        hp: 5000,
        class: "epic",
        max_lvl: 16,
        types: {
            have: ["Lód", "Chi", "Powietrze", "Woda"],
            strong: {
                def: 1000,
                ind: ["Powietrze", "Woda", "Duchoznactwo", "Chi"],
            },
            weak: {
                def: 3400,
                ind: ["Trucizna", "Ogień"],
            },
        },
        level_up: {
            hp: 3,
            battle: [2, 2.5, 3.851],
            types: {
                strong: 10,
                weak: 70,
            },
        },
        sp: {
            name: {
                pl: "Lodowe spinjitzu",
                en: "Ice spinjitzu",
            },
            description: {
                pl: "Przez całą sekundę {{charaName.agatea}}, wirując się, zbiera wilgoć i tworzy wokół siebie osłonę w rodzaju ogromnego shurikena, najeżdżając później w przeciwnika. Jeżeli nie jest to żeńska postać, dodatkowo rzuca małym shurikenami, zwiększając szansę krytycznego ciosu przeciwnika i jego raniąc.",
                en: "For a full second, {{charaName.agatea}}, spinning, gathers moisture and forms a shield around herself in a kind of huge shuriken, invading the opponent later. If it is not a female character, she additionally throws small shurikens, increasing the chance of the opponent's critical blow and injuring them.",
            },
            maxUses: 1,
        },
        tags: ["double", "furr"],
    },
    kruczaWładczyniNekro: {
        battle: [
            {
                name: { pl: "Ogon", en: "Tail" },
                points: 0,
            },
            {
                name: { pl: "Ostre mochi", en: "Sharp mochi" },
                points: 22,
            },
            {
                name: { pl: "Kruczy atak", en: "Crowy attack" },
                points: 100,
            },
        ],
        description: {
            pl: "Królowa wszystkich kruków oraz druga postać podnosząca na duchu dla tych, którym nie została poświęcona uwaga od {{charaName.nikolixia|nikolixii}}. Mimo bycia szatańską postacią ma dobre serce i jest najlepszą przyjaciółką, choć zdarza się jej mieć napady ADHD. Ci, którzy zasłużyli, mogą po prostu na nią mówić {{charaName.kruczaWładczyniNekro|nekro}}, ale zdarzyło się to tylko {{charaName.havier|havierowi}} oraz {{charaName.twinz|twinzom}}; powód - nieznany. Prosi cały czas jądra Internetu, aby eleven też mógł być tutaj, ale w odpowiedzi zwrotnej dostaje informację żeby zaczekała - szczęśliwi bowiem czasu nie mierzą.",
            en: "Queen of all crows and the other uplifting character for those who have not received the attention from {{charaName.nikolixia}}. Despite being a fiendish character, she has a good heart and is the best of friends, although she does happen to have ADHD attacks. Those who deserve it can just call her {{charaName.kruczaWładczyniNekro|nekro}}, but this has only happened to {{charaName.havier}} and {{charaName.twinz}}; reason - unknown. She asks the Internet core all the time so that eleven can be here too, but in return she is told to wait - because happy people don't measure time.",
        },
        dimension: "Stick'y-land",
        hp: 8500,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: ["Duchoznactwo", "Chi", "Powietrze"],
            weak: {
                def: 1000,
                ind: ["Duchoznactwo", "Chi", "Powietrze", "Elektryczność"],
            },
        },
        level_up: {
            hp: 3.7,
            battle: [2.2, 2.4, 2.65],
            types: {
                weak: -20,
            },
        },
        sp: {
            name: {
                pl: "Kruczy dar",
                en: "Corbie's gift",
            },
            description: {
                pl: "Kruk {{charaName.kruczaWładczyniNekro|nekro}} przynosi losowy dar dla niej w postaci jedzenia. Może to być:<br />- Sushi (70%) - leczy ją, gdy ma poniżej 50% HP, w przeciwnym razie dodaje trochę BTP<br />- Pasztecik szczeciński (25%) - maksymalne HP zostaje zwiększone bez wpływu na aktualne wraz z losowym atakiem (HP - 23%, atak - 5%).<br />- Najostrzejszy kebab (5%) - na 5 ruchów ataki się zwiększają dwukrotnie, a BTP zostaje dodane. Przez całą rundę maksymalne HP, jak i aktualne zostają zwiększone o 20%.",
                en: "The {{charaName.kruczaWładczyniNekro|nekro's}} raven brings a random gift of food for her. This can be: <br />- Sushi (70%) - heals her when she is below 50% HP, otherwise adds some BTP <br />- Pasztecik szczciciński (25%) - maximum HP is increased without affecting current ones along with a random attack (HP - 23%, attack - 5%).<br />- The spiciest kebab (5%) - for 5 moves, attacks double and BTP is added. For the rest of match maximum HP as well as current HP are increased by 20%.",
            },
            maxUses: 3,
        },
        tags: ["stormbtp", "ahealth", "btpwa", "time"],
    },
    fobix: {
        battle: [
            {
                name: { pl: "Oddech nieśmiałości", en: "Breath of shyness" },
                points: 2,
            },
            {
                name: { pl: "Echo lęku", en: "Echo of fear" },
                points: 22,
            },
            {
                name: { pl: "Wir paniki", en: "Vortex of panic" },
                points: 100,
            },
            {
                name: { pl: "Cień strachu", en: "Shadow of fear" },
                points: 150,
            },
        ],
        description: {
            pl: "Stickman z dużą ilością fobii - największą w wymiarze, a co dopiero ze wszystkich. Niesamodzielny, zamknięty w swoim świecie, z problemami wymowy, wstydliwy… wierzy, że istnieje taki świat, w którym strach nie istnieje.",
            en: "A character with a lot of phobias - the biggest in the dimension, let alone of all. Indifferent, closed in his world, with speech problems, shy… he believes that there is such a world where fear does not exist.",
        },
        dimension: "Stick'y-land",
        hp: 9000,
        class: "common",
        max_lvl: 22,
        types: {
            have: ["Chi", "Powietrze"],
        },
        level_up: {
            hp: 2.3,
            battle: [1.95, 2.05, 2.05, 2.05],
        },
        sp: {
            name: {
                pl: "Wyimaginowany świat",
                en: "Imaginary world",
            },
            description: {
                pl: "{{charaName.fobix}} w końcu otwiera się w twierdzeniu, że jest w swoim wymyślonym świecie. Zwiększa więc swoje ataki o 160% oraz zanika u niego krytyczny cios, a każdy ruch to procentowe zadawanie obrażeń (3,5% HP, min. poziom postaci x100). Po dziesięciu ruchach staje się odświeżoną postacią zaniżoną o 2 poziomy i osłabioną.",
                en: '{{charaName.fobix}} finally opens up in claiming to be in his imaginary world, so he increases his attacks by 160% and his critical blow disappears, and each move is a percentage damage (3.5% HP + 500, min character\'s level x100). After ten moves, he becomes a refreshed character underrated by 2 levels and "nerfed".',
            },
            maxUses: 1,
        },
        tags: [],
    },

    // Pokemon
    pikachu: {
        battle: [
            {
                name: { pl: "Szybki atak", en: "Quick attack" },
                points: 5,
            },
            {
                name: { pl: "Stalowy ogon", en: "Iron tail" },
                points: 25,
            },
            {
                name: { pl: "Piorun", en: "Thunder Shock" },
                points: 70,
            },
        ],
        description: {
            pl: "Chyba nie trzeba tłumaczyć każdemu, że {{charaName.pikachu}} to pokémon-mysz z umiejętnościami elektrycznymi. Dostał się tam jako jedna z ofiar jądra Internetu. Pierwszy przedstawiciel własnego wymiaru.",
            en: "It probably doesn't need to be explained to everyone that {{charaName.pikachu}} is a Pokémon-mouse with electrical abilities. It got there as one of the victims of the Internet core. The first representative of its own dimension.",
        },
        dimension: "Pokémon",
        hp: 7450,
        class: "legendary",
        max_lvl: 14,
        types: {
            have: ["Elektryczność"],
            strong: {
                def: 3000,
                ind: ["Powietrze", "Metal", "Elektryczność"],
            },
            weak: {
                def: 4000,
                ind: ["Ziemia"],
            },
        },
        level_up: {
            hp: 3.2,
            battle: [2, 3, 3.5],
            types: {
                strong: 70,
                weak: 200,
            },
        },
        sp: {
            name: {
                pl: "DevEwolucja",
                en: "DevEvolution",
            },
            description: {
                pl: "Jeżeli ktoś jest fanem Pokémonów, ten wie, że istnieją wspomagacze specjalne jak MegaEwolucja czy Ruch-Z. A co jeżeli powiem, że jądro Internetu nie pozwoliło na zewnętrzne wspomagacze, a nadał dla {{charaName.pikachu}} własny wspomagacz? Dzięki niemu ta mysz posiada podwojoną ilość maksymalnego HP (nie wpływa na posiadane) oraz o 25% zwiększone 2 losowe ataki (lub jeden o 56,25%).",
                en: "If anyone is a Pokémon fan, they know that there are special boosters like MegaEvolution or Movement-Z. But what if I said that the Internet core didn't allow external boosters, and gave {{charaName.pikachu}} its own booster? With it, this mouse has double the maximum HP (does not affect his possession) and a 25% increase in 2 random attacks (or one of 56.25%).",
            },
            maxUses: 1,
        },
        tags: ["toks", "time"],
    },
    lunatone: {
        battle: [
            {
                name: { pl: "Hipnozja", en: "Hypnosis" },
                points: 5,
            },
            { name: "Moonblast", points: 50 },
        ],
        description: {
            pl: "Rogalikowy Pokémon, stworzony z kamienia oraz posiadający moc Chi. Według Pokédexa, faza księżyca wpływa na jego moc. Aby {{charaName.pikachu}} nie czuł się samotny, nadano jemu przyjaciela w postaci niego. Był zadowolony!",
            en: "A horned Pokémon, created from stone and possessing the power of Chi. According to Pokédex, the phase of the moon affects its power. To make sure {{charaName.pikachu}} didn't feel lonely, a friend was given in the form of him. He was happy!",
        },
        dimension: "Pokémon",
        hp: 7500,
        class: "uncommon",
        max_lvl: 20,
        types: {
            have: ["Ziemia", "Chi"],
            strong: {
                def: 2400,
                ind: ["Ziemia", "Trucizna", "Duchoznactwo", "Ogień"],
            },
            weak: {
                def: 5000,
                ind: ["Ziemia", "Woda", "Lód"],
            },
        },
        level_up: {
            hp: 2.525,
            battle: [1.9, 3],
            types: {
                strong: 50,
                weak: 100,
            },
        },
        sp: {
            name: {
                pl: "Laser z ziemi",
                en: "Laser made of dirt",
            },
            description: {
                pl: "{{charaName.lunatone}} atakuje przeciwnika po sekundzie od użycia, jednocześnie zwiększając jego HP o 7% i ataki o 4%.",
                en: "{{charaName.lunatone}} attacks an opponent a second after use, while increasing their HP by 7% and attacks by 4%.",
            },
            maxUses: 5,
        },
        tags: ["sochr"],
    },
    snorlax: {
        battle: [
            {
                name: { pl: "Ziewny ryk", en: "Yawn roar" },
                points: 5,
            },
            { name: "Giga Impact", points: 80 },
        ],
        description: {
            pl: "Pokémon, gdzie jego nieodłączną rutyną jest spanie… choć dobra informacja jest taka, że to pierwsza postać z umiejętnością tanka.",
            en: "A Pokémon where its inherent routine is to sleep… although the good news is that it is the first character with a tank skill.",
        },
        dimension: "Pokémon",
        hp: 10000,
        class: "common",
        max_lvl: 22,
        types: {
            have: ["Ziemia", "Powietrze"],
        },
        level_up: {
            hp: 2.3,
            battle: [1.7, 2.1],
            types: {
                strong: 50,
                weak: 100,
            },
        },
        sp: {
            name: {
                pl: "Przebudzenie",
                en: "Resurrection",
            },
            description: {
                pl: "Widziałeś kiedyś, graczu, przebudzonego {{charaName.snorlax|snorlaxa}}? Legendy mówią, że z powodu złości zwiększa ataki trzykrotnie, nadaje sobie dużo BTP oraz leczy się.",
                en: "Have you ever, player, seen an awakened {{charaName.snorlax}}? Legends say that due to anger it increases attacks tree times and gives itself big amount of BTP and some HP.",
            },
            maxUses: 1,
        },
        tags: ["ahealth", "tanker"],
    },

    // VTuberzy, do ataku!
    kiranaYonome: {
        battle: [
            {
                name: { pl: "Kocie pazurki", en: "Kitty claws" },
                points: 0,
            },
            {
                name: { pl: "Kij baseballowy", en: "Baseball bat" },
                points: 15,
            },
            { name: "> pixelsword", points: 47 },
            { name: "> byteblast", points: 123 },
        ],
        description: {
            pl: `Energiczna, pełna radości i pociech VTuberka, która zaczęła swoją działalność w sierpniu 2022 roku. Posiada aktualnie {{desc.db.yk}} obserwujących na Twitchu. Została poddana próbie stania się wojowniczką, jak narazie dobrze jej idzie…`,
            en: `An energetic, fun and cheerful VTuber who started her work in August 2022. She currently has {{desc.db.yk}} followers on Twitch. She has been challenged to become a fighter, so far she is doing well…`,
        },
        dimension: "VTuberzy, do ataku!",
        hp: 9000,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: ["Informatyka", "Galaktyka"],
            weak: {
                def: 4000,
                ind: ["Woda", "Lód"],
            },
        },
        level_up: {
            hp: 3.599908,
            battle: [2.01, 2.5, 3, 4.2],
            types: {
                weak: 125,
            },
        },
        sp: {
            name: {
                pl: "Atak od fanów",
                en: "The assault from fans",
            },
            description: {
                pl: "Dzięki zaaganżowaniu swoich fanów, {{charaName.kiranaYonome}} ich używa, aby zaatakować przeciwnika. Co każdu ruch wysyła 5 swoich fanów, aż jej się skończą…",
                en: "Thanks to the enagagement of her fans, {{charaName.kiranaYonome}} uses them to attack her opponent. Every move she sends 5 of her fans until she runs out of them…",
            },
            maxUses: 1,
        },
        tags: ["atkback", "stormbtp"],
    },
    ayandaRisu: {
        battle: [
            {
                name: { pl: "Wiewiórczy ogon", en: "Squirrel tail" },
                points: 1,
            },
            {
                name: { pl: "Sprej przeciw robactwu", en: "Anti-worm spray" },
                points: 77,
            },
        ],
        description: {
            pl: `Wiewiórcza VTuberka z magicznego lasu. Jedna z przedstawicielek hololive, zagubiona w ludzkim wymiarze. Żartobliwa, opiekuńcza oraz uparta w dążeniu do celu, choć czasem z rozdwojeniem jaźni - to nagle zacznie narzekać, to nagle głupota przyjdzie na myśl, to albo zacznie być dziecinna, albo poważnie dorosła. Dzięki temu przeciwnik nie jest w stanie przewidzieć jej ruchu - nawet {{charaName.paty}}, znany z czujności i sprytu, miał problemy z unikaniem bez użycia SP!`,
            en: `A squirrelly VTuber from the magic forest. One of the representatives of the hololive, lost in the human dimension. Playful, caring and stubborn in the pursuit of her goals, although sometimes with a split ego - it is suddenly that she will start complaining, it is suddenly that stupidity will come to mind, it is either that she will start being childish or seriously adult. This makes it impossible for an opponent to predict her movement - even {{charaName.paty}}, known for his alertness and cunning, had trouble dodging without using SP!`,
        },
        dimension: "VTuberzy, do ataku!",
        hp: 8050,
        class: "uncommon",
        max_lvl: 20,
        types: {
            have: ["Ziemia", "Trucizna", "Ogień"],
            strong: {
                def: 1300,
                ind: ["Woda", "Chi"],
            },
            weak: {
                def: 2500,
                ind: ["Galaktyka", "Trucizna"],
            },
        },
        level_up: {
            hp: 2.38,
            battle: [1.92, 1.92],
            types: {
                strong: 100,
                weak: 50,
            },
        },
        sp: {
            name: "«We are nut the same.»",
            description: {
                pl: "Mimo ciekawości działania ludzkiego wymiaru, {{charaName.ayandaRisu}} nie przepada, gdy ktoś każe robić cokolwiek schematowo. Kiedy jej HP spadnie do 7% lub kiedy wyczuje co drugi ruch, że BTP przeciwnika wynosi ponad 60 (może nie wyczuć wcale, może też wyczuć połowę faktycznej wartości albo faktyczną ilość), podpala duży orzech i rzuca w przeciwnika ogonem, powodując dodatkowo podpalenie i zwrot HP z 5% DMG.",
                en: "Despite her curiosity about the workings of the human dimension, {{charaName.ayandaRisu}} is not fond of being told to do anything schematically. When her HP drops to 7%, or when she senses every other move that an opponent's BTP is greater than 60 (she may not sense it at all, or she may sense half the actual value or the actual amount), she lights a large nut on fire and throws her tail at the opponent, further causing them to catch fire and return HP with 5% DMG.",
            },
            maxUses: 1,
        },
        tags: ["stormbtp"],
    },
    ameliaWatson: {
        battle: [
            {
                name: { pl: "Zastrzyk wyniszczający organizm", en: "Body-destroying injection" },
                points: 8,
            },
            {
                name: { pl: "Kula makaronowa", en: "NoodlyBall" },
                points: 60,
            },
            {
                name: { pl: "Mityczny wir", en: "Mythical Maelstrom" },
                points: 120,
            },
        ],
        description: {
            pl: `Uważana osobiście jako detektyw nr. 1 w hololive. Aktywna fizycznie i umysłowo - rozwiąże Tobie nawet najtrudniejszą zagadkę w mniej niż minutę. Chciałaby mieć moc cofania się w czasie z zegarkiem kieszonkowym w tym bojowym zakątku, ale jądro Internetu nie pozwoliło na to - za to dało w nim specjalną funkcję…`,
            en: `Considered personally as the No. 1 detective in hololive. Physically and mentally active - she will solve even the most difficult mystery for you in less than a minute. She would have liked to have had the power to go back in time with her pocket watch in this combat place, but the Internet core didn't allow this - instead it gave her a special function…`,
        },
        dimension: "VTuberzy, do ataku!",
        hp: 9000,
        class: "epic",
        max_lvl: 16,
        types: {
            have: ["Metal", "Trucizna", "Powietrze"],
            weak: {
                def: 300,
                ind: ["Galaktyka", "Trucizna"],
            },
        },
        level_up: {
            hp: 2.38,
            battle: [2, 2.4, 3],
            types: {
                weak: 5,
            },
        },
        sp: {
            name: {
                pl: "Przeciwnik spalony żywcem",
                en: "Opponent burned alive",
            },
            description: {
                pl: "{{charaName.ameliaWatson}} sprawdza warunki pogodowe w trzech miejscach, wybierając spośród nich najmniejsze zachmurzenie i wysoką temperaturę. Dzięki takiej informacji używa zmodyfikowanego zegarka (tego wspomniano), aby ogromne szkło powiększające się pojawiło w celu ataku na przeciwnika. Szansa na krytyczny cios od przeciwnika podczas ataku jest ustawiana na 75% (jeżeli w meczu ma mniejszą szansę od wymienionej powyżej), a potem wraca do normy.",
                en: "{{charaName.ameliaWatson}} checks the weather conditions at three locations, selecting the least cloud cover and high temperature from among them. With this information, he uses a modified clock (the one mentioned) to make a huge zoom glass appear to attack the opponent. The chance of a critical hit from an opponent during an attack is set to 75% (if in a match it has a lower chance than the one mentioned above), and then returns to normal.",
            },
            maxUses: 1,
        },
        tags: ["toks"],
    },
    gawrGura: {
        battle: [
            {
                name: { pl: "Ukąszenie", en: "Bite" },
                points: 0,
            },
            {
                name: { pl: "Trójząb", en: "Trident" },
                points: 42,
            },
            {
                name: { pl: "Naddźwiękowy balon wodny", en: "Supersonic water balloon" },
                points: 100,
            },
        ],
        description: {
            pl: `Wzrostem mała, ale sercem wielka VTuberka uwielbiająca wszystkie morskie stworzenia - nie bez powodu ubrała strój rekina. Jedna z przedstawicielek hololive pierwszej generacji. Dla każdego wiek podaje ok. 9000 lat (sama ma problemy z zapamiętaniem), choć obliczenia od tych, którzy się tego podjęli, stwierdzają nieco inaczej - {{charaName.habby}} wskazał na wiek równemu roku powstania Internetu (± 25 lat), {{charaName.haker1000}} obliczył wiek ok. 100000 lat, a {{charaName.theSecondComing}} stwierdził, że nie może mieć więcej niż 300 lat. Na pytanie jak odpowiedź nie jest jasna…`,
            en: `Small in height but big in heart VTuber who loves all sea creatures - there's a reason she wore a shark outfit. One of the representatives of the hololive first generation. For each, she gives an age of around 9,000 years (she herself has trouble remembering), although calculations from those who have taken the plunge state slightly differently - {{charaName.habby}} indicated an age equal to the year the internet was created (± 25 years), {{charaName.haker1000}} calculated an age of around 100,000 years, and {{charaName.theSecondComing}} said it couldn't be more than 300 years old. The answer to the question of how is not obvious…`,
        },
        dimension: "VTuberzy, do ataku!",
        hp: 9642,
        class: "epic",
        max_lvl: 16,
        types: {
            have: ["Woda", "Chi"],
            strong: {
                def: 1000,
                ind: ["Ogień"],
            },
            weak: {
                def: 2000,
                ind: ["Lód"],
            },
        },
        level_up: {
            hp: 2.75,
            battle: [1.8, 2.2, 2.72],
            types: {
                strong: 0,
                weak: 80,
            },
        },
        sp: {
            name: "a.",
            description: {
                pl: "Ten pewny film od {{charaName.gawrGura|gawrGury}} sprawił, że fani zrobili z tego religię. Jądro Internetu więc kreatywnie podeszło do tworzenia SP dla niej. Dzięki jej krzyku pierwszej litery zabiera w pierwszym ruchu całe BTP przeciwnika, a w drugim atakuje ostatnim atakiem.",
                en: "This certain video from {{charaName.gawrGura}} made fans a religion. Internet core, therefore, took a creative approach to making SP for her. With her first letter shout, she takes out her opponent's entire BTP on the first move and attacks with her last attack on the second.",
            },
            maxUses: 2,
        },
        tags: ["atkback"],
    },

    // Bojowe nastawienie celebrytów
    kacperRietz: {
        battle: [
            {
                name: { pl: "Pięść", en: "Fist" },
                points: 2,
            },
            { name: "GBS-ik", points: 20 },
            {
                name: { pl: "Wyrzutnia memów", en: "Meme launcher" },
                points: 69,
            },
        ],
        description: {
            pl: `Jedyny w swoim rodzaju YouTuber, kojarzony z uwagami szkolnymi, photoshopem, januszami marketingu oraz przede wszystkim sponsorami i demonetyzacją. Wszyscy w tym zakątku są przekonani, że jest umięśniony, a nie jak widzowie, że twierdzą o jego dużej ilości tłuszczu…`,
            en: `A one-of-a-kind YouTuber, associated with schoolyard remarks, photoshop, marketing janissaries and most importantly sponsorship and demonetisation. Everyone in this corner is convinced he's muscular, rather than viewers making claims about his large amount of fat…`,
        },
        dimension: "Bojowe nastawienie celebrytów",
        hp: 7000,
        class: "import",
        max_lvl: 12,
        types: {
            have: ["Ogień", "Elektryczność", "Informatyka"],
            weak: {
                def: 800,
                ind: ["Duchoznactwo", "Trucizna"],
            },
        },
        level_up: {
            hp: 3.32501,
            battle: [2, 2.5, 3],
            types: {
                weak: 0,
            },
        },
        sp: {
            name: {
                pl: "Ryk smoka",
                en: "Dragon's roar",
            },
            description: {
                pl: "{{charaName.kacperRietz}} w końcu nie wytrzymuje i zieje potężnym ogniem, gdzie w 15 ruchach powoduje dodatkowe szkody - w ciągu 2 pierwszych ruchach przeciwnik dostaje obrażenia o wartości 90% ataku, od 3 do 7 ruchu o wartości 50%, a reszta - o wartości 20%.",
                en: "In the end, {{charaName.kacperRietz}} can't take it and breathes a powerful fire, where it causes collateral damage in 15 moves - within the first 2 moves the opponent gets 90% attack damage, from the 3rd to the 7th move 50%, and the rest 20%.",
            },
            maxUses: 1,
        },
        tags: ["sochr", "furr"],
    },
    elsiAdajew: {
        battle: [
            {
                name: { pl: "Suchar", en: "Toast" },
                points: 0,
            },
            {
                name: { pl: "Kawa", en: "Coffee" },
                points: 25,
            },
            {
                name: "📸",
                points: 74,
            },
        ],
        description: {
            pl: `Człowiek pełen sucharów pod ręką; czasem są takie suche, że przeciwnik nie może się pozbierać po nim! Ale poza nimi jeszcze lubi fotografie, pandy i majonez kielecki. Gdyby mógł, by chciał przeżyć z chęcią podróż z {{charaName.asterixem}} i {{charaName.obelixem}}!`,
            en: `A man full of jokes at hand; sometimes they are so dry that his opponent can't pick up after him! But outside of them he still likes photographs, pandas and Kielce mayonnaise. If he could, he would love to experience a trip with {{charaName.asterix}} and {{charaName.obelix}}!`,
        },
        dimension: "Bojowe nastawienie celebrytów",
        hp: 6000,
        class: "rare",
        max_lvl: 18,
        types: {
            have: ["Informatyka", "Trucizna"],
        },
        level_up: {
            hp: 2.9,
            battle: [3, 2.8, 2.6],
        },
        sp: {
            name: {
                pl: "Użyteczniejszy majonez",
                en: "More useful mayonaise",
            },
            description: {
                pl: "Majonez kielecki w tym zakątku dostał ciekawe właściwości. Po zjedzeniu jednej porcji {{charaName.elsiAdajew}} zostaje leczony i ma możliwość naładowania sobie BTP (25% lub co 5 użycie).",
                en: "The Kielce mayonnaise in this place gets interesting properties. After eating one portion {{charaName.elsiAdajew}} is healed and has the ability to recharge his BTP (25% or every 5 uses).",
            },
            maxUses: 15,
        },
        tags: ["stormbtp"],
    },

    // Gang Sokołów
    gabrysiaSotoła: {
        battle: [
            {
                name: { pl: "Uderzenie kabanosem", en: "Cabbage punch" },
                points: 3,
            },
            {
                name: { pl: "Shurikenowe salami chips", en: "Shuriken salami chips" },
                points: 30,
            },
            {
                name: { pl: "Niebiańskie ognie z wydechu wyścigowego", en: "Heavenly fires from the racing exhaust" },
                points: 100,
            },
        ],
        description: {
            pl: "Dziewczyna dopiero rozpoczynająca swoją wielką przygodę po fanpage'u Super Snacki. Poza przekąskami uwielbia też motoryzację - nie bez powodu aureola wygląda jak wybuchy z wydechów po części. Jako że ta postać pochodzi z nieinternetowego wymiaru, trzeba było zrobić alternatywną wersję programistyczną. I zrobiono, bez twarzy oraz z rogami diabła i aureolą po części związanymi z ogniami z wydechów.",
            en: "A girl just starting out on her big adventure following the Super Snacki fanpage. As well as snacks, she also loves motoring - there's a reason why the halo looks like explosions from the exhaust after parts. As this character comes from a non-internet dimension, an alternative programming version had to be made. And it was done, without the face and with the devil's horns and halo partly related to the exhaust fires.",
        },
        dimension: "Gang Sokołów",
        hp: 5500,
        class: "legendary",
        max_lvl: 14,
        types: {
            have: ["Duchoznactwo", "Ogień", "Informatyka"],
            strong: {
                def: 1000,
                ind: ["Powietrze", "Woda", "Lód", "Elektryczność", "Duchoznactwo"],
            },
            weak: {
                def: 3000,
                ind: ["Chi", "Ogień"],
            },
        },
        level_up: {
            hp: 2.85,
            battle: [3, 4.5, 5.5],
            types: {
                strong: 30,
                weak: 50,
            },
        },
        sp: {
            name: {
                pl: "Ogniste salamitki jak Lamborghini",
                en: "Fiery salamis as Lamborghinis",
            },
            description: {
                pl: "Pierwsze użycie powoduje, że rozgrzewa do czerwoności wirtualny silnik samochodowy, czyli zwiększa wszystkie ataki o 25% i zmniejsza HP o 10%. Drugie użycie, kosztem zmniejszenia ataków do 80% ich wartości, już uruchamia reakcję łańcuchową i po 5 sekundach {{charaName.gabrysiaSotoła}} strzela 12 salamitkami, które płoną! Nie każda uderzy, ale spokojnie - przynajmniej jedna salamitka trafi.",
                en: "The first use heats up the virtual car engine, meaning it increases all attacks by 25% and reduces HP by 10%. The second use, at the cost of reducing attacks to 80% of their value, already sets off a chain reaction and after 5 seconds {{charaName.gabrysiaSotoła}} shoots 12 salamiters that are on fire! Not every one will hit, but rest assured - at least one salamite will hit.",
            },
            maxUses: 2,
        },
        tags: ["double", "furr"],
    },
    snackowyAdmin: {
        battle: [
            {
                name: { pl: "Rzut memem", en: "Throwback meme" },
                points: 0,
            },
            {
                name: { pl: "Bombowy kabanos", en: "Bomb cabanas" },
                points: 35,
            },
            {
                name: { pl: "Kotołap", en: "<b>Cat</b>cher" },
                points: 135,
            },
        ],
        description: {
            pl: "Administrator fanpage'a Super Snacki - stronie poświęconej najlepszym przekąskom mięsnych (wg. konsumentów). Idol, jak i przyjaciel wszystkich osób z tego wymiaru. Poza kabanosami uwielbia też koty (oczywiście ich nie zjada). Jako że nie pozwolił na umieszczanie swego wizerunku, jądro Internetu postanowiło, że wizerunek zamieni na jednego z jego memów. Nie jest jakiś walczący, ale spróbuj go tylko wkurzyć, to oberwiesz mocno!",
            en: "Administrator of the fanpage Super Snacki - a page dedicated to the best meat snacks (according to consumers). An idol, as well as a friend of all the people in this dimension. In addition to cabanas, he also loves cats (he doesn't eat them, of course). As he did not allow his image to be posted, the Internet core decided to turn the image into one of his memes. He's not some fighter, but just try to piss him off, you'll flop hard!",
        },
        dimension: "Gang Sokołów",
        hp: 8300,
        class: "import",
        max_lvl: 12,
        types: {
            have: ["Trucizna", "Informatyka", "Chi"],
            strong: {
                def: 3000,
                ind: ["Ziemia", "Elektryczność", "Informatyka"],
            },
            weak: {
                def: 4000,
                ind: ["Trucizna", "Ogień", "Woda", "Lód"],
            },
        },
        level_up: {
            hp: 3.1,
            battle: [2, 3, 4],
            types: {
                strong: 50,
                weak: 120,
            },
        },
        sp: {
            name: {
                pl: "Przerwa na przekąskę",
                en: "Snack break",
            },
            description: {
                pl: `Czemu ktoś zabroni zrobić przerwę, aby mógł {{charaName.snackowyAdmin}} sobie zjeść smacznie przekąskę? A nie wszyscy wiedzą, że każda przekąska ma swoje unikalne moce!<br />
                - kabanosy francuskie zwiększają wszystkie ataki o 8%.<br />
                - kabanosy polskie zwiększają losowy atak o 25%.<br />
                - czosnkowe Salami Chips powodują dodanie BTP.<br />
                - ketchupowe Salami Chips zwiększają losowy atak o 5% i leczą {{charaName.snackowyAdmin|snackowegoAdmina}}.<br />
                - CHRUP 'US Salami Chips zmniejszają szansę krytycznego ciosu.<br />
                - Beef Jerky powodują, że jego maksymalne HP się zwiększa o 10%, i nie wpływa na posiadane.<br />
                - Mini Snacki działają jak apteczka - leczą {{charaName.snackowyAdmin|snackowegoAdmina}}.<br />
                - Mix Snacków powodują zmniejszenie szansy krytycznego ciosu, zwiększenie wszystkich ataków o 5%, i zwiększenie maksymalnego HP o 3%.<br />
                - Wędlinka Sokołów zwiększa wszystkie ataki o 6%, maksymalne HP o 3%, ilość BTP i szansę krytycznego ciosu oraz powodują leczenie.<br />
                Przeszkodą dla niego jest {{charaName.paty}} - twierdzi, że takie przerwy nie są dozwolone, więc jeżeli to właśnie z nim jest toczona walka, od czasu do czasu nie pozwoli na kabanosy, tym samym go atakując.`,
                en: `Why forbid anyone from taking a break so they can {{charaName.snackowyAdmin}} a tasty snack? And not everyone knows that every snack has its own unique powers!<br />
                - French cabanas increase all attacks by 8%.<br />
                - Polish cabanas increase the random attack by 25%.<br />
                - Garlic Salami Chips cause BTP to be added.<br />
                - Ketchup Salami Chips increase the random attack by 5% and heal {{charaName.snackowyAdmin}}.<br />
                - CHRUP 'US Salami Chips reduce the chance of a critical blow.<br />
                - Beef Jerky causes his maximum HP to increase by 10%, and does not affect his possession.<br />
                - Mini Snacks act like a first-aid kit - they heal {{charaName.snackowyAdmin}}.<br />
                - Mixed Snacks cause a reduced chance of a critical blow, increase all attacks by 5%, and increase maximum HP by 3%.<br />
                - Sokołów's sausage increases all attacks by 6%, maximum HP by 3%, the amount of BTP and the chance of a critical blow, and causes healing.<br />
                The obstacle for him is {{charaName.paty}} - he claims that such interruptions are not allowed, so if it is him that the fight is with, he will occasionally not allow cabanas, thus attacking him.`,
            },
            maxUses: 10,
        },
        tags: ["sochr"],
    },

    // HoYoverse
    zhongli: {
        battle: [
            {
                name: { pl: "Włócznia", en: "Spear" },
                points: 0,
            },
            { name: "<i>Rain of Stone</i>", points: 30 },
            { name: "<i>Planet Befall</i>", points: 110 },
        ],
        description: {
            pl: "Postać z gry Genshin Impact. Wysoki i szczupły mężczyzna potrafi wojować kryształami i wielką profesjonalnie zrobioną włócznią. Jak wielu postaci, został porwany do tego miejsca. Do tej pory jemu się tu nie podoba, i stara się uciec z tej symulacji tak, żeby nikt się nie domyślał…",
            en: "A character from the Genshin Impact game. A tall and slender man, he can war with crystals and a large professionally made spear. Like many characters, he was taken to this place. So far he doesn't like it here, and is trying to escape this simulation so that no one will guess…",
        },
        dimension: "HoYoverse",
        hp: 7000,
        class: "epic",
        max_lvl: 40,
        types: {
            have: ["Ziemia", "Chi", "Duchoznactwo"],
            strong: {
                def: 500,
                ind: ["Ziemia"],
            },
            weak: {
                def: 3000,
                ind: ["Informatyka", "Galaktyka"],
            },
        },
        level_up: {
            hp: 2.04044,
            battle: [2, 2.3, 3.15],
            types: {
                strong: 0,
                weak: 11,
            },
            cost: "500+50*{lvl}",
        },
        sp: {
            name: "Mega Dominus Lapidis",
            description: {
                pl: `Każdy gracz Genshin Impact kojarzy skill Dominus Lapidis - {{charaName.zhongli}} dostał tutaj ulepszoną wersję. Dla przeciwnika zadaje obrażenia i tym samym ustawia minimalną szansę krytycznego ciosu na 35%; dla siebie przez 5 ruchów regeneruje siebie, wzmacnia ataki o 13.5%, i tymczasowo zmniejsza szansę krytycznego ciosu o połowę - po 5 ruchach powraca do stanu przed użyciem.`,
                en: `Every Genshin Impact player is familiar with the Dominus Lapidis skill - {{charaName.zhongli}} got an improved version here. For the opponent, it deals damage and thus sets the minimum critical strike chance to 35%; for himself, for 5 moves, he regenerates himself, strengthens attacks by 13.5%, and temporarily halves the critical strike chance - after 5 moves, he returns to his state before use.`,
            },
            maxUses: 1,
        },
        tags: ["sochr"],
    },
    topazAndNumby: {
        battle: [
            {
                name: { pl: "Deficyt…", en: "Deficit…" },
                points: 5,
            },
            {
                name: "«Difficulty Paying?»",
                points: 75,
            },
        ],
        description: {
            pl: "Postać z gry Honkai: Star Rail. {{charaName.topaz}} jest starszym menadżerem działu Inwestycji Strategicznych w Interastral Peace Corporation, jednym z Dziesięciu Kamiennych Serc oraz liderem zespołu ds. specjalnych długów. Partner {{charaName.topaz}}, {{charaName.numby}} (formalnie <i>Warp Trotter „Numby”</i>), jest zdolny precyzyjnie dostrzec gdzie znajdują się „bogactwa”. Może nawet wykonywać prace związane z bezpieczeństwem, windykacją długów i naukami aktuarialnymi.",
            en: "A character from Honkai: Star Rail game. {{charaName.topaz}} is a Senior Manager of the Strategic Investment Department in the Interastral Peace Corporation, one of the Ten Stonehearts and leader of the Special Debts Picket Team. {{charaName.topaz|topaz's}} partner, {{charaName.numby}} (in formal, <i>Warp Trotter „Numby”</i>), is also capable of acutely perceiving where „riches” are located. It can even perform jobs involving security, debt collection, and actuarial sciences.",
        },
        dimension: "HoYoverse",
        hp: 8000,
        class: "legendary",
        max_lvl: 40,
        types: {
            have: ["Galaktyka", "Ogień"],
            strong: {
                def: 3000,
                ind: ["Duchoznactwo", "Informatyka", "Ziemia"],
            },
            weak: {
                def: 3000,
                ind: ["Trucizna", "Chi", "Woda"],
            },
        },
        level_up: {
            hp: 1.5,
            battle: [2, 3],
            types: {
                strong: -5,
                weak: 10,
            },
            cost: "700+70*{lvl}",
        },
        sp: {
            name: {
                pl: "Osiągalny Zysk!",
                en: "Turn a Profit!",
            },
            description: {
                pl: `{{charaName.numby}} wchodzi w stan o nazwie <i>Windfall Bonanza!</i>, który powoduje zwiększenie ataków o procent zależny od poziomu (od 11/50% do 40/118%) oraz zwiększa podwójnie szansę na krytyczny cios u przeciwnika. Po zakończeniu tego stanu (po pięciu ruchach) ataki wracają prawie do normy, lecz krytyczny cios zostaje. Jeżeli przeciwnik ma moc Metal lub Informatyka, zostaje też wtedy atakowany.`,
                en: `{{charaName.numby}} enters a state called <i>Windfall Bonanza!</i> which increases attacks by a percentage depending on the level (from 11/50% to 40/118%) and doubles the chance of a critical blow to the opponent. When this condition ends (after five moves), attacks return almost to normal, but the critical blow remains. If the opponent has Metallic or IT power, he is also attacked at that time.`,
            },
            maxUses: 1,
        },
        tags: ["btpwa", "double"],
    },
}

/**
 * Co oznaczają tagi
 * {{charaName.<nazwaPostaci>}} - daje kolorową nazwę postaci (lub pogrubioną, jeżeli nie zindeksuje)
 * {{charaName.<nazwaPostaci>|<wyświetlanaNazwa>}} - to samo co tag wyżej, ale zamiast <nazwaPostaci> masz <wyświetlanaNazwa>
 * {{desc.db.<klucz>}} - klucz z bazy danych (zarządzanej przez "serwer"; już nie funkcjonuje, jak narazie)
 */

export function getCharaList() {
    var cl = charaList
    Object.keys(charaList).forEach((key) => {
        cl[key].image = "https://patyczakus.github.io/starcie-internetu/others/imgs/characters/" + key + ".png" // automatically added images
    })

    return cl
}
