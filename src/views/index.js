// IIFE - immediately invoked function expression..
const interview = {};
window.onload = function () {
    const appEl = document.querySelector('#app');
    const isLogged = !!sessionStorage.userLogged;
    isLogged ? interview.loadModule(interview.modules.evaluations) : interview.loadModule(interview.modules.login);
}