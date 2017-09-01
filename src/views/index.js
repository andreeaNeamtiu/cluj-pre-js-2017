window.onload = function () {
    const appEl = document.querySelector('#app');
    const isLogged = !!sessionStorage.userLogged;
    if (!isLogged) {
    appEl.innerHTML = LoginPage();
    AddEventsLogin();
    }
    else {
        appEl.innerHTML = EvaluationsPage();
        AddEventsNavigation();
    }
}