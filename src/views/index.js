function LoginPage(options={}) {
    const divContent = document.querySelector('#app');
    const addPage = function addPage(add) {
        return `
        
        `;
    }
    divContent.addEventListener('load', addPage)
    return ``;
}

const evaluationsLink = document.querySelector('#evaluationsLink');
const newEvaluationLink = document.querySelector('#newEvaluationLink');
evaluationLink.preventDefault();
newEvaluationsLink.preventDefault();

const evaluationPageListener = function listener() {
    //adaugare continut pt evaluation.html
    document.getElementById("app").innerHTML = "<script type = "text/javascript" src = "src/views/evaluations/evaluations.js"></script>
	<script type = "text/javascript" src = "src/views/common/common.js"></script>";
}
const evaluationsListPageListener = function listener() {
    //adaugare continut pt newEvaluation.html
    document.getElementById("app").innerHTML = "<script type = "text/javascript" src = "src/views/new-evaluation/new-evaluation.js"></script>
    <script type = "text/javascript" src = "src/views/common/common.js"></script>";
}

evaluationsLink.addEventListener('click', evaluationPageListener);
newEvaluationLink.addEventListener('click', evaluationsListPageListener);


window.onload = function () {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = LoginPage();
};