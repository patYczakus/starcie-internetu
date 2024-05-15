import { app } from "./database.js"
import { getDatabase, ref, child, get, onValue, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
import { logOut } from "./login.js"
import { chest, classes, shortNumber, atkFromBtp } from "./listsAndOtherFunctions.js"
import { checkSettings, settingsList } from "./settingsFunction.js"
import { changeVolume, playSound, whatIsPlayed, skipMusic } from "./player.js"
import { langText } from "./lang.js"
import { createCharacterWithSPFunctions } from "./characters.spf.js"
import { interfaceImages } from "./otherImages.js"
import * as _jk from "https://patyczakus.github.io/javakit/module.js"
const JK = _jk.default,
    accualVersion = 4,
    database = getDatabase(app),
    characterDataVars = {
        name: ["lvl", "sp"],
        type: ["number", "boolean"],
    },
    healInfo = (who, lvl) =>
        Math.round(
            Math.pow(1.37 + 0.4 * characters_json[who].tags.includes("tanker") + 0.01 * classes.indexOf(characters_json[who].class), lvl - 1) *
                (500 + 200 * characters_json[who].tags.includes("ahealth"))
        ),
    create_matchSettings_structure = function () {
        return {
            player: {
                points: 0,
                lvl: 0,
                spHave: false,
                name: "",
                critChance: 100,
                health: 0,
                atk: [],
                spUses: 0,
            },
            bot: {
                points: 0,
                lvl: 0,
                spHave: false,
                name: "",
                critChance: 100,
                health: 0,
                atk: [],
                spUses: 0,
            },
            moves: 0,
        }
    }

var data = {
        version: accualVersion,
        coins: 1000,
        lvl: 1,
        tokens: 1,
        xp: 0,
        characters: {
            habby: "1|false",
        },
        settings: {},
    },
    texts = {},
    matchSettings = create_matchSettings_structure(),
    gmx = 0,
    characters_list_names = [],
    uidd,
    msBefore = {},
    audios = {
        counting: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/counting.mp3"),
        start: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/start.mp3"),
        attack: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/attack.wav"),
        criticalAttack: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/critical.wav"),
        punkty: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/exp.mp3"),
        heal: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/heal.mp3"),
        burza: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/burza.mp3"),
        sp: {
            magic: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/sp1.wav"),
            vanish: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/vanish.mp3"),
            alarm: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/alarm.mp3"),
            uAttack: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/uAttack.mp3"),
            miss: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/miss.mp3"),
            num_num_num: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/numnumnum.mp3"),
            regen: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/regen.mp3"),
            imagination: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/imagination.wav"),
            tractor: {
                start: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/starting-a-tractor.mp3"),
                horn: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/car-horn.mp3"),
            },
            discord: {
                userMoved: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/DiscordUM.mp3"),
            },
            galaxyMagic: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/galamagic.mp3"),
            gg_a: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/addtionals/gura.mp3"),
        },
    },
    gType = "home",
    gCheckedNum = {
        home: -1,
        settings: -1,
        match: -1,
    },
    gWhiteFlag = {
        want: false,
        clicks: 0,
    },
    showedCheck = false,
    frameBlock,
    gBlock = false,
    playerSPUser = "",
    characters_json = createCharacterWithSPFunctions(),
    spDurationFunction = [],
    /**
     * @type {miniAlert}
     */
    playedMiniAlert,
    playedMiniAlertInfo = {
        addedClickEvent: false,
        whatIsPlayed: "",
    },
    _forcePlay = false,
    gamepadMain = () => {}

function closeInfo() {
    document.querySelector("div#info").classList.remove("active")
    document.querySelector("div#info").classList.add("deactive")
    gType = "home"
}

function $saveFunction(gc) {
    if (frameBlock < 0 && !gBlock) {
        if (gc.buttons[9].pressed) {
            if (gType == "home") {
                createHome()
                if (showedCheck) document.querySelector("div#game.home img.canViewInfo.gChecked").classList.remove("gChecked")
                gType = "homeScreen"
            } else if (gType == "match") {
                gWhiteFlag.clicks++
                if (!gWhiteFlag.want) {
                    gWhiteFlag.want = true
                    setTimeout(() => {
                        gWhiteFlag.want = false
                        gWhiteFlag.clicks = 0
                    }, 1000)
                } else if (gWhiteFlag.clicks >= 3) endGame(2)
            }
        } else if (gc.buttons[5].pressed) {
            if (gType == "home") {
                gCheckedNum.home++
                gCheckedNum.home = gCheckedNum.home % document.querySelectorAll("div#game.home img.canViewInfo").length
                if (showedCheck) document.querySelector("div#game.home img.canViewInfo.gChecked").classList.remove("gChecked")
                document.querySelectorAll("div#game.home img.canViewInfo")[gCheckedNum.home].classList.add("gChecked")
                showedCheck = true
            }
            if (gType == "settings") {
                gCheckedNum.settings++
                gCheckedNum.settings = gCheckedNum.settings % document.querySelectorAll("div#info div.o div.set").length
                if (showedCheck) document.querySelector("div#info div.o div.set.gChecked").classList.remove("gChecked")
                document.querySelectorAll("div#info div.o div.set")[gCheckedNum.settings].classList.add("gChecked")
                showedCheck = true
            }
            if (gType == "match") {
                gCheckedNum.match++
                gCheckedNum.match = gCheckedNum.match % matchSettings.player.atk.length
                if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] button.atk.gChecked`).classList.remove("gChecked")
                document.querySelectorAll(`div#game.match div[gameplay="player"] button.atk`)[gCheckedNum.match].classList.add("gChecked")
                showedCheck = true
            }
        } else if (gc.buttons[4].pressed) {
            if (gType == "home") {
                gCheckedNum.home--
                if (gCheckedNum.home < 0) gCheckedNum.home = document.querySelectorAll("div#game.home img.canViewInfo").length - 1
                if (showedCheck) document.querySelector("div#game.home img.canViewInfo.gChecked").classList.remove("gChecked")
                document.querySelectorAll("div#game.home img.canViewInfo")[gCheckedNum.home].classList.add("gChecked")
                showedCheck = true
            }
            if (gType == "settings") {
                gCheckedNum.settings--
                if (gCheckedNum.settings < 0) gCheckedNum.settings = document.querySelectorAll("div#info div.o div.set").length - 1
                if (showedCheck) document.querySelector("div#info div.o div.gChecked").classList.remove("gChecked")
                document.querySelectorAll("div#info div.o div.set")[gCheckedNum.settings].classList.add("gChecked")
                showedCheck = true
            }
            if (gType == "match") {
                gCheckedNum.match--
                if (gCheckedNum.match < 0) gCheckedNum.match = matchSettings.player.atk.length - 1
                if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] button.atk.gChecked`).classList.remove("gChecked")
                document.querySelectorAll(`div#game.match div[gameplay="player"] button.atk`)[gCheckedNum.match].classList.add("gChecked")
                showedCheck = true
            }
        } else if (gc.buttons[0].pressed) {
            if (gType == "home") {
                if (showedCheck) {
                    createCharacterInfo(document.querySelectorAll("div#game.home img.canViewInfo")[gCheckedNum.home].id)
                    document.querySelector("div#game.home img.canViewInfo.gChecked").classList.remove("gChecked")
                    showedCheck = false
                    gType = "charaInfo"
                }
            }
            if (gType == "settings") {
                if (showedCheck) {
                    if (document.querySelectorAll("div#info div.o .settingType")[gCheckedNum.settings].value == "bool") {
                        data.settings[settingsList[gCheckedNum.settings].flag] = !data.settings[settingsList[gCheckedNum.settings].flag]
                        document.querySelectorAll("div#info div.o .setting")[gCheckedNum.settings].innerText = data.settings[settingsList[gCheckedNum.settings].flag] ? "✅" : "❌"
                        save(false)
                    }
                }
            }
            if (gType == "match") {
                if (matchSettings.player.spUses < characters_json[matchSettings.player.name].sp.maxUses && data.characters[matchSettings.player.name].sp) {
                    starPover("player")
                    if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] button.atk.gChecked`).classList.remove("gChecked")
                    showedCheck = false
                    gCheckedNum.match = -1
                }
            }
        } else if (gc.buttons[1].pressed) {
            if (gType == "charaInfo" || gType == "homeScreen") {
                document.querySelector("div#info").classList.remove("active")
                document.querySelector("div#info").classList.add("deactive")
                gType = "home"
            }
            if (gType == "settings") {
                createHome()
                showedCheck = false
                gType = "homeScreen"
            }
            if (gType == "chest") {
                document.querySelector("div#game.match").style.display = "none"
                changeVolume(70)
                gType = "homeScreen"
            }
            if (gType == "endScreen") {
                document.querySelector("div#game.match").style.display = "none"
                changeVolume(70)
                gType = "home"
            }
            if (gType == "match") {
                if (showedCheck && matchSettings.player.points >= characters_json[matchSettings.player.name].battle[gCheckedNum.match].points) {
                    fightFunctions.attack(gCheckedNum.match)
                }
            }
        } else if (gc.buttons[2].pressed) {
            if (gType == "match") {
                if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] div.btns button.atk.gChecked`).classList.remove("gChecked")
                fightFunctions.getBTP()
            }
            if (gType == "charaInfo") {
                let name = document.querySelector(`div#info div.o input#nameInfo`).value
                if (data.coins >= 5000 && !data.characters[name].sp) {
                    data.characters[name].sp = true
                    data.coins -= 5000
                    document.querySelector("div#info div.o").innerHTML = '<div class="loading small" style="margin: 30px"></div>'
                    save(false).then(() => {
                        if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
                        audios.punkty.currentTime = 0
                        audios.punkty.play()
                        new miniAlert(checkLanguage(langText.characterInfo.buy.sp, data.settings.lang)).show(2000)
                    })
                }
            }
        } else if (gc.buttons[3].pressed) {
            if (gType == "match") {
                if (gameModify.getColab("player").you.hp.factor() <= 0.75) {
                    if (matchSettings.player.points >= 25) {
                        fightFunctions.heal()
                        if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] div.btns button.atk.gChecked`).classList.remove("gChecked")
                        showedCheck = false
                        gCheckedNum.match = -1
                    }
                }
            }
            if (gType == "charaInfo") {
                let name = document.querySelector(`div#info div.o input#nameInfo`).value
                if (data.coins >= 1800 + classes.indexOf(characters_json[name].class) * 200 && data.characters[name].lvl < characters_json[name].max_lvl) {
                    data.characters[name].lvl++
                    data.coins -= 1800 + classes.indexOf(characters_json[name].class) * 200
                    document.querySelector("div#info div.o").innerHTML = '<div class="loading small" style="margin: 30px"></div>'
                    save(false).then(() => {
                        if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
                        audios.punkty.currentTime = 0
                        audios.punkty.play()
                        new miniAlert(checkLanguage(langText.characterInfo.buy.lvl, data.settings.lang).replace("{charaLVL}", data.characters[name].lvl)).show(4500)
                    })
                }
            }
        } else if (gc.buttons[12].pressed) {
            if (gType == "homeScreen") startMatch()
        } else if (gc.buttons[13].pressed) {
            if (gType == "homeScreen") createSettings()
        } else if (gc.buttons[14].pressed) {
            if (gType == "homeScreen") openChest()
        } else if (gc.buttons[15].pressed) {
            if (gType == "homeScreen") {
                logOut()
                gType = "home"
            }
        }
        if (gc.axes[3] >= 0.2 || gc.axes[3] <= -0.2) {
            if (gType == "charaInfo" || gType == "settings") {
                document.querySelector("div#info div.o").scroll({
                    top: document.querySelector("div#info div.o").scrollTop + gc.axes[3] * data.settings.scrollSpeed,
                })
            }
        }
        if (gc.axes[2] >= 0.2 || gc.axes[2] <= -0.2) {
            if (showedCheck)
                if (gType == "settings") {
                    if (document.querySelectorAll("div#info div.o .settingType")[gCheckedNum.settings].value.startsWith("num")) {
                        var step = data.settings.stepByStep ? 1 : Number(document.querySelectorAll("div#info div.o .settingType")[gCheckedNum.settings].value.split(/:/g)[3])
                        console.log(step + 0.1)

                        document.querySelectorAll("div#info div.o .setting")[gCheckedNum.settings].value =
                            Number(document.querySelectorAll("div#info div.o .setting")[gCheckedNum.settings].value) + Math.floor(gc.axes[2] / Math.abs(gc.axes[2])) * step
                        data.settings[settingsList[gCheckedNum.settings].flag] = Number(document.querySelectorAll("div#info div.o .setting")[gCheckedNum.settings].value)
                        save(false)
                    }
                }
        }
        if (gc.buttons[6].pressed && gc.buttons[7].pressed && gc.buttons[8].pressed && !gc.buttons[1].pressed) {
            gType = "home"
            new miniAlert(
                `Zresetowano lokalizację pada do głównego panelu (zbiór postaci). Staraj się przenieść myszką, jeżeli to możliwe.<br />Twardy reset zrobisz podobnie z przyciskiem <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_O_B}">`
            ).show(7000)
        }
        if (gc.buttons[6].pressed && gc.buttons[7].pressed && gc.buttons[8].pressed && gc.buttons[1].pressed) {
            document.body.innerHTML = '<div style="font-size: 200%; margin: 30px;">Przygotowanie do twardego resetu...<br /><div class="loading"></div></div>'
            save(false).then(() => {
                location.reload()
            })
        }
        frameBlock = data.settings.numberOfBlockFrames
    } else {
        frameBlock--
    }
}

