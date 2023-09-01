import { charaList } from "./characters.js"
import { app } from "./database.js"
import { gameModify } from "./game.js"
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

/**
 * Cała lista Gwiezdnych Mocy
 */
const spf = {
    habby: function () {
        let hpCh = gameModify.getColab().you.hp.setPrectange(90, true)

        for (let i = 0; i < gameModify.getColab().you.atk.getLenght(); i++) {
            gameModify.getColab().you.atk.setValue(gameModify.getColab().you.atk.getValue(i) - hpCh / 2, i)
        }

        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    rycerzOceanu: function () {
        gameModify.getColab().you.hp.setPrectange(107, true)
        gameModify.getColab().you.JSON.change({
            critChance: gameModify.getColab().you.JSON.get("critChance") * 0.9,
        })
        gameModify.getColab().you.atk.setPrectange(115, "random")

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
        gameModify
            .getColab()
            .you.hp.setValue(
                gameModify.getColab().you.hp.get() +
                    gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue(0)).atk,
                false
            )
        gameModify.getColab().endSP()
    },
    glalirthor: function () {
        gameModify.getColab().you.atk.setPrectange(180, "all")
        gameModify.spSounds.magic.currentTime = 0
        gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    sylwestrowyOctane: function () {
        var atk = gameModify.calc(
            0,
            Math.round(Math.random() * 18) * 500 + 3500,
            Math.round(Math.random() * 50) / 10 + 1,
            gameModify.getColab().you.getLevel()
        )
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
    theChosenOne: function () {
        for (let i = 0; i < 20; i++)
            setTimeout(() => {
                gameModify
                    .getColab()
                    .enemy.attack(
                        gameModify
                            .getColab()
                            .you.atk.getValue(
                                Math.floor(Math.random() * (gameModify.getColab().you.atk.getLenght() - 1))
                            )
                    )
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
                    gameModify
                        .getColab()
                        .enemy.attack(gameModify.calc(0, 150, 3, gameModify.getColab().you.getLevel() + 3))
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
    },
    havier: function () {
        gameModify.getColab().enemy.crit.change(400)

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
            c: Math.round(Math.random() * 5) <= 2,
        }
        var orange = {
            a: gameModify.calc(0, 1500, 4.1, a(2)),
            c: Math.round(Math.random() * 7) <= 5,
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
    kiranaYonome: function () {
        get(ref(getDatabase(app), `starcie-internetu/followersApiInfo/ky`)).then((snpsht) => {
            gameModify
                .getColab()
                .enemy.attack(
                    gameModify.calc(
                        0,
                        snpsht.val() / (Math.round(Math.random() * 30) + 1),
                        3.2,
                        gameModify.getColab().you.getLevel()
                    )
                )
            gameModify.spSounds.uAttack.currentTime = 0
            gameModify.spSounds.uAttack.play()
            gameModify.getColab().endSP()
        })
    },
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
                gameModify
                    .getColab()
                    .enemy.attack(
                        gameModify.calc(0, 350, 5, gameModify.getColab().you.getLevel()) *
                            (Math.round(Math.random() * 11) + 1)
                    )

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
                btp:
                    gameModify.getColab().playersLevel()[gameModify.getColab().type] +
                    2 * gameModify.getColab().you.getLevel(),
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
                            gameModify.calc(
                                0,
                                snacksInfo[acctualNum].heal[0],
                                snacksInfo[acctualNum].heal[1],
                                gameModify.getColab().you.getLevel()
                            ),
                        false
                    )
            }
            if ("atk" in snacksInfo[acctualNum]) {
                gameModify.getColab().you.atk.setPrectange(snacksInfo[acctualNum].atk[0], snacksInfo[acctualNum].atk[1])
            }
            if ("def" in snacksInfo[acctualNum]) {
                JSONN.critChance =
                    gameModify.getColab().you.JSON.get("critChance") -
                    gameModify.calc(
                        1,
                        snacksInfo[acctualNum].def[0],
                        snacksInfo[acctualNum].def[1],
                        gameModify.getColab().you.getLevel()
                    )
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
