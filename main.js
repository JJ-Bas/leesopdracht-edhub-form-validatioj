//un pw//


const nameInput = document.getElementById("un")

nameInput.addEventListener("keyup", getName)

nameWarning = document.getElementById("warning")

function getName(e) {
    let passwordCheck = e.target.value
    if (passwordCheck.includes("@")) {
        console.log("No!!!")
        return nameWarning.textContent = `gebruikersnaam kan geen @ bevatten!`
    } else {
        return nameWarning.textContent = ``
    }
}