/**
 * Dostaje kod ustawień
 * @returns {JSON}
 */
function getSettingData() {
    return data.settings
}

/**
 * Alert, ale za zasadzie dymku.
 */
export class miniAlert {
    /**
     * @param {String} text Wyświetlany tekst
     * @param {"info" | "error" | "musicPlayer"} type Typ dymku. Domyślnie jest wybrany typ **info**
     */
    constructor(text, type = String("info")) {
        this.text = text
        this.alertType = type
        this.showed = false
    }
    /**
     * Pokazuje na określony czas `miniAlert()`
     * @param {Number} time Czas (w milisekundach), może też być `Infinity`
     */
    show(time = Number(3000)) {
        var popup_info = document.getElementById("popup_info")
        popup_info.className = ""

        if (this.alertType == "info") {
            popup_info.style.color = "black"
        } else if (this.alertType == "error") {
            popup_info.style.color = "red"
        } else if (this.alertType == "musicPlayer") {
            popup_info.style.color = "black"
            popup_info.classList.add("musicPlayer")
        } else {
            return console.error(new Error("Unknown alert type"))
        }

        popup_info.innerHTML = this.text
        popup_info.classList.add("active")
        this.showed = true
        if (isFinite(time) && time > 0)
            setTimeout(() => {
                if (this.showed) {
                    popup_info.classList.remove("active")
                    this.showed = false
                }
            }, time)
    }
    /**
     * Zmienia tekst podczas uruchomienia
     * @param {String} text Tekst do zmiany
     */
    edit(text) {
        if (document.getElementById("popup_info").classList.contains("active")) document.getElementById("popup_info").innerHTML = text
        this.text = text

        return new miniAlert(this.text, this.alertType)
    }
    hide() {
        document.getElementById("popup_info").classList.remove("active")
        this.showed = false
    }
}

/**
 * Sprawdza język i zwraca tekst
 * @param {{ [lang: string]: string }} JSON Kod JSON języka
 * @param {string} language Odpowiednia proporcja językowa
 * @returns {string} Tekst zwrócony w tłumaczeniu lub w języku polskim (ewentualnie jeżeli wystąpi błąd)
 *
 * W razie błędów w kodzie zwraca `"[err#2DC]"`, wartość niestruktualną lub pierwszą z możliwych kluczy, jeżeli polski odpowiednik nie wystąpi
 */
function checkLanguage(JSON, language) {
    //console.log(JSON, language, typeof JSON)

    if (typeof JSON != "object") {
        if (typeof JSON == "undefined") {
            new miniAlert("[PL] Podczas analizy językowej wystąpił błąd<br />[EN] An error occurred during language analysis<br />#2DC1", "error").show(5000)
            console.error(`[DEBUG] Kod błędu: #2DC1\nKategoria: Błąd z kodem JSON języka\nArgumenty: typeof=undefined`)
            return "[err#2DC]"
        } else {
            console.warn(`[DEBUG] Kod błędu: #2DC0\nKategoria: Błąd z kodem JSON języka\nArgumenty: typeof=${typeof JSON} json=${JSON}`)
            return JSON
        }
    }

    if ("pl" in JSON) return language in JSON ? JSON[language] : JSON.pl
    else {
        new miniAlert("[PL] Podczas analizy językowej wystąpił błąd<br />[EN] An error occurred during language analysis<br />#L4P", "error").show(5000)
        console.error("[DEBUG] Kod błędu: #L4P\nKategoria: Błąd z kodem JSON języka")
        return JSON[Object.keys(JSON)[0]]
    }
}

playedMiniAlert = new miniAlert("", "musicPlayer")

/**
 * Rozpoczyna system gry
 * @param {FirebaseUID} uid ID gracza
 * @tags #core
 */
export function start(uid) {
    console.log("[DEBUG/user] ID użytkownika: ", uid)

    uidd = uid

    function second_task() {
        if (window.ptkdevvars) {
            window.ptkdevvars.getVars = function () {
                return {
                    f1: function () {
                        return data
                    },
                    f2: function () {
                        return matchSettings
                    },
                }
            }
        } else {
        }

        if (data.settings.resetFont) document.body.classList.add("resetFont")
        characters_list_names = Object.keys(characters_json)

        document.body.innerHTML = `
        <div id="popup_info"></div><div id="game" class="bar">
            <img width="23" height="23" draggable="false" src="${interfaceImages.money}" alt="🪙">
            ${data.coins}
            <button style="opacity: 0; width: 20px"></button>LVL: ?
            <button id="home" style="background:gray">
                🏠 
                <img draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_Start}">
            </button>
        </div>
        <div id="game" class="home"></div>
        <div id="info"><div class="t"></div><div class="o"></div></div>
        <div id="game" class="match"></div>`
        document.querySelector("div#info div.t").addEventListener("click", closeInfo)
        document.querySelector("div#game.bar #home").addEventListener("click", () => {
            createHome()
        })

        onValue(ref(database, `starcie-internetu/data/${uid}`), (snpsht) => {
            if (data.settings.resetFont && !document.body.classList.contains("resetFont")) document.body.classList.add("resetFont")
            if (!data.settings.resetFont && document.body.classList.contains("resetFont")) document.body.classList.remove("resetFont")
            if (data.settings.useGamepad)
                gamepadMain = () => {
                    $saveFunction(navigator.getGamepads()[0])
                }
            else gamepadMain = () => {}

            if (data.xp >= 10000) {
                data.xp -= 10000
                data.lvl++

                data.tokens++
                data.coins += 750 * Math.floor(data.lvl / 3)

                const alert = new miniAlert("Wbito kolejny poziom twojego konta!")
                alert.show(4000)
                return set(ref(database, `starcie-internetu/data/${uid}`), data)
            }

            data = snpsht.val()
            var _chara = {}
            Object.keys(data.characters).forEach((name) => {
                data.characters[name] = data.characters[name].split("|")
                console.log(`[DEBUG/datachange/${name}] Wykryto ${data.characters[name].length} wartości`)
                var helpVar = {}
                for (let i = 0; i < data.characters[name].length; i++) {
                    switch (characterDataVars.type[i]) {
                        case "number": {
                            helpVar[characterDataVars.name[i]] = Number(data.characters[name][i])
                            break
                        }
                        case "boolean": {
                            if (data.characters[name][i] === "true") helpVar[characterDataVars.name[i]] = true
                            else if (data.characters[name][i] === "false") helpVar[characterDataVars.name[i]] = false
                            else helpVar[characterDataVars.name[i]] = null
                            break
                        }
                        default: {
                            helpVar[characterDataVars.name[i]] = data.characters[name][i]
                        }
                    }
                }
                _chara[name] = helpVar
            })
            console.log(`[DEBUG/datachange] Zmieniono na kod JSON!`)
            data.characters = _chara

            document.querySelector(
                "#game.bar"
            ).innerHTML = `<img width="23" height="23" draggable="false" src="${interfaceImages.money}" alt="🪙"> ${data.coins}<button style="opacity: 0; width: 20px"></button>LVL ${data.lvl}<button style="opacity: 0; width: 5px"></button><span style="font-size: 60%">XP: ${data.xp}/10000</span> <button id="home" style="background:gray">🏠 <img  draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_Start}"></button>`
            document.querySelector("div#game.bar #home").addEventListener("click", () => {
                createHome()
            })
            index()

            framer()
        })
    }

    get(child(ref(database), `starcie-internetu/data/${uid}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                if (snapshot.val().version == accualVersion) data = snapshot.val()
                else {
                    data.lvl = snapshot.val().lvl
                    data.xp = snapshot.val().xp

                    var nJ = {
                        habby: "1|true",
                    }
                    Object.entries(snapshot.val().characters).forEach(([key]) => {
                        if (classes.indexOf(characters_json[key].class) >= 5) {
                            nJ[key] = "1|false"
                            if (snapshot.val().characters[key].endsWith("true")) data.coins += 5500
                        } else if (key != "habby") {
                            data.tokens++
                            if (snapshot.val().characters[key].endsWith("true")) data.coins += 4000
                        }
                    })

                    data.characters = nJ
                }

                data.version = accualVersion

                if (snapshot.val().settings.musicPlayerOn) playSound(true)

                data.settings = checkSettings(snapshot.val().settings).json
                frameBlock = data.settings.numberOfBlockFrames
            } else {
                data.settings = checkSettings(data.settings).json

                playSound(false)
            }

            changeVolume(10)

            //gfr
            set(ref(database, `starcie-internetu/data/${uid}`), data).then(() => {
                var images = Object.values(characters_json).map((a) => a.image)
                images.concat(...Object.values(interfaceImages))
                document.body.innerHTML = `<div class="info" style="margin: 20px"><div class="loading"></div><div A style="margin-top: -90px; margin-left: 135px; font-size: 150%">Ładowanie zdjęć...</div><div B style="margin-left: 120px;"></div></div>`
                setTimeout(() => {
                    if (document.querySelector("div.info div[B]") != null) {
                        var btn = document.createElement("button")
                        btn.innerText = "Pomiń ładowanie zdjęć"
                        btn.addEventListener("click", () => {
                            _forcePlay = true
                            changeVolume(100)
                            second_task()
                        })

                        document.querySelector("div.info div[B]").appendChild(btn)
                    } else {
                        console.log("[DEBUG] Niemożliwe jest danie przycisku dotyczącego pomijania ładowania. Możliwe więc, że załadowało.")
                    }
                }, 9000)

                console.time("[DEBUG] Czas załadowania")
                JK.HTMLFunctions.loadImages(images, (loaded) => {
                    var name = images[loaded]
                    if (typeof name == "string") {
                        name = name.split("/")
                        name = name[name.length - 1]
                    } else console.warn(`[DEBUG/images] Spotkano dziwną nazwę pliku`)
                    if (document.querySelector("div.info div[A]") != null)
                        document.querySelector("div.info div[A]").innerHTML = `Ładowanie zdjęć...<br />Załadowano ${loaded} z ${images.length}`
                    console.log(`[DEBUG/images] Załadowano zdjęcie nr. ${loaded} (${typeof name == "undefined" ? "new Image()" : name})`)
                }).then(() => {
                    console.log(`[DEBUG] Załadowano zdjęcia!`)
                    console.timeEnd("[DEBUG] Czas załadowania")
                    if (_forcePlay) return
                    changeVolume(100)
                    second_task()
                })
            })
        })
        .catch((err) => {
            console.error(err)
            document.body.innerHTML = `<div execute="loginForm">Wyłapano błąd! <button>Odśwież stronę</button></div>`
            document.querySelector(`div[execute="loginForm"] button`).addEventListener("click", () => {
                location.reload()
            })
        })
}

/** Buduje podstawowy panel z postaciami */
function index() {
    if (data.settings.useGamepad)
        document.querySelector("div#game.home").innerHTML = `<span style="font-size: 180%">${checkLanguage(langText.infoOnCharaList, data.settings.lang)}</span><br />`
    else document.querySelector("div#game.home").innerHTML = ``
    var text = ""
    var characters_have_list_names = Object.keys(data.characters)

    for (let i = 0; i < characters_list_names.length; i++) {
        if (characters_list_names[i] in data.characters)
            text += `<img draggable="false" id="${characters_list_names[i]}" class="character canViewInfo ${
                characters_json[characters_list_names[i]].class
            }" width="110" height="110" src="${characters_json[characters_list_names[i]].image}" />`
        else if (!data.settings.seeOnlyUnlocked)
            text += `<img draggable="false" class="character disabled" width="110" height="110" src="${characters_json[characters_list_names[i]].image}" />`
    }

    document.querySelector("div#game.home").innerHTML += text

    characters_have_list_names = Object.keys(data.characters)
    for (let i = 0; i < characters_have_list_names.length; i++) {
        // console.log(characters_list_names[i], characters_json[characters_list_names[i]].level_up)
        document.querySelector(`div#game.home img#${characters_have_list_names[i]}.canViewInfo`).addEventListener("click", () => {
            createCharacterInfo(characters_have_list_names[i])
        })
    }
}

