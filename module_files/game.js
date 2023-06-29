import { app } from "./database.js"
import { getDatabase, ref, child, get, onValue, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
import { logOut } from "./login.js"
import { chest, classes } from "./listsAndShops.js"
import { checkSettings, settingsList } from "./settingsFunction.js"
import { changeVolume, playSound, whatIsPlayed } from "./player.js"
import { langText } from "./lang.js"
import { createCharacterWithSPFunctions } from "./characters.spf.js"

function module(num) {
    return num >= 0 ? num : num * (-1)
}

var data = {
        version: 2,
        beta: false,
        coins: 1000,
        lvl: 1,
        tokens: 1,
        xp: 0,
        characters: {
            habby: { lvl: 1, sp: false },
        },
        settings: {}
    },
    texts = {},
    matchSettings = {
        player: {
            points: 0,
            name: "",
            critChance: 100,
            health: 0,
            atk: [],
            spUses: 0
        },
        bot: {
            points: 0,
            lvl: 0,
            spHave: false,
            name: "",
            critChance: 100,
            health: 0,
            atk: [],
            spUses: 0
        },
        moves: 0,
    },
    accualVersion = 3,
    characters_list_names = [],
    uidd,
    audios = {
        counting: new Audio("https://patyczakus.github.io/starcie-internetu/audios/counting.mp3"),
        start: new Audio("https://patyczakus.github.io/starcie-internetu/audios/start.mp3"),
        attack: new Audio("https://patyczakus.github.io/starcie-internetu/audios/attack.wav"),
        criticalAttack: new Audio("https://patyczakus.github.io/starcie-internetu/audios/critical.wav"),
        punkty: new Audio("https://patyczakus.github.io/starcie-internetu/audios/punkty-exp_mc.mp3"),
        heal: new Audio("https://patyczakus.github.io/starcie-internetu/audios/heal.mp3"),
        sp: {
            magic: new Audio("https://patyczakus.github.io/starcie-internetu/audios/sp1.wav"),
            vanish: new Audio("https://patyczakus.github.io/starcie-internetu/audios/vanish.mp3"),
            alarm: new Audio("https://patyczakus.github.io/starcie-internetu/audios/alarm.mp3"),
            uAttack: new Audio("https://patyczakus.github.io/starcie-internetu/audios/uAttack.mp3"),
            miss: new Audio("https://patyczakus.github.io/starcie-internetu/audios/miss.mp3"),
            num_num_num: new Audio("https://patyczakus.github.io/starcie-internetu/audios/numnumnum.mp3"),
        }
    },
    gType = "home",
    gCheckedNum = {
        home: -1,
        settings: -1,
        match: -1
    },
    gWhiteFlag = {
        want: false,
        clicks: 0
    },
    showedCheck = false,
    frameBlock,
    gBlock = false,
    playerSPUser = "",
    characters_json = createCharacterWithSPFunctions()
    
const database = getDatabase(app)

/**
 * Sprawdza język i zwraca tekst
 * @param {JSON} JSON Kod JSON języka
 * @param {String} language Praktyczna zmienna języka
 * @returns Tekst zwrócony w tłumaczeniu lub w języku polskim
 */
function checkLanguage(JSON, language) {
    //console.log(JSON, language, typeof JSON)

    return language in JSON ? JSON[language] : JSON.pl
}

/** 
 * Alert, ale za zasadzie dymku.
 */
export class miniAlert {
    /**
     * @param {String} text Wyświetlany tekst
     * @param {String} type Typ dymku. Możliwe typy to: **info (domyślnie)** i **error**
     */
    constructor(text = String(), type = String("info")) { 
        this.text = text
        this.alertType = type.toLowerCase()
    }
    /**
     * Pokazuje na określony czas `miniAlert()`
     * @param {Number} time Czas (w milisekundach)
     */
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
    /**
     * Zmienia tekst podczas uruchomienia 
     * @param {String} text Tekst do zmiany
     */
    edit (text) {
        if (document.getElementById("popup_info").classList.contains("active")) document.getElementById("popup_info").innerHTML = text
        this.text = text
    }
}

/**
 * Rozpoczyna system grania
 * @param {*} uid ID gracza
 */
export function start(uid) {
    uidd = uid

    window.addEventListener("gamepadconnected", () => { 
        requestAnimationFrame(gamepadAction)
        console.log("Podłączony")
    })

    function second_task() {

        if (data.settings.resetFont) document.body.classList.add("resetFont")
        characters_list_names = Object.keys(characters_json)

        document.body.innerHTML = `<div id="popup_info"></div><div id="game" class="bar"><img width="20" height="20" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙">${data.coins}<button style="opacity: 0; width: 20px"></button>LVL ${data.lvl} (${Math.round(data.xp * 2) / 100}%) <button id="home" style="background:gray">🏠 <img class="cnsl" draggable="false" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616087302286/sketch-1675498581741.png"></button></div><div id="game" class="home"></div><div id="info"><div class="t"></div><div class="o"></div></div><div id="game" class="match"></div>`
        document.querySelector("div#info div.t").addEventListener("click", () => {
            document.querySelector("div#info").classList.remove("active")
            gType = "home"
        })
        document.querySelector("div#game.bar #home").addEventListener("click", () => {
            createHome()
        })
        index()

        onValue(ref(database, `starcie-internetu/data/${uid}`), (snpsht) => {
            if (data.settings.resetFont && !document.body.classList.contains("resetFont")) document.body.classList.add("resetFont")
            if (!data.settings.resetFont && document.body.classList.contains("resetFont")) document.body.classList.remove("resetFont")
            data = snpsht.val()
            if (data.xp >= 5000) {
                data.xp -= 5000
                data.lvl++
                
                data.tokens++
                data.coins += 500 * (data.lvl-1)

                const alert = new miniAlert("Wbito kolejny poziom twojego konta!")
                alert.show(4000)
                return set(ref(database, `starcie-internetu/data/${uid}`), data)
            }

            document.querySelector("#game.bar").innerHTML = `<img width="25" height="25" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙">${data.coins}<button style="opacity: 0; width: 20px"></button>LVL ${data.lvl} (${Math.round(data.xp * 2) / 100}%) <button id="home" style="background:gray">🏠 <img class="cnsl" draggable="false" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616087302286/sketch-1675498581741.png"></button>`
            document.querySelector("div#game.bar #home").addEventListener("click", () => {
                createHome()
            })
            index()
        })
    }

    get(child(ref(database), `starcie-internetu/data/${uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val().version == accualVersion) data = snapshot.val()
            else if (snapshot.val().version == 1 || snapshot.val().beta) data.beta = true

            //nagrody
            if (snapshot.val().version < accualVersion) {
                data.tokens = 5
                data.characters.kiranaYonome = { lvl: 1, sp: false }
                data.characters.twinz = { lvl: 1, sp: true }
                data.coins = 2500
            }

            data.version = accualVersion

            if (data.settings.playerOn) playSound(true)

            data.settings = checkSettings(data.settings).json
            frameBlock = data.settings.numberOfBlockFrames

            set(ref(getDatabase(app), `starcie-internetu/data/${uid}`), data).then(second_task)
        } else {
            data.settings = checkSettings(data.settings).json
            
            playSound(false)
            set(ref(database, `starcie-internetu/data/${uid}`), data).then(second_task)
        }
    }).catch((err) => { 
        console.error(err)
        document.body.innerHTML = `<div execute="loginForm">Wyłapano błąd! Możesz spróbować połączyć się z bazą danych jeszcze raz. <button>Połącz</button></div>`
        document.querySelector(`div[execute="loginForm"] button`).addEventListener("click", () => { start(uid) })
    })
}

/** Buduje podstawowy panel z postaciami */
function index() {
    document.querySelector("div#game.home").innerHTML = `<span style="font-size: 180%">${checkLanguage(langText.infoOnCharaList, data.settings.lang)}</span><br />`
    var text = ""
    var characters_have_list_names = Object.keys(data.characters)
    
    for (let i = 0; i < characters_list_names.length; i++) {
        if (characters_list_names[i] in data.characters) text += `<img draggable="false" id="${characters_list_names[i]}" class="canViewInfo ${characters_json[characters_list_names[i]].class}" width="110" height="110" src="${characters_json[characters_list_names[i]].image}" />`
        else if (!data.settings.seeOnlyUnlocked) text += `<img draggable="false" class="disabled" width="110" height="110" src="${characters_json[characters_list_names[i]].image}" />`
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
 */
function createCharacterInfo(name) {        
    var text = ""
    for (let ii = 0; ii < characters_json[name].battle.length; ii++) text += `<tr>
    <td style="font-size: 145%">${characters_json[name].battle[ii].name}</td>
    <td>
        ATK<br />
        <span style="margin-left: 7px; margin-right: 5px; font-size: 115%">${Math.round(characters_json[name].battle[ii].atk * Math.pow(characters_json[name].level_up.battle[ii], data.characters[name].lvl-1))}</span>
    </td>
    <td>
        BPT<br />
        <span style="margin-left: 7px; margin-right: 5px; font-size: 115%">${characters_json[name].battle[ii].points}</span>
    </td>
    </tr>`
    texts[name] = text
    /**
     * @param {string[]} powlist 
     */
    function translatePowers(powlist) {
        var l = []
        powlist.forEach(powstring => {
            l[l.length] = checkLanguage(langText.powers[powstring], data.settings.lang)
        })

        return l
    }

    document.querySelector("div#info div.o").innerHTML = `<input type="hidden" id="nameInfo" value="${name}" />
    <button id="close">${checkLanguage(langText.btns.leave, data.settings.lang)} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"></button>`

    document.querySelector("div#info div.o").innerHTML += checkLanguage(langText.characterInfo.core, data.settings.lang)
        .replace("{ch_name}", `<span style="--fbs: 2px; font-size: 140%" class="classNameColor ${characters_json[name].class}">${name}</span>`)
        .replace("{ch_lvl}", data.characters[name].lvl)
        .replace("{ch_lvl.max}", characters_json[name].max_lvl)
        .replace("{ch_desc}", `<div id="descriptionxD">${checkLanguage(characters_json[name].description, data.settings.lang)}</div>`)
        .replace("{ch_dim}", characters_json[name].dimension)
        .replace("{ch_hp}", gameModify.calc(0, characters_json[name].hp, characters_json[name].level_up.hp, data.characters[name].lvl))
        .replace("{ch_powers.have}", translatePowers(characters_json[name].types.have).join(", "))
        .replace("{ch_powers.strong}", () => {
            if ("strong" in characters_json[name].types) return `<div style="font-size: 75%">
                ${translatePowers(characters_json[name].types.strong.ind).join(", ")}
            </div>
            DEF: ${gameModify.calc(1, characters_json[name].types.strong.def, characters_json[name].level_up.types.strong, data.characters[name].lvl)}`
            else return `<br />[ ${checkLanguage(langText.characterInfo.nopow, data.settings.lang)} ]`
        })
        .replace("{ch_powers.weak}", () => {
            if ("weak" in characters_json[name].types) return `<div style="font-size: 75%">
                ${translatePowers(characters_json[name].types.weak.ind).join(", ")}
            </div>
            DEF: ${gameModify.calc(2, characters_json[name].types.weak.def, characters_json[name].level_up.types.weak, data.characters[name].lvl)}`
            else return `<br />[ ${checkLanguage(langText.characterInfo.nopow, data.settings.lang)} ]`
        })
        .replace("{ch_atk}", texts[name])
        .replace("{ch_sp_name}", characters_json[name].sp.name)
        .replace("{starpover_bulid}", () => {
            if (data.characters[name].sp) return `${checkLanguage(characters_json[name].sp.description, data.settings.lang)}<br />
            <u>${checkLanguage(langText.characterInfo.mu, data.settings.lang)} ${characters_json[name].sp.maxUses}</u>`
            else return checkLanguage(langText.characterInfo.nosp, data.settings.lang)
        })
        .replace("{upgradeBTN}", () => {
            if (data.characters[name].lvl < characters_json[name].max_lvl) return `<button id="upgrade">${checkLanguage(langText.characterInfo.upg, data.settings.lang)} (${1800 + classes.indexOf(characters_json[name].class) * 200}<img width="15" height="15" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙">)<img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617232355368/sketch-1675498411677.png"></button>`
            else return `<div style="font-size: 75%;">${checkLanguage(langText.characterInfo.maxlvl, data.settings.lang).replace("{xfl}", Math.floor(characters_json[name].max_lvl * (classes.indexOf(characters_json[name].class) + 1)))}</div>`
        })

    document.querySelector("div#info").classList.add("active")
    document.querySelector(`div#info div.o button#close`).addEventListener("click", () => { document.querySelector("div#info").classList.remove("active") })

    if (!data.characters[name].sp) document.querySelector("div#info div.o button#buySP").addEventListener("click", () => {
        if (data.coins < 5000) return new miniAlert(checkLanguage(langText.characterInfo.buy.noenought, data.settings.lang), "error").show(2000)
        data.characters[name].sp = true
        data.coins -= 5000
        document.querySelector("div#info div.o").innerHTML = "<div class=\"loading small\" style=\"margin: 30px\"></div>"
        save(false).then(() => {
            if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
            audios.punkty.currentTime = 0
            audios.punkty.play()
            new miniAlert(checkLanguage(langText.characterInfo.buy.sp, data.settings.lang)).show(4500)
        })
    })
    if (data.characters[name].lvl < characters_json[name].max_lvl) document.querySelector("div#info div.o button#upgrade").addEventListener("click", () => {
        if (data.coins < 1800 + classes.indexOf(characters_json[name].class) * 200) return new miniAlert(checkLanguage(langText.characterInfo.buy.noenought, data.settings.lang), "error").show(2000)
        data.characters[name].lvl++
        data.coins -= 1800 + classes.indexOf(characters_json[name].class) * 200
        document.querySelector("div#info div.o").innerHTML = "<div class=\"loading small\" style=\"margin: 30px\"></div>"
        save(false).then(() => {
            if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
            audios.punkty.currentTime = 0
            audios.punkty.play()
            new miniAlert(checkLanguage(langText.characterInfo.buy.lvl, data.settings.lang).replace("{charaLVL}", data.characters[name].lvl)).show(4500)
        })
    })

    get(ref(database, `starcie-internetu/followersApiInfo`)).then(snpsht => {
        document.querySelector("#info .o #descriptionxD").innerHTML = document.querySelector("#info .o #descriptionxD").innerHTML.replace("{desc.yk}", snpsht.val().ky)
    })
}

/**
 * Zapis
 * @param {Boolean} showInfo Informacja o zapisie
 */
async function save(showInfo = Boolean(false)) {
    set(ref(database, `starcie-internetu/data/${uidd}`), data).then(() => {
        if (!showInfo) return
        
        const alert = new miniAlert("Odświeżono pomyślnie!")
        alert.show(3000)
    })
}

/**
 * Tworzy panel główny
 */
function createHome() {
    gType = "homeScreen"

    document.querySelector("div#info div.o").innerHTML = `<button id="leave">${checkLanguage(langText.btns.leave, data.settings.lang)} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"></button><br /><br />
    ${whatIsPlayed(data.settings.lang)}
    <button id="match" style="width:100%;">${checkLanguage(langText.home.startFight, data.settings.lang)} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617815363634/sketch-1675498411763.png"></button><br />
    <button id="chest" style="width:100%;">${checkLanguage(langText.home.openChest.general, data.settings.lang)}${data.tokens > 0 ? ` (${checkLanguage(langText.home.openChest.isFree, data.settings.lang)})` : " (1200<img width=\"15\" height=\"15\" draggable=\"false\" src=\"https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif\" alt=\"🪙\">)"} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617626624000/sketch-1675498411734.png"></button><br />
    <button id="settings" style="width:100%;">${checkLanguage(langText.home.setting, data.settings.lang)} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071344026764189706/sketch-1675498714863.png"></button><br />
    <button id="log-out" style="width:100%;">${checkLanguage(langText.home.logout, data.settings.lang)} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617429479484/sketch-1675498411706.png"></button><br /><br />
    ID: <span class="autoSelectable"><button id="uid">${checkLanguage(langText.home.idt, data.settings.lang)}</button></span><br />
    <iframe class="reset" src="./ogloszenia.html"></iframe>`

    document.querySelector("#info #chest").addEventListener("click", open_chest)
    document.querySelector("#info #match").addEventListener("click", startMatch)
    document.querySelector("#info #log-out").addEventListener("click", () => {
        save(false).then(logOut)
    })
    document.querySelector("#info #uid").addEventListener("click", () => {
        document.querySelector("div#info div.o span").innerHTML = uidd
    })
    document.querySelector("#info #leave").addEventListener("click", () => {
        document.querySelector("div#info").classList.remove("active")
    })
    document.querySelector("#info #settings").addEventListener("click", createSettings)
    document.querySelector("div#info").classList.add("active")
}

/**
 * Tworzy ustawienia
 */
function createSettings() {
    showedCheck = false
    gType = "settings"

    document.querySelector("div#info div.o").innerHTML = `<button class="back">${checkLanguage(langText.btns.back, data.settings.lang)} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"></button> 
    ${checkLanguage(langText.setting.slength, data.settings.lang)} ${settingsList.length}<br /><br />`
    let settingsType = []
    for (let i = 0; i < settingsList.length; i++) {
        settingsType[i] = settingsList[i].type.split(/:/g)

        document.querySelector("div#info div.o").innerHTML += `<div class="set">
            <input type="hidden" class="settingType" value="${settingsType[i][0]}" />
            ${settingsList[i].flag} {action}
            <div style="font-size: 75%">${checkLanguage(settingsList[i].description, data.settings.lang)}</div>
        </div>`
        
        if (settingsType[i][0] == "bool") document.querySelector("div#info div.o").innerHTML = document.querySelector("div#info div.o").innerHTML.replace(/{action}/g, `<button class="setting">${data.settings[settingsList[i].flag] ? "✅" : "❌"}</button>`)
        if (settingsType[i][0] == "num") document.querySelector("div#info div.o").innerHTML = document.querySelector("div#info div.o").innerHTML.replace(/{action}/g, `<input type="range" class="setting" name="volume" value="${data.settings[settingsList[i].flag]}" min="${settingsType[i][1]}" max="${settingsType[i][2]}" style="width: 100px" />`)
        if (settingsType[i][0] == "option") document.querySelector("div#info div.o").innerHTML = document.querySelector("div#info div.o").innerHTML.replace(/{action}/g, () => {
            var text = ""
            for (let j = 1; j < settingsType[i].length; j++) {
                text += `<option ${data.settings[settingsList[i].flag] == settingsType[i][j].split("=")[1] ? "selected" : ""} value="${settingsType[i][j].split("=")[1]}">${settingsType[i][j].split("=")[0]}</option>`
            }

            return `<select class="setting">
            ${text}
            </select>`
        })
    }

    document.querySelector("div#info div.o button.back").addEventListener("click", createHome)
    for (let i = 0; i < settingsList.length; i++) {
        if (settingsType[i][0] == "bool") document.querySelectorAll("div#info div.o .setting")[i].addEventListener("click", () => {
            data.settings[settingsList[i].flag] = !data.settings[settingsList[i].flag]
            document.querySelectorAll("div#info div.o button.setting")[i].innerText = data.settings[settingsList[i].flag] ? "✅" : "❌"
            save(false)
        })
        if (settingsType[i][0] == "num") document.querySelectorAll("div#info div.o .setting")[i].addEventListener("click", () => {
            data.settings[settingsList[i].flag] = Number(document.querySelectorAll("div#info div.o .setting")[i].value)
            save(false)
        })
        if (settingsType[i][0] == "option") document.querySelectorAll("div#info div.o .setting")[i].addEventListener("change", () => {
            data.settings[settingsList[i].flag] = document.querySelectorAll("div#info div.o .setting")[i].value
            console.log(document.querySelectorAll("div#info div.o .setting")[i].value, data.settings)
            save(false).then(() => {
                if (settingsList[i].flag == "lang") createSettings()
            })
        })
    }
}

/**
 * Otwiera skrzynię
 */
function open_chest() {
    changeVolume(40)
    gType = "chest"

    if (data.tokens == 0 && data.coins < 1200) return new miniAlert("Brak posiadanych środków! Skrzynka kosztuje 1200🪙", "error").show(5000)
    if (data.tokens > 0) data.tokens--
    else data.coins -= 1200

    var _class = chest[Math.floor(Math.random() * chest.length)]
    var character_name = String()
    var beforeCoins = data.coins

    document.querySelector("div#game.match").innerHTML = `<div class="center"><div class="img"></div></div>`
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
        else data.xp += Math.floor(characters_json[character_name].max_lvl * (classes.indexOf(characters_json[character_name].class) + 1))
    } else data.characters[character_name] = { lvl: 1, sp: false }

    document.querySelector("div#game.match div.center").innerHTML += checkLanguage(langText.chest.core, data.settings.lang).replace("{charaName}", character_name)
    document.querySelector("div#game.match div.center div.img").innerHTML = `<img style="margin-left: 15px;" draggable="false" class="${characters_json[character_name].class}" width="200" height="200" src="${characters_json[character_name].image}" />`
    if (bool1) document.querySelector("div#game.match div.center").innerHTML += bool2 ? `<br /><span style="font-size: 15px">${checkLanguage(langText.chest.msgIfHave.ifNotMaxLvl, data.settings.lang)}</span>`.replace("{mon}", data.coins - beforeCoins) : `<br /><span style="font-size: 15px">${checkLanguage(langText.chest.msgIfHave.ifMaxLvl, data.settings.lang)}</span>`.replace("{mon}", data.coins - beforeCoins).replace("{xp}", Math.floor(characters_json[character_name].max_lvl * (classes.indexOf(characters_json[character_name].class) + 1)))
    document.querySelector("div#game.match div.center").innerHTML += `<button style="margin-top: 15px;">${checkLanguage(langText.btns.leave, data.settings.lang)} <img class="cnsl" draggable="false" style="border-radius: 0;" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"></button>`
    save(false).then(() => {
        document.querySelector("#info #chest").innerHTML = `Otwórz skrzynię${data.tokens > 0 ? " (FREE)" : " (1200<img width=\"10\" height=\"10\" draggable=\"false\" src=\"https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif\" alt=\"🪙\">)"} <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617626624000/sketch-1675498411734.png">`
        document.querySelector("div#game.match div.center button").addEventListener("click", () => {
            document.querySelector("div#game.match").style.display = "none"
            changeVolume(70)
        })
    })
}

/**
 * Rozpoczyna mecz z botem
 */
function startMatch() {
    gBlock = true
    gType = "match"
    gCheckedNum.match = -1
    showedCheck = false
    matchSettings = {
        player: {
            points: 0,
            name: "",
            critChance: 100,
            health: 0,
            atk: [],
            spUses: 0
        },
        bot: {
            points: 0,
            lvl: 0,
            spHave: false,
            name: "",
            critChance: 100,
            health: 0,
            atk: [],
            spUses: 0
        },
        moves: 0,
    }
    matchSettings.moves = 0
    changeVolume(10)

    // współczynnik posiadanego levela z maksymalnym
    var prec = Number()

    // wybieranie odpowiednich postaci i nadawanie odpowiednich wartości
    let list = Object.keys(data.characters)
    matchSettings.player.name = list[Math.floor(Math.random() * list.length)]

    // gdyby to były testy, można bezpośrednio zmienić wybieraną postać do gry
    //if (location.host == "localhost:5500") matchSettings.player.name = "gabrysiaSotoła"

    for (let i = 0; i < characters_json[matchSettings.player.name].battle.length; i++) {
        matchSettings.player.atk[i] = gameModify.calc(0, characters_json[matchSettings.player.name].battle[i].atk, characters_json[matchSettings.player.name].level_up.battle[i], data.characters[matchSettings.player.name].lvl)
    }
    matchSettings.player.health = gameModify.calc(0, characters_json[matchSettings.player.name].hp, characters_json[matchSettings.player.name].level_up.hp, data.characters[matchSettings.player.name].lvl)

    prec = data.characters[matchSettings.player.name].lvl / characters_json[matchSettings.player.name].max_lvl

    do {
        matchSettings.bot.name = characters_list_names[Math.floor(Math.random() * characters_list_names.length)]
        // console.log(matchSettings.bot.name, characters_json[matchSettings.bot.name].dimension)
    } while (characters_json[matchSettings.bot.name].dimension == characters_json[matchSettings.player.name].dimension)
    matchSettings.bot.lvl = Math.round(Math.random() * (characters_json[matchSettings.bot.name].max_lvl * prec))
    
    console.log(matchSettings.bot.lvl, data.characters[matchSettings.player.name].lvl, "\n", characters_json[matchSettings.bot.name].max_lvl, characters_json[matchSettings.player.name].max_lvl , "\n\n", prec)
    
    matchSettings.bot.lvl = matchSettings.bot.lvl > characters_json[matchSettings.bot.name].max_lvl ? characters_json[matchSettings.bot.name].max_lvl : matchSettings.bot.lvl < 1 ? 1 : matchSettings.bot.lvl
    matchSettings.bot.spHave = (Math.round(Math.random() * 3) + data.characters[matchSettings.player.name].sp) > 2

    for (let i = 0; i < characters_json[matchSettings.bot.name].battle.length; i++) {
        matchSettings.bot.atk[i] = gameModify.calc(0, characters_json[matchSettings.bot.name].battle[i].atk, characters_json[matchSettings.bot.name].level_up.battle[i], matchSettings.bot.lvl)
    }
    matchSettings.bot.health = gameModify.calc(0, characters_json[matchSettings.bot.name].hp, characters_json[matchSettings.bot.name].level_up.hp, matchSettings.bot.lvl)
    
    for (let i = 0; i < characters_json[matchSettings.player.name].types.have.length; i++) {
        if ("strong" in characters_json[matchSettings.bot.name].types) if (characters_json[matchSettings.bot.name].types.strong.ind.indexOf(characters_json[matchSettings.player.name].types.have[i]) > -1) matchSettings.bot.critChance -= characters_json[matchSettings.bot.name].types.strong.def / 100
        if ("weak" in characters_json[matchSettings.bot.name].types) if (characters_json[matchSettings.bot.name].types.weak.ind.indexOf(characters_json[matchSettings.player.name].types.have[i]) > -1) matchSettings.bot.critChance += characters_json[matchSettings.bot.name].types.weak.def / 100
    }
    for (let i = 0; i < characters_json[matchSettings.bot.name].types.have.length; i++) {
        if ("strong" in characters_json[matchSettings.player.name].types) if (characters_json[matchSettings.player.name].types.strong.ind.indexOf(characters_json[matchSettings.bot.name].types.have[i]) > -1) matchSettings.player.critChance -= characters_json[matchSettings.player.name].types.strong.def / 100
        if ("weak" in characters_json[matchSettings.player.name].types) if (characters_json[matchSettings.player.name].types.weak.ind.indexOf(characters_json[matchSettings.bot.name].types.have[i]) > -1) matchSettings.player.critChance += characters_json[matchSettings.player.name].types.weak.def / 100
    }

    // tworzenie layoutu gry
    document.querySelector("div#game.match").innerHTML = `<div id="movesInfo"></div><div id="gameplay" gameplay="player" class="center half"><div class="healthBar"><div class="health" style="--health: ${matchSettings.player.health}; --healthMax: ${matchSettings.player.health};"></div></div><img ${data.characters[matchSettings.player.name].sp ? "matchSP" : ""} draggable="false" class="${characters_json[matchSettings.player.name].class}" width="170" height="170" src="${characters_json[matchSettings.player.name].image}" /><span style="font-size: 35%">LVL: ${data.characters[matchSettings.player.name].lvl}</span><span class="name"></span></div><div id="gameplay" gameplay="bot" class="center half"><div class="healthBar"><div class="health" style="--health: ${matchSettings.bot.health}; --healthMax: ${matchSettings.bot.health};"></div></div><img ${matchSettings.bot.spHave ? "matchSP" : ""} draggable="false" class="${characters_json[matchSettings.bot.name].class}" width="170" height="170" src="${characters_json[matchSettings.bot.name].image}" /><span style="font-size: 35%">LVL: ${matchSettings.bot.lvl}</span><span class="name"></span></div>`
    document.querySelector("div#info").classList.remove("active")
    document.querySelector("div#game.match").style.display = "block"

    // odliczanie
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
        gBlock = false
        new miniAlert(`<div style="width: calc(100vw - 60px); text-align: center;">START!</div>`).show(5000)
        document.querySelector(`div#game.match div[gameplay="player"]`).innerHTML += `<div class="btns"></div>`
        for (let i = 0; i < matchSettings.player.atk.length; i++) {
            setTimeout(() => {
                // console.log(characters_json[matchSettings.player.name])
                document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button class="atk" style="width: calc(50% - 10px); margin: 5px">${characters_json[matchSettings.player.name].battle[i].name}</button>`
            }, 50 * i)
        }
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="heal" style="width: 100%; margin: 5px">${checkLanguage(langText.fight.healBTN, data.settings.lang)} (+${Math.pow(2, data.characters[matchSettings.player.name].lvl) * 100} HP, -25 BTP) <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617232355368/sketch-1675498411677.png"></button>`
        }, 50 * matchSettings.player.atk.length)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="whiteFlag" style="width: 100%; margin: 5px">${checkLanguage(langText.fight.surBTN, data.settings.lang)} <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616087302286/sketch-1675498581741.png">x3</button>`
        }, 50 * matchSettings.player.atk.length + 50)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="reset"><button id="getBTP" style="width: 150px; margin: 5px">+${9 + data.lvl} BTP <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616821305344/sketch-1675498411589.png"></button><div>> ${checkLanguage(langText.fight.BTPInfo, data.settings.lang)}: <span id="BTPNumber">0</span></div></div>`
        }, 50 * matchSettings.player.atk.length + 100)
        if (data.characters[matchSettings.player.name].sp) setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="sp" style="width: 100%; margin: 5px; background: gold">SP - ${characters_json[matchSettings.player.name].sp.name} <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616355749888/sketch-1675498411318.png"></button>`
        }, 50 * matchSettings.player.atk.length + 150)
        setTimeout(() => {
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="resetAndHide">
            ${checkLanguage(langText.fight.PadInfo, data.settings.lang)}
            </div>`
            document.querySelector(`div#game.match div#movesInfo`).innerText += checkLanguage(langText.fight.movefalse, data.settings.lang).replace("{num}", 1)
        }, 50 * (matchSettings.player.atk.length + data.characters[matchSettings.player.name].sp) + 150)
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
                audios.heal.currentTime = 0
                audios.heal.play()
                if (matchSettings.player.health > document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")) matchSettings.player.hp = document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")
                document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.setProperty("--health", matchSettings.player.health)
                document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
                analyze()
            })
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#getBTP`).addEventListener("click", () => {
                matchSettings.player.points += 9 + data.lvl
                document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
                audios.punkty.currentTime = 0
                audios.punkty.play()
                analyze()
            })
            if (data.characters[matchSettings.player.name].sp) document.querySelector(`div#game.match div[gameplay="player"] div.btns button#sp`).addEventListener("click", () => { starPover("player") })
            document.querySelector(`div#game.match div[gameplay="player"] div.btns button#whiteFlag`).addEventListener("click", () => {
                if (!confirm(checkLanguage(langText.fight.surSure, data.settings.lang))) return
                document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
                
                setTimeout(() => {
                    document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                        <div id="theBigText" style="background: rgba(252, 38, 0, 0.541)">PRZEGRANA<br />(przez poddanie)</div>
                        <button class="loginForm">Wyjdź <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"></button>
                    </div>`

                    matchSettings = {
                        player: {
                            points: 0,
                            name: "",
                            critChance: 100,
                            health: 0,
                            atk: [],
                            spUses: 0
                        },
                        bot: {
                            points: 0,
                            lvl: 0,
                            spHave: false,
                            name: "",
                            critChance: 100,
                            health: 0,
                            atk: [],
                            spUses: 0
                        }
                    }

                    document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                        document.querySelector("div#game.match").style.display = "none"
                        document.querySelector("div#game.match").innerHTML = ""
                        changeVolume(70)
                    })
                }, 1000)
            })
        }, 50 * (matchSettings.player.atk.length + data.characters[matchSettings.player.name].sp) + 200)
    }, 3000)
}

/**
 * Kończy grę i wyświetla zakończenie rundy
 * @param {number} type Typ zakończenia: 0 - wygrana, 1 - przegrana, 2 - przegrana przez poddanie
 */
function endGame(type) {
    showedCheck = false
    document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
    setTimeout(() => {
        if (type == 0) {
            gType = "endScreen"
            var ticketChange = Math.round(Math.random() * 9)
            var xp = Math.round((32 + (0.8 + (data.beta * 0.2)) * Math.random() * Math.pow(classes.indexOf(characters_json[matchSettings.player.name].class)+1, 5) + (classes.indexOf(characters_json[matchSettings.player.name].class) * 7)) / 50)
            var mon = Math.round((matchSettings.player.health / Math.pow(characters_json[matchSettings.player.name].level_up.hp - data.beta * 0.2, data.characters[matchSettings.player.name].lvl)) * (0.9 + matchSettings.moves / 10))
            document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                <div id="theBigText">${checkLanguage(langText.endgameMessages.win, data.settings.lang)}</div>
                <div id="presents">
                    <div class="card">
                        <div class="emoji"><img width="80" height="80" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙" style="margin-top: 12px; border-radius: 0;"></div>
                        <div class="info">${mon}</div>
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

            data.coins += mon
            data.xp += xp
            data.tokens += ticketChange == 1

            save(false).then(() => {
                gBlock = false
                document.querySelector("div#game.match div#runCenter").innerHTML += "<button class=\"loginForm\">" + checkLanguage(langText.btns.leave, data.settings.lang) + " <img class=\"cnsl\" draggable=\"false\" width=\"15\" height=\"15\" src=\"https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png\"></button>"
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
                        <div class="emoji"><img width="80" height="80" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙" style="margin-top: 12px; border-radius: 0;"></div>
                        <div class="info">${mon}</div>
                    </div>
                </div>
            </div>`

            data.coins += mon

            save(false).then(() => {
                gBlock = false
                document.querySelector("div#game.match div#runCenter").innerHTML += "<button class=\"loginForm\">" + checkLanguage(langText.btns.leave, data.settings.lang) + " <img class=\"cnsl\" draggable=\"false\" width=\"15\" height=\"15\" src=\"https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png\"></button>"
                document.querySelector("div#game.match div#runCenter button").addEventListener("click", () => {
                    document.querySelector("div#game.match").style.display = "none"
                    document.querySelector("div#game.match").innerHTML = ""
                    changeVolume(70)
                })
            })
        } else if (type == 2) {
            gType = "endScreen"
            document.querySelector("div#game.match").innerHTML = `<div id="runCenter">
                    <div id="theBigText" style="background: rgba(252, 38, 0, 0.541)">${checkLanguage(langText.endgameMessages.lose, data.settings.lang)}<br />(${checkLanguage(langText.endgameMessages.sur, data.settings.lang)})</div>
                    <button class="loginForm">${checkLanguage(langText.btns.leave, data.settings.lang)} <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"></button>
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
 * @param {boolean} keepMaxHP Warunek, czy maksymalne HP musi pozostać
 * 
 * 
 */
function regenerate(type, keepMaxHP) {
    document.querySelector(`div#game.match div[gameplay="${type}"]`).innerHTML = `<div class="healthBar"><div class="health" style="--health: ${matchSettings[type].health}; --healthMax: ${keepMaxHP ? document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax") : matchSettings[type].health};"></div></div><img ${type == "player" ? data.characters[matchSettings.player.name].sp ? "matchsp" : "" : matchSettings.bot.spHave ? "matchsp" : ""} draggable="false" class="${characters_json[matchSettings[type].name].class}" width="170" height="170" src="${characters_json[matchSettings[type].name].image}" /><span style="font-size: 35%">LVL: ${type == "player" ? data.characters[matchSettings[type].name].lvl : matchSettings.bot.lvl}</span><span class="name">${matchSettings[type].name}</span></div>`
    if (type == "player") {
        document.querySelector(`div#game.match div[gameplay="player"]`).innerHTML += `<div class="btns"></div>`
        for (let i = 0; i < matchSettings.player.atk.length; i++)
            document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button class="atk" style="width: calc(50% - 10px); margin: 5px">${characters_json[matchSettings.player.name].battle[i].name}</button>`
        document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="heal" style="width: 100%; margin: 5px">${checkLanguage(langText.fight.healBTN, data.settings.lang)} (+${Math.pow(2, data.characters[matchSettings.player.name].lvl) * 100} HP, -25 BTP) <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617232355368/sketch-1675498411677.png"></button>`
        document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="whiteFlag" style="width: 100%; margin: 5px">${checkLanguage(langText.fight.surBTN, data.settings.lang)} <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616087302286/sketch-1675498581741.png">x3</button>`
        document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="reset"><button id="getBTP" style="width: 150px; margin: 5px">+${9 + data.lvl} BTP <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616821305344/sketch-1675498411589.png"></button><div>> ${checkLanguage(langText.fight.BTPInfo, data.settings.lang)}: <span id="BTPNumber">${matchSettings[type].points}</span></div></div>`
        if (data.characters[matchSettings.player.name].sp) document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<button id="sp" style="width: 100%; margin: 5px; background: gold">SP - ${characters_json[matchSettings.player.name].sp.name} <img class="cnsl" draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616355749888/sketch-1675498411318.png"></button>`
        document.querySelector(`div#game.match div[gameplay="player"] div.btns`).innerHTML += `<div class="resetAndHide">
        ${checkLanguage(langText.fight.PadInfo, data.settings.lang)}
        </div>`
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
            audios.heal.currentTime = 0
            audios.heal.play()
            if (matchSettings.player.health > document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")) matchSettings.player.hp = document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")
            document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.setProperty("--health", matchSettings.player.health)
            document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
            analyze()
        })
        document.querySelector(`div#game.match div[gameplay="player"] div.btns button#getBTP`).addEventListener("click", () => {
            matchSettings.player.points += 9 + data.lvl
            document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
            audios.punkty.currentTime = 0
            audios.punkty.play()
            analyze()
        })
        if (data.characters[matchSettings.player.name].sp) document.querySelector(`div#game.match div[gameplay="player"] div.btns button#sp`).addEventListener("click", () => { starPover("player") })
        document.querySelector(`div#game.match div[gameplay="player"] div.btns button#whiteFlag`).addEventListener("click", () => {
            if (!confirm("Czy na pewno chcesz się poddać?")) return;
            endGame(2)
        })
    }
}

/**
 * Używa specjalną umiejętność granych postaci za pomocą zmiennej `gameModify`
 * @param {"player" | "bot"} type Typ gracza używającego SP 
 */
function starPover(type = String("player")) {
    if (matchSettings[type].spUses >= characters_json[matchSettings[type].name].sp.maxUses || matchSettings.moves < 10) return;
    if (type == "player") document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
    gBlock = true
    playerSPUser = type
    matchSettings[type].spUses++
    characters_json[matchSettings[type].name].sp.function()

    if (type == "player" && matchSettings.player.spUses >= characters_json[matchSettings.player.name].sp.maxUses) document.querySelector(`div#game.match div[gameplay="player"] div.btns button#sp`).style.opacity = "0.5"
}

/**
 * Atakuje podanego gracza podczas gry
 * @param {"player" | "bot"} type Typ do zaatakowania
 * @param {number} atk Wartość ataku
 * @param {boolean} returns Warunek czy ma zwracać czy nie; przydatne do SP
 * @returns Jeżeli `return` jst ustawione na **`true`**, zwraca kod JSON. `.atk` zwraca wartość ataku, a `.btp` zebrane punkty
 */
function dmg(type = String(), atk = Number(), returns = Boolean(false), ) {
    gCheckedNum.match = -1
    showedCheck = false

    atk = Math.round(atk * (Math.round(Math.random() * 60) / 100 + 0.5))

    var type2 = type == "player" ? "bot" : "player"
    var lvl = type2 == "player" ? data.characters[matchSettings.player.name].lvl : matchSettings.bot.lvl
    var rand = Math.round(Math.random() * 1000) > matchSettings[type].critChance
    var d_btp = Math.log10(atk) * 2 * (1 + 0.001 * data.lvl) * (1 + 0.002 * lvl) * (1 + 0.0001 * String(atk).length)
    if (rand) {
        audios.attack.pause()
        audios.attack.currentTime = 0
        matchSettings[type].health -= atk
        matchSettings[type2].points += Math.round(d_btp)
        audios.attack.play()
    } else {
        d_btp *= 8

        audios.criticalAttack.pause()
        audios.criticalAttack.currentTime = 0
        matchSettings[type].health -= atk * 4
        matchSettings[type2].points += Math.round(d_btp)
        audios.criticalAttack.play()
    }
    if (type2 == "player") document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings[type2].points
    document.querySelector(`div#game.match div[gameplay="${type}"] div.healthBar div.health`).style.setProperty("--health", matchSettings[type].health)

    if (returns) return { atk: atk * (4 - rand * 3), btp: d_btp }

    //console.log(d_btp, type, String(atk).length, atk)
}

function analyze() {
    var spp = false
    gBlock = true
    document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "none"
    if (matchSettings.bot.health <= 0) return endGame(0)
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
                    audios.heal.currentTime = 0
                    audios.heal.play()
                    if (matchSettings.bot.health > document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.getPropertyValue("--healthMax")) matchSettings.bot.health = document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.getPropertyValue("--healthMax")

                    document.querySelector(`div#game.match div[gameplay="bot"] div.healthBar div.health`).style.setProperty("--health", matchSettings.bot.health)
                }
            } else if (action == 2 || action == 3 || action == 4) {
                canskip = true
                matchSettings.bot.points += 10
                audios.punkty.currentTime = 0
                audios.punkty.play()
            } else if (action == 5) {
                if ("sp" in characters_json[matchSettings.bot.name] && matchSettings.bot.spHave && matchSettings.bot.spUses < characters_json[matchSettings.bot.name].sp.maxUses && matchSettings.moves >= 10) {
                    canskip = true
                    spp = true
                    starPover("bot")
                }
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

        if (matchSettings.player.health <= 0) return endGame(1)
        setTimeout(() => {
            matchSettings.moves++;
            document.querySelector(`div#game.match div#movesInfo`).innerText = checkLanguage(langText.fight[`move${matchSettings.moves >= 10}`], data.settings.lang).replace("{num}", matchSettings.moves + 1)

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

/// Akcje konsoli
function gamepadAction () {
    let [gc] = navigator.getGamepads()
    if (frameBlock < 0 && !gBlock) {
        if (gc.buttons[9].pressed) {
            if (gType == "home") {
                createHome()
                if (showedCheck) document.querySelector("div#game.home img.canViewInfo.gChecked").classList.remove("gChecked")
                gType = "homeScreen"
            }
            else if (gType == "match") {
                gWhiteFlag.clicks++
                if (!gWhiteFlag.want) { 
                    gWhiteFlag.want = true 
                    setTimeout(() => {
                        gWhiteFlag.want = false
                        gWhiteFlag.clicks = 0
                    }, 1000)
                }
                else if (gWhiteFlag.clicks >= 3) endGame(2)
            }
        }
        else if (gc.buttons[5].pressed) {
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
        }
        else if (gc.buttons[4].pressed) {
            if (gType == "home") {
                gCheckedNum.home--
                if (gCheckedNum.home < 0) gCheckedNum.home = document.querySelectorAll("div#game.home img.canViewInfo").length-1
                if (showedCheck) document.querySelector("div#game.home img.canViewInfo.gChecked").classList.remove("gChecked")
                document.querySelectorAll("div#game.home img.canViewInfo")[gCheckedNum.home].classList.add("gChecked")
                showedCheck = true
            }
            if (gType == "settings") {
                gCheckedNum.settings--
                if (gCheckedNum.settings < 0) gCheckedNum.settings = document.querySelectorAll("div#info div.o div.set").length-1
                if (showedCheck) document.querySelector("div#info div.o div.gChecked").classList.remove("gChecked")
                document.querySelectorAll("div#info div.o div.set")[gCheckedNum.settings].classList.add("gChecked")
                showedCheck = true
            }
            if (gType == "match") {
                gCheckedNum.match--
                if (gCheckedNum.match < 0) gCheckedNum.match = matchSettings.player.atk.length-1
                if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] button.atk.gChecked`).classList.remove("gChecked")
                document.querySelectorAll(`div#game.match div[gameplay="player"] button.atk`)[gCheckedNum.match].classList.add("gChecked")
                showedCheck = true
            }
        }
        else if (gc.buttons[0].pressed) {
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
        }        
        else if (gc.buttons[1].pressed) {
            if (gType == "charaInfo" || gType == "homeScreen") {
                document.querySelector("div#info").classList.remove("active")
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
                    matchSettings.player.points -= characters_json[matchSettings.player.name].battle[gCheckedNum.match].points
                    dmg("bot", matchSettings.player.atk[gCheckedNum.match])
                    document.querySelector(`div#game.match div[gameplay="player"] div.btns button.atk.gChecked`).classList.remove("gChecked")
                    document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
                    analyze()
                }
            }
        }
        else if (gc.buttons[2].pressed) {
            if (gType == "match") {
                if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] div.btns button.atk.gChecked`).classList.remove("gChecked")
                showedCheck = false
                gCheckedNum.match = -1

                matchSettings.player.points += 9 + data.lvl
                document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
                audios.punkty.currentTime = 0
                audios.punkty.play()
                analyze()
            }
            if (gType == "charaInfo") {
                let name = document.querySelector(`div#info div.o input#nameInfo`).value
                if (data.coins >= 5000 && !data.characters[name].sp) {
                    data.characters[name].sp = true
                    data.coins -= 5000
                    document.querySelector("div#info div.o").innerHTML = "<div class=\"loading small\" style=\"margin: 30px\"></div>"
                    save(false).then(() => {
                        if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
                        audios.punkty.currentTime = 0
                        audios.punkty.play()
                        new miniAlert(checkLanguage(langText.characterInfo.buy.sp, data.settings.lang)).show(2000)
                    })
                }
            }
        }
        else if (gc.buttons[3].pressed) {
            if (gType == "match") {
                if (matchSettings.player.health <= document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax") / 2) {
                    if (matchSettings.player.points >= 25) {
                        matchSettings.player.health += Math.pow(2, data.characters[matchSettings.player.name].lvl) * 100
                        matchSettings.player.points -= 25
                        audios.heal.currentTime = 0
                        audios.heal.play()
                        if (matchSettings.player.health > document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")) matchSettings.player.hp = document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.getPropertyValue("--healthMax")
                        document.querySelector(`div#game.match div[gameplay="player"] div.healthBar div.health`).style.setProperty("--health", matchSettings.player.health)
                        document.querySelector(`div#game.match div[gameplay="player"] div.btns span#BTPNumber`).innerText = matchSettings.player.points
                        
                        if (showedCheck) document.querySelector(`div#game.match div[gameplay="player"] div.btns button.atk.gChecked`).classList.remove("gChecked")
                        showedCheck = false
                        gCheckedNum.match = -1

                        analyze()
                    }
                }
            }
            if (gType == "charaInfo") {
                let name = document.querySelector(`div#info div.o input#nameInfo`).value
                if (data.coins >= 1800 + classes.indexOf(characters_json[name].class) * 200 && data.characters[name].lvl < characters_json[name].max_lvl) {
                    data.characters[name].lvl++
                    data.coins -= 1800 + classes.indexOf(characters_json[name].class) * 200
                    document.querySelector("div#info div.o").innerHTML = "<div class=\"loading small\" style=\"margin: 30px\"></div>"
                    save(false).then(() => {
                        if (document.querySelector("div#info").classList.contains("active")) createCharacterInfo(name)
                        audios.punkty.currentTime = 0
                        audios.punkty.play()
                        new miniAlert(checkLanguage(langText.characterInfo.buy.lvl, data.settings.lang).replace("{charaLVL}", data.characters[name].lvl)).show(4500)
                    })
                }
            }
        }
        else if (gc.buttons[12].pressed) {
            if (gType == "homeScreen") startMatch()
        }
        else if (gc.buttons[13].pressed) {
            if (gType == "homeScreen") createSettings()
        }
        else if (gc.buttons[14].pressed) {
            if (gType == "homeScreen") open_chest()
        }
        else if (gc.buttons[15].pressed) {
            if (gType == "homeScreen") {
                logOut()
                gType = "home"
            }
        }
        if (gc.axes[3] >= 0.2 || gc.axes[3] <= -0.2) {
            if (gType == "charaInfo" || gType == "settings") {
                document.querySelector("div#info div.o").scroll({ top: document.querySelector("div#info div.o").scrollTop + gc.axes[3] * data.settings.scrollSpeed })
            }
        }
        if (gc.axes[2] >= 0.2 || gc.axes[2] <= -0.2) {
            if (showedCheck) if (gType == "settings") {
                console.log(document.querySelectorAll("div#info div.o .settingType")[gCheckedNum.settings].value == "num")
                if (document.querySelectorAll("div#info div.o .settingType")[gCheckedNum.settings].value == "num") {
                    document.querySelectorAll("div#info div.o .setting")[gCheckedNum.settings].value = Number(document.querySelectorAll("div#info div.o .setting")[gCheckedNum.settings].value) + Math.round(gc.axes[2] / module(gc.axes[2]))
                    data.settings[settingsList[gCheckedNum.settings].flag] = Number(document.querySelectorAll("div#info div.o .setting")[gCheckedNum.settings].value)
                    save(false)
                }
            }
        }
        if (gc.buttons[6].pressed && gc.buttons[7].pressed && gc.buttons[8].pressed && !gc.buttons[1].pressed) {
            gType = "home"
            new miniAlert("Zresetowano lokalizację pada do głównego panelu (zbiór postaci). Staraj się przenieść myszką, jeżeli to możliwe.<br />Twardy reset zrobisz podobnie z przyciskiem <img class=\"cnsl\" draggable=\"false\" width=\"15\" height=\"15\" src=\"https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png\">").show(7000)
        }
        if (gc.buttons[6].pressed && gc.buttons[7].pressed && gc.buttons[8].pressed && gc.buttons[1].pressed) {
            document.body.innerHTML = "<div style=\"font-size: 200%; margin: 30px;\">Przygotowanie do twardego resetu...<br /><div class=\"loading\"></div></div>"
            save(false).then(() => { 
                location.reload()
            })
        }
        frameBlock = data.settings.numberOfBlockFrames
    } else {
        frameBlock--
    }

    requestAnimationFrame(gamepadAction);
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

//specjalne zmienne do SP-ów
export var gameModify = {
    getColab: function() {
        return {
            type: playerSPUser, 
            playersLevel() {
                return { player: data.lvl, bot: data.lvl }
            },
            you: {
                hp: {
                    get: function() {
                        return matchSettings[playerSPUser].health
                    },
                    setPrectange: function(prectange, maxHPToo) {
                        prectange = prectange / 100
                        var element = document.querySelector(`div#game.match div[gameplay="${playerSPUser}"] div.healthBar div.health`)

                        var bHealth = matchSettings[playerSPUser].health

                        matchSettings[playerSPUser].health = Math.round(matchSettings[playerSPUser].health * prectange)
                        if (maxHPToo) {
                            element.style.setProperty("--healthMax", Math.round(element.style.getPropertyValue("--healthMax") * prectange))
                        } else if (matchSettings[playerSPUser].health >= element.style.getPropertyValue("--healthMax")) {
                            matchSettings[playerSPUser].health = element.style.getPropertyValue("--healthMax")
                        }

                        element.style.setProperty("--health", matchSettings[playerSPUser].health)

                        return matchSettings[playerSPUser].health - bHealth
                    },
                    setValue: function(value, maxHPToo) {
                        value = Math.round(value)    
                        var element = document.querySelector(`div#game.match div[gameplay="${playerSPUser}"] div.healthBar div.health`)

                        matchSettings.player.health = value
                        if (maxHPToo) {
                            element.style.setProperty("--healthMax", value)
                        } else if (matchSettings[playerSPUser].health >= element.style.getPropertyValue("--healthMax")) {
                            matchSettings[playerSPUser].health = element.style.getPropertyValue("--healthMax")
                        }

                        element.style.setProperty("--health", matchSettings.player.health)
                    },
                    factor: function() {
                        var element = document.querySelector(`div#game.match div[gameplay="${playerSPUser}"] div.healthBar div.health`)
                        return matchSettings[playerSPUser].player / Number(element.style.getPropertyValue("--healthMax"))
                    }
                },
                atk: {
                    getLenght: function() {
                        return matchSettings[playerSPUser].atk.length
                    },
                    getValue: function(id) {
                        if (id == "last") id = matchSettings[playerSPUser].atk.length-1
                        if (id == "random") id = Math.floor(Math.random() * matchSettings[playerSPUser].atk.length)

                        return id == "all" ? matchSettings[playerSPUser].atk : matchSettings[playerSPUser].atk[id]
                    },
                    setPrectange: function(prectange, id) {
                        prectange = prectange / 100

                        if (id == "last") id = matchSettings[playerSPUser].atk.length-1
                        if (id == "random") id = Math.floor(Math.random() * matchSettings[playerSPUser].atk.length)

                        var bATK

                        if (id == "all") {
                            bATK = []

                            for (let i = 0; i < matchSettings[playerSPUser].atk.length; i++) {
                                bATK[i] = matchSettings[playerSPUser].atk[i]
                                matchSettings[playerSPUser].atk[i] = Math.round(matchSettings[playerSPUser].atk[i] * prectange)
                                bATK[i] = matchSettings[playerSPUser].atk[i] - bATK[i]
                            }
                        } else {
                            bATK = matchSettings[playerSPUser].atk[id]
                            matchSettings[playerSPUser].atk[id] = Math.round(matchSettings[playerSPUser].atk[id] * prectange)
                            bATK = matchSettings[playerSPUser].atk[id] - bATK
                        }

                        return bATK
                    },
                    setValue: function(value, id) {
                        value = Math.round(value)

                        if (id == "last") id = matchSettings[playerSPUser].atk.length-1
                        if (id == "random") id = Math.floor(Math.random() * matchSettings[playerSPUser].atk.length)

                        if (id == "all") {
                            for (let i = 0; i < matchSettings[playerSPUser].atk.length; i++) {
                                matchSettings[playerSPUser].atk[i] = value
                            }
                        } else {
                            matchSettings[playerSPUser].atk[id] = value
                        }
                    },
                },
                JSON: {
                    set: function(JSON) {
                        matchSettings[playerSPUser] = JSON

                        regenerate(playerSPUser, false)
                    },
                    change: function(JSON) {
                        let JSON_keys = Object.keys(JSON)

                        for (let i = 0; i < JSON_keys.length; i++) matchSettings[playerSPUser][JSON_keys[i]] = JSON[JSON_keys[i]]
                        regenerate(playerSPUser, true)
                    },
                    get: function(keys = String("")) {
                        var JSONKey = matchSettings[playerSPUser]
                        if (keys != "") {
                            keys = keys.split(".")
                            for (let i = 0; i < keys.length; i++) {
                                JSONKey = JSONKey[keys[i]]
                            }
                        } 

                        return JSONKey
                    }
                },
                getLevel: function() {
                    return playerSPUser == "player" ? data.characters[matchSettings.player.name].lvl : matchSettings.bot.lvl
                }
            },
            enemy: {
                attack: function(value) {
                    return dmg(playerSPUser == "bot" ? "player" : "bot", value, true)
                },
                crit: {
                    change: function(value) {
                        if (value == "random") value = Math.round(Math.random() * 1000)

                        matchSettings[playerSPUser == "bot" ? "player" : "bot"].critChance = value
                    },
                    get: function() {
                        return matchSettings[playerSPUser == "bot" ? "player" : "bot"].critChance
                    }
                },
                name: function() {
                    return matchSettings[playerSPUser == "bot" ? "player" : "bot"].name 
                },
                health: function () {
                    return matchSettings[playerSPUser == "bot" ? "player" : "bot"].health
                }
            },
            endSP: function() {
                if (playerSPUser == "player") analyze()
                if (playerSPUser == "bot") {
                    if (matchSettings.player.health <= 0) return endGame(1)
                    
                    document.querySelector(`div#game.match div[gameplay="player"] div.btns`).style.display = "flex"
                }
            },
            analyzeTheEnd: function() {
                var bl = false
                if (matchSettings.player.health < 0) {
                    endGame(1)
                    bl = true
                }
                else if (matchSettings.bot.health < 0) {
                    endGame(0)
                    bl = true
                }

                return bl
            }
        }
    },
    /**
     * Przede wszystkim dźwięki
     */
    spSounds: audios.sp,
    /**
     * Kalkulacja w grze
     * @param {2 | 1 | 0} type Typ przeliczania: 0 przelicza ataki i życia, 1 - ochronę a 2 - osłabienie
     * @param {Number} value Wartość dla poziomu 1.
     * @param {Number} valuex Mnożnik 
     * @param {Number} lvl Poziom postaci
     * @returns Zwraca liczbę
     */
    calc: function(type, value, valuex, lvl) {
        lvl--
        let calcType = [
            Math.round(value * Math.pow(valuex, lvl)), // hp + ataki
            value + valuex * lvl, // ochrona
            value - valuex * lvl // osłabienie
        ]

        return calcType[type]
    },
    /**
     * Przelicza szansę krytycznego ciosu
     * @param {String} name1 Postać, dla której mają być przeliczana szansa krytycznego ciosu
     * @param {Number} lvl1 Poziom postaci `name1`
     * @param {String} name2 Postać do podstawienia mocy
     * @returns Zwraca liczbę.
     */
    calcCritChance: function(name1, lvl1, name2) {
        let crit = 100
        for (let i = 0; i < characters_json[name2].types.have.length; i++) {
            if ("strong" in characters_json[name1].types) if (characters_json[name1].types.strong.ind.indexOf(characters_json[name2].types.have[i]) > -1) crit -= this.calc(1, characters_json[name1].types.strong.def, characters_json[name1].level_up.types.strong, lvl1) / 100
            if ("weak" in characters_json[name1].types) if (characters_json[name1].types.weak.ind.indexOf(characters_json[name2].types.have[i]) > -1) crit += this.calc(2, characters_json[name1].types.weak.def, characters_json[name1].level_up.types.weak, lvl1) / 100
        }

        return crit
    }
} 

//eksport dodatkowych funkcji
export { gType }