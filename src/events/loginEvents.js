const AddEventsLogin = function() {
    const listener = function(e) {
        e.preventDefault();
        const appEl = document.querySelector('#app');
        appEl.innerHTML = EvaluationsPage();
        AddEventsNavigation();
    }

    let form = document.querySelector('form');
    form.addEventListener('submit', verifyLogin);

//sessionStorage for Login credentials
const verifyLogin = function(e) {
    e.preventDefault();
    sessionStorage.setItem("name", "andreea");
    var usernameData = sessionStorage.getItem("name");
    var passwordData = sessionStorage.getItem("andreea");

    var username = document.getElementById("loginUsername");
    var password = document.getElementById("loginPassword");

    let arr = [];
    if(sessionStorage.length !== 0) {
        arr = JSON.parse(sessionStorage.getItem("userData"));
        if (userData.key === usernameData && userData.data === passwordData) {
            listener();
        }
        alert('Wrong username or password');
    }
    sessionStorage.setItem("userData", JSON.stringify(arr));
}
}