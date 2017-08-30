const AddEventsLogin = function() {
    const listener = function(e) {
        e.preventDefault();
        const appEl = document.querySelector('#app');
        appEl.innerHTML = EvaluationsPage();
        AddEventsNavigation();
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', listener);
}
 /*
const VerifyLogin = function() {
    var username = document.getElementById("loginUsername");
    var password = document.getElementById("loginPassword");

    const store = function() {
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
    }

}*/