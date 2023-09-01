//imports files required to use
import { auth, createForm } from "./module_files/login.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { start } from "./module_files/game.js"

const create = () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            createForm()
        } else {
            document.body.innerHTML = `<div class="loading" style="margin: 50px"></div><div class="info" style="margin: 15px; font-size: 120%"></div>`
            start(user.uid)
        }
    })
}

window.onload = () => {
    if (location.host == "localhost:5500")
        document.title = "DEWELOPERSKA WERSJA | " + document.title

    window.addEventListener("online", create)
    window.addEventListener("offline", () => {
        document.body.innerHTML = `<div execute="loginForm">Stracono połączenie z internetem! Łączę ponownie...<div class="loading small"></div></div>`
    })
    create()
}
