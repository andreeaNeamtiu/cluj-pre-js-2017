interview.eventsLogin = function () {
    const firstPage = function () {
        interview.modules.evaluations.init();
    };

    // sessionStorage for Login credentials
    const verifyLogin = function (e) {
        e.preventDefault();
        const usernameLogin = document.getElementById('loginUsername').value;
        const passwordLogin = document.getElementById('loginPassword').value;

        if (usernameLogin === 'a' && passwordLogin === 'a') {
            sessionStorage.userLogged = 'Andreea';
            firstPage();
        }
        else {
            alert('Wrong username or password');
        }
    };
    let form;

    const add = function () {
        form = document.querySelector('form');
        form.addEventListener('submit', verifyLogin);
    };

    const remove = function () {
        form.removeEventListener('submit', verifyLogin);
    };

    return {add, remove };
};

/* problems:
limited number of credentials
localStorage 
refresh: page new evaluation*/
