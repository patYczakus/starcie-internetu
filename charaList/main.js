import { charaList } from "../module_files/characters.js"
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js"
import * as _jk from "https://patyczakus.github.io/javakit/module.js"
import { app } from "../module_files/database.js"
const JK = _jk.default

window.onload = () => {
    JK.HTMLFunctions.loadImages(Object.values(charaList).map((x) => x.image)).then(() => {
        var __root__ = document.createElement("div")
        var __navi__ = document.createElement("div")
        document.body.innerHTML = ""
        var info = document.createElement("div")
        info.innerHTML =
            "Ilość postaci: {{charaCount.*}} ({{charaCount.common}}/{{charaCount.uncommon}}/{{charaCount.rare}}/{{charaCount.epic}}/{{charaCount.legendary}}/{{charaCount.import}}/{{charaCount.dark_shop}})".replace(
                /{{charaCount\.(\w+|\*)}}/g,
                (match, arg) => {
                    switch (arg) {
                        case "*": {
                            return `<span class="classNameColor">${Object.keys(charaList).length}</span>`
                        }
                        default: {
                            return `<span class="classNameColor ${arg}">${Object.values(charaList).filter((info) => info.class === arg).length}</span>`
                        }
                    }
                }
            )
        __navi__.appendChild(info)
        Object.keys(charaList).forEach((characterName, i) => {
            var characterInfo = charaList[characterName]
            //<hr />
            var hr = document.createElement("hr")

            //nazwa postaci + zdjęcie + szybkie info
            var characterRoot = document.createElement("p")
            characterRoot.id = `CH:${characterName}`
            var characterHeader = document.createElement("span")
            var characterNameHTML = document.createElement("span")
            var characterImage = document.createElement("img")
            var characterML = document.createElement("span")

            //zdjęcie
            var anch = document.createElement("a")
            characterImage.src = characterInfo.image
            characterImage.height = 80
            characterImage.width = 80
            characterImage.style.border = "3px solid black"
            characterImage.style.borderRadius = "7px"

            anch.appendChild(characterImage)
            anch.href = characterInfo.image
            anch.target = "_blank"
            characterHeader.appendChild(anch)

            //nazwa
            characterNameHTML.style.fontSize = "30px"
            characterNameHTML.innerText += ` ${characterName} `
            characterHeader.appendChild(characterNameHTML)

            //szybkie info
            characterML.style.fontSize = "15px"
            characterML.innerHTML = `z wymiaru <u>${characterInfo.dimension}</u> | Maksymalny poziom postaci: ${characterInfo.max_lvl} | Klasa rzadkości: `
            var charaDim = document.createElement("span")
            charaDim.innerText = characterInfo.class
            charaDim.className = `classNameColor ${characterInfo.class}`
            characterML.appendChild(charaDim)
            characterHeader.appendChild(characterML)

            //opis postaci
            var characterDescription = document.createElement("div")
            Object.keys(characterInfo.description).forEach((desc) => {
                var descInLang = document.createElement("div")
                descInLang.innerHTML = `<u>[ ${desc.toUpperCase()} ]</u> ${characterInfo.description[desc]}`
                characterDescription.appendChild(descInLang)
            })

            //SP
            var sp = document.createElement("div")
            var charactersSPName = document.createElement("div")
            charactersSPName.style.fontSize = "120%"
            charactersSPName.style.marginTop = "15px"
            charactersSPName.innerText = `SP - ${
                typeof characterInfo.sp.name == "object" ? `${characterInfo.sp.name.pl} (+${Object.keys(characterInfo.sp.name).length - 1} języków)` : characterInfo.sp.name
            } (użyć na mecz: ${characterInfo.sp.maxUses})`
            var charactersSPDescription = document.createElement("div")
            Object.keys(characterInfo.sp.description).forEach((desc) => {
                var descInLang = document.createElement("div")
                descInLang.innerHTML = `<u>[ ${desc.toUpperCase()} ]</u> ${characterInfo.sp.description[desc]}`
                charactersSPDescription.appendChild(descInLang)
            })
            sp.appendChild(charactersSPName)
            sp.appendChild(charactersSPDescription)

            characterRoot.appendChild(characterHeader)
            characterRoot.appendChild(hr)
            characterRoot.appendChild(characterDescription)
            characterRoot.appendChild(sp)
            __root__.appendChild(characterRoot)

            var charaLink = document.createElement("a")
            var br = document.createElement("span")
            br.style.width = "30px"
            br.style.display = "inline-block"
            if ((i + 1) % 4 === 0) br = document.createElement("br")
            charaLink.href = `#CH:${characterName}`
            charaLink.innerText = `> ${characterName}`
            charaLink.style.color = `black`
            charaLink.style.fontSize = `120%`
            __navi__.appendChild(charaLink)
            __navi__.appendChild(br)
        })

        document.body.appendChild(__navi__)
        document.body.appendChild(__root__)

        get(ref(getDatabase(app), `starcie-internetu/followersApiInfo`)).then((snpsht) => {
            document.body.innerHTML = document.body.innerHTML
                .replace(/{{desc\.db\.(\w+)}}/g, (match, arg) => snpsht.val()[arg])
                .replace(/{{charaName\.([\węółżźćń]+)}}|{{charaName\.([\węółżźćń]+)\|([^{}|]+)}}/g, (match, arg1, arg2, arg3) => {
                    if (arg1) {
                        return Object.keys(charaList).includes(arg1)
                            ? `<span class="classNameColor ${charaList[arg1].class}" style="font-size: 100%; --fbs: 0.5px">${arg1}</span>`
                            : `<span class="classNameColor" style="font-size: 100%; --fbs: 1px">${arg1}</span>`
                    } else {
                        return Object.keys(charaList).includes(arg2)
                            ? `<span class="classNameColor ${charaList[arg2].class}" style="font-size: 100%; --fbs: 0.5px">${arg3}</span>`
                            : `<span class="classNameColor" style="font-size: 100%; --fbs: 1px">${arg3}</span>`
                    }
                })
        })

        setTimeout(() => {
            if (location.hash !== "" && location.hash !== "#") {
                var x = location.hash
                location.hash = "#"
                setTimeout(() => {
                    location.hash = x
                }, 100)
            }
        }, 300)
    })
    document.body.style.padding = "5px"
    document.body.innerHTML = "Czekaj, ładuję zdjęcia..."
}