/**
 * Generuje informacje postaci
 * @param {string} name Nazwa postaci
 * @tags #CharaInfo #CharacterInfo
 */
function createCharacterInfo(name) {
    console.log(`[DEBUG] Ogarnianie profilu postaci "${name}" (kod języka: ${data.settings.lang})`)

    var text = ""
    for (let ii = 0; ii < characters_json[name].battle.length; ii++) {
        var atkName = characters_json[name].battle[ii].name
        console.log(`[DEBUG] Typ nazwy ataku nr. ${ii}: ${typeof atkName}`)
        if (typeof atkName == "object") {
            if (!data.settings.forcedLang) console.log(`[DEBUG] Nie wymuszono tłumaczenia`)
            else console.log(`[DEBUG] Tłumaczenie...`)
            atkName = data.settings.forcedLang ? checkLanguage(atkName, data.settings.lang) : atkName.pl
        }

        text += `<tr>
        <td style="font-size: 145%">${atkName}</td>
        <td>
            ATK<br />
            <span 
                style="margin-left: 7px; margin-right: 5px; font-size: 115%"
            >
            ${shortNumber(
                gameModify.calc(0, atkFromBtp(characters_json[name].battle[ii].points), characters_json[name].level_up.battle[ii], data.characters[name].lvl),
                data.settings.lang
            )}
            </span>
        </td>
        <td>
            BPT<br />
            <span 
                style="margin-left: 7px; margin-right: 5px; font-size: 115%"
            >
                ${characters_json[name].battle[ii].points}
            </span>
        </td>
        </tr>`
    }
    console.log(`[DEBUG] Ogarnięto profil (1/3)`)

    texts[name] = text
    /**
     * @param {string[]} powlist
     */
    function translatePowers(powlist) {
        console.log(`[DEBUG] Analizowanie mocy (ilość: ${powlist.length})`)
        var l = []
        powlist.forEach((powstring) => {
            console.log(`[DEBUG/power] Sprawdzanie istnienia "${powstring}"`)
            l[l.length] = checkLanguage(langText.powers[powstring], data.settings.lang)
        })

        return l
    }

    document.querySelector("div#info div.o").innerHTML = `<input type="hidden" id="nameInfo" value="${name}" />
    <button id="close">
        ${checkLanguage(langText.btns.leave, data.settings.lang)}
        <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_O_B}">
    </button>`

    document.querySelector("div#info div.o").innerHTML += checkLanguage(langText.characterInfo.core, data.settings.lang)
        .replace("{ch_name}", `<span style="--fbs: 2px; font-size: 140%" class="classNameColor ${characters_json[name].class}">${name}</span>`)
        .replace("{ch_lvl}", data.characters[name].lvl)
        .replace("{ch_lvl.max}", characters_json[name].max_lvl)
        .replace("{ch_desc}", `<div id="descriptionxD">${checkLanguage(characters_json[name].description, data.settings.lang)}</div>`)
        .replace("{ch_dim}", characters_json[name].dimension)
        .replace("{ch_hp}", shortNumber(gameModify.calc(0, characters_json[name].hp, characters_json[name].level_up.hp, data.characters[name].lvl), data.settings.lang))
        .replace("{ch_powers.have}", translatePowers(characters_json[name].types.have).join(", "))
        .replace("{ch_atk}", texts[name])
        .replace("{ch_attr}", () => {
            if (characters_json[name].tags.length == 0) return `<br />[ ${checkLanguage(langText.characterInfo.nopow, data.settings.lang)} ]`

            return characters_json[name].tags.map((tag) => `<li>${checkLanguage(langText.characterInfo.tags[tag], data.settings.lang)}</li>`).join("")
        })
        .replace("{ch_powers.strong}", () => {
            if ("strong" in characters_json[name].types)
                return `<div style="font-size: 75%">
                ${translatePowers(characters_json[name].types.strong.ind).join(", ")}
            </div>
            DEF: ${gameModify.calc(1, characters_json[name].types.strong.def, characters_json[name].level_up.types.strong, data.characters[name].lvl)}`
            else return `<br />[ ${checkLanguage(langText.characterInfo.nopow, data.settings.lang)} ]`
        })
        .replace("{ch_powers.weak}", () => {
            if ("weak" in characters_json[name].types)
                return `<div style="font-size: 75%">
                ${translatePowers(characters_json[name].types.weak.ind).join(", ")}
            </div>
            DEF: ${gameModify.calc(2, characters_json[name].types.weak.def, characters_json[name].level_up.types.weak, data.characters[name].lvl)}`
            else return `<br />[ ${checkLanguage(langText.characterInfo.nopow, data.settings.lang)} ]`
        })

        .replace("{ch_sp_name}", () => {
            console.log(`[DEBUG] Typ nazwy SP: ${typeof characters_json[name].sp.name}.`)
            if (typeof characters_json[name].sp.name == "object") {
                if (!data.settings.forcedLang) console.log(`[DEBUG] Nie wymuszono tłumaczenia`)
                else console.log(`[DEBUG] Tłumaczenie...`)
                return data.settings.forcedLang ? checkLanguage(characters_json[name].sp.name, data.settings.lang) : characters_json[name].sp.name.pl
            } else {
                return characters_json[name].sp.name
            }
        })
        .replace("{starpover_bulid}", () => {
            if (data.characters[name].sp)
                return `<div id="spDescription">${checkLanguage(characters_json[name].sp.description, data.settings.lang)}</div>
            <u>${checkLanguage(langText.characterInfo.mu, data.settings.lang)} ${isFinite(characters_json[name].sp.maxUses) ? characters_json[name].sp.maxUses : "\u221E"}</u>`
            else return checkLanguage(langText.characterInfo.nosp, data.settings.lang)
        })
        .replace("{upgradeBTN}", () => {
            if (data.characters[name].lvl < characters_json[name].max_lvl)
                return `<button id="upgrade">
                    ${checkLanguage(langText.characterInfo.upg, data.settings.lang)}
                    (${
                        "cost" in characters_json[name].level_up
                            ? Math.round(eval(characters_json[name].level_up.cost.replace("{lvl}", data.characters[name].lvl)))
                            : 1800 + classes.indexOf(characters_json[name].class) * 200
                    }
                    <img width="15" height="15" draggable="false" src="${interfaceImages.money}" alt="🪙">)
                    <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_Trójkąt_Y}">
                </button>`
            else
                return `<div style="font-size: 75%;">
                    ${checkLanguage(langText.characterInfo.maxlvl, data.settings.lang).replace(
                        "{xfl}",
                        Math.floor(characters_json[name].max_lvl * (classes.indexOf(characters_json[name].class) + 1))
                    )}
                </div>`
        })

    document.querySelector("div#info").classList.remove("deactive")
    document.querySelector("div#info").classList.add("active")
    document.querySelector(`div#info div.o button#close`).addEventListener("click", closeInfo)

    document.querySelector(`button#playThisCharacter`).addEventListener("click", () => {
        startMatch(name, [0.56, 0.34])
    })

    if (!data.characters[name].sp)
        document.querySelector("div#info div.o button#buySP").addEventListener("click", () => {
            if (data.coins < 5000) return new miniAlert(checkLanguage(langText.characterInfo.buy.noenought, data.settings.lang), "error").show(2000)
            data.characters[name].sp = true
            data.coins -= 5000
            document.querySelector("div#info div.o").innerHTML = '<div class="loading small" style="margin: 30px"></div>'
            save(false).then(() => {
                if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
                audios.punkty.currentTime = 0
                audios.punkty.play()
                new miniAlert(checkLanguage(langText.characterInfo.buy.sp, data.settings.lang)).show(4500)
            })
        })
    if (data.characters[name].lvl < characters_json[name].max_lvl)
        document.querySelector("div#info div.o button#upgrade").addEventListener("click", () => {
            if (data.coins < 1800 + classes.indexOf(characters_json[name].class) * 200)
                return new miniAlert(checkLanguage(langText.characterInfo.buy.noenought, data.settings.lang), "error").show(2000)
            data.characters[name].lvl++
            data.coins -= 1800 + classes.indexOf(characters_json[name].class) * 200
            document.querySelector("div#info div.o").innerHTML = '<div class="loading small" style="margin: 30px"></div>'
            save(false).then(() => {
                if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
                audios.punkty.currentTime = 0
                audios.punkty.play()
                new miniAlert(checkLanguage(langText.characterInfo.buy.lvl, data.settings.lang).replace("{charaLVL}", data.characters[name].lvl)).show(4500)
            })
        })
    console.log(`[DEBUG] Ogarnięto profil (2/3)`)

    get(ref(database, `starcie-internetu/followersApiInfo`)).then((snpsht) => {
        var desc = {
            c: document.querySelector("#info .o #descriptionxD").innerHTML,
            sp: document.querySelector("#info .o #spDescription") == null ? null : document.querySelector("#info .o #spDescription").innerHTML,
        }
        Object.entries(desc).forEach(([key, descr]) => {
            if (desc[key] != null)
                desc[key] = descr
                    .replace(/{{desc\.db\.(\w+)}}/g, (match, arg) => snpsht.val()[arg])
                    .replace(/{{charaName\.([\węółżźćń]+)}}|{{charaName\.([\węółżźćń]+)\|([^{}|]+)}}/g, (match, arg1, arg2, arg3) => {
                        console.log("[DEBUG/descChanger/tag:charaName] Typ arg1: " + typeof arg1)
                        if (arg1) {
                            return characters_list_names.includes(arg1)
                                ? `<span class="classNameColor ${characters_json[arg1].class}">${arg1}</span>`
                                : `<span class="classNameColor">${arg1}</span>`
                        } else {
                            return characters_list_names.includes(arg2)
                                ? `<span class="classNameColor ${characters_json[arg2].class}">${arg3}</span>`
                                : `<span class="classNameColor">${arg3}</span>`
                        }
                    })
        })
        console.log(`[DEBUG/database] Pobrano dane ~/followersApiInfo`)
        document.querySelector("#info .o #descriptionxD").innerHTML = desc.c
        if (desc.sp != null) document.querySelector("#info .o #spDescription").innerHTML = desc.sp

        console.log(`[DEBUG] Ogarnięto profil (3/3)`)
    })
}

/**
 * Zapis do bazy danych (i podmiana niektórych danych)
 * @param {Boolean} showInfo Informacja o zapisie
 */
async function save() {
    Object.keys(data.characters).forEach((name) => {
        data.characters[name] = Object.values(data.characters[name]).join("|")
    })

    set(ref(database, `starcie-internetu/data/${uidd}`), data).then(() => {
        console.log("[DEBUG/database] Zapisano pomyślnie")
    })
}

/**
 * Tworzy panel główny
 */
