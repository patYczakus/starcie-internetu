import { playableRightNow, projectInfo } from "../main.js"
import { app } from "./database.js"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

export var auth = getAuth(app)

function loading() {
    document.querySelector('span[execute="loginForm"]').innerHTML = `<div class="loading small"></div>`
    setTimeout(() => {
        console.log("[DEBUG] Logowanie się...")
        signInWithPopup(auth, new GoogleAuthProvider()).catch((error) => {
            console.log(`[DEBUG] ${error}`)
            switch (new URL(location.href).searchParams.get("lang")) {
                case "en":
                    document.querySelector('span[execute="loginForm"]').innerHTML = `<button class="loginForm">Login (Google)</button>`
                    break
                default:
                    document.querySelector('span[execute="loginForm"]').innerHTML = `<button class="loginForm">Zaloguj się (Google)</button>`
            }
            document.querySelector('span[execute="loginForm"] button.loginForm').addEventListener("click", loading)
        })
    }, 500)
}

export function createForm(useOtherFunct = false, func = () => {}, name = "") {
    switch (new URL(location.href).searchParams.get("lang")) {
        case "en":
            var date = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

            document.getElementById("s23c").innerHTML = `Hello user! You are just in the rehabilitation version <u>${projectInfo.version}</u> released <u><u>${
                date[projectInfo.date[1] - 1]
            } ${projectInfo.date[0]}, ${projectInfo.date[2]}</u></u>. You can play it by clicking on the <i>${
                useOtherFunct ? "Play" : "Login"
            }</i> button. Please note that the game may be disabled while doing the second edition!<br /><br />
            <span execute="loginForm"><button class="loginForm">${useOtherFunct ? "Play" : "Login (Google)"}</button> ${
                useOtherFunct ? `Logged as <i>${name}</i>. Isn't your account? <a style="color: blue;">Log out here</a>` : ""
            }</span><br />`
            break
        default:
            document.getElementById("s23c").innerHTML = `
            <i>⚠️ Hi, English person! If you don't understand Polish language, <a href="?lang=en">this link</a> makes the English interface.</i><br /><br />
            Cześć użytkowniku! Właśnie jesteś w wersji rehabilitowej <u>${projectInfo.version}</u> wydanej <u>${projectInfo.date
                .map((x) => (x < 10 ? "0" + x : x))
                .join(".")} roku</u>. Możesz w nią zagrać klikając w przycisk <i>${
                useOtherFunct ? "Zagraj" : "Zaloguj się"
            }</i>. Pamiętaj, że gra podczas robienia edycji drugiej może być wyłączona!
            <br /><a href="./charaList">Lista z postaciami</a> | <a href="https://www.patreon.com/user/membership?u=102227103" target="_blank">Patreon</a> | <a href="https://discord.gg/7S3P2DUwAm" target="_blank">Serwer support gry</a> i nie tylko<br /><br />
            <span execute="loginForm"><button class="loginForm">${useOtherFunct ? "Zagraj" : "Zaloguj się (Google)"}</button> ${
                useOtherFunct ? `Zalogowany jako <i>${name}</i>. To nie Ty? <a style="color: blue;">Wyloguj się</a>` : ""
            }</span><br />`
    }

    document.querySelector('span[execute="loginForm"] button.loginForm').addEventListener("click", () => {
        if (!useOtherFunct) loading()
        else func()
    })
    if (document.querySelector('span[execute="loginForm"] a') !== null) document.querySelector('span[execute="loginForm"] a').addEventListener("click", logOut)

    if (!playableRightNow) {
        var x
        switch (new URL(location.href).searchParams.get("lang")) {
            case "en":
                x = "✋ This game is being builded!"
                break
            default:
                x = "✋ Ta gra jest jeszcze w fazie tworzenia!"
        }
        document.querySelector('span[execute="loginForm"]').innerHTML = x
    }
}

export function logOut() {
    signOut(auth).then(() => {
        location.reload()
    })
}
