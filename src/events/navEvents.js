const AddEventsNavigation = function() {
    const evaluations = document.getElementById("evaluationsLink");
    const newEvaluation = document.getElementById("newEvaluationLink");
    const logout = document.getElementById("logoutLink");
    const appEl = document.querySelector('#app');

    const loadEvaluations = function(e) {
        e.preventDefault();
        appEl.innerHTML = EvaluationsPage();
        AddEventsNavigation();
    }
    const loadNewEvaluation = function(e) {
        e.preventDefault();
        appEl.innerHTML = newEvaluationPage();
        AddEventsNavigation();
    }
    const loadLogout = function(e) {
        e.preventDefault();
        appEl.innerHTML = LoginPage();
        AddEventsLogin();
    }

    evaluations.addEventListener('click', loadEvaluations);
    newEvaluation.addEventListener('click', loadNewEvaluation);
    logout.addEventListener('click', loadLogout);
}