function createHome() {
    gType = "homeScreen"

    document.querySelector("div#info div.o").innerHTML = `<button id="leave">${checkLanguage(
        langText.btns.leave,
        data.settings.lang
    )} <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_O_B}"></button><br /><br />
    <button id="match" style="width:100%;">${checkLanguage(langText.home.startFight, data.settings.lang)} <img draggable="false" width="15" height="15" src="${
        interfaceImages.Gamepad_UP
    }"></button><br />
    <button id="chest" style="width:100%;">
        ${checkLanguage(langText.home.openChest.general, data.settings.lang)}
        ${
            data.tokens > 0
                ? `(${checkLanguage(langText.home.openChest.isFree, data.settings.lang)})`
                : `(1200<img width="15" height="15" draggable="false" src="${interfaceImages.money}" alt="🪙">)`
        } 
    <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_RIGHT}"></button><br />
    <button id="settings" style="width:100%;">
        ${checkLanguage(langText.home.setting, data.settings.lang)} 
        <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_DOWN}">
    </button><br />
    <button id="log-out" style="width:100%;">
        ${checkLanguage(langText.home.logout, data.settings.lang)} 
        <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_LEFT}">
    </button><br /><br />
    ID: <span class="autoSelectable"><button id="uid">${checkLanguage(langText.home.idt, data.settings.lang)}</button></span><br />`

    document.querySelector("#info #chest").addEventListener("click", openChest)
    document.querySelector("#info #match").addEventListener("click", () => {
        startMatch()
    })
    document.querySelector("#info #log-out").addEventListener("click", () => {
        save(false).then(logOut)
    })
    document.querySelector("#info #uid").addEventListener("click", () => {
        document.querySelector("div#info div.o span").innerHTML = uidd
    })
    document.querySelector("#info #leave").addEventListener("click", closeInfo)
    document.querySelector("#info #settings").addEventListener("click", createSettings)
    document.querySelector("div#info").classList.remove("deactive")
    document.querySelector("div#info").classList.add("active")
}

/**
 * Tworzy ustawienia
 */
function createSettings() {
    showedCheck = false
    gType = "settings"

    document.querySelector("div#info div.o").innerHTML = `<button class="back">${checkLanguage(
        langText.btns.back,
        data.settings.lang
    )} <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_O_B}"></button> 
    ${checkLanguage(langText.setting.slength, data.settings.lang)} ${settingsList.length}<br /><br />`
    let settingsType = []
    for (let i = 0; i < settingsList.length; i++) {
        settingsType[i] = settingsList[i].type.split(/:/g)

        document.querySelector("div#info div.o").innerHTML += `<div class="set">
            <input type="hidden" class="settingType" value="${settingsList[i].type}" />
            ${settingsList[i].flag} {action}
            <div style="font-size: 75%">${checkLanguage(settingsList[i].description, data.settings.lang)}</div>
        </div>`

        if (settingsType[i][0] == "bool")
            document.querySelector("div#info div.o").innerHTML = document
                .querySelector("div#info div.o")
                .innerHTML.replace(/{action}/g, `<button class="setting">${data.settings[settingsList[i].flag] ? "✅" : "❌"}</button>`)
        if (settingsType[i][0] == "num")
            document.querySelector("div#info div.o").innerHTML = document
                .querySelector("div#info div.o")
                .innerHTML.replace(
                    /{action}/g,
                    `<input type="range" class="setting" name="volume" value="${data.settings[settingsList[i].flag]}" min="${settingsType[i][1]}" max="${
                        settingsType[i][2]
                    }" style="width: 100px" />`
                )
        if (settingsType[i][0] == "option")
            document.querySelector("div#info div.o").innerHTML = document.querySelector("div#info div.o").innerHTML.replace(/{action}/g, () => {
                var text = ""
                for (let j = 1; j < settingsType[i].length; j++) {
                    text += `<option ${data.settings[settingsList[i].flag] == settingsType[i][j].split("=")[1] ? "selected" : ""} value="${settingsType[i][j].split("=")[1]}">${
                        settingsType[i][j].split("=")[0]
                    }</option>`
                }

                return `<select class="setting">
            ${text}
            </select>`
            })
    }

    document.querySelector("div#info div.o button.back").addEventListener("click", () => {
        gType = "home"
        createHome()
    })
    for (let i = 0; i < settingsList.length; i++) {
        if (settingsType[i][0] == "bool")
            document.querySelectorAll("div#info div.o .setting")[i].addEventListener("click", () => {
                data.settings[settingsList[i].flag] = !data.settings[settingsList[i].flag]
                document.querySelectorAll("div#info div.o .setting")[i].innerText = data.settings[settingsList[i].flag] ? "✅" : "❌"
                save(false)
            })
        if (settingsType[i][0] == "num")
            document.querySelectorAll("div#info div.o .setting")[i].addEventListener("click", () => {
                data.settings[settingsList[i].flag] = Number(document.querySelectorAll("div#info div.o .setting")[i].value)
                save(false)
            })
        if (settingsType[i][0] == "option")
            document.querySelectorAll("div#info div.o .setting")[i].addEventListener("change", () => {
                data.settings[settingsList[i].flag] = document.querySelectorAll("div#info div.o .setting")[i].value
                //console.log(document.querySelectorAll("div#info div.o .setting")[i].value, data.settings)
                save(false).then(() => {
                    if (settingsList[i].flag == "lang") createSettings()
                })
            })
    }
}

/**
 * Otwiera skrzynię
 * @tags #chest #OpenChest #GetChatacter
 */
function openChest() {
    changeVolume(40)
    gType = "chest"

    if (data.tokens == 0 && data.coins < 1200)
        return new miniAlert(
            checkLanguage(langText.chest.noMoney, data.settings.lang).replace(
                "{moneyImg}",
                `<img width="23" height="23" draggable="false" src="${interfaceImages.money}" alt="🪙" />`
            ),
            "error"
        ).show(5000)
    if (data.tokens > 0) data.tokens--
    else data.coins -= 1200

    var _class = chest[Math.floor(Math.random() * chest.length)]
    var character_name = String()
    var beforeCoins = data.coins

    document.querySelector("div#game.match").innerHTML = `<div class="center"><div class="img"></div></div>`
    document.querySelector("div#game.match").style.display = "block"

    do {
        character_name = characters_list_names[Math.floor(Math.random() * characters_list_names.length)]
        console.log(`[DEBUG] Wylosowano ${character_name}. Zgodność: ${characters_json[character_name].class == _class}}`)
    } while (characters_json[character_name].class != _class)

    var bool1 = character_name in data.characters
    var bool2 = Boolean()

    if (bool1) {
        if (characters_json[character_name].class == "common") data.coins += 120
        else if (characters_json[character_name].class == "uncommon") data.coins += 360
        else if (characters_json[character_name].class == "rare") data.coins += 600
        else if (characters_json[character_name].class == "epic") data.coins += 840
        else if (characters_json[character_name].class == "legendary") data.coins += 1080
        else if (characters_json[character_name].class == "import") data.coins += 1320
        else if (characters_json[character_name].class == "dark_shop") data.coins += 1560

        bool2 = data.characters[character_name].lvl < characters_json[character_name].max_lvl

        console.log(`[DEBUG] Postać jest na koncie`)
        if (bool2) data.characters[character_name].lvl++
        else data.xp += Math.floor(characters_json[character_name].max_lvl * (classes.indexOf(characters_json[character_name].class) + 1))
    } else {
        data.characters[character_name] = { lvl: 1, sp: false }
        console.log(`[DEBUG] Postać nie jest na koncie`)
    }

    document.querySelector("div#game.match div.center").innerHTML += checkLanguage(langText.chest.core, data.settings.lang).replace("{charaName}", character_name)
    document.querySelector(
        "div#game.match div.center div.img"
    ).innerHTML = `<img style="margin-left: 15px;" draggable="false" class="${characters_json[character_name].class} character" width="200" height="200" src="${characters_json[character_name].image}" />`
    if (bool1)
        document.querySelector("div#game.match div.center").innerHTML += bool2
            ? `<br /><span style="font-size: 15px">${checkLanguage(langText.chest.msgIfHave.ifNotMaxLvl, data.settings.lang)}</span>`.replace("{mon}", data.coins - beforeCoins)
            : `<br /><span style="font-size: 15px">${checkLanguage(langText.chest.msgIfHave.ifMaxLvl, data.settings.lang)}</span>`
                  .replace("{mon}", data.coins - beforeCoins)
                  .replace("{xp}", Math.floor(characters_json[character_name].max_lvl * (classes.indexOf(characters_json[character_name].class) + 1)))
    document.querySelector("div#game.match div.center").innerHTML += `<button style="margin-top: 15px;">${checkLanguage(
        langText.btns.leave,
        data.settings.lang
    )} <img  draggable="false" style="border-radius: 0;" width="15" height="15" src="${interfaceImages.Gamepad_O_B}"></button>`
    save(false).then(() => {
        document.querySelector("#info #chest").innerHTML = `Otwórz skrzynię${
            data.tokens > 0 ? " (FREE)" : ` (1200<img width="10" height="10" draggable="false" src="${interfaceImages.money}" alt="🪙">)`
        } <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_RIGHT}">`
        document.querySelector("div#game.match div.center button").addEventListener("click", () => {
            document.querySelector("div#game.match").style.display = "none"
            changeVolume(70)
        })
    })
}

