const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin"); 

btnSingin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Ici il faudra appeler l'API pour vérifier les credentials en BDD

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        // Il faudra récupérer le vrai token
        const token = "fakeToken1234567890";
        setToken(token); // Fonction pour stocker le token dans un cookie
        // Placer ce token en cookie

        setCookie(RoleCookieName, "client", 7);
        // Redirection vers la page d'accueil
        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

