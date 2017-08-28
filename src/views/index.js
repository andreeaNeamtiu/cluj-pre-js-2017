function LoginPage(options={}) {
    const divContent = document.querySelector('#app');
    const addPage = function addPage(add) {
        return `
        
        `;
    }
    divContent.addEventListener('load', addPage)
    return ``;
}

const evaluationLink = document.querySelector('#evaluations');
const newEvaluationsLink = document.querySelector('#newEvaluation');
evaluationLink.preventDefault();
newEvaluationsLink.preventDefault();

const listenerPage1 = function listener() {
    //adaugare continut pt evaluation.html
    document.getElementById("app").innerHTML = "<script type = "text/javascript" src = "src/views/evaluations/evaluations.js"></script>
	<script type = "text/javascript" src = "src/views/common/common.js"></script>"
}
const listenerPage2 = function listener() {
    //adaugare continut pt newEvaluation.html
    document.getElementById("app").innerHTML = "<script type = "text/javascript" src = "src/views/new-evaluation/new-evaluation.js"></script>
    <script type = "text/javascript" src = "src/views/common/common.js"></script>"
}

evaluationLink.addEventListener('click', listenerPage1);
newEvaluationsLink.addEventListener('click', listenerPage2);


window.onload = function () {
    const appEl = document.querySelector('#app');
    appEl.innerHTML = LoginPage();
};