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
/*
 // factory pattern
(function() {
    window.dataStorage = new LocalStorageWrapper();

    const Manager = new setup();
    const isLogged = function() {
        return !!wondow.dataStorage.get('userData');
    }

    const build = function() {
        const component = Manager.app({
            isLogged: isLogged()
        });

        appEl.innerHTML = component.view.markup;
        if (component.setupEvents !== undefined) {
            component.setupEvents.initEvents(build);
        }
    }
    build();
}) ();*/