var fightFunctions = {
    attack: function (id) {
        if (document.querySelector(`div#game.match div[gameplay="player"] div.btns button.atk.gChecked`) != null)
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button.atk.gChecked`).classList.remove("gChecked")
        if (matchSettings.player.points < characters_json[matchSettings.player.name].battle[id].points) return
        dmg("bot", matchSettings.player.atk[id])
        matchSettings.player.points -= characters_json[matchSettings.player.name].battle[id].points
        document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
        analyze()
    },
    heal: function () {
        if (gameModify.getColab("player").you.hp.factor() > 0.75) return
        if (matchSettings.player.points < 25) return
        matchSettings.player.health += healInfo(matchSettings.player.name, matchSettings.player.lvl)
        matchSettings.player.points -= 25
        audios.heal.currentTime = 0
        audios.heal.play()

        updateHP("player")
        document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
        analyze()
    },
    getBTP: function () {
        matchSettings.player.points += 9 + data.lvl
        document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
        audios.punkty.currentTime = 0
        audios.punkty.play()
        analyze()
    },
}

/**
 * Rozpoczyna mecz z botem
 * @param {string | undefined} [character=undefined] nazwa postaci
 * @param {number[]} [stats = [1, 1]] mnożniki do statystyk
 * @tags #StartGame #StartMatch
 */
function startMatch(character = undefined, stats = [1, 1]) {
    gBlock = true
    gType = "match"
    gCheckedNum.match = -1
    showedCheck = false
    matchSettings = create_matchSettings_structure()

    // usuwa ten śmieszny bład
    matchSettings.moves = 0

    matchSettings.stats = stats

    var textesTranslated = { sp: "", atk: [] }

    console.log("[DEBUG] Wszystkie zmienne gotowe do użycia!")

    changeVolume(10)

    // współczynnik posiadanego levela z maksymalnym
    var prec = Number()

    // wybieranie odpowiednich postaci i nadawanie odpowiednich wartości
    let list = Object.keys(data.characters)
    console.log(`[DEBUG] Opcje do wyboru: `, list, `    Postać wg argumentu: ${character || list[Math.floor(Math.random() * list.length)]}`)
    matchSettings.player.name = character || list[Math.floor(Math.random() * list.length)]
    console.log(
        `[DEBUG] Postać jako "player": ${matchSettings.player.name} (poziom: ${data.characters[matchSettings.player.name].lvl}, ma SP: ${
            data.characters[matchSettings.player.name].sp
        })`
    )

    for (let i = 0; i < characters_json[matchSettings.player.name].battle.length; i++) {
        matchSettings.player.atk[i] = gameModify.calc(
            0,
            atkFromBtp(characters_json[matchSettings.player.name].battle[i].points),
            characters_json[matchSettings.player.name].level_up.battle[i],
            data.characters[matchSettings.player.name].lvl
        )
        matchSettings.player.atk[i] = Math.round(matchSettings.player.atk[i] * (1 - 0.7 * characters_json[matchSettings.player.name].tags.includes("tanker")))
        matchSettings.player.atk[i] *= 1 + characters_json[matchSettings.player.name].tags.includes("double")
        if (typeof characters_json[matchSettings.player.name].battle[i].name == "object") {
            textesTranslated.atk[i] = data.settings.forcedLang
                ? checkLanguage(characters_json[matchSettings.player.name].battle[i].name, data.settings.lang)
                : characters_json[matchSettings.player.name].battle[i].name.pl
        } else {
            textesTranslated.atk[i] = characters_json[matchSettings.player.name].battle[i].name
        }
    }
    matchSettings.player.health = gameModify.calc(
        0,
        characters_json[matchSettings.player.name].hp,
        characters_json[matchSettings.player.name].level_up.hp,
        data.characters[matchSettings.player.name].lvl
    )
    matchSettings.player.health = Math.round(matchSettings.player.health * (1 + 1.3 * characters_json[matchSettings.player.name].tags.includes("tanker")))
    matchSettings.player.lvl = data.characters[matchSettings.player.name].lvl
    matchSettings.player.spHave = data.characters[matchSettings.player.name].sp
    if (typeof characters_json[matchSettings.player.name].sp.name == "object") {
        textesTranslated.sp = data.settings.forcedLang
            ? checkLanguage(characters_json[matchSettings.player.name].sp.name, data.settings.lang)
            : characters_json[matchSettings.player.name].sp.name.pl
    } else {
        textesTranslated.sp = characters_json[matchSettings.player.name].sp.name
    }

    prec = data.characters[matchSettings.player.name].lvl / characters_json[matchSettings.player.name].max_lvl
    console.log(`[DEBUG] Procent poziomu dla gracza wynosi ${prec * 100}`)

    do {
        matchSettings.bot.name = characters_list_names[Math.floor(Math.random() * characters_list_names.length)]
        console.log(
            `[DEBUG] Próba wybrania przeciwnika (Kandydant: ${matchSettings.bot.name}, spełnia wymagania: ${
                characters_json[matchSettings.bot.name].dimension != characters_json[matchSettings.player.name].dimension
            })`
        )
        // console.log(matchSettings.bot.name, characters_json[matchSettings.bot.name].dimension)
    } while (characters_json[matchSettings.bot.name].dimension == characters_json[matchSettings.player.name].dimension)
    matchSettings.bot.lvl = Math.round(Math.random() * (characters_json[matchSettings.bot.name].max_lvl * prec))

    // dla testów
    if ((location.host == "localhost:5500" || location.host == "127.0.0.1:5500") && window.ptkdevvars.enableCustomEnemy) matchSettings.bot.name = window.ptkdevvars.customEnemyName

    matchSettings.bot.lvl =
        matchSettings.bot.lvl > characters_json[matchSettings.bot.name].max_lvl
            ? characters_json[matchSettings.bot.name].max_lvl
            : matchSettings.bot.lvl < 1
            ? 1
            : matchSettings.bot.lvl
    matchSettings.bot.spHave = Math.round(Math.random() * 3) + data.characters[matchSettings.player.name].sp > 2

    console.log(`[DEBUG] Postać jako "bot": ${matchSettings.bot.name} (poziom: ${matchSettings.bot.lvl}, ma SP: ${matchSettings.bot.spHave})`)

    for (let i = 0; i < characters_json[matchSettings.bot.name].battle.length; i++) {
        matchSettings.bot.atk[i] = gameModify.calc(
            0,
            atkFromBtp(characters_json[matchSettings.bot.name].battle[i].points),
            characters_json[matchSettings.bot.name].level_up.battle[i],
            matchSettings.bot.lvl
        )
        matchSettings.bot.atk[i] = Math.round(matchSettings.bot.atk[i] * (1 - 0.7 * characters_json[matchSettings.bot.name].tags.includes("tanker")))
        matchSettings.bot.atk[i] *= 1 + characters_json[matchSettings.bot.name].tags.includes("double")
    }
    matchSettings.bot.health = gameModify.calc(0, characters_json[matchSettings.bot.name].hp, characters_json[matchSettings.bot.name].level_up.hp, matchSettings.bot.lvl)
    matchSettings.bot.health = Math.round(matchSettings.bot.health * (1 + 1.3 * characters_json[matchSettings.bot.name].tags.includes("tanker")))

    matchSettings.player.critChance = gameModify.calcCritChance(matchSettings.player.name, data.characters[matchSettings.player.name].lvl, matchSettings.bot.name)
    matchSettings.bot.critChance = gameModify.calcCritChance(matchSettings.bot.name, matchSettings.bot.lvl, matchSettings.player.name)

    console.log(`[DEBUG] Analizowanie zakończone`)

    // tworzenie layoutu gry
    document.querySelector("div#game.match").innerHTML = `<div id="movesInfo"></div>
    <div 
        id="gameplay" 
        gameplay="player" 
        class="center half"
    >
        <div class="healthInfo">
            ${shortNumber(matchSettings.player.health, data.settings.lang)}/${shortNumber(matchSettings.player.health, data.settings.lang)}
        </div>
        <div class="healthBar">
            <div 
                class="health" 
                style="
                    --health: ${matchSettings.player.health}; 
                    --healthMax: ${matchSettings.player.health};
                "
            ></div>
        </div>
        <img 
            ${data.characters[matchSettings.player.name].sp ? "matchSP" : ""}
            draggable="false" 
            class="${characters_json[matchSettings.player.name].class} 
            character" 
            width="170" 
            height="170" 
            src="${characters_json[matchSettings.player.name].image}"
        />
        <span style="font-size: 35%">
            LVL: ${data.characters[matchSettings.player.name].lvl}
        </span>
        <span class="name"></span>
    </div>
    <div 
        id="gameplay" 
        gameplay="bot" 
        class="center half"
    >
        <div class="healthInfo">
            ${shortNumber(matchSettings.bot.health, data.settings.lang)}/${shortNumber(matchSettings.bot.health, data.settings.lang)}
        </div>
        <div class="healthBar">
            <div 
                class="health" 
                style="
                    --health: ${matchSettings.bot.health}; 
                    --healthMax: ${matchSettings.bot.health};
                "
            ></div>
        </div>
        <img 
            ${matchSettings.bot.spHave ? "matchSP" : ""} 
            draggable="false" 
            class="${characters_json[matchSettings.bot.name].class} character" 
            width="170" 
            height="170" 
            src="${characters_json[matchSettings.bot.name].image}"
        />
        <span style="font-size: 35%">
            LVL: ${matchSettings.bot.lvl}
        </span>
        <span class="name">
    </span></div>`
    document.querySelector("div#info").classList.remove("active")
    document.querySelector("div#game.match").style.display = "block"

    window.ptkdevvars.addMoves = (x) => (matchSettings.moves += x)
    // atak od strony jądra, gdy już za długo grają
    /**
     * @param {"player" | "bot"} type
     */
    function _$attack(type) {
        const a = (lvl) => Math.abs(Math.floor(matchSettings.moves * (lvl + matchSettings.moves / 200) * (lvl + 1)))
        if ((matchSettings.moves >= 50 && matchSettings.moves % 10 === 0) || (matchSettings.moves >= 100 && matchSettings.moves % 2 === 0)) {
            matchSettings[type].health -= a(matchSettings[type].lvl)
            updateHP(type)

            if (characters_json[matchSettings[type].name].tags.includes("stormbtp")) matchSettings[type].points += Math.floor(Math.log10(a(matchSettings[type].lvl)) * 3)

            if (type === "player") {
                audios.burza.currentTime = 0
                audios.burza.play()
            }
        }
        if (characters_json[matchSettings[type].name].tags.includes("time")) matchSettings[type].points += 3
        if (type == "player" && document.querySelector(`div#game.match div[gameplay="player"] span#BTPNumber`) !== null)
            document.querySelector(`div#game.match div[gameplay="player"] span#BTPNumber`).innerText = matchSettings.player.points
    }

    gameModify.getColab("player").setTimeoutInMoves("each", Infinity, _$attack)
    gameModify.getColab("bot").setTimeoutInMoves("each", Infinity, _$attack)

    // odliczanie
    console.log(`[DEBUG] Rozpoczynanie odliczania`)
    document.querySelector(`div#game.match div[gameplay="player"]`).classList.add("show")
    audios.counting.currentTime = 0
    audios.counting.play()
    setTimeout(() => {
        audios.counting.pause()
        audios.counting.currentTime = 0
        document.querySelector(`div#game.match div[gameplay="bot"]`).classList.add("show")
        audios.counting.play()
    }, 1000)
    setTimeout(() => {
        audios.counting.pause()
        audios.counting.currentTime = 0
        audios.counting.play()
        for (let i = 0; i < (matchSettings.player.name.length > matchSettings.bot.name.length ? matchSettings.player.name.length : matchSettings.bot.name.length); i++) {
            setTimeout(() => {
                if (i < matchSettings.bot.name.length) document.querySelector(`div#game.match div[gameplay="bot"] span.name`).innerHTML += matchSettings.bot.name[i]
                if (i < matchSettings.player.name.length) document.querySelector(`div#game.match div[gameplay="player"] span.name`).innerHTML += matchSettings.player.name[i]
            }, 35 * i)
        }
    }, 2000)
    // start gry
    setTimeout(() => {
        audios.counting.pause()
        audios.start.pause()
        audios.start.currentTime = 0
        audios.start.play()
        console.log(`[DEBUG] Rozpoczęto!`)
        gBlock = false
        new miniAlert(`<div style="width: calc(100vw - 60px); text-align: center;">START!</div>`).show(5000)
        document.querySelector(`div#game.match div[gameplay="player"]`).innerHTML += `<div class="btns"></div>`
        for (let i = 0; i < matchSettings.player.atk.length; i++) {
            setTimeout(() => {
                // console.log(characters_json[matchSettings.player.name])
                document.querySelector(
                    `div#game.match div[gameplay="player"] div.btns`
                ).innerHTML += `<button class="atk" style="width: calc(50% - 10px); margin: 5px">${textesTranslated.atk[i]}</button>`
            }, 50 * i)
        }
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="heal" style="width: 100%; margin: 5px">${checkLanguage(
                langText.fight.healBTN,
                data.settings.lang
            )} (+${healInfo(matchSettings.player.name, matchSettings.player.lvl)} HP, -25 BTP) <img draggable="false" width="15" height="15" src="${
                interfaceImages.Gamepad_Trójkąt_Y
            }"></button>`
        }, 50 * matchSettings.player.atk.length)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="whiteFlag" style="width: 100%; margin: 5px">${checkLanguage(
                langText.fight.surBTN,
                data.settings.lang
            )} <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_Start}">x3</button>`
        }, 50 * matchSettings.player.atk.length + 50)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="reset"><button id="getBTP" style="width: 150px; margin: 5px">+${
                9 + data.lvl
            } BTP <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_Kwadrat_X}"></button><div>> ${checkLanguage(
                langText.fight.BTPInfo,
                data.settings.lang
            )}: <span id="BTPNumber">0</span></div></div>`
        }, 50 * matchSettings.player.atk.length + 100)
        if (data.characters[matchSettings.player.name].sp)
            setTimeout(() => {
                document.querySelector(
                    `div#game.match div[gameplay="player"] div.btns`
                ).innerHTML += `<button id="sp" style="width: 100%; margin: 5px; background: gold">SP - ${textesTranslated.sp} <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_X_A}"></button>`
            }, 50 * matchSettings.player.atk.length + 150)

        setTimeout(() => {
            if (data.settings.useGamepad)
                document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="resetAndHide">
            ${checkLanguage(langText.fight.PadInfo, data.settings.lang)}
            </div>`
            document.querySelector(`div#game.match div#movesInfo`).innerText = checkLanguage(langText.fight.movefalse, data.settings.lang).replace("{num}", 1)
        }, 50 * (matchSettings.player.atk.length + data.characters[matchSettings.player.name].sp) + 150)
        setTimeout(() => {
            for (let i = 0; i < matchSettings.player.atk.length; i++) {
                // console.log(document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i])
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("mouseover", () => {
                    document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].innerText = `${
                        characters_json[matchSettings.player.name].battle[i].points
                    } BPT`
                })
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("mouseout", () => {
                    document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].innerHTML = textesTranslated.atk[i]
                })
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("click", () => {
                    fightFunctions.attack(i)
                })
            }
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#heal`).addEventListener("click", () => {
                fightFunctions.heal()
            })
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#getBTP`).addEventListener("click", () => {
                fightFunctions.getBTP()
            })
            if (data.characters[matchSettings.player.name].sp)
                document.querySelector(`div#game.match div[gameplay="player"] div.btns button#sp`).addEventListener("click", () => {
                    starPover("player")
                })
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#whiteFlag`).addEventListener("click", () => {
                if (confirm(checkLanguage(langText.fight.surSure, data.settings.lang))) endGame(2)
            })
        }, 50 * (matchSettings.player.atk.length + data.characters[matchSettings.player.name].sp) + 200)
    }, 3000)
}

