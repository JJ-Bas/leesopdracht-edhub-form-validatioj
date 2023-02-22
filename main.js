//un pw//


const nameInput = document.getElementById("un")

nameInput.addEventListener("keyup", getName)

function getName(e) {
    nameWarning = document.getElementById("warning")
    const nameCheck = e.target.value
    if (nameCheck.includes("@")) {
        return nameWarning.textContent = `gebruikersnaam kan geen @ bevatten!`
    } else {
        return nameWarning.textContent = ``
    }
}

const passwordInput = document.getElementById("pw")

passwordInput.addEventListener("keyup", passwordCheck)

function passwordCheck(e) {
    const passwordWarning = document.getElementById("small-pw")
    const lenghtCheck = e.target.value
    if (lenghtCheck.length < 6) {
        return passwordWarning.textContent = "Wachtwoord is te kort, gebruik minimaal 6 tekens"
    } else {
        return passwordWarning.textContent = ""
    }
}

