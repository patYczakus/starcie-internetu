export var langText = {
    btns: {
        leave: {
            pl: "Wyjdź",
            en: "Leave",
        },
        back: {
            pl: "Powrót",
            en: "Back",
        },
    },
    home: {
        startFight: {
            pl: "Walcz",
            en: "Fight",
        },
        openChest: {
            general: {
                pl: "Otwórz skrzynię",
                en: "Open chest",
            },
            isFree: {
                pl: "FREE",
            },
        },
        setting: {
            pl: "Ustawienia",
            en: "Settings",
        },
        logout: {
            pl: "Wyloguj",
            en: "Logout",
        },
        idt: {
            pl: "Odkryj",
            en: "Show",
        },
    },
    characterInfo: {
        core: {
            pl: `<span style="display: block; font-size: 200%; padding: 25px 0">{ch_name}<br />(LVL {ch_lvl}/{ch_lvl.max})</span>
            {ch_desc}<br />
            <u>Wymiar</u> {ch_dim}<br />
            <u>HP</u> {ch_hp}
            <ul><u>Moce</u>
                <li>Posiadające<div style="font-size: 75%">{ch_powers.have}</div></li>
                <li>Odporne na:{ch_powers.strong}</li>
                <li>Osłabione na:{ch_powers.weak}</li>
            </ul><br />
            <u>Ataki</u>
            <table><tbody>{ch_atk}</tbody></table>
            <br /><hr style="height: 5px; width: calc(100% - 35px);" />
            <span style="display: block; font-size: 150%; padding: 25px 0">Gwiezdna moc (SP)<br />{ch_sp_name}</span>
            {starpover_bulid}<br />
            {upgradeBTN}`,
            en: `<span style="display: block; font-size: 200%; padding: 25px 0">{ch_name}<br />(LVL {ch_lvl}/{ch_lvl.max})</span>
            {ch_desc}<br />
            <u>Dimension</u> {ch_dim}<br />
            <u>HP</u> {ch_hp}
            <ul><u>Powers</u>
                <li>Having<div style="font-size: 75%">{ch_powers.have}</div></li>
                <li>Resistant to:{ch_powers.strong}</li>
                <li>Weakened at:{ch_powers.weak}</li>
            </ul><br />
            <u>Attacks</u>
            <table><tbody>{ch_atk}</tbody></table>
            <br /><hr style="height: 5px; width: calc(100% - 35px);" />
            <span style="display: block; font-size: 150%; padding: 25px 0">Star Power (SP)<br />{ch_sp_name}</span>
            {starpover_bulid}<br /><br />
            {upgradeBTN}`,
        },
        nosp: {
            pl: `Aby zobaczyć opis i ilość użyć na mecz, musisz zakupić za 5000<img width="15" height="15" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙"><br />
            <button id="buySP">Kup SP <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616821305344/sketch-1675498411589.png"></button>`,
            en: `To see the description and number of uses per match, you must purchase for 5000<img width="15" height="15" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙"><br />
            <button id="buySP">Buy SP <img draggable="false" width="15" height="15" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616821305344/sketch-1675498411589.png"></button>`,
        },
        nopow: {
            pl: "brak",
            en: "none",
        },
        mu: {
            pl: "Użyć na mecz:",
            en: "Uses per match:",
        },
        buy: {
            sp: {
                pl: "Zakupiono!",
                en: "Bought!",
            },
            lvl: {
                pl: "Ulepszono postać na poziom {charaLVL}!",
                en: "Upgraded character to {charaLVL} level!",
            },
            noenought: {
                pl: "Nie stać Cię!",
                en: "You aren't having enought money right now!",
            },
        },
        upg: {
            pl: "Ulepsz",
            en: "Upgrade",
        },
        maxlvl: {
            pl: "Wbito maksymalny poziom; spowoduje to premię <u>+{xfl}xp</u> do twojego konta po wylosowaniu go ze skrzyni.",
            en: "The maximum level has been hit; this will result in a <u>+{xfl}xp</u> bonus to your account when drawn from the chest.",
        },
    },
    infoOnCharaList: {
        pl: `<img draggable="false" class="cnsl" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616599015474/sketch-1675498411474.png"> - wybieranie postaci w lewo; <img class="cnsl" draggable="false" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343655958347847/sketch-1675498411799.png"> - wybieranie postaci w prawo; <img draggable="false" class="cnsl" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616355749888/sketch-1675498411318.png"> - potwierdzenie wyboru.`,
        en: `<img draggable="false" class="cnsl" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616599015474/sketch-1675498411474.png"> - selecting characters to the left; <img class="cnsl" draggable="false" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343655958347847/sketch-1675498411799.png"> - selecting characters to the right; <img draggable="false" class="cnsl" width="30" height="30" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616355749888/sketch-1675498411318.png"> - confirmation of choice.`,
    },
    powers: {
        Ogień: {
            pl: "Ogień",
            en: "Fire",
        },
        Woda: {
            pl: "Woda",
            en: "Water",
        },
        Ziemia: {
            pl: "Ziemia",
            en: "Earth",
        },
        Powietrze: {
            pl: "Powietrze",
            en: "Air",
        },
        Informatyka: {
            pl: "Informatyka",
            en: "IT",
        },
        Metal: {
            pl: "Metal",
            en: "Metallic",
        },
        Elektryczność: {
            pl: "Ekeltryczność",
            en: "Electricity",
        },
        Chi: {
            pl: "Chi",
        },
        Lód: {
            pl: "Lód",
            en: "Ice",
        },
        Trucizna: {
            pl: "Trucizna",
            en: "Poison",
        },
        Galaktyka: {
            pl: "Galaktyka",
            en: "Galaxy",
        },
        Duchoznactwo: {
            pl: "Duchoznactwo",
            en: "Spirituality",
        },
    },
    chest: {
        core: {
            pl: "Wylosowano: {charaName}",
            en: "{charaName} has been drafted!",
        },
        msgIfHave: {
            ifMaxLvl: {
                pl: 'W ramach posiadania dostajesz {mon}<img class="cnsl" width="13" height="13" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙"> oraz +{xp}xp do twojego konta.',
                en: 'As part of the owning you get {mon}<img class="cnsl" width="13" height="13" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙"> and +{xp}xp to your account.',
            },
            ifNotMaxLvl: {
                pl: 'W ramach posiadania dostajesz {mon}<img class="cnsl" width="13" height="13" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙"> oraz poziom wyżej postaci.',
                en: 'As part of the owning you get {mon}<img class="cnsl" width="13" height="13" draggable="false" src="https://cdn.discordapp.com/attachments/1047919900875825293/1078345031812911275/ezgif.com-gif-maker.gif" alt="🪙"> and a level up of the character.',
            },
        },
    },
    fight: {
        healBTN: {
            pl: "Lecz się",
            en: "Heal",
        },
        surBTN: {
            pl: "Poddaj się",
            en: "Surrender",
        },
        BTPInfo: {
            pl: "masz",
            en: "you have",
        },
        PadInfo: {
            pl: `<img class="cnsl" draggable="false" width="20" height="20" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616599015474/sketch-1675498411474.png"> - wybieranie ataku w lewo<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343655958347847/sketch-1675498411799.png"> - wybieranie ataku w prawo<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"> - potwierdzenie wybranego ataku`,
            en: `<img class="cnsl" draggable="false" width="20" height="20" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343616599015474/sketch-1675498411474.png"> - selecting an attack to the left<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343655958347847/sketch-1675498411799.png"> - selecting an attack to the right<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="https://cdn.discordapp.com/attachments/1047919900875825293/1071343617031032852/sketch-1675498411625.png"> - confirming a selected attack`,
        },
        movefalse: {
            pl: `Ruch #{num} (nie można jeszcze używać SP)`,
            en: `Move #{num} (you can't still use SP)`,
        },
        movetrue: {
            pl: `Ruch #{num} (można już używać SP)`,
            en: `Move #{num} (you can now use SP)`,
        },
        surSure: {
            pl: "Jesteś pewien poddania?",
            en: "Are you sure to surrender?",
        },
    },
    endgameMessages: {
        win: {
            pl: "WYGRANA!",
            en: "WIN!",
        },
        lose: {
            pl: "PRZEGERANA!",
            en: "LOSE!",
        },
        sur: {
            pl: "przez poddanie",
            en: "by surrender",
        },
    },
    setting: {
        slength: {
            pl: "Znalezionych ustawień:",
            en: "Settings found:",
        },
    },
}
