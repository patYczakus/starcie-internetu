export const charaList = {
    habby: {
        battle: [
            { atk: 20, name: "Piła", points: 0 },
            { atk: 75, name: "ShOcK", points: 30 },
            { atk: 160, name: "Ognista kula", points: 100 }
        ],
        description: {
            pl: "Pierwotny wzór postaci; robot zaprogramowany do walki między innymi spoza własnego wymiaru. Piła pozwala unicestwić konającego, ognisty żar w kuli - spalić na popiół, a jego kable - ogłuszyć przeciwnika.",
            en: "The original character design; a robot programmed to fight among others from outside its own dimension. The saw allows it to annihilate the moribund, the fiery embers in the sphere to burn to ashes and its cables to stun the opponent."  
        },
        class: "common",
        dimension: "Starcie internetu",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1047920069646233671/sketch-1669913931505.png",
        level_up: {
            battle: [ 1.5, 2, 2.7 ],
            hp: 2.2,
            types: {
                strong: 100,
                weak: 50
            }
        },
        max_lvl: 22,
        types: {
            have: [
                "Metal",
                "Ogień",
                "Informatyka",
                "Elektryczność"
            ],
            strong: {
                def: 3500,
                ind: [
                    "Powietrze",
                    "Chi"
                ]
            },
            weak: {
                def: 2000,
                ind: [
                    "Woda",
                    "Lód",
                    "Informatyka"
                ]
            }
        },
        sp: {
            name: "Zmień tryb na…",
            description: {
                pl: "Dzięki luźnym kablom, habby potrafi przekształcić miejsce zarezerwowane dla HP miejscem na ataki.",
                en: "With loose cables, habby is able to transform the space reserved for HP into a place for attacks."
            },
            maxUses: 4
        }
    },
    rycerzOceanu: {
        battle: [
            { atk: 30, name: "Zamach mieczem", points: 0 },
            { atk: 110, name: "Uderzenie falowe", points: 50 }
        ],
        description: {
            pl: "„Internet, honor, wymiar” - to są jego słowa wypowiedziane podczas każdej bitwy. Wychowany został w rycerskich warunkach i w szkole czarów. Jest jednością z oceanami. Może i nie wygląda na towarzyskiego, ale jest przyjacielem dla całego jego wymiaru.",
            en: "„Internet, honour, dimension” - these are his words spoken during every battle. He was brought up in chivalrous conditions and in a school of witchcraft. He is one with the oceans. He may not look sociable, but he is a friend to his entire dimension.",
        },
        class: "common",
        dimension: "Starcie internetu",
        hp: 800,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1059455609642164304/sketch-1672645955461.png",
        level_up: {
            battle: [ 1.8, 2.2 ],
            hp: 2,
            types: {
                strong: 80,
                weak: 40
            }
        },
        max_lvl: 22,
        types: {
            have: [
                "Chi",
                "Woda",
                "Metal"
            ],
            strong: {
                def: 2500,
                ind: [
                    "Ogień",
                    "Powietrze"
                ]
            },
            weak: {
                def: 3500,
                ind: [
                    "Lód",
                    "Trucizna",
                    "Duchoznactwo"
                ]
            },
        },
        sp: {
            name: "Człowiek z wody",
            description: {
                pl: "Nie po to rycerzOceanu ukończył najlepszą szkołę magii, aby nie używać czarów! Tworzy sobie specjalną osłonę redukującą szansę na krytyczny cios o 10%, zwiększa swoje HP o 7% oraz losowy atak o 15%.",
                en: "This is not why rycerzOceanu graduated from the best school of magic not to use spells! He creates a special shield for himself that reduces the chance of a critical blow by 10%, increases his HP by 7% and his random attack by 15%.",
            },
            maxUses: 1
        }
    },
    glalirthor: {
        class: "uncommon",
        description: {
            pl: "Pierwszy elf w Starciu Internetu. Od urodzenia próbował uciekać od obowiązków i balować. Dla podwyższenia swojego ego nauczył się panowania galaktyką.",
            en: "The first elf in Starcie Internetu. Since birth, he has tried to escape his responsibilities and balk. To boost his ego, he learned to rule the galaxy.",
        },
        dimension: "Starcie internetu",
        hp: 400,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1116783655734480997/sketch-1686332349213.png",
        battle: [
            { name: "Nożyk", atk: 40, points: 2 },
            { name: "Galaktyczna piła", atk: 250, points: 100 },
        ],
        level_up: {
            hp: 2.8,
            types: {
                strong: 75
            },
            battle: [ 2, 3.3 ]
        },
        max_lvl: 20,
        types: {
            have: [
                "Galaktyka"
            ],
            weak: {
                def: 3000,
                ind: [
                    "Ogień",
                    "Powietrze",
                    "Informatyka",
                    "Elektryczność",
                    "Trucizna",
                ]
            }
        },
        sp: {
            name: "Galaktyczny kryształ życia",
            description: {
                pl: "glalirthor tworzy pokazowy kryształ, co powoduje zwiększenie ataków o 80%.",
                en: "glalirthor creates a show crystal, resulting in an 80% increase in attacks.",
            },
            maxUses: 1
        }
    },
    trajom: {
        class: "legendary",
        description: {
            pl: "Wyglądające jak słodkie lewitujące zwierzątko z pikselowymi rączkami potrafi rozpętać istne wirusowe piekło. Mały, ale zabójczy. Nie trwały, a silny. Wyglądający na najsłabszego, w rzeczywistości - potężny.",
            en: "Looking like a cute levitating animal with pixelated hands can unleash a veritable viral inferno. Small, but deadly. Not durable, but strong. Looking the weakest, in reality - powerful.",
        },
        dimension: "Starcie internetu",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1048341996533731359/1050498063338328114/sketch-1670528511856.png",
        battle: [
            { name: "Ręka", atk: 25, points: 0 },
            { name: "Kula energetyczna", atk: 70, points: 35 },
            { name: "Czarna wyrwa", atk: 340, points: 70 },
            { name: "Type: kill", atk: 1100, points: 250 }
        ],
        level_up: {
            hp: 3.15,
            types: {
                weak: 50,
                strong: 100
            },
            battle: [ 2.3, 2.5, 2.8, 3.5 ]
        },
        max_lvl: 14,
        types: {
            have: [
                "Informatyka",
                "Elektryczność",
                "Galaktyka",
                "Duchoznactwo"
            ],
            strong: {
                def: 4000,
                ind: [
                    "Ogień",
                    "Powietrze"
                ]
            },
            weak: {
                def: 5000,
                ind: [
                    "Chi"
                ]
            }
        },
        sp: {
            name: "Drugie życie",
            description: {
                pl: "trajom, w sytuacji zagrożenia, atakuje trzy razy pięścią, po czym resetuje swoje informacje zredukowanej do połowy poziomu. Dodatkowo posiada 30 BTP po resecie.",
                en: "trajom, in a threatening situation, attacks three times with his fist, after which he resets his information reduced to half a level. Additionally, it has 30 BTP after the reset.",
            },
            maxUses: 1
        }
    },
    kira: {
        description: {
            pl: "Dziewica z nieznanego zakątku Internetu. Demoniczna i zarazem budząca strach. Potrafi zabić przeciwnika woskiem ze świeczki, czy poczuć bestialski ból na jego skórze.",
            en: "A virgin from an unknown corner of the Internet. Demonic and fear-inducing at the same time. Able to kill an opponent with wax from a candle, or feel bestial pain on his skin.",
        },
        battle: [
            { atk: 23, name: "Uderzenie", points: 0 },
            { atk: 65, name: "Rzut świeczką", points: 40 },
            { atk: 160, name: "Demoniczny atak", points: 95 }
        ],
        dimension: "Starcie internetu",
        hp: 950,
        class: "uncommon",
        max_lvl: 20,
        types: {
            have: [
                "Ogień",
                "Trucizna"
            ],
            strong: {
                def: 1200,
                ind: [
                    "Duchoznactwo"
                ]
            },
            weak: {
                def: 1200,
                ind: [
                    "Woda",
                    "Galaktyka",
                    "Ziemia",
                    "Powietrze"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1066320173931442186/aatbio_com_image_export_Jan_21_2023_2.png",
        level_up: {
            hp: 2,
            battle: [ 2.8, 3, 3.125 ],
            types: {
                strong: 55,
                weak: 50
            }
        },
        sp: {
            name: "Wampirzyca",
            description: {
                pl: "kira „zabiera” zdrowie dla przeciwnika i nadaje sobie za pomocą uderzenia.",
                en: "the kira „takes away” the health for the opponent and imparts to itself with a strike."
            },
            maxUses: 10
        }
    },
    sylwestrowyOctane: {
        battle: [
            { atk: 50, name: "Taran", points: 4 },
            { atk: 100, name: "Taran + nitro", points: 20 }, 
            { atk: 200, name: "Dash", points: 72 },
            { atk: 400, name: "Naddźwiękowy dash", points: 120 }
        ],
        description: {
            pl: "Ta postać jest najbardziej imprezową postacią w grze. Ryzykowanie? To jego natura. Nie zna strachu, więc często szuka zaczepki i powoduje walki.",
            en: "This character is the most party character in the game. Taking risks? That's his nature. He doesn't know fear, so he often looks for a hook and causes fights.",
        },
        class: "epic",
        dimension: "Rocket League",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870111731813/IMG_20221217_162158.png",
        level_up: {
            battle: [ 2, 2.5, 3, 4 ],
            hp: 3.5,
            types: {
                strong: 200
            }
        },
        max_lvl: 16,
        types: {
            have: [
                "Metal",
                "Informatyka"
            ],
            strong: {
                def: 2000,
                ind: [
                    "Powietrze",
                    "Woda"
                ]
            }
        },
        sp: {
            name: "«Pa tera!»",
            description: {
                pl: "Tak, nazwa mówi sama za siebie. sylwestrowyOctane już wsiąknął niekoniecznie legalne środki odurzające, i pokazuje, na co jego stać. Atak inny niż wszystkie, zadaje naprawdę dużo, ale właśnie - skoro już wsiąknął, to niekoniecznie musi trafić. Szansa na trafienie wynosi 40% i albo uderzy w przeciwnika, albo sam oberwie tym atakiem (25% wartości ataku).",
                pl: "The Polish name does not mean something specific to a foreigner, but when translated it already gives food for thought. sylwestrowyOctane has already soaked up the not necessarily legal drugs, and is showing what he can do. An attack unlike any other, it inflicts a really big amount, but precisely - since it has already soaked in, it doesn't necessarily hit. The chance of hitting is 40%, and he will either hit his opponent or get hit himself with this attack (25% of the attack value)."
            },
            maxUses: 3, 
            
        }
    },
    diamentowyDominus: {
        battle: [
            { atk: 50, name: "Dash", points: 5 },
            { atk: 120, name: "Atak z powietrza", points: 55 },
            { atk: 500, name: "Pocisk naprowadzany", points: 130 }
        ],
        description: {
            pl: "Można zaryzykować stwierdzeniem, że jest jednym z „mędrców” Internetu. Umie planować w trakcie walki, a co za tym idzie, wygrywa także większość rozegranych bitew. Nieugięty, silny i obdarzony Pociskiem Naprowadzanym. Uważaj, jeśli go napotkasz!",
            en: "One could venture to say that he is one of the 'sages' of the Internet. He knows how to plan during a battle and consequently also wins most of the battles he plays. Relentless, strong and gifted with a Guided Missile. Watch out if you encounter him!",
        },
        class: "import",
        dimension: "Rocket League",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870476628089/IMG_20221217_162215.png",
        level_up: {
            battle: [ 1.9, 3.3, 4.1 ],
            hp: 3.43,
            types: {
                strong: 200
            }
        },
        max_lvl: 12,
        types: {
            have: [
                "Metal",
                "Informatyka"
            ],
            strong: {
                def: 2000,
                ind: [
                    "Powietrze",
                    "Woda",
                    "Elektryczność"
                ]
            }
        },
        sp: {
            name: "«Podnieca cię „What a save!”?»",
            description: {
                pl: "Jak to wkurza diamentowegoDominusa, gdy ktoś poniża lepszego gracza wymienionym tekstem („What a save!”). Zwiększa każdy atak o 10%, ogranicza zadanie crita do 0 i zwiększa przeciwnikowi crita o 25%",
                en: "How it annoys diamentowyDominus when someone humiliates a better player with the text „What a save!”. Increases each attack by 10%, limits the crit task to 0 and increases the opponent's crit by 25%",
            },
            maxUses: 1, 
        }
    },
    zimowyHotshot: {
        battle: [
            { atk: 37, name: "Kolce", points: 5 },
            { atk: 100, name: "Mróz", points: 12 },
            { atk: 205, name: "Power Hitter", points: 30 },
        ],
        description: {
            pl: "Pojazd, który bardzo lubi zimno; wychowywany w lodowisku. Obdarzony trzema mocami z Rumble. Na pewno polega na szczęściu i potrafi wygrać walkę.",
            en: "A vehicle that is very fond of the cold; raised in an ice rink. Endowed with three powers from Rumble. Definitely relies on luck and can win fights.",
        },
        class: "rare",
        dimension: "Rocket League",
        hp: 700,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870875091035/IMG_20221217_162240.png",
        level_up: {
            battle: [ 2, 2.1, 2.4 ],
            hp: 2.25,
            types: {
                strong: 200,
                weak: 30
            }
        },
        max_lvl: 18,
        types: {
            have: [
                "Metal",
                "Informatyka",
                "Lód"
            ],
            strong: {
                def: 2000,
                ind: [
                    "Powietrze",
                    "Woda",
                    "Lód"
                ]
            },
            weak: {
                def: 3000,
                ind: [ "Ogień" ]
            }
        },
        sp: {
            name: "Atak krążkiem",
            description: {
                pl: "zimowyHotshot atakuje rozpędzonym krążkiem hokejowym. Może i nie zadaje dużo, ale jest darmowy!",
                en: "zimowyHotshot attacks with a rushing hockey puck. It may not inflict much, but it's free!",
            },
            maxUses: 7
        }
    },
    theChosenOne: {
        battle: [
            { atk: 23, name: "Silne uderzenie", points: 0 },
            { atk: 60, name: "Atak lodu", points: 5 },
            { atk: 75, name: "Atak ognia", points: 6 },
            { atk: 130, name: "ShOcK", points: 15 },
            { atk: 175, name: "Laser", points: 20 },
            { atk: 710, name: "Armagedon", points: 100 }
        ],
        description: {
            pl: "To ten Stickman, który zaatakował swojego twórcę - noogai3. Posiada niewyobrażalnie dużo mocy typu tornado, teleportacja, ogień, laser w oczach… czyli naprawdę postać postać dość porównywalna do boga.",
            en: "This is the Stickman who attacked his creator - noogai3. He has unimaginable powers like tornado, teleportation, fire, laser in his eyes... which is really a character quite comparable to a god.",
        },
        dimension: "Stick'y-land",
        hp: 1505,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: [
                "Ogień",
                "Woda",
                "Ziemia",
                "Powietrze",
                "Informatyka",
                "Elektryczność",
                "Lód"
            ],
            weak: {
                def: 4000,
                ind: [
                    "Chi",
                    "Galaktyka",
                    "Duchoznactwo"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1057697621159968858/The_Chosen_One1.png",
        level_up: {
            hp: 5.6,
            battle: [2.5, 2.5, 2.65, 3.2, 3.2, 4.2],
            types: {
                weak: 10
            }
        },
        sp: {
            name: "Seria niedozwolonych ataków",
            description: { 
                pl: "Aby wyeliminować finalnie przeciwnika, theChosenOne łamie zasady Starcia Internetu, i atakuje przeciwnika losowymi atakami (poza Armagedonem) aż 20 razy, bez utraty BTP!",
                en: "To eliminate the final opponent, theChosenOne breaks the rules of Starcie Internetu, and attacks the opponent with random attacks (except Armagedon) as many as 20 times, without losing his BTP!",
            }, 
            maxUses: 1
        }
    },
    theDarkLord: {
        battle: [
            { atk: 18, name: "Noga", points: 0 },
            { atk: 55, name: "Odrzut powietrzny", points: 10 },
            { atk: 160, name: "Vira-Blade", points: 45 },
        ],
        description: { 
            pl: "Ten stickman też ujawniający się z osobą noogai3 stał się czarnym charakterem z powodu, że jego twórca go olał w walce przeciwko theChosenOne grając w Pasjansa. Finalnie został wyeliminowany przez theSecondComing. Jądro Internetu postanowiło go przywrócić do żywych z takim samym charakterem, choć pod pewnymi warunkami. Na początku dochodziło do spięć ze stron theChosenOne i theSecondComing, ale po pewnym czasie to złagodzono i stał się pełnoprawnym stickmanem w tym wymiarze.",
            en: "This stickman also revealing himself with the person of noogai3 became a villain due to his creator pouncing on him in a fight against theChosenOne playing Solitaire. He was eventually eliminated by theSecondComing. Internet nucleus decided to bring him back to life with the same character, albeit with certain conditions. In the beginning there were disputes on the part of theChosenOne and theSecondComing, but after a while this was mitigated and he became a full-fledged stickman in this dimension."
        },
        class: "dark_shop",
        dimension: "Stick'y-land",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1120025997337694228/The_Dark_Lord1.png",
        level_up: {
            battle: [ 2, 3, 4 ],
            hp: 4.75,
            types: {
                strong: 0,
                weak: 100
            }
        },
        max_lvl: 10,
        types: {
            have: [
                "Informatyka",
                "Powietrze",
                "Elektryczność",
                "Ogień"
            ],
            strong: {
                def: 6000,
                ind: [
                    "Powietrze",
                    "Duchoznactwo",
                    "Ziemia",
                    "Chi"
                ]
            },
            weak: {
                def: 4000,
                ind: [
                    "Trucizna",
                    "Galaktyka"
                ]
            }
        },
        sp: {
            name: "ViraBots",
            description: { 
                pl: "theDarkLord też był związany ze stworzeniem wirusa. Dzięki takiej hordzie wykonuje serię ataków przez 3 sekundy, 15 co sekundę.",
                en: "TheDarkLord was also associated with the creation of the virus. With a horde like this, it performs a series of attacks for 3 seconds, 15 every second."
            },
            maxUses: 1, 
        }
    },
    theSecondComing: {
        battle: [
            { atk: 20, name: "Pięść", points: 0 },
            { atk: 45, name: "Noga", points: 5 },
            { atk: 70, name: "Miecz z diamentów (Minecraft)", points: 15 },
            { atk: 120, name: "Creative mode", points: 35 },
            { atk: 700, name: "Absolute god mode", points: 100 }
        ],
        description: { 
            pl: "Druga wersja theChosenOne; też związany z atakiem na noogai3, ale nie spowodował krytycznych szkód. Ma nietypowy styl walki; posiada możliwość użycia „ostatecznej siły”, co pokazuje jego potęgę w walce.",
            en: "Second version of theChosenOne; also involved in an attack on noogai3, but did not cause critical damage. He has an unusual fighting style; he has the ability to use „ultimate force”, which shows his power in combat."
        },
        class: "dark_shop",
        dimension: "Stick'y-land",
        hp: 1500,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1057697620467920906/Tsc__1.png",
        level_up: {
            battle: [ 2.7, 3.3, 3.3, 4.5, 4.5 ],
            hp: 5.3,
            types: {
                strong: 200,
                weak: 30
            }
        },
        max_lvl: 10,
        types: {
            have: [
                "Chi",
                "Ziemia",
                "Informatyka"
            ],
            strong: {
                def: 4000,
                ind: [
                    "Powietrze",
                    "Duchoznactwo"
                ]
            },
            weak: {
                def: 3000,
                ind: [
                    "Trucizna",
                    "Galaktyka"
                ]
            }
        },
        sp: {
            name: "«You need to die…»",
            description: { 
                pl: "Gdyby porównać theSecongComing do najszybszego komputera świata, to jest najpotężniejszy w szybkości wykonywania kodu. Także dzięki tej możliwości tworzy tymczasowe własne jądro (o wiele wiele wiele słabsze od głównego) oraz z jego mocą uderza atakiem o wartości 1700 (mnożnik x1.7)",
                en: "If one were to compare theSecongComing to the world's fastest computer, it is the most powerful in the speed of code execution. Also due to this ability, it creates a temporary kernel of its own (much much weaker than the main one) and with its power it hits with an attack of 1700 (multiplier x1.7)."
            },
            maxUses: 1, 
        }
    },
    havier: {
        battle: [
            { atk: 50, name: "Strzał prochem", points: 6 },
            { atk: 120, name: "Żar ognisty", points: 30 }
        ],
        description: { 
            pl: "Postać, gdzie jego składnikiem jest proch. Strzela prochem, porusza się prochem… więc gdy potrzebujesz „trochę” wybuchów, on jest w tym najlepszy!",
            en: "A character where his ingredient is gunpowder. He shoots gunpowder, he moves with gunpowder... so when you need „some” explosions, he's the best at it!",
        },
        dimension: "Stick'y-land",
        hp: 800,
        class: "epic",
        max_lvl: 16,
        types: {
            have: [
                "Ogień",
                "Ziemia"
            ],
            strong: {
                def: 2500,
                ind: [
                    "Metal",
                    "Duchoznactwo",
                    "Trucizna"
                ]
            },
            weak: {
                def: 3500,
                ind: [
                    "Informatyka",
                    "Galaktyka"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1067367738718290010/sketch-1674550680441.png",
        level_up: {
            hp: 3.6,
            battle: [2.6, 3.2],
            types: {
                strong: 150,
                weak: 200
            }
        },
        sp: {
            name: "Porwanie ochrony",
            description: { 
                pl: "havier torturuje przeciwnika w taki sposób, że jego podatność na krytyczny cios jest równa 40%.", 
                en: "havier tortures his opponent in such a way that his susceptibility to a critical blow is equal to 40%.",
            },
            maxUses: 1, 
            
        }
    },
    paty: {
        battle: [
            { atk: 15, name: "Pięść", points: 0 },
            { atk: 75, name: "Atak obrotowy", points: 10 },
            { atk: 120, name: "Strzał piorunem", points: 30 },
            { atk: 250, name: "Piorunowy dash", points: 75 }
        ],
        description: { 
            pl: "Tajemnica, zamknięta w sobie osobowość. Ten Stickman nigdy nie traci czujności i gotów jest walczyć nawet z najcięższym przeciwnikiem. Nieodłączną jego częścią jest na pewno piorun - dzięki niemu może zrobić nawet niezłe wsady na przeciwnika.",
            en: "A mysterious, self-contained personality. This Stickman never loses his vigilance and is ready to fight even the toughest opponent. The inseparable part of him is definitely the lightning - thanks to it he can even make a good dunk on his opponent.",
        }, 
        dimension: "Stick'y-land",
        hp: 1000,
        class: "import",
        max_lvl: 12,
        types: {
            have: [
                "Elektryczność",
                "Chi",
                "Powietrze"
            ],
            weak: {
                def: 2000,
                ind: [
                    "Galaktyka",
                    "Metal"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1067367738936401920/sketch-1674550680025.png",
        level_up: {
            hp: 6.8,
            battle: [1.9, 2.4, 3.2, 3.447],
            types: {
                weak: 0
            }
        },
        sp: {
            name: "Lightnin'gedon",
            description: { 
                pl: "W końcu trzeba wykończyć przeciwnika! paty wykonuje masę dashów z ostatecznym ruchem zwanym „piorunowy laser śmierci”. Traci też 30% posiadanego HP.",
                en: "Finally, the opponent must be finished! Paty performs a ton of dashing with the ultimate move called „piorunowy laser śmierci (lightning laser of death)”. He also loses 30% of his HP.",
            }, 
            maxUses: 1
        }
    },
    chromo:  {
        battle: [
            { atk: 40, name: "Dalekobieżny atak ramion", points: 1 },
            { atk: 86, name: "Uderzenie odrzutowe", points: 8 },
            { atk: 140, name: "Fale telepatyczne", points: 20 },
            { atk: 377, name: "Potrójny atak", points: 65 }
        ],
        class: "epic",
        dimension: "Stick'y-land",
        description: { 
            pl: "Pierwsza postać adaptacyjna do tła. Posiada ataki telepatyczne, może dodatkowo atakować zarówno powietrzem jak i trucizną. Dzięki niebieskiemu i czerwonemu chromowi może uderzać z daleka. Uwielbia nowe znajomości, lecz nie zapomina o tym, że trzeba walczyć w tym kącie Internetu.",
            en: "The first character to adapt to the background. Has telepathic attacks, can additionally attack with both air and poison. Thanks to her blue and red chrome, she can strike from a distance. She loves new friendships, but doesn't forget to fight in this corner of the Internet.",
        },
        max_lvl: 16,
        hp: 750,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1095259942119800882/sketch-1681199825931.png",
        types:  {
            have: [
                "Powietrze",
                "Informatyka",
                "Trucizna",
            ],
            strong:  {
                def: 2700,
                ind: [
                    "Ziemia",
                    "Lód",
                    "Trucizna"
                ]
            },
            weak:  {
                def: 2800,
                ind: [
                    "Powietrze",
                    "Elektryczność",
                    "Chi",
                    "Duchoznactwo"
                ]
            }
        },
        level_up: {
            battle: [2.7,2.9,3.1,3.2],
            hp: 3.1,
            types: {strong: 300, weak: 110}
        },
        sp: {
            name: "Sieci type-X",
            description: { 
                pl: "chromo ukazuje nową generację sieci! Oczywiście do wyniszczenia postaci... Zwiększa ataki niemiłosiernie o 75% i po sekundzie atakuje Falą telepatyczną.",
                en: "chromo reveals a new generation of networks! Obviously to the destruction of the character... Increases attacks mercilessly by 75% and attacks with a attack called „Fale Telepatyczne” after a second."
            },
            maxUses: 2
        }
    },
    twinz: {
        battle: [
            { atk: 15, name: "B: Kopnięcie z półobrotu", points: 0 },
            { atk: 35, name: "O: Atak 3 pierścieni", points: 5 },
            { atk: 100, name: "O: Galaktyczne pęknięcia", points: 45 },
            { atk: 130, name: "B: Fireball", points: 55 },
            { atk: 250, name: "O: dmg()", points: 100 },
            { atk: 300, name: "B: Wodne tsunami", points: 120 },
        ],
        description: { 
            pl: "Dwie osobowości uwięzione w jednym charakterze. Jeden z nich, blueTwinzer, ma opanowane Ogień i Wodę, a drugi, orangeTwinzer - Informatykę i Galaktykę. Nie znoszą jednak jednej mocy - Chi. To ona powoduje, że osobowości się rujnują.",
            en: "Two personalities trapped in one character. One, the blueTwinzer, has Fire and Water mastered, and the other, the orangeTwinzer, IT and Galaxy. However, they can't stand one power - Chi. It is she who causes the personalities to ruin each other.",
        }, 
        dimension: "Stick'y-land",
        hp: 1300,
        class: "import",
        max_lvl: 12,
        types: {
            have: [
                "Informatyka",
                "Galaktyka",
                "Ogień",
                "Woda"
            ],
            weak: {
                def: 10000,
                ind: [
                    "Chi"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1116783654602014790/sketch-1686332309796.png",
        level_up: {
            hp: 4.2,
            battle: [2.5, 2.5, 3.25, 3.25, 4, 4],
            types: {
                weak: 30
            }
        },
        sp: {
            name: "Atak z dwóch stron",
            description: { 
                pl: "Oba osobowości dzielą się, aby zaatakaować przeciwnika. Szansa na uderzenie od blueTwinzera wynosi 40%, a od orangeTwinzera - <sup>5</sup>/<sub>7</sub>.",
                en: "Both personalities split to attack the opponent. The chance of a hit from a blueTwinzer is 40% and from an orangeTwinzer is <sup>5</sup>/<sub>7</sub>.",
            }, 
            maxUses: 7, 
        }
    },
    pikachu: {
        battle: [
            { atk: 30, name: "Szybki atak", points: 5 },
            { atk: 80, name: "Stalowy ogon", points: 25 },
            { atk: 170, name: "Piorun", points: 70 }
        ],
        description: { 
            pl: "Chyba nie trzeba tłumaczyć każdemu, że pikachu to pokémon-mysz z umiejętnościami elektrycznymi. Dostał się tam jako jedna z ofiar jądra Internetu. Pierwszy przedstawiciel własnego wymiaru.",
            en: "It probably doesn't need to be explained to everyone that pikachu is a Pokémon-mouse with electrical abilities. It got there as one of the victims of the Internet core. The first representative of its own dimension.",
        },
        dimension: "Pokémon",
        hp: 1000,
        class: "legendary",
        max_lvl: 14,
        types: {
            have: [
                "Elektryczność"
            ],
            strong: {
                def: 3000,
                ind: [
                    "Powietrze",
                    "Metal",
                    "Elektryczność"
                ]
            },
            weak: {
                def: 4000,
                ind: [
                    "Ziemia"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1067390387024576522/aatbio_com_image_export_Jan_24_2023.png",
        level_up: {
            hp: 3,
            battle: [2, 3, 3.5],
            types: {
                strong: 70,
                weak: 200
            }
        },
        sp: {
            name: "DevEwolucja",
            description: { 
                pl: "Jeżeli ktoś jest fanem Pokémonów, ten wie, że istnieją wspomagacze specjalne jak MegaEwolucja czy Ruch-Z. A co jeżeli powiem, że jądro Internetu nie pozwoliło na zewnętrzne wspomagacze, a nadał dla pikachu własny wspomagacz? Dzięki niemu ta mysz posiada podwojoną ilość maksymalnego HP (nie wpływa na posiadane) oraz o 25% zwiekszone 2 losowe ataki (lub jeden o 56,25%).",
                en: "If anyone is a Pokémon fan, they know that there are special boosters like MegaEvolution or Movement-Z. But what if I said that the Internet kernel didn't allow external boosters, and gave Pikachu its own booster? With it, this mouse has double the maximum HP (does not affect your possession) and a 25% increase in 2 random attacks (or one of 56.25%).",
            },
            maxUses: 1
        }
    },
    lunatone: {
        battle: [
            { atk: 27, name: "Hipnozja", points: 5 },
            { atk: 80, name: "Moonblast", points: 25 }
        ],
        description: { 
            pl: "Rogalikowy Pokémon, stworzony z kamienia oraz posiadający moc Chi. Według Pokédexa, faza księżyca wpływa na jego moc. Aby pikachu nie czuł się samotny, nadano jemu przyjaciela w postaci niego. Był zadowolony!",
            en: "A horned Pokémon, created from stone and possessing the power of Chi. According to Pokédex, the phase of the moon affects its power. To make sure Pikachu didn't feel lonely, a friend was given in the form of him. He was happy!",
        },
        dimension: "Pokémon",
        hp: 750,
        class: "rare",
        max_lvl: 18,
        types: {
            have: [
                "Ziemia",
                "Chi"
            ],
            strong: {
                def: 2400,
                ind: [
                    "Ziemia",
                    "Trucizna",
                    "Duchoznactwo",
                    "Ogień"
                ]
            },
            weak: {
                def: 5000,
                ind: [
                    "Ziemia",
                    "Woda",
                    "Lód"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1112680164887904336/R_3.png",
        level_up: {
            hp: 3.5,
            battle: [1.75, 3.3],
            types: {
                strong: 50,
                weak: 100
            }
        },
        sp: {
            name: "Laser z ziemi",
            description: { 
                pl: "lunatone atakuje przeciwnika po 3 sekundach od użycia, jednocześnie zwiększający jego HP o 7% i ataki o 4%",
                en: "lunatone attacks an opponent 3 seconds after use, while increasing their HP by 7% and attacks by 4%",
            },
            maxUses: 5, 
        }
    },
    kiranaYonome: {
        battle: [
            { atk: 35, name: "Kocie pazurki", points: 0 },
            { atk: 77, name: "Kij basebolowy", points: 7 },
            { atk: 170, name: "> pixelsword", points: 20 },
            { atk: 600, name: "> byteblast", points: 110 },
        ],
        description: { 
            pl: `Energiczna, pełna radości i pociech VTuberka, która zaczęła swoją działalność w sierpniu 2022 roku. Posiada aktualnie {desc.yk} obserwujących na Twitchu. Została poddana próbie stania się wojowniczką, jak narazie dobrze jej idzie...`,
            en: `An energetic, fun and cheerful VTuber who started her work in August 2022. She currently has {desc.yk} followers on Twitch. She has been challenged to become a fighter, so far she is doing well...`,
        },
        dimension: "VTuberzy, do ataku!",
        hp: 1000,
        class: "dark_shop",
        max_lvl: 10,
        types: {
            have: [
                "Informatyka",
                "Galaktyka"
            ],
            weak: {
                def: 4000,
                ind: [
                    "Woda",
                    "Lód"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1115728294076227705/aatbio_com_image_export_Jun_6_2023.png",
        level_up: {
            hp: 4.5,
            battle: [2, 2.5, 3, 4.2],
            types: {
                weak: 125
            }
        },
        sp: {
            name: "Atak od fanów",
            description: { 
                pl: "Dzięki zaaganżowaniu swoich fanów, kiranaYonome używa ich, aby zaatakować przeciwnika. Nie wiadomo, ile obrażeń może zadać każdy fan...",
                en: "Thanks to the enagagement of her fans, kiranaYonome uses them to attack her opponent. It is unknown how much damage each fan can take...",
            },
            maxUses: 3
        }
    },
    gabrysiaSotoła: {
        battle: [
            { atk: 45, name: "Uderzenie kabanosem", points: 3 },
            { atk: 70, name: "Shurikenowe salami chips", points: 10 },
            { atk: 200, name: "Niebiańskie ognie z wydechu wyścigowego", points: 40 },
        ],
        description: {
            pl: "Dziewczyna dopiero rozpoczynająca swoją wielką przygodę po fanpage'u Super Snacki. Poza przekąskami uwielbia też motoryzację - nie bez powodu aureola wygląda jak wybuchy z wydechów po części. Jako że ta postać pochodzi z nieinternetowego wymiaru, trzeba było zrobić alternatywną wersję programistyczną. I zrobiono, bez twarzy oraz z rogami diabła i aureolą po części związanymi z ogniami z wydechów.",
            en: "A girl just starting out on her big adventure following the Super Snacki fanpage. As well as snacks, she also loves motoring - there's a reason why the halo looks like explosions from the exhaust after parts. As this character comes from a non-internet dimension, an alternative programming version had to be made. And it was done, without the face and with the devil's horns and halo partly related to the exhaust fires.",
        },
        dimension: "Gang Sokołów",
        hp: 500,
        class: "legendary",
        max_lvl: 14,
        types: {
            have: [
                "Duchoznactwo",
                "Ogień",
                "Informatyka"
            ],
            strong: {
                def: 1000,
                ind: [
                    "Powietrze",
                    "Woda",
                    "Lód",
                    "Elektryczność",
                    "Duchoznactwo"
                ]
            },
            weak: {
                def: 3000,
                ind: [
                    "Chi",
                    "Ogień"
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1119307614866657380/sketch-1686934121062.png",
        level_up: {
            hp: 2.75,
            battle: [3, 4.5, 5.5],
            types: {
                strong: 30,
                weak: 50
            }
        },
        sp: {
            name: "Ogniste salamitki jak Lamborghini",
            description: { 
                pl: "Pierwsze użycie powoduje, że rozgrzewa do czerwoności wirtualny silnik samochodowy, czyli zwiększa wszystkie ataki o 25% i zmniejsza HP o 10%. Drugie użycie, kosztem zmniejszenia ataków do 80% ich wartości, już uruchamia reakcję łańcuchową i po 5 sekundach gabrysiaSotoła strzela 12 salamitkami, które płoną! Nie każda uderzy, ale spokojnie - przynajmniej jedna salamitka trafi.",
                en: "The first use heats up the virtual car engine, meaning it increases all attacks by 25% and reduces HP by 10%. The second use, at the cost of reducing attacks to 80% of their value, already sets off a chain reaction and after 5 seconds gabrysiaSotoła shoots 12 salamiters that are on fire! Not every one will hit, but rest assured - at least one salamite will hit.",
            },
            maxUses: 2
        }
    },
    snackowyAdmin: {
        battle: [
            { atk: 20, name: "Rzut memem", points: 0 },
            { atk: 55, name: "Bombowy kabanos", points: 5 },
            { atk: 230, name: "Kotołap", points: 60 },
        ],
        description: {
            pl: "Administrator fanpage'a Super Snacki - stronie poświęconej najlepszym przekąskom mięsnych (wg. konsumentów). Idol, jak i przyjaciel wszystkich osób z tego wymiaru. Poza kabanosami uwielbia też koty (oczywiście ich nie zjada). Jako że nie pozwolił na umieszczanie swego wizerunku, jądro Internetu postanowiło, że wizerunek zamieni na jednego z jego memów. Nie jest jakiś walczący, ale spróbuj go tylko wkurzyć, to oberwiesz mocno!",
            en: "Administrator of the fanpage Super Snacki - a page dedicated to the best meat snacks (according to consumers). An idol, as well as a friend of all the people in this dimension. In addition to cabanas, he also loves cats (he doesn't eat them, of course). As he did not allow his image to be posted, the core of the internet decided to turn the image into one of his memes. He's not some fighter, but just try to piss him off, you'll flop hard!"
        },
        dimension: "Gang Sokołów",
        hp: 750,
        class: "import",
        max_lvl: 12,
        types: {
            have: [
                "Trucizna",
                "Informatyka",
                "Chi"
            ],
            strong: {
                def: 3000,
                ind: [
                    "Ziemia",
                    "Elektryczność",
                    "Informatyka"
                ]
            },
            weak: {
                def: 4000,
                ind: [
                    "Trucizna",
                    "Ogień",
                    "Woda",
                    "Lód",
                ]
            }
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1123879023307657296/sketch-1687978196316.png",
        level_up: {
            hp: 2.8,
            battle: [2, 3.1, 4.2],
            types: {
                strong: 50,
                weak: 120
            }
        },
        sp: {
            name: "Przerwa na przekąskę",
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
            maxUses: 10
        }
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