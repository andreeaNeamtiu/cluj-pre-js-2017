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