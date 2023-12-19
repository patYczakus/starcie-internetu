export const charaList = {
    // Starcie Internetu
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
        ],
        description: {
            pl: "Pierwotny wzór postaci; robot zaprogramowany do walki między innymi spoza własnego wymiaru. Piła pozwala unicestwić konającego, ognisty żar w kuli - spalić na popiół, a jego kable - ogłuszyć przeciwnika.",
            en: "The original character design; a robot programmed to fight among others from outside its own dimension. The saw allows it to annihilate the moribund, the fiery embers in the sphere to burn to ashes and its cables to stun the opponent.",
        },
        class: "common",
        dimension: "Starcie internetu",
        hp: 10010,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1047920069646233671/sketch-1669913931505.png",
        level_up: {
            battle: [1.5, 2, 2.7],
            hp: 2.2,
            types: {
                strong: 100,
                weak: 50,
            },
        },
        max_lvl: 22,
        types: {
            have: ["Metal", "Ogień", "Informatyka", "Elektryczność"],
            strong: {
                def: 3500,
                ind: ["Powietrze", "Chi"],
            },
            weak: {
                def: 2000,
                ind: ["Woda", "Lód", "Informatyka"],
            },
        },
        sp: {
            name: {
                pl: "Zmień tryb na...",
                en: "Change mode to...",
            },
            description: {
                pl: "Dzięki luźnym kablom, habby potrafi przekształcić miejsce zarezerwowane dla HP miejscem na ataki.",
                en: "With loose cables, habby is able to transform the space reserved for HP into a place for attacks.",
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
                points: 50,
            },
        ],
        description: {
            pl: "„Internet, honor, wymiar” - to są jego słowa wypowiedziane podczas każdej bitwy. Wychowany został w rycerskich warunkach i w szkole czarów. Jest jednością z oceanami. Może i nie wygląda na towarzyskiego, ale jest przyjacielem dla całego jego wymiaru.",
            en: "„Internet, honour, dimension” - these are his words spoken during every battle. He was brought up in chivalrous conditions and in a school of witchcraft. He is one with the oceans. He may not look sociable, but he is a friend to his entire dimension.",
        },
        class: "common",
        dimension: "Starcie internetu",
        hp: 8000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1059455609642164304/sketch-1672645955461.png",
        level_up: {
            battle: [1.8, 2.2],
            hp: 2,
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
                pl: "Nie po to rycerzOceanu ukończył najlepszą szkołę magii, aby nie używać czarów! Tworzy sobie specjalną osłonę redukującą szansę na krytyczny cios o 15%, zwiększa swoje HP o 17% oraz losowy atak o 20%.",
                en: "This is not why rycerzOceanu graduated from the best school of magic not to use spells! He creates a special shield for himself that reduces the chance of a critical blow by 15%, increases his HP by 17% and his random attack by 20%.",
            },
            maxUses: 1,
        },
        tags: [],
    },
    glalirthor: {
        class: "uncommon",
        description: {
            pl: "Pierwszy elf w Starciu Internetu. Od urodzenia próbował uciekać od obowiązków i balować. Dla podwyższenia swojego ego nauczył się panowania galaktyką.",
            en: "The first elf in Starcie Internetu. Since birth, he has tried to escape his responsibilities and balk. To boost his ego, he learned to rule the galaxy.",
        },
        dimension: "Starcie internetu",
        hp: 4500,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1116783655734480997/sketch-1686332349213.png",
        battle: [
            {
                name: { pl: "Nożyk", en: "Knife" },
                points: 2,
            },
            {
                name: { pl: "Galaktyczna piła", en: "Galaxy saw" },
                points: 95,
            },
        ],
        level_up: {
            hp: 2.8,
            types: {
                strong: 75,
            },
            battle: [2, 3.5],
        },
        max_lvl: 20,
        types: {
            have: ["Galaktyka"],
            weak: {
                def: 3000,
                ind: ["Ogień", "Powietrze", "Informatyka", "Elektryczność", "Trucizna"],
            },
        },
        sp: {
            name: {
                pl: "Galaktyczny kryształ życia",
                en: "Galaxy crystal of live",
            },
            description: {
                pl: "glalirthor tworzy pokazowy kryształ, co powoduje zwiększenie ataków o 110%.",
                en: "glalirthor creates a show crystal, resulting in an 110% increase in attacks.",
            },
            maxUses: 1,
        },
        tags: ["double"],
    },
    trajom: {
        class: "legendary",
        description: {
            pl: "Wyglądające jak słodkie lewitujące zwierzątko z pikselowymi rączkami potrafi rozpętać istne wirusowe piekło. Mały, ale zabójczy. Nie trwały, a silny. Wyglądający na najsłabszego, w rzeczywistości - potężny.",
            en: "Looking like a cute levitating animal with pixelated hands can unleash a veritable viral inferno. Small, but deadly. Not durable, but strong. Looking the weakest, in reality - powerful.",
        },
        dimension: "Starcie internetu",
        hp: 10000,
        image: "https://cdn.discordapp.com/attachments/1048341996533731359/1050498063338328114/sketch-1670528511856.png",
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
            hp: 3.15,
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
                pl: "trajom, w sytuacji zagrożenia, atakuje trzy razy pięścią, po czym resetuje swoje informacje zredukowanej do połowy poziomu. Dodatkowo posiada 30 BTP po resecie.",
                en: "trajom, in a threatening situation, attacks three times with his fist, after which he resets his information reduced to half a level. Additionally, it has 30 BTP after the reset.",
            },
            maxUses: 1,
        },
        tags: [],
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
        hp: 9500,
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1066320173931442186/aatbio_com_image_export_Jan_21_2023_2.png",
        level_up: {
            hp: 2,
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
                pl: "kira „zabiera” zdrowie dla przeciwnika i nadaje sobie za pomocą uderzenia.",
                en: "the kira „takes away” the health for the opponent and imparts to itself with a strike.",
            },
            maxUses: 10,
        },
        tags: [],
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
        hp: 7500,
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
        image: "https://cdn.discordapp.com/attachments/1177876489421738014/1177880327587369010/sketch-1700898905906.png?ex=6586928a&is=65741d8a&hm=3cc7efbe29dd42711063e34604fdf61ea937dcf66db9b06dfed2dba234bfff49&",
        level_up: {
            hp: 2.1,
            battle: [2.366, 3.5],
            types: {
                strong: -100,
                weak: 50,
            },
        },
        sp: {
            name: "haker1000@stin:~$ cp ../$ENEMY/sp ._",
            description: {
                pl: "haker1000 kopiuje te same SP co przeciwnik, ograniczone do jednego ruchu.",
                en: "hacker1000 copies the same Star Power as the opponent, limited to one move.",
            },
            maxUses: 1,
        },
        tags: ["btpwa"],
    },

    // Rocket League
    sylwestrowyOctane: {
        battle: [
            {
                name: { pl: "Taran", en: "Ram" },
                points: 4,
            },
            {
                name: { pl: "Taran + nitro", en: "Ram with nitro" },
                points: 20,
            },
            { name: "Dash", points: 72 },
            {
                name: { pl: "Naddźwiękowy dash", en: "Supersonic dash" },
                points: 120,
            },
        ],
        description: {
            pl: "Ta postać jest najbardziej imprezową postacią w grze. Ryzykowanie? To jego natura. Nie zna strachu, więc często szuka zaczepki i powoduje walki.",
            en: "This character is the most party character in the game. Taking risks? That's his nature. He doesn't know fear, so he often looks for a hook and causes fights.",
        },
        class: "epic",
        dimension: "Rocket League",
        hp: 9000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870111731813/IMG_20221217_162158.png",
        level_up: {
            battle: [2, 2.5, 3, 4],
            hp: 3,
            types: {
                strong: 200,
            },
        },
        max_lvl: 16,
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
                pl: "Tak, nazwa mówi sama za siebie. sylwestrowyOctane już wsiąknął niekoniecznie legalne środki odurzające, i pokazuje, na co jego stać. Atak inny niż wszystkie, zadaje naprawdę dużo, ale właśnie - skoro już wsiąknął, to niekoniecznie musi trafić. Szansa na trafienie wynosi 40% i albo uderzy w przeciwnika, albo sam oberwie tym atakiem (25% wartości ataku).",
                en: "The Polish SP name does not mean something specific to a foreigner, but when translated it already gives food for thought. sylwestrowyOctane has already soaked up the not necessarily legal drugs, and is showing what he can do. An attack unlike any other, it inflicts a really big amount, but precisely - since it has already soaked in, it doesn't necessarily hit. The chance of hitting is 40%, and he will either hit his opponent or get hit himself with this attack (25% of the attack value).",
            },
            maxUses: 3,
        },
        tags: [],
    },
    platynowyDominus: {
        battle: [
            { name: "Dash", points: 5 },
            {
                name: { pl: "Atak z powietrza", en: "Attack from the sky" },
                points: 55,
            },
            {
                name: { pl: "Pocisk naprowadzany", en: "Heatseeker" },
                points: 130,
            },
        ],
        description: {
            pl: "Można zaryzykować stwierdzeniem, że jest jednym z „mędrców” Internetu. Umie planować w trakcie walki, a co za tym idzie, wygrywa także większość rozegranych bitew. Nieugięty, silny i obdarzony Pociskiem Naprowadzanym. Uważaj, jeśli go napotkasz!",
            en: "One could venture to say that he is one of the 'sages' of the Internet. He knows how to plan during a battle and consequently also wins most of the battles he plays. Relentless, strong and gifted with a Heatseeker. Watch out if you encounter him!",
        },
        class: "import",
        dimension: "Rocket League",
        hp: 10000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870476628089/IMG_20221217_162215.png",
        level_up: {
            battle: [1.9, 3.3, 4.1],
            hp: 3.43,
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
                pl: "Jak to wkurza diamentowegoDominusa, gdy ktoś poniża lepszego gracza wymienionym tekstem („What a save!”). Zwiększa każdy atak o 10%, ogranicza zadanie crita do 0 i zwiększa przeciwnikowi crita o 25%",
                en: "How it annoys diamentowyDominus when someone humiliates a better player with the text „What a save!”. Increases each attack by 10%, limits the crit task to 0 and increases the opponent's crit by 25%",
            },
            maxUses: 1,
        },
        tags: [],
    },
    zimowyHotshot: {
        battle: [
            {
                name: { pl: "Kolce", en: "Spikes" },
                points: 5,
            },
            {
                name: { pl: "Mróz", en: "Frost" },
                points: 12,
            },
            { name: "Power Hitter", points: 30 },
        ],
        description: {
            pl: "Pojazd, który bardzo lubi zimno; wychowywany w lodowisku. Obdarzony trzema mocami z Rumble. Na pewno polega na szczęściu i potrafi wygrać walkę.",
            en: "A vehicle that is very fond of the cold; raised in an ice rink. Endowed with three powers from Rumble. Definitely relies on luck and can win fights.",
        },
        class: "rare",
        dimension: "Rocket League",
        hp: 7000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870875091035/IMG_20221217_162240.png",
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
                pl: "zimowyHotshot atakuje rozpędzonym krążkiem hokejowym. Może i nie zadaje dużo, ale jest darmowy!",
                en: "zimowyHotshot attacks with a rushing hockey puck. It may not inflict much, but it's free!",
            },
            maxUses: 7,
        },
        tags: [],
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
            pl: "<i>nikolixia -<br />Zmienia się jak internet:<br />Śmieje się i płacze...</i><br />Pierwsza bogini w swoim wymiarze. Gorąca i troskliwa dla przyjaciół w jej wymiarze, zimna i bezwzględna dla swoich wrogów. Jest ciekawa świata internetowego i lubi eksperymentować z różnymi możliwościami. Ma też unikalne poczucie humoru, co powoduje dla swoich przyjaciół ukazywanie swojej niewinności.",
            en: "<i>Friends from her dimension<br />nikolixia protects them;<br />She gives no chance to foes!</i><br />The first goddess in her dimension. Warm and caring to friends in her dimension, cold and ruthless to her enemies. She is curious about the online world and likes to experiment with different possibilities. She also has a unique sense of humour, which causes her friends to show their harmlessness.",
        },
        dimension: "Stick'y-land",
        hp: 20000,
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
        image: "https://cdn.discordapp.com/attachments/1177876489421738014/1177880326958219264/sketch-1700898906294.png?ex=65741d89&is=6561a889&hm=510ccd0816b505e1c71acb5b2f0ff478285a46ce4b91a6a00c5dbfed20f47be5&", // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        level_up: {
            hp: 3.1203,
            battle: [1.8, 2.5, 4],
            types: {
                strong: -20,
                weak: -200,
            },
            cost: "10000",
        },
        sp: {
            name: {
                pl: "Potępienie",
                en: "Doom",
            },
            description: {
                pl: "<i>Potępienie - dar:<br />nikolixia nim włada.<br />Cztery stany ma!</i><br />nikolixia posiada cztery stany potępienia, z czego każdy staje się silniejszy:<br />1. Przez 20 ruchów „zabiera” HP przeciwnikowi;<br />2. Zwiększa swoje ataki o 20%;<br />3. Używa „pierścienia niebiańskiego”, zwiększając szansę krytycznego ciosu przeciwnika o 50%;<br />4. Przestaje już być tą troskliwą boginią i się zamienia w piekielne trudnego szatana. Zwiększa swoje ataki o 50% i szansa krytycznego ciosu u niej spada do całkowitego zera, a przeciwnikowi do 100%, ale jej HP zwykłe, jak i maksymalne spadają aż do 50%!",
                en: "<i>Nikolixia - god.<br />Kind to friends, cruel to foes;<br />Doom is her power.</i><br />nikolixia has four states of condemnation, each of which becomes stronger:<br />1. for 20 moves, „takes away” HP from the opponent;<br />2. increases its attacks by 20%;<br />3. she uses the „celestial ring”, causing her opponent's critical strike chance to increase by 75%;<br />4. stops being that caring goddess anymore and turns into a hellishly difficult fiend. She increases her attacks by 50% and her opponent's critical strike chance drops to completely zero, and her opponent's to 100%, but her normal HP as well as her maximum HP drops by up to 50%!",
            },
            maxUses: 4,
        },
        tags: ["sochr", "atkback"],
    },
    theChosenOne: {
        battle: [
            {
                name: { pl: "Silne uderzenie", en: "Powerful punch" },
                points: 0,
            },
            {
                name: { pl: "Atak lodu", en: "Ice attack" },
                points: 5,
            },
            {
                name: { pl: "Atak ognia", en: "Fire attack" },
                points: 6,
            },
            {
                name: "ShOcK",
                points: 15,
            },
            {
                name: { pl: "Laser" },
                points: 20,
            },
            {
                name: { pl: "Armagedon" },
                points: 100,
            },
        ],
        description: {
            pl: "To ten Stickman, który zaatakował swojego twórcę - noogai3. Posiada niewyobrażalnie dużo mocy typu tornado, teleportacja, ogień, laser w oczach… czyli naprawdę postać postać dość porównywalna do boga.",
            en: "This is the Stickman who attacked his creator - noogai3. He has unimaginable powers like tornado, teleportation, fire, laser in his eyes... which is really a character quite comparable to a god.",
        },
        dimension: "Stick'y-land",
        hp: 15050,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: ["Ogień", "Woda", "Ziemia", "Powietrze", "Informatyka", "Elektryczność", "Lód"],
            weak: {
                def: 4000,
                ind: ["Chi", "Galaktyka", "Duchoznactwo"],
            },
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1057697621159968858/The_Chosen_One1.png",
        level_up: {
            hp: 4.5,
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
                pl: "Aby wyeliminować finalnie przeciwnika, theChosenOne łamie zasady Starcia Internetu, i atakuje przeciwnika losowymi atakami (poza Armagedonem) aż 20 razy, bez utraty BTP!",
                en: "To eliminate the final opponent, theChosenOne breaks the rules of Starcie Internetu, and attacks the opponent with random attacks (except Armagedon) as many as 20 times, without losing his BTP!",
            },
            maxUses: 1,
        },
        tags: [],
    },
    theDarkLord: {
        battle: [
            {
                name: { pl: "Noga", en: "Leg" },
                points: 0,
            },
            {
                name: { pl: "Odrzut powietrzny", en: "Air knockback" },
                points: 10,
            },
            { name: "Vira-Blade", points: 45 },
        ],
        description: {
            pl: "Ten stickman też ujawniający się z osobą noogai3 stał się czarnym charakterem z powodu, że jego twórca go olał w walce przeciwko theChosenOne grając w Pasjansa. Finalnie został wyeliminowany przez theSecondComing. Jądro Internetu postanowiło go przywrócić do żywych z takim samym charakterem, choć pod pewnymi warunkami. Na początku dochodziło do spięć ze stron theChosenOne i theSecondComing, ale po pewnym czasie to złagodzono i stał się pełnoprawnym stickmanem w tym wymiarze.",
            en: "This stickman also revealing himself with the person of noogai3 became a villain due to his creator pouncing on him in a fight against theChosenOne playing Solitaire. He was eventually eliminated by theSecondComing. Internet nucleus decided to bring him back to life with the same character, albeit with certain conditions. In the beginning there were disputes on the part of theChosenOne and theSecondComing, but after a while this was mitigated and he became a full-fledged stickman in this dimension.",
        },
        class: "dark_shop",
        dimension: "Stick'y-land",
        hp: 12000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1120025997337694228/The_Dark_Lord1.png",
        level_up: {
            battle: [2, 3, 4],
            hp: 4.75,
            types: {
                strong: 0,
                weak: 100,
            },
        },
        max_lvl: 10,
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
                pl: "theDarkLord też był związany ze stworzeniem wirusa. Dzięki takiej hordzie wykonuje serię ataków przez 3 sekundy, 15 co sekundę.",
                en: "TheDarkLord was also associated with the creation of the virus. With a horde like this, it performs a series of attacks for 3 seconds, 15 every second.",
            },
            maxUses: 1,
        },
        tags: ["atkback"],
    },
    theSecondComing: {
        battle: [
            {
                name: { pl: "Pięść", en: "Fist" },
                points: 0,
            },
            {
                name: { pl: "Noga", en: "Leg" },
                points: 5,
            },
            {
                name: { pl: "Miecz z diamentów (Minecraft)", en: "Diamond sword (Minecraft)" },
                points: 15,
            },
            { name: "Creative mode (Minecraft)", points: 35 },
            { name: "Awakened", points: 100 },
        ],
        description: {
            pl: "Druga wersja theChosenOne; też związany z atakiem na noogai3, ale nie spowodował krytycznych szkód. Ma nietypowy styl walki; posiada możliwość użycia „ostatecznej siły”, co pokazuje jego potęgę w walce.",
            en: "Second version of theChosenOne; also involved in an attack on noogai3, but did not cause critical damage. He has an unusual fighting style; he has the ability to use „ultimate force”, which shows his power in combat.",
        },
        class: "dark_shop",
        dimension: "Stick'y-land",
        hp: 15000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1057697620467920906/Tsc__1.png",
        level_up: {
            battle: [2.7, 3.3, 3.3, 4.5, 4.5],
            hp: 4.3,
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
                pl: "Gdyby porównać theSecongComing do najszybszego komputera świata, to jest najpotężniejszy w szybkości wykonywania kodu. Także dzięki tej możliwości tworzy tymczasowe własne jądro (o wiele wiele słabsze od głównego) oraz z jego mocą uderza atakiem o potężnej wartości.",
                en: "If one were to compare theSecongComing to the world's fastest computer, it is the most powerful in the speed of code execution. Also due to this ability, it creates a temporary kernel of its own (much much weaker than the main one) and with its power it hits with an attack of powerful value.",
            },
            maxUses: 1,
        },
        tags: [],
    },
    havier: {
        battle: [
            {
                atk: 50,
                name: { pl: "Strzał prochem", en: "Gunpowder shot" },
                points: 6,
            },
            {
                atk: 120,
                name: { pl: "Żar ognisty", en: "Fiery embers" },
                points: 30,
            },
        ],
        description: {
            pl: "Postać, gdzie jego składnikiem jest proch. Strzela prochem, porusza się prochem… więc gdy potrzebujesz „trochę” wybuchów, on jest w tym najlepszy!",
            en: "A character where his ingredient is gunpowder. He shoots gunpowder, he moves with gunpowder... so when you need „some” explosions, he's the best at it!",
        },
        dimension: "Stick'y-land",
        hp: 8000,
        class: "epic",
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1067367738718290010/sketch-1674550680441.png",
        level_up: {
            hp: 3.6,
            battle: [2.6, 3.2],
            types: {
                strong: 150,
                weak: 200,
            },
        },
        sp: {
            name: "Porwanie ochrony",
            description: {
                pl: "havier torturuje przeciwnika w taki sposób, że jego podatność na krytyczny cios jest równa 40%.",
                en: "havier tortures his opponent in such a way that his susceptibility to a critical blow is equal to 40%.",
            },
            maxUses: 1,
        },
        tags: [],
    },
    paty: {
        battle: [
            {
                name: { pl: "Pięść", en: "Fist" },
                points: 0,
            },
            {
                name: { pl: "Atak obrotowy", en: "Rotational attack" },
                points: 10,
            },
            { name: "ShOcK", points: 30 },
            {
                name: { pl: "Piorunowy dash", en: "Thunderbolt dash" },
                points: 75,
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1067367738936401920/sketch-1674550680025.png",
        level_up: {
            hp: 5.93,
            battle: [1.9, 2.4, 3.2, 3.447],
            types: {
                weak: 0,
            },
        },
        sp: {
            name: "Lightnin'gedon",
            description: {
                pl: "W końcu trzeba wykończyć przeciwnika! paty wykonuje masę dashów z ostatecznym ruchem zwanym <i>Piorunowy laser śmierci</i>. Traci też 30% posiadanego HP.",
                en: "Finally, the opponent must be finished! Paty performs a ton of dashing with the ultimate move called <i>Lightning laser of death</i>. He also loses 30% of his HP.",
            },
            maxUses: 1,
        },
        tags: ["toks"],
    },
    chromo: {
        battle: [
            {
                name: { pl: "Dalekobieżny atak ramion", en: "Long-distance arm attack" },
                points: 1,
            },
            {
                name: { pl: "Odrzut", en: "Knockback" },
                points: 8,
            },
            {
                name: { pl: "Fale telepatyczne", en: "Telepathic waves" },
                points: 20,
            },
            {
                name: { pl: "Potrójny atak", en: "Tripple attack" },
                points: 65,
            },
        ],
        class: "epic",
        dimension: "Stick'y-land",
        description: {
            pl: "Pierwsza postać adaptacyjna do tła. Posiada ataki telepatyczne, może dodatkowo atakować zarówno powietrzem jak i trucizną. Dzięki niebieskiemu i czerwonemu chromowi może uderzać z daleka. Uwielbia nowe znajomości, lecz nie zapomina o tym, że trzeba walczyć w tym kącie Internetu.",
            en: "The first character to adapt to the background. Has telepathic attacks, can additionally attack with both air and poison. Thanks to her blue and red chrome, she can strike from a distance. She loves new friendships, but doesn't forget to fight in this corner of the Internet.",
        },
        max_lvl: 16,
        hp: 7500,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1095259942119800882/sketch-1681199825931.png",
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
            hp: 3.1,
            types: { strong: 300, weak: 110 },
        },
        sp: {
            name: {
                pl: "Sieci type-X",
                en: "Networks type-X",
            },
            description: {
                pl: "chromo ukazuje nową generację sieci! Oczywiście do wyniszczenia postaci... Zwiększa ataki niemiłosiernie o 75% i po sekundzie atakuje Falą telepatyczną.",
                en: "chromo reveals a new generation of networks! Obviously to the destruction of the character... Increases attacks mercilessly by 75% and attacks with a attack called „Fale Telepatyczne” after a second.",
            },
            maxUses: 2,
        },
        tags: [],
    },
    twinz: {
        battle: [
            {
                name: { pl: "B: Kopnięcie z półobrotu", en: "B: Half-turn kick" },
                points: 0,
            },
            {
                name: { pl: "O: Atak trzech pierścieni", en: "O: Three ring attack" },
                points: 5,
            },
            {
                name: { pl: "O: Galaktyczne pęknięcia", en: "O: Galactic cracks" },
                points: 45,
            },
            {
                name: { pl: "B: Ognista kula", en: "B: Fireball" },
                points: 55,
            },
            { name: "O: dmg()", points: 100 },
            {
                name: { pl: "B: Wodne tsunami", en: "B: Aqua tsunami" },
                points: 120,
            },
        ],
        description: {
            pl: "Dwie osobowości uwięzione w jednym charakterze. Jeden z nich, blueTwinzer, ma opanowane Ogień i Wodę, a drugi, orangeTwinzer - Informatykę i Galaktykę. Nie znoszą jednak jednej mocy - Chi. To ona powoduje, że osobowości się rujnują.",
            en: "Two personalities trapped in one character. One, the blueTwinzer, has Fire and Water mastered, and the other, the orangeTwinzer, IT and Galaxy. However, they can't stand one power - Chi. It is she who causes the personalities to ruin each other.",
        },
        dimension: "Stick'y-land",
        hp: 13000,
        class: "import",
        max_lvl: 12,
        types: {
            have: ["Informatyka", "Galaktyka", "Ogień", "Woda"],
            weak: {
                def: 10000,
                ind: ["Chi"],
            },
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1116783654602014790/sketch-1686332309796.png",
        level_up: {
            hp: 4.2,
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
                pl: "Oba osobowości dzielą się, aby zaatakaować przeciwnika. Szansa na uderzenie od blueTwinzera wynosi 40%, a od orangeTwinzera - <sup>5</sup>/<sub>12</sub>.",
                en: "Both personalities split to attack the opponent. The chance of a hit from a blueTwinzer is 40% and from an orangeTwinzer is <sup>5</sup>/<sub>12</sub>.",
            },
            maxUses: 7,
        },
        tags: [],
    },
    szymekDymek: {
        battle: [
            {
                name: { pl: "Widły", en: "Pitchforks" },
                points: 10,
            },
            {
                name: { pl: "Grabież", en: "Plunder" },
                points: 20,
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
        hp: 8800,
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
        image: "https://cdn.discordapp.com/attachments/1177876489421738014/1177880327289589831/sketch-1700898905341.png?ex=65741d89&is=6561a889&hm=b392ce985d244fbe4408e6d0611ca1ee6c7be438bef7613875fc4bbae2eb47d8&",
        level_up: {
            hp: 2.55,
            battle: [2.05, 2.8, 3.35],
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
                pl: "Przez całą rundę ciągnik szymkaDymka powoduje regenerację oraz dodatkowe BTP. Zwiększa także atak <i>Ciągnikowy ruch</i> o 20%.",
                en: "Throughout the entire round, the szymekDymek's tractor causes regeneration and additional BTP. It also increases <i>Tractor load</i> attack by 20%.",
            },
            maxUses: 1,
        },
        tags: [],
    },
    młody: {
        battle: [
            {
                name: { pl: "Rzut kartą", en: "Card throw" },
                points: 1,
            },
            {
                name: { pl: "Shotgun pełen płonących żetonów", en: "Shotgun full of burning tokens" },
                points: 50,
            },
        ],
        description: {
            pl: "Pierwszy Stickman z wyglądem zwierzęcym, dodatkowo jako płeć żeńska. Cicha, introwertyczna i zamknięta w sobie. Lubi dobre bity muzyczne, ale też dobrą zabawę. Też jest zwierzęciem nikolixii, bogini Stickmanów - ma obsesję na punkcie kotów, i traktuje je jak swoje (troska, głaskanie - tego typu sprawy).",
            en: "The first Stickman with an animal appearance. In addition, as a female gender. Quiet, introverted and closed-minded. She likes good music beats, but also a good time. She's also a pet of Nicolixia, the goddess of Stickman - she's obsessed with cats, and treats them as her own (care, patting - that sort of thing).",
        },
        dimension: "Stick'y-land",
        hp: 7500,
        class: "epic",
        max_lvl: 16,
        types: {
            have: ["Ogień", "Chi"],
            weak: {
                def: 4000,
                ind: ["Powietrze", "Galaktyka"],
            },
        },
        image: "https://cdn.discordapp.com/attachments/1177876489421738014/1177880328149405786/sketch-1700898904766.png?ex=658fcd0a&is=657d580a&hm=1521c3f7cf2be8b7e49d79844ace11f1d3fa5e21d41f53e256d2129a0c37272f&",
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
                pl: "młody zaczyna robić ostre końce w kartach, tym samym zwiększając ataki o 8%. W drugim ruchu dodatkowo rzuca trzema płonącymi kartami - jest szansa, że mogą wcale nie uderzyć przeciwnika, a mogą uderzyć wszystkie trzy!",
                en: "młody starts making sharp ends in the cards, thus increasing the attacks by 8%. On his second move, he additionally throws three burning cards - there is a chance that they may not hit the opponent at all, and they may hit all three!",
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
                points: 10,
            },
            {
                name: { pl: "Uderzenie ogonem", en: "Fierce tail stroke" },
                points: 40,
            },
        ],
        description: {
            pl: "Pierwszy Stickman z wyglądem zwierzęcym, dodatkowo jako płeć żeńska. Cicha, introwertyczna i zamknięta w sobie. Lubi dobre bity muzyczne, ale też dobrą zabawę. Też jest zwierzęciem nikolixii, bogini Stickmanów - ma obsesję na punkcie kotów, i traktuje je jak swoje (troska, głaskanie - tego typu sprawy).",
            en: "The first Stickman with an animal appearance. In addition, as a female gender. Quiet, introverted and closed-minded. She likes good music beats, but also a good time. She's also a pet of Nicolixia, the goddess of Stickman - she's obsessed with cats, and treats them as her own (care, patting - that sort of thing).",
        },
        dimension: "Stick'y-land",
        hp: 6000,
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
        image: "https://cdn.discordapp.com/attachments/1177876489421738014/1177880327872598026/sketch-1700898904244.png?ex=6586928a&is=65741d8a&hm=6a270351a435531c0ed7fe8ddab737c01d981562a58d28ee2a3d1eea686f7aa8&",
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
                pl: "kremola atakuje podwójnie pazurami, i zyskuje w ten sposób kocią energię. Jeżeli nie wykorzysta energii przez trzy ruchy, energia ta jest przekształcana w BTP i HP (traci się też możliwość wykonania ponownie SP). W przeciwnym razie poprzez energię tworzy hordę kotów, gdzie każdy kot ma 10% szansy na danie wścieklizny - to powoduje też dodatkowe trzy ruchy trucizny. Maksymalnie może atakować 4 kotów na ruch.<br />[  Wścieklizna nie działa na snackowegoAdmina i kiranęYonome. ]",
                en: "kremola attacks twice with its claws, and gains feline energy in the process. If he does not use the energy for three moves, the energy is converted into BTP and HP (the ability to perform SP again is also lost). Otherwise, he creates a horde of cats through energy, where each cat has a 10% chance of giving rabies - this also causes an additional three moves of poison. He can attack a maximum of 4 cats per move.<br />[ Rabies does not work on snackowyAdmin and kiranaYonome. ]",
            },
            maxUses: 2,
        },
        tags: [],
    },
    botek: {
        battle: [
            {
                name: { pl: "Szybkie uderzenie", en: "Quick hit" },
                points: 0,
            },
            {
                name: { pl: "Dalekobieżna pięść", en: "Long-distance fist" },
                points: 3,
            },
            {
                name: { pl: "Piorunowa aura", en: "Thunderbolt aura" },
                points: 45,
            },
            {
                name: { pl: "Koścista artyleria", en: "Bony artillery" },
                points: 70,
            },
            {
                name: { pl: "Czachowy dash", en: "Skull dash" },
                points: 100,
            },
        ],
        description: {
            pl: "Jedyny w swoim rodzaju Polak i Anglik oraz dziwne połączenie kilku postaci. Potrafi korzystać z piorunów cienkich jak zaostrzone końce kart młodego i zimne jak lód theChosenOne. Jak paty, przebywanie samemu nie stanowi dla niego problemu, ale gdy nadejdzie okazja spotkania, od razu do niej dołącza.",
            en: "A unique Polish and British man and a strange combination of several characters. He can use lightning bolts as thin as the sharpened ends of a młody's cards and as cold as theChosenOne's ice. Like paty, being alone is not a problem for him, but when the opportunity to meet arrives, he immediately joins it.",
        },
        dimension: "Stick'y-land",
        hp: 13000,
        class: "import",
        max_lvl: 12,
        types: {
            have: ["Elektryczność", "Chi", "Galaktyka"],
            weak: {
                def: 3400,
                ind: ["Powietrze", "Metal"],
            },
        },
        image: "https://cdn.discordapp.com/attachments/1177876489421738014/1185653831325995008/sketch-1702752107595.png?ex=6590652d&is=657df02d&hm=cb29215a6e2cd2352eafe5e3b441df26e90abdd32f66f22dc6d033dfc49c1a00&",
        level_up: {
            hp: 5.87,
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
                pl: "Discord Nitro pozwala botekowi uleczyć się, zwiększyć ataki o 3% i dodać +10 BTP.",
                en: "Discord Nitro allows botek to heal itself, increase attacks by 3% and add +10 BTP.",
            },
            maxUses: 9,
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
            pl: "Chyba nie trzeba tłumaczyć każdemu, że pikachu to pokémon-mysz z umiejętnościami elektrycznymi. Dostał się tam jako jedna z ofiar jądra Internetu. Pierwszy przedstawiciel własnego wymiaru.",
            en: "It probably doesn't need to be explained to everyone that pikachu is a Pokémon-mouse with electrical abilities. It got there as one of the victims of the Internet core. The first representative of its own dimension.",
        },
        dimension: "Pokémon",
        hp: 8000,
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1067390387024576522/aatbio_com_image_export_Jan_24_2023.png",
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
                pl: "Jeżeli ktoś jest fanem Pokémonów, ten wie, że istnieją wspomagacze specjalne jak MegaEwolucja czy Ruch-Z. A co jeżeli powiem, że jądro Internetu nie pozwoliło na zewnętrzne wspomagacze, a nadał dla pikachu własny wspomagacz? Dzięki niemu ta mysz posiada podwojoną ilość maksymalnego HP (nie wpływa na posiadane) oraz o 25% zwiększone 2 losowe ataki (lub jeden o 56,25%).",
                en: "If anyone is a Pokémon fan, they know that there are special boosters like MegaEvolution or Movement-Z. But what if I said that the Internet kernel didn't allow external boosters, and gave Pikachu its own booster? With it, this mouse has double the maximum HP (does not affect his possession) and a 25% increase in 2 random attacks (or one of 56.25%).",
            },
            maxUses: 1,
        },
        tags: [],
    },
    lunatone: {
        battle: [
            {
                name: { pl: "Hipnozja", en: "Hypnosis" },
                points: 5,
            },
            { name: "Moonblast", points: 30 },
        ],
        description: {
            pl: "Rogalikowy Pokémon, stworzony z kamienia oraz posiadający moc Chi. Według Pokédexa, faza księżyca wpływa na jego moc. Aby pikachu nie czuł się samotny, nadano jemu przyjaciela w postaci niego. Był zadowolony!",
            en: "A horned Pokémon, created from stone and possessing the power of Chi. According to Pokédex, the phase of the moon affects its power. To make sure Pikachu didn't feel lonely, a friend was given in the form of him. He was happy!",
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1112680164887904336/R_3.png",
        level_up: {
            hp: 2.8,
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
                pl: "lunatone atakuje przeciwnika po sekundzie od użycia, jednocześnie zwiększając jego HP o 7% i ataki o 4%.",
                en: "lunatone attacks an opponent a second after use, while increasing their HP by 7% and attacks by 4%.",
            },
            maxUses: 5,
        },
        tags: [],
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
                points: 7,
            },
            { name: "> pixelsword", points: 20 },
            { name: "> byteblast", points: 110 },
        ],
        description: {
            pl: `Energiczna, pełna radości i pociech VTuberka, która zaczęła swoją działalność w sierpniu 2022 roku. Posiada aktualnie {desc.yk} obserwujących na Twitchu. Została poddana próbie stania się wojowniczką, jak narazie dobrze jej idzie...`,
            en: `An energetic, fun and cheerful VTuber who started her work in August 2022. She currently has {desc.yk} followers on Twitch. She has been challenged to become a fighter, so far she is doing well...`,
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1115728294076227705/aatbio_com_image_export_Jun_6_2023.png",
        level_up: {
            hp: 4,
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
                pl: "Dzięki zaaganżowaniu swoich fanów, kiranaYonome ich używa, aby zaatakować przeciwnika. Co każdu ruch wysyła 5 swoich fanów, aż jej się skończą...",
                en: "Thanks to the enagagement of her fans, kiranaYonome uses them to attack her opponent. Every move she sends 5 of her fans until she runs out of them...",
            },
            maxUses: 1,
        },
        tags: ["atkback"],
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
                points: 10,
            },
            {
                name: { pl: "Niebiańskie ognie z wydechu wyścigowego", en: "Heavenly fires from the racing exhaust" },
                points: 40,
            },
        ],
        description: {
            pl: "Dziewczyna dopiero rozpoczynająca swoją wielką przygodę po fanpage'u Super Snacki. Poza przekąskami uwielbia też motoryzację - nie bez powodu aureola wygląda jak wybuchy z wydechów po części. Jako że ta postać pochodzi z nieinternetowego wymiaru, trzeba było zrobić alternatywną wersję programistyczną. I zrobiono, bez twarzy oraz z rogami diabła i aureolą po części związanymi z ogniami z wydechów.",
            en: "A girl just starting out on her big adventure following the Super Snacki fanpage. As well as snacks, she also loves motoring - there's a reason why the halo looks like explosions from the exhaust after parts. As this character comes from a non-internet dimension, an alternative programming version had to be made. And it was done, without the face and with the devil's horns and halo partly related to the exhaust fires.",
        },
        dimension: "Gang Sokołów",
        hp: 5100,
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1119307614866657380/sketch-1686934121062.png",
        level_up: {
            hp: 2.75,
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
                pl: "Pierwsze użycie powoduje, że rozgrzewa do czerwoności wirtualny silnik samochodowy, czyli zwiększa wszystkie ataki o 25% i zmniejsza HP o 10%. Drugie użycie, kosztem zmniejszenia ataków do 80% ich wartości, już uruchamia reakcję łańcuchową i po 5 sekundach gabrysiaSotoła strzela 12 salamitkami, które płoną! Nie każda uderzy, ale spokojnie - przynajmniej jedna salamitka trafi.",
                en: "The first use heats up the virtual car engine, meaning it increases all attacks by 25% and reduces HP by 10%. The second use, at the cost of reducing attacks to 80% of their value, already sets off a chain reaction and after 5 seconds gabrysiaSotoła shoots 12 salamiters that are on fire! Not every one will hit, but rest assured - at least one salamite will hit.",
            },
            maxUses: 2,
        },
        tags: [],
    },
    snackowyAdmin: {
        battle: [
            {
                name: { pl: "Rzut memem", en: "Throwback meme" },
                points: 0,
            },
            {
                name: { pl: "Bombowy kabanos", en: "Bomb cabanas" },
                points: 5,
            },
            {
                name: { pl: "Kotołap", en: "<b>Cat</b>cher" },
                points: 65,
            },
        ],
        description: {
            pl: "Administrator fanpage'a Super Snacki - stronie poświęconej najlepszym przekąskom mięsnych (wg. konsumentów). Idol, jak i przyjaciel wszystkich osób z tego wymiaru. Poza kabanosami uwielbia też koty (oczywiście ich nie zjada). Jako że nie pozwolił na umieszczanie swego wizerunku, jądro Internetu postanowiło, że wizerunek zamieni na jednego z jego memów. Nie jest jakiś walczący, ale spróbuj go tylko wkurzyć, to oberwiesz mocno!",
            en: "Administrator of the fanpage Super Snacki - a page dedicated to the best meat snacks (according to consumers). An idol, as well as a friend of all the people in this dimension. In addition to cabanas, he also loves cats (he doesn't eat them, of course). As he did not allow his image to be posted, the core of the internet decided to turn the image into one of his memes. He's not some fighter, but just try to piss him off, you'll flop hard!",
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1123879023307657296/sketch-1687978196316.png",
        level_up: {
            hp: 3.1,
            battle: [2, 3.1, 3.9],
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
                pl: `Czemu ktoś zabroni zrobić przerwę, aby mógł sobie snackowyAdmin zjeść smacznie przekąskę? A nie wszyscy wiedzą, że każda przekąska ma swoje unikalne moce!<br />
                - kabanosy francuskie zwiększają wszystkie ataki o 8%.<br />
                - kabanosy polskie zwiększają losowy atak o 25%.<br />
                - czosnkowe Salami Chips powodują dodanie BTP.<br />
                - ketchupowe Salami Chips zwiększają losowy atak o 5% i leczą snackowegoAdmina.<br />
                - CHRUP 'US Salami Chips zmniejszają szansę krytycznego ciosu.<br />
                - Beef Jerky powodują, że jego maksymalne HP się zwiększa o 10%, i nie wpływa na posiadane.<br />
                - Mini Snacki działają jak apteczka - leczą snackowegoAdmina.<br />
                - Mix Snacków powodują zmniejszenie szansy krytycznego ciosu, zwiększenie wszystkich ataków o 5%, i zwiększenie maksymalnego HP o 3%.<br />
                - Wędlinka Sokołów zwiększa wszystkie ataki o 6%, maksymalne HP o 3%, ilość BTP i szansę krytycznego ciosu oraz powodują leczenie.<br />
                Przeszkodą dla niego jest paty - twierdzi, że takie przerwy nie są dozwolone, więc jeżeli to właśnie z nim jest toczona walka, od czasu do czasu nie pozwoli na kabanosy, tym samym go atakując.`,
                en: `Why forbid anyone from taking a break so they can snackowyAdmin a tasty snack? And not everyone knows that every snack has its own unique powers!<br />
                - French cabanas increase all attacks by 8%.<br />
                - Polish cabanas increase the random attack by 25%.<br />
                - Garlic Salami Chips cause BTP to be added.<br />
                - Ketchup Salami Chips increase the random attack by 5% and heal snackowyAdmin.<br />
                - CHRUP 'US Salami Chips reduce the chance of a critical blow.<br />
                - Beef Jerky causes his maximum HP to increase by 10%, and does not affect his possession.<br />
                - Mini Snacks act like a first-aid kit - they heal snackowyAdmin.<br />
                - Mixed Snacks cause a reduced chance of a critical blow, increase all attacks by 5%, and increase maximum HP by 3%.<br />
                - Sokołów's sausage increases all attacks by 6%, maximum HP by 3%, the amount of BTP and the chance of a critical blow, and causes healing.<br />
                The obstacle for him is paty - he claims that such interruptions are not allowed, so if it is him that the fight is with, he will occasionally not allow cabanas, thus attacking him.`,
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
            pl: "Postać z gry Genshin Impact. Wysoki i szczupły mężczyzna potrafi wojować kryształami i wielką profesjonalnie zrobioną włócznią. Jak wielu postaci, został porwany do tego miejsca. Do tej pory jemu się tu nie podoba, i stara się uciec z tej symulacji tak, żeby nikt się nie domyślał...",
            en: "A character from the Genshin Impact game. A tall and slender man, he can war with crystals and a large professionally made spear. Like many characters, he was taken to this place. So far he doesn't like it here, and is trying to escape this simulation so that no one will guess...",
        },
        dimension: "HoYoverse",
        hp: 8200,
        class: "legendary",
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
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1146059889332994078/Character_Zhongli_Game.png",
        level_up: {
            hp: 2.025,
            battle: [2, 2.3, 3.15],
            types: {
                strong: 0,
                weak: 110,
            },
            cost: "500+50*{lvl}",
        },
        sp: {
            name: "Mega Dominus Lapidis",
            description: {
                pl: `Każdy gracz Genshin Impact kojarzy skill Dominus Lapidis - zhongli dostał tutaj ulepszoną wersję. Dla przeciwnika zadaje obrażenia i tym samym ustawia minimalną szansę krytycznego ciosu na 35%; dla siebie przez 5 ruchów regeneruje siebie, wzmacnia ataki o 13.5%, i tymczasowo zmniejsza szansę krytycznego ciosu o połowę - po 5 ruchach powraca do stanu przed użyciem.`,
                en: `Every Genshin Impact player is familiar with the Dominus Lapidis skill - zhongli got an improved version here. For the opponent, it deals damage and thus sets the minimum critical strike chance to 35%; for himself, for 5 moves, he regenerates himself, strengthens attacks by 13.5%, and temporarily halves the critical strike chance - after 5 moves, he returns to his state before use.`,
            },
            maxUses: 1,
        },
        tags: [],
    },
}

/*
    sp: {
        name: "",
        description: { pl: "" }
        maxUses: 0,
        function: function() {}
    }
*/