/**
 * Aktualizuje HP
 * @param {"player" | "bot"} type Typ gracza
 * @tags #HP #UpdateHP
 */
function updateHP(type) {
    document.querySelector(`div#game.match div[gameplay="${type}"] div.healthInfo`).innerHTML = `${shortNumber(matchSettings[type].health, data.settings.lang)}/${shortNumber(
        Number(document.querySelector(`div#game.match div[gameplay="${type}"] div.healthBar div.health`).style.getPropertyValue("--healthMax")),
        data.settings.lang
    )}`

    document.querySelector(`div#game.match div[gameplay="${type}"] div.healthBar div.health`).style.setProperty("--health", matchSettings[type].health)
}

/**
 * Kończy grę i wyświetla zakończenie rundy
 * @param {0 | 1 | 2} type Typ zakończenia: 0 - wygrana, 1 - przegrana, 2 - przegrana przez poddanie
 * @tags #GameEnd #EndMatch
 */
function endGame(type) {
    gmx = 0
    playerSPUser = "player"
    var factorNumber = gameModify.getColab().you.hp.factor()
    spDurationFunction = []

    showedCheck = false
    gBlock = true
    document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
    setTimeout(() => {
        gBlock = false
        if (type == 0) {
            gType = "endScreen"
            var ticketChange = Math.round(Math.random() * 9)
            var ticketCount = Math.floor(Math.sqrt(Math.random() * 8 + 1))
            var xp = Math.round(Math.random() * 50 + Math.log10(matchSettings.player.health) * matchSettings.moves) + 32

            var mon =
                Math.round(
                    Math.pow(Math.log10(matchSettings.player.health), 2) * (1 + Math.max(matchSettings.moves - 10, 0) / 10) +
                        Math.max(matchSettings.moves - 10, 0) * Math.max(1 - factorNumber, 0.25)
                ) * 2
            mon = Math.round(mon * matchSettings.stats[0])
            xp = Math.round(xp * matchSettings.stats[1])
            document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                <div id="theBigText">${checkLanguage(langText.endgameMessages.win, data.settings.lang)}</div>
                <div id="presents">
                    <div class="card">
                        <div class="emoji"><img width="80" height="80" draggable="false" src="${interfaceImages.money}" alt="🪙" style="margin-top: 12px; border-radius: 0;"></div>
                        <div class="info">${mon}</div>
                    </div>
                    <div class="card">
                        <div class="emoji">👤</div>
                        <div class="info">+${xp}xp</div>
                    </div>
                    ${
                        ticketChange == 1
                            ? `<div class="card">
                        <div class="emoji">🎫</div>
                        <div class="info">${ticketCount}</div>
                    </div>`
                            : ""
                    }
                </div>
            </div>`

            data.coins += mon
            data.xp += xp
            data.tokens += (ticketChange == 1) * ticketCount

            save(false).then(() => {
                gBlock = false
                document.querySelector("div#game.match div#runCenter").innerHTML +=
                    '<button class="loginForm">' +
                    checkLanguage(langText.btns.leave, data.settings.lang) +
                    ` <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_O_B}"></button>`
                document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                    document.querySelector("div#game.match").style.display = "none"
                    document.querySelector("div#game.match").innerHTML = ""
                    changeVolume(70)
                })
            })
        } else if (type == 1) {
            gType = "endScreen"
            var mon = Math.round(Math.random() * 32)
            document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                <div id="theBigText" style="background: rgba(252, 38, 0, 0.541)">${checkLanguage(langText.endgameMessages.lose, data.settings.lang)}</div>
                <div id="presents">
                    <div class="card">
                        <div class="emoji"><img width="80" height="80" draggable="false" src="${interfaceImages.money}" alt="🪙" style="margin-top: 12px; border-radius: 0;"></div>
                        <div class="info">${mon}</div>
                    </div>
                </div>
            </div>`

            data.coins += mon

            save(false).then(() => {
                gBlock = false
                document.querySelector("div#game.match div#runCenter").innerHTML +=
                    '<button class="loginForm">' +
                    checkLanguage(langText.btns.leave, data.settings.lang) +
                    ' <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_O_B}"></button>'
                document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                    document.querySelector("div#game.match").style.display = "none"
                    document.querySelector("div#game.match").innerHTML = ""
                    changeVolume(70)
                })
            })
        } else if (type == 2) {
            gType = "endScreen"
            document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                    <div id="theBigText" style="background: rgba(252, 38, 0, 0.541)">${checkLanguage(langText.endgameMessages.lose, data.settings.lang)}<br />(${checkLanguage(
                langText.endgameMessages.sur,
                data.settings.lang
            )})</div>
                    <button class="loginForm">${checkLanguage(langText.btns.leave, data.settings.lang)} <img  draggable="false" width="15" height="15" src="${
                interfaceImages.Gamepad_O_B
            }"></button>
            </div>`

            document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                document.querySelector("div#game.match").style.display = "none"
                document.querySelector("div#game.match").innerHTML = ""
                changeVolume(70)
            })
        }
    }, 1000)
}

/**
 * Generuje od nowa layout dla danego gracza
 * @param {"player" | "bot"} type Typ gospodarza
 * @param {boolean} keepMaxHP Warunek zostawiania maks. HP
 */
function regenerate(type, keepMaxHP) {
    var textesTranslated = { sp: "", atk: [] }
    if (typeof characters_json[matchSettings[type].name].sp.name == "object") {
        textesTranslated.sp = data.settings.forcedLang
            ? checkLanguage(characters_json[matchSettings[type].name].sp.name, data.settings.lang)
            : characters_json[matchSettings[type].name].sp.name.pl
    } else {
        textesTranslated.sp = characters_json[matchSettings[type].name].sp.name
    }

    var maxHP = keepMaxHP
        ? document.querySelector(`div#game.match div[gameplay="${type}"] div.healthBar div.health`).style.getPropertyValue("--healthMax")
        : matchSettings[type].health

    document.querySelector(`div#game.match div[gameplay="${type}"]`).innerHTML = `<div class="healthInfo">
        ${shortNumber(matchSettings[type].health, data.settings.lang)}/${shortNumber(maxHP, data.settings.lang)}
    </div>
    <div class="healthBar"><div class="health" style="--health: ${matchSettings[type].health}; --healthMax: ${maxHP};"></div></div><img ${
        matchSettings[type].spHave ? "matchsp" : ""
    } draggable="false" class="${characters_json[matchSettings[type].name].class} character" width="170" height="170" src="${
        characters_json[matchSettings[type].name].image
    }" /><span style="font-size: 35%">LVL: ${matchSettings[type].lvl}</span><span class="name">${matchSettings[type].name}</span></div>`
    if (type == "player") {
        document.querySelector(`div#game.match div[gameplay="player"]`).innerHTML += `<div class="btns"></div>`
        for (let i = 0; i < matchSettings[type].atk.length; i++) {
            if (typeof characters_json[matchSettings[type].name].battle[i].name === "string") {
                textesTranslated.atk[i] = characters_json[matchSettings[type].name].battle[i].name
            } else {
                textesTranslated.atk[i] = data.settings.forcedLang
                    ? checkLanguage(characters_json[matchSettings[type].name].battle[i].name, data.settings.lang)
                    : characters_json[matchSettings[type].name].battle[i].name.pl
            }

            document.querySelector(
                `div#game.match div[gameplay="player"] div.btns`
            ).innerHTML += `<button class="atk" style="width: calc(50% - 10px); margin: 5px">${textesTranslated.atk[i]}</button>`
        }
        document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="heal" style="width: 100%; margin: 5px">${checkLanguage(
            langText.fight.healBTN,
            data.settings.lang
        )} (+${healInfo(matchSettings.player.name, matchSettings.player.lvl)} HP, -25 BTP) <img draggable="false" width="15" height="15" src="${
            interfaceImages.Gamepad_Trójkąt_Y
        }"></button>`
        document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="whiteFlag" style="width: 100%; margin: 5px">${checkLanguage(
            langText.fight.surBTN,
            data.settings.lang
        )} <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_Start}">x3</button>`
        document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="reset"><button id="getBTP" style="width: 150px; margin: 5px">+${
            9 + data.lvl
        } BTP <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_Kwadrat_X}"></button><div>> ${checkLanguage(
            langText.fight.BTPInfo,
            data.settings.lang
        )}: <span id="BTPNumber">${matchSettings[type].points}</span></div></div>`
        if (matchSettings.player.spHave)
            document.querySelector(
                `div#game.match div[gameplay="player"] div.btns`
            ).innerHTML += `<button id="sp" style="width: 100%; margin: 5px; background: gold">SP - ${textesTranslated.sp} <img  draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_X_A}"></button>`
        if (data.settings.useGamepad)
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="resetAndHide">
        ${checkLanguage(langText.fight.PadInfo, data.settings.lang)}
        </div>`
        for (let i = 0; i < matchSettings.player.atk.length; i++) {
            // console.log(document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i])
            document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("mouseover", () => {
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].innerText = `${
                    characters_json[matchSettings.player.name].battle[i].points
                } BPT`
            })
            document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("mouseout", () => {
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].innerHTML = textesTranslated.atk[i]
            })
            document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("click", () => {
                fightFunctions.attack(i)
            })
        }
        document.querySelector(`div#game.match div[gameplay="player"] div.btns button#heal`).addEventListener("click", () => {
            fightFunctions.heal()
        })
        document.querySelector(`div#game.match div[gameplay="player"] div.btns button#getBTP`).addEventListener("click", () => {
            fightFunctions.getBTP()
        })
        if (matchSettings.player.spHave)
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#sp`).addEventListener("click", () => {
                starPover("player")
            })
        document.querySelector(`div#game.match div[gameplay="player"] div.btns button#whiteFlag`).addEventListener("click", () => {
            if (!confirm("Czy na pewno chcesz się poddać?")) return
            endGame(2)
        })
        if (type === "player" && matchSettings.player.spUses >= characters_json[matchSettings.player.name].sp.maxUses) {
            document.querySelector(`div#game.match div[gameplay="player"] button#sp`).disabled = true
            document.querySelector(`div#game.match div[gameplay="player"] button#sp`).style.opacity = "0.5"
        }
    }
}

/**
 * Używa specjalną umiejętność granych postaci za pomocą zmiennej `gameModify`
 * @param {"player" | "bot"} type Typ gracza używającego SP
 */
function starPover(type) {
    if (matchSettings[type].spUses >= characters_json[matchSettings[type].name].sp.maxUses || matchSettings.moves < 10) return
    if (type == "player") document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
    gBlock = true
    playerSPUser = type
    matchSettings[type].spUses++
    characters_json[matchSettings[type].name].sp.function()

    if (type === "player" && matchSettings.player.spUses >= characters_json[matchSettings.player.name].sp.maxUses) {
        console.log("[DEBUG] Ukryto pomyślnie!")
        document.querySelector(`div#game.match div[gameplay="player"] button#sp`).disabled = true
        document.querySelector(`div#game.match div[gameplay="player"] button#sp`).style.opacity = "0.5"
    }
}

