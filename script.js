let array = [];

for (let i = 0; i < 10; i++) {
    let randomNummer;

    do {
        randomNummer =Math.floor(Math.random() * 100) + 1;
    } while (array.includes(randomNummer));

    array.push(randomNummer);
}

// Skriv ut
console.log("Osor­ter­er­ad array:", array);

// soretera array
array.sort((a, b) => a - b);

// skriv ut
console.log("Sor­ter­er­ad array:", array);



function validateForm() {
    // hämtar värden från formuläret
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var termsChecked = document.getElementById("terms").checked;

    // validering
    if (password.length < 6) {
        alert("Lösenordet måste vara minst 6 tecken långt.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Lösenorden matchar inte.");
        return false;
    }

    //email validering kollar så att det finns ett @ i mailen
    if (email.indexOf('@') === -1) {
        alert("Ange en giltig e-postadress.");
        return false;
    }

    if (!termsChecked) {
        alert("Du måste godkänna villkoren.");
        return false;
    }

    // Om allt är korrekt, skicka användaren till en ny sida
    alert("Tack för registreringen!");
  

    //annars return false
    return false;
}
