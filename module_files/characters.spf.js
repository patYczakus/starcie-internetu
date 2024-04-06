import { getCharaList } from "./characters.js"
import { app } from "./database.js"
import { gameModify } from "./game.js"
import { atkFromBtp } from "./listsAndOtherFunctions.js"
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"

/**
 *
 * @param {HTMLAudioElement} audio
 * @returns {boolean}
 */
var isPlaying = function (audio) {
    if (!audio || typeof audio !== "object" || !audio instanceof HTMLAudioElement) throw console.error('[DEBUG] Parametr "audio" nie jest klasą HTMLAudioElement')
    return audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2
}

/**
 * Cała lista Gwiezdnych Mocy
 */
const spf = {
    // stin
    habby: function () {
        let hpCh = gameModify.getColab().you.hp.setPrectange(85, true)

        var l = gameModify.getColab().you.atk.getLenght()
        for (let i = 0; i < l; i++) {
            gameModify.getColab().you.atk.setValue(gameModify.getColab().you.atk.getValue(i) - (hpCh / (l + 1)) * (i + 1), i)
        }
        console.log("[DEBUG/game/habby] Wartości ataków: ", gameModify.getColab().you.atk.getValue("all"))

        gameModify.spSounds.magic.currentTime = 0
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    rycerzOceanu: function () {
        gameModify.getColab().you.hp.setPrectange(127, true)
        gameModify.getColab().you.JSON.change({
            critChance: gameModify.getColab().you.JSON.get("critChance") * 0.85,
        })
        gameModify.getColab().you.atk.setPrectange(118, "random")
        gameModify.getColab().you.atk.setPrectange(105, "all")

        gameModify.spSounds.magic.currentTime = 0
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
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
            const LVL = gameModify.getColab().you.getLevel()

            gameModify.getColab().you.JSON.set({
                points: 25,
                name: "trajom",
                critChance: gameModify.calcCritChance("trajom", LVL, gameModify.getColab().enemy.name()) * 1.06,
                health: gameModify.calc(0, 1000, 2.15, LVL),
                atk: getCharaList().trajom.battle.map((x, i) => gameModify.calc(0, atkFromBtp(x.points), getCharaList().trajom.level_up.battle[i], LVL)),
                spUses: 0,
                lvl: LVL,
                spHave: false,
            })

            gameModify.spSounds.vanish.currentTime = 0
            if (!isPlaying(gameModify.spSounds.vanish)) gameModify.spSounds.vanish.play()

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
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    haker1000: function () {
        console.log(`[DEBUG/game/haker1000] Sprawdzanie nazwy: ${gameModify.getColab().enemy.name()}\n    Typ: ${typeof spf[gameModify.getColab().enemy.name()]}`)
        gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() - gameModify.calc(0, 100, 2.3, gameModify.getColab().you.getLevel()))
        spf[gameModify.getColab().enemy.name()]()
        if (Math.round() < 0.1) {
            const maxHP = Number(
                document
                    .querySelector(`div#game.match div[gameplay="${gameModify.getColab().type == "player" ? "bot" : "player"}"] div.healthBar div.health`)
                    .getPropertyValue("--healthMax")
            )
            const aHP = gameModify.getColab().you.hp.get()

            gameModify.getColab().you.hp.set(maxHP, true)
            gameModify.getColab().you.hp.set(aHP, false)
        }
        if (gameModify.getColab().you.JSON.get("spUses") >= getCharaList()[gameModify.getColab().enemy.name()].sp.maxUses) {
            gameModify.getColab().setTimeoutInMoves("end", 1, (type) => {
                gameModify.getColab(type).you.JSON.change({ spUses: Infinity })
                gameModify.spSounds.magic.currentTime = 0
                if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
            })
        }
    },
    starlight: function () {
        const BTP = Math.min(gameModify.getColab().you.JSON.get("points"), 500)
        const stats = {
            hpAdd: gameModify.calc(0, BTP * 2, 2.3, gameModify.getColab().you.getLevel()),
            atkPrecSet: 10 + (BTP - 200) * 0.3,
            atkTO: gameModify.calc(0, 250, 1.8532, gameModify.getColab().you.getLevel()),
        }
        if (getCharaList()[gameModify.getColab().enemy.name()].dimension === "Gang Sokołów") var multiplier = 1.3
        else if (getCharaList()[gameModify.getColab().enemy.name()].dimension === "HoYoverse") var multiplier = 0.8
        else var multiplier = 1

        gameModify.getColab().setTimeoutInMoves("each", Infinity, (type, rm) => {
            var playsound = false
            if (rm % (3 + Math.floor(BTP / 60)) === 0) {
                gameModify.getColab(type).you.hp.setValue(gameModify.getColab(type).you.hp.get() + Math.round(stats.hpAdd * multiplier))
                playsound = true
            }
            if (BTP >= 200 && rm % 5 === 0) {
                gameModify.getColab(type).you.atk.setPrectange(100 + Math.round(stats.atkPrecSet * multiplier), "random")
                playsound = true
            }
            if (BTP === 500 && Math.random() > 0.3) {
                gameModify.getColab(type).enemy.attack(Math.round(stats.atkTO * multiplier))
                playsound = true
            }

            if (playsound) {
                gameModify.spSounds.galaxyMagic.currentTime = 0
                if (!isPlaying(gameModify.spSounds.galaxyMagic)) gameModify.spSounds.galaxyMagic.play()
            }
        })

        gameModify.getColab().you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") - BTP })

        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()

        gameModify.getColab().endSP()
    },
    naładowanaAva: function () {
        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        setTimeout(() => {
            gameModify.spSounds.alarm.currentTime = 0
            if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        }, 1000)
        setTimeout(() => {
            gameModify.getColab().you.atk.setPrectange(124, 1)
            gameModify.getColab().you.atk.setPrectange(124, 2)

            const data = gameModify.getColab().enemy.attack(gameModify.calc(0, 2345, 3.8, gameModify.getColab().you.getLevel()))
            var prec = Math.random() * 0.25 + 0.25
            gameModify.getColab().you.JSON.change({
                points: gameModify.getColab().you.JSON.get("points") + Math.round(gameModify.getColab().enemy.JSON.get("points") * prec),
            })
            gameModify.getColab().enemy.JSON.change({
                points: Math.round(gameModify.getColab().enemy.JSON.get("points") * (1 - prec)),
                critChance: gameModify.getColab().enemy.JSON.get("critChance") + 35 * data.crit,
            })

            gameModify.spSounds.uAttack.currentTime = 0
            if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
            gameModify.getColab().endSP()
        }, 2000)
    },

    // rl
    sylwestrowyOctane: function () {
        var atk = gameModify.calc(0, Math.round(Math.random() * 20) * 500 + 4000, Math.round(Math.random() * 450) / 100 + 1.5, gameModify.getColab().you.getLevel())
        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()

        if (Math.random() < 0.25 + 0.15 * getCharaList()[gameModify.getColab().enemy.name()].tags.includes("tanker"))
            setTimeout(() => {
                gameModify.spSounds.uAttack.currentTime = 0
                if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
                gameModify.getColab().enemy.attack(atk)
                gameModify.getColab().endSP()
            }, 500)
        else
            setTimeout(() => {
                gameModify.spSounds.miss.currentTime = 0
                if (!isPlaying(gameModify.spSounds.miss)) gameModify.spSounds.miss.play()
                gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() - atk * 0.13, false)
                gameModify.getColab().endSP()
            }, 1000)
    },
    platynowyDominus: function () {
        gameModify.getColab().you.atk.setPrectange(119, "all")
        gameModify.getColab().you.JSON.change({ critChance: 0 })
        gameModify.getColab().enemy.crit.change(gameModify.getColab().enemy.crit.get() * 1.27)

        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        gameModify.getColab().endSP()
    },
    zimowyHotshot: function () {
        gameModify.getColab().enemy.attack(gameModify.calc(0, 500, 1.85, gameModify.getColab().you.getLevel()))
        gameModify.getColab().endSP()
    },
    galaktycznyMasamune: function () {
        var atk = gameModify.calc(0, 692, 2.312, gameModify.getColab().you.getLevel())
        if (gameModify.getColab().you.JSON.get("spUses") == 3) {
            atk *= 2
        }
        const atkInfo = gameModify.getColab().enemy.attack(atk)

        gameModify.getColab().you.atk.setPrectange(175, "all")
        gameModify.getColab().setTimeoutInMoves("end", 2, () => {
            gameModify.getColab().you.atk.setPrectange(100 / 1.75, "all")

            gameModify.spSounds.vanish.currentTime = 0
            if (!isPlaying(gameModify.spSounds.vanish)) gameModify.spSounds.vanish.play()
        })
        if (gameModify.getColab().you.JSON.get("spUses") == 1) {
            const a = gameModify.getColab().you.JSON.get("critChance")
            gameModify.getColab().you.JSON.change({ critChance: 0 })
            gameModify.getColab().setTimeoutInMoves("end", 5, () => {
                gameModify.getColab().you.JSON.change({ critChance: a })

                gameModify.spSounds.magic.currentTime = 0
                if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
            })
        }
        if (gameModify.getColab().you.JSON.get("spUses") == 2) {
            gameModify.getColab().you.JSON.change({ points: Math.round(atkInfo.atk * 0.1) })
            gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + Math.round(atkInfo.atk * 0.12), false)
        }

        gameModify.spSounds.uAttack.currentTime = 0
        if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()

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
                        gameModify.getColab(type).you.hp.get() + gameModify.getColab(type).enemy.attack(gameModify.calc(0, 100, 2.5, gameModify.getColab(type).you.getLevel())).atk,
                        false
                    )
                gameModify.spSounds.regen.currentTime = 0
                if (!isPlaying(gameModify.spSounds.regen)) gameModify.spSounds.regen.play()
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
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()

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
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
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
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
        setTimeout(() => {
            gameModify.spSounds.alarm.currentTime = 0
            if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        }, 2000)
        setTimeout(() => {
            gameModify.spSounds.uAttack.currentTime = 0
            if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
            gameModify.getColab().enemy.attack(gameModify.calc(0, 3000, 3.65, gameModify.getColab().you.getLevel()))
            gameModify.getColab().endSP()
        }, 3000)
    },
    havier: function () {
        gameModify.getColab().enemy.attack(gameModify.calc(0, 500, 3, gameModify.getColab().you.getLevel()))
        gameModify.getColab().enemy.crit.change(1000)
        gameModify.getColab().setTimeoutInMoves("end", 2, (t) => {
            if (!(gameModify.getColab().enemy.name() === "trajom" && gameModify.getColab().enemy.JSON.get("spUses") > 0)) {
                gameModify.getColab(t).enemy.crit.change(750)

                gameModify.spSounds.regen.currentTime = 0
                if (!isPlaying(gameModify.spSounds.regen)) gameModify.spSounds.regen.play()
            }
        })
        gameModify.getColab().setTimeoutInMoves("end", 5, (t) => {
            if (!(gameModify.getColab().enemy.name() === "trajom" && gameModify.getColab().enemy.JSON.get("spUses") > 0)) {
                gameModify.getColab(t).enemy.crit.change(500)

                gameModify.spSounds.regen.currentTime = 0
                if (!isPlaying(gameModify.spSounds.regen)) gameModify.spSounds.regen.play()
            }
        })

        gameModify.spSounds.uAttack.currentTime = 0
        if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
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
            if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()

            gameModify.getColab().enemy.attack(gameModify.getColab().you.hp.get() * 1.21)
            gameModify.getColab().you.hp.setPrectange(100 / 1.21, false)
        }, 1300)
        setTimeout(() => {
            gameModify.getColab().endSP()
        }, 1800)
    },
    chromo: function () {
        gameModify.getColab().you.atk.setPrectange(175, "all")
        gameModify.spSounds.magic.currentTime = 0
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
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
            a: gameModify.calc(0, 1500, 4.1, a(1)),
            c: Math.round(Math.random() * 11) + 1 <= 5,
        }

        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        setTimeout(() => {
            gameModify.getColab().enemy.attack(blue.a * blue.c + orange.a * orange.c)

            if (blue.c || orange.c) {
                gameModify.spSounds.uAttack.currentTime = 0
                if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
            } else {
                gameModify.spSounds.miss.currentTime = 0
                if (!isPlaying(gameModify.spSounds.miss)) gameModify.spSounds.miss.play()
            }
            gameModify.getColab().endSP()
        }, 1000)
    },
    szymekDymek: function () {
        gameModify.getColab().you.atk.setPrectange(115, "last")
        gameModify.getColab().setTimeoutInMoves("each", Infinity, (type, rm) => {
            gameModify.getColab(type).you.JSON.change({ points: gameModify.getColab(type).you.JSON.get("points") + Math.round(Math.abs(Math.sin(rm * 5) * 15)) })
            gameModify
                .getColab(type)
                .you.hp.setValue(
                    gameModify.getColab(type).you.hp.get() + gameModify.calc(0, 40 + Math.sin(rm) * 30, 1.5 + Math.sin(rm / 4) * 0.5, gameModify.getColab(type).you.getLevel()),
                    false
                )

            var chance = Math.round(Math.random() * 99) + 1
            console.log(`[DEBUG/game/szymekDymek] Szansa postaci wynosi ${chance}%`)
            if (chance >= 90) {
                gameModify.spSounds.tractor.horn.currentTime = 0
                if (!isPlaying(gameModify.spSounds.tractor.horn)) gameModify.spSounds.tractor.horn.play()
                gameModify.getColab(type).enemy.attack(gameModify.calc(0, 75, 1.95, gameModify.getColab(type).you.getLevel()))
            }
        })

        gameModify.spSounds.tractor.start.volume = 1
        gameModify.spSounds.tractor.start.currentTime = 0
        if (!isPlaying(gameModify.spSounds.tractor.start))
            gameModify.spSounds.tractor.start.play().then(() => {
                setTimeout(() => {
                    gameModify.spSounds.tractor.start.volume = 0.2
                }, 3000)
            })
        gameModify.getColab().endSP()
    },
    młody: function () {
        gameModify.spSounds.magic.currentTime = 0
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
        gameModify.getColab().you.atk.setPrectange(116, "all")
        if (gameModify.getColab(type).you.JSON.get("spUses") == 1) {
            setTimeout(() => {
                const card = Math.round(gameModify.getColab().you.atk.getValue(0) * 1.3)
                const num = Math.round(Math.random() * 3)
                if (num == 0) {
                    gameModify.spSounds.miss.currentTime = 0
                    if (!isPlaying(gameModify.spSounds.miss)) gameModify.spSounds.miss.play()
                } else {
                    if (num == 3) {
                        gameModify.spSounds.uAttack.currentTime = 0
                        if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
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
                        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
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
            const catPower = () => gameModify.calc(0, Math.random() * 5 + 1, 2, gameModify.getColab().you.getLevel() + 2)
            const wsciekliznaBlocks = ["snackowyAdmin", "kiranaYonome"]

            gameModify.spSounds.alarm.currentTime = 0
            if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
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
        if (!isPlaying(gameModify.spSounds.discord.userMoved)) gameModify.spSounds.discord.userMoved.play()
        gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + gameModify.calc(0, 50, 2, gameModify.getColab().you.getLevel()))
        gameModify.getColab().you.atk.setPrectange(103, "all")
        gameModify.getColab().you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") + 10 })

        gameModify.getColab().endSP()
    },
    agatea: function () {
        var womanCharacters = ["kira", "starlight", "kiranaYonome", "ayandaRisu", "ameliaWatson", "gabrysiaSotoła", "topazAndNumby"]

        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()

        setTimeout(() => {
            gameModify.getColab().enemy.attack(gameModify.calc(0, 2000, 4, gameModify.getColab().you.getLevel()))
            gameModify.spSounds.uAttack.currentTime = 0
            if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()

            if (!womanCharacters.includes(gameModify.getColab().enemy.name())) {
                const shurikensAmount = Math.floor(Math.random() * 3) + 2
                for (var i = 0; i < shurikensAmount; i++) {
                    setTimeout(() => {
                        gameModify.getColab().enemy.attack(gameModify.calc(0, 300, 2.4612, gameModify.getColab().you.getLevel()))
                        gameModify.getColab().enemy.crit.change(gameModify.getColab().enemy.crit.get() + 25)
                    }, i * 100 + 500)
                }
                setTimeout(() => {
                    gameModify.getColab().endSP()
                }, shurikensAmount * 100 + 500)
            } else {
                gameModify.getColab().endSP()
            }
        }, 1000)
    },
    kruczaWładczyniNekro: function () {
        const chances = [
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "sushi",
            "szczecin",
            "szczecin",
            "szczecin",
            "szczecin",
            "szczecin",
            "kebab",
        ]

        setTimeout(() => {
            switch (chances[Math.floor(Math.random() * chances.length)]) {
                case "sushi":
                    if (gameModify.getColab().you.hp.factor < 0.5)
                        gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + gameModify.calc(0, 250, 1.95, gameModify.getColab().you.getLevel()))
                    else gameModify.getColab().you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") + 15 })
                    break
                case "szczecin":
                    gameModify.getColab().you.hp.setPrectange(123, true)
                    gameModify.getColab().you.hp.setPrectange(100 / 1.23, false)
                    gameModify.getColab().you.atk.setPrectange(105, "random")
                    break
                case "kebab":
                    gameModify.getColab().setTimeoutInMoves("each", 5, (type) => {
                        gameModify.getColab(type).you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") + 5 })
                    })
                    gameModify.getColab().setTimeoutInMoves("end", 5, (type) => {
                        gameModify.getColab(type).you.atk.setPrectange(50, "all")
                    })
                    gameModify.getColab().you.hp.setPrectange(120, true)
                    gameModify.getColab().you.atk.setPrectange(200, "all")
                    break
            }

            gameModify.spSounds.num_num_num.currentTime = 0
            if (!isPlaying(gameModify.spSounds.num_num_num)) gameModify.spSounds.num_num_num.play()
            gameModify.getColab().endSP()
        }, 200)
    },
    fobix: function () {
        gameModify.spSounds.imagination.currentTime = 0
        if (!isPlaying(gameModify.spSounds.imagination)) gameModify.spSounds.imagination.play()
        gameModify.getColab().you.atk.setPrectange(260, "all")
        gameModify.getColab().you.JSON.change({
            critChance: 0,
        })
        gameModify.getColab().setTimeoutInMoves("each", 10, (type) => {
            gameModify.getColab(type).enemy.attack(Math.max(Math.round(gameModify.getColab(type).enemy.hp.value() * 0.035), 100 * gameModify.getColab().you.getLevel()))
        })
        gameModify.getColab().setTimeoutInMoves("end", 10, (type) => {
            const LVL = Math.max(gameModify.getColab(type).you.getLevel() - 2, 1)

            gameModify.getColab(type).you.JSON.set({
                points: 0,
                name: "fobix",
                critChance: gameModify.calcCritChance("fobix", LVL, gameModify.getColab(type).enemy.name()) * 1.15,
                health: Math.round(gameModify.calc(0, getCharaList().fobix.hp, getCharaList().fobix.level_up.hp, LVL) * 0.7645),
                atk: getCharaList().fobix.battle.map((x, i) => gameModify.calc(0, atkFromBtp(x.points), getCharaList().fobix.level_up.battle[i], LVL)),
                spUses: 0,
                lvl: LVL,
                spHave: false,
            })

            gameModify.spSounds.vanish.currentTime = 0
            if (!isPlaying(gameModify.spSounds.vanish)) gameModify.spSounds.vanish.play()
        })
        gameModify.getColab().endSP()
    },

    // pokemon
    pikachu: function () {
        gameModify.getColab().you.hp.setPrectange(200, true)

        gameModify.getColab().you.atk.setPrectange(125, "random")
        gameModify.getColab().you.atk.setPrectange(125, "random")

        gameModify.getColab().you.hp.setPrectange(50, false)

        gameModify.spSounds.magic.currentTime = 0
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
        gameModify.getColab().endSP()
    },
    lunatone: function () {
        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        setTimeout(() => {
            gameModify.spSounds.alarm.currentTime = 0
            if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        }, 1000)
        setTimeout(() => {
            gameModify.spSounds.alarm.currentTime = 0
            if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        }, 2000)
        setTimeout(() => {
            gameModify.getColab().you.hp.setPrectange(107, true)
            gameModify.getColab().you.atk.setPrectange(104, "all")

            gameModify.getColab().enemy.attack(gameModify.calc(0, 1100, 3.43, gameModify.getColab().you.getLevel()))

            gameModify.spSounds.uAttack.currentTime = 0
            if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()

            gameModify.getColab().endSP()
        }, 3000)
    },
    snorlax: function () {
        gameModify.getColab().you.atk.setPrectange(300, "all")
        gameModify.getColab().you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") + 150 })
        gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + gameModify.calc(0, 500, 2.4, gameModify.getColab().you.getLevel()), false)

        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()

        gameModify.getColab().endSP()
    },

    // vtuberzy
    kiranaYonome: function () {
        get(ref(getDatabase(app), `starcie-internetu/followersApiInfo/ky`)).then((snpsht) => {
            var attack = () => {
                return gameModify.calc(0, Math.round(Math.random() * 4) + 6, 2.7, gameModify.getColab().you.getLevel())
            }
            console.log(`[DEBUG/game/kiranaYonome] Ilość obserwujących: ${snpsht.val()}, przewidywana ilość ruchów: ${Math.floor(snpsht.val() / 5)}`)

            gameModify.spSounds.alarm.currentTime = 0
            if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
            gameModify.getColab().setTimeoutInMoves("each", Math.floor(snpsht.val() / 5), (type) => {
                for (let i = 0; i < 5; i++)
                    setTimeout(() => {
                        gameModify.getColab(type).enemy.attack(attack())
                    }, i * 100)
                gameModify.getColab(type).analyzeTheEnd()
            })
            gameModify.getColab().setTimeoutInMoves("end", Math.floor(snpsht.val() / 5), (type) => {
                for (let i = 0; i < snpsht.val() % 5; i++)
                    setTimeout(() => {
                        gameModify.getColab(type).enemy.attack(attack())
                    }, i * 100)
                gameModify.getColab(type).analyzeTheEnd()
            })
            gameModify.getColab().endSP()
        })
    },
    ayandaRisu: function () {
        gameModify.getColab().setTimeoutInMoves("each", Infinity, (type, rm) => {
            if (gameModify.getColab(type).you.hp.factor() < 0.07 || (rm % 2 === 0 && gameModify.getColab(type).enemy.JSON.get("points") * Math.random() > 60)) {
                gameModify
                    .getColab(type)
                    .you.hp.setValue(
                        gameModify.getColab(type).you.hp.get() +
                            Math.round(gameModify.getColab(type).enemy.attack(gameModify.calc(0, 750, 3, gameModify.getColab(type).you.getLevel())).atk * 0.05),
                        true
                    )
                gameModify.getColab(type).setTimeoutInMoves("end", 1, () => {
                    gameModify.getColab(type).enemy.attack(gameModify.calc(0, 50, 1.5, gameModify.getColab(type).you.getLevel()))
                })

                gameModify.spSounds.uAttack.currentTime = 0
                if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
            }
        })

        gameModify.spSounds.alarm.currentTime = 0
        if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
        gameModify.getColab().endSP()
    },
    ameliaWatson: function () {
        Promise.all(
            ["tokyo", "new+york", "jakarta"].map(async (x) => {
                var test = await (await fetch(`http://api.weatherapi.com/v1/current.json?key=571cdb4aa8ae48a2a1e173255232509&q=${x}&aqi=no`)).json()
                const val = Math.round((test.current.temp_f - Math.max(test.current.temp_c * 0.8, 0)) * (100 - test.current.cloud))
                console.log(`[DEBUG/game/ameliaWatson] Pobrano z argumentem q=${x}, wartość ataku: ${val}`)
                return val
            })
        ).then((data) => {
            var maxAtkValue = Math.max(...data)

            gameModify.spSounds.magic.currentTime = 0
            if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
            setTimeout(() => {
                var before = gameModify.getColab().enemy.crit.get()
                gameModify.getColab().enemy.crit.change(Math.max(before, 750))
                gameModify.getColab().enemy.attack(gameModify.calc(0, maxAtkValue, 2.532496, gameModify.getColab().you.getLevel()))

                gameModify.spSounds.uAttack.currentTime = 0
                if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
                gameModify.getColab().enemy.crit.change(before)

                gameModify.getColab().endSP()
            }, 1500)
        })
    },
    gawrGura: function () {
        if (gameModify.getColab().you.JSON.get("spUses") == 1) {
            gameModify.getColab().you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") + gameModify.getColab().enemy.JSON.get("points") })
            gameModify.getColab().enemy.JSON.change({ points: 0 })
        } else {
            gameModify.getColab().enemy.attack(gameModify.getColab().you.atk.getValue("last"))
        }
        gameModify.spSounds.gg_a.currentTime = 0
        if (!isPlaying(gameModify.spSounds.gg_a))
            gameModify.spSounds.gg_a.play().then(() =>
                setTimeout(() => {
                    gameModify.getColab().endSP()
                }, gameModify.spSounds.gg_a.duration)
            )
    },

    // celebryci
    elsiAdajew: function () {
        if (Math.round() <= 0.25 || gameModify.getColab().you.JSON.get("spUses") % 5 === 0) {
            gameModify.getColab().you.JSON.change({ points: gameModify.getColab().you.JSON.get("points") + 20 })
        }
        const HP = Math.round(Math.pow(1.8, gameModify.getColab().you.getLevel()) * 340)
        gameModify.getColab().you.hp.setValue(gameModify.getColab().you.hp.get() + HP)
        gameModify.spSounds.num_num_num.currentTime = 0
        if (!isPlaying(gameModify.spSounds.num_num_num)) gameModify.spSounds.num_num_num.play()

        gameModify.getColab().endSP()
    },
    kacperRietz: function () {
        var atk = gameModify.calc(0, 500, 2.805, gameModify.getColab().you.getLevel())
        gameModify.getColab().enemy.attack(atk)
        gameModify.spSounds.uAttack.currentTime = 0
        if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()

        gameModify.getColab().setTimeoutInMoves("each", 15, (type, move) => {
            const index = [
                null,
                atk * 0.9,
                atk * 0.9,
                atk * 0.5,
                atk * 0.5,
                atk * 0.5,
                atk * 0.5,
                atk * 0.5,
                atk * 0.2,
                atk * 0.2,
                atk * 0.2,
                atk * 0.2,
                atk * 0.2,
                atk * 0.2,
                atk * 0.2,
                atk * 0.2,
            ]

            gameModify.getColab().enemy.attack(Math.ceil(index[move]))
        })

        gameModify.getColab().endSP()
    },

    // sokołów
    gabrysiaSotoła: function () {
        //console.log(gameModify.getColab().you.JSON.get(""), gameModify.getColab().you.JSON.get("spUses"))
        if (gameModify.getColab().you.JSON.get("spUses") == 1) {
            gameModify.getColab().you.atk.setPrectange(125, "all")
            gameModify.getColab().you.hp.setPrectange(90, true)

            gameModify.spSounds.magic.currentTime = 0
            if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()
            gameModify.getColab().endSP()
        } else {
            gameModify.getColab().you.atk.setPrectange(80, "all")

            setTimeout(() => {
                gameModify.spSounds.alarm.currentTime = 0
                if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
            }, 2000)
            setTimeout(() => {
                gameModify.spSounds.alarm.currentTime = 0
                if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
            }, 3000)
            setTimeout(() => {
                gameModify.spSounds.alarm.currentTime = 0
                if (!isPlaying(gameModify.spSounds.alarm)) gameModify.spSounds.alarm.play()
            }, 4000)
            setTimeout(() => {
                gameModify.getColab().enemy.attack(gameModify.calc(0, 350, 5, gameModify.getColab().you.getLevel()) * (Math.round(Math.random() * 11) + 1))

                gameModify.spSounds.uAttack.currentTime = 0
                if (!isPlaying(gameModify.spSounds.uAttack)) gameModify.spSounds.uAttack.play()
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
            if (!isPlaying(gameModify.spSounds.num_num_num)) gameModify.spSounds.num_num_num.play()
        } else {
            gameModify.spSounds.miss.currentTime = 0
            if (!isPlaying(gameModify.spSounds.miss)) gameModify.spSounds.miss.play()
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
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()

        gameModify.getColab().setTimeoutInMoves(1, 5, (type) => {
            gameModify.spSounds.regen.currentTime = 0
            if (!isPlaying(gameModify.spSounds.regen)) gameModify.spSounds.regen.play()
            gameModify.getColab(type).you.hp.setValue(gameModify.getColab(type).you.hp.get() + gameModify.calc(0, 30, 1.95, gameModify.getColab(type).you.getLevel()))
        })
        gameModify.getColab().setTimeoutInMoves(0, 5, (type) => {
            gameModify.spSounds.miss.currentTime = 0
            if (!isPlaying(gameModify.spSounds.miss)) gameModify.spSounds.miss.play()
            gameModify.getColab(type).you.JSON.change(beforeUsed)
        })
        gameModify.getColab().endSP()
    },
    topazAndNumby: function () {
        const atk_minmax = [10 + gameModify.getColab().you.getLevel(), 40 + (gameModify.getColab().you.getLevel() - 1) * 2]
        const atkprec = Math.round(Math.random() * atk_minmax[1] - atk_minmax[0]) + atk_minmax[0]
        console.log(`[DEBUG/game/topazAndNumby] Procent ataków: ${atkprec} (przedział ${atk_minmax.join("-")}%)`)

        gameModify.getColab().you.atk.setPrectange(100 + atkprec, "all")
        gameModify.getColab().enemy.crit.change(gameModify.getColab().enemy.crit.get() * 2)

        gameModify.getColab().setTimeoutInMoves("end", 5, (type) => {
            gameModify.getColab(type).you.atk.setPrectange(11000 / (100 + atkprec), "all")
            if (
                getCharaList()[gameModify.getColab(type).enemy.name()].types.have.includes("Metal") ||
                getCharaList()[gameModify.getColab(type).enemy.name()].types.have.includes("Informatyka")
            ) {
                gameModify.getColab(type).enemy.attack(gameModify.calc(0, 400, 3.1, gameModify.getColab(type).you.getLevel()))
            } else {
                gameModify.spSounds.miss.currentTime = 0
                if (!isPlaying(gameModify.spSounds.miss)) gameModify.spSounds.miss.play()
            }
        })

        gameModify.spSounds.magic.currentTime = 0
        if (!isPlaying(gameModify.spSounds.magic)) gameModify.spSounds.magic.play()

        gameModify.getColab().endSP()
    },
}

/**
 * Funkcja łącząca zmiennę funkcjonalną z danymi postaci.
 * @returns Kompletna lista postaci
 */
export const createCharacterWithSPFunctions = function () {
    console.log(`[DEBUG] Ilość postaci: ${Object.keys(getCharaList()).length}`)
    var cl_func = getCharaList()
    Object.keys(getCharaList()).forEach((key) => {
        cl_func[key].sp.function = spf[key]
    })

    return cl_func
}

//const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
