//imports files required to use
import { auth, createForm } from "./module_files/login.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { start } from "./module_files/game.js"

const create = () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) { createForm() }
        else { 
            start(user.uid)
            document.body.innerHTML = `<div execute="loginForm"><div class="loading"></div></div>`
        }
    })
}

window.onload = () => {
    window.addEventListener("online", create)
    window.addEventListener("offline", () => {
        document.body.innerHTML = `<div execute="loginForm">Stracono połączenie z internetem! Łączę ponownie...<div class="loading small"></div></div>`
    })
    create()
}