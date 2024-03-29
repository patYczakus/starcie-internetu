//imports files required to use
import { auth, createForm } from "./module_files/login.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { start } from "./module_files/game.js"

export const playableRightNow = true
var ft = true

const create = () => {
    onAuthStateChanged(auth, (user) => {
        if (user && playableRightNow) {
            console.log(`[DEBUG/authorization] Użytkownik był wcześniej zalogowany jako "${user.displayName}"`)
            if (ft)
                createForm(
                    true,
                    () => {
                        start(user.uid)
                    },
                    user.displayName
                )
            else start(user.uid)
            ft = false
        } else {
            createForm(false)
        }
    })
}

window.onload = () => {
    document.cookie += "; SameSite=None; Secure; Partitioned"

    window.ptkdevvars = { enableCustomEnemy: false, customEnemyName: "habby" }
    if (location.host == "localhost:5500" || location.host == "127.0.0.1:5500") {
        document.title = "DEWELOPERSKA WERSJA | " + document.title
        console.log("[DEBUG] Starcie Internetu działa na lokalnym hostingu.")
    } else warning()

    window.addEventListener("online", create)
    window.addEventListener("offline", () => {
        document.body.innerHTML = `<div execute="loginForm">Stracono połączenie z internetem! Łączę ponownie...<div class="loading small"></div></div>`
    })
    create()
}

function warning() {
    console.warn(
        "[DEFENDER]\n    <PL> Internet może być złośliwy. Jeżeli ktoś nieznany daje Ci kod do wklejenia tutaj, na 200% kod może Ci wykraść dane, czy nawet włamać się na konto. Korzystaj z DevTools tylko gdy wiesz, co robisz!\n    <EN> The internet can be malicious. If someone unknown gives you a code to paste here, 200% of the code can steal your data or even hack your account. Only use DevTools if you know what you are doing!"
    )
    setTimeout(warning, 60000)
}

export const projectInfo = {
    version: "R#1",
    date: [24, 3, 2024],
}
