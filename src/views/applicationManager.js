function navigate(page) {
    const appEl = document.querySelector('#app');
    switch(page) {

        case 'evaluations':
        appEl.innerHTML = EvaluationsPage();
        AddEventsNavigation();
        break;

        case 'newEvaluation':
        appEl.innerHTML = newEvaluationPage();
        formEventsSetup();
        AddEventsNavigation();;
        break;

        case 'login':
        appEl.innerHTML = LoginPage();
        AddEventsLogin();
        break;
    }
}