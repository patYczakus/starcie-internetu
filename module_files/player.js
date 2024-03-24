import { getSettingData } from "./game.js"

var i = 0,
    played = false,
    firstTime = true,
    volume = 0.7

var playerList = [
    {
        src: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/player/Motyw%20Starcia%20Internetu.mp3"),
        name: "Motyw Starcia Internetu",
        author: "patYczakus",
        licenseInfo: {
            pl: "własności gry",
            en: "For the purposes of the game",
        },
    },
    {
        src: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/player/AfterShock.mp3"),
        name: "AfterShock",
        author: "patYczakus",
    },
    {
        src: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/player/Decormer.mp3"),
        name: "Decormer",
        author: "patYczakus",
    },
    {
        src: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/player/Volcano.mp3"),
        name: "Volcano",
        author: "Jim Yosef & Scarlett",
        licenseInfo: {
            pl: "licencji NCS",
            en: "NCS licence",
        },
    },
    {
        src: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/player/La%20Manera%20De%20Vivir.mp3"),
        name: "La Manera De Vivir",
        author: "NOYSE & ÆSTRØ",
        licenseInfo: {
            pl: "licencji NCS",
            en: "NCS licence",
        },
    },
    {
        src: new Audio("https://patyczakus.github.io/starcie-internetu/others/audios/player/Set%20It%20Free.mp3"),
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