/**
 * Atakuje podanego gracza podczas gry
 * @param {"player" | "bot"} type Typ do zaatakowania
 * @param {number} atk Wartość ataku
 * @param {boolean} isSP Warunek czy atak jest spowodowany SP
 * @returns {{ atk: number, btp: number, crit: boolean } | void} Jeżeli *`isSP`* jest ustawione na **`true`**, zwraca kod JSON.
 */
function dmg(type, atk, isSP = Boolean(false)) {
    var type2 = type == "player" ? "bot" : "player"

    gCheckedNum.match = -1
    showedCheck = false

    if (characters_json[matchSettings[type2].name].tags.includes("furr"))
        atk *=
            1 +
            (matchSettings.moves + 1 + 0.1 * classes.indexOf(characters_json[matchSettings[type2].name].class)) /
                (100 + 70 * characters_json[matchSettings[type2].name].tags.length)
    var rand = Math.round(Math.random() * 70) / 100 + 0.5
    atk = Math.round(atk * rand)

    var lvl = type2 == "player" ? data.characters[matchSettings.player.name].lvl : matchSettings.bot.lvl
    var crit = Math.round(Math.random() * 1000) > matchSettings[type].critChance * (0.9 + rand / 4)
    var d_btp = Math.log10(atk) * (2 + 0.05 * String(atk).length)
    if (crit) {
        audios.attack.pause()
        audios.attack.currentTime = 0
        matchSettings[type].health -= atk
        matchSettings[type2].points += Math.round(d_btp)
        audios.attack.play()
    } else {
        d_btp *= 12

        audios.criticalAttack.pause()
        audios.criticalAttack.currentTime = 0
        matchSettings[type].health -= atk * 6
        matchSettings[type2].points += Math.round(d_btp)
        audios.criticalAttack.play()
    }
    if (type2 == "player") document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings[type2].points

    updateHP(type)
    if (characters_json[matchSettings[type].name].tags.includes("btpwa")) {
        matchSettings[type].points += Math.round(d_btp * 0.25)
        if (type == "player") document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings[type].points
    }

    if (isSP) return { atk: atk * (4 - crit * 3), btp: d_btp, crit }

    if (characters_json[matchSettings[type2].name].tags.includes("toks")) {
        gameModify.getColab(type2).setTimeoutInMoves("each", 2, (colabed) => {
            gameModify.getColab(colabed).enemy.attack(Math.round(atk * (4 - crit * 3) * 0.1))

            document.querySelector(`div#game.match div[gameplay="${colabed == "player" ? "bot" : "player"}"] img.character`).classList.add("animateTagToks")
            setTimeout(() => {
                document.querySelector(`div#game.match div[gameplay="${colabed == "player" ? "bot" : "player"}"] img.character`).classList.remove("animateTagToks")
            }, 760)
        })
    }
    if (characters_json[matchSettings[type].name].tags.includes("atkback")) {
        setTimeout(() => {
            gameModify.getColab(type).enemy.attack(Math.round(atk * (4 - crit * 3) * 0.18))
            document.querySelector(`div#game.match div[gameplay="${type2}"] img.character`).classList.add("animateTagAtkback")
            setTimeout(() => {
                document.querySelector(`div#game.match div[gameplay="${type2}"] img.character`).classList.remove("animateTagAtkback")
            }, 510)
        }, 130)
    }
}

/**
 * Akcje bota
 */
function analyze() {
    var spp = false
    gBlock = true
    document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
    if (matchSettings.bot.health <= 0) return endGame(0)
    setTimeout(() => {
        let canskip = false
        do {
            let action = Math.round(Math.random() * 16)
            // console.log(action)
            if (action == 0 || action == 1) {
                if (gameModify.getColab("bot").you.hp.factor() < 0.75 && matchSettings.bot.points >= 25) {
                    canskip = true
                    matchSettings.bot.points -= 25
                    matchSettings.bot.health += healInfo(matchSettings.bot.name, matchSettings.bot.lvl)
                    audios.heal.currentTime = 0
                    audios.heal.play()

                    updateHP("bot")
                }
            } else if (action == 2 || action == 3 || action == 4) {
                canskip = true
                matchSettings.bot.points += 10
                audios.punkty.currentTime = 0
                audios.punkty.play()
            } else if (action == 5) {
                if (
                    "sp" in characters_json[matchSettings.bot.name] &&
                    matchSettings.bot.spHave &&
                    matchSettings.bot.spUses < characters_json[matchSettings.bot.name].sp.maxUses &&
                    matchSettings.moves >= 10
                ) {
                    canskip = true
                    spp = true
                    starPover("bot")
                }
            } else {
                for (let i = characters_json[matchSettings.bot.name].battle.length - 1; i >= 0; i--) {
                    // console.log(matchSettings.bot.points, matchSettings.bot.points >= characters_json[matchSettings.bot.name].battle[i].points)
                    if (matchSettings.bot.points >= characters_json[matchSettings.bot.name].battle[i].points) {
                        dmg("player", matchSettings.bot.atk[i])
                        matchSettings.bot.points -= characters_json[matchSettings.bot.name].battle[i].points
                        document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.setProperty("--health", matchSettings.player.health)
                        canskip = true
                        break
                    }
                }
            }

            console.log(`[DEBUG] Wybór bota: ${action} (możliwość wykonania: ${canskip})`)
        } while (!canskip)
        // console.log(matchSettings.bot.points, characters_json[matchSettings.bot.name].battle)

        if (matchSettings.player.health <= 0) return endGame(1)
        setTimeout(() => {
            matchSettings.moves++
            document.querySelector(`div#game.match div#movesInfo`).innerText = checkLanguage(langText.fight[`move${matchSettings.moves >= 10}`], data.settings.lang).replace(
                "{num}",
                matchSettings.moves + 1
            )

            gBlock = false
            if (!spp) document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "flex"
        }, 1000)
    }, 1000)
}

/*
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
*/

