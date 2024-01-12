//imports files required to use
import { auth, createForm } from "./module_files/login.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { start } from "./module_files/game.js"

export const playableRightNow = true

const create = () => {
    onAuthStateChanged(auth, (user) => {
        if (user && playableRightNow) {
            console.log(`[DEBUG/authorization] Użytkownik był wcześniej zalogowany jako "${user.displayName}"`)
            document.body.innerHTML = `<div class="loading" style="margin: 50px"></div><div class="info" style="margin: 15px; font-size: 120%"></div>`
            start(user.uid)
        } else {
            createForm()
        }
    })
}

window.onload = () => {
    if (location.host == "localhost:5500") {
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
    version: "1.5.3",
    date: [12, 1, 2024],
}
