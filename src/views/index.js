// IIFE - immediately invoked function expression
window.onload = function () {
    const appEl = document.querySelector('#app');
    const isLogged = !!sessionStorage.userLogged;
    interview.navigate(isLogged ? 'evaluations' : 'login');
}()