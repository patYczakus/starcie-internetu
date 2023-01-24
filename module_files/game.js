import { app } from "./database.js"
import { getDatabase, ref, child, get, onValue, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
import { logOut } from "./login.js"
import { chest, classes } from "./lists.js"
import { checkSettings } from "./checkSettings.js"
import { charaList } from "./characters.js"

var data = {
    version: 1,
    coins: 1000,
    lvl: 1,
    tokens: 1,
    xp: {
        have: 0,
        to_next_lvl: 1000,
    },
    characters: {
        habby: { lvl: 1 },
    },
    settings: {
        seeOnlyUnlocked: false,
        resetFont: false,
    }
}
var texts = {}
var matchSettings = {
    player: {
        points: 0,
        name: "",
        critChance: 100,
        health: 0,
        atk: [],
    },
    bot: {
        points: 0,
        lvl: 0,
        name: "",
        critChance: 100,
        health: 0,
        atk: [],
    }
}
var characters_json = charaList
var characters_list_names = []
var uidd
var audios = {
    counting: new Audio("https://patyczakus.github.io/starcie-internetu/audios/counting.mp3"),
    start: new Audio("https://patyczakus.github.io/starcie-internetu/audios/start.mp3"),
    attack: new Audio("https://patyczakus.github.io/starcie-internetu/audios/attack.wav"),
    criticalAttack: new Audio("https://patyczakus.github.io/starcie-internetu/audios/critical.wav"),
}

const database = getDatabase(app)
export function start(uid) {
    uidd = uid

    function second_task() {
        if (data.settings.resetFont) document.body.classList.add("resetFont")
        characters_list_names = Object.keys(characters_json)

        document.body.innerHTML = `<div id="popup_info"></div><div id="game" class="bar">🪙${data.coins}<button style="opacity: 0; width: 20px"></button>LVL ${data.lvl} (${Math.round((data.xp.have / data.xp.to_next_lvl) * 10000) / 100}%) <button id="home" style="background:gray">🏠</button></div><div id="game" class="home"></div><div id="info"><div class="t"></div><div class="o"></div></div><div id="game" class="match"></div>`
        document.querySelector("div#info div.t").addEventListener("click", () => {
            document.querySelector("div#info").classList.remove("active")
        })
        document.querySelector("div#game.bar #home").addEventListener("click", () => {
            createHome()
        })
        index()

        onValue(ref(database, `starcie-internetu/data/${uid}`), (snpsht) => {
            if (data.settings.resetFont && !document.body.classList.contains("resetFont")) document.body.classList.add("resetFont")
            if (!data.settings.resetFont && document.body.classList.contains("resetFont")) document.body.classList.remove("resetFont")
            data = snpsht.val()
            if (data.xp.have >= data.xp.to_next_lvl) {
                data.xp.have -= data.xp.to_next_lvl
                data.xp.to_next_lvl = data.xp.to_next_lvl * 2
                data.lvl++
                
                data.tokens++
                data.coins = 500 * data.lvl-1

                const alert = new miniAlert("Wbito kolejny poziom twojego konta!")
                alert.show(4000)
                return set(ref(database, `starcie-internetu/data/${uid}`), data)
            }

            document.querySelector("#game.bar").innerHTML = `🪙${data.coins}<button style="opacity: 0; width: 20px"></button>LVL ${data.lvl} (${Math.round((data.xp.have / data.xp.to_next_lvl) * 10000) / 100}%) <button id="home" style="background:gray">🏠</button>`
            document.querySelector("div#game.bar #home").addEventListener("click", () => {
                createHome()
            })
            index()
        })
    }

    get(child(ref(database), `starcie-internetu/data/${uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshot.val()
            set(ref(getDatabase(app), `starcie-internetu/data/${uid}/settings`), checkSettings(data.settings).json).then(second_task)
        } else {
            set(ref(database, `starcie-internetu/data/${uid}`), data).then(second_task)
        }
    }).catch((err) => { 
        console.error(err)
        document.body.innerHTML = `<div execute="loginForm">Wyłapano błąd! Możesz spróbować połączyć się z bazą danych jeszcze raz. <button>Połącz</button></div>`
        document.querySelector(`div[execute="loginForm"] button`).addEventListener("click", () => { start(uid) })
    })
}

function index() {
    document.querySelector("div#game.home").innerHTML = ""
    var text = ""
    var characters_have_list_names = Object.keys(data.characters)
    
    for (let i = 0; i < characters_list_names.length; i++) {
        if (characters_list_names[i] in data.characters) text += `<img draggable="false" id="${characters_list_names[i]}" class="canViewInfo ${characters_json[characters_list_names[i]].class}" width="110" height="110" src="${characters_json[characters_list_names[i]].image}" />`
        else if (!data.settings.seeOnlyUnlocked) text += `<img draggable="false" class="disabled" width="110" height="110" src="${characters_json[characters_list_names[i]].image}" />`
    }

    document.querySelector("div#game.home").innerHTML = text

    characters_have_list_names = Object.keys(data.characters)
    for (let i = 0; i < characters_have_list_names.length; i++) {
        text = ""
        for (let ii = 0; ii < characters_json[characters_have_list_names[i]].battle.length; ii++) text += `<tr><td style="font-size: 140%">${characters_json[characters_have_list_names[i]].battle[ii].name}</td><td><u>ATK</u> ${characters_json[characters_have_list_names[i]].battle[ii].atk * Math.pow(characters_json[characters_have_list_names[i]].level_up.battle[ii], data.characters[characters_have_list_names[i]].lvl-1)}</td><td><u>BPT</u> ${characters_json[characters_have_list_names[i]].battle[ii].points}</td></tr>`
        texts[characters_have_list_names[i]] = text
        
        // console.log(characters_list_names[i], characters_json[characters_list_names[i]].level_up)
        document.querySelector(`div#game.home img#${characters_have_list_names[i]}.canViewInfo`).addEventListener("click", () => {
            document.querySelector("div#info div.o").innerHTML = `<button id="close">Wyjdź</button><span style="display: block; font-size: 200%; padding: 25px 0">${characters_have_list_names[i]}<br />(LVL ${data.characters[characters_have_list_names[i]].lvl}/${characters_json[characters_have_list_names[i]].max_lvl})</span><u>Wymiar</u> ${characters_json[characters_have_list_names[i]].dimension}<br /><u>HP</u> ${characters_json[characters_have_list_names[i]].hp * Math.pow(characters_json[characters_have_list_names[i]].level_up.hp, data.characters[characters_have_list_names[i]].lvl-1)}<ul><u>Moce</u><li>Posiadające<div style="font-size: 75%">${characters_json[characters_have_list_names[i]].types.have.join(", ")}</div></li><li>Odporne na:${"strong" in characters_json[characters_have_list_names[i]].types ? '<div style="font-size: 75%">' + characters_json[characters_have_list_names[i]].types.strong.ind.join(", ") + "</div>> <u>DEF</u> " + (characters_json[characters_have_list_names[i]].types.strong.def + characters_json[characters_have_list_names[i]].level_up.types.strong * (data.characters[characters_have_list_names[i]].lvl-1)) : "<br />[ brak ]"}</li><li>Osłabione na:${"weak" in characters_json[characters_have_list_names[i]].types ? '<div style="font-size: 75%">' + characters_json[characters_have_list_names[i]].types.weak.ind.join(", ") + "</div>> <u>DEF</u> -" + (characters_json[characters_have_list_names[i]].types.weak.def - characters_json[characters_have_list_names[i]].level_up.types.weak * (data.characters[characters_have_list_names[i]].lvl-1)) : "<br />[ brak ]"}</li></ul><u>Ataki</u> <table><tbody>${texts[characters_have_list_names[i]]}</tbody></table>`
            if (data.characters[characters_have_list_names[i]].lvl == characters_json[characters_have_list_names[i]].max_lvl) document.querySelector("div#info div.o").innerHTML += `<div style="font-size: 75%;">Wbito maksymalny poziom; spowoduje to premię <u>+${Math.floor(characters_json[characters_have_list_names[i]].max_lvl * classes.indexOf(characters_json[characters_have_list_names[i]].class))}xp</u> do twojego konta po wydropieniu go ze skrzyni.</div>`
            document.querySelector("div#info").classList.add("active")
            document.querySelector(`div#info div.o button#close`).addEventListener("click", () => { document.querySelector("div#info").classList.remove("active") })
        })
    }
}

