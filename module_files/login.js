import { app } from "./database.js"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

export var auth = getAuth(app)

export function createForm() {
    document.body.innerHTML = `<div id="start">
        <div id="header">
            <span id="title" style="font-size: 32px; margin-right: 25px;"></span>
            <span execute="loginForm"><button class="loginForm">Zaloguj się przez Google</button></span>
        </div>
        <iframe src="./ogloszenia.html"></iframe>
    </div>`

    document.querySelector("div#start div#header span[execute=\"loginForm\"] button.loginForm").addEventListener("click", loading)
}

function loading() {
    document.querySelector("div#start div#header span[execute=\"loginForm\"]").innerHTML = `<div class="loading small"></div>`
    setTimeout(() => {
        signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
            console.error(error)
            document.querySelector("div#start div#header span[execute=\"loginForm\"]").innerHTML = `<button class="loginForm">Zaloguj się przez Google</button>`
            document.querySelector("div#start div#header span[execute=\"loginForm\"] button.loginForm").addEventListener("click", loading)
        })
    }, 500)
}

export function logOut() {
    signOut(auth).then(() => { location.reload() })
}
