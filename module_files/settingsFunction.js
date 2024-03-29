export function checkSettings(accual) {
    var checked = 0
    var newJson = {}
    for (let i = 0; i < settingsList.length; i++)
        if (settingsList[i].flag in accual) {
            newJson[settingsList[i].flag] = accual[settingsList[i].flag]
        } else {
            newJson[settingsList[i].flag] = settingsList[i].defaultOption
            checked++
        }

    return { json: newJson, notHave: checked != 0 }
}

export var settingsList = [
    {
        flag: "lang",
        defaultOption: x(),
        type: `option:Polski (Polski / Polish)=pl:English (Angielski / English)=en`,
        description: {
            pl: "[ PL ] Zmienia język gry.<br />[ EN ] Changes the game's language.",
        },
    },
    {
        flag: "forcedLang",
        defaultOption: false,
        type: `bool`,
        description: {
            pl: "Wymusza tłumaczenie reszty interfejsu na wybrany język.",
            en: "Forces translation of the rest of the interface into the chosen language.",
        },
    },
    {
        flag: "seeOnlyUnlocked",
        defaultOption: false,
        type: "bool",
        description: {
            pl: "Jeżeli jest te ustawienie włączone, pokazuje tylko odblokowane postacie.",
            en: "If this setting is on, it only shows unlocked characters.",
        },
    },
    {
        flag: "resetFont",
        defaultOption: false,
        type: "bool",
        description: {
            pl: "Zmienia czcionkę na podstawową (z kategorii sans serif).",
            en: "Changes the font to basic (from the sans serif category).",
        },
    },
    {
        flag: "musicPlayerOn",
        defaultOption: true,
        type: "bool",
        description: {
            pl: "Włącza/wyłącza muzykę w grze. Po ustawieniu należy odświeżyć ponownie stronę, aby zadziałało!",
            en: "Turns on/off the music in the game. Once set, refresh the page again for it to work!",
        },
    },
    {
        flag: "musicPlayerAlwaysPlaying",
        defaultOption: false,
        type: "bool",
        description: {
            pl: "Muzyka w grze jest grana niezależnie od przejścia na inną stronę lub zminimalizowania przeglądarki.",
            en: "In-game music is always playing independently of the game in focus.",
        },
    },
    {
        flag: "scrollSpeed",
        defaultOption: 10,
        type: "num:5:50:5",
        description: {
            pl: "Zmienia szybkość scrollowania poprzez Gamepad.",
            en: "Changes scrolling speed via Gamepad.",
        },
    },
    {
        flag: "numberOfBlockFrames",
        defaultOption: 3,
        type: "num:-1:6:1",
        description: {
            pl: "Powoduje opóźnienie odpowiedzi Gamepada przez klatki. Najlepsza wartość powinna być ustawiona według szybkości przetwarzania komputera.<br />- ustawienie najniższej wartości spowoduje brak blokady.",
            en: "Causes a delay in the Gamepad's response by frames. The best value should be set according to the processing speed of your computer.<br />- setting the lowest value will result in no locking.",
        },
    },
    {
        flag: "shorterNumbers",
        defaultOption: true,
        type: "bool",
        description: {
            pl: "Ustawienie pokazujące skróconą wersję liczb. Gdy wyłączone, pokazuje dokładną wartość.",
            en: "Setting showing short version of numbers. If off, shows detailed value.",
        },
    },
    {
        flag: "stepByStep",
        defaultOption: false,
        type: "bool",
        description: {
            pl: "Precyzyjniej steruje paskiem przewijania w ustawieniach przez Gamepad.",
            en: "More precise control of the scroll bar in the settings with Gamepad.",
        },
    },
    {
        flag: "useGamepad",
        defaultOption: true,
        type: "bool",
        description: {
            pl: "Włącza możliwość grania Gamepadem.",
            en: "Turn on Gamepad in this game.",
        },
    },
]

function x() {
    var a = new URL(location.href).searchParams.get("lang")

    if (a == null) return "pl"

    var b = ["pl", "en"]
    if (b.indexOf(a) > -1) b = a
    else b = "pl"

    return b
}
