const AddEventsLogin = function() {
    //sessionStorage for Login credentials
    const verifyLogin = function(e) {
        e.preventDefault();

        var usernameLogin = document.getElementById("loginUsername").value;
        var passwordLogin = document.getElementById("loginPassword").value;

            if ("a" === usernameLogin && "a" === passwordLogin) {
                sessionStorage.userLogged = "Andreea";
                firstPage();
            }
            else {
                alert('Wrong username or password');
            }
    }

    const firstPage = function() {
        const appEl = document.querySelector('#app');
        appEl.innerHTML = EvaluationsPage();
        AddEventsNavigation();
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', verifyLogin);
}

/*problems:
limited number of credentials
localStorage*/