import { app } from "./database.js"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

export var auth = getAuth(app)

export function createForm() {
    if (new URL(location.href).searchParams.get("lang") == "en") {
        document.body.innerHTML = `<div id="start">
            <div id="header">
                <span id="title" style="font-size: 32px; margin-right: 25px;"></span>
                <span execute="loginForm"><button class="loginForm">Login (Google)</button></span>
            </div>
            <div id="ann">
                Announcements isn't supported in your language right now.
                <a href="#">Show anyway</a><br /><br />
                Last update (version <u>1.1</u>) released <u>29 June 2023</u>.
            </div>
        </div>`
        document.querySelector("div#start div#ann a").addEventListener("click", () => {
            document.querySelector("div#start div#ann").innerHTML = `<iframe class="reset" src="./ogloszenia.html"></iframe>`
        })
    } else document.body.innerHTML = `<div id="start">
        <div id="header">
            <span id="title" style="font-size: 32px; margin-right: 25px;"></span>
            <span execute="loginForm"><button class="loginForm">Zaloguj się (Google)</button></span>
        </div>
        ⚠️ Hi, English person! If you don't understand Polish language, <a href="?lang=en">this link</a> makes the English interface, without announcement and other things.
        <iframe class="reset" src="./ogloszenia.html"></iframe>
    </div>`

    document.querySelector("div#start div#header span[execute=\"loginForm\"] button.loginForm").addEventListener("click", loading)
}

function loading() {
    document.querySelector("div#start div#header span[execute=\"loginForm\"]").innerHTML = `<div class="loading small"></div>`
    setTimeout(() => {
        signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
            console.error(error)
            if (new URL(location.href).searchParams.get("lang") == "en") document.querySelector("div#start div#header span[execute=\"loginForm\"]").innerHTML = `<button class="loginForm">Login (Google)</button>`
            else document.querySelector("div#start div#header span[execute=\"loginForm\"]").innerHTML = `<button class="loginForm">Zaloguj się (Google)</button>`
            document.querySelector("div#start div#header span[execute=\"loginForm\"] button.loginForm").addEventListener("click", loading)
        })
    }, 500)
}

export function logOut() {
    signOut(auth).then(() => { location.reload() })
}