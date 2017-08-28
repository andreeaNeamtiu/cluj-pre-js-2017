const Footer = function() {
    return `
    <footer class = "footerContent">
        <p>Copyright@Softvision 2017</p>
    </footer>
    `;
}

const NAV = function(option={}) {
    return `
    <nav>
    <img class = "logoPicture" src = "./assets/logo.jpg">
    <a id = "evaluations" href = "evaluations.html">Evaluations</a>
    <a id = "newEvaluation" href = "newEvaluation.html">New Evaluation</a>
    <a id = "logout" href = "logout.html">Logout</a>
    </nav>
    `;
}