import { gameModify } from "./game.js"

export const charaList = {
    habby: {
        battle: [
            { atk: 20, name: "Piła", points: 0 },
            { atk: 75, name: "ShOcK", points: 30 },
            { atk: 160, name: "Ognista kula", points: 100 }
        ],
        description: "Pierwotny wzór postaci; robot zaprogramowany do walki między innymi spoza własnego wymiaru. Piła pozwala unicestwić konającego, ognisty żar w kuli - spalić na popiół, a jego kable - ogłuszyć przeciwnika.",
        class: "common",
        dimension: "Starcie internetu",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1047920069646233671/sketch-1669913931505.png",
        level_up: {
            battle: [ 3, 3, 4 ],
            hp: 3,
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
            description: "Dzięki luźnym kablom, habby potrafi przekształcić miejsce zarezerwowane dla HP miejscem na ataki.",
            maxUses: 4, 
            function: function() {
                let hpCh = gameModify.getColab().you.hp.setPrectange(90, true)

                for (let i = 0; i < gameModify.getColab().you.atk.getLenght(); i++) {
                    gameModify.getColab().you.atk.setValue(gameModify.getColab().you.atk.getValue(i) - hpCh / 5, i)
                }

                gameModify.spSounds.magic.currentTime = 0
                gameModify.spSounds.magic.play()
                gameModify.getColab().endSP()
            }
        }
    },
    rycerzOceanu: {
        battle: [
            { atk: 30, name: "Zamach mieczem", points: 0 },
            { atk: 110, name: "Uderzenie falowe", points: 50 }
        ],
        description: "„Internet, honor, wymiar” - to są jego słowa wypowiedziane podczas każdej bitwy. Wychowany został w rycerskich warunkach i w szkole czarów. Jest jednością z oceanami. Może i nie wygląda na towarzyskiego, ale jest przyjacielem dla całego jego wymiaru.",
        class: "common",
        dimension: "Starcie internetu",
        hp: 800,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1059455609642164304/sketch-1672645955461.png",
        level_up: {
            battle: [ 2, 2.2 ],
            hp: 2,
            types: {
                strong: 60,
                weak: 40
            }
        },
        max_lvl: 20,
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
            description: "Nie po to rycerzOceanu ukończył najlepszą szkołę magii, aby nie używać czarów! Tworzy sobie specjalną osłonę redukującą szansę na krytyczny cios o 10%, zwiększa swoje HP o 7% oraz losowy atak o 15%.",
            maxUses: 1, 
            function: function() {
                gameModify.getColab().you.hp.setPrectange(107, true)
                gameModify.getColab().you.JSON.change({ critChance: gameModify.getColab().you.JSON.get("critChance") * 0.9 })
                gameModify.getColab().you.atk.setPrectange(115, "random")

                gameModify.spSounds.magic.currentTime = 0
                gameModify.spSounds.magic.play()
                gameModify.getColab().endSP()
            }
        }
    },
    trajom: {
        class: "legendary",
        description: "Wyglądające jak słodkie lewitujące zwierzątko z pikselowymi rączkami potrafi rozpętać istne wirusowe piekło. Mały, ale zabójczy. Nie trwały, a silny. Wyglądający na najsłabszego, w rzeczywistości - potężny.",
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
            hp: 2.1,
            types: {
                weak: 50,
                strong: 100
            },
            battle: [ 2.2, 2.4, 2.6, 3.1 ]
        },
        max_lvl: 20,
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
            description: "trajom, w sytuacji zagrożenia, atakuje dwa razy pięścią, po czym resetuje swoje informacje zredukowanej do połowy poziomu. Dodatkowo posiada 30 BTP po resecie.",
            maxUses: 1, 
            function: function() {
                gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0))
                setTimeout(() => {
                    gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0))
                }, 250)
                setTimeout(() => {
                    const LVL = Math.round(gameModify.getColab().you.getLevel() / 2)

                    if (gameModify.getColab().type == "player") gameModify.getColab().you.JSON.set({
                        points: 30,
                        name: "trajom",
                        critChance: gameModify.calcCritChance("trajom", LVL, gameModify.getColab().enemy.name()),
                        health: gameModify.calc(0, 1000, 2, LVL),
                        atk: [  gameModify.calc(0, charaList.trajom.battle[0], charaList.trajom.level_up.battle[0], LVL), gameModify.calc(0, charaList.trajom.battle[1], charaList.trajom.level_up.battle[1], LVL), gameModify.calc(0, charaList.trajom.battle[2], charaList.trajom.level_up.battle[2], LVL), gameModify.calc(0, charaList.trajom.battle[3], charaList.trajom.level_up.battle[3], LVL) ],
                        spUses: 2,
                    })
                    else gameModify.getColab().you.JSON.set({
                        points: 30,
                        name: "trajom",
                        critChance: gameModify.calcCritChance("trajom", LVL, gameModify.getColab().enemy.name()),
                        health: gameModify.calc(0, 1000, 2, LVL),
                        atk: [  gameModify.calc(0, charaList.trajom.battle[0], charaList.trajom.level_up.battle[0], LVL), gameModify.calc(0, charaList.trajom.battle[1], charaList.trajom.level_up.battle[1], LVL), gameModify.calc(0, charaList.trajom.battle[2], charaList.trajom.level_up.battle[2], LVL), gameModify.calc(0, charaList.trajom.battle[3], charaList.trajom.level_up.battle[3], LVL) ],
                        spUses: 2,
                        lvl: gameModify.getColab().you.JSON.get("lvl"),
                        spHave: true,
                    })

                    gameModify.spSounds.vanish.currentTime = 0
                    gameModify.spSounds.vanish.play()

                    gameModify.getColab().endSP()
                }, 1000)
            }
        }
    },
    kira: {
        description: "Dziewica z nieznanego zakątku Internetu. Demoniczna i zarazem budząca strach. Potrafi zabić przeciwnika woskiem ze świeczki, czy poczuć bestialski ból na własnej skórze.",
        battle: [
            { atk: 23, name: "Uderzenie", points: 0 },
            { atk: 65, name: "Rzut świeczką", points: 40 },
            { atk: 160, name: "Demoniczny atak", points: 95 }
        ],
        dimension: "Starcie internetu",
        hp: 950,
        class: "uncommon",
        max_lvl: 22,
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
            battle: [2.8, 3, 3],
            types: {
                strong: 50,
                weak: 50
            }
        },
        sp: {
            name: "Wampirzyca",
            description: "kira „zabiera” zdrowie dla przeciwnika i nadaje sobie za pomocą uderzenia.",
            maxUses: 10, 
            function: function() {
                gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0)).atk, false)
                gameModify.getColab().endSP()
            }
        }
    },
    sylwestrowyOctane: {
        battle: [
            { atk: 50, name: "Taran", points: 4 },
            { atk: 100, name: "Taran + nitro", points: 20 }, 
            { atk: 200, name: "Dash", points: 72 },
            { atk: 400, name: "Naddźwiękowy dash", points: 120 }
        ],
        description: "Ta postać jest najbardziej imprezową postacią w grze. Ryzykowanie? To jego natura. Nie zna strachu, więc często szuka zaczepki i powoduje walki.",
        class: "epic",
        dimension: "Rocket League",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870111731813/IMG_20221217_162158.png",
        level_up: {
            battle: [ 2, 3, 3, 4 ],
            hp: 2,
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
            description: "Tak, nazwa mówi sama za siebie. sylwestrowyOctane już wsiąknął niekoniecznie legalne środki odurzające, i pokazuje, na co jego stać. Atak inny niż wszystkie, zadaje naprawdę dużo, ale właśnie - skoro już wsiąknął, to niekoniecznie musi trafić. Szansa na trafienie wynosi 40% i albo uderzy w przeciwnika, albo sam oberwie tym atakiem (25% wartości ataku).",
            maxUses: 3, 
            function: function() {
                var atk = gameModify.calc(0, Math.round(Math.random() * 15) * 500 + 4000, Math.round(Math.random() * 40) / 10 + 1, gameModify.getColab().you.getLevel())
                gameModify.spSounds.alarm.currentTime = 0
                gameModify.spSounds.alarm.play()
                

                if (Math.floor(Math.random() * 10) < 4) setTimeout(() => {
                    gameModify.spSounds.uAttack.currentTime = 0
                    gameModify.spSounds.uAttack.play()
                    gameModify.getColab().enemy.attack(atk)
                    gameModify.getColab().endSP()
                }, 500)
                else setTimeout(() => {
                    gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() - atk / 4, false)
                    gameModify.getColab().endSP()
                }, 1000)
            }
        }
    },
    diamentowyDominus: {
        battle: [
            { atk: 30, name: "Dash", points: 5},
            { atk: 100, name: "Atak z powietrza", points: 55 },
            { atk: 500, name: "Pocisk naprowadzany", points: 130}
        ],
        description: "Można zaryzykować stwierdzeniem, że jest jednym z „mędrców” Internetu. Umie planować w trakcie walki, a co za tym idzie, wygrywa także większość rozegranych bitew. Nieugięty, silny i obdarzony Pociskiem Naprowadzanym. Uważaj, jeśli go napotkasz!",
        class: "import",
        dimension: "Rocket League",
        hp: 1000,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870476628089/IMG_20221217_162215.png",
        level_up: {
            battle: [ 2, 2, 3 ],
            hp: 2,
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
            description: "Jak to wkurza diamentowegoDominusa, gdy ktoś poniża lepszego gracza wymienionym tekstem. Zwiększa każdy atak o 10%, ogranicza zadanie crita do 0 i zwiększa przeciwnikowi crita o 25%",
            maxUses: 1, 
            function: function() {
                gameModify.getColab().you.atk.setPrectange(110, "all")
                gameModify.getColab().you.JSON.change({ critChance: 0 })
                gameModify.getColab().enemy.crit.change(gameModify.getColab().enemy.crit.get * 1.25)

                gameModify.spSounds.alarm.currentTime = 0
                gameModify.spSounds.alarm.play()
                gameModify.getColab().endSP()
            }
        }
    },
    zimowyHotshot: {
        battle: [
            { atk: 35, name: "Kolce", points: 5 },
            { atk: 60, name: "Mróz", points: 12 },
            { atk: 205, name: "Power Hitter", points: 30 },
        ],
        description: "Pojazd, który bardzo lubi zimno; wychowywany w lodowisku. Obdarzony trzema mocami z Rumble. Na pewno polega na szczęściu i potrafi wygrać walkę.",
        class: "rare",
        dimension: "Rocket League",
        hp: 700,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1053693870875091035/IMG_20221217_162240.png",
        level_up: {
            battle: [ 2, 2.1, 2.4 ],
            hp: 2.05,
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
            description: "zimowyHotshot atakuje rozpędzonym krążkiem hokejowym. Może i nie zadaje dużo, ale jest darmowy!",
            maxUses: 7, 
            function: function() {
                gameModify.getColab().enemy.attack(gameModify.calc(0, 300, 1.85, gameModify.getColab().you.getLevel()))
                gameModify.getColab().endSP()
            }
        }
    },
    theChosenOne: {
        battle: [
            { atk: 20, name: "Silne uderzenie", points: 0 },
            { atk: 60, name: "Atak lodu", points: 5 },
            { atk: 75, name: "Atak ognia", points: 6 },
            { atk: 130, name: "ShOcK", points: 15 },
            { atk: 175, name: "Laser", points: 20 },
            { atk: 710, name: "Armagedon", points: 100 }
        ],
        description: "To ten Stickman, który zaatakował swojego twórcę - noogai3. Posiada niewyobrażalnie dużo mocy typu tornado, teleportacja, ogień, laser w oczach… czyli naprawdę postać postać dość porównywalna do boga.",
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
            hp: 2.8,
            battle: [2, 2, 2.05, 3, 3, 3.9],
            types: {
                weak: 0
            }
        },
        sp: {
            name: "Seria niedozwolonych ataków",
            description: "Aby wyeliminować finalnie przeciwnika, theChosenOne łamie zasady Starcia Internetu, i atakuje przeciwnika losowymi atakami (poza Armagedonem) aż 20 razy, bez utraty BTP!",
            maxUses: 1, 
            function: function() {
                for (let i = 0; i < 20; i++) setTimeout(() => {
                    gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(Math.floor(Math.random() * (gameModify.getColab().you.atk.getLenght()-1))))
                }, i * 200)
                setTimeout(gameModify.getColab().endSP, 4000)
            }
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
        description: "Druga wersja theChosenOne; też związany z atakiem na noogai3, ale nie spowodował krytycznych szkód. Ma nietypowy styl walki; posiada możliwość użycia „ostatecznej siły”, co pokazuje jego potęgę w walce.",
        class: "dark_shop",
        dimension: "Stick'y-land",
        hp: 1500,
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1057697620467920906/Tsc__1.png",
        level_up: {
            battle: [ 2.5, 3, 3, 4, 4 ],
            hp: 2.1,
            types: {
                strong: 400,
                weak: 200
            }
        },
        max_lvl: 10,
        types: {
            have: [
                "Chi",
                "Ziemia"
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
            description: "Gdyby porównać theSecongComing do najszybszego komputera świata, to jest najpotężniejszy w szybkości wykonywania kodu. Także dzięki tej możliwości tworzy tymczasowe własne jądro (o wiele wiele wiele słabsze od głównego) oraz z jego mocą uderza atakiem o wartości 1700 (mnożnik x1.7)",
            maxUses: 1, 
            function: function() {
                gameModify.spSounds.magic.currentTime = 0
                gameModify.spSounds.magic.play()
                setTimeout(() => {
                    gameModify.spSounds.alarm.currentTime = 0
                    gameModify.spSounds.alarm.play()
                }, 3000)
                setTimeout(() => {
                    gameModify.spSounds.alarm.currentTime = 0
                    gameModify.spSounds.alarm.play()
                }, 4000)
                setTimeout(() => {
                    gameModify.spSounds.alarm.currentTime = 0
                    gameModify.spSounds.alarm.play()
                }, 5000)
                setTimeout(() => {
                    gameModify.spSounds.uAttack.currentTime = 0
                    gameModify.spSounds.uAttack.play()
                    gameModify.getColab().enemy.attack(gameModify.calc(0, 1700, 1.7, gameModify.getColab().you.getLevel()))
                    gameModify.getColab().endSP()
                }, 6000)
            }
        }
    },
    havier: {
        battle: [
            { atk: 50, name: "Strzał prochem", points: 6 },
            { atk: 120, name: "Żar ognisty", points: 30 }
        ],
        description: "Postać, gdzie jego składnikiem jest proch. Strzela prochem, porusza się prochem… więc gdy potrzebujesz „trochę” wybuchów, on jest w tym najlepszy!",
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
            hp: 3.5,
            battle: [2.4, 3],
            types: {
                strong: 150,
                weak: 300
            }
        },
        sp: {
            name: "Porwanie ochrony",
            description: "havier torturuje przeciwnika w taki sposób, że jego podatność na krytyczny cios jest równa 50%.",
            maxUses: 1, 
            function: function() {
                gameModify.getColab().enemy.crit.change(500)

                gameModify.spSounds.uAttack.currentTime = 0
                gameModify.spSounds.uAttack.play()
                gameModify.getColab().endSP()
            }
        }
    },
    paty: {
        battle: [
            { atk: 15, name: "Pięść", points: 0 },
            { atk: 75, name: "Atak obrotowy", points: 10 },
            { atk: 120, name: "Strzał piorunem", points: 30 },
            { atk: 270, name: "Piorunowy dash", points: 75 }
        ],
        description: "Tajemnica, zamknięta w sobie osobowość. Ten Stickman nigdy nie traci czujności i gotów jest walczyć nawet z najcięższym przeciwnikiem. Nieodłączną jego częścią jest na pewno piorun - dzięki niemu może zrobić nawet niezłe wsady na przeciwnika.",
        dimension: "Stick'y-land",
        hp: 1000,
        class: "import",
        max_lvl: 12,
        types: {
            have: [
                "Elektrycznosć",
                "Chi",
                "Powietrze"
            ]
        },
        image: "https://cdn.discordapp.com/attachments/1047919900875825293/1067367738936401920/sketch-1674550680025.png",
        level_up: {
            hp: 3.5,
            battle: [1.55, 2, 3, 3.3],
            types: {}
        },
        sp: {
            name: "Lightnin'gedon",
            description: "W końcu trzeba wykończyć przeciwnika! paty wykonuje masę dashów z ostatecznym ruchem zwanym „piorunowy laser śmierci”. Traci też 50% posiadanego HP.",
            maxUses: 1, 
            function: function() {
                for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                        gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue("last") / 10)
                    }, i * 100)
                }
                setTimeout(() => {
                    gameModify.spSounds.uAttack.currentTime = 0
                    gameModify.spSounds.uAttack.play()

                    gameModify.getColab().enemy.attack(gameModify.calc(0, 1550, 2.5, gameModify.getColab().you.getLevel()))
                    gameModify.getColab().you.hp.setPrectange(50, false)
                }, 1300)
                setTimeout(() => {
                    gameModify.getColab().endSP()
                }, 1800)
            }
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
        description: "Pierwsza postać adaptacyjna do tła. Posiada ataki telepatyczne, może dodatkowo atakować zarówno powietrzem jak i trucizną. Dzięki niebieskiemu i czerwonemu chromowi może uderzać z daleka. Uwielbia nowe znajomości, lecz nie zapomina o tym, że trzeba walczyć w tym kącie Internetu.",
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
                def: 2700,
                ind: [
                    "Powietrze",
                    "Elektryczność",
                    "Chi",
                    "Duchoznactwo"
                ]
            }
        },
        level_up: {
            battle: [1.7,1.8,1.9,2],
            hp: 2.1,
            types: {strong: 500, weak: 250}
        },
        sp: {
            name: "Sieci type-X",
            description: "chromo ukazuje nową generację sieci! Oczywiście do wyniszczenia postaci... Zwiększa ataki niemiłosiernie o 75% i po sekundzie atakuje Falą telepatyczną",
            maxUses: 2,
            function: function() {
                gameModify.getColab().you.atk.setPrectange(175, "all")
                setTimeout(() => {
                    gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(2))
                    gameModify.getColab().endSP()
                }, 1000)
            }
        }
    },
    pikachu: {
        battle: [
            { atk: 30, name: "Szybki atak", points: 5 },
            { atk: 80, name: "Stalowy ogon", points: 25 },
            { atk: 170, name: "Piorun", points: 70 }
        ],
        description: "Chyba nie trzeba tłumaczyć każdemu, że pikachu to pokémon-mysz z umiejętnościami elektrycznymi. Dostał się tam jako jedna z ofiar jądra Internetu. Pierwszy przedstawiciel własnego wymiaru.",
        dimension: "Pokémon",
        hp: 1000,
        class: "legendary",
        max_lvl: 14,
        types: {
            have: [
                "Elektrycznosć"
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
            battle: [2, 2, 3, 4],
            types: {
                strong: 70,
                weak: 200
            }
        },
        sp: {
            name: "DevEwolucja",
            description: "Jeżeli ktoś jest fanem Pokémonów, ten wie, że istnieją wspomagacze specjalne jak MegaEwolucja czy Ruch-Z. A co jeżeli powiem, że jądro Internetu nie pozwoliło na zewnętrzne wspomagacze, a nadał dla pikachu własny wspomagacz? Dzięki niemu ta mysz posiada podwojoną ilość maksymalnego HP (nie wpływa na posiadane) oraz o 25% zwiekszone 2 losowe ataki (lub jeden o 56,25%).",
            maxUses: 1, 
            function: function() {
                gameModify.getColab().you.hp.setPrectange(200, true)

                gameModify.getColab().you.atk.setPrectange(125, "random")
                gameModify.getColab().you.atk.setPrectange(125, "random")

                gameModify.getColab().you.hp.setPrectange(50, false)

                gameModify.spSounds.magic.currentTime = 0
                gameModify.spSounds.magic.play()
                gameModify.getColab().endSP()
            }
        }
    },
}

/*
    sp: {
        name: "",
        description: "",
        maxUses: 0,
        function: function() {}
    }
*/