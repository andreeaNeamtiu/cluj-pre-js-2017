window.onload = function () {
    const appEl = document.querySelector('#app');
    const isLogged = !!sessionStorage.userLogged;
    if (!isLogged) {
        interview.navigate("login");
    }
    else {
        interview.navigate("evaluations");
    }
}()