async function save(showInfo = Boolean(false)) {
    set(ref(database, `starcie-internetu/data/${uidd}`), data).then(() => {
        if (!showInfo) return
        
        const alert = new miniAlert("Odświeżono pomyślnie!")
        alert.show(3000)
    })
}

function createHome() {
    document.querySelector("div#info div.o").innerHTML = `<button id="match" style="width:100%;">Walcz</button><br />
    <button id="chest" style="width:100%;">Otwórz skrzynię${data.tokens > 0 ? " (FREE)" : " (1200🪙)"}</button><br />
    <button id="save" style="width:100%;">Odśwież bazę danych</button><br />
    <button id="log-out" style="width:100%;">Wyloguj</button><br /><br />
    ID: <span><button id="uid">Odkryj</button></span><br />
    Wyświetlaj tylko odblokowane postacie <button id="setting1">${data.settings.seeOnlyUnlocked ? "✅" : "❌"}</button><br />
    Zresetuj czcionkę na podstawową <button id="setting2">${data.settings.resetFont ? "✅" : "❌"}</button>
    <iframe class="reset" src="./ogloszenia.html"></iframe>`

    document.querySelector("#info #chest").addEventListener("click", open_chest)
    document.querySelector("#info #match").addEventListener("click", startMatch)
    document.querySelector("#info #log-out").addEventListener("click", () => {
        save(false).then(logOut)
    })
    document.querySelector("#info #save").addEventListener("click", () => {
        save(true)
    })
    document.querySelector("#info #uid").addEventListener("click", () => {
        document.querySelector("div#info div.o span").innerHTML = uidd
    })
    document.querySelector("#info #setting1").addEventListener("click", () => {
        if (data.settings.seeOnlyUnlocked) data.settings.seeOnlyUnlocked = false
        else data.settings.seeOnlyUnlocked = true
        document.querySelector("#info #setting1").innerText = data.settings.seeOnlyUnlocked ? "✅" : "❌"
        save(false)
    })
    document.querySelector("#info #setting2").addEventListener("click", () => {
        if (data.settings.resetFont) data.settings.resetFont = false
        else data.settings.resetFont = true
        document.querySelector("#info #setting2").innerText = data.settings.resetFont ? "✅" : "❌"
        save(false)
    })
    document.querySelector("div#info").classList.add("active")
}

