let module = null;
//metoda loadModule
interview.loadModule = function(page) {
    if(module) {
        module.destroy();
    }
    module = page;
    module.init();
}
interview.addEventsNavigation = function () {

    let evaluations, newEvaluation, logout;

    const loadEvaluations = function(e) {
        e.preventDefault();
        interview.loadModule(interview.modules.evaluations);
    };
    const loadNewEvaluation = function(e) {
        e.preventDefault();
        interview.loadModule(interview.modules.newEvaluation);
    };
    const loadLogout = function(e) {
        e.preventDefault();
        sessionStorage.removeItem('userLogged');
        interview.loadModule(interview.modules.login);
    };

    const add = function () {
        evaluations = document.getElementById('evaluationsLink');
        newEvaluation = document.getElementById('newEvaluationLink');
        logout = document.getElementById('logoutLink');

        evaluations.addEventListener('click', loadEvaluations);
        newEvaluation.addEventListener('click', loadNewEvaluation);
        logout.addEventListener('click', loadLogout);
    };

    const remove = function () {
        evaluations.removeEventListener('click', loadEvaluations);
        newEvaluation.removeEventListener('click', loadNewEvaluation);
        logout.removeEventListener('click', loadLogout);
    };

    return {add, remove };
};