/** Akcje konsoli */
function framer() {
    let [gc] = navigator.getGamepads()
    if (gc != null) gamepadMain(gc)

    //statystyka zmian
    var changedValue = {}
    for (let klucz in matchSettings) {
        if (matchSettings[klucz] != msBefore[klucz]) {
            changedValue[klucz] = matchSettings[klucz]
        }
    }

    if (Object.keys(changedValue).length > 0) {
        //console.log(true)

        if (Object.keys(changedValue).includes("moves")) {
            spDurationFunction.forEach((data) => {
                if (data.type == 1 || data.type == "each") data.function(data.whichMove, matchSettings.moves - data.moves.started)
                if ((data.type == 0 || data.type == "end") && data.moves.ended == changedValue.moves) data.function(data.whichMove)
            })
            spDurationFunction = spDurationFunction.filter(
                (data) =>
                    ((data.type == 1 || data.type == "each") && isFinite(data.moves.ended) ? changedValue.moves < data.moves.ended : true) ||
                    ((data.type == 0 || data.type == "end") && changedValue.moves <= data.moves.ended && isFinite(data.moves.ended))
            )
        }
        if (gType == "match") {
            matchSettings.player.health = Math.min(
                matchSettings.player.health,
                Number(document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax"))
            )
            updateHP("player")
            matchSettings.bot.health = Math.min(
                matchSettings.bot.health,
                Number(document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.getPropertyValue("--healthMax"))
            )
            updateHP("bot")
        }
        console.log(`[DEBUG] Zmiana: OK (ruch ${matchSettings.moves})`, Object.keys(changedValue))
        msBefore = Object.assign(msBefore, changedValue)
    }

    //pobieranie na żywo co jest grane - taki player
    if (playedMiniAlertInfo.whatIsPlayed != whatIsPlayed(data.settings.lang)) {
        playedMiniAlert.edit(`${whatIsPlayed(data.settings.lang)} ${data.settings.musicPlayerOn ? '<br /><button id="skipThisSong">>></button>' : ""}`)
        if (playedMiniAlert.showed) document.getElementById("skipThisSong").addEventListener("click", skipMusic)
        playedMiniAlertInfo.whatIsPlayed = whatIsPlayed(data.settings.lang)
    }

    if (gType == "homeScreen" && !playedMiniAlert.showed) {
        playedMiniAlert.edit(`${whatIsPlayed(data.settings.lang)} ${data.settings.musicPlayerOn ? '<br /><button id="skipThisSong">>></button>' : ""}`)
        playedMiniAlert.show(Infinity)
        if (data.settings.musicPlayerOn && !playedMiniAlertInfo.addedClickEvent) {
            document.getElementById("skipThisSong").addEventListener("click", skipMusic)
            playedMiniAlertInfo.addedClickEvent = true
        }
    } else if (gType != "homeScreen" && playedMiniAlert.showed) {
        playedMiniAlertInfo.addedClickEvent = false
        playedMiniAlert.hide()
    }

    document.querySelectorAll("div#game.home img.character").forEach((element) => {
        element.width = 110 + (window.innerWidth % 120) / Math.floor((window.innerWidth - 24) / 120)
        element.height = element.width
    })

    // console.log(gType)

    requestAnimationFrame(framer)
}

/*
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
*/
/**
 * Zmienna dot. gwiezdnych mocy (modyfikacji gier)
 */
var gameModify = {
    getColab: function (playerSPUseArgument = "--ds") {
        if (playerSPUseArgument == "--ds") var playerSPUType = playerSPUser + ""
        else var playerSPUType = playerSPUseArgument + ""
        console.log(
            `[DEBUG] Użycie po stronie "${playerSPUType}" ("${playerSPUseArgument}" dla parametru, dla zmiennej "${playerSPUType}"; ruch nr. ${
                matchSettings.moves
            }; ${++gmx} użycie)`
        )

        return {
            /** Typ gracza
             * @type {"player" | "bot"}
             */
            type: playerSPUType,
            /**
             * Zwraca aktualny poziom konta
             * @returns {{player: number, bot: number}} *tymczasowo są równe; możliwe, że po wprowadzeniu multiplayer się coś zmieni*
             */
            playersLevel() {
                return { player: data.lvl, bot: data.lvl }
            },
            you: {
                hp: {
                    /**
                     * Zwraca ilość aktualnego HP
                     * @returns {number}
                     */
                    get: function () {
                        return matchSettings[playerSPUType].health
                    },
                    /**
                     * Ustawia wartość HP na zasadzie procentowej
                     * @param {number} prectange Procent, należy przyjmować jako **`*100`**
                     * @param {boolean} maxHPToo Czy maksymalne HP też ma być wpływane
                     * @returns {number} Zwrot ustawionej wartości, jeżeli mniejsza, liczba jest na plusie, jeżeli większa - na minusie
                     */
                    setPrectange: function (prectange, maxHPToo) {
                        prectange = prectange / 100
                        var element = document.querySelector(`div#game.match div[gameplay="${playerSPUType}"] div.healthBar div.health`)

                        var bHealth = matchSettings[playerSPUType].health

                        matchSettings[playerSPUType].health = Math.round(matchSettings[playerSPUType].health * prectange)
                        if (maxHPToo) {
                            element.style.setProperty("--healthMax", Math.round(element.style.getPropertyValue("--healthMax") * prectange))
                        } else {
                            matchSettings[playerSPUType].health = Math.min(matchSettings[playerSPUType].health, Number(element.style.getPropertyValue("--healthMax")))
                        }

                        updateHP(playerSPUType)

                        return matchSettings[playerSPUType].health - bHealth
                    },
                    /**
                     * Ustawia wartość HP na zasadzie liczbowej
                     * @param {number} value
                     * @param {boolean} maxHP Czy ma zmienić maksymalne HP
                     */
                    setValue: function (value, maxHP) {
                        value = Math.round(value)
                        var element = document.querySelector(`div#game.match div[gameplay="${playerSPUType}"] div.healthBar div.health`)

                        if (maxHP) {
                            element.style.setProperty("--healthMax", value)
                        } else {
                            matchSettings[playerSPUType].health = Math.min(matchSettings[playerSPUType].health + value, Number(element.style.getPropertyValue("--healthMax")))
                        }

                        updateHP(playerSPUType)
                    },
                    /**
                     * Zwraca średnią HP (*aktualne* przez *maksymalne*)
                     * @returns Numer w skali od `1` do **`0` i mniej**
                     */
                    factor: function () {
                        var element = document.querySelector(`div#game.match div[gameplay="${playerSPUType}"] div.healthBar div.health`)
                        return matchSettings[playerSPUType].health / Number(element.style.getPropertyValue("--healthMax"))
                    },
                },
                atk: {
                    /**
                     * Podaje ilość ataków
                     * @returns {number}
                     */
                    getLenght: function () {
                        return matchSettings[playerSPUType].atk.length
                    },
                    /**
                     * Pobiera wartości ataków
                     * @param {"all" | "last" | "random" | number} id
                     * @returns {number | number[]}
                     */
                    getValue: function (id) {
                        if (id == "last") id = matchSettings[playerSPUType].atk.length - 1
                        if (id == "random") id = Math.floor(Math.random() * matchSettings[playerSPUType].atk.length)

                        return id == "all" ? matchSettings[playerSPUType].atk : matchSettings[playerSPUType].atk[id]
                    },
                    /**
                     * Ustawia procent wartości ataków
                     * @param {number} prectange Procent, należy przyjmować jako **`*100`**
                     * @param {"all" | "last" | "random" | number} id
                     * @returns {number | number[]} Zwrot ustawionej wartości, jeżeli mniejsza, liczba jest na plusie, jeżeli większa - na minusie
                     */
                    setPrectange: function (prectange, id) {
                        prectange = prectange / 100

                        if (id == "last") id = matchSettings[playerSPUType].atk.length - 1
                        if (id == "random") id = Math.floor(Math.random() * matchSettings[playerSPUType].atk.length)

                        var bATK

                        if (id == "all") {
                            bATK = []

                            for (let i = 0; i < matchSettings[playerSPUType].atk.length; i++) {
                                bATK[i] = matchSettings[playerSPUType].atk[i]
                                matchSettings[playerSPUType].atk[i] = Math.round(matchSettings[playerSPUType].atk[i] * prectange)
                                bATK[i] = matchSettings[playerSPUType].atk[i] - bATK[i]
                            }
                        } else {
                            bATK = matchSettings[playerSPUType].atk[id]
                            matchSettings[playerSPUType].atk[id] = Math.round(matchSettings[playerSPUType].atk[id] * prectange)
                            bATK = matchSettings[playerSPUType].atk[id] - bATK
                        }

                        return bATK
                    },
                    /**
                     * Ustawia wartość wartości ataków
                     * @param {number} prectange
                     * @param {"all" | "last" | "random" | number} id
                     */
                    setValue: function (value, id) {
                        value = Math.round(value)

                        if (id == "last") id = matchSettings[playerSPUType].atk.length - 1
                        if (id == "random") id = Math.floor(Math.random() * matchSettings[playerSPUType].atk.length)

                        if (id == "all") {
                            for (let i = 0; i < matchSettings[playerSPUType].atk.length; i++) {
                                matchSettings[playerSPUType].atk[i] = value
                            }
                        } else {
                            matchSettings[playerSPUType].atk[id] = value
                        }
                    },
                },
                /**
                 * Działania na kodzie JSON
                 */
                JSON: {
                    /**
                     * Ustawia cały kod JSON (powoduje też reset średniej HP na 1)
                     * @param {{}} JSON Kod JSON odpowiedni ze zmienną `matchSettings[playerSPUser]`
                     */
                    set: function (JSON) {
                        matchSettings[playerSPUType] = JSON

                        regenerate(playerSPUType, false)
                    },
                    /**
                     * Podmienia klucze JSON
                     * @param {{}} JSON Kod JSON odpowiedni z parametrami `matchSettings[playerSPUser]`
                     */
                    change: function (JSON) {
                        let JSON_keys = Object.keys(JSON)

                        for (let i = 0; i < JSON_keys.length; i++) matchSettings[playerSPUType][JSON_keys[i]] = JSON[JSON_keys[i]]
                        if (
                            JSON_keys.includes("health") ||
                            JSON_keys.includes("lvl") ||
                            JSON_keys.includes("spHave") ||
                            JSON_keys.includes("name") ||
                            (playerSPUType === "player" && JSON_keys.includes("points"))
                        )
                            regenerate(playerSPUType, true)
                    },
                    /**
                     * Pobiera kod JSON dla danego gracza
                     * @param {string} keys Klucz JSON
                     * @returns {string | number | number[] | undefined | {}} Wyświetla typ wartości odpowiedni dla *`keys`*
                     * @example gameModify.getColab().JSON.get("spUses")
                     * // => 3
                     *
                     * gameModify.getColab().you.JSON.get("atk")
                     * // => [ 200, 59033, 432534, ... ]
                     * gameModify.getColab().JSON.get("atk")[0] == gameModify.getColab().JSON.get("atk.0")
                     * // => true
                     *
                     * gameModify.getColab().you.JSON.get("name")
                     * // => "habby"
                     *
                     * gameModify.getColab().you.JSON.get("variables.notDefined")
                     * // => undefined
                     */
                    get: function (keys = "") {
                        var JSONKey = matchSettings[playerSPUType]
                        if (keys != "") {
                            keys = keys.split(".")
                            for (let i = 0; i < keys.length; i++) {
                                if (keys[i] in JSONKey) JSONKey = JSONKey[keys[i]]
                                else {
                                    JSONKey = undefined
                                    break
                                }
                            }
                        }

                        return JSONKey
                    },
                },
                /**
                 * Zwraca poziom postaci
                 * @returns {number}
                 */
                getLevel: function () {
                    return playerSPUType == "player" ? data.characters[matchSettings.player.name].lvl : matchSettings.bot.lvl
                },
            },
            enemy: {
                /**
                 * Atakuje przeciwnika
                 * @param {number} value
                 * @returns {{ atk: number, btp: number, crit: boolean }}
                 */
                attack: function (value) {
                    return dmg(playerSPUType == "bot" ? "player" : "bot", value, true)
                },
                crit: {
                    change: function (value) {
                        if (value == "random") value = Math.round(Math.random() * 1000)

                        matchSettings[playerSPUType == "bot" ? "player" : "bot"].critChance = value
                    },
                    get: function () {
                        return matchSettings[playerSPUType == "bot" ? "player" : "bot"].critChance
                    },
                },
                name: function () {
                    return matchSettings[playerSPUType == "bot" ? "player" : "bot"].name
                },
                hp: {
                    /*  
                        return (
                            matchSettings[playerSPUType].health / Number(element.style.getPropertyValue("--healthMax"))
                        ) */
                    value: function () {
                        return matchSettings[playerSPUType == "bot" ? "player" : "bot"].health
                    },
                    factor: function () {
                        var element = document.querySelector(`div#game.match div[gameplay="${playerSPUType == "bot" ? "player" : "bot"}"] div.healthBar div.health`)
                        return Math.max(matchSettings[playerSPUType == "bot" ? "player" : "bot"].health / Number(element.style.getPropertyValue("--healthMax")), 0)
                    },
                },
                /**
                 * To samo co `gameModify.getColab().you.JSON`
                 */
                JSON: {
                    set: function (JSON) {
                        matchSettings[playerSPUType == "player" ? "bot" : "player"] = JSON

                        regenerate(playerSPUType == "player" ? "bot" : "player", false)
                    },
                    change: function (JSON) {
                        var type = playerSPUType == "player" ? "bot" : "player"
                        const JSON_keys = Object.keys(JSON)

                        for (let i = 0; i < JSON_keys.length; i++) matchSettings[type][JSON_keys[i]] = JSON[JSON_keys[i]]
                        if (
                            JSON_keys.includes("health") ||
                            JSON_keys.includes("lvl") ||
                            JSON_keys.includes("spHave") ||
                            JSON_keys.includes("name") ||
                            (type === "player" && JSON_keys.includes("points"))
                        )
                            regenerate(type, true)
                    },
                    /**
                     * @returns {string | number | number[] | undefined | {}}
                     */
                    get: function (keys = "") {
                        const x = matchSettings[playerSPUType == "player" ? "bot" : "player"]
                        var JSONKey = x
                        if (keys != "") {
                            keys = keys.split(".")
                            for (let i = 0; i < keys.length; i++) {
                                if (keys[i] in JSONKey) JSONKey = JSONKey[keys[i]]
                                else {
                                    JSONKey = undefined
                                    break
                                }
                            }
                        }

                        return JSONKey
                    },
                },
            },
            /** Zakańcza SP */
            endSP: function () {
                if (playerSPUType == "player") analyze()
                if (playerSPUType == "bot") {
                    if (matchSettings.player.health <= 0) return endGame(1)

                    document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "flex"
                }
            },
            /** Analizuje koniec gry. Niepraktyczne, najlepiej użyć `getColab().endSP()`
             * @returns {boolean & void}
             */
            analyzeTheEnd: function () {
                var bl = false
                if (matchSettings.player.health < 0) {
                    endGame(1)
                    bl = true
                } else if (matchSettings.bot.health < 0) {
                    endGame(0)
                    bl = true
                }

                return bl
            },
            /**
             * Ustawia daną funkcję na czas w ruchach
             * @param {0 | 1 | "each" | "end"} type Typ funkcji. `"each" | 1` działa na każdy zmienny ruch, a `"end" | 0` tylko gdy już się zakańcza
             * @param {number} moves Ilość ruchów do czekania {ilość}
             * @param {(type: "player" | "bot", relativeMove?: number) => void} f Funkcja wykonywana za każdym ruchem. Najlepiej jest definiować, czyj to ruch. `relativeMove` odpowiada za numer powtórzenia, jeżeli `type` ma typ "each"
             * @example
             * gameModify.getColab().setTimeoutInMoves("each", x, (type: "player" | "bot", relativeMoves: number) => {
             * // Trochę kodu
             * })
             *
             * gameModify.getColab().setTimeoutInMoves("end", x, (type: "player" | "bot") => {
             * // Trochę kodu
             * })
             */
            setTimeoutInMoves: function (type, moves, f) {
                spDurationFunction.push({
                    type: type,
                    whichMove: playerSPUType,
                    moves: {
                        ended: matchSettings.moves + moves,
                        started: matchSettings.moves,
                    },
                    function: f,
                })
            },
        }
    },
    /**
     * Przede wszystkim dźwięki
     */
    spSounds: audios.sp,
    /**
     * Kalkulacja w grze
     * @param {0 | 1 | 2} type Typ przeliczania: 0 przelicza ataki i życia, 1 - ochronę a 2 - osłabienie
     * @param {number} value Wartość dla poziomu 1.
     * @param {number} valuex Mnożnik
     * @param {number} lvl Poziom postaci
     * @returns {number}
     */
    calc: function (type, value, valuex, lvl) {
        lvl--
        const { pow } = Math
        let calcType = [
            value + (value / pow(valuex, 1.34)) * pow(pow(lvl, valuex), 0.72), // hp + ataki
            value + valuex * lvl, // ochrona
            value - valuex * lvl, // osłabienie
        ]

        return Math.round(calcType[type])
    },
    /**
     * Przelicza szansę krytycznego ciosu
     * @param {string} name1 Postać, dla której mają być przeliczana szansa krytycznego ciosu
     * @param {number} lvl1 Poziom postaci *`name1`*
     * @param {string} name2 Postać do podstawienia mocy
     * @returns {number}
     */
    calcCritChance: function (name1, lvl1, name2) {
        let crit = characters_json[name2].tags.includes("sochr") ? 50 : 100
        for (let i = 0; i < characters_json[name2].types.have.length; i++) {
            if ("strong" in characters_json[name1].types)
                if (characters_json[name1].types.strong.ind.indexOf(characters_json[name2].types.have[i]) > -1)
                    crit -= this.calc(1, characters_json[name1].types.strong.def, characters_json[name1].level_up.types.strong, lvl1) / 100
            if ("weak" in characters_json[name1].types)
                if (characters_json[name1].types.weak.ind.indexOf(characters_json[name2].types.have[i]) > -1)
                    crit += this.calc(2, characters_json[name1].types.weak.def, characters_json[name1].level_up.types.weak, lvl1) / 100
        }

        return crit
    },
    getMoves: function () {
        return matchSettings.moves
    },
}

//eksport dodatkowych funkcji
export { gType, getSettingData, gameModify }
