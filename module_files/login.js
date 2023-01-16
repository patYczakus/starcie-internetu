import { app } from "./database.js"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

export var auth = getAuth(app)

export function createForm() {
    document.body.innerHTML = `<div execute="loginForm"><button class="loginForm">Zaloguj się przez Google</button>BETA 0.2</div>`

    document.querySelector("div[execute=\"loginForm\"] button.loginForm").addEventListener("click", loading)
}

function loading() {
    document.body.innerHTML = `<div execute="loginForm"><div class="loading big"></div></div>`
    setTimeout(() => {
        signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
            console.error(error)
            document.body.innerHTML = `<div execute="loginForm">Logowanie się nie powiodło, spróbuj ponownie...<button class="loginForm">Zaloguj się przez Google</button></div>`
            document.querySelector("div[execute=\"loginForm\"] button.loginForm").addEventListener("click", loading)
        })
    }, 500)
}

export function logOut() {
    signOut(auth).then(() => { location.reload() })
}