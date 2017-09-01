const AddEventsNavigation = function() {
    const evaluations = document.getElementById("evaluationsLink");
    const newEvaluation = document.getElementById("newEvaluationLink");
    const logout = document.getElementById("logoutLink");

    const loadEvaluations = function(e) {
        e.preventDefault();
        navigate("evaluations");
    }
    const loadNewEvaluation = function(e) {
        e.preventDefault();
        navigate("newEvaluation");
    }
    const loadLogout = function(e) {
        e.preventDefault();
        sessionStorage.removeItem("userLogged");
        navigate("login");
    }
    evaluations.addEventListener('click', loadEvaluations);
    newEvaluation.addEventListener('click', loadNewEvaluation);
    logout.addEventListener('click', loadLogout);
}