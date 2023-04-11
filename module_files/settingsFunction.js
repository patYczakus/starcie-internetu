export function checkSettings(accual) {
    var checked = 0
    for (let i = 0; i < settingsList.length; i++) if (!(settingsList[i].flag in accual)) { 
        accual[settingsList[i].flag] = settingsList[i].defaultOption;
        checked++
    }

    return { json: accual, notHave: checked != 0 }
}

export var settingsList = [
    {
        flag: "seeOnlyUnlocked",
        defaultOption: false,
        type: "bool",
        description: "Jeżeli jest te ustawienie włączone, pokazuje tylko odblokowane postacie."
    },
    {
        flag: "resetFont",
        defaultOption: false,
        type: "bool",
        description: "Zmienia czcionkę na podstawową (z kategorii sans serif)."
    },
    {
        flag: "playerOn",
        defaultOption: true,
        type: "bool",
        description: "Włącza/wyłącza muzykę w grze. Po ustawieniu należy odświeżyć ponownie stronę, aby zadziałało!"
    },
    {
        flag: "scrollSpeed",
        defaultOption: 10,
        type: "num:3:25",
        description: "Zmienia szybkość scrollowania poprzez Gamepad."
    },
    {
        flag: "numberOfBlockFrames",
        defaultOption: 3,
        type: "num:-1:6",
        description: "Powoduje opóźnienie odpowiedzi Gamepada przez klatki. Najlepsza wartość powinna być ustawiona według szybkości przetwarzania komputera.<br />- ustawienie najniższej wartości spowoduje brak blokady."
    },
]