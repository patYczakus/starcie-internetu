import { charaList } from "./characters.js"
import { app } from "./database.js"
import { gameModify } from "./game.js"
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

/**
 * Cała lista Gwiezdnych Mocy
 */
const spf = {
    // stin
    habby: function () {
        let hpCh = gameModify.getColab().you.hp.setPrectange(90, true)

        for (let i = 0; i < gameModify.getColab().you.atk.getLenght(); i++) {
            gameModify.getColab().you.atk.setValue(gameModify.getColab().you.atk.getValue(i) - (hpCh / 2) * i, i)
        }
        console.log("[DEBUG/game/habby] Wartości ataków: ", gameModify.getColab().you.atk.getValue("all"))

        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    rycerzOceanu: function () {
        gameModify.getColab().you.hp.setPrectange(117, true)
        gameModify.getColab().you.JSON.change({
            critChance: gameModify.getColab().you.JSON.get("critChance") * 0.85,
        })
        gameModify.getColab().you.atk.setPrectange(120, "random")

        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    trajom: function () {
        gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0))
        setTimeout(() => {
            gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0))
        }, 250)
        setTimeout(() => {
            gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0))
        }, 500)
        setTimeout(() => {
            const LVL = Math.round(gameModify.getColab().you.getLevel() / 2)

            if (gameModify.getColab().type == "player")
                gameModify.getColab().you.JSON.set({
                    points: 30,
                    name: "trajom",
                    critChance: gameModify.calcCritChance("trajom", LVL, gameModify.getColab().enemy.name()),
                    health: gameModify.calc(0, 1000, 2.15, LVL),
                    atk: [
                        gameModify.calc(0, charaList.trajom.battle[0], charaList.trajom.level_up.battle[0], LVL),
                        gameModify.calc(0, charaList.trajom.battle[1], charaList.trajom.level_up.battle[1], LVL),
                        gameModify.calc(0, charaList.trajom.battle[2], charaList.trajom.level_up.battle[2], LVL),
                        gameModify.calc(0, charaList.trajom.battle[3], charaList.trajom.level_up.battle[3], LVL),
                    ],
                    spUses: 2,
                })
            else
                gameModify.getColab().you.JSON.set({
                    points: 30,
                    name: "trajom",
                    critChance: gameModify.calcCritChance("trajom", LVL, gameModify.getColab().enemy.name()),
                    health: gameModify.calc(0, 1000, 2.15, LVL),
                    atk: [
                        gameModify.calc(0, charaList.trajom.battle[0], charaList.trajom.level_up.battle[0], LVL),
                        gameModify.calc(0, charaList.trajom.battle[1], charaList.trajom.level_up.battle[1], LVL),
                        gameModify.calc(0, charaList.trajom.battle[2], charaList.trajom.level_up.battle[2], LVL),
                        gameModify.calc(0, charaList.trajom.battle[3], charaList.trajom.level_up.battle[3], LVL),
                    ],
                    spUses: 2,
                    lvl: gameModify.getColab().you.JSON.get("lvl"),
                    spHave: true,
                })

            gameModify.spSounds.vanish.currentTime = 0
            gameModify.spSounds.vanish.play()

            gameModify.getColab().endSP()
        }, 1000)
    },
    kira: function () {
        gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0)).atk, false)
        gameModify.getColab().endSP()
    },
    glalirthor: function () {
        gameModify.getColab().you.atk.setPrectange(210, "all")
        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    haker1000: function () {
        this[gameModify.getColab().enemy.name()]()
    },

    // rl
    sylwestrowyOctane: function () {
        var atk = gameModify.calc(0, Math.round(Math.random() * 18) * 500 + 3500, Math.round(Math.random() * 50) / 10 + 1, gameModify.getColab().you.getLevel())
        gameModify.spSounds.alarm.currentTime = 0
        gameModify.spSounds.alarm.play()

        if (Math.floor(Math.random() * 10) < 4)
            setTimeout(() => {
                gameModify.spSounds.uAttack.currentTime = 0
                gameModify.spSounds.uAttack.play()
                gameModify.getColab().enemy.attack(atk)
                gameModify.getColab().endSP()
            }, 500)
        else
            setTimeout(() => {
                gameModify.spSounds.miss.currentTime = 0
                gameModify.spSounds.miss.play()
                gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() - atk * 0.25, false)
                if (gameModify.getColab().analyzeTheEnd()) gameModify.getColab().endSP()
            }, 1000)
    },
    diamentowyDominus: function () {
        gameModify.getColab().you.atk.setPrectange(110, "all")
        gameModify.getColab().you.JSON.change({ critChance: 0 })
        gameModify.getColab().enemy.crit.change(gameModify.getColab().enemy.crit.get * 1.25)

        gameModify.spSounds.alarm.currentTime = 0
        gameModify.spSounds.alarm.play()
        gameModify.getColab().endSP()
    },
    zimowyHotshot: function () {
        gameModify.getColab().enemy.attack(gameModify.calc(0, 300, 1.85, gameModify.getColab().you.getLevel()))
        gameModify.getColab().endSP()
    },

    // st-l
    nikolixia: function () {
        if (gameModify.getColab().you.JSON.get("spUses") == 1) {
            //1. Przez 20 ruchów “zabiera” HP przeciwnikowi;
            gameModify.getColab().setTimeoutInMoves("each", 20, (type) => {
                gameModify
                    .getColab(type)
                    .you.hp.setValue(
                        gameModify.getColab(type).you.hp.get() + gameModify.getColab(type).enemy.attack(gameModify.calc(0, 50, 2.5, gameModify.getColab(type).you.getLevel())).atk,
                        false
                    )
                gameModify.spSounds.regen.currentTime = 0
                gameModify.spSounds.regen.play()
            })
        } else if (gameModify.getColab().you.JSON.get("spUses") == 2) {
            //2. Zwiększa swoje ataki o 20%;
            gameModify.getColab().you.atk.setPrectange(120, "all")
        } else if (gameModify.getColab().you.JSON.get("spUses") == 3) {
            //3. Używa “pierścienia niebiańskiego”, zwiększając szansę krytycznego ciosu przeciwnika o 50%;
            gameModify.getColab().enemy.crit.change(gameModify.getColab().enemy.crit.get() * 1.5)
        } else {
            //4. Przestaje już być tą troskliwą boginią i się zamienia w piekielne trudnego szatana. Zwiększa swoje ataki o 50% i szansa krytycznego ciosu u niej spada do całkowitego zera, a przeciwnikowi do 100%, ale jej HP zwykłe, jak i maksymalne spadają aż do 50%!
            gameModify.getColab().enemy.crit.change(1000)
            gameModify.getColab().you.JSON.change({ critChance: 0 })
            gameModify.getColab().you.atk.setPrectange(150, "all")
            gameModify.getColab().you.hp.setPrectange(50, true)
        }
        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()

        gameModify.getColab().endSP()
    },
    theChosenOne: function () {
        for (let i = 0; i < 20; i++)
            setTimeout(() => {
                gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(Math.floor(Math.random() * (gameModify.getColab().you.atk.getLenght() - 1))))
            }, i * 200)
        setTimeout(gameModify.getColab().endSP, 4000)
    },
    theDarkLord: function () {
        var conf = {
            maxS: 3,
            atkPerSec: 15,
        }

        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        setTimeout(() => {
            for (var i = 0; i < conf.maxS * conf.atkPerSec; i++)
                setTimeout(() => {
                    gameModify.getColab().enemy.attack(gameModify.calc(0, 150, 3, gameModify.getColab().you.getLevel() + 3))
                }, (1000 / conf.atkPerSec) * i)
            setTimeout(() => {
                gameModify.getColab().endSP()
            }, 1000 * conf.maxS + 500)
        }, 500)
    },
    theSecondComing: function () {
        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        setTimeout(() => {
            gameModify.spSounds.alarm.currentTime = 0
            gameModify.spSounds.alarm.play()
        }, 2000)
        setTimeout(() => {
            gameModify.spSounds.uAttack.currentTime = 0
            gameModify.spSounds.uAttack.play()
            gameModify.getColab().enemy.attack(gameModify.calc(0, 1000, 2, gameModify.getColab().you.getLevel()))
            gameModify.getColab().endSP()
        }, 3000)
    },
    havier: function () {
        gameModify.getColab().enemy.crit.change(500)

        gameModify.spSounds.uAttack.currentTime = 0
        gameModify.spSounds.uAttack.play()
        gameModify.getColab().endSP()
    },
    paty: function () {
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
                gameModify.getColab().enemy.attack((gameModify.getColab().you.atk.getValue("last") / i) * 10)
            }, i * 100)
        }
        setTimeout(() => {
            gameModify.spSounds.uAttack.currentTime = 0
            gameModify.spSounds.uAttack.play()

            gameModify.getColab().enemy.attack(gameModify.calc(0, 1800, 4.253, gameModify.getColab().you.getLevel()))
            gameModify.getColab().you.hp.setPrectange(70, false)
        }, 1300)
        setTimeout(() => {
            gameModify.getColab().endSP()
        }, 1800)
    },
    chromo: function () {
        gameModify.getColab().you.atk.setPrectange(175, "all")
        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        setTimeout(() => {
            gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(2))
            gameModify.getColab().endSP()
        }, 1000)
    },
    twinz: function () {
        function a(x) {
            return gameModify.getColab().you.getLevel() + x < 1 ? 1 : gameModify.getColab().you.getLevel() + x
        }
        var blue = {
            a: gameModify.calc(0, 1000, 4, a(-1)),
            c: Math.round(Math.random() * 4) + 1 <= 2,
        }
        var orange = {
            a: gameModify.calc(0, 1500, 4.1, a(2)),
            c: Math.round(Math.random() * 11) + 1 <= 5,
        }

        gameModify.spSounds.alarm.currentTime = 0
        gameModify.spSounds.alarm.play()
        setTimeout(() => {
            gameModify.getColab().enemy.attack(blue.a * blue.c + orange.a * orange.c)
            gameModify.getColab().endSP()
            if (blue.c || orange.c) {
                gameModify.spSounds.uAttack.currentTime = 0
                gameModify.spSounds.uAttack.play()
            } else {
                gameModify.spSounds.miss.currentTime = 0
                gameModify.spSounds.miss.play()
            }
        }, 1000)
    },
    szymekDymek: function () {
        gameModify.getColab().you.atk.setPrectange(120, "last")
        gameModify.getColab().setTimeoutInMoves("each", Infinity, (type, rm) => {
            gameModify
                .getColab(type)
                .you.hp.setValue(gameModify.getColab(type).you.hp.get() + gameModify.calc(0, Math.abs(Math.sin(rm * 5) * rm), 2, gameModify.getColab(type).you.getLevel()))
            gameModify.getColab(type).you.JSON.change({ points: gameModify.getColab(type).you.JSON.get("points") + Math.abs(Math.sin(rm * 10)) })
        })

        gameModify.spSounds.tractorStart.volume = 1
        gameModify.spSounds.tractorStart.currentTime = 0
        gameModify.spSounds.tractorStart.play()
        gameModify.getColab().endSP()
        setTimeout(() => {
            gameModify.spSounds.tractorStart.volume = 0.4
        }, 3000)
    },
    młody: function () {
        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        gameModify.getColab().you.atk.setPrectange(108, "all")
        if (gameModify.getColab(type).you.JSON.get("spUses") == 1) {
            setTimeout(() => {
                const card = Math.round(gameModify.getColab().you.atk.getValue(0) * 1.3)
                const num = Math.round(Math.random() * 3)
                if (num == 0) {
                    gameModify.spSounds.miss.currentTime = 0
                    gameModify.spSounds.miss.play()
                } else {
                    if (num == 3) {
                        gameModify.spSounds.uAttack.currentTime = 0
                        gameModify.spSounds.uAttack.play()
                    }
                    gameModify.getColab().enemy.attack(card * num)
                }
                gameModify.getColab.endSP()
            }, 1000)
        } else {
            gameModify.getColab().endSP()
        }
    },
    kremola: function () {
        if (gameModify.getColab().you.JSON.get("spUses") == 0) {
            var energy = gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0)).atk
            setTimeout(() => {
                energy += gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0)).atk
                gameModify.getColab().setTimeoutInMoves("end", 3, (type) => {
                    if (gameModify.getColab(type).you.JSON.get("spUses") == 1) {
                        gameModify.spSounds.magic.currentTime = 0
                        gameModify.spSounds.magic.play()
                        gameModify.getColab(type).you.JSON.change({
                            spUses: 2,
                            points: gameModify.getColab(type).you.JSON.get("points") + Math.round(energy * 0.2),
                            health: gameModify.getColab(type).you.hp.get() + Math.round(energy * 0.8),
                        })
                    }
                })
            }, 500)
        } else {
            const catEnergyCost = gameModify.calc(0, 1.5, 2.2, gameModify.getColab().you.getLevel())
            const catPower = () => gameModify.calc(0, Math.random() * 5, 2, gameModify.getColab().you.getLevel() + 2)
            const wsciekliznaBlocks = ["snackowyAdmin", "kiranaYonome"]

            gameModify.spSounds.alarm.currentTime = 0
            gameModify.spSounds.alarm.play()
            gameModify.getColab().setTimeoutInMoves("each", Math.floor(energy / catEnergyCost / 4), (type) => {
                for (let i = 1; i <= 4; i++) {
                    const _cp = catPower()
                    setTimeout(() => {
                        gameModify.getColab(type).enemy.attack(_cp)
                    }, i * 250)
                    if (Math.random() <= 0.1 && !wsciekliznaBlocks.includes(gameModify.getColab(type).enemy.name())) {
                        gameModify.getColab(type).setTimeoutInMoves("each", 3, () => {
                            setTimeout(() => {
                                gameModify.getColab(type).enemy.attack(Math.ceil(_cp / 25))
                            }, 1500)
                        })
                    }
                }
            })
            gameModify.getColab().setTimeoutInMoves("end", Math.floor(energy / catEnergyCost / 4), (type) => {
                for (let i = 1; i <= ((energy / catEnergyCost) % 4) + 1; i++) {
                    const _cp = catPower()
                    setTimeout(() => {
                        gameModify.getColab(type).enemy.attack(_cp)
                    }, i * 250)
                    if (Math.random() <= 0.1 && !wsciekliznaBlocks.includes(gameModify.getColab(type).enemy.name())) {
                        gameModify.getColab(type).setTimeoutInMoves("each", 3, () => {
                            setTimeout(() => {
                                gameModify.getColab(type).enemy.attack(Math.ceil(_cp / 25))
                            }, 1500)
                        })
                    }
                }
            })
        }
        gameModify.getColab().endSP()
    },
    botek: function () {
        gameModify.spSounds.discord.userMoved.currentTime = 0
        gameModify.spSounds.discord.userMoved.play()
        gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + gameModify.calc(0, 50, 2, gameModify.getColab().you.getLevel()))
        gameModify.getColab().you.atk.setPrectange(103, "all")
        gameModify.getColab().you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") + 10 })
    },

    // pokemon
    pikachu: function () {
        gameModify.getColab().you.hp.setPrectange(200, true)

        gameModify.getColab().you.atk.setPrectange(125, "random")
        gameModify.getColab().you.atk.setPrectange(125, "random")

        gameModify.getColab().you.hp.setPrectange(50, false)

        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    lunatone: function () {
        gameModify.spSounds.alarm.currentTime = 0
        gameModify.spSounds.alarm.play()
        setTimeout(() => {
            gameModify.spSounds.alarm.currentTime = 0
            gameModify.spSounds.alarm.play()
        }, 1000)
        setTimeout(() => {
            gameModify.spSounds.alarm.currentTime = 0
            gameModify.spSounds.alarm.play()
        }, 2000)
        setTimeout(() => {
            gameModify.getColab().you.hp.setPrectange(107, true)
            gameModify.getColab().you.atk.setPrectange(104, "all")

            gameModify.getColab().enemy.attack(gameModify.calc(0, 400, 3, gameModify.getColab().you.getLevel()))

            gameModify.spSounds.uAttack.currentTime = 0
            gameModify.spSounds.uAttack.play()
            gameModify.spSounds.magic.currentTime = 0
            gameModify.spSounds.magic.play()

            gameModify.getColab().endSP()
        }, 3000)
    },

    // vtuberzy
    kiranaYonome: function () {
        get(ref(getDatabase(app), `starcie-internetu/followersApiInfo/ky`)).then((snpsht) => {
            var attack = () => {
                return gameModify.calc(0, Math.round(Math.random() * 4) + 1, 2.7, gameModify.getColab().you.getLevel())
            }

            gameModify.spSounds.alarm.currentTime = 0
            gameModify.spSounds.alarm.play()
            gameModify.getColab().setTimeoutInMoves("each", Math.floor(snpsht.val() / 5), (type) => {
                for (let i = 0; i < 5; i++)
                    setTimeout(() => {
                        gameModify.getColab(type).enemy.attack(attack())
                    }, i * 100)
                gameModify.getColab(type).analyzeTheEnd()
            })
            gameModify.getColab().setTimeoutInMoves("end", Math.floor(snpsht.val() / String(snpsht.val()).length), (type) => {
                for (let i = 0; i < snpsht.val() % 5; i++)
                    setTimeout(() => {
                        gameModify.getColab(type).enemy.attack(attack())
                    }, i * 100)
                gameModify.getColab(type).analyzeTheEnd()
            })
            gameModify.getColab().endSP()
        })
    },

    // sokołów
    gabrysiaSotoła: function () {
        //console.log(gameModify.getColab().you.JSON.get(""), gameModify.getColab().you.JSON.get("spUses"))
        if (gameModify.getColab().you.JSON.get("spUses") == 1) {
            gameModify.getColab().you.atk.setPrectange(125, "all")
            gameModify.getColab().you.hp.setPrectange(90, true)

            gameModify.spSounds.magic.currentTime = 0
            gameModify.spSounds.magic.play()
            gameModify.getColab().endSP()
        } else {
            gameModify.getColab().you.atk.setPrectange(80, "all")

            setTimeout(() => {
                gameModify.spSounds.alarm.currentTime = 0
                gameModify.spSounds.alarm.play()
            }, 2000)
            setTimeout(() => {
                gameModify.spSounds.alarm.currentTime = 0
                gameModify.spSounds.alarm.play()
            }, 3000)
            setTimeout(() => {
                gameModify.spSounds.alarm.currentTime = 0
                gameModify.spSounds.alarm.play()
            }, 4000)
            setTimeout(() => {
                gameModify.getColab().enemy.attack(gameModify.calc(0, 350, 5, gameModify.getColab().you.getLevel()) * (Math.round(Math.random() * 11) + 1))

                gameModify.spSounds.uAttack.currentTime = 0
                gameModify.spSounds.uAttack.play()
                gameModify.getColab().endSP()
            }, 5000)
        }
    },
    snackowyAdmin: function () {
        var snacksInfo = [
            {
                __bool: true,
                atk: [108, "all"],
            },
            {
                __bool: true,
                atk: [125, "random"],
            },
            {
                __bool: true,
                btp: gameModify.getColab().playersLevel()[gameModify.getColab().type] + 2 * gameModify.getColab().you.getLevel(),
            },
            {
                __bool: gameModify.getColab().you.hp.factor() <= 0.75,
                atk: [125, "random"],
                heal: [75, 2],
            },
            {
                __bool: true,
                def: [500, 100],
            },
            {
                __bool: true,
                maxHP: 110,
            },
            {
                __bool: gameModify.getColab().you.hp.factor() <= 0.5,
                heal: [160, 2.2],
            },
            {
                __bool: true,
                def: [250, 50],
                atk: [105, "all"],
                maxHP: 103,
            },
            {
                __bool: gameModify.getColab().you.hp.factor() <= 0.9,
                heal: [80, 1.8],
                atk: [106, "all"],
                def: [200, 55],
                maxHP: 103,
                btp: Math.round(1.5 * gameModify.getColab().you.getLevel()),
            },
        ]

        var acctualNum
        do {
            acctualNum = Math.floor(Math.random() * snacksInfo.length)
        } while (!snacksInfo[acctualNum].__bool)
        var rand = Math.round(Math.random())

        if (gameModify.getColab().enemy.name() != "paty" || rand) {
            var JSONN = {}
            if ("heal" in snacksInfo[acctualNum]) {
                gameModify
                    .getColab()
                    .you.hp.setValue(
                        gameModify.getColab().you.hp.get() +
                            gameModify.calc(0, snacksInfo[acctualNum].heal[0], snacksInfo[acctualNum].heal[1], gameModify.getColab().you.getLevel()),
                        false
                    )
            }
            if ("atk" in snacksInfo[acctualNum]) {
                gameModify.getColab().you.atk.setPrectange(snacksInfo[acctualNum].atk[0], snacksInfo[acctualNum].atk[1])
            }
            if ("def" in snacksInfo[acctualNum]) {
                JSONN.critChance =
                    gameModify.getColab().you.JSON.get("critChance") -
                    gameModify.calc(1, snacksInfo[acctualNum].def[0], snacksInfo[acctualNum].def[1], gameModify.getColab().you.getLevel())
            }
            if ("maxHP" in snacksInfo[acctualNum]) {
                gameModify.getColab().you.hp.setPrectange(snacksInfo[acctualNum].maxHP, true)
                gameModify.getColab().you.hp.setPrectange(10000 / snacksInfo[acctualNum].maxHP, false)
            }
            if ("btp" in snacksInfo[acctualNum]) {
                JSONN.points = gameModify.getColab().you.JSON.get("points") + snacksInfo[acctualNum].btp
            }

            if (Object.keys(JSONN).length > 0) {
                gameModify.getColab().you.JSON.change(JSONN)
            }
            gameModify.spSounds.num_num_num.currentTime = 0
            gameModify.spSounds.num_num_num.play()
        } else {
            gameModify.spSounds.miss.currentTime = 0
            gameModify.spSounds.miss.play()
        }
        gameModify.getColab().endSP()
    },

    // genshin/honkai
    zhongli: function () {
        var beforeUsed = {
            atk: gameModify.getColab().you.atk.getValue("all"),
            critChance: gameModify.getColab().you.JSON.get("critChance"),
        }

        // Przeciwnik
        gameModify.getColab().enemy.attack(gameModify.calc(0, 200, 2.63, gameModify.getColab().you.getLevel()))
        if (gameModify.getColab().enemy.crit.get() < 350) gameModify.getColab().enemy.crit.change(350)

        // On
        gameModify.getColab().you.JSON.change({ critChance: beforeUsed.critChance / 2 })
        gameModify.getColab().you.atk.setPrectange(113.5, "all")
        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()

        gameModify.getColab().setTimeoutInMoves(1, 5, (type) => {
            gameModify.spSounds.regen.currentTime = 0
            gameModify.spSounds.regen.play()
            gameModify.getColab(type).you.hp.setValue(gameModify.getColab(type).you.hp.get() + gameModify.calc(0, 30, 1.95, gameModify.getColab(type).you.getLevel()))
        })
        gameModify.getColab().setTimeoutInMoves(0, 5, (type) => {
            gameModify.spSounds.miss.currentTime = 0
            gameModify.spSounds.miss.play()
            gameModify.getColab(type).you.JSON.change(beforeUsed)
        })
        gameModify.getColab().endSP()
    },
}

/**
 * Funkcja łącząca zmiennę funkcjonalną z danymi postaci.
 * @returns Kompletna lista postaci
 */
export const createCharacterWithSPFunctions = function () {
    var CharaList_func = charaList
    Object.keys(charaList).forEach((key) => {
        CharaList_func[key].sp.function = spf[key]
    })

    return CharaList_func
}

//const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
