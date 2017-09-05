interview.AddEventsLogin = function () {
    // sessionStorage for Login credentials
    const verifyLogin = function (e) {
        e.preventDefault();

        const usernameLogin = document.getElementById('loginUsername').value;
        const passwordLogin = document.getElementById('loginPassword').value;

        if (usernameLogin === 'a' && passwordLogin === 'a') {
            sessionStorage.userLogged = 'Andreea';
            firstPage();
        } else {
            alert('Wrong username or password');
        }
    };

    const firstPage = function () {
        const appEl = document.querySelector('#app');
        appEl.innerHTML = interview.EvaluationsPage();
        interview.AddEventsNavigation();
    };

    const form = document.querySelector('form');
    form.addEventListener('submit', verifyLogin);
};

/* problems:
limited number of credentials
localStorage */
