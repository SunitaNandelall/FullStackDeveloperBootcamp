function validatePassword(password) {
    if (!password) {
        document.getElementById("invalid-password-alert").style.display = "block"
        return
    }

    let score = 0

    if (password.length >= 8) {
        document.getElementById("length-check").innerText = "✅"
        document.getElementById("length-check-container").classList.add("list-group-item-success")
        score++
    } else {
        document.getElementById("length-check").innerText = "⚠️"
        document.getElementById("length-check-container").classList.add("list-group-item-danger")
    }

    let hasLowercaseChar = false
    let hasUppercaseChar = false
    let hasNumber = false
    let hasSpecialChar = false

    for (let i = 0; i < password.length; i++) {
        let char = password[i]
        if (char >= "a" && char <= "z") {
            hasLowercaseChar = true
        }
        if (char >= "A" && char <= "Z") {
            hasUppercaseChar = true
        }
        if (char > "0" && char <= "9") {
            hasNumber = true
        }
        if (char == "$" || char == "@" || char == "#") {
            hasSpecialChar = true
        }
    }

    if (hasLowercaseChar) {
        document.getElementById("lowercase-check").innerText = "✅"
        document.getElementById("lowercase-check-container").classList.add("list-group-item-success")
        score++
    }
    else {
        document.getElementById("lowercase-check").innerText = "⚠️"
        document.getElementById("lowercase-check-container").classList.add("list-group-item-danger")
    }

    if (hasUppercaseChar) {
        document.getElementById("uppercase-check").innerText = "✅"
        document.getElementById("uppercase-check-container").classList.add("list-group-item-success")
        score++
    }
    else {
        document.getElementById("uppercase-check").innerText = "⚠️"
        document.getElementById("uppercase-check-container").classList.add("list-group-item-danger")
    }

    if (hasNumber) {
        document.getElementById("number-check").innerText = "✅"
        document.getElementById("number-check-container").classList.add("list-group-item-success")
        score++
    }
    else {
        document.getElementById("number-check").innerText = "⚠️"
        document.getElementById("number-check-container").classList.add("list-group-item-danger")
    }

    if (hasSpecialChar) {
        document.getElementById("special-char-check").innerText = "✅"
        document.getElementById("special-char-check-container").classList.add("list-group-item-success")
        score++
    }
    else {
        document.getElementById("special-char-check").innerText = "⚠️"
        document.getElementById("special-char-check-container").classList.add("list-group-item-danger")
    }

    const easyPasswords = ["user123", "admin123", "password123", "test123", "12345", "qwerty123"]

    if (!easyPasswords.includes(password)) {
        document.getElementById("no-easy-password-check").innerText = "✅"
        document.getElementById("no-easy-password-container").classList.add("list-group-item-success")
        score++
    }
    else {
        document.getElementById("no-easy-password-check").innerText = "⚠️"
        document.getElementById("no-easy-password-container").classList.add("list-group-item-danger")
    }

    if (score >= 6) {
        document.getElementById("strong-password").style.display = "block"
    } else if (score >= 4) {
        document.getElementById("moderate-password").style.display = "block"
    } else {
        document.getElementById("weak-password").style.display = "block"
    }

}

// const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// let containsDigit = false

// for (let i = 0; i < password.length; i++) {
//     if (digits.includes(password[i])) {
//         console.log("At least one number ✅")
//         containsDigit = true
//         break
//     }
// }


// if (!containsDigit) {
//     console.log("At least one number ⚠️")
// }

const inputPassword = prompt("Enter your password")
console.log(inputPassword)

validatePassword(inputPassword)
// document.getElementById("length-check").innerText = "✅"