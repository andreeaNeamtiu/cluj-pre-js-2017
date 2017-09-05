interview.AddEventsNavigation = function () {
    const evaluations = document.getElementById('evaluationsLink');
    const newEvaluation = document.getElementById('newEvaluationLink');
    const logout = document.getElementById('logoutLink');

    const loadEvaluations = function (e) {
        e.preventDefault();
        interview.modules.moduleEvaluations.init()
    };
    const loadNewEvaluation = function (e) {
        e.preventDefault();
        interview.modules.moduleNewEvaluation.init()
    };
    const loadLogout = function (e) {
        e.preventDefault();
        sessionStorage.removeItem('userLogged');
        interview.modules.moduleLogin.init()
    };
    evaluations.addEventListener('click', loadEvaluations);
    newEvaluation.addEventListener('click', loadNewEvaluation);
    logout.addEventListener('click', loadLogout);
};
