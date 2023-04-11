var i = 0,
    played = false,
    firstTime = true,
    volume = 0.7

var playerList = [
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1070699659007381535/Motyw_Starcia_Internetu.mp3"),
        name: "Motyw Starcia Internetu",
        author: "patYczakus",
        licenseInfo: "własności gry"
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
        author: "Jim Yosef oraz Scarlett",
        licenseInfo: "licencji NCS"
    },
    {
        src: new Audio("https://cdn.discordapp.com/attachments/1047919900875825293/1071111640948408460/NOYSE__STR_-_La_Manera_De_Vivir_NCS_Release_320_kbps.mp3"),
        name: "La Manera De Vivir",
        author: "NOYSE oraz ÆSTRØ",
        licenseInfo: "licencji NCS"
    },
]

export function playSound(random = String(true)) {
    setTimeout(() => {
        if (firstTime && random) {
            firstTime = false
            i = Math.floor(Math.random() * playerList.length)
        }
        playerList[i].src.volume = volume
        played = true
        if (playerList[i].src.currentTime >= playerList[i].src.duration-0.1) {
            playerList[i].src.pause()
            playerList[i].src.currentTime = 0
            i++
            i = i % playerList.length 
        }
        else if (playerList[i].src.paused) playerList[i].src.play()
        playSound(false)
    }, 100)
}

export function whatIsPlayed() {
    return played ? `Teraz grane: <u>${playerList[i].name}</u><br />autorstwa <u>${playerList[i].author}</u>${"licenseInfo" in playerList[i] ? `<br />na podstawie ${playerList[i].licenseInfo}` : ""}` : "Nic nie jest grane teraz..."
}

export function changeVolume(vol = Number(100)) {
    volume = vol / 100
}