class miniAlert {
    constructor(text = String(), type = String("info")) { 
        this.text = text
        this.alertType = type.toLowerCase()
    }
    show(time = Number(3000)) {
        if (this.alertType == "info") {
            document.getElementById("popup_info").style.color = "black"
        }
        else if (this.alertType == "error") {
            document.getElementById("popup_info").style.color = "red"
        }

        document.getElementById("popup_info").innerHTML = this.text
        document.getElementById("popup_info").classList.add("active")
        setTimeout(() => { document.getElementById("popup_info").classList.remove("active") }, time)
    }
    edit(){
        document.getElementById("popup_info").innerHTML = this.text
    }
}

function open_chest() {
    if (data.tokens == 0 && data.coins < 1200) return new miniAlert("Brak posiadanych środków! Skrzynka kosztuje 1200🪙", "error").show(5000)
    if (data.tokens > 0) data.tokens--
    else data.coins -= 1200

    var _class = chest[Math.floor(Math.random() * chest.length)]
    var character_name = String()
    var beforeCoins = data.coins

    document.querySelector("div#game.match").innerHTML = `<div class="center"><div class="img"></div>Wylosowano: </div>`
    document.querySelector("div#game.match").style.display = "block"

    do {
        character_name = characters_list_names[Math.floor(Math.random() * characters_list_names.length)]
        // console.log(_class, characters_json[character_name].class)
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
        
        if (bool2) data.characters[character_name].lvl++
        else data.xp.have += Math.floor(characters_json[character_name].max_lvl * classes.indexOf(characters_json[character_name].class))
    } else data.characters[character_name] = { lvl: 1 }

    document.querySelector("div#game.match div.center").innerHTML += character_name
    document.querySelector("div#game.match div.center div.img").innerHTML = `<img style="margin-left: 15px;" draggable="false" class="${characters_json[character_name].class}" width="200" height="200" src="${characters_json[character_name].image}" />`
    if (bool1) document.querySelector("div#game.match div.center").innerHTML += `<br /><span style="font-size: 15px">W ramach posiadania dostajesz ${data.coins - beforeCoins}🪙 oraz ${bool2 ? "poziom wyżej postaci" : "+" + Math.floor(characters_json[character_name].max_lvl * classes.indexOf(characters_json[character_name].class)) + "xp do twojego konta"}</span>`
    document.querySelector("div#game.match div.center").innerHTML += `<button style="margin-top: 15px;">Wyjdź</button>`
    save(false).then(() => {
        document.querySelector("#info #chest").innerText = `Otwórz skrzynię${data.tokens > 0 ? " (FREE)" : " (1200🪙)"}`
        document.querySelector("div#game.match div.center button").addEventListener("click", () => {
            document.querySelector("div#game.match").style.display = "none"
        })
    })
}



