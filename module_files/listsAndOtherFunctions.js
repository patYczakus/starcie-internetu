import { getSettingData } from "./game.js"

export const chest = [
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "common",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "uncommon",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "rare",
    "epic",
    "epic",
    "epic",
    "epic",
    "epic",
    "epic",
    "epic",
    "epic",
    "legendary",
    "legendary",
    "legendary",
    "legendary",
    "legendary",
    "import",
    "import",
    "import",
    "dark_shop",
    /* Także:
     ** common - 50% szans
     ** uncommon - 20% szans
     ** rare - 13%
     ** epic - 8%
     ** legedary - 5%
     ** import - 3%
     ** dark shop - 1%
     */
]

export const classes = [
    "limited",
    "common", //22
    "uncommon", //20
    "rare", //18
    "epic", //16
    "legendary", //14
    "import", //12
    "dark_shop", //10
]

/**
 * Skraca tekst na miliony i miliardy (LS)/biliony (SS)
 * @param {number} number
 * @param {string} langCode Odpowiedni kod językowy
 * @returns {string}
 */
export function shortNumber(number, langCode = String("--auto")) {
    if (langCode == "--auto") langCode = getSettingData().lang
    var prefixes = {
        million: {
            pl: "mln",
            en: "M",
        },
        milliard: {
            pl: "mld",
            en: "B",
        },
    }

    if (!getSettingData().shorterNumbers) return String(number)
    if (!number) return console.error(new Error("Brak argumentu number"))
    if (isNaN(number) || !isFinite(number)) return console.error(new Error("Argument number jest niepoprawny"))
    if (number >= Math.pow(10, 9)) {
        number = Math.round(number / Math.pow(10, 8)) / 10
        number = `${String(number)}${prefixes.milliard[langCode]}`
    } else if (number >= Math.pow(10, 6)) {
        number = Math.round(number / Math.pow(10, 5)) / 10
        number = `${String(number)}${prefixes.million[langCode]}`
    } else number = String(number)

    return number
}
