import { playableRightNow, projectInfo } from "../main.js"
import { app } from "./database.js"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

export var auth = getAuth(app)

export function createForm() {
    if (new URL(location.href).searchParams.get("lang") == "en") {
        var date = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        document.body.innerHTML = `<div id="start">
            <div id="header">
                <span id="title" style="font-size: 32px; margin-right: 25px;"></span>
                <span execute="loginForm"><button class="loginForm">Login (Google)</button></span>
            </div>
            Server support isn't available in your language right now.<br />
            Last update (version <u>${projectInfo.version}</u>) released <u>${date[projectInfo.date[1] - 1]} ${projectInfo.date[0]}, ${projectInfo.date[2]}</u>.
        </div>`
    } else {
        document.body.innerHTML = `<div id="start">
        <div id="header">
            <span id="title" style="font-size: 32px; margin-right: 25px;"></span>
            <span execute="loginForm"><button class="loginForm">Zaloguj się (Google)</button></span>
        </div>
        <i>⚠️ Hi, English person! If you don't understand Polish language, <a href="?lang=en">this link</a> makes the English interface.</i>
        <br /><br />
        Ostatnia aktualizacja (wersja <u>${projectInfo.version}</u>) wydana została <u>${projectInfo.date.join(".")} roku</u><br />
        Inne linki: <br />
        - <a href="./charaList">Lista z postaciami</a><br />
        - <a href="https://www.patreon.com/user/membership?u=102227103" target="_blank">Patreon</a> (jeżeli czujesz, że robię dobrą robotę i chcesz mnie wynagrodzić)<br />
        - <a href="https://discord.gg/7S3P2DUwAm" target="_blank">Serwer support gry</a> i nie tylko<br />
        <br />
        <iframe src="https://discord.com/widget?id=1173722642004574359&theme=dark" width="350" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>`
    }

    document.querySelector('div#start div#header span[execute="loginForm"] button.loginForm').addEventListener("click", loading)

    if (!playableRightNow) {
        var x
        switch (new URL(location.href).searchParams.get("lang")) {
            case "en":
                x = "✋ This game is being builded!"
                break
            default:
                x = "✋ Ta gra jest jeszcze w fazie tworzenia!"
        }
        document.querySelector('div#start div#header span[execute="loginForm"]').innerHTML = x
    }
}

function loading() {
    document.querySelector('div#start div#header span[execute="loginForm"]').innerHTML = `<div class="loading small"></div>`
    setTimeout(() => {
        console.log("[DEBUG] Logowanie się...")
        signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
            console.log("[DEBUG] ${error}")
            if (new URL(location.href).searchParams.get("lang") == "en")
                document.querySelector('div#start div#header span[execute="loginForm"]').innerHTML = `<button class="loginForm">Login (Google)</button>`
            else document.querySelector('div#start div#header span[execute="loginForm"]').innerHTML = `<button class="loginForm">Zaloguj się (Google)</button>`
            document.querySelector('div#start div#header span[execute="loginForm"] button.loginForm').addEventListener("click", loading)
        })
    }, 500)
}

export function logOut() {
    signOut(auth).then(() => {
        location.reload()
    })
}
