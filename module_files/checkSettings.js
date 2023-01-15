export function checkSettings(accual) {
    var checked = 0
    if (!("resetFont" in accual)) { 
        accual.resetFont = false;
        checked++
    }

    return { json: accual, notHave: checked != 0 }
}