function startMatch() {
    let list = Object.keys(data.characters)
    matchSettings.player.name = list[Math.floor(Math.random() * list.length)]

    for (let i = 0; i < characters_json[matchSettings.player.name].battle.length; i++) {
        matchSettings.player.atk[i] = characters_json[matchSettings.player.name].battle[i].atk * Math.pow(characters_json[matchSettings.player.name].level_up.battle[i], data.characters[matchSettings.player.name].lvl-1)
    }
    matchSettings.player.health = characters_json[matchSettings.player.name].hp * Math.pow(characters_json[matchSettings.player.name].level_up.hp, data.characters[matchSettings.player.name].lvl-1)

    do {
        matchSettings.bot.name = characters_list_names[Math.floor(Math.random() * characters_list_names.length)]
        // console.log(matchSettings.bot.name, characters_json[matchSettings.bot.name].dimension)
    } while (characters_json[matchSettings.bot.name].dimension == characters_json[matchSettings.player.name].dimension)
    matchSettings.bot.lvl = Math.round(Math.random() * data.characters[matchSettings.player.name].lvl / 5) - 2
    matchSettings.bot.lvl = data.characters[matchSettings.player.name].lvl + matchSettings.bot.lvl > characters_json[matchSettings.bot.name].max_lvl ? characters_json[matchSettings.bot.name].max_lvl : data.characters[matchSettings.player.name].lvl + matchSettings.bot.lvl < 1 ? 1 : data.characters[matchSettings.player.name].lvl + matchSettings.bot.lvl

    for (let i = 0; i < characters_json[matchSettings.bot.name].battle.length; i++) {
        matchSettings.bot.atk[i] = characters_json[matchSettings.bot.name].battle[i].atk * Math.pow(characters_json[matchSettings.bot.name].level_up.battle[i], matchSettings.bot.lvl-1)
    }
    matchSettings.bot.health = characters_json[matchSettings.bot.name].hp * Math.pow(characters_json[matchSettings.bot.name].level_up.hp, matchSettings.bot.lvl-1)
    
    for (let i = 0; i < characters_json[matchSettings.player.name].types.have.length; i++) {
        if ("strong" in characters_json[matchSettings.bot.name].types) if (characters_json[matchSettings.bot.name].types.strong.ind.indexOf(characters_json[matchSettings.player.name].types.have[i]) > -1) matchSettings.bot.critChance -= characters_json[matchSettings.bot.name].types.strong.def / 100
        if ("weak" in characters_json[matchSettings.bot.name].types) if (characters_json[matchSettings.bot.name].types.weak.ind.indexOf(characters_json[matchSettings.player.name].types.have[i]) > -1) matchSettings.bot.critChance += characters_json[matchSettings.bot.name].types.weak.def / 100
    }
    for (let i = 0; i < characters_json[matchSettings.bot.name].types.have.length; i++) {
        if ("strong" in characters_json[matchSettings.player.name].types) if (characters_json[matchSettings.player.name].types.strong.ind.indexOf(characters_json[matchSettings.bot.name].types.have[i]) > -1) matchSettings.player.critChance -= characters_json[matchSettings.player.name].types.strong.def / 100
        if ("weak" in characters_json[matchSettings.player.name].types) if (characters_json[matchSettings.player.name].types.weak.ind.indexOf(characters_json[matchSettings.bot.name].types.have[i]) > -1) matchSettings.player.critChance += characters_json[matchSettings.player.name].types.weak.def / 100
    }

    document.querySelector("div#game.match").innerHTML = `<div id="gameplay" gameplay="player" class="center half"><div class="healthBar"><div class="health" style="--health: ${matchSettings.player.health}; --healthMax: ${matchSettings.player.health};"></div></div><img draggable="false" class="${characters_json[matchSettings.player.name].class}" width="170" height="170" src="${characters_json[matchSettings.player.name].image}" /><span style="font-size: 35%">LVL: ${data.characters[matchSettings.player.name].lvl}</span><span class="name"></span></div><div id="gameplay" gameplay="bot" class="center half"><div class="healthBar"><div class="health" style="--health: ${matchSettings.bot.health}; --healthMax: ${matchSettings.bot.health};"></div></div><img draggable="false" class="${characters_json[matchSettings.bot.name].class}" width="170" height="170" src="${characters_json[matchSettings.bot.name].image}" /><span style="font-size: 35%">LVL: ${matchSettings.bot.lvl}</span><span class="name"></span></div>`
    document.querySelector("div#info").classList.remove("active")
    document.querySelector("div#game.match").style.display = "block"

    document.querySelector(`div#game.match div[gameplay="player"]`).classList.add("show")
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
    setTimeout(() => {
        audios.counting.pause()
        audios.start.pause()
        audios.start.currentTime = 0
        audios.start.play()
        new miniAlert(`<div style="width: calc(100vw - 60px); text-align: center;">START!</div>`).show(5000)
        document.querySelector(`div#game.match div[gameplay="player"]`).innerHTML += `<div class="btns"></div>`
        for (let i = 0; i < matchSettings.player.atk.length; i++) {
            setTimeout(() => {
                // console.log(characters_json[matchSettings.player.name])
                document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button style="width: calc(50% - 10px); margin: 5px">${characters_json[matchSettings.player.name].battle[i].name}</button>`
            }, 50 * i)
        }
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="heal" style="width: 100%; margin: 5px">Lecz się (+${Math.pow(2, data.characters[matchSettings.player.name].lvl) * 100} HP, -25 BTP)</button>`
        }, 50 * matchSettings.player.atk.length)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="whiteFlag" style="width: 100%; margin: 5px">Poddaj się</button>`
        }, 50 * matchSettings.player.atk.length + 50)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="reset"><button id="getBTP" style="width: 100px; margin: 5px">+${9 + data.lvl} points</button><div>> masz: <span id="BTPNumber">0</span></div></div>`
        }, 50 * matchSettings.player.atk.length + 100)
        setTimeout(() => {
            for (let i = 0; i < matchSettings.player.atk.length; i++) {
                // console.log(document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i])
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("mouseover", () => {
                    document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].innerText = `${characters_json[matchSettings.player.name].battle[i].points} BPT`
                })
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("mouseout", () => {
                    document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].innerText = characters_json[matchSettings.player.name].battle[i].name
                })
                document.querySelectorAll(`div#game.match div[gameplay="player"] div.btns button`)[i].addEventListener("click", () => {
                    if (matchSettings.player.points < characters_json[matchSettings.player.name].battle[i].points) return
                    dmg("bot", matchSettings.player.atk[i])
                    matchSettings.player.points -= characters_json[matchSettings.player.name].battle[i].points
                    document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
                    analyze()
                })
            }
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#heal`).addEventListener("click", () => {
                if (matchSettings.player.health > document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax") / 2) return
                if (matchSettings.player.points < 25) return
                matchSettings.player.health += Math.pow(2, data.characters[matchSettings.player.name].lvl) * 100
                matchSettings.player.points -= 25
                if (matchSettings.player.health > document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")) matchSettings.player.hp = document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")
                document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.setProperty("--health", matchSettings.player.health)
                analyze()
            })
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#getBTP`).addEventListener("click", () => {
                matchSettings.player.points += 9 + data.lvl
                document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
                analyze()
            })
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#whiteFlag`).addEventListener("click", () => {
                if (!confirm("Czy na pewno chcesz się poddać?")) return
                document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
                
                setTimeout(() => {
                    document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                        <div id="theBigText" style="background: rgba(252, 38, 0, 0.541)">PRZEGRANA<br />(przez poddanie)</div>
                        <button class="loginForm">Wyjdź</button>
                    </div>`

                    matchSettings = {
                        player: {
                            points: 0,
                            name: "",
                            critChance: 100,
                            health: 0,
                            atk: [],
                            def: {
                                strong: 0,
                                weak: 0
                            }
                        },
                        bot: {
                            points: 0,
                            lvl: 0,
                            name: "",
                            critChance: 100,
                            health: 0,
                            atk: [],
                            def: {
                                strong: 0,
                                weak: 0
                            }
                        }
                    }

                    document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                        document.querySelector("div#game.match").style.display = "none"
                        document.querySelector("div#game.match").innerHTML = ""
                    })
                }, 1000)
            })
        }, 50 * matchSettings.player.atk.length + 150)
    }, 3000)
}

function dmg(type = String(), atk) {
    var type2 = type == "player" ? "bot" : "player"
    if (Math.round(Math.random() * 1000) > matchSettings[type].critChance) {
        audios.attack.pause()
        audios.attack.currentTime = 0
        matchSettings[type].health -= atk
        matchSettings[type2].points += Math.round(atk / 20)
        audios.attack.play()
        if (type2 = "player") document.querySelector(`div#game.match div[gameplay=${type2}] div.btns span#BTPNumber`).innerText = matchSettings[type2].points
    } else {
        audios.criticalAttack.pause()
        audios.criticalAttack.currentTime = 0
        matchSettings[type].health -= atk * 4
        matchSettings[type2].points += Math.round(atk / 5)
        audios.criticalAttack.play()
        if (type2 = "player") document.querySelector(`div#game.match div[gameplay=${type2}] div.btns span#BTPNumber`).innerText = matchSettings[type2].points
    }
    document.querySelector(`div#game.match div[gameplay="${type}"] div.healthBar div.health`).style.setProperty("--health", matchSettings[type].health)
}

