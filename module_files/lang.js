import { interfaceImages } from "./otherImages.js"

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
            <ul>
                <u>Wymiar</u> 
                <li>{ch_dim}</li><br small />
                <u>HP</u>
                <li>{ch_hp}</li><br small />
                <u>Atrybuty</u>
                {ch_attr}<br small />
                <u>Moce</u>
                <li>Posiadające<div style="font-size: 75%">{ch_powers.have}</div></li>
                <li>Odporne na:{ch_powers.strong}</li>
                <li>Osłabione na:{ch_powers.weak}</li>
            </ul><br />
            <u>Ataki</u>
            <div style="overflow-x: scroll"> 
            <table><tbody>{ch_atk}</tbody></table>
            </div>
            <br /><hr style="height: 5px; width: calc(100% - 35px);" />
            <span style="display: block; font-size: 150%; padding: 25px 0">Gwiezdna moc (SP)<br />{ch_sp_name}</span>
            {starpover_bulid}<br />
            {upgradeBTN}
            <br /><button id="playThisCharacter" style="font-size:120%">Zagraj tą postacią!</button>`,
            en: `<span style="display: block; font-size: 200%; padding: 25px 0">{ch_name}<br />(LVL {ch_lvl}/{ch_lvl.max})</span>
            {ch_desc}<br />
            <ul>
                <u>Dimension</u> {ch_dim}<br small />
                <u>HP</u> {ch_hp}<br small />
                <u>Attributes</u>
                {ch_attr}<br small />
                <u>Powers</u>
                <li>Having<div style="font-size: 75%">{ch_powers.have}</div></li>
                <li>Resistant to:{ch_powers.strong}</li>
                <li>Weakened at:{ch_powers.weak}</li>
            </ul><br />
            <u>Attacks</u>
            <div style="overflow-x: scroll"> 
            <table><tbody>{ch_atk}</tbody></table>
            </div>
            <br /><hr style="height: 5px; width: calc(100% - 35px);" />
            <span style="display: block; font-size: 150%; padding: 25px 0">Star Power (SP)<br />{ch_sp_name}</span>
            {starpover_bulid}<br /><br />
            {upgradeBTN}
            <br /><button id="playThisCharacter" style="font-size:120%">Play this character!</button>`,
        },
        nosp: {
            pl: `Aby zobaczyć opis i ilość użyć na mecz, musisz zakupić za 5000<img width="15" height="15" draggable="false" src="${interfaceImages.money}" alt="🪙"><br />
            <button id="buySP">Kup SP <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_Kwadrat_X}"></button>`,
            en: `To see the description and number of uses per match, you must purchase for 5000<img width="15" height="15" draggable="false" src="${interfaceImages.money}" alt="🪙"><br />
            <button id="buySP">Buy SP <img draggable="false" width="15" height="15" src="${interfaceImages.Gamepad_Kwadrat_X}"></button>`,
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
        tags: {
            sochr: {
                pl: "<b>Startowa ochrona</b> - początkowa szansa krytyczna jest zmniejszona do połowy.",
                en: "<b>Start protection</b> - the initial critical chance is reduced to half.",
            },
            toks: {
                pl: "<b>Toksyna</b> - każdy atak w przeciwnika powoduje dla niego truciznę zadająca 5% wartości ataku przez 2 rundy.",
                en: "<b>Toxin</b> - each attack on an opponent causes a special effect on the opponent inflicting 5% of the attack value for 2 rounds.",
            },
            btpwa: {
                pl: "<b>Odszkodowanie wojenne</b> - każde uderzenie od przeciwnika powoduje dodanie BTP (20% z BTP dla przeciwnika).",
                en: "<b>War compensation</b> - each hit from an opponent adds BTP (20% from BTP for the opponent).",
            },
            atkback: {
                pl: "<b>Sprzężenie zwrotne</b> - każdy atak od przeciwnika powoduje oddanie dla niego 8% wartości ataku.",
                en: "<b>Return message</b> - each attack from an opponent results in 8% of the attack value being given back to the opponent.",
            },
            double: {
                pl: "<b>Atk x2</b> - każdy atak postaci zostaje podwojony.",
                en: "<b>Atk x2</b> - each character attack doubles up.",
            },
            ahealth: {
                pl: "<b>Większe racje leczeniowe</b> - leczenie w podstawie ma +200 HP.",
                en: "<b>Greater healing rations</b> - healing in the base has +200 HP.",
            },
            tanker: {
                pl: "<b>Korzenie tanka</b> - wartość HP ma w grze wartość 230%, a ataki 30%.",
                en: "<b>Family tree of Tanks</b> - HP value is 230% in the game and attacks are 30%.",
            },
            stormbtp: {
                pl: "<b>Konwersja energii</b> - BTP zostaje dodane podczas kontaktu z uderzeniem od jądra Internetu.",
                en: "<b>Energy convert</b> - BTP is added during contact with the blow from the Internet core.",
            },
            time: {
                pl: "<b>Wzmożona aktywność</b> - BTP jest dodawane z czasem.",
                en: "<b><i>CharaActive</i></b> - BTP is added gradually.",
            },
        },
    },
    infoOnCharaList: {
        pl: `<img draggable="false" class="cnsl" width="30" height="30" src="${interfaceImages.Gamepad_LB}"> - wybieranie postaci w lewo; <img class="cnsl" draggable="false" width="30" height="30" src="${interfaceImages.Gamepad_RB}"> - wybieranie postaci w prawo; <img draggable="false" class="cnsl" width="30" height="30" src="${interfaceImages.Gamepad_X_A}"> - potwierdzenie wyboru.`,
        en: `<img draggable="false" class="cnsl" width="30" height="30" src="${interfaceImages.Gamepad_LB}"> - selecting characters to the left; <img class="cnsl" draggable="false" width="30" height="30" src="${interfaceImages.Gamepad_RB}"> - selecting characters to the right; <img draggable="false" class="cnsl" width="30" height="30" src="${interfaceImages.Gamepad_X_A}"> - confirmation of choice.`,
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
        noMoney: {
            pl: "Brak posiadanych środków! Skrzynka kosztuje 1200{moneyImg}",
            en: "You haven't enough money to buy this item. You must have 1000{moneyImg}",
        },
        core: {
            pl: "Wylosowano: {charaName}",
            en: "{charaName} has been drafted!",
        },
        msgIfHave: {
            ifMaxLvl: {
                pl: `W ramach posiadania dostajesz {mon}<img class="cnsl" width="13" height="13" draggable="false" src="${interfaceImages.money}" alt="🪙"> oraz +{xp}xp do twojego konta.`,
                en: `As part of the owning you get {mon}<img class="cnsl" width="13" height="13" draggable="false" src="${interfaceImages.money}" alt="🪙"> and +{xp}xp to your account.`,
            },
            ifNotMaxLvl: {
                pl: `W ramach posiadania dostajesz {mon}<img class="cnsl" width="13" height="13" draggable="false" src="${interfaceImages.money}" alt="🪙"> oraz poziom wyżej postaci.`,
                en: `As part of the owning you get {mon}<img class="cnsl" width="13" height="13" draggable="false" src="${interfaceImages.money}" alt="🪙"> and a level up of the character.`,
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
            pl: `<img class="cnsl" draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_LB}"> - wybieranie ataku w lewo<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_RB}"> - wybieranie ataku w prawo<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_O_B}"> - potwierdzenie wybranego ataku`,
            en: `<img class="cnsl" draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_LB}"> - selecting an attack to the left<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_RB}"> - selecting an attack to the right<br />
            <img class="cnsl" draggable="false" width="20" height="20" src="${interfaceImages.Gamepad_O_B}"> - confirming a selected attack`,
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
