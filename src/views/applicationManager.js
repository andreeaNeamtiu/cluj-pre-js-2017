const interview = {};

// find page
page = [];
if (page == 0) {
    page = 'login';
} 
else {
//   destroy(lastPage);
//    init(newPage);
}

//set up the collection of modules that app can use
interview.modules = {
    evaluations: {
        init() {
            const container = document.querySelector('#app');
            //render
            container.innerHTML = interview.evaluationsPage();
            //events
            interview.addEventsNavigation();
        },
    },

    newEvaluation: {
        init() {
            const container = document.querySelector('#app');
            //render
            container.innerHTML = interview.newEvaluationPage();
            //events
            interview.formEventsSetup();
            interview.addEventsNavigation();
        },
    },

    login: {
        init() {
            const container = document.querySelector('#app');
            //render
            container.innerHTML = interview.loginPage();
            //events
            interview.addEventsLogin();
        },
        /*destroy() {
            interview.removeEventsLogin();
        }*/
    }
};