function analyze() {
    document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
    if (matchSettings.bot.health <= 0) return setTimeout(() => {
        var ticketChange = Math.round(Math.random() * 9)
        var xp = 32 + 5 * Math.round(Math.random() * Math.pow(classes.indexOf(characters_json[matchSettings.player.name].class)+1, data.lvl)) + classes.indexOf(characters_json[matchSettings.player.name].class) *  data.lvl
        document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
            <div id="theBigText">WYGRANA!</div>
            <div id="presents">
                <div class="card">
                    <div class="emoji">🪙</div>
                    <div class="info">${Math.round(matchSettings.player.health / Math.pow(4, data.characters[matchSettings.player.name].lvl))}</div>
                </div>
                <div class="card">
                    <div class="emoji">👤</div>
                    <div class="info">+${xp}xp</div>
                </div>
                ${ticketChange == 1 ? `<div class="card">
                    <div class="emoji">🎫</div>
                    <div class="info">1</div>
                </div>` : ""}
            </div>
        </div>`

        data.coins += Math.round(matchSettings.player.health / Math.pow(4, data.characters[matchSettings.player.name].lvl))
        data.xp.have += xp
        data.tokens += ticketChange == 1

        matchSettings = {
            player: {
                points: 0,
                name: "",
                critChance: 100,
                health: 0,
                atk: [],
            },
            bot: {
                points: 0,
                lvl: 0,
                name: "",
                critChance: 100,
                health: 0,
                atk: [],
            }
        }

        save(false).then(() => {
            document.querySelector("div#game.match div#runCenter").innerHTML += "<button>Wyjdź</button>"
            document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                document.querySelector("div#game.match").style.display = "none"
                document.querySelector("div#game.match").innerHTML = ""
            })
        })
    }, 1000)
    setTimeout(() => {
        let canskip
        do {
            let action = Math.round(Math.random() * 16)
            // console.log(action)
            if (action == 0 || action == 1) {
                if (matchSettings.bot.health <= document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.getPropertyValue("--healthMax") / 2 && matchSettings.bot.points >= 25) {
                    canskip = true
                    matchSettings.bot.points -= 25
                    matchSettings.bot.health += Math.pow(2, matchSettings.bot.lvl) * 100
                    if (matchSettings.bot.health > document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.getPropertyValue("--healthMax")) matchSettings.bot.health = document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.getPropertyValue("--healthMax")
                    document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.setProperty("--health", matchSettings.bot.health)
                }
            } else if (action == 2 || action == 3 || action == 4) {
                canskip = true
                matchSettings.bot.points += 10
            } else {
                for (let i = characters_json[matchSettings.bot.name].battle.length-1; i >= 0; i--) {
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
        } while (!canskip)
        // console.log(matchSettings.bot.points, characters_json[matchSettings.bot.name].battle)

        if (matchSettings.player.health <= 0) return setTimeout(() => {
            var xp = Math.round(Math.random() * 16)
            document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                <div id="theBigText" style="background: rgba(252, 38, 0, 0.541)">PRZEGRANA!</div>
                <div id="presents">
                    <div class="card">
                        <div class="emoji">👤</div>
                        <div class="info">+${xp}xp</div>
                    </div>
                </div>
            </div>`

            data.xp.have += xp

            matchSettings = {
                player: {
                    points: 0,
                    name: "",
                    critChance: 100,
                    health: 0,
                    atk: [],
                },
                bot: {
                    points: 0,
                    lvl: 0,
                    name: "",
                    critChance: 100,
                    health: 0,
                    atk: [],
                }
            }

            save(false).then(() => {
                document.querySelector("div#game.match div#runCenter").innerHTML += "<button>Wyjdź</button>"
                document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                    document.querySelector("div#game.match").style.display = "none"
                    document.querySelector("div#game.match").innerHTML = ""
                })
            })
        }, 1000)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "flex"
        }, 1000)
    }, 1000)
}
