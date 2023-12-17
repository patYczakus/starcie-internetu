import { getSettingData } from "./game.js"

var i = 0,
    played = false,
    firstTime = true,
    volume = 0.7

var playerList = [
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1070699659007381535/Motyw_Starcia_Internetu.mp3"),
        name: "Motyw Starcia Internetu",
        author: "patYczakus",
        licenseInfo: {
            pl: "własności gry",
            en: "For the purposes of the game",
        },
    },
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1070709574321053756/AfterShock.mp3"),
        name: "AfterShock",
        author: "patYczakus",
    },
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1070710254561669222/Decormer.mp3"),
        name: "Decormer",
        author: "patYczakus",
    },
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1071111638142427176/Jim_Yosef_-_Volcano_feat._Scarlett_NCS_Release_320_kbps.mp3"),
        name: "Volcano",
        author: "Jim Yosef & Scarlett",
        licenseInfo: {
            pl: "licencji NCS",
            en: "NCS licence",
        },
    },
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1071111640948408460/NOYSE__STR_-_La_Manera_De_Vivir_NCS_Release_320_kbps.mp3"),
        name: "La Manera De Vivir",
        author: "NOYSE & ÆSTRØ",
        licenseInfo: {
            pl: "licencji NCS",
            en: "NCS licence",
        },
    },
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1119282617091637248/John_Dee_Litil_Elle_Vee_-_Set_It_Free_Arcade_Release.mp3"),
        name: "Set It Free",
        author: "John Dee, Litil & Elle Vee",
        licenseInfo: {
            pl: "licencji NCS",
            en: "NCS licence",
        },
    },
]

export function playSound(random = String(true)) {
    setTimeout(() => {
        if (firstTime && random) {
            firstTime = false
            i = Math.floor(Math.random() * playerList.length)
        }
        playerList[i].src.muted = !played
        playerList[i].src.volume = volume
        if (playerList[i].src.currentTime > 0) played = true
        if (playerList[i].src.currentTime >= playerList[i].src.duration - 0.1) {
            playerList[i].src.pause()
            playerList[i].src.currentTime = 0
            i = (i + 1) % playerList.length
            played = false
        } else if (playerList[i].src.paused) {
            if (document.hasFocus()) {
                playerList[i].src.play().catch(() => {})
            }
        }

        if (!getSettingData().musicPlayerAlwaysPlaying && !document.hasFocus()) playerList[i].src.pause()

        playSound(false)
    }, 100)
}

export function whatIsPlayed(lang) {
    var langText = {
        true: {
            pl: `Teraz grane: <u>${playerList[i].name}</u>
            <br />- autorstwa <u>${playerList[i].author.replace(" & ", " oraz ")}</u>
            ${"licenseInfo" in playerList[i] ? `<br />- na podstawie ${playerList[i].licenseInfo[lang]}` : ""}`,
            en: `Now playing: <u>${playerList[i].name}</u>
            <br />- made by <u>${playerList[i].author.replace(" & ", " and ")}</u>
            ${"licenseInfo" in playerList[i] ? `<br />- ${playerList[i].licenseInfo[lang]}` : ""}`,
        },
        false: {
            pl: "Nic nie jest grane teraz...",
            en: "Nothing is playing right now...",
        },
    }

    return langText[String(played)][lang]
}

export function changeVolume(vol = Number(100)) {
    volume = vol / 100
}

export function skipMusic() {
    playerList[i].src.currentTime = playerList[i].src.duration
}
