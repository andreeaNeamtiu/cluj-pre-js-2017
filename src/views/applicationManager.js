const interview = {};
interview.navigate = function(page) {
    const appEl = document.querySelector('#app');
    switch (page) {
    case 'evaluations':
        appEl.innerHTML = interview.EvaluationsPage();
        interview.AddEventsNavigation();
        //evaluationsEvents();
        break;

    case 'newEvaluation':
        appEl.innerHTML = interview.newEvaluationPage();
        interview.formEventsSetup();
        interview.AddEventsNavigation();
        break;

    case 'login':
        appEl.innerHTML = interview.LoginPage();
        interview.AddEventsLogin();
        break;

    default: 
